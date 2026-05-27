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
        { name: '语义化页面搭建', desc: '用 HTML 结构清晰表达页面内容', reward: { cp: 50, items: ['iron'] }, skillHint: 'html_css' },
        { name: '响应式布局练习', desc: '用 Flex/Grid 完成多端适配布局', reward: { cp: 80, items: ['wood'] }, skillHint: 'html_css' },
        { name: '浏览器交互开发', desc: '处理 DOM、事件与异步交互逻辑', reward: { cp: 100, items: ['crystal'] }, skillHint: 'javascript' },
        { name: 'Vue 组件协作', desc: '拆分组件并组织响应式状态', reward: { cp: 120, items: ['crystal'] }, skillHint: 'vue' },
        { name: 'React 状态流实战', desc: '用组件与状态驱动界面更新', reward: { cp: 130, items: ['crystal'] }, skillHint: 'react' },
        { name: 'TypeScript 类型约束', desc: '为前端数据与接口补齐类型安全', reward: { cp: 110, items: ['crystal'] }, skillHint: 'typescript' },
        { name: '原子化样式应用', desc: '用 Tailwind 等方案快速搭建界面', reward: { cp: 90, items: ['wood'] }, skillHint: 'css_framework' },
      ],
      backend: [
        { name: 'Java 面向对象建模', desc: '用类、接口与继承组织业务逻辑', reward: { cp: 80, items: ['iron'] }, skillHint: 'java' },
        { name: 'Python 服务脚本', desc: '用 Flask / Django 处理后端逻辑', reward: { cp: 90, items: ['wood'] }, skillHint: 'python' },
        { name: 'Node.js 接口开发', desc: '用 Express / Koa 提供服务能力', reward: { cp: 100, items: ['crystal'] }, skillHint: 'nodejs' },
        { name: '关系型数据建模', desc: '设计表结构并处理查询与事务', reward: { cp: 110, items: ['crystal'] }, skillHint: 'database' },
        { name: '缓存策略设计', desc: '用 Redis 优化高频读写场景', reward: { cp: 120, items: ['crystal'] }, skillHint: 'redis' },
        { name: '接口规范设计', desc: '规划 RESTful / GraphQL 的资源模型', reward: { cp: 130, items: ['crystal'] }, skillHint: 'api_design' },
        { name: 'Spring 工程实践', desc: '用 IoC、AOP 与 Web 能力组织服务', reward: { cp: 140, items: ['crystal'] }, skillHint: 'spring' },
      ],
      mobile: [
        { name: 'Dart 语法训练', desc: '打牢 Flutter 所需的语言基础', reward: { cp: 70, items: ['iron'] }, skillHint: 'dart' },
        { name: 'Flutter 页面开发', desc: '用 Widget 树搭建跨端界面', reward: { cp: 100, items: ['crystal'] }, skillHint: 'flutter' },
        { name: 'SwiftUI iOS 实战', desc: '围绕原生交互完成 iOS 页面', reward: { cp: 110, items: ['crystal'] }, skillHint: 'swift' },
        { name: 'Kotlin Android 组件', desc: '组织 Activity、Fragment 与状态', reward: { cp: 110, items: ['crystal'] }, skillHint: 'kotlin' },
        { name: 'React Native 跨端页', desc: '复用 React 思路构建移动端体验', reward: { cp: 100, items: ['crystal'] }, skillHint: 'react_native' },
        { name: 'UniApp 多端交付', desc: '面向小程序与 App 完成多端发布', reward: { cp: 90, items: ['wood'] }, skillHint: 'uniapp' },
        { name: '移动端界面规范', desc: '处理组件层级、留白与操作反馈', reward: { cp: 80, items: ['wood'] }, skillHint: 'ui_design' },
      ],
      data: [
        { name: 'SQL 分析查询', desc: '用 SELECT、JOIN 与聚合获取业务数据', reward: { cp: 70, items: ['iron'] }, skillHint: 'sql' },
        { name: 'Pandas 数据加工', desc: '完成清洗、转换与指标整理', reward: { cp: 90, items: ['crystal'] }, skillHint: 'pandas' },
        { name: '图表表达训练', desc: '用可视化讲清趋势、对比与异常', reward: { cp: 100, items: ['crystal'] }, skillHint: 'visualization' },
        { name: 'Excel 业务处理', desc: '用函数与透视表快速整理表格', reward: { cp: 60, items: ['wood'] }, skillHint: 'excel' },
        { name: '统计分析基础', desc: '理解分布、抽样与显著性判断', reward: { cp: 80, items: ['crystal'] }, skillHint: 'statistics' },
      ],
      ai: [
        { name: '机器学习建模', desc: '完成特征、训练与评估的基础闭环', reward: { cp: 100, items: ['crystal'] }, skillHint: 'machine_learning' },
        { name: '深度学习训练', desc: '用神经网络与 PyTorch 搭建实验', reward: { cp: 120, items: ['crystal'] }, skillHint: 'deep_learning' },
        { name: '自然语言处理', desc: '组织文本表示、分类与生成任务', reward: { cp: 130, items: ['crystal'] }, skillHint: 'nlp' },
        { name: '视觉模型实践', desc: '围绕图像识别与处理构建模型', reward: { cp: 130, items: ['crystal'] }, skillHint: 'cv' },
        { name: 'LLM 应用开发', desc: '把提示、工具与知识库接进应用', reward: { cp: 150, items: ['crystal'] }, skillHint: 'llm' },
        { name: 'AI 数学基础', desc: '补上线代、概率与优化直觉', reward: { cp: 80, items: ['crystal'] }, skillHint: 'math' },
      ],
      devops: [
        { name: 'Docker 交付流程', desc: '管理镜像、容器与服务运行环境', reward: { cp: 90, items: ['crystal'] }, skillHint: 'docker' },
        { name: 'Linux 服务器运维', desc: '处理命令行、权限与系统服务', reward: { cp: 80, items: ['iron'] }, skillHint: 'linux' },
        { name: 'Kubernetes 编排', desc: '管理服务发布、扩缩容与集群资源', reward: { cp: 120, items: ['crystal'] }, skillHint: 'kubernetes' },
        { name: 'CI/CD 自动发布', desc: '把构建、测试与部署串成流水线', reward: { cp: 110, items: ['crystal'] }, skillHint: 'cicd' },
        { name: '云服务部署', desc: '把服务上线到云主机与云网络环境', reward: { cp: 100, items: ['crystal'] }, skillHint: 'cloud' },
        { name: '可观测性搭建', desc: '组织指标、日志与告警看板', reward: { cp: 100, items: ['crystal'] }, skillHint: 'monitoring' },
        { name: 'Shell 自动化脚本', desc: '让日常运维动作可复用、可批量执行', reward: { cp: 70, items: ['wood'] }, skillHint: 'shell' },
      ],
      game: [
        { name: 'Unity 原型开发', desc: '用组件和脚本快速搭建玩法原型', reward: { cp: 100, items: ['crystal'] }, skillHint: 'unity' },
        { name: 'Unreal 场景构建', desc: '结合蓝图与引擎能力制作高品质效果', reward: { cp: 120, items: ['crystal'] }, skillHint: 'unreal' },
        { name: 'C# 游戏逻辑', desc: '组织状态、行为与对象关系', reward: { cp: 90, items: ['crystal'] }, skillHint: 'csharp' },
        { name: 'C++ 性能模块', desc: '编写高性能的底层游戏逻辑', reward: { cp: 110, items: ['crystal'] }, skillHint: 'cpp' },
        { name: '玩法机制设计', desc: '设计核心循环、反馈与关卡节奏', reward: { cp: 80, items: ['wood'] }, skillHint: 'game_design' },
        { name: 'Shader 图形效果', desc: '实现材质、特效与实时渲染表现', reward: { cp: 130, items: ['crystal'] }, skillHint: 'shader' },
        { name: '多人网络同步', desc: '处理状态同步、预测与延迟问题', reward: { cp: 120, items: ['crystal'] }, skillHint: 'network' },
      ],
      other: [
        { name: 'Git 协作流程', desc: '熟悉提交、分支、合并与协作习惯', reward: { cp: 50, items: ['iron'] }, skillHint: 'git' },
        { name: '提交规范练习', desc: '用一致的提交信息和代码习惯协作', reward: { cp: 40, items: ['wood'] }, skillHint: 'git' },
      ],
      general: [
        { name: '变量与数据类型', desc: '理解基础数据和变量赋值方式', reward: { cp: 50, items: ['iron'] }, skillHint: 'python' },
        { name: '循环控制练习', desc: '熟悉循环语句与遍历思路', reward: { cp: 80, items: ['wood'] }, skillHint: 'python' },
        { name: '函数抽象封装', desc: '把重复逻辑组织成可复用函数', reward: { cp: 100, items: ['crystal'] }, skillHint: 'python' },
        { name: '基础数据结构', desc: '掌握列表、字典与常见操作', reward: { cp: 70, items: ['bug'] }, skillHint: 'python' },
        { name: '接口调用实践', desc: '理解请求、响应与接口联调', reward: { cp: 120, items: ['crystal'] }, skillHint: 'nodejs' },
        { name: '页面样式布局', desc: '练习常见排版与样式组织能力', reward: { cp: 60, items: ['wood'] }, skillHint: 'html_css' },
      ],
    };
    
    return careerEvents[careerId] || careerEvents.general;
  }

  // 根据职业方向获取谜题事件
  private getPuzzleEvents(careerId: string) {
    const careerEvents: Record<string, any[]> = {
      frontend: [
        { name: 'DOM 结构拆解', desc: '分析语义层级与节点组织方式', reward: { cp: 60, items: ['iron'] }, skillHint: 'html_css' },
        { name: '选择器优先级', desc: '判断样式覆盖顺序与权重关系', reward: { cp: 70, items: ['wood'] }, skillHint: 'html_css' },
        { name: '闭包与作用域链', desc: '厘清函数作用域和变量捕获', reward: { cp: 100, items: ['crystal'] }, skillHint: 'javascript' },
        { name: '响应式更新机制', desc: '理解数据变化如何驱动组件刷新', reward: { cp: 110, items: ['crystal'] }, skillHint: 'vue' },
      ],
      backend: [
        { name: 'SQL 注入防御', desc: '把查询安全放进接口与数据层设计', reward: { cp: 80, items: ['crystal'] }, skillHint: 'database' },
        { name: '并发同步问题', desc: '处理线程安全与共享资源竞争', reward: { cp: 100, items: ['crystal'] }, skillHint: 'java' },
        { name: '缓存失效策略', desc: '理解穿透、击穿与雪崩的处理方式', reward: { cp: 90, items: ['crystal'] }, skillHint: 'redis' },
        { name: '认证授权设计', desc: '梳理登录、权限与接口访问边界', reward: { cp: 100, items: ['crystal'] }, skillHint: 'api_design' },
      ],
      mobile: [
        { name: '组件生命周期', desc: '搞清页面创建、更新与销毁时机', reward: { cp: 70, items: ['crystal'] }, skillHint: 'flutter' },
        { name: '状态管理模型', desc: '比较 Provider、Redux 等状态组织方式', reward: { cp: 90, items: ['crystal'] }, skillHint: 'react_native' },
        { name: '列表渲染优化', desc: '减少首屏卡顿与长列表性能问题', reward: { cp: 80, items: ['crystal'] }, skillHint: 'uniapp' },
      ],
      data: [
        { name: 'SQL 执行优化', desc: '通过索引和执行计划找出慢查询原因', reward: { cp: 80, items: ['crystal'] }, skillHint: 'sql' },
        { name: '异常值清洗', desc: '处理缺失值、重复值和格式不一致', reward: { cp: 70, items: ['crystal'] }, skillHint: 'pandas' },
        { name: '假设检验分析', desc: '判断差异是否具备统计意义', reward: { cp: 90, items: ['crystal'] }, skillHint: 'statistics' },
      ],
      ai: [
        { name: '过拟合诊断', desc: '用正则化和验证集控制泛化误差', reward: { cp: 100, items: ['crystal'] }, skillHint: 'machine_learning' },
        { name: '梯度传播问题', desc: '理解激活函数与训练稳定性的关系', reward: { cp: 110, items: ['crystal'] }, skillHint: 'deep_learning' },
        { name: 'Transformer 机制', desc: '理解注意力如何组织上下文信息', reward: { cp: 120, items: ['crystal'] }, skillHint: 'llm' },
      ],
      devops: [
        { name: '容器网络配置', desc: '理解容器互联、端口与服务暴露方式', reward: { cp: 80, items: ['crystal'] }, skillHint: 'docker' },
        { name: 'K8s 调度策略', desc: '理解 Pod 调度、资源约束与节点选择', reward: { cp: 100, items: ['crystal'] }, skillHint: 'kubernetes' },
        { name: 'PromQL 排障查询', desc: '通过指标表达式定位服务异常', reward: { cp: 90, items: ['crystal'] }, skillHint: 'monitoring' },
      ],
      game: [
        { name: '主循环节奏', desc: '理解 Update / FixedUpdate 的职责差异', reward: { cp: 70, items: ['crystal'] }, skillHint: 'unity' },
        { name: '碰撞检测优化', desc: '处理物理反馈与性能之间的平衡', reward: { cp: 90, items: ['crystal'] }, skillHint: 'unreal' },
        { name: '寻路算法实现', desc: '用 A* 组织敌人或单位移动逻辑', reward: { cp: 100, items: ['crystal'] }, skillHint: 'csharp' },
      ],
      general: [
        { name: '条件判断谜题', desc: '用 if-else 理清程序分支逻辑', reward: { cp: 60, items: ['bug'] }, skillHint: 'python' },
        { name: '基础算法训练', desc: '通过题目建立拆解问题的思路', reward: { cp: 120, items: ['crystal'] }, skillHint: 'python' },
        { name: 'SQL 查询表达', desc: '把业务问题翻译成数据库查询', reward: { cp: 80, items: ['iron'] }, skillHint: 'sql' },
      ],
    };
    
    return careerEvents[careerId] || careerEvents.general;
  }

  // 根据职业方向获取陷阱事件
  private getTrapEvents(careerId: string) {
    const careerEvents: Record<string, any[]> = {
      frontend: [
        { name: '样式兼容性陷阱', desc: '不同浏览器下页面表现不一致', effect: { hp: -15 }, skillHint: 'html_css' },
        { name: '事件未清理泄漏', desc: '定时器或监听器遗留导致性能下降', effect: { hp: -20, items: ['bug'] }, skillHint: 'javascript' },
        { name: '跨域配置失误', desc: '接口因 CORS 配置错误无法访问', effect: { hp: -15 }, skillHint: 'nodejs' },
        { name: '响应式断点 Bug', desc: '移动端布局在关键尺寸下发生错位', effect: { hp: -10 }, skillHint: 'css_framework' },
      ],
      backend: [
        { name: 'SQL 注入漏洞', desc: '输入未经处理直接拼接查询语句', effect: { hp: -25, items: ['bug'] }, skillHint: 'database' },
        { name: '服务内存暴涨', desc: '对象堆积导致 OOM 与接口雪崩', effect: { hp: -20 }, skillHint: 'java' },
        { name: '死锁阻塞', desc: '并发资源相互等待导致服务卡死', effect: { hp: -15, items: ['bug'] }, skillHint: 'database' },
        { name: 'N+1 查询陷阱', desc: '接口请求隐藏了过多数据库往返', effect: { hp: -15 }, skillHint: 'api_design' },
      ],
      mobile: [
        { name: '布局溢出', desc: '页面在小屏设备上出现组件越界', effect: { hp: -10 }, skillHint: 'flutter' },
        { name: '图片资源过重', desc: '大图与缓存处理不当触发内存警告', effect: { hp: -15 }, skillHint: 'react_native' },
        { name: '运行时权限缺失', desc: '调用系统能力前忘记申请权限', effect: { hp: -10 }, skillHint: 'kotlin' },
      ],
      data: [
        { name: '数据倾斜', desc: '分组或分区严重不均导致分析失真', effect: { hp: -15 }, skillHint: 'sql' },
        { name: '脏数据污染', desc: '字段缺失、异常值和重复记录混入结果', effect: { hp: -20, items: ['bug'] }, skillHint: 'pandas' },
        { name: '样本偏差', desc: '抽样方式不当导致统计结论失真', effect: { hp: -15 }, skillHint: 'statistics' },
      ],
      ai: [
        { name: '梯度爆炸', desc: '训练过程中参数更新失控', effect: { hp: -20 }, skillHint: 'deep_learning' },
        { name: '过拟合陷阱', desc: '模型在训练集表现好但泛化能力差', effect: { hp: -15, items: ['bug'] }, skillHint: 'machine_learning' },
        { name: 'GPU 显存不足', desc: '批量或模型过大导致训练中断', effect: { hp: -20 }, skillHint: 'deep_learning' },
      ],
      devops: [
        { name: '容器异常退出', desc: '服务进程崩溃导致容器不断重启', effect: { hp: -20, items: ['bug'] }, skillHint: 'docker' },
        { name: '环境变量缺失', desc: '部署参数不完整导致服务启动失败', effect: { hp: -15 }, skillHint: 'linux' },
        { name: '健康检查失败', desc: '服务探针未通过导致实例被摘除', effect: { hp: -25 }, skillHint: 'kubernetes' },
      ],
      game: [
        { name: '碰撞穿透', desc: '物理检测设置不当导致角色穿模', effect: { hp: -15, items: ['bug'] }, skillHint: 'unity' },
        { name: '帧率骤降', desc: '渲染和逻辑负载过高造成掉帧', effect: { hp: -20 }, skillHint: 'unreal' },
        { name: '资源未释放', desc: '对象与资源管理不当引发泄漏', effect: { hp: -15 }, skillHint: 'csharp' },
      ],
      general: [
        { name: 'Bug 陷阱', desc: '粗心让代码埋下隐藏错误', effect: { hp: -20, items: ['bug'] } },
        { name: '语法手滑', desc: '一个小错误让程序直接无法运行', effect: { hp: -15 } },
        { name: '逻辑分支失误', desc: '判断条件写偏导致结果不符合预期', effect: { hp: -15, items: ['bug'] } },
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
        { name: '前端交付 Boss', desc: '完成从页面到组件再到工程化的综合交付', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'vue' },
      ],
      backend: [
        { name: '后端架构 Boss', desc: '完成接口、数据与服务稳定性的综合挑战', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'spring' },
      ],
      mobile: [
        { name: '移动应用 Boss', desc: '完成跨端界面、交互与发布流程挑战', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'flutter' },
      ],
      data: [
        { name: '数据洞察 Boss', desc: '完成清洗、分析与可视化输出的完整项目', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'pandas' },
      ],
      ai: [
        { name: 'AI 落地 Boss', desc: '完成模型训练、评估与应用接入挑战', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'deep_learning' },
      ],
      devops: [
        { name: '云原生 Boss', desc: '完成部署、编排、监控与稳定性综合挑战', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'kubernetes' },
      ],
      game: [
        { name: '游戏上线 Boss', desc: '完成玩法、性能与发布流程的最终挑战', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'unity' },
      ],
      general: [
        { name: '综合项目 Boss', desc: '把基础能力串成一个完整可运行的小项目', reward: { cp: 500, items: ['crystal', 'iron', 'bug'], recipe: 'legendary_sword' }, skillHint: 'python' },
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
