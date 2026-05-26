/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gb': {
          'bg': '#9bbc0f',
          'light': '#8bac0f',
          'dark': '#306230',
          'darker': '#0f380f',
          'gold': '#d4af37',
          'textgold': '#8b4513',
          'silver': '#c0c0c0',
          'rare': '#4a6da8',
          'epic': '#9b4a9b',
          'legendary': '#d4a017',
        },
      },
      fontFamily: {
        'pixel': ['"Courier New"', '"Microsoft YaHei"', '"PingFang SC"', 'monospace'],
      },
      boxShadow: {
        'pixel': '-2px -2px 0 0 #0f380f, 2px 2px 0 0 #9bbc0f, inset -1px -1px 0 0 #0f380f, inset 1px 1px 0 0 #9bbc0f',
        'pixel-active': '-1px -1px 0 0 #0f380f, 1px 1px 0 0 #9bbc0f, inset -2px -2px 0 0 #0f380f, inset 2px 2px 0 0 #9bbc0f',
        'pixel-lg': '12px 12px 0 rgba(0,0,0,0.2)',
      },
      borderRadius: {
        'gameboy': '16px 16px 8px 8px',
      },
      animation: {
        'pop-in': 'popIn 0.2s step-end',
        'slide-up': 'slideUp 0.3s step-end',
      },
      keyframes: {
        popIn: {
          'from': { transform: 'translate(-50%, -30%) scale(0.8)', opacity: '0' },
          'to': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
        },
        slideUp: {
          'from': { transform: 'translateX(-50%) translateY(100%)', opacity: '0' },
          'to': { transform: 'translateX(-50%) translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
