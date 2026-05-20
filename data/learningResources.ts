import type { CareerDirection, SkillRecommendation } from '@/types/game';

// 学习资源类型
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

// 各技能的学习资源
export const learningResources: Record<string, LearningResource[]> = {
  // ========== 前端方向 ==========
  'html_css': [
    {
      skillId: 'html_css',
      title: 'HTML基础',
      description: '学习网页结构基础',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'MDN HTML教程', url: 'https://developer.mozilla.org/zh-CN/docs/Learn/HTML', description: '权威HTML文档' },
        { type: 'practice', title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/chinese/learn/', description: '免费编程练习' },
      ]
    },
    {
      skillId: 'html_css',
      title: 'CSS入门',
      description: '学习样式与布局',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'CSS教程', url: 'https://www.runoob.com/css/css-tutorial.html', description: '菜鸟教程CSS' },
        { type: 'practice', title: 'CSS Diner', url: 'https://flukeout.github.io/', description: 'CSS选择器练习游戏' },
      ]
    }
  ],
  'javascript': [
    {
      skillId: 'javascript',
      title: 'JavaScript基础',
      description: 'JS语法与核心概念',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'JavaScript.info', url: 'https://zh.javascript.info/', description: '现代JS教程' },
        { type: 'video', title: '尚硅谷JS教程', url: 'https://www.bilibili.com/video/BV1YW411T7GX', description: 'B站热门教程' },
      ]
    },
    {
      skillId: 'javascript',
      title: 'ES6+特性',
      description: '现代JS新特性',
      difficulty: 'intermediate',
      resources: [
        { type: 'doc', title: 'ES6入门', url: 'https://es6.ruanyifeng.com/', description: '阮一峰ES6教程' },
      ]
    }
  ],
  'typescript': [
    {
      skillId: 'typescript',
      title: 'TypeScript入门',
      description: 'TS类型系统基础',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'TS官方文档', url: 'https://www.typescriptlang.org/zh/docs/', description: 'TypeScript官方' },
        { type: 'article', title: 'TS入门教程', url: 'https://ts.xcatliu.com/', description: '通俗易懂的TS教程' },
      ]
    }
  ],
  'vue': [
    {
      skillId: 'vue',
      title: 'Vue3基础',
      description: 'Vue3组合式API',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'Vue官方文档', url: 'https://cn.vuejs.org/guide/introduction.html', description: 'Vue3官方教程' },
        { type: 'video', title: 'Vue3教程', url: 'https://www.bilibili.com/video/BV1QA4y1d7xf', description: '尚硅谷Vue3' },
      ]
    }
  ],
  'react': [
    {
      skillId: 'react',
      title: 'React基础',
      description: 'React核心概念',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'React官方', url: 'https://react.dev/learn', description: 'React官方教程' },
        { type: 'article', title: 'React小书', url: 'http://huziketang.mangojuice.top/books/react/', description: 'React入门书籍' },
      ]
    }
  ],

  // ========== 后端方向 ==========
  'java': [
    {
      skillId: 'java',
      title: 'Java基础',
      description: 'Java语法与OOP',
      difficulty: 'beginner',
      resources: [
        { type: 'video', title: 'Java零基础', url: 'https://www.bilibili.com/video/BV1Kb411W75N', description: '尚硅谷Java' },
        { type: 'doc', title: 'Java教程', url: 'https://www.runoob.com/java/', description: '菜鸟教程Java' },
      ]
    }
  ],
  'python': [
    {
      skillId: 'python',
      title: 'Python基础',
      description: 'Python语法入门',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'Python教程', url: 'https://www.runoob.com/python3/python3-tutorial.html', description: '菜鸟教程Python' },
        { type: 'practice', title: 'LeetCode', url: 'https://leetcode.cn/', description: '算法练习平台' },
      ]
    }
  ],
  'nodejs': [
    {
      skillId: 'nodejs',
      title: 'Node.js入门',
      description: '服务端JavaScript',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'Node.js官网', url: 'https://nodejs.org/zh-cn/docs/', description: 'Node官方文档' },
        { type: 'article', title: 'Node入门', url: 'https://www.nodebeginner.org/index-zh-cn.html', description: 'Node入门指南' },
      ]
    }
  ],
  'database': [
    {
      skillId: 'database',
      title: 'MySQL基础',
      description: '关系型数据库',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'MySQL教程', url: 'https://www.runoob.com/mysql/mysql-tutorial.html', description: 'MySQL基础教程' },
        { type: 'practice', title: 'SQLZoo', url: 'https://sqlzoo.net/', description: 'SQL练习网站' },
      ]
    }
  ],

  // ========== AI方向 ==========
  'ml_basics': [
    {
      skillId: 'ml_basics',
      title: '机器学习基础',
      description: 'ML核心概念',
      difficulty: 'beginner',
      resources: [
        { type: 'video', title: '吴恩达ML', url: 'https://www.bilibili.com/video/BV164411b7dx', description: '经典ML课程' },
        { type: 'doc', title: 'Scikit-learn', url: 'https://scikit-learn.org.cn/', description: 'sklearn中文文档' },
      ]
    }
  ],
  'deep_learning': [
    {
      skillId: 'deep_learning',
      title: '深度学习入门',
      description: '神经网络基础',
      difficulty: 'intermediate',
      resources: [
        { type: 'doc', title: 'PyTorch教程', url: 'https://pytorch.org/tutorials/', description: 'PyTorch官方教程' },
        { type: 'video', title: '李沐动手学', url: 'https://www.bilibili.com/video/BV1if4y1h7s5', description: '动手学深度学习' },
      ]
    }
  ],
  'llm': [
    {
      skillId: 'llm',
      title: '大语言模型',
      description: 'LLM应用开发',
      difficulty: 'intermediate',
      resources: [
        { type: 'doc', title: 'LangChain', url: 'https://python.langchain.com/docs/', description: 'LangChain文档' },
        { type: 'doc', title: 'OpenAI API', url: 'https://platform.openai.com/docs', description: 'OpenAI官方文档' },
      ]
    }
  ],

  // ========== 移动端 ==========
  'flutter': [
    {
      skillId: 'flutter',
      title: 'Flutter入门',
      description: '跨平台开发',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'Flutter中文', url: 'https://flutter.cn/', description: 'Flutter中文官网' },
        { type: 'video', title: 'Flutter教程', url: 'https://www.bilibili.com/video/BV1qt411u7bF', description: 'Flutter入门教程' },
      ]
    }
  ],
  'uniapp': [
    {
      skillId: 'uniapp',
      title: 'UniApp开发',
      description: '小程序跨平台',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'UniApp官网', url: 'https://uniapp.dcloud.net.cn/', description: 'UniApp官方文档' },
      ]
    }
  ],

  // ========== 运维方向 ==========
  'linux': [
    {
      skillId: 'linux',
      title: 'Linux基础',
      description: 'Linux命令行',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'Linux教程', url: 'https://www.runoob.com/linux/linux-tutorial.html', description: 'Linux基础教程' },
        { type: 'practice', title: 'Linux命令练习', url: 'https://www.linuxcool.com/', description: 'Linux命令大全' },
      ]
    }
  ],
  'docker': [
    {
      skillId: 'docker',
      title: 'Docker入门',
      description: '容器化基础',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'Docker教程', url: 'https://www.runoob.com/docker/docker-tutorial.html', description: 'Docker基础教程' },
        { type: 'doc', title: 'Docker官方', url: 'https://docs.docker.com/', description: 'Docker官方文档' },
      ]
    }
  ],

  // ========== 数据方向 ==========
  'sql': [
    {
      skillId: 'sql',
      title: 'SQL基础',
      description: '数据查询语言',
      difficulty: 'beginner',
      resources: [
        { type: 'practice', title: 'SQLZoo', url: 'https://sqlzoo.net/', description: '交互式SQL教程' },
        { type: 'practice', title: 'LeetCode SQL', url: 'https://leetcode.cn/problemset/database/', description: 'SQL练习题' },
      ]
    }
  ],
  'pandas': [
    {
      skillId: 'pandas',
      title: 'Pandas数据分析',
      description: 'Python数据处理',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'Pandas教程', url: 'https://www.pypandas.cn/', description: 'Pandas中文教程' },
        { type: 'practice', title: 'Kaggle', url: 'https://www.kaggle.com/learn/pandas', description: 'Kaggle Pandas课程' },
      ]
    }
  ],

  // ========== 游戏开发 ==========
  'unity': [
    {
      skillId: 'unity',
      title: 'Unity入门',
      description: '游戏开发基础',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'Unity官方', url: 'https://docs.unity3d.com/Manual/index.html', description: 'Unity手册' },
        { type: 'video', title: 'Unity教程', url: 'https://www.bilibili.com/video/BV1Dk4y1H7Bu', description: 'Unity入门教程' },
      ]
    }
  ],
  'csharp': [
    {
      skillId: 'csharp',
      title: 'C#基础',
      description: 'Unity开发语言',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'C#教程', url: 'https://www.runoob.com/csharp/', description: 'C#基础教程' },
        { type: 'video', title: 'C#教程', url: 'https://www.bilibili.com/video/BV1FJ411W7eL', description: 'C#视频教程' },
      ]
    }
  ],

  // ========== 通用技能 ==========
  'git': [
    {
      skillId: 'git',
      title: 'Git版本控制',
      description: '代码协作必备',
      difficulty: 'beginner',
      resources: [
        { type: 'doc', title: 'Git教程', url: 'https://www.runoob.com/git/git-tutorial.html', description: 'Git基础教程' },
        { type: 'practice', title: 'Learn Git', url: 'https://learngitbranching.js.org/?locale=zh_CN', description: '交互式Git学习' },
      ]
    }
  ],
};

