import type { Room, RoomType, RoomUnlockStatus, CareerDirection, SkillRecommendation } from '@/types/game';
import { careerDirections } from '@data/careerDirections';

// ==================== 迷宫生成器 ====================

class DungeonGenerator {
  // 获取职业方向ID
  private getCareerId(career?: CareerDirection): string {
    return career?.id || 'general';
  }

  // 根据职业方向获取技能列表，按优先级排序 (core -> important -> optional)
  private getSkillsByPriority(careerId: string): SkillRecommendation[] {
    const career = careerDirections.find(c => c.id === careerId);
    if (!career || !career.skills.length) {
      return [];
    }
    
    const priorityOrder = { core: 0, important: 1, optional: 2 };
    return [...career.skills].sort((a, b) => {
      const orderA = priorityOrder[a.priority] ?? 3;
      const orderB = priorityOrder[b.priority] ?? 3;
      return orderA - orderB;
    });
  }

  // 根据职业方向获取战斗事件
  private getCombatEvents(careerId: string) {
    const careerEvents: Record<string, any[]> = {
      frontend: [
        { name: 'HTML结构挑战', desc: '掌握HTML语义化标签', reward: { cp: 50, items: ['iron'] }, skillHint: 'html_css' },
        { name: 'CSS布局练习', desc: '熟练使用Flex/Grid布局', reward: { cp: 80, items: ['wood'] }, skillHint: 'html_css' },
        { name: 'JavaScript基础', desc: '变量、函数与DOM操作', reward: { cp: 100, items: ['crystal'] }, skillHint: 'javascript' },
        { name: 'Vue组件开发', desc: '学习Vue响应式与组件', reward: { cp: 120, items: ['crystal'] }, skillHint: 'vue' },
        { name: 'React实战', desc: 'Hooks与状态管理', reward: { cp: 130, items: ['crystal'] }, skillHint: 'react' },
        { name: 'TypeScript类型', desc: '掌握类型系统', reward: { cp: 110, items: ['crystal'] }, skillHint: 'typescript' },
        { name: '样式框架应用', desc: 'Tailwind/CSS框架实践', reward: { cp: 90, items: ['wood'] }, skillHint: 'css_framework' },
      ],
      backend: [
        { name: 'Java面向对象', desc: '类、接口与继承', reward: { cp: 80, items: ['iron'] }, skillHint: 'java' },
        { name: 'Python后端开发', desc: 'Flask/Django框架', reward: { cp: 90, items: ['wood'] }, skillHint: 'python' },
        { name: 'Node.js服务端', desc: 'Express/Koa框架', reward: { cp: 100, items: ['crystal'] }, skillHint: 'nodejs' },
        { name: '数据库设计', desc: 'MySQL/PostgreSQL操作', reward: { cp: 110, items: ['crystal'] }, skillHint: 'database' },
        { name: 'Redis缓存', desc: '缓存策略与数据结构', reward: { cp: 120, items: ['crystal'] }, skillHint: 'redis' },
        { name: 'API设计', desc: 'RESTful/GraphQL接口', reward: { cp: 130, items: ['crystal'] }, skillHint: 'api_design' },
        { name: 'Spring框架', desc: 'IoC/AOP/MVC', reward: { cp: 140, items: ['crystal'] }, skillHint: 'spring' },
      ],
      mobile: [
        { name: 'Dart语言基础', desc: '掌握Dart语法', reward: { cp: 70, items: ['iron'] }, skillHint: 'dart' },
        { name: 'Flutter开发', desc: 'Widget与状态管理', reward: { cp: 100, items: ['crystal'] }, skillHint: 'flutter' },
        { name: 'Swift iOS开发', desc: 'UIKit/SwiftUI', reward: { cp: 110, items: ['crystal'] }, skillHint: 'swift' },
        { name: 'Kotlin Android', desc: 'Android组件开发', reward: { cp: 110, items: ['crystal'] }, skillHint: 'kotlin' },
        { name: 'React Native', desc: '跨平台移动开发', reward: { cp: 100, items: ['crystal'] }, skillHint: 'react_native' },
        { name: 'UniApp开发', desc: 'Vue跨平台应用', reward: { cp: 90, items: ['wood'] }, skillHint: 'uniapp' },
        { name: 'UI设计基础', desc: '移动端界面设计', reward: { cp: 80, items: ['wood'] }, skillHint: 'ui_design' },
      ],
      data: [
        { name: 'SQL查询基础', desc: 'SELECT/JOIN/聚合', reward: { cp: 70, items: ['iron'] }, skillHint: 'sql' },
        { name: 'Pandas数据分析', desc: '数据清洗与处理', reward: { cp: 90, items: ['crystal'] }, skillHint: 'pandas' },
        { name: '数据可视化', desc: 'Matplotlib/ECharts', reward: { cp: 100, items: ['crystal'] }, skillHint: 'visualization' },
        { name: 'Excel数据处理', desc: '函数与透视表', reward: { cp: 60, items: ['wood'] }, skillHint: 'excel' },
        { name: '统计学基础', desc: '概率与分布', reward: { cp: 80, items: ['crystal'] }, skillHint: 'statistics' },
      ],
      ai: [
        { name: '机器学习基础', desc: '监督/无监督学习', reward: { cp: 100, items: ['crystal'] }, skillHint: 'machine_learning' },
        { name: '深度学习入门', desc: '神经网络与PyTorch', reward: { cp: 120, items: ['crystal'] }, skillHint: 'deep_learning' },
        { name: 'NLP自然语言', desc: '文本处理与模型', reward: { cp: 130, items: ['crystal'] }, skillHint: 'nlp' },
        { name: '计算机视觉', desc: '图像识别与处理', reward: { cp: 130, items: ['crystal'] }, skillHint: 'cv' },
        { name: 'LLM大模型', desc: 'GPT/LLaMA应用', reward: { cp: 150, items: ['crystal'] }, skillHint: 'llm' },
        { name: '数学基础', desc: '线性代数/微积分', reward: { cp: 80, items: ['crystal'] }, skillHint: 'math' },
      ],
      devops: [
        { name: 'Docker容器化', desc: '镜像与容器管理', reward: { cp: 90, items: ['crystal'] }, skillHint: 'docker' },
        { name: 'Linux系统', desc: 'Shell与系统管理', reward: { cp: 80, items: ['iron'] }, skillHint: 'linux' },
        { name: 'Kubernetes', desc: '集群编排与管理', reward: { cp: 120, items: ['crystal'] }, skillHint: 'kubernetes' },
        { name: 'CI/CD流水线', desc: '自动化构建部署', reward: { cp: 110, items: ['crystal'] }, skillHint: 'cicd' },
        { name: '云服务部署', desc: 'AWS/阿里云/腾讯云', reward: { cp: 100, items: ['crystal'] }, skillHint: 'cloud' },
        { name: '监控告警', desc: 'Prometheus/Grafana', reward: { cp: 100, items: ['crystal'] }, skillHint: 'monitoring' },
        { name: 'Shell脚本', desc: '自动化脚本编写', reward: { cp: 70, items: ['wood'] }, skillHint: 'shell' },
      ],
      game: [
        { name: 'Unity开发', desc: 'C#与Unity组件', reward: { cp: 100, items: ['crystal'] }, skillHint: 'unity' },
        { name: 'Unreal引擎', desc: '蓝图与C++开发', reward: { cp: 120, items: ['crystal'] }, skillHint: 'unreal' },
        { name: 'C#游戏编程', desc: '面向对象游戏逻辑', reward: { cp: 90, items: ['crystal'] }, skillHint: 'csharp' },
        { name: 'C++游戏开发', desc: '高性能游戏编程', reward: { cp: 110, items: ['crystal'] }, skillHint: 'cpp' },
        { name: '游戏设计', desc: '关卡与机制设计', reward: { cp: 80, items: ['wood'] }, skillHint: 'game_design' },
        { name: '着色器编程', desc: 'Shader与图形效果', reward: { cp: 130, items: ['crystal'] }, skillHint: 'shader' },
        { name: '网络同步', desc: '多人游戏网络', reward: { cp: 120, items: ['crystal'] }, skillHint: 'network' },
      ],
      other: [
        { name: 'Git版本控制', desc: '代码管理与协作', reward: { cp: 50, items: ['iron'] }, skillHint: 'git' },
        { name: '代码规范', desc: '编码风格与最佳实践', reward: { cp: 40, items: ['wood'] }, skillHint: 'git' },
      ],
      general: [
        { name: '变量挑战', desc: '掌握变量定义与赋值', reward: { cp: 50, items: ['iron'] }, skillHint: 'python' },
        { name: '循环练习', desc: '熟练使用循环语句', reward: { cp: 80, items: ['wood'] }, skillHint: 'python' },
        { name: '函数封装', desc: '学会函数定义与调用', reward: { cp: 100, items: ['crystal'] }, skillHint: 'python' },
        { name: '数据结构', desc: '掌握列表与字典操作', reward: { cp: 70, items: ['bug'] }, skillHint: 'python' },
        { name: 'API接口', desc: '学习接口设计与调用', reward: { cp: 120, items: ['crystal'] }, skillHint: 'nodejs' },
        { name: '样式布局', desc: 'CSS布局与样式技巧', reward: { cp: 60, items: ['wood'] }, skillHint: 'html_css' },
      ],
    };
    
    return careerEvents[careerId] || careerEvents.general;
  }

