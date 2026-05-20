# Career Data Pipeline

这个目录现在承载 `careerDirections` 的“采集源配置 + 生成脚本”。

## 设计原则

- `careerDirections.ts` 里混合了职业方向、技能、题库、资源链接，直接手改成本很高
- 学习资源适合半自动采集：维护 URL，再抓页面标题、域名、分类元信息
- `quizs` 不建议直接爬取，质量与版权风险都比较高，建议人工维护或模板生成后审核

## 文件说明

- `scripts/data/career_sources.json`
  - 新的数据源配置文件
  - 这里定义职业方向、技能、候选资源链接
- `scripts/scraper.py`
  - 校验配置
  - 可选抓取资源网页标题
  - 生成标准化 JSON / TS
- `scripts/data/generated/careerDirections.generated.json`
  - 脚本输出的中间产物
- `scripts/data/generated/careerDirections.generated.ts`
  - 生成后的 TS 文件，可人工检查后再合入业务目录

## 运行方式

仅校验配置：

```bash
python scripts/scraper.py --validate-only
```

生成 JSON + TS：

```bash
python scripts/scraper.py
```

抓取网页标题后再生成：

```bash
python scripts/scraper.py --fetch-titles
```

只生成 JSON：

```bash
python scripts/scraper.py --skip-ts
```

## 推荐维护流程

1. 在 `scripts/data/career_sources.json` 增加或修改职业、技能、资源 URL
2. 运行 `python scripts/scraper.py --fetch-titles`
3. 检查 `scripts/data/generated/careerDirections.generated.json`
4. 人工补充 `quizs`
5. 评审通过后，再同步到正式业务数据文件

## 后续可扩展点

- 给不同站点加专用解析器，而不只是抓 `<title>`
- 增加“资源去重”和“失效链接检测”
- 增加 quiz 模板生成器，按技能点生成题库草稿
- 增加“将 generated.ts 覆盖到 data/careerDirections.ts”的发布命令
