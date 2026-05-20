import type { CareerDirection } from '@/types/game';

// 由 scripts/scraper.py 自动生成，请优先修改 scripts/data/career_sources.json
export const careerDirections: CareerDirection[] = [
  {
    "category": "frontend", 
    "description": "构建用户界面，关注交互、样式、工程化与性能。", 
    "skills": [
      {
        "description": "网页结构与样式基础。", 
        "priority": "core", 
        "quizs": [], 
        "icon": "📄", 
        "id": "html_css", 
        "resources": [
          {
            "url": "https://developer.mozilla.org/zh-CN/docs/Web/HTML", 
            "type": "docs", 
            "name": "MDN Web Docs - HTML"
          }, 
          {
            "url": "https://developer.mozilla.org/zh-CN/docs/Web/CSS", 
            "type": "docs", 
            "name": "MDN Web Docs - CSS"
          }, 
          {
            "url": "https://www.freecodecamp.org/chinese/learn/2022/responsive-web-design/", 
            "type": "course", 
            "name": "freeCodeCamp - 响应式网页设计"
          }
        ], 
        "name": "HTML/CSS"
      }, 
      {
        "description": "前端交互与业务逻辑核心语言。", 
        "priority": "core", 
        "quizs": [], 
        "icon": "🟨", 
        "id": "javascript", 
        "resources": [
          {
            "url": "https://zh.javascript.info/", 
            "type": "docs", 
            "name": "JavaScript.info"
          }, 
          {
            "url": "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript", 
            "type": "docs", 
            "name": "MDN Web Docs - JavaScript"
          }
        ], 
        "name": "JavaScript"
      }
    ], 
    "name": "前端开发", 
    "id": "frontend", 
    "icon": "🎨"
  }, 
  {
    "category": "backend", 
    "description": "负责服务端接口、数据库、业务逻辑与系统稳定性。", 
    "skills": [
      {
        "description": "企业级后端常用语言。", 
        "priority": "core", 
        "quizs": [], 
        "icon": "☕", 
        "id": "java", 
        "resources": [
          {
            "url": "https://www.runoob.com/java/", 
            "type": "tutorial", 
            "name": "菜鸟教程 - Java"
          }, 
          {
            "url": "https://docs.oracle.com/en/java/", 
            "type": "docs", 
            "name": "Oracle Java Documentation"
          }
        ], 
        "name": "Java"
      }, 
      {
        "description": "关系型数据库与基础 SQL 能力。", 
        "priority": "important", 
        "quizs": [], 
        "icon": "🗄️", 
        "id": "database", 
        "resources": [
          {
            "url": "https://www.runoob.com/mysql/mysql-tutorial.html", 
            "type": "tutorial", 
            "name": "菜鸟教程 - MySQL"
          }, 
          {
            "url": "https://sqlzoo.net/", 
            "type": "practice", 
            "name": "SQLZoo"
          }
        ], 
        "name": "数据库"
      }
    ], 
    "name": "后端开发", 
    "id": "backend", 
    "icon": "🧩"
  }, 
  {
    "category": "ai", 
    "description": "围绕机器学习、深度学习和大模型应用进行开发。", 
    "skills": [
      {
        "description": "掌握监督学习、特征工程与模型评估。", 
        "priority": "core", 
        "quizs": [], 
        "icon": "📊", 
        "id": "ml_basics", 
        "resources": [
          {
            "url": "https://scikit-learn.org.cn/", 
            "type": "docs", 
            "name": "Scikit-learn 中文文档"
          }
        ], 
        "name": "机器学习基础"
      }, 
      {
        "description": "围绕提示词、RAG、工具调用与应用开发。", 
        "priority": "important", 
        "quizs": [], 
        "icon": "🧠", 
        "id": "llm", 
        "resources": [
          {
            "url": "https://platform.openai.com/docs", 
            "type": "docs", 
            "name": "OpenAI API Docs"
          }, 
          {
            "url": "https://python.langchain.com/docs/", 
            "type": "docs", 
            "name": "LangChain Docs"
          }
        ], 
        "name": "大模型应用"
      }
    ], 
    "name": "AI 开发", 
    "id": "ai_engineer", 
    "icon": "🤖"
  }
];