  // 根据职业方向获取谜题事件
  private getPuzzleEvents(careerId: string) {
    const careerEvents: Record<string, any[]> = {
      frontend: [
        { name: 'HTML结构谜题', desc: '分析DOM树结构', reward: { cp: 60, items: ['iron'] }, skillHint: 'html_css' },
        { name: 'CSS选择器', desc: '理解选择器优先级', reward: { cp: 70, items: ['wood'] }, skillHint: 'html_css' },
        { name: 'JS闭包挑战', desc: '理解作用域链', reward: { cp: 100, items: ['crystal'] }, skillHint: 'javascript' },
        { name: 'Vue响应式原理', desc: '理解数据劫持', reward: { cp: 110, items: ['crystal'] }, skillHint: 'vue' },
      ],
      backend: [
        { name: 'SQL注入防御', desc: '安全编码实践', reward: { cp: 80, items: ['crystal'] }, skillHint: 'database' },
        { name: '并发问题', desc: '多线程同步', reward: { cp: 100, items: ['crystal'] }, skillHint: 'java' },
        { name: '缓存策略', desc: '缓存穿透/雪崩', reward: { cp: 90, items: ['crystal'] }, skillHint: 'redis' },
        { name: 'API安全', desc: '认证与授权', reward: { cp: 100, items: ['crystal'] }, skillHint: 'api_design' },
      ],
      mobile: [
        { name: '生命周期谜题', desc: '理解组件生命周期', reward: { cp: 70, items: ['crystal'] }, skillHint: 'flutter' },
        { name: '状态管理', desc: 'Provider/Redux模式', reward: { cp: 90, items: ['crystal'] }, skillHint: 'react_native' },
        { name: '性能优化', desc: '列表渲染优化', reward: { cp: 80, items: ['crystal'] }, skillHint: 'uniapp' },
      ],
      data: [
        { name: 'SQL查询优化', desc: '索引与执行计划', reward: { cp: 80, items: ['crystal'] }, skillHint: 'sql' },
        { name: '数据清洗', desc: '处理缺失值异常', reward: { cp: 70, items: ['crystal'] }, skillHint: 'pandas' },
        { name: '统计分析', desc: '假设检验', reward: { cp: 90, items: ['crystal'] }, skillHint: 'statistics' },
      ],
      ai: [
        { name: '过拟合问题', desc: '正则化方法', reward: { cp: 100, items: ['crystal'] }, skillHint: 'machine_learning' },
        { name: '梯度消失', desc: '激活函数选择', reward: { cp: 110, items: ['crystal'] }, skillHint: 'deep_learning' },
        { name: 'Transformer', desc: '注意力机制', reward: { cp: 120, items: ['crystal'] }, skillHint: 'llm' },
      ],
      devops: [
        { name: 'Docker网络', desc: '容器网络配置', reward: { cp: 80, items: ['crystal'] }, skillHint: 'docker' },
        { name: 'K8s调度', desc: 'Pod调度策略', reward: { cp: 100, items: ['crystal'] }, skillHint: 'kubernetes' },
        { name: '监控告警', desc: 'PromQL查询', reward: { cp: 90, items: ['crystal'] }, skillHint: 'monitoring' },
      ],
      game: [
        { name: '游戏循环', desc: 'Update/FixedUpdate', reward: { cp: 70, items: ['crystal'] }, skillHint: 'unity' },
        { name: '物理碰撞', desc: '碰撞检测优化', reward: { cp: 90, items: ['crystal'] }, skillHint: 'unreal' },
        { name: 'AI寻路', desc: 'A*算法实现', reward: { cp: 100, items: ['crystal'] }, skillHint: 'csharp' },
      ],
      general: [
        { name: '逻辑谜题', desc: '解if-else条件谜题', reward: { cp: 60, items: ['bug'] }, skillHint: 'python' },
        { name: '算法挑战', desc: '完成基础算法题', reward: { cp: 120, items: ['crystal'] }, skillHint: 'python' },
        { name: '数据库查询', desc: '编写SQL查询语句', reward: { cp: 80, items: ['iron'] }, skillHint: 'sql' },
      ],
    };
    
    return careerEvents[careerId] || careerEvents.general;
  }

