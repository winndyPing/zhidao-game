// ==================== 用户工具函数 ====================

// 编程相关的形容词
const adjectives = [
  'Bug', 'Code', 'Pixel', 'Byte', 'Data', 'Logic', 'Syntax', 'Binary',
  'Quantum', 'Cyber', 'Digital', 'Virtual', 'Neural', 'Crypto', 'Matrix',
  'Debug', 'Compile', 'Runtime', 'Function', 'Variable', 'Array', 'Loop',
  '递归的', '异步的', '并发的', '优化的', '重构的', '敏捷的',
];

// 编程相关的名词
const nouns = [
  'Developer', 'Hacker', 'Coder', 'Programmer', 'Engineer', 'Architect',
  'Wizard', 'Ninja', 'Guru', 'Master', 'Geek', 'Bot', 'AI', 'Script',
  'Kernel', 'Daemon', 'Stack', 'Heap', 'Cache', 'Buffer', 'Thread',
  '进程', '线程', '接口', '模块', '类', '对象', '指针', '栈',
];

// 特殊符号
const symbols = ['☆', '★', '♦', '♠', '♣', '♥', '♪', '♫', '☀', '☁', '☂', '☃', '★', '▲', '▼', '◆', '◇', '○', '●', '□', '■', '▣', '▤', '▥', '▦', '▧', '▨', '▩', '▪', '▫', '▬', '▭', '▮', '▯', '▰', '▱', '▲', '△', '▴', '▵', '▶', '▷', '▸', '▹', '►', '▻', '▼', '▽', '▾', '▿', '◀', '◁', '◂', '◃', '◄', '◅', '◆', '◇', '◈', '◉', '◊', '○', '◌', '◍', '◎', '●', '◐', '◑', '◒', '◓', '◔', '◕', '◖', '◗', '◘', '◙', '◚', '◛', '◜', '◝', '◞', '◟', '◠', '◡', '◢', '◣', '◤', '◥', '◦', '◧', '◨', '◩', '◪', '◫', '◬', '◭', '◮', '◯', '◰', '◱', '◲', '◳', '◴', '◵', '◶', '◷', '◸', '◹', '◺', '◻', '◼', '◽', '◾', '◿',];

// 颜色数组（用于生成头像）
const colors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD',
  '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9', '#F8B500', '#6C5CE7',
  '#00B894', '#00CEC9', '#0984E3', '#6C5CE7', '#B2BEC3', '#FD79A8',
  '#FDCB6E', '#E17055', '#D63031', '#74B9FF', '#A29BFE', '#81ECEC',
];

/**
 * 生成随机昵称
 * 格式：形容词 + 名词 + 可选符号
 */
export function generateNickname(): string {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const useSymbol = Math.random() > 0.5;
  
  if (useSymbol) {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const position = Math.random() > 0.5 ? 'prefix' : 'suffix';
    
    if (position === 'prefix') {
      return `${symbol}${adj}${noun}`;
    } else {
      return `${adj}${noun}${symbol}`;
    }
  }
  
  return `${adj}${noun}`;
}

/**
 * 生成随机头像（SVG 数据 URI）
 * @param seed 用于生成确定性头像的种子（如手机号）
 */
export function generateAvatar(seed: string): string {
  // 从种子生成哈希值
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  
  // 使用哈希值选择颜色
  const colorIndex = Math.abs(hash) % colors.length;
  const bgColor = colors[colorIndex];
  
  // 生成简单的像素风格头像
  const size = 100;
  const gridSize = 5;
  const cellSize = size / gridSize;
  
  // 生成对称的像素图案
  const pattern: boolean[][] = [];
  for (let i = 0; i < gridSize; i++) {
    pattern[i] = [];
    for (let j = 0; j < Math.ceil(gridSize / 2); j++) {
      // 使用种子生成确定性随机
      const randomValue = Math.abs(Math.sin(hash * (i * gridSize + j) * 9999));
      pattern[i][j] = randomValue > 0.5;
    }
  }
  
  // 构建 SVG
  let rects = '';
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      // 镜像右侧
      const sourceJ = j < Math.ceil(gridSize / 2) ? j : gridSize - 1 - j;
      if (pattern[i][sourceJ]) {
        const x = j * cellSize;
        const y = i * cellSize;
        rects += `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="${bgColor}"/>`;
      }
    }
  }
  
  // 添加边框
  const border = `<rect x="0" y="0" width="${size}" height="${size}" fill="none" stroke="#0f380f" stroke-width="4"/>`;
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" fill="#8bac0f"/>
    ${rects}
    ${border}
  </svg>`;
  
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

/**
 * 生成验证码（6位数字）
 */
export function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * 验证手机号格式
 */
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^1[3-9]\d{9}$/;
  return phoneRegex.test(phone);
}

/**
 * 格式化手机号（隐藏中间4位）
 */
export function maskPhone(phone: string): string {
  if (phone.length !== 11) return phone;
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}
