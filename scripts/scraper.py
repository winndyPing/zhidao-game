#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
careerDirections 数据采集/生成脚本

用途：
1. 从 scripts/data/career_sources.json 读取职业方向、技能、资源配置
2. 可选抓取资源页面标题，补全资源元数据
3. 生成标准化 JSON 和 TS 文件

说明：
- quizs 默认不自动抓取，建议人工维护或模板生成后审核
- 默认输出到 scripts/data/generated，不直接覆盖业务文件
"""

import argparse
import json
import os
import re
import sys

try:
    from html import unescape
except ImportError:
    try:
        import HTMLParser
        _html_parser = HTMLParser.HTMLParser()

        def unescape(value):
            return _html_parser.unescape(value)
    except ImportError:
        def unescape(value):
            return value

try:
    from urllib.request import Request, urlopen
    from urllib.error import HTTPError, URLError
    from urllib.parse import urlparse
except ImportError:
    from urllib2 import Request, urlopen, HTTPError, URLError
    from urlparse import urlparse


ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCRIPTS_DIR = os.path.join(ROOT_DIR, "scripts")
DATA_DIR = os.path.join(SCRIPTS_DIR, "data")
GENERATED_DIR = os.path.join(DATA_DIR, "generated")
DEFAULT_SOURCE_FILE = os.path.join(DATA_DIR, "career_sources.json")
DEFAULT_JSON_OUTPUT = os.path.join(GENERATED_DIR, "careerDirections.generated.json")
DEFAULT_TS_OUTPUT = os.path.join(GENERATED_DIR, "careerDirections.generated.ts")


def ensure_stdout_utf8():
    os.environ["PYTHONIOENCODING"] = "utf-8"
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    if hasattr(sys.stderr, "reconfigure"):
        sys.stderr.reconfigure(encoding="utf-8")


def to_unicode(value):
    if isinstance(value, unicode):
        return value
    return value.decode("utf-8")


def fs_to_unicode(value):
    if isinstance(value, unicode):
        return value

    encoding = sys.getfilesystemencoding() or "utf-8"
    try:
        return value.decode(encoding)
    except Exception:
        return value.decode("utf-8", "ignore")


def read_json(path):
    with open(path, "r") as file_obj:
        return json.load(file_obj)


def write_text(path, content):
    parent = os.path.dirname(path)
    if parent and not os.path.exists(parent):
        os.makedirs(parent)

    with open(path, "w") as file_obj:
        if isinstance(content, unicode):
            file_obj.write(content.encode("utf-8"))
        else:
            file_obj.write(content)


def guess_charset(headers, body):
    charset = None
    if headers:
        get_content_charset = getattr(headers, "get_content_charset", None)
        if callable(get_content_charset):
            charset = get_content_charset()

    if charset:
        return charset

    meta_match = re.search(br"charset=['\"]?([a-zA-Z0-9_\-]+)", body[:2048], re.IGNORECASE)
    if meta_match:
        return meta_match.group(1).decode("ascii", "ignore")

    return "utf-8"


def extract_html_title(html):
    match = re.search(r"<title[^>]*>(.*?)</title>", html, re.IGNORECASE | re.DOTALL)
    if not match:
        return None

    title = unescape(match.group(1))
    title = re.sub(r"\s+", " ", title).strip()
    return title or None


def fetch_title(url, timeout):
    request = Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (compatible; careerDirections-bot/1.0)",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        },
    )

    try:
        response = urlopen(request, timeout=timeout)
        try:
            body = response.read()
            headers = getattr(response, "headers", None)
            if headers is None and hasattr(response, "info"):
                headers = response.info()
            charset = guess_charset(headers, body)
            html = body.decode(charset, "replace")
            return extract_html_title(html), None
        finally:
            response.close()
    except HTTPError as error:
        return None, "HTTP {0}".format(error.code)
    except URLError as error:
        return None, str(getattr(error, "reason", error))
    except Exception as error:
        return None, str(error)


def infer_domain(url):
    return urlparse(url).netloc.lower()


class ValidationIssue(object):
    def __init__(self, path, message):
        self.path = path
        self.message = message


def validate_source_config(config):
    issues = []
    careers = config.get("careers")

    if not isinstance(careers, list) or not careers:
        return [ValidationIssue("careers", "必须是非空数组")]

    seen_career_ids = set()
    seen_skill_ids = set()

    for career_index, career in enumerate(careers):
        career_path = "careers[{0}]".format(career_index)
        career_id = career.get("id")

        if not career_id:
            issues.append(ValidationIssue(career_path + ".id", "不能为空"))
        elif career_id in seen_career_ids:
            issues.append(ValidationIssue(career_path + ".id", "重复 id: {0}".format(career_id)))
        else:
            seen_career_ids.add(career_id)

        if not isinstance(career.get("skills"), list) or not career["skills"]:
            issues.append(ValidationIssue(career_path + ".skills", "必须是非空数组"))
            continue

        for skill_index, skill in enumerate(career["skills"]):
            skill_path = "{0}.skills[{1}]".format(career_path, skill_index)
            skill_id = skill.get("id")

            if not skill_id:
                issues.append(ValidationIssue(skill_path + ".id", "不能为空"))
            elif skill_id in seen_skill_ids:
                issues.append(ValidationIssue(skill_path + ".id", "全局重复 skill id: {0}".format(skill_id)))
            else:
                seen_skill_ids.add(skill_id)

            resources = skill.get("resources", [])
            if not isinstance(resources, list):
                issues.append(ValidationIssue(skill_path + ".resources", "必须是数组"))
                continue

            for resource_index, resource in enumerate(resources):
                resource_path = "{0}.resources[{1}]".format(skill_path, resource_index)
                if not resource.get("url"):
                    issues.append(ValidationIssue(resource_path + ".url", "不能为空"))
                if not resource.get("type"):
                    issues.append(ValidationIssue(resource_path + ".type", "不能为空"))

    return issues


def normalize_resource(resource, fetch_remote_title, timeout):
    normalized = {
        "name": resource.get("title") or resource.get("name") or "",
        "url": resource["url"],
        "type": resource["type"],
    }

    metadata = {}
    domain = infer_domain(resource["url"])
    if domain:
        metadata["domain"] = domain

    if fetch_remote_title:
        remote_title, fetch_error = fetch_title(resource["url"], timeout)
        if remote_title:
            metadata["fetchedTitle"] = remote_title
            if not normalized["name"]:
                normalized["name"] = remote_title
        elif fetch_error:
            metadata["fetchError"] = fetch_error

    if metadata:
        normalized["_meta"] = metadata

    if not normalized["name"]:
        normalized["name"] = domain or resource["url"]

    return normalized


def build_career_directions(config, fetch_remote_title, timeout):
    result = []

    for career in config["careers"]:
        normalized_career = {
            "id": career["id"],
            "name": career["name"],
            "icon": career.get("icon", "💼"),
            "category": career["category"],
            "description": career["description"],
            "skills": [],
        }

        for skill in career["skills"]:
            normalized_skill = {
                "id": skill["id"],
                "name": skill["name"],
                "icon": skill.get("icon", "📘"),
                "description": skill["description"],
                "priority": skill.get("priority", "important"),
                "quizs": skill.get("quizs", []),
                "resources": [],
            }

            for resource in skill.get("resources", []):
                normalized_skill["resources"].append(
                    normalize_resource(resource, fetch_remote_title, timeout)
                )

            normalized_career["skills"].append(normalized_skill)

        result.append(normalized_career)

    return result


def strip_meta(obj):
    if isinstance(obj, list):
        return [strip_meta(item) for item in obj]

    if isinstance(obj, dict):
        clean = {}
        for key, value in obj.items():
            if key == "_meta":
                continue
            clean[key] = strip_meta(value)
        return clean

    return obj


def to_ts_module(career_directions):
    payload = json.dumps(strip_meta(career_directions), ensure_ascii=False, indent=2)
    if not isinstance(payload, unicode):
        payload = payload.decode("utf-8")

    return (
        u"import type { CareerDirection } from '@/types/game';\n\n"
        u"// 由 scripts/scraper.py 自动生成，请优先修改 scripts/data/career_sources.json\n"
        u"export const careerDirections: CareerDirection[] = " + payload + u";\n"
    )


def parse_args():
    parser = argparse.ArgumentParser(description="采集/生成 careerDirections 数据")
    parser.add_argument("--source", default=DEFAULT_SOURCE_FILE, help="源配置文件路径")
    parser.add_argument("--out-json", default=DEFAULT_JSON_OUTPUT, help="输出 JSON 路径")
    parser.add_argument("--out-ts", default=DEFAULT_TS_OUTPUT, help="输出 TS 路径")
    parser.add_argument("--validate-only", action="store_true", help="仅校验配置，不生成文件")
    parser.add_argument("--fetch-titles", action="store_true", help="尝试抓取网页标题作为资源元数据")
    parser.add_argument("--skip-ts", action="store_true", help="只生成 JSON，不生成 TS")
    parser.add_argument("--timeout", type=int, default=10, help="抓取超时时间，单位秒")
    return parser.parse_args()


def main():
    ensure_stdout_utf8()
    args = parse_args()

    source_path = os.path.abspath(args.source)
    out_json_path = os.path.abspath(args.out_json)
    out_ts_path = os.path.abspath(args.out_ts)

    if not os.path.exists(source_path):
        print("[error] 源配置不存在: {0}".format(source_path))
        return 1

    config = read_json(source_path)
    issues = validate_source_config(config)
    if issues:
        print("[error] 源配置校验失败:")
        for issue in issues:
            print("  - {0}: {1}".format(issue.path, issue.message))
        return 1

    print("[ok] 配置校验通过: {0}".format(source_path))

    if args.validate_only:
        return 0

    career_directions = build_career_directions(
        config=config,
        fetch_remote_title=args.fetch_titles,
        timeout=args.timeout,
    )

    json_payload = {
        "meta": {
            "source": fs_to_unicode(source_path),
            "careerCount": len(career_directions),
            "generatedBy": "scripts/scraper.py",
            "fetchedTitles": args.fetch_titles,
        },
        "careerDirections": career_directions,
    }

    write_text(out_json_path, json.dumps(json_payload, ensure_ascii=False, indent=2))
    print("[ok] 已生成 JSON: {0}".format(out_json_path))

    if not args.skip_ts:
        write_text(out_ts_path, to_ts_module(career_directions))
        print("[ok] 已生成 TS: {0}".format(out_ts_path))

    print("[done] careerDirections 数据管线执行完成")
    return 0


if __name__ == "__main__":
    sys.exit(main())