  // 根据职业方向获取陷阱事件
  private getTrapEvents(careerId: string) {
    const careerEvents: Record<string, any[]> = {
      frontend: [
        { name: 'CSS兼容性陷阱', desc: '浏览器样式不一致', effect: { hp: -15 }, skillHint: 'html_css' },
        { name: 'JS内存泄漏', desc: '忘记清理定时器', effect: { hp: -20, items: ['bug'] }, skillHint: 'javascript' },
        { name: '跨域问题', desc: 'CORS配置错误', effect: { hp: -15 }, skillHint: 'nodejs' },
        { name: '响应式布局Bug', desc: '移动端显示异常', effect: { hp: -10 }, skillHint: 'css_framework' },
      ],
      backend: [
        { name: 'SQL注入攻击', desc: '数据库安全漏洞', effect: { hp: -25, items: ['bug'] }, skillHint: 'database' },
        { name: '内存溢出', desc: 'OOM错误', effect: { hp: -20 }, skillHint: 'java' },
        { name: '死锁陷阱', desc: '并发锁问题', effect: { hp: -15, items: ['bug'] }, skillHint: 'database' },
        { name: 'N+1查询', desc: '性能陷阱', effect: { hp: -15 }, skillHint: 'api_design' },
      ],
      mobile: [
        { name: '布局溢出', desc: 'RenderFlex溢出', effect: { hp: -10 }, skillHint: 'flutter' },
        { name: '内存警告', desc: '图片资源过大', effect: { hp: -15 }, skillHint: 'react_native' },
        { name: '权限问题', desc: '缺少运行时权限', effect: { hp: -10 }, skillHint: 'kotlin' },
      ],
      data: [
        { name: '数据倾斜', desc: '分区不均匀', effect: { hp: -15 }, skillHint: 'sql' },
        { name: '脏数据', desc: '数据质量问题', effect: { hp: -20, items: ['bug'] }, skillHint: 'pandas' },
        { name: '统计错误', desc: '样本偏差', effect: { hp: -15 }, skillHint: 'statistics' },
      ],
      ai: [
        { name: '梯度爆炸', desc: '训练不稳定', effect: { hp: -20 }, skillHint: 'deep_learning' },
        { name: '过拟合', desc: '模型泛化差', effect: { hp: -15, items: ['bug'] }, skillHint: 'machine_learning' },
        { name: 'GPU内存不足', desc: 'OOM错误', effect: { hp: -20 }, skillHint: 'deep_learning' },
      ],
      devops: [
        { name: '容器崩溃', desc: 'Docker异常退出', effect: { hp: -20, items: ['bug'] }, skillHint: 'docker' },
        { name: '配置错误', desc: '环境变量缺失', effect: { hp: -15 }, skillHint: 'linux' },
        { name: '服务不可用', desc: '健康检查失败', effect: { hp: -25 }, skillHint: 'kubernetes' },
      ],
      game: [
        { name: '碰撞穿透', desc: '物理检测失效', effect: { hp: -15, items: ['bug'] }, skillHint: 'unity' },
        { name: '帧率下降', desc: '性能瓶颈', effect: { hp: -20 }, skillHint: 'unreal' },
        { name: '内存泄漏', desc: '资源未释放', effect: { hp: -15 }, skillHint: 'csharp' },
      ],
      general: [
        { name: 'Bug陷阱', desc: '代码遇到bug攻击', effect: { hp: -20, items: ['bug'] } },
        { name: '语法错误', desc: '不小心写错代码', effect: { hp: -15 } },
        { name: '逻辑错误', desc: '条件判断失误', effect: { hp: -15, items: ['bug'] } },
      ],
    };
    
    return careerEvents[careerId] || careerEvents.general;
  }

