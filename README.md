# 职道 · 代码迷宫 & 装备工坊

一个基于 **Vue 3 + TypeScript + Tailwind CSS + Vite** 开发的像素风格 Roguelike 游戏。

## 技术栈

- **框架**: Vue 3 (Composition API)
- **状态管理**: Pinia
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **构建工具**: Vite 5

## 功能特性

### 用户系统
- 手机号 + 验证码登录
- 自动生成像素风格头像（基于手机号）
- 自动生成随机昵称（编程主题 + 可选符号）
- 支持修改昵称、重新随机生成

### 迷宫探索
- 4x4 随机生成迷宫
- 多种房间类型：战斗、宝藏、谜题、休息、陷阱、Boss
- 确定性随机生成（相同种子生成相同迷宫）

### 装备系统
- 武器、护甲、靴子三部位装备
- 装备品质：普通、稀有、史诗、传说
- 属性加成实时计算

### 合成工坊
- 收集材料合成装备
- 解锁配方系统
- 材料管理和消耗

### 谜题系统
- Python 编程相关谜题
- 答对获得奖励，答错损失 HP

## 项目结构

```
zhidao-game/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── dungeon/         # 迷宫组件（地图、战斗、宝藏、谜题、Boss）
│   │   ├── StatusBar.vue    # 状态栏
│   │   ├── BottomNav.vue    # 底部导航
│   │   └── MaterialBadge.vue # 材料徽章
│   ├── views/               # 页面视图
│   │   ├── DungeonView.vue  # 迷宫页面
│   │   ├── CraftView.vue    # 工坊页面
│   │   └── InventoryView.vue # 背包页面
│   ├── stores/
│   │   └── gameStore.ts     # Pinia 游戏状态管理
│   ├── utils/
│   │   ├── dungeonGenerator.ts  # 迷宫生成器
│   │   ├── equipmentSystem.ts   # 装备系统
│   │   └── roomEvents.ts        # 房间事件处理
│   ├── types/
│   │   └── game.ts          # TypeScript 类型定义
│   ├── styles/
│   │   └── index.css        # Tailwind + 自定义样式
│   ├── components/
│   │   └── GameContainer.vue # 游戏容器组件
│   ├── App.vue              # 应用根组件
│   └── main.ts              # 入口文件
├── package.json
├── vite.config.ts
├── tailwind.config.js        # GameBoy 主题配置
├── tsconfig.json
└── README.md
```

## 安装和运行

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建

```bash
npm run build
```

### 预览

```bash
npm run preview
```

## 游戏玩法

1. **探索迷宫**: 点击相邻房间进行探索
2. **战斗**: 与代码怪物战斗，获得材料和 CP
3. **解谜**: 回答编程相关问题获得奖励
4. **收集**: 收集各种材料
5. **合成**: 在工坊中合成更强装备
6. **装备**: 在背包中装备物品提升属性
7. **挑战Boss**: 击败最终 Boss 获得传说配方

## 存档系统

游戏使用 `localStorage` 自动保存进度，包含：
- 玩家状态
- 迷宫进度
- 背包物品
- 配方解锁状态

## 主题风格

采用 GameBoy 经典配色：
- 背景色: `#9bbc0f`
- 深色: `#0f380f`
- 边框色: `#306230`
- 高亮色: `#8bac0f`

## 许可证

MIT

---

## 转换为 UniApp 小程序

如需将此项目转换为 UniApp 微信小程序，请使用官方脚手架创建新项目，然后将 `src` 目录下的代码复制过去，并替换 `uni.xxx` API 调用。

### 创建 UniApp 项目

```bash
npx degit dcloudio/uni-preset-vue#vite my-uniapp-game
cd my-uniapp-game
npm install
```

然后复制本项目的 `src` 代码并适配 UniApp API。
