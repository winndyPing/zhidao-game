import type { CareerDirection, SkillRecommendation } from '@/types/game';

export interface LearningResource {
  skillId: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  resources: ResourceLink[];
}

export interface ResourceLink {
  type: 'doc' | 'video' | 'practice' | 'article';
  title: string;
  url: string;
  description?: string;
}

function link(
  type: ResourceLink['type'],
  title: string,
  url: string,
  description?: string,
): ResourceLink {
  return { type, title, url, description };
}

function track(
  skillId: string,
  title: string,
  description: string,
  difficulty: LearningResource['difficulty'],
  resources: ResourceLink[],
): LearningResource {
  return { skillId, title, description, difficulty, resources };
}

export const learningResources: Record<string, LearningResource[]> = {
  html_css: [
    track('html_css', 'HTML/CSS 页面基础', '从语义化结构、盒模型到响应式布局，完成静态页面搭建。', 'beginner', [
      link('doc', 'MDN HTML 指南', 'https://developer.mozilla.org/zh-CN/docs/Learn/HTML', '语义化标签、表单、媒体元素'),
      link('doc', 'MDN CSS 指南', 'https://developer.mozilla.org/zh-CN/docs/Learn/CSS', '选择器、盒模型、Flex 与 Grid'),
      link('practice', 'Frontend Mentor', 'https://www.frontendmentor.io/', '用真实界面稿做页面还原练习'),
    ]),
    track('html_css', '响应式布局实战', '针对移动端和桌面端差异，练习页面拆分与适配。', 'intermediate', [
      link('article', 'CSS Tricks Flexbox Guide', 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', '快速理解 Flex 布局心智模型'),
      link('article', 'CSS Tricks Grid Guide', 'https://css-tricks.com/snippets/css/complete-guide-grid/', '学习二维布局与区域划分'),
      link('practice', 'CSS Diner', 'https://flukeout.github.io/', '通过小游戏练习选择器'),
    ]),
  ],
  javascript: [
    track('javascript', 'JavaScript 核心语法', '掌握变量、函数、数组、对象、DOM 与异步基础。', 'beginner', [
      link('doc', '现代 JavaScript 教程', 'https://zh.javascript.info/', '从基础语法到浏览器 API'),
      link('video', 'JavaScript 入门教程', 'https://www.bilibili.com/video/BV1YW411T7GX', '系统过一遍 JS 常见知识点'),
      link('practice', 'Codewars', 'https://www.codewars.com/', '用小题目练习语法和函数抽象'),
    ]),
    track('javascript', '异步与工程化思维', '补上 Promise、模块化、事件循环与调试思路。', 'intermediate', [
      link('doc', 'MDN Promise', 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise', '理解异步链路与错误处理'),
      link('article', 'ES6 入门教程', 'https://es6.ruanyifeng.com/', '系统补齐 let/const、解构、模块等能力'),
      link('practice', 'JavaScript30', 'https://javascript30.com/', '做 30 个小交互项目'),
    ]),
  ],
  typescript: [
    track('typescript', 'TypeScript 类型系统', '掌握常用类型、泛型、接口与类型收窄。', 'beginner', [
      link('doc', 'TypeScript 官方文档', 'https://www.typescriptlang.org/zh/docs/', '从基础类型到高级类型'),
      link('article', 'TypeScript 入门教程', 'https://ts.xcatliu.com/', '适合中文快速上手'),
      link('practice', 'Type Challenges', 'https://github.com/type-challenges/type-challenges', '用题目训练类型体操思维'),
    ]),
  ],
  vue: [
    track('vue', 'Vue 3 组件开发', '围绕组合式 API、组件通信和状态管理完成页面开发。', 'beginner', [
      link('doc', 'Vue 官方文档', 'https://cn.vuejs.org/guide/introduction.html', 'Vue 3 最权威的上手资料'),
      link('video', 'Vue 3 入门实战', 'https://www.bilibili.com/video/BV1QA4y1d7xf', '组件化开发与响应式思维'),
      link('practice', 'Vue 练习项目建议', 'https://cn.vuejs.org/examples/#hello-world', '从官方示例延展为小项目'),
    ]),
  ],
  react: [
    track('react', 'React 基础与 Hooks', '围绕组件、状态、副作用和表单完成前端页面开发。', 'beginner', [
      link('doc', 'React 官方 Learn', 'https://react.dev/learn', '从组件思维到数据流'),
      link('article', 'React 小书', 'http://huziketang.mangojuice.top/books/react/', '适合快速建立整体认知'),
      link('practice', 'Scrimba React Practice', 'https://scrimba.com/learn/learnreact', '做中学 React 组件与状态管理'),
    ]),
  ],
  css_framework: [
    track('css_framework', 'Tailwind 与样式框架实践', '学习原子化样式、组件约束和设计系统思维。', 'beginner', [
      link('doc', 'Tailwind CSS 文档', 'https://tailwindcss.com/docs', '查类名和设计 token 最方便'),
      link('article', 'Tailwind Labs Blog', 'https://tailwindcss.com/blog', '理解框架设计思路与最佳实践'),
      link('practice', 'Tailwind Components', 'https://tailwindcomponents.com/', '看现成组件并练习改写'),
    ]),
  ],
  build_tools: [
    track('build_tools', '前端构建工具链', '理解 Vite、npm scripts、环境变量与打包产物。', 'intermediate', [
      link('doc', 'Vite 官方文档', 'https://cn.vitejs.dev/guide/', '适合理解现代前端开发流程'),
      link('doc', 'npm CLI 文档', 'https://docs.npmjs.com/', '脚本、依赖、发布和 lockfile'),
      link('article', '前端工程化概览', 'https://juejin.cn/post/6844903923921068040', '理解为什么需要构建、分包和规范'),
    ]),
  ],
  java: [
    track('java', 'Java 语法与面向对象', '从基础语法、集合到类与接口，建立后端编程基础。', 'beginner', [
      link('doc', 'Oracle Java Tutorials', 'https://docs.oracle.com/javase/tutorial/', '面向对象和标准库基础'),
      link('video', 'Java 零基础教程', 'https://www.bilibili.com/video/BV1Kb411W75N', '系统过一遍常见知识点'),
      link('practice', 'LeetCode 热题', 'https://leetcode.cn/problemset/', '用 Java 练习数据结构和编码能力'),
    ]),
  ],
  python: [
    track('python', 'Python 编程基础', '变量、函数、模块、文件与常用数据结构是通用起点。', 'beginner', [
      link('doc', 'Python 官方教程', 'https://docs.python.org/zh-cn/3/tutorial/', '语法和标准库入门'),
      link('article', '廖雪峰 Python 教程', 'https://www.liaoxuefeng.com/wiki/1016959663602400', '中文学习路径清晰'),
      link('practice', 'LeetCode', 'https://leetcode.cn/', '用 Python 练基础算法与表达能力'),
    ]),
  ],
  nodejs: [
    track('nodejs', 'Node.js 服务端入门', '掌握模块系统、HTTP、文件系统和服务端调试。', 'beginner', [
      link('doc', 'Node.js 官方文档', 'https://nodejs.org/zh-cn/docs', '查 API 与运行时能力'),
      link('article', 'Node Beginner', 'https://www.nodebeginner.org/index-zh-cn.html', '适合建立服务端开发第一印象'),
      link('practice', 'Express 官方入门', 'https://expressjs.com/zh-cn/starter/installing.html', '快速搭一个接口服务'),
    ]),
  ],
  database: [
    track('database', '关系型数据库基础', '从表设计、索引到事务，建立后端数据建模能力。', 'beginner', [
      link('doc', 'MySQL 教程', 'https://www.runoob.com/mysql/mysql-tutorial.html', '基础 SQL 与数据表操作'),
      link('article', 'PostgreSQL Tutorial', 'https://www.postgresqltutorial.com/', '补齐另一类主流关系数据库'),
      link('practice', 'SQLZoo', 'https://sqlzoo.net/', '边练边学 SELECT、JOIN、聚合'),
    ]),
  ],
  redis: [
    track('redis', 'Redis 缓存与数据结构', '理解字符串、哈希、列表、集合和缓存常见场景。', 'intermediate', [
      link('doc', 'Redis 官方文档', 'https://redis.io/docs/latest/', '数据结构、命令与持久化'),
      link('article', 'Redis 开发与运维实践', 'https://redis.com.cn/', '中文资料较全，适合快速查询'),
      link('practice', 'Try Redis', 'https://try.redis.io/', '交互式体验常见命令'),
    ]),
  ],
  api_design: [
    track('api_design', 'RESTful API 设计', '补齐资源建模、状态码、认证和错误码设计。', 'intermediate', [
      link('doc', 'Microsoft REST API Guidelines', 'https://github.com/microsoft/api-guidelines/blob/vNext/Guidelines.md', '大厂 API 设计参考'),
      link('article', 'RESTful API 设计最佳实践', 'https://restfulapi.net/', '接口命名和语义约定'),
      link('practice', 'Postman Learning Center', 'https://learning.postman.com/', '调试接口、写测试和管理集合'),
    ]),
  ],
  spring: [
    track('spring', 'Spring / Spring Boot 后端开发', '理解依赖注入、Web 层、配置和常用后端套路。', 'intermediate', [
      link('doc', 'Spring 官方 Guides', 'https://spring.io/guides', '从零搭项目最直接'),
      link('doc', 'Spring Boot Reference', 'https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/', '查配置与自动装配'),
      link('practice', 'Spring 实战项目建议', 'https://spring.io/guides/gs/rest-service/', '从写一个 REST 服务开始'),
    ]),
  ],
  dart: [
    track('dart', 'Dart 语言基础', '移动端开发前先打好语法、异步和面向对象基础。', 'beginner', [
      link('doc', 'Dart 官方语言之旅', 'https://dart.dev/language', '最直接的语法参考'),
      link('video', 'Dart 入门教程', 'https://www.bilibili.com/video/BV1S4411E7LY', '快速过一遍 Dart 常用语法'),
      link('practice', 'DartPad', 'https://dartpad.dev/', '浏览器里直接写 Dart'),
    ]),
  ],
  flutter: [
    track('flutter', 'Flutter 跨平台开发', '围绕 Widget 树、状态管理和页面路由完成移动端界面。', 'beginner', [
      link('doc', 'Flutter 中文文档', 'https://docs.flutter.cn/', '上手 Flutter 的主入口'),
      link('video', 'Flutter 入门实战', 'https://www.bilibili.com/video/BV1qt411u7bF', 'Widget、布局、生命周期'),
      link('practice', 'Flutter Codelabs', 'https://docs.flutter.dev/codelabs', '跟着官方做完整练习项目'),
    ]),
  ],
  swift: [
    track('swift', 'Swift 与 iOS 开发入门', '学习 Swift 语法、SwiftUI 组件和 iOS 常见开发模式。', 'beginner', [
      link('doc', 'Swift 官方文档', 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/', '掌握语言基础'),
      link('doc', 'Apple SwiftUI Tutorials', 'https://developer.apple.com/tutorials/swiftui', '最适合从界面开发入门'),
      link('article', 'Hacking with Swift', 'https://www.hackingwithswift.com/100/swiftui', '按天拆解 SwiftUI 学习路径'),
    ]),
  ],
  kotlin: [
    track('kotlin', 'Kotlin 与 Android 基础', '补齐 Kotlin 语法、Jetpack 组件和 Android 页面开发。', 'beginner', [
      link('doc', 'Kotlin 官方文档', 'https://kotlinlang.org/docs/home.html', '语言特性和协程基础'),
      link('doc', 'Android Developers', 'https://developer.android.google.cn/docs?hl=zh-cn', '官方 Android 学习入口'),
      link('practice', 'Android Basics in Kotlin', 'https://developer.android.com/courses/android-basics-kotlin/course', '做完整 Android 入门项目'),
    ]),
  ],
  react_native: [
    track('react_native', 'React Native 跨端开发', '适合已有 React 基础的人补移动端组件和导航。', 'intermediate', [
      link('doc', 'React Native 官方文档', 'https://reactnative.dev/docs/getting-started', '环境搭建与核心组件'),
      link('article', 'React Navigation 文档', 'https://reactnavigation.org/docs/getting-started', '页面切换与导航状态'),
      link('practice', 'Expo 文档', 'https://docs.expo.dev/', '更轻量地开始 RN 项目'),
    ]),
  ],
  uniapp: [
    track('uniapp', 'UniApp 多端应用开发', '适合 Vue 方向同学扩展小程序和跨端交付能力。', 'beginner', [
      link('doc', 'UniApp 官方文档', 'https://uniapp.dcloud.net.cn/', '页面、组件、API 和发布流程'),
      link('article', 'UniApp 实战教程', 'https://juejin.cn/tag/uni-app', '找示例项目和踩坑总结'),
      link('practice', 'HBuilderX 使用指南', 'https://hx.dcloud.net.cn/Tutorial/', '熟悉调试与打包流程'),
    ]),
  ],
  ui_design: [
    track('ui_design', '移动端 UI 设计基础', '学习界面层级、组件规范、可用性和设计交付语言。', 'beginner', [
      link('doc', 'Material Design', 'https://m3.material.io/', '组件规范与交互原则'),
      link('doc', 'Apple Human Interface Guidelines', 'https://developer.apple.com/design/human-interface-guidelines/', 'iOS 风格和可用性规则'),
      link('article', 'Refactoring UI', 'https://www.refactoringui.com/', '把抽象设计原则落到界面细节'),
    ]),
  ],
  python_data: [
    track('python_data', 'Python 数据分析基础', '围绕 NumPy、Pandas 和数据读取清洗建立数据工作流。', 'beginner', [
      link('doc', 'Kaggle Python Course', 'https://www.kaggle.com/learn/python', '面向数据分析场景的 Python 入门'),
      link('doc', 'NumPy 官方文档', 'https://numpy.org/doc/stable/', '理解数组计算和向量化'),
      link('practice', 'Kaggle Notebook', 'https://www.kaggle.com/code', '直接动手写分析脚本'),
    ]),
  ],
  sql: [
    track('sql', 'SQL 查询基础', '掌握 SELECT、JOIN、GROUP BY、窗口函数等分析常用查询能力。', 'beginner', [
      link('practice', 'SQLZoo', 'https://sqlzoo.net/', '交互式学 SQL'),
      link('practice', 'LeetCode Database', 'https://leetcode.cn/problemset/database/', '刷数据库题训练表达'),
      link('article', 'Mode SQL Tutorial', 'https://mode.com/sql-tutorial/', '适合数据分析视角学习 SQL'),
    ]),
  ],
  pandas: [
    track('pandas', 'Pandas 数据处理', '补齐 DataFrame、筛选、分组聚合、合并与时间序列分析。', 'beginner', [
      link('doc', 'Pandas 官方文档', 'https://pandas.pydata.org/docs/', '查 API 最稳定'),
      link('article', 'Pandas 中文教程', 'https://www.pypandas.cn/', '中文更好上手'),
      link('practice', 'Kaggle Pandas Course', 'https://www.kaggle.com/learn/pandas', '边学边做表格处理'),
    ]),
  ],
  visualization: [
    track('visualization', '数据可视化表达', '学习图表选择、配色、故事线和 ECharts / Matplotlib 实现。', 'intermediate', [
      link('doc', 'ECharts 官方文档', 'https://echarts.apache.org/handbook/zh/get-started/', '前端可视化能力核心资料'),
      link('doc', 'Matplotlib 官方教程', 'https://matplotlib.org/stable/tutorials/index.html', 'Python 图表绘制基础'),
      link('article', 'From Data to Viz', 'https://www.data-to-viz.com/', '先选对图，再去实现'),
    ]),
  ],
  excel: [
    track('excel', 'Excel 数据处理基础', '面向业务分析，补齐函数、透视表、图表和清洗技巧。', 'beginner', [
      link('doc', 'Microsoft Excel 帮助', 'https://support.microsoft.com/zh-cn/excel', '查公式和常见操作'),
      link('article', 'ExcelJet', 'https://exceljet.net/', '函数讲解和案例很多'),
      link('practice', 'Excel Practice Online', 'https://excel-practice-online.com/', '做函数与表格练习'),
    ]),
  ],
  statistics: [
    track('statistics', '统计学分析基础', '补齐描述统计、概率分布、假设检验和抽样思维。', 'beginner', [
      link('doc', 'Khan Academy 统计与概率', 'https://zh.khanacademy.org/math/statistics-probability', '概念非常友好'),
      link('video', '统计学入门课程', 'https://www.bilibili.com/video/BV1Cb411K7XG', '用视频建立直觉'),
      link('article', 'Seeing Theory', 'https://seeing-theory.brown.edu/', '交互式理解概率与统计概念'),
    ]),
  ],
  machine_learning: [
    track('machine_learning', '机器学习建模基础', '以 scikit-learn 为主线，理解监督学习、特征工程和模型评估。', 'intermediate', [
      link('doc', 'Scikit-learn 官方文档', 'https://scikit-learn.org/stable/', '模型、预处理、Pipeline 都在这里'),
      link('video', '吴恩达机器学习', 'https://www.coursera.org/learn/machine-learning', '经典 ML 学习路径'),
      link('practice', 'Kaggle Intro to Machine Learning', 'https://www.kaggle.com/learn/intro-to-machine-learning', '从真实数据集开始建模'),
    ]),
  ],
  python_ai: [
    track('python_ai', 'Python for AI 开发', '围绕数值计算、实验脚本和模型训练工作流组织 Python 能力。', 'beginner', [
      link('doc', 'Python 官方教程', 'https://docs.python.org/zh-cn/3/tutorial/', '先把脚本和模块能力打牢'),
      link('article', 'NumPy Quickstart', 'https://numpy.org/doc/stable/user/quickstart.html', '为后续模型训练补矩阵基础'),
      link('practice', 'Kaggle Python Course', 'https://www.kaggle.com/learn/python', '直接进入 AI 常见编码场景'),
    ]),
  ],
  ml_basics: [
    track('ml_basics', 'AI 方向的机器学习基础', '适合从 AI 入门视角理解监督学习、分类回归和评价指标。', 'beginner', [
      link('doc', 'Google 机器学习速成课程', 'https://developers.google.com/machine-learning/crash-course', '概念清晰，适合起步'),
      link('video', '李宏毅机器学习导论', 'https://www.bilibili.com/video/BV1Wv411h7kN', '适合补数学直觉和整体框架'),
      link('practice', 'Kaggle Intro to Machine Learning', 'https://www.kaggle.com/learn/intro-to-machine-learning', '用实践理解特征和模型'),
    ]),
  ],
  deep_learning: [
    track('deep_learning', '深度学习入门', '学习神经网络、反向传播、训练流程与 PyTorch 基本用法。', 'intermediate', [
      link('doc', 'PyTorch Tutorials', 'https://pytorch.org/tutorials/', '从张量到训练循环'),
      link('video', '动手学深度学习', 'https://www.bilibili.com/video/BV1if4y1h7s5', '理论与代码结合得很好'),
      link('practice', 'Dive into Deep Learning', 'https://zh.d2l.ai/', '一本可直接动手的深度学习书'),
    ]),
  ],
  nlp: [
    track('nlp', '自然语言处理基础', '从文本预处理、词向量到 Transformer 建立 NLP 主线。', 'intermediate', [
      link('doc', 'Hugging Face Course', 'https://huggingface.co/learn/nlp-course/chapter1/1', '现代 NLP 最实用的入门资料之一'),
      link('article', 'spaCy Course', 'https://course.spacy.io/zh/', '理解 NLP 管线和标注任务'),
      link('practice', 'Papers with Code NLP', 'https://paperswithcode.com/area/natural-language-processing', '跟踪任务与基线实现'),
    ]),
  ],
  cv: [
    track('cv', '计算机视觉基础', '围绕图像分类、检测与常见视觉数据处理建立起点。', 'intermediate', [
      link('doc', 'OpenCV 官方文档', 'https://docs.opencv.org/4.x/', '图像读取、变换、特征处理'),
      link('video', '计算机视觉基础课程', 'https://www.bilibili.com/video/BV1nz4y1X7R3', '建立 CV 主任务认知'),
      link('practice', 'Kaggle Computer Vision', 'https://www.kaggle.com/learn/computer-vision', '做图像任务练习'),
    ]),
  ],
  llm: [
    track('llm', '大模型应用开发', '把提示工程、RAG、工具调用和评估串成应用能力。', 'intermediate', [
      link('doc', 'OpenAI API Docs', 'https://platform.openai.com/docs', '模型调用、结构化输出、工具使用'),
      link('doc', 'LangChain Docs', 'https://python.langchain.com/docs/introduction/', '把模型接进应用流程'),
      link('article', 'Prompt Engineering Guide', 'https://www.promptingguide.ai/zh', '系统理解提示工程与代理模式'),
    ]),
  ],
  math: [
    track('math', 'AI 所需数学基础', '聚焦线性代数、概率统计、微积分与优化直觉。', 'beginner', [
      link('doc', '3Blue1Brown 线性代数', 'https://www.3blue1brown.com/topics/linear-algebra', '非常适合建立直觉'),
      link('video', '线性代数的本质', 'https://www.bilibili.com/video/BV1ys411472E', '理解矩阵和向量空间'),
      link('article', 'Khan Academy Calculus', 'https://zh.khanacademy.org/math/calculus-1', '为梯度和优化补基础'),
    ]),
  ],
  linux: [
    track('linux', 'Linux 与命令行基础', '掌握文件系统、权限、进程、网络与常见排障命令。', 'beginner', [
      link('doc', 'Linux 教程', 'https://www.runoob.com/linux/linux-tutorial.html', '适合快速回顾常见命令'),
      link('article', '鸟哥的 Linux 私房菜', 'https://linux.vbird.org/', '体系化学习 Linux'),
      link('practice', 'OverTheWire Bandit', 'https://overthewire.org/wargames/bandit/', '边闯关边练命令行'),
    ]),
  ],
  docker: [
    track('docker', 'Docker 容器化基础', '面向开发与部署，理解镜像、容器、网络、挂载和 Compose。', 'beginner', [
      link('doc', 'Docker 官方文档', 'https://docs.docker.com/', '镜像、容器、Compose 最全入口'),
      link('article', 'Docker 入门教程', 'https://www.runoob.com/docker/docker-tutorial.html', '快速搭建认知框架'),
      link('practice', 'Play with Docker', 'https://labs.play-with-docker.com/', '在线体验 Docker 环境'),
    ]),
  ],
  docker_devops: [
    track('docker_devops', 'Docker 运维实践', '更偏 DevOps 场景，补镜像优化、日志、编排前准备和发布习惯。', 'intermediate', [
      link('doc', 'Docker Docs - Best Practices', 'https://docs.docker.com/develop/dev-best-practices/', '学习镜像分层和构建规范'),
      link('article', 'Dockerfile Best Practices', 'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/', '减少镜像体积并提升可维护性'),
      link('practice', 'Awesome Compose', 'https://github.com/docker/awesome-compose', '参考真实服务编排示例'),
    ]),
  ],
  kubernetes: [
    track('kubernetes', 'Kubernetes 集群编排', '补齐 Pod、Deployment、Service、Ingress 与配置管理。', 'intermediate', [
      link('doc', 'Kubernetes 官方文档', 'https://kubernetes.io/zh-cn/docs/home/', '查概念和 YAML 字段最权威'),
      link('article', 'Kubernetes Basics', 'https://kubernetes.io/docs/tutorials/kubernetes-basics/', '适合从整体视角入门'),
      link('practice', 'Killercoda Kubernetes', 'https://killercoda.com/kubernetes', '在线做 K8s 场景练习'),
    ]),
  ],
  cicd: [
    track('cicd', 'CI/CD 自动化流水线', '掌握构建、测试、发布、回滚与环境隔离的整体流程。', 'intermediate', [
      link('doc', 'GitHub Actions 文档', 'https://docs.github.com/actions', '最常见的轻量流水线方案'),
      link('doc', 'GitLab CI/CD 文档', 'https://docs.gitlab.com/ee/ci/', '理解更完整的流水线系统'),
      link('article', 'CI/CD Explained', 'https://www.redhat.com/en/topics/devops/what-is-ci-cd', '先建立概念，再看工具'),
    ]),
  ],
  cloud: [
    track('cloud', '云服务部署基础', '理解云主机、对象存储、负载均衡、网络和权限模型。', 'beginner', [
      link('doc', 'AWS Getting Started', 'https://aws.amazon.com/cn/getting-started/', '云服务基础概念很全'),
      link('doc', '阿里云 ECS 文档', 'https://help.aliyun.com/zh/ecs/', '贴近国内常用云环境'),
      link('article', '腾讯云云服务器文档', 'https://cloud.tencent.com/document/product/213', '补齐另一套云主机和部署视角'),
    ]),
  ],
  monitoring: [
    track('monitoring', '监控与告警体系', '学习指标、日志、链路追踪和可观测性基本设计。', 'intermediate', [
      link('doc', 'Prometheus Docs', 'https://prometheus.io/docs/introduction/overview/', '指标和 PromQL 核心入口'),
      link('doc', 'Grafana Docs', 'https://grafana.com/docs/', '看板与告警配置'),
      link('article', 'OpenTelemetry Docs', 'https://opentelemetry.io/docs/', '理解现代可观测性栈'),
    ]),
  ],
  shell: [
    track('shell', 'Shell 脚本与自动化', '掌握变量、条件、循环、管道和常见系统脚本套路。', 'beginner', [
      link('doc', 'Bash Guide', 'https://mywiki.wooledge.org/BashGuide', 'Bash 最经典的入门资料之一'),
      link('article', 'ShellCheck', 'https://www.shellcheck.net/', '边写边检查脚本问题'),
      link('practice', 'Explain Shell', 'https://explainshell.com/', '拆解复杂命令的参数含义'),
    ]),
  ],
  unity: [
    track('unity', 'Unity 游戏开发基础', '从场景、组件、脚本到打包，完成一个小型游戏原型。', 'beginner', [
      link('doc', 'Unity Manual', 'https://docs.unity3d.com/Manual/index.html', '组件和引擎概念查询入口'),
      link('video', 'Unity 入门教程', 'https://www.bilibili.com/video/BV1Dk4y1H7Bu', '快速搭建游戏项目认知'),
      link('practice', 'Unity Learn', 'https://learn.unity.com/', '跟着官方项目练习'),
    ]),
  ],
  unreal: [
    track('unreal', 'Unreal 引擎基础', '学习蓝图、关卡、材质和 Gameplay Framework。', 'beginner', [
      link('doc', 'Unreal Engine Docs', 'https://dev.epicgames.com/documentation/en-us/unreal-engine', '官方学习入口'),
      link('video', 'Unreal Engine 初学者教程', 'https://www.bilibili.com/video/BV1mY411M7Vb', '快速建立编辑器和蓝图认知'),
      link('practice', 'Epic Developer Community', 'https://dev.epicgames.com/community/unreal-engine/learning', '找官方练习内容'),
    ]),
  ],
  csharp: [
    track('csharp', 'C# 游戏编程基础', '围绕面向对象、集合、事件和 Unity 常见脚本习惯入门。', 'beginner', [
      link('doc', 'Microsoft C# 文档', 'https://learn.microsoft.com/zh-cn/dotnet/csharp/', '语言特性和示例代码'),
      link('article', 'C# Yellow Book', 'https://www.csharpcourse.com/', '轻量但系统的 C# 入门书'),
      link('practice', 'Exercism C#', 'https://exercism.org/tracks/csharp', '用题目练语法与表达'),
    ]),
  ],
  cpp: [
    track('cpp', 'C++ 游戏开发基础', '补齐内存模型、指针、类、STL 与性能敏感编程习惯。', 'intermediate', [
      link('doc', 'Learn C++', 'https://www.learncpp.com/', '结构化最强的 C++ 入门站点之一'),
      link('doc', 'cppreference', 'https://en.cppreference.com/w/', '查语法与标准库必备'),
      link('article', 'Game Programming Patterns', 'https://gameprogrammingpatterns.com/', '把语言能力落到游戏架构'),
    ]),
  ],
  game_design: [
    track('game_design', '游戏设计与机制构建', '学习核心循环、反馈系统、数值和关卡节奏设计。', 'beginner', [
      link('article', 'Game Design Concepts', 'https://gamedesignconcepts.wordpress.com/', '系统理解机制与体验'),
      link('video', 'GMTK', 'https://www.youtube.com/c/MarkBrownGMT', '从案例中学习关卡与规则设计'),
      link('practice', 'itch.io Game Jams', 'https://itch.io/jams', '用小作品训练设计闭环'),
    ]),
  ],
  shader: [
    track('shader', 'Shader 与图形效果', '理解顶点、片元、材质节点和实时图形特效基础。', 'intermediate', [
      link('article', 'The Book of Shaders', 'https://thebookofshaders.com/?lan=ch', '最适合入门的 Shader 资料'),
      link('doc', 'Unity Shader Graph', 'https://learn.unity.com/tutorial/introduction-to-shader-graph', '用节点理解材质和特效'),
      link('practice', 'Shadertoy', 'https://www.shadertoy.com/', '直接写片元着色器并看效果'),
    ]),
  ],
  network: [
    track('network', '多人游戏网络同步', '从客户端预测、状态同步到延迟补偿，理解网络游戏核心挑战。', 'advanced', [
      link('article', 'Gaffer On Games - Networking', 'https://gafferongames.com/categories/networked-physics/', '网络同步经典资料'),
      link('doc', 'Unity Netcode for GameObjects', 'https://docs-multiplayer.unity3d.com/netcode/current/about/', 'Unity 多人同步官方入口'),
      link('practice', 'Mirror Networking Docs', 'https://mirror-networking.gitbook.io/docs/', '参考实际多人联机框架'),
    ]),
  ],
  git: [
    track('git', 'Git 协作基础', '掌握提交、分支、合并、回滚和团队协作常见流。', 'beginner', [
      link('doc', 'Pro Git', 'https://git-scm.com/book/zh/v2', 'Git 最经典的系统化资料'),
      link('practice', 'Learn Git Branching', 'https://learngitbranching.js.org/?locale=zh_CN', '交互式练分支与合并'),
      link('article', 'GitHub Docs', 'https://docs.github.com/zh', '补齐 Pull Request 和协作流程'),
    ]),
  ],
};

export function getResourcesForCareer(career: CareerDirection): LearningResource[] {
  const deduped = new Map<string, LearningResource>();

  career.skills.forEach((skill) => {
    const resources = learningResources[skill.id];
    if (!resources) return;

    resources.forEach((resource) => {
      deduped.set(`${resource.skillId}:${resource.title}`, resource);
    });
  });

  return [...deduped.values()];
}

export function getResourcesForSkill(skillId: string): LearningResource[] {
  return learningResources[skillId] || [];
}

export function getRandomResource(skillId: string): LearningResource | null {
  const resources = learningResources[skillId];
  if (!resources || resources.length === 0) return null;
  return resources[Math.floor(Math.random() * resources.length)];
}

export function getRandomCareerResource(career: CareerDirection): { skill: SkillRecommendation; resource: LearningResource } | null {
  if (!career.skills || career.skills.length === 0) return null;

  const candidates = career.skills.filter((skill) => (learningResources[skill.id] || []).length > 0);
  if (candidates.length === 0) return null;

  const coreSkills = candidates.filter((skill) => skill.priority === 'core');
  const pool = coreSkills.length > 0 ? coreSkills : candidates;
  const randomSkill = pool[Math.floor(Math.random() * pool.length)];
  const resources = learningResources[randomSkill.id];

  if (!resources || resources.length === 0) return null;

  const randomResource = resources[Math.floor(Math.random() * resources.length)];
  return { skill: randomSkill, resource: randomResource };
}