  // 宝藏房间（通用）- 方案C：不同等级宝箱掉落不同配方
  private getTreasureEvents() {
    return [
      { name: '普通宝箱', desc: '普通代码宝箱', reward: { items: ['iron', 'wood'] }, chestLevel: 'common' },
      { name: '稀有宝箱', desc: '稀有知识宝箱', reward: { items: ['crystal'] }, chestLevel: 'rare' },
      { name: '知识碎片', desc: '收集编程知识', reward: { cp: 50, items: ['crystal'] }, chestLevel: 'common' },
    ];
  }

  // 休息房间（通用）
  private getRestEvents() {
    return [
      { name: '休息驿站', desc: '恢复生命和体力', effect: { hp: 30, stamina: 20 } },
      { name: '能量补给', desc: '补充体力继续探险', effect: { hp: 20, stamina: 30 } },
    ];
  }

  // Boss房间
  private getBossEvents(careerId: string) {
    const bossEvents: Record<string, any[]> = {
      frontend: [
        { name: '全栈前端Boss', desc: '完成前端项目综合挑战', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'vue' },
      ],
      backend: [
        { name: '分布式系统Boss', desc: '完成后端架构挑战', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'spring' },
      ],
      mobile: [
        { name: '跨平台Boss', desc: '完成移动端项目挑战', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'flutter' },
      ],
      data: [
        { name: '大数据Boss', desc: '完成数据分析项目', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'pandas' },
      ],
      ai: [
        { name: 'AI模型Boss', desc: '完成AI项目部署', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'deep_learning' },
      ],
      devops: [
        { name: '云原生Boss', desc: '完成集群部署挑战', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'kubernetes' },
      ],
      game: [
        { name: '游戏发布Boss', desc: '完成游戏上线挑战', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'unity' },
      ],
      general: [
        { name: '项目Boss', desc: '完成综合项目挑战', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'python' },
      ],
    };
    
    return bossEvents[careerId] || bossEvents.general;
  }