// 根据职业方向获取相关学习资源
export function getResourcesForCareer(career: CareerDirection): LearningResource[] {
  const allResources: LearningResource[] = [];
  
  career.skills.forEach(skill => {
    const resources = learningResources[skill.id];
    if (resources) {
      allResources.push(...resources);
    }
  });
  
  return allResources;
}

// 根据技能ID获取学习资源
export function getResourcesForSkill(skillId: string): LearningResource[] {
  return learningResources[skillId] || [];
}

// 随机获取一个学习资源
export function getRandomResource(skillId: string): LearningResource | null {
  const resources = learningResources[skillId];
  if (!resources || resources.length === 0) return null;
  return resources[Math.floor(Math.random() * resources.length)];
}

// 根据职业方向获取随机技能的学习资源
export function getRandomCareerResource(career: CareerDirection): { skill: SkillRecommendation; resource: LearningResource } | null {
  if (!career.skills || career.skills.length === 0) return null;
  
  // 优先选择核心技能
  const coreSkills = career.skills.filter(s => s.priority === 'core');
  const skills = coreSkills.length > 0 ? coreSkills : career.skills;
  
  const randomSkill = skills[Math.floor(Math.random() * skills.length)];
  const resources = learningResources[randomSkill.id];
  
  if (!resources || resources.length === 0) return null;
  
  const randomResource = resources[Math.floor(Math.random() * resources.length)];
  return { skill: randomSkill, resource: randomResource };
}