  // 生成迷宫
  generateDungeon(seed: number, floor: number, maxFloor: number, career?: CareerDirection): Room[] {
    const rooms: Room[] = [];
    const size = 4; // 4x4迷宫
    const careerId = this.getCareerId(career);

    // 获取按优先级排序的技能列表 (core -> important -> optional)
    const sortedSkills = this.getSkillsByPriority(careerId);

    // 使用种子生成确定性迷宫
    const random = this.seededRandom(seed + floor);

    let skillIndex = 0;

    // 按行优先顺序遍历（从上到下，从左到右），与截图中的数字顺序一致
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        // 确保Boss房在(3,3)
        if (x === 3 && y === 3 && floor === maxFloor) {
          rooms.push(this.createRoom(x, y, 'boss', random, careerId, undefined));
        } else {
          // 随机房间类型，但保证有路径可达
          const type = this.selectRoomType(x, y, random);

          // 按顺序分配技能（treasure和rest房间不需要技能）
          let skillId: string | undefined;
          if (type !== 'treasure' && type !== 'rest' && sortedSkills.length > 0) {
            skillId = sortedSkills[skillIndex % sortedSkills.length].id;
            skillIndex++;
          }

          rooms.push(this.createRoom(x, y, type, random, careerId, skillId));
        }
      }
    }

    return rooms;
  }

  // 创建房间
  private createRoom(x: number, y: number, type: RoomType, random: () => number, careerId: string, linkedSkillId?: string): Room {
    let events: any[];
    
    switch (type) {
      case 'combat':
        events = this.getCombatEvents(careerId);
        break;
      case 'treasure':
        events = this.getTreasureEvents();
        break;
      case 'puzzle':
        events = this.getPuzzleEvents(careerId);
        break;
      case 'rest':
        events = this.getRestEvents();
        break;
      case 'trap':
        events = this.getTrapEvents(careerId);
        break;
      case 'boss':
        events = this.getBossEvents(careerId);
        break;
      default:
        events = this.getCombatEvents(careerId);
    }

    // 如果有 linkedSkillId，筛选匹配的事件
    let filteredEvents = events;
    if (linkedSkillId) {
      const matched = events.filter(e => e.skillHint === linkedSkillId);
      if (matched.length > 0) {
        filteredEvents = matched;
      }
    }

    const event = filteredEvents[Math.floor(random() * filteredEvents.length)];

    return {
      x,
      y,
      type,
      explored: false,
      event,
      cleared: false,
      position: `${x},${y}`,
      unlockStatus: 'locked' as RoomUnlockStatus,
      linkedSkillId,
    };
  }

  // 种子随机数生成器
  private seededRandom(seed: number): () => number {
    return function () {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
  }

  // 选择房间类型
  private selectRoomType(x: number, y: number, random: () => number): RoomType {
    // 边界概率调整
    const rand = random();

    // 第一排更容易是战斗房间
    if (y === 0) {
      if (rand < 0.6) return 'combat';
      if (rand < 0.8) return 'treasure';
      return 'puzzle';
    }

    // 最后一排有Boss房
    if (y === 3 && x === 3) return 'boss';

    // 普通随机
    if (rand < 0.4) return 'combat';
    if (rand < 0.6) return 'treasure';
    if (rand < 0.8) return 'puzzle';
    if (rand < 0.9) return 'rest';
    return 'trap';
  }
}

export const dungeonGenerator = new DungeonGenerator();
