import type { CareerDirection } from '@/types/game';

// 职业方向与技能推荐数据
export const careerDirections: CareerDirection[] = [
    {
        id: 'frontend',
        name: '前端开发',
        icon: '🎨',
        category: 'frontend',
        description: '围绕页面、交互与工程化，交付可维护的 Web 体验',
        skills: [
            {
                id: 'html_css',
                name: 'HTML/CSS',
                icon: '📄',
                description: '语义化结构、样式系统与响应式布局',
                priority: 'core',
                quizs: [
                    {
                        question: '以下哪个HTML标签用于定义最重要的标题？',
                        options: ['&lt;h1&gt;', '&lt;h6&gt;', '&lt;head&gt;', '&lt;header&gt;'],
                        answer: 0,
                        explanation: '&lt;h1&gt; 定义最重要的标题，&lt;h6&gt; 定义最不重要的标题'
                    },
                    {
                        question: '哪个HTML属性用于指定内联CSS样式？',
                        options: ['class', 'style', 'css', 'styles'],
                        answer: 1,
                        explanation: 'style 属性用于在元素上直接指定内联CSS样式'
                    },
                    {
                        question: '以下哪个标签用于定义HTML文档的标题（显示在浏览器标签页上）？',
                        options: ['&lt;title&gt;', '&lt;head&gt;', '&lt;h1&gt;', '&lt;meta&gt;'],
                        answer: 0,
                        explanation: '&lt;title&gt; 标签定义文档的标题，显示在浏览器标签页上'
                    },
                    {
                        question: '哪个HTML标签用于插入换行符？',
                        options: ['&lt;br&gt;', '&lt;hr&gt;', '&lt;break&gt;', '&lt;lb&gt;'],
                        answer: 0,
                        explanation: '&lt;br&gt; 标签插入一个换行符'
                    },
                    {
                        question: '以下哪个是HTML5新增的语义化标签？',
                        options: ['&lt;div&gt;', '&lt;span&gt;', '&lt;article&gt;', '&lt;b&gt;'],
                        answer: 2,
                        explanation: '&lt;article&gt; 是HTML5新增的语义化标签，表示独立的自包含内容'
                    },
                    {
                        question: '哪个HTML属性用于指定图片的替代文本？',
                        options: ['src', 'href', 'alt', 'title'],
                        answer: 2,
                        explanation: 'alt 属性为图片提供替代文本，当图片无法显示时使用'
                    },
                    {
                        question: '以下哪个标签用于创建超链接？',
                        options: ['&lt;link&gt;', '&lt;a&gt;', '&lt;href&gt;', '&lt;nav&gt;'],
                        answer: 1,
                        explanation: '&lt;a&gt; 标签定义超链接，用于页面间跳转'
                    },
                    {
                        question: '哪个HTML标签用于定义无序列表？',
                        options: ['&lt;ol&gt;', '&lt;ul&gt;', '&lt;li&gt;', '&lt;dl&gt;'],
                        answer: 1,
                        explanation: '&lt;ul&gt; 定义无序列表，&lt;ol&gt; 定义有序列表'
                    },
                    {
                        question: '以下哪个标签用于定义表格？',
                        options: ['&lt;table&gt;', '&lt;tab&gt;', '&lt;grid&gt;', '&lt;tr&gt;'],
                        answer: 0,
                        explanation: '&lt;table&gt; 标签定义HTML表格'
                    },
                    {
                        question: '哪个HTML标签用于定义导航链接的容器？',
                        options: ['&lt;navigation&gt;', '&lt;nav&gt;', '&lt;menu&gt;', '&lt;navigate&gt;'],
                        answer: 1,
                        explanation: '&lt;nav&gt; 标签定义导航链接的容器，是HTML5语义化标签'
                    },
                    {
                        question: '以下哪个CSS属性用于设置文本颜色？',
                        options: ['background-color', 'color', 'font-color', 'text-color'],
                        answer: 1,
                        explanation: 'color 属性设置文本的前景色'
                    },
                    {
                        question: '哪个CSS属性用于设置元素的外边距？',
                        options: ['padding', 'margin', 'border', 'spacing'],
                        answer: 1,
                        explanation: 'margin 设置元素的外边距，padding 设置内边距'
                    },
                    {
                        question: 'CSS中，哪个属性用于设置字体大小？',
                        options: ['font-style', 'font-weight', 'font-size', 'text-size'],
                        answer: 2,
                        explanation: 'font-size 属性设置字体大小'
                    },
                    {
                        question: '以下哪个是CSS盒模型的正确顺序（从内到外）？',
                        options: ['margin → border → padding → content', 'content → padding → border → margin', 'padding → content → border → margin', 'content → margin → border → padding'],
                        answer: 1,
                        explanation: 'CSS盒模型从内到外依次是：内容(content)、内边距(padding)、边框(border)、外边距(margin)'
                    },
                    {
                        question: '哪个CSS属性用于设置元素的背景颜色？',
                        options: ['color', 'background-color', 'bg-color', 'background'],
                        answer: 1,
                        explanation: 'background-color 设置元素的背景颜色'
                    },
                    {
                        question: 'CSS中，哪个属性用于控制元素的显示方式（如块级、行内）？',
                        options: ['display', 'position', 'float', 'visibility'],
                        answer: 0,
                        explanation: 'display 属性控制元素的显示方式，如 block、inline、flex 等'
                    },
                    {
                        question: '以下哪个单位是相对于父元素字体大小的？',
                        options: ['px', 'em', 'rem', 'vw'],
                        answer: 1,
                        explanation: 'em 相对于当前元素的字体大小，rem 相对于根元素字体大小'
                    },
                    {
                        question: '哪个CSS属性用于设置元素的圆角边框？',
                        options: ['border-round', 'radius', 'border-radius', 'corner-radius'],
                        answer: 2,
                        explanation: 'border-radius 属性设置元素的圆角边框'
                    },
                    {
                        question: 'CSS中，哪个属性用于设置元素的透明度？',
                        options: ['transparent', 'opacity', 'alpha', 'visibility'],
                        answer: 1,
                        explanation: 'opacity 属性设置元素的透明度，值范围从0.0到1.0'
                    },
                    {
                        question: '以下哪个CSS选择器的优先级最高？',
                        options: ['元素选择器', '类选择器', 'ID选择器', '内联样式'],
                        answer: 3,
                        explanation: '内联样式优先级最高，其次是ID选择器、类选择器、元素选择器'
                    },
                    {
                        question: '什么是响应式网页设计？',
                        options: ['让网页在不同设备上都能良好显示', '让网页加载速度更快', '让网页有动画效果', '让网页更安全'],
                        answer: 0,
                        explanation: '响应式网页设计使网页能够适应不同屏幕尺寸和设备'
                    },
                    {
                        question: '以下哪个CSS单位最适合响应式设计？',
                        options: ['px', 'pt', 'rem', 'cm'],
                        answer: 2,
                        explanation: 'rem相对于根元素字体大小，更适合响应式设计'
                    },
                    {
                        question: '哪个CSS属性用于创建响应式网格布局？',
                        options: ['grid', 'flexbox', 'float', '以上都是'],
                        answer: 3,
                        explanation: 'Grid和Flexbox都是创建响应式布局的强大工具'
                    },
                    {
                        question: 'CSS媒体查询中，以下哪个用于检测屏幕宽度？',
                        options: ['@media screen and (width)', '@media (max-width)', '@media (device-width)', '以上都是'],
                        answer: 3,
                        explanation: '媒体查询可以使用多种条件检测屏幕特性'
                    },
                    {
                        question: '响应式设计中，"移动优先"是什么意思？',
                        options: ['先设计移动端，再适配桌面', '先设计桌面端，再适配移动', '只设计移动端', '只设计桌面端'],
                        answer: 0,
                        explanation: '移动优先是先为移动设备设计，然后逐步增强以适应更大屏幕'
                    },
                    {
                        question: '哪个viewport设置最常用？',
                        options: ['width=device-width, initial-scale=1', 'width=1080', 'user-scalable=no', 'maximum-scale=1'],
                        answer: 0,
                        explanation: 'width=device-width, initial-scale=1 是最常用的viewport设置'
                    },
                    {
                        question: '响应式图片中，哪个属性最有用？',
                        options: ['srcset', 'alt', 'title', 'width'],
                        answer: 0,
                        explanation: 'srcset 允许为不同屏幕尺寸提供不同图片'
                    },
                    {
                        question: '以下哪个不是响应式设计的原则？',
                        options: ['弹性网格布局', '弹性图片', '固定宽度', '媒体查询'],
                        answer: 2,
                        explanation: '固定宽度违背了响应式设计的弹性原则'
                    },
                    {
                        question: 'CSS中，哪个属性可以创建响应式排版？',
                        options: ['clamp()', 'calc()', 'min()', 'max()'],
                        answer: 0,
                        explanation: 'clamp() 可以设置一个响应式的值范围'
                    },
                    {
                        question: '响应式设计中，如何处理导航菜单？',
                        options: ['汉堡菜单', '水平滚动', '缩小文字', '隐藏导航'],
                        answer: 0,
                        explanation: '汉堡菜单是移动端常见的导航解决方案'
                    },
                    {
                        question: 'HTML中，哪个标签用于定义最重要的标题？',
                        options: ['&lt;h1&gt;', '&lt;h2&gt;', '&lt;h3&gt;', '&lt;h4&gt;'],
                        answer: 0,
                        explanation: '&lt;h1&gt; 定义最重要的标题'
                    },
                    {
                        question: 'CSS中，哪个属性用于设置文本对齐方式？',
                        options: ['text-align', 'align', 'vertical-align', 'text-justify'],
                        answer: 0,
                        explanation: 'text-align 设置文本水平对齐方式'
                    },
                    {
                        question: '以下哪个是块级元素？',
                        options: ['&lt;span&gt;', '&lt;div&gt;', '&lt;a&gt;', '&lt;img&gt;'],
                        answer: 1,
                        explanation: '&lt;div&gt; 是块级元素，&lt;span&gt; 是行内元素'
                    },
                    {
                        question: 'CSS中，哪个属性用于设置元素宽度？',
                        options: ['height', 'width', 'size', 'max-width'],
                        answer: 1,
                        explanation: 'width 设置元素的宽度'
                    },
                    {
                        question: 'HTML中，哪个标签用于插入图片？',
                        options: ['&lt;img&gt;', '&lt;image&gt;', '&lt;pic&gt;', '&lt;picture&gt;'],
                        answer: 0,
                        explanation: '&lt;img&gt; 标签用于插入图片'
                    },
                    {
                        question: 'CSS中，哪个属性用于设置字体粗细？',
                        options: ['font-style', 'font-weight', 'font-size', 'font-family'],
                        answer: 1,
                        explanation: 'font-weight 设置字体的粗细'
                    },
                    {
                        question: '以下哪个HTML标签用于定义无序列表？',
                        options: ['&lt;ol&gt;', '&lt;ul&gt;', '&lt;li&gt;', '&lt;dl&gt;'],
                        answer: 1,
                        explanation: '&lt;ul&gt; 定义无序列表'
                    },
                    {
                        question: 'CSS中，哪个属性用于设置元素浮动？',
                        options: ['float', 'position', 'display', 'clear'],
                        answer: 0,
                        explanation: 'float 属性设置元素浮动'
                    },
                    {
                        question: 'HTML中，哪个属性用于指定链接的目标地址？',
                        options: ['src', 'href', 'link', 'url'],
                        answer: 1,
                        explanation: 'href 属性指定链接的目标地址'
                    },
                    {
                        question: 'CSS中，哪个属性用于设置元素的内边距？',
                        options: ['margin', 'padding', 'spacing', 'gap'],
                        answer: 1,
                        explanation: 'padding 设置元素的内边距'
                    }
                ],
                resources: [
                    {
                        name: 'MDN Web Docs - HTML',
                        url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML',
                        type: 'docs'
                    },
                    {
                        name: 'MDN Web Docs - CSS',
                        url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS',
                        type: 'docs'
                    },
                    {
                        name: 'freeCodeCamp - 响应式网页设计',
                        url: 'https://www.freecodecamp.org/chinese/learn/2022/responsive-web-design/',
                        type: 'course'
                    },
                    {
                        name: '菜鸟教程 - HTML/CSS',
                        url: 'https://www.runoob.com/html/html-tutorial.html',
                        type: 'tutorial'
                    }
                ]
            },
            {
                id: 'javascript',
                name: 'JavaScript',
                icon: '⚡',
                description: '浏览器交互、异步逻辑与前端编程基础',
                priority: 'core',
                quizs: [
                    {
                        question: 'JavaScript中，哪个关键字用于声明变量？',
                        options: ['var', 'let', 'const', '以上都是'],
                        answer: 3,
                        explanation: 'var、let、const都可以声明变量，但作用域和可变性不同'
                    },
                    {
                        question: '以下哪个是JavaScript的基本数据类型？',
                        options: ['string', 'number', 'boolean', '以上都是'],
                        answer: 3,
                        explanation: 'JavaScript的基本数据类型包括string、number、boolean、null、undefined、symbol'
                    },
                    {
                        question: 'JavaScript中，哪个方法用于向控制台输出信息？',
                        options: ['console.log()', 'print()', 'echo()', 'document.write()'],
                        answer: 0,
                        explanation: 'console.log() 用于在控制台输出信息'
                    },
                    {
                        question: '以下哪个运算符用于严格相等比较（值和类型都相等）？',
                        options: ['==', '===', '=', '!='],
                        answer: 1,
                        explanation: '=== 进行严格相等比较，值和类型都必须相等'
                    },
                    {
                        question: 'JavaScript中，哪个函数用于将字符串转换为整数？',
                        options: ['parseInt()', 'parseFloat()', 'Number()', 'String()'],
                        answer: 0,
                        explanation: 'parseInt() 将字符串转换为整数'
                    },
                    {
                        question: '以下哪个是JavaScript的循环语句？',
                        options: ['for', 'while', 'do...while', '以上都是'],
                        answer: 3,
                        explanation: 'JavaScript支持多种循环语句：for、while、do...while'
                    },
                    {
                        question: 'JavaScript中，哪个关键字用于定义函数？',
                        options: ['function', 'def', 'func', 'define'],
                        answer: 0,
                        explanation: 'function 关键字用于定义函数'
                    },
                    {
                        question: '以下哪个是JavaScript的数组方法？',
                        options: ['map()', 'filter()', 'reduce()', '以上都是'],
                        answer: 3,
                        explanation: 'map()、filter()、reduce()都是数组的常用方法'
                    },
                    {
                        question: 'JavaScript中，哪个对象用于处理日期和时间？',
                        options: ['Date', 'Time', 'Calendar', 'DateTime'],
                        answer: 0,
                        explanation: 'Date 对象用于处理日期和时间'
                    },
                    {
                        question: '以下哪个是JavaScript的严格模式指令？',
                        options: ['"use strict"', '"strict mode"', '"use strict mode"', '"strict"'],
                        answer: 0,
                        explanation: '"use strict" 指令启用JavaScript严格模式'
                    },
                    {
                        question: 'JavaScript中，哪个关键字用于声明常量？',
                        options: ['const', 'let', 'var', 'constant'],
                        answer: 0,
                        explanation: 'const 声明常量，其值不能被重新赋值'
                    },
                    {
                        question: '以下哪个不是JavaScript的 falsy 值？',
                        options: ['0', '""', 'null', '[]'],
                        answer: 3,
                        explanation: '空数组 [] 是 truthy 值，不是 falsy'
                    },
                    {
                        question: 'JavaScript中，哪个方法用于数组的迭代？',
                        options: ['forEach()', 'each()', 'iterate()', 'loop()'],
                        answer: 0,
                        explanation: 'forEach() 方法用于数组的迭代'
                    },
                    {
                        question: '以下哪个是JavaScript的模板字符串语法？',
                        options: ['"text ${variable}"', "'text ${variable}'", '`text ${variable}`', '`text $variable`'],
                        answer: 2,
                        explanation: '模板字符串使用反引号 ` 和 ${} 语法'
                    },
                    {
                        question: 'JavaScript中，哪个操作符用于展开数组或对象？',
                        options: ['...', '..', '++', '**'],
                        answer: 0,
                        explanation: '展开运算符 ... 用于展开数组或对象'
                    },
                    {
                        question: '以下哪个是JavaScript的异步编程方式？',
                        options: ['callback', 'Promise', 'async/await', '以上都是'],
                        answer: 3,
                        explanation: 'JavaScript支持多种异步编程方式'
                    },
                    {
                        question: 'JavaScript中，哪个方法用于创建Promise？',
                        options: ['new Promise()', 'Promise.create()', 'Promise.resolve()', 'Promise.of()'],
                        answer: 0,
                        explanation: 'new Promise() 构造函数用于创建Promise'
                    },
                    {
                        question: '以下哪个是JavaScript的模块导入语法？',
                        options: ['import x from "module"', 'require("module")', 'include "module"', 'using "module"'],
                        answer: 0,
                        explanation: 'import 是ES6模块的导入语法'
                    },
                    {
                        question: 'JavaScript中，哪个对象表示浏览器窗口？',
                        options: ['window', 'document', 'global', 'screen'],
                        answer: 0,
                        explanation: 'window 对象表示浏览器窗口'
                    },
                    {
                        question: '以下哪个是JavaScript的类定义语法？',
                        options: ['class MyClass {}', 'function MyClass() {}', 'MyClass = class {}', '以上都是'],
                        answer: 3,
                        explanation: 'JavaScript支持多种方式定义类'
                    },
                    {
                        question: 'JavaScript中，哪个关键字用于处理异步操作的错误？',
                        options: ['try/catch', 'catch/throw', 'error/handle', 'try/error'],
                        answer: 0,
                        explanation: 'try/catch 语句用于处理异步操作中的错误'
                    },
                    {
                        question: '以下哪个是JavaScript的闭包（Closure）？',
                        options: ['函数内部定义的函数', '全局变量', '内置对象', '原型链'],
                        answer: 0,
                        explanation: '闭包是函数内部定义的函数，可以访问外部函数的变量'
                    },
                    {
                        question: 'JavaScript中，哪个方法用于绑定this上下文？',
                        options: ['bind()', 'call()', 'apply()', '以上都是'],
                        answer: 3,
                        explanation: 'bind()、call()、apply()都可以绑定this上下文'
                    },
                    {
                        question: '以下哪个是JavaScript的事件循环（Event Loop）？',
                        options: ['处理异步回调的机制', '循环语法', '事件绑定', '定时器'],
                        answer: 0,
                        explanation: '事件循环是JavaScript处理异步回调的机制'
                    },
                    {
                        question: 'JavaScript中，哪个对象用于存储键值对？',
                        options: ['Object', 'Map', 'Set', 'Array'],
                        answer: 1,
                        explanation: 'Map 对象专门用于存储键值对'
                    },
                    {
                        question: '以下哪个是JavaScript的生成器函数语法？',
                        options: ['function*', '*function', 'generator function', 'function gen'],
                        answer: 0,
                        explanation: 'function* 定义生成器函数'
                    },
                    {
                        question: 'JavaScript中，哪个方法用于对象的浅拷贝？',
                        options: ['Object.assign()', 'Object.copy()', 'Object.clone()', 'Object.duplicate()'],
                        answer: 0,
                        explanation: 'Object.assign() 用于对象的浅拷贝'
                    },
                    {
                        question: '以下哪个是JavaScript的代理对象（Proxy）？',
                        options: ['拦截对象操作的对象', '代理服务器', '中间件', '装饰器'],
                        answer: 0,
                        explanation: 'Proxy 对象用于定义基本操作的自定义行为'
                    },
                    {
                        question: 'JavaScript中，哪个方法用于数组的去重？',
                        options: ['Set', 'unique()', 'distinct()', 'filter()'],
                        answer: 0,
                        explanation: '可以使用 Set 进行数组去重'
                    },
                    {
                        question: '以下哪个是JavaScript的防抖（Debounce）？',
                        options: ['限制函数执行频率的技术', '函数延迟执行', '函数缓存', '函数柯里化'],
                        answer: 0,
                        explanation: '防抖是一种限制函数执行频率的技术'
                    },
                    {
                        question: '以下哪个是常见的数据结构？',
                        options: ['数组', '链表', '栈', '以上都是'],
                        answer: 3,
                        explanation: '数组、链表、栈都是常见的数据结构'
                    },
                    {
                        question: 'JavaScript中，哪个方法用于数组的排序？',
                        options: ['sort()', 'order()', 'arrange()', 'sequence()'],
                        answer: 0,
                        explanation: 'sort() 方法用于数组排序'
                    },
                    {
                        question: '以下哪个是二分查找的前提条件？',
                        options: ['数组必须有序', '数组必须无序', '数组必须去重', '数组必须正序'],
                        answer: 0,
                        explanation: '二分查找要求数组必须是有序的'
                    },
                    {
                        question: 'JavaScript中，哪个方法用于数组的翻转？',
                        options: ['reverse()', 'flip()', 'turn()', 'invert()'],
                        answer: 0,
                        explanation: 'reverse() 方法用于数组翻转'
                    },
                    {
                        question: '以下哪个是递归函数的特点？',
                        options: ['函数调用自身', '函数调用其他函数', '函数有循环', '函数有返回值'],
                        answer: 0,
                        explanation: '递归函数的特点是函数调用自身'
                    },
                    {
                        question: 'JavaScript中，哪个方法用于数组的查找？',
                        options: ['find()', 'search()', 'locate()', 'index()'],
                        answer: 0,
                        explanation: 'find() 方法返回数组中满足条件的第一个元素'
                    },
                    {
                        question: '以下哪个是快速排序的时间复杂度？',
                        options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'],
                        answer: 0,
                        explanation: '快速排序的平均时间复杂度是O(n log n)'
                    },
                    {
                        question: 'JavaScript中，哪个方法用于数组的切片？',
                        options: ['slice()', 'splice()', 'cut()', 'subarray()'],
                        answer: 0,
                        explanation: 'slice() 方法返回数组的浅拷贝切片'
                    },
                    {
                        question: '以下哪个是栈（Stack）的特点？',
                        options: ['后进先出', '先进先出', '先进后出', '随机存取'],
                        answer: 0,
                        explanation: '栈的特点是后进先出（LIFO）'
                    },
                    {
                        question: 'JavaScript中，哪个方法用于数组的连接？',
                        options: ['concat()', 'join()', 'merge()', 'combine()'],
                        answer: 0,
                        explanation: 'concat() 方法用于合并两个或多个数组'
                    }
                ],
                resources: [
                    {
                        name: 'MDN Web Docs - JavaScript',
                        url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
                        type: 'docs'
                    },
                    {
                        name: 'JavaScript.info',
                        url: 'https://zh.javascript.info/',
                        type: 'tutorial'
                    },
                    {
                        name: '现代JavaScript教程',
                        url: 'https://zh.javascript.info/',
                        type: 'course'
                    },
                    {
                        name: 'freeCodeCamp - JavaScript算法与数据结构',
                        url: 'https://www.freecodecamp.org/chinese/learn/javascript-algorithms-and-data-structures/',
                        type: 'course'
                    }
                ]
            },
            {
                id: 'typescript',
                name: 'TypeScript',
                icon: '📘',
                description: '为大型前端项目提供类型约束与可维护性',
                priority: 'core',
                quizs: [
                    {
                        question: 'TypeScript是哪种编程语言的超集？',
                        options: ['Java', 'Python', 'JavaScript', 'C#'],
                        answer: 2,
                        explanation: 'TypeScript 是 JavaScript 的超集，它在 JavaScript 的基础上添加了静态类型系统。'
                    },
                    {
                        question: '以下哪个命令用于全局安装TypeScript编译器？',
                        options: ['npm install typescript', 'npm install -g typescript', 'npm install tsc', 'npm install -g tsc'],
                        answer: 1,
                        explanation: '使用 npm install -g typescript 命令可以全局安装TypeScript编译器，安装后可使用 tsc 命令。'
                    },
                    {
                        question: 'TypeScript配置文件的默认名称是什么？',
                        options: ['typescript.json', 'tsconfig.json', 'tsconfig.ts', 'typescript.config.js'],
                        answer: 1,
                        explanation: 'tsconfig.json 是TypeScript项目的配置文件，用于指定编译选项和项目文件。'
                    },
                    {
                        question: '在TypeScript中，以下哪个不是基本类型？',
                        options: ['string', 'number', 'boolean', 'integer'],
                        answer: 3,
                        explanation: 'TypeScript的基本类型包括 string, number, boolean, null, undefined, symbol等，没有独立的 integer 类型。'
                    },
                    {
                        question: '以下哪个符号用于定义类型注解？',
                        options: [':', '=', '=>', '->'],
                        answer: 0,
                        explanation: '在TypeScript中，使用冒号 : 来定义类型注解，例如 let name: string = "Alice";'
                    },
                    {
                        question: 'TypeScript中的 any 类型表示什么？',
                        options: ['任意类型', '数字类型', '数组类型', '空类型'],
                        answer: 0,
                        explanation: 'any 类型表示可以接受任何类型的值，使用它会关闭对该变量的类型检查。'
                    },
                    {
                        question: '以下哪个关键字用于定义接口？',
                        options: ['class', 'interface', 'type', 'implements'],
                        answer: 1,
                        explanation: 'interface 关键字用于定义接口，描述对象的形状。'
                    },
                    {
                        question: 'TypeScript中，void 类型通常用于什么场景？',
                        options: ['没有任何返回值的函数', '尚未确定的类型', '空值', '函数参数'],
                        answer: 0,
                        explanation: 'void 类型通常用于表示没有任何返回值的函数的返回值类型。'
                    },
                    {
                        question: 'TypeScript中的元组（Tuple）是什么？',
                        options: ['一种数组，元素类型可不同且长度固定', '任意类型的数组', '一种特殊的对象', '键值对集合'],
                        answer: 0,
                        explanation: '元组是一种特殊的数组，它允许元素类型各不相同，并且长度是固定的。'
                    },
                    {
                        question: '以下哪个选项是TypeScript枚举（enum）的正确用法？',
                        options: ['enum Color { Red, Green, Blue }', 'let Color = { Red, Green, Blue }', 'const Color = [Red, Green, Blue]', 'type Color = "Red" | "Green" | "Blue"'],
                        answer: 0,
                        explanation: '使用 enum 关键字定义枚举，如 enum Color { Red, Green, Blue }。'
                    },
                    {
                        question: 'TypeScript的核心特性是什么？',
                        options: ['静态类型系统', '动态类型', '函数式编程', '面向对象'],
                        answer: 0,
                        explanation: 'TypeScript最核心的特性是其可选的静态类型系统，能够在编译时进行类型检查。'
                    },
                    {
                        question: '以下哪个文件扩展名是TypeScript源代码文件的？',
                        options: ['.js', '.ts', '.jsx', '.tsx'],
                        answer: 1,
                        explanation: '.ts 是标准的TypeScript源代码文件扩展名，.tsx 用于包含JSX语法的文件。'
                    },
                    {
                        question: 'TypeScript中，联合类型使用哪个符号定义？',
                        options: ['&', '|', ':', '?'],
                        answer: 1,
                        explanation: '联合类型使用 | 符号定义，表示一个值可以是几种类型之一，例如 string | number。'
                    },
                    {
                        question: '以下哪个是TypeScript中可选属性的标记？',
                        options: ['?', '!', '*', '~'],
                        answer: 0,
                        explanation: '在接口或类型别名中，使用 ? 标记属性为可选，例如 age?: number。'
                    },
                    {
                        question: 'TypeScript中的泛型（Generics）主要目的是什么？',
                        options: ['创建可重用的组件，支持多种类型', '提高运行效率', '实现面向对象', '简化语法'],
                        answer: 0,
                        explanation: '泛型的主要目的是创建可重用的组件，使其能支持多种类型，同时保持类型安全。'
                    },
                    {
                        question: '以下哪个关键字用于声明一个只读属性？',
                        options: ['const', 'readonly', 'static', 'final'],
                        answer: 1,
                        explanation: '在TypeScript中，使用 readonly 关键字可以将属性声明为只读，初始化后不能再被修改。'
                    },
                    {
                        question: '类型断言可以使用哪两种语法？',
                        options: ['<type>value 和 value as type', 'value:type 和 type(value)', 'value<?>type 和 type!value', 'typeof value 和 instanceof value'],
                        answer: 0,
                        explanation: '类型断言有两种等价的语法：尖括号语法 <type>value 和 as语法 value as type。'
                    },
                    {
                        question: 'TypeScript中的 never 类型代表什么？',
                        options: ['永远不会发生的值', '未定义的值', '空值', '任意值'],
                        answer: 0,
                        explanation: 'never 类型表示永远不会发生的值，例如一个总是抛出异常的函数或无限循环的返回值类型。'
                    },
                    {
                        question: '以下哪个是TypeScript中模块的导入语法？',
                        options: ['import * as A from "./a"', 'require("./a")', 'using("./a")', 'include("./a")'],
                        answer: 0,
                        explanation: 'TypeScript支持ES6模块语法，使用 import ... from ... 进行导入。'
                    },
                    {
                        question: 'TypeScript编译器（tsc）的主要作用是什么？',
                        options: ['将TypeScript代码编译成JavaScript', '运行TypeScript代码', '调试TypeScript代码', '打包TypeScript项目'],
                        answer: 0,
                        explanation: 'TypeScript编译器（tsc）的主要作用是将TypeScript代码编译成可以在任何JavaScript环境中运行的JavaScript代码。'
                    },
                    {
                        question: 'TypeScript的类型系统是“结构类型”还是“名义类型”？',
                        options: ['结构类型', '名义类型', '两者都是', '两者都不是'],
                        answer: 0,
                        explanation: 'TypeScript使用“结构类型”系统，类型兼容性基于成员的类型，而不是基于名称。'
                    },
                    {
                        question: '在TypeScript中，哪个内置工具类型可以构造一个类型，将T的所有属性设置为可选？',
                        options: ['Partial<T>', 'Required<T>', 'Readonly<T>', 'Record<K, T>'],
                        answer: 0,
                        explanation: 'Partial<T> 工具类型用于构造一个类型，将T的所有属性设置为可选。'
                    },
                    {
                        question: '哪个内置工具类型可以构造一个类型，选取T中所有属性设置为只读？',
                        options: ['Partial<T>', 'Required<T>', 'Readonly<T>', 'Record<K, T>'],
                        answer: 2,
                        explanation: 'Readonly<T> 工具类型用于构造一个类型，将T的所有属性设置为只读。'
                    },
                    {
                        question: '什么是TypeScript中的“类型保护”？',
                        options: ['在运行时检查类型的技术', '编译时的安全检查', '一种类型注解', '一个内置函数'],
                        answer: 0,
                        explanation: '类型保护是一些表达式，它们在运行时执行检查，以确保在某个作用域里的变量属于一个更具体的类型。'
                    },
                    {
                        question: '以下哪个是用户定义的类型保护函数？',
                        options: ['函数返回类型是 value is Type 的函数', '返回布尔值的函数', '使用typeof操作的函数', '使用instanceof操作的函数'],
                        answer: 0,
                        explanation: '用户定义的类型保护函数是指返回类型为 value is Type 的函数，用于自定义类型检查逻辑。'
                    },
                    {
                        question: 'TypeScript中，交叉类型使用哪个符号定义？',
                        options: ['&', '|', ':', '?'],
                        answer: 0,
                        explanation: '交叉类型使用 & 符号定义，用于将多个类型合并为一个类型。'
                    },
                    {
                        question: '在高级类型中，keyof T 操作符的作用是什么？',
                        options: ['获取T的所有属性名组成的联合类型', '获取T的所有属性值组成的联合类型', '检查T是否包含某个键', '获取T的构造函数'],
                        answer: 0,
                        explanation: 'keyof T 操作符用于获取类型T的所有属性名（键）组成的联合类型。'
                    },
                    {
                        question: 'TypeScript中的映射类型（Mapped Types）是什么？',
                        options: ['基于旧类型创建新类型的方式', '一种数组类型', '键值对的映射', '函数映射'],
                        answer: 0,
                        explanation: '映射类型是一种基于旧类型创建新类型的方式，通过遍历旧类型的属性来生成新类型。'
                    },
                    {
                        question: 'Exclude<T, U> 工具类型的作用是什么？',
                        options: ['从T中排除可以赋值给U的类型', '从T中提取可以赋值给U的类型', '排除T和U的共同类型', '提取T和U的共同类型'],
                        answer: 0,
                        explanation: 'Exclude<T, U> 用于从联合类型T中排除那些可以赋值给类型U的成员，构造一个新的类型。'
                    },
                    {
                        question: 'TypeScript中，声明合并（Declaration Merging）指的是什么？',
                        options: ['编译器将多个同名声明合并为一个声明', '合并多个文件', '合并多个命名空间', '合并接口和类'],
                        answer: 0,
                        explanation: '声明合并是TypeScript编译器将多个同名的声明（如接口、命名空间）合并为一个声明的特性。'
                    },
                    {
                        question: 'TypeScript相比JavaScript最大的优势是什么？',
                        options: ['提前发现类型错误', '执行效率更高', '代码更简洁', '支持更多特性'],
                        answer: 0,
                        explanation: 'TypeScript最大的优势是在编译阶段进行类型检查，能够提前发现潜在的类型错误，提高代码质量。'
                    },
                    {
                        question: '在tsconfig.json中，target选项的作用是什么？',
                        options: ['指定编译后的JavaScript版本', '指定编译的目标文件', '指定模块系统', '指定输出目录'],
                        answer: 0,
                        explanation: 'tsconfig.json中的target选项用于指定编译后JavaScript代码的ECMAScript目标版本，如ES5、ES6。'
                    },
                    {
                        question: '以下哪个是TypeScript中数组的两种定义方式之一？',
                        options: ['type[] 或 Array<type>', '[]type 或 <type>Array', '[type] 或 Array(type)', 'type* 或 *type'],
                        answer: 0,
                        explanation: '在TypeScript中，定义数组类型可以使用 type[] 或 Array<type> 两种语法。'
                    },
                    {
                        question: 'TypeScript中的接口可以做什么？',
                        options: ['描述对象的形状，定义契约', '实现多重继承', '创建类的实例', '执行代码'],
                        answer: 0,
                        explanation: '接口主要用于描述对象的形状，定义代码之间的契约，确保对象具有特定的结构。'
                    },
                    {
                        question: '函数类型定义中，参数类型和返回值类型通常如何标注？',
                        options: ['(参数: 类型) => 返回值类型', 'function(参数: 类型): 返回值类型', '参数:类型 -> 返回值类型', '参数:类型 => 返回值类型'],
                        answer: 0,
                        explanation: '箭头函数形式的类型定义通常写作 (参数: 类型) => 返回值类型，例如 (a: number, b: number) => number。'
                    },
                    {
                        question: 'TypeScript中，使用 ! 后缀的非空断言操作符意味着什么？',
                        options: ['断言该值一定不是null或undefined', '取反操作', '强制转换为布尔值', '声明变量可为空'],
                        answer: 0,
                        explanation: '非空断言操作符 ! 用于断言其前面的值一定不是 null 或 undefined，告诉编译器忽略可能的空值检查。'
                    },
                    {
                        question: '以下哪个是TypeScript中类的访问修饰符？',
                        options: ['public, private, protected', 'public, static, private', 'public, private, final', 'public, protected, abstract'],
                        answer: 0,
                        explanation: 'TypeScript类支持 public、private、protected 三个访问修饰符，控制成员的可访问性。'
                    },
                    {
                        question: '抽象类（abstract class）的主要特征是什么？',
                        options: ['不能被实例化，只能被继承', '必须包含抽象方法', '所有方法都是抽象的', '不能包含实现'],
                        answer: 0,
                        explanation: '抽象类的主要特征是不能被直接实例化，它只能作为基类被其他类继承，可以包含抽象方法和具体实现。'
                    },
                    {
                        question: '在TypeScript中，namespaces的主要作用是什么？',
                        options: ['组织代码，避免全局命名冲突', '管理依赖', '实现模块化', '定义类型'],
                        answer: 0,
                        explanation: 'namespaces（命名空间）是TypeScript早期用于组织代码、避免全局命名冲突的方式。'
                    },
                    {
                        question: '以下哪个命令会根据tsconfig.json编译TypeScript项目？',
                        options: ['tsc', 'tsc --build', 'tsc --init', 'tsc --project .'],
                        answer: 0,
                        explanation: '在项目根目录下直接运行 tsc 命令，编译器会自动查找 tsconfig.json 文件并根据配置进行编译。'
                    }
                ],
                resources: [
                    {
                        name: 'TypeScript官方文档',
                        url: 'https://www.typescriptlang.org/zh/docs/',
                        type: 'docs'
                    },
                    {
                        name: 'TypeScript入门教程',
                        url: 'https://ts.xcatliu.com/',
                        type: 'tutorial'
                    },
                    {
                        name: '深入理解TypeScript',
                        url: 'https://jkchao.github.io/typescript-book-chinese/',
                        type: 'book'
                    },
                    {
                        name: 'bilibili - 尚硅谷TypeScript教程',
                        url: 'https://www.bilibili.com/video/BV1Xy4y1v7S2',
                        type: 'video'
                    }
                ]
            },
            {
                id: 'vue',
                name: 'Vue 3',
                icon: '💚',
                description: '组件化开发与组合式 API 实践',
                priority: 'core',
                quizs: [
                    {
                        question: 'Vue.js 是一个什么样的框架？',
                        options: ['用于构建用户界面的渐进式框架', '一个后端开发框架', '一个移动端UI库', '一个数据库管理工具'],
                        answer: 0,
                        explanation: 'Vue.js 被设计为可以自底向上逐层应用的渐进式框架，核心库只关注视图层。'
                    },
                    {
                        question: '在Vue 3中，哪个API是组合式API的入口？',
                        options: ['setup()', 'data()', 'methods', 'computed'],
                        answer: 0,
                        explanation: 'setup() 函数是组合式API的入口，它在组件创建之前执行。'
                    },
                    {
                        question: '以下哪个指令用于条件渲染一块内容？',
                        options: ['v-if', 'v-show', 'v-for', 'v-bind'],
                        answer: 0,
                        explanation: 'v-if 指令用于条件性地渲染一块内容。v-show 也是条件显示，但通过CSS控制。'
                    },
                    {
                        question: '在Vue中，以下哪个选项用于声明响应式数据？',
                        options: ['data', 'methods', 'computed', 'watch'],
                        answer: 0,
                        explanation: '组件的 data 选项是一个函数，返回一个对象，该对象的所有属性会被加入到响应式系统中。'
                    },
                    {
                        question: 'v-bind 指令的主要作用是什么？',
                        options: ['动态绑定一个或多个attribute', '绑定事件监听', '双向数据绑定', '列表渲染'],
                        answer: 0,
                        explanation: 'v-bind 用于动态地将一个或多个attribute绑定到表达式。'
                    },
                    {
                        question: '以下哪个是Vue组件中计算属性的正确写法？',
                        options: ['computed: { fullName() { return ... } }', 'methods: { fullName() { ... } }', 'watch: { fullName() { ... } }', 'data: { fullName: ... }'],
                        answer: 0,
                        explanation: '计算属性定义在 computed 选项中，它是一个函数，返回值会被缓存。'
                    },
                    {
                        question: 'Vue中，用于监听数据变化并执行异步或开销较大操作的选项是？',
                        options: ['watch', 'computed', 'methods', 'data'],
                        answer: 0,
                        explanation: 'watch 选项用于观察和响应Vue实例上数据的变化，适合执行异步或开销较大的操作。'
                    },
                    {
                        question: '在Vue 3中，ref 和 reactive 的主要区别是什么？',
                        options: ['ref 处理基本类型和对象，reactive 只处理对象', 'ref 只处理基本类型', 'reactive 处理基本类型和对象', '它们没有区别'],
                        answer: 0,
                        explanation: 'ref 可以处理任何类型的值（包括对象），并将其包装成一个带有 .value 属性的对象；reactive 只接受对象，并返回其响应式代理。'
                    },
                    {
                        question: '以下哪个生命周期钩子在组件挂载完成后被调用？',
                        options: ['mounted', 'created', 'updated', 'beforeMount'],
                        answer: 0,
                        explanation: 'mounted 钩子在组件被挂载到DOM后调用，此时可以访问到DOM元素。'
                    },
                    {
                        question: 'Vue中，用于在组件之间传递数据的机制是什么？',
                        options: ['props', 'data', 'methods', 'template'],
                        answer: 0,
                        explanation: 'props 是父组件向子组件传递数据的自定义属性。'
                    },
                    {
                        question: 'Vue Mastery 的创始人之一是谁？',
                        options: ['Gregg Pollack', 'Evan You', 'Dan Abramov', 'Ryan Dahl'],
                        answer: 0,
                        explanation: 'Gregg Pollack 是 Vue Mastery 的创始人之一，也是CodeSchool的前创始人。'
                    },
                    {
                        question: 'Vue Mastery 的讲师团队中，哪位是Vue.js的创造者？',
                        options: ['Evan You', 'Ben Hong', 'Natalia Tepluhina', 'Thorsten Lünborg'],
                        answer: 0,
                        explanation: 'Evan You（尤雨溪）是Vue.js框架的创造者，也是Vue Mastery的特邀讲师。'
                    },
                    {
                        question: '根据Vue Mastery订阅者的反馈，他们认为该平台的价值是什么？',
                        options: ['将复杂概念分解，是很好的教育投资', '课程价格便宜', '课程数量多', '讲师有名气'],
                        answer: 0,
                        explanation: '多位订阅者反馈，Vue Mastery能将看似复杂的概念分解成易于理解的知识块，是他们编程教育中最好的投资之一。'
                    },
                    {
                        question: 'Vue Mastery 提供的免费资源包括什么？',
                        options: ['速查表', '完整课程', '一对一辅导', '认证考试'],
                        answer: 0,
                        explanation: '页面提到可以下载速查表，这是一个节省时间和精力的免费资源。'
                    },
                    {
                        question: '以下哪位Vue Mastery讲师同时是Vue Router和Pinia的作者？',
                        options: ['Eduardo San Martin Morote', 'Ben Hong', 'Jessica Sachs', 'Damian Dulisz'],
                        answer: 0,
                        explanation: 'Eduardo San Martin Morote 是Vue Router和Pinia的作者，同时也是Vue.js核心团队成员。'
                    },
                    {
                        question: 'Vue Mastery 课程内容的主要特点是什么？',
                        options: ['从行业专家学习，涵盖Vue核心及生态', '全是免费课程', '只适合初学者', '不提供项目实战'],
                        answer: 0,
                        explanation: 'Vue Mastery 提供由行业专家和核心团队成员讲授的课程，涵盖Vue及其生态系统。'
                    },
                    {
                        question: '根据描述，以下哪位讲师是Vue Test Utils的维护者？',
                        options: ['Jessica Sachs', 'Natalia Tepluhina', 'Marina Mosti', 'Adam Jahr'],
                        answer: 0,
                        explanation: 'Jessica Sachs被描述为组件测试框架的架构师，并且是Vue Test Utils的维护者。'
                    },
                    {
                        question: 'Vue Mastery 的目标受众是谁？',
                        options: ['希望深入学习Vue.js的开发者', '完全不懂编程的新手', '后端开发者', '项目经理'],
                        answer: 0,
                        explanation: '从课程内容和订阅者反馈来看，它面向希望提升Vue技能的开发者，提供从入门到高级的内容。'
                    },
                    {
                        question: '以下哪位讲师同时是Vue.js核心团队成员和GitHub的工程师？',
                        options: ['Natalia Tepluhina', 'Ben Hong', 'Eduardo San Martin Morote', 'Damian Dulisz'],
                        answer: 0,
                        explanation: 'Natalia Tepluhina 是Vue.js核心团队成员，同时也是GitHub的前端工程师。'
                    },
                    {
                        question: 'Vue Mastery 希望订阅者通过什么方式接收重要Vue知识和优惠？',
                        options: ['订阅邮件列表', '关注社交媒体', '参加线下活动', '购买会员'],
                        answer: 0,
                        explanation: '页面底部提到，可以通过订阅邮件列表来获取重要的Vue知识和特别优惠。'
                    },
                    {
                        question: 'Vue School 主要提供什么类型的服务？',
                        options: ['高质量的Vue.js视频课程', '免费的代码片段库', 'Vue.js组件市场', '官方认证考试'],
                        answer: 0,
                        explanation: 'Vue School 是一个提供高质量Vue.js视频课程的学习平台。'
                    },
                    {
                        question: 'Vue School 的课程通常涵盖哪些内容？',
                        options: ['Vue基础、Vuex、Vue Router、Nuxt等', '只有Vue基础语法', '后端开发课程', '数据库设计'],
                        answer: 0,
                        explanation: 'Vue School 的课程广泛覆盖Vue.js及其生态系统，如Vuex、Vue Router、Nuxt.js等。'
                    },
                    {
                        question: 'Vue School 的讲师通常由什么人组成？',
                        options: ['Vue.js核心团队成员和社区专家', '专业演讲者', '大学教授', '学生'],
                        answer: 0,
                        explanation: 'Vue School 邀请的讲师通常是Vue.js核心团队成员、社区专家和经验丰富的开发者。'
                    },
                    {
                        question: '如果你正在学习Vue 3的新特性，Vue School 能提供什么帮助？',
                        options: ['专门的Vue 3课程', '只有Vue 2课程', '无相关内容', '文字教程'],
                        answer: 0,
                        explanation: 'Vue School 提供了大量关于Vue 3新特性（如组合式API）的专题课程。'
                    },
                    {
                        question: 'Vue School 的课程形式主要是什么？',
                        options: ['视频教程', '直播课', '线下讲座', '博客文章'],
                        answer: 0,
                        explanation: 'Vue School 的核心内容形式是预先录制的、高质量的专家指导视频课程。'
                    },
                    {
                        question: '以下哪个Vue生态工具很可能在Vue School找到相关课程？',
                        options: ['Pinia', 'jQuery', 'React', 'Angular'],
                        answer: 0,
                        explanation: 'Pinia 作为Vue的官方状态管理库，是Vue School课程的重要内容。'
                    },
                    {
                        question: '与阅读文档相比，通过Vue School学习可能的好处是什么？',
                        options: ['获得更结构化的学习路径和专家讲解', '信息更新更快', '完全是免费的', '可以下载源代码'],
                        answer: 0,
                        explanation: '视频课程通常提供结构化的学习路径和讲师的深入讲解，有助于理解复杂概念。'
                    },
                    {
                        question: '如果你是初学者，Vue School 适合你吗？',
                        options: ['适合，有从零开始的入门课程', '不适合，只有高级内容', '只适合中级开发者', '需要先学完其他框架'],
                        answer: 0,
                        explanation: 'Vue School 提供面向不同层次学习者的课程，包括完全适合初学者的入门课程。'
                    },
                    {
                        question: 'Vue School 的订阅制可能包含什么？',
                        options: ['访问所有课程和未来更新', '只访问一门课程', '终身免费更新', '讲师一对一辅导'],
                        answer: 0,
                        explanation: '通常这类平台的订阅模式是，订阅期间可以访问平台上的所有（或大部分）课程和未来新增内容。'
                    },
                    {
                        question: '除了视频课程，Vue School 可能还提供什么？',
                        options: ['课程源码、练习题和社区问答', '代码部署服务', '云开发环境', '官方证书'],
                        answer: 0,
                        explanation: '优质的在线课程平台通常会提供配套的源码、练习和问答社区来辅助学习。'
                    },
                    {
                        question: '在Vue 2中，哪个选项是定义响应式数据的核心？',
                        options: ['data函数返回对象', 'setup函数', 'reactive API', 'ref API'],
                        answer: 0,
                        explanation: '在Vue 2中，组件的 data 选项必须是一个函数，返回一个对象，这个对象会被Vue转换为响应式数据。'
                    },
                    {
                        question: 'Vue 2与Vue 3在API风格上最大的不同是引入了什么？',
                        options: ['组合式API (Composition API)', '选项式API (Options API)', '渲染函数', 'JSX支持'],
                        answer: 0,
                        explanation: 'Vue 3引入了组合式API，作为一种新的、基于函数的API风格，与Vue 2的选项式API并存。'
                    },
                    {
                        question: '在Vue 2中，全局事件总线的实现通常依赖于什么？',
                        options: ['一个空的Vue实例作为中央事件总线', 'Vuex', 'props', '$emit'],
                        answer: 0,
                        explanation: '在Vue 2中，常通过创建一个空的Vue实例作为中央事件总线来实现非父子组件通信。'
                    },
                    {
                        question: 'Vue 3中，哪个全局API发生了变化，不再作为Vue构造函数的静态方法？',
                        options: ['Vue.use() 变为 app.use()', 'Vue.component 用法没变', 'Vue.directive 用法没变', 'Vue.mixin 用法没变'],
                        answer: 0,
                        explanation: 'Vue 3引入了通过 createApp 创建的“应用实例”，许多原本挂载在Vue构造函数上的全局API（如 use, component, directive）现在都迁移到了应用实例上。'
                    },
                    {
                        question: '关于Vue 2的响应式原理，以下哪个说法是正确的？',
                        options: ['使用 Object.defineProperty 进行数据劫持', '使用 Proxy 进行数据代理', '无法检测数组变化', '对对象的新增属性会自动响应'],
                        answer: 0,
                        explanation: 'Vue 2使用 Object.defineProperty 来劫持数据的getter和setter，从而实现响应式。'
                    },
                    {
                        question: 'Vue 3的响应式原理基于什么实现？',
                        options: ['ES6的 Proxy', 'Object.defineProperty', '发布订阅模式', '虚拟DOM'],
                        answer: 0,
                        explanation: 'Vue 3使用ES6的 Proxy 来创建响应式对象，解决了Vue 2中无法检测对象属性新增/删除等问题。'
                    },
                    {
                        question: '在Vue 2中，以下哪个方法用于在组件内部监听一个数据变化？',
                        options: ['this.$watch()', 'this.watch()', 'this.observe()', 'this.onChange()'],
                        answer: 0,
                        explanation: '在Vue 2组件内部，可以使用 this.$watch() 方法命令式地监听数据变化。'
                    },
                    {
                        question: 'Vue 3的 `<script setup>` 语法糖主要目的是什么？',
                        options: ['简化组合式API的使用，减少样板代码', '用于编写选项式API', '定义组件的模板', '引入外部库'],
                        answer: 0,
                        explanation: '`<script setup>` 是在单文件组件中使用组合式API的编译时语法糖，旨在简化代码编写，减少样板代码。'
                    },
                    {
                        question: '学习Vue 2和Vue 3的教程时，一个核心的迁移要点是注意什么？',
                        options: ['v-model 在自定义组件上的默认prop和事件名变化', '模板语法完全改变', '生命周期钩子全部删除', '不再支持组件化'],
                        answer: 0,
                        explanation: '从Vue 2迁移到Vue 3，一个重要的变化是 v-model 在自定义组件上的默认prop名从 value 变为 modelValue，默认事件名从 input 变为 update:modelValue。'
                    },
                    {
                        question: '对于初学者，这套涵盖Vue 2和Vue 3的教程可能最适合用来做什么？',
                        options: ['系统性地学习Vue框架的核心概念和演进', '只学习Vue 3的最新特性', '深入研究Vue底层源码', '作为面试前的速成材料'],
                        answer: 0,
                        explanation: '一门同时覆盖Vue 2和Vue 3的教程，可以帮助学习者系统性理解Vue框架的核心概念，以及从旧版本到新版本的演进思路。'
                    }
                ],
                resources: [
                    {
                        name: 'Vue.js官方文档',
                        url: 'https://cn.vuejs.org/',
                        type: 'docs'
                    },
                    {
                        name: 'Vue Mastery',
                        url: 'https://www.vuemastery.com/',
                        type: 'course'
                    },
                    {
                        name: 'Vue School',
                        url: 'https://vueschool.io/',
                        type: 'course'
                    },
                    {
                        name: 'bilibili - 尚硅谷Vue2+Vue3教程',
                        url: 'https://www.bilibili.com/video/BV1Zy4y1K7SH',
                        type: 'video'
                    }
                ]
            },
            {
                id: 'react',
                name: 'React',
                icon: '⚛️',
                description: '组件驱动 UI 与状态管理实践',
                priority: 'important',
                quizs: [
                    {
                        question: 'React 的核心思想是什么？',
                        options: ['声明式编程', '命令式编程', '面向对象编程', '函数式编程'],
                        answer: 0,
                        explanation: 'React 的核心思想是声明式编程，你只需要描述UI应该是什么样子，React负责高效地更新和渲染。'
                    },
                    {
                        question: '在React中，用于创建元素的函数是什么？',
                        options: ['createElement()', 'createComponent()', 'renderElement()', 'new Element()'],
                        answer: 0,
                        explanation: 'React.createElement() 是创建React元素的核心函数，JSX是其语法糖。'
                    },
                    {
                        question: '以下哪个是React组件的正确定义方式？',
                        options: ['函数组件或类组件', '只有类组件', '只有函数组件', '通过HTML标签定义'],
                        answer: 0,
                        explanation: 'React支持两种组件定义方式：函数组件和继承自 React.Component 的类组件。'
                    },
                    {
                        question: '在类组件中，用于存储和管理组件内部数据的对象是什么？',
                        options: ['state', 'props', 'data', 'model'],
                        answer: 0,
                        explanation: 'state 是类组件中用于存储和管理组件自身数据的对象，它的变化会触发组件重新渲染。'
                    },
                    {
                        question: '以下哪个是React中处理组件副作用（如数据获取、订阅）的Hook？',
                        options: ['useEffect', 'useState', 'useContext', 'useReducer'],
                        answer: 0,
                        explanation: 'useEffect 是用于在函数组件中执行副作用的Hook，例如数据获取、设置订阅、手动更改DOM等。'
                    },
                    {
                        question: 'React中，props 的主要作用是什么？',
                        options: ['父组件向子组件传递数据', '组件内部状态管理', '处理用户输入', '定义组件样式'],
                        answer: 0,
                        explanation: 'props（属性）是父组件向子组件传递数据的只读对象。'
                    },
                    {
                        question: '以下哪个是React中用于列表渲染的常用方法？',
                        options: ['map()', 'forEach()', 'filter()', 'reduce()'],
                        answer: 0,
                        explanation: '在React中，通常使用数组的 map() 方法遍历数据并返回一组元素来进行列表渲染。'
                    },
                    {
                        question: '在JSX中，如何嵌入JavaScript表达式？',
                        options: ['使用花括号 {}', '使用引号 ""', '使用圆括号 ()', '使用方括号 []'],
                        answer: 0,
                        explanation: '在JSX中，任何JavaScript表达式都需要用花括号 {} 包裹起来。'
                    },
                    {
                        question: 'React中，用于性能优化的“不可变数据”概念主要指什么？',
                        options: ['不直接修改state，而是创建新对象替换', '数据一旦创建就不能更改', '使用const声明所有变量', '数据是只读的'],
                        answer: 0,
                        explanation: '在React中，为了便于状态追踪和性能优化，建议不直接修改state或props，而是通过创建新对象或数组的方式来更新状态。'
                    },
                    {
                        question: '以下哪个是React 16.8版本引入的重要特性？',
                        options: ['Hooks', 'Context API', 'Error Boundaries', 'Fragments'],
                        answer: 0,
                        explanation: 'React 16.8 正式引入了 Hooks，让你可以在函数组件中使用状态和其他React特性。'
                    },
                    {
                        question: '在React中，用于创建交互式UI的基本单位是什么？',
                        options: ['组件', '元素', '属性', '状态'],
                        answer: 0,
                        explanation: '组件是React中构建用户界面的核心单位和基本模块。'
                    },
                    {
                        question: 'React中，哪个概念描述了UI在任意时刻应该呈现的样子？',
                        options: ['状态', '属性', '组件树', '虚拟DOM'],
                        answer: 0,
                        explanation: '状态（State）是组件内部的数据，它描述了UI在特定时刻应该呈现的样子，状态变化会触发UI重新渲染。'
                    },
                    {
                        question: '在入门教程的井字棋游戏中，提升状态（Lifting State Up）的目的是什么？',
                        options: ['让多个组件共享和同步状态', '让状态更接近子组件', '简化状态管理', '提高组件性能'],
                        answer: 0,
                        explanation: '提升状态是将多个子组件需要共享的状态移动到它们最近的共同父组件中，以实现数据同步。'
                    },
                    {
                        question: 'React元素是不可变对象，这意味着什么？',
                        options: ['创建后无法修改其属性或子元素', '无法重新渲染', '其值永远不会变化', '不能用作组件的返回值'],
                        answer: 0,
                        explanation: 'React元素在创建后是不可变的，你不能修改它的属性或子元素。要更新UI，你需要创建一个新的React元素。'
                    },
                    {
                        question: '在React中，受控组件（Controlled Component）是指什么？',
                        options: ['表单数据由React state管理', '组件受外部API控制', '组件内部状态不可变', '通过ref获取DOM元素'],
                        answer: 0,
                        explanation: '受控组件是指表单元素（如input）的值由React的state控制，并且更新逻辑也由React处理。'
                    },
                    {
                        question: '在React DevTools中，可以观察到组件的什么信息？',
                        options: ['props 和 state', '组件的源代码', '网络请求', '本地存储'],
                        answer: 0,
                        explanation: 'React DevTools 允许你检查组件的props、state、hooks以及组件树结构，是调试的重要工具。'
                    },
                    {
                        question: '在React中，为什么在循环渲染时需要为元素指定key属性？',
                        options: ['帮助React识别哪些项被改变、添加或删除', '为了样式绑定', '为了性能优化，没有其他作用', '是可选属性，不加也没影响'],
                        answer: 0,
                        explanation: 'key 属性帮助React在重新渲染时高效地识别哪些列表项被修改、添加或删除，从而优化更新过程。'
                    },
                    {
                        question: '以下哪个是正确的事件绑定写法？',
                        options: ['onClick={handleClick}', 'onclick="handleClick()"', 'on-click="handleClick"', 'click={handleClick}'],
                        answer: 0,
                        explanation: '在React中，事件绑定使用驼峰命名法，并传入一个函数引用，如 onClick={handleClick}。'
                    },
                    {
                        question: '在React中，组件的返回值决定了什么？',
                        options: ['组件渲染的UI结构', '组件的状态', '组件的属性', '组件的生命周期'],
                        answer: 0,
                        explanation: '组件的返回值（通常是JSX）描述了组件在页面上渲染的UI结构。'
                    },
                    {
                        question: 'React文档推荐的构建应用方式是？',
                        options: ['从静态版本开始，然后添加交互', '先设计状态，再构建UI', '先写API，再构建组件', '使用脚手架自动生成'],
                        answer: 0,
                        explanation: '官方教程推荐先构建一个不考虑交互的静态版本，然后再逐步添加状态和交互，这样更容易分离关注点。'
                    },
                    {
                        question: '在freeCodeCamp的React课程中，第一个任务通常是做什么？',
                        options: ['创建一个简单的React组件', '配置开发环境', '学习JSX语法', '管理组件状态'],
                        answer: 0,
                        explanation: 'freeCodeCamp的课程通常从一个非常基础的编码挑战开始，比如创建一个返回简单JSX的React组件。'
                    },
                    {
                        question: 'freeCodeCamp的React课程属于哪个认证体系？',
                        options: ['前端开发库认证', '响应式网页设计认证', '后端开发与API认证', '数据分析认证'],
                        answer: 0,
                        explanation: 'React课程是freeCodeCamp“前端开发库”认证的一部分，该认证还包括Bootstrap、jQuery、Sass等。'
                    },
                    {
                        question: '在freeCodeCamp中，如何将props传递给组件？',
                        options: ['类似HTML属性一样传递', '通过组件的构造函数', '使用setProps方法', '在组件内部定义'],
                        answer: 0,
                        explanation: '在JSX中使用组件时，可以像写HTML属性一样将props传递给组件，例如 `<MyComponent name="John" />`。'
                    },
                    {
                        question: '关于组件状态（state），freeCodeCamp的课程会强调什么？',
                        options: ['永远不要直接修改state', 'state只能在类组件中使用', 'state是只读的', 'state初始化必须在constructor中'],
                        answer: 0,
                        explanation: '课程会重点强调必须使用 setState 方法来更新state，永远不要直接修改 this.state。'
                    },
                    {
                        question: '在freeCodeCamp的React挑战中，你通常在哪里编写和运行代码？',
                        options: ['集成的在线代码编辑器', '本地IDE', '第三方在线编辑器', '命令行工具'],
                        answer: 0,
                        explanation: 'freeCodeCamp提供内置的在线代码编辑器，你可以在浏览器中直接编写、运行和测试代码。'
                    },
                    {
                        question: '以下哪个生命周期方法在组件被挂载到DOM后立即调用？',
                        options: ['componentDidMount', 'componentWillMount', 'render', 'componentDidUpdate'],
                        answer: 0,
                        explanation: 'componentDidMount 在组件被挂载到DOM后立即调用，常用于数据获取或设置订阅。'
                    },
                    {
                        question: '在freeCodeCamp课程中，如何学习React Router？',
                        options: ['在React课程之后有专门课程', 'React课程中不包含Router', '需要自行查找资料', '作为选学内容'],
                        answer: 0,
                        explanation: 'freeCodeCamp的“前端开发库”认证包含了React Router的专门章节和挑战。'
                    },
                    {
                        question: '在freeCodeCamp的Redux课程中，reducer的作用是什么？',
                        options: ['指定状态如何响应action并更新', '定义action创建函数', '存储应用状态', '处理异步操作'],
                        answer: 0,
                        explanation: '在Redux中，reducer是一个纯函数，它接收当前状态和action，并返回一个新的状态。'
                    },
                    {
                        question: 'freeCodeCamp的课程形式主要是？',
                        options: ['交互式编码挑战', '视频教程', '长篇理论文章', '项目实战'],
                        answer: 0,
                        explanation: 'freeCodeCamp的核心学习方式是交互式的编码挑战，你需要完成挑战来通过测试并获取认证。'
                    },
                    {
                        question: '完成freeCodeCamp React课程后，你通常需要做什么来获得认证？',
                        options: ['完成5个项目', '通过期末考试', '撰写学习总结', '参与社区讨论'],
                        answer: 0,
                        explanation: '在freeCodeCamp，每个认证的最后都需要独立完成几个项目，并满足所有用户故事要求才能获得认证。'
                    },
                    {
                        question: '尚硅谷的React教程通常以什么形式展开？',
                        options: ['从基础到实战的系统性讲解', '只讲核心概念', '全是项目实战', '源码分析为主'],
                        answer: 0,
                        explanation: '尚硅谷的教程特点是系统性、全面性，通常会从环境搭建开始，逐步深入到核心API、生态和项目实战。'
                    },
                    {
                        question: '在该教程中，通常会首先讲解哪个核心概念？',
                        options: ['JSX语法和组件基础', 'Hooks用法', '状态管理Redux', '路由React Router'],
                        answer: 0,
                        explanation: '任何React教程的开始都是讲解JSX语法和如何创建最基础的组件。'
                    },
                    {
                        question: '该教程可能会通过什么方式来讲解组件的状态管理？',
                        options: ['计数器、待办事项等经典案例', '只讲理论', '跳过状态管理', '直接讲解复杂库'],
                        answer: 0,
                        explanation: '教程会通过经典的案例（如计数器、待办事项应用）来讲解 state 的用法和状态提升。'
                    },
                    {
                        question: '在教程中，通常如何讲解组件的通信？',
                        options: ['父子组件通过props，兄弟组件通过状态提升', '只讲父子组件通信', '通过全局变量', '不涉及通信'],
                        answer: 0,
                        explanation: '教程会系统讲解父子组件通过props通信，以及兄弟组件如何通过状态提升或Context进行通信。'
                    },
                    {
                        question: '教程在讲解React 16.8+版本时，会重点介绍什么？',
                        options: ['Hooks（如useState, useEffect）', '生命周期函数', 'createClass工厂函数', 'Mixin技术'],
                        answer: 0,
                        explanation: '自React 16.8以后，任何现代React教程的核心都会包含对Hooks的深入讲解。'
                    },
                    {
                        question: '在项目实战阶段，该教程可能会整合哪个状态管理库？',
                        options: ['Redux 或 MobX', 'Vuex', 'Pinia', 'Flux'],
                        answer: 0,
                        explanation: 'Redux是React生态中最常用的状态管理库，很多教程的项目实战部分会集成Redux。'
                    },
                    {
                        question: '教程中讲解React Router时，主要目的是什么？',
                        options: ['实现单页面应用的路由跳转', '管理组件状态', '发送网络请求', '处理表单验证'],
                        answer: 0,
                        explanation: 'React Router是React生态中用于实现单页面应用（SPA）路由导航的标准库。'
                    },
                    {
                        question: '在教程的案例中，如何展示从API获取数据？',
                        options: ['在useEffect或生命周期中调用fetch或axios', '在render函数中直接请求', '使用setTimeout模拟', '不涉及数据请求'],
                        answer: 0,
                        explanation: '教程会演示在函数组件中使用 useEffect，或在类组件中使用 componentDidMount 来执行副作用，如API数据获取。'
                    },
                    {
                        question: '该教程可能采用哪种方式来帮助学员调试？',
                        options: ['介绍React DevTools的使用', '只使用console.log', '不涉及调试', '使用复杂的商业工具'],
                        answer: 0,
                        explanation: '好的教程会介绍React开发者工具（DevTools），这是调试React应用的最佳实践。'
                    },
                    {
                        question: '对于想找工作的学员，这套教程的价值体现在哪里？',
                        options: ['覆盖主流技术栈，提供实战项目经验', '只讲理论，无项目', '讲得过时技术', '不涉及生态'],
                        answer: 0,
                        explanation: '尚硅谷的教程通常以覆盖面广、实战性强著称，学完能积累项目经验，了解企业常用技术栈，对找工作很有帮助。'
                    }
                ],
                resources: [
                    {
                        name: 'React官方文档',
                        url: 'https://zh-hans.react.dev/',
                        type: 'docs'
                    },
                    {
                        name: 'React入门教程',
                        url: 'https://react.docschina.org/tutorial/tutorial.html',
                        type: 'tutorial'
                    },
                    {
                        name: 'freeCodeCamp - React',
                        url: 'https://www.freecodecamp.org/chinese/learn/front-end-development-libraries/#react',
                        type: 'course'
                    },
                    {
                        name: 'bilibili - 尚硅谷React教程',
                        url: 'https://www.bilibili.com/video/BV1wy4y1D7JT',
                        type: 'video'
                    }
                ]
            },
            {
                id: 'css_framework',
                name: 'CSS 框架',
                icon: '🎭',
                description: 'Tailwind、UnoCSS 等原子化样式方案',
                priority: 'important',
                quizs: [
                    {
                        question: 'Tailwind CSS 属于哪种类型的CSS框架？',
                        options: ['原子化（Utility-First）框架', '组件化框架（如Bootstrap）', 'CSS-in-JS库', 'CSS预处理器'],
                        answer: 0,
                        explanation: 'Tailwind CSS 是一个以实用程序类（utility classes）为核心的原子化CSS框架，通过组合原子类来构建界面。'
                    },
                    {
                        question: '在Tailwind中，用于设置文本居中的类名是什么？',
                        options: ['text-center', 'text-middle', 'align-center', 'justify-center'],
                        answer: 0,
                        explanation: 'text-center 是Tailwind中用于设置文本水平居中的实用程序类。'
                    },
                    {
                        question: '以下哪个命令用于创建包含Tailwind配置的文件？',
                        options: ['npx tailwindcss init', 'npm tailwind init', 'tailwind create config', 'yarn tailwind setup'],
                        answer: 0,
                        explanation: '使用 npx tailwindcss init 可以在项目根目录生成一个 tailwind.config.js 配置文件。'
                    },
                    {
                        question: '在Tailwind中，用于设置内边距（padding）的类名规则是？',
                        options: ['p-{size}', 'pd-{size}', 'padding-{size}', 'pad-{size}'],
                        answer: 0,
                        explanation: 'Tailwind使用 p-{size} 表示内边距，例如 p-4。还有 pt（上）、pr（右）、pb（下）、pl（左）等变体。'
                    },
                    {
                        question: 'Tailwind CSS 的“响应式设计”主要通过什么实现？',
                        options: ['前缀修饰符（如 md:、lg:）', '媒体查询文件', 'JavaScript监听', '单独的响应式类'],
                        answer: 0,
                        explanation: 'Tailwind 使用响应式前缀，如 md: 表示中等屏幕以上时应用该类，例如 md:text-center。'
                    },
                    {
                        question: '在Tailwind中，用于设置弹性布局（Flexbox）的类是？',
                        options: ['flex', 'flexbox', 'display-flex', 'd-flex'],
                        answer: 0,
                        explanation: 'flex 类用于将元素的显示方式设置为 flex。'
                    },
                    {
                        question: '以下哪个Tailwind类用于设置元素的背景颜色为蓝色500？',
                        options: ['bg-blue-500', 'background-blue-500', 'color-blue-500', 'bg-color-blue-500'],
                        answer: 0,
                        explanation: 'Tailwind使用 bg-{color}-{shade} 来设置背景色，如 bg-blue-500。'
                    },
                    {
                        question: 'Tailwind的“JIT（Just-In-Time）”模式主要解决了什么问题？',
                        options: ['生成巨大的CSS文件', '不支持动态值', '编译速度慢', '不支持响应式'],
                        answer: 0,
                        explanation: 'JIT模式按需生成CSS，避免了传统模式下预先编译所有组合导致CSS文件过大的问题。'
                    },
                    {
                        question: '在Tailwind中，用于悬停时改变背景色的写法是？',
                        options: ['hover:bg-blue-500', 'bg-blue-500:hover', 'hover-bg-blue-500', 'bg-hover-blue-500'],
                        answer: 0,
                        explanation: 'Tailwind 使用状态前缀，如 hover:、focus:、active:，后跟功能类。'
                    },
                    {
                        question: '以下哪个类用于实现网格布局（Grid）？',
                        options: ['grid', 'grid-cols-3', 'grid-rows-3', '以上都是'],
                        answer: 3,
                        explanation: 'Tailwind中，grid 用于启用网格布局，grid-cols-3 和 grid-rows-3 分别用于设置列数和行数。'
                    },
                    {
                        question: '根据中文文档，Tailwind CSS 的核心优势是什么？',
                        options: ['无需离开HTML即可快速构建现代界面', '提供了大量预设计组件', '是最轻量级的框架', '完全取代CSS'],
                        answer: 0,
                        explanation: 'Tailwind 的核心优势在于它的实用程序类让你在不编写自定义CSS的情况下，直接在HTML中快速构建界面。'
                    },
                    {
                        question: '在中文文档中，如何实现一个宽度为100%的按钮？',
                        options: ['添加 w-full 类', '添加 width-100 类', '添加 full-width 类', '添加 w-100% 类'],
                        answer: 0,
                        explanation: 'w-full 是Tailwind中设置宽度为100%的实用程序类。'
                    },
                    {
                        question: '根据文档，如何自定义Tailwind的主题？',
                        options: ['修改 tailwind.config.js 中的 theme 配置', '创建自定义CSS文件覆盖', '使用命令行参数', '无法自定义'],
                        answer: 0,
                        explanation: '你可以在 tailwind.config.js 文件的 theme 部分扩展或覆盖默认的颜色、间距等设计令牌。'
                    },
                    {
                        question: '中文文档中推荐的安装方式是通过什么？',
                        options: ['npm安装并配置PostCSS', '直接使用CDN链接', '下载完整CSS文件', '通过RubyGems安装'],
                        answer: 0,
                        explanation: '官方推荐通过 npm/yarn 安装，并将其作为PostCSS插件进行配置，以便获得JIT等全部特性。'
                    },
                    {
                        question: '在文档中，用于隐藏元素的类是什么？',
                        options: ['hidden', 'invisible', 'display-none', 'hide'],
                        answer: 0,
                        explanation: 'hidden 类设置 display: none; 来隐藏元素。'
                    },
                    {
                        question: '根据中文文档，@apply 指令的作用是什么？',
                        options: ['在CSS中内联应用Tailwind的实用程序类', '引入外部样式', '定义新组件', '应用主题变量'],
                        answer: 0,
                        explanation: '@apply 指令允许你在自定义CSS中内联应用现有的Tailwind实用程序类。'
                    },
                    {
                        question: '文档中提到的“暗黑模式”（Dark Mode）如何启用？',
                        options: ['在配置中设置 darkMode: "media" 或 "class"', '自动启用', '需要安装插件', '不支持暗黑模式'],
                        answer: 0,
                        explanation: '你需要在 tailwind.config.js 中设置 darkMode 选项为 "media"（基于系统）或 "class"（手动切换）。'
                    },
                    {
                        question: '以下哪个类用于添加中等大小屏幕下的下边距？',
                        options: ['md:mb-4', 'mb-4-md', 'mb-md-4', 'medium:mb-4'],
                        answer: 0,
                        explanation: '使用响应式前缀 md: 结合边距类 mb-4，表示在中等屏幕及以上时应用下边距。'
                    },
                    {
                        question: '在文档中，用于创建环形聚焦轮廓的类是？',
                        options: ['focus:ring', 'outline-ring', 'focus-outline', 'ring-focus'],
                        answer: 0,
                        explanation: 'focus:ring 类用于在元素获得焦点时添加一个环形轮廓，常用于表单控件。'
                    },
                    {
                        question: '中文文档强调，学习Tailwind的关键在于？',
                        options: ['熟悉它的实用程序类命名规则', '记忆所有类名', '编写自定义CSS', '使用UI组件库'],
                        answer: 0,
                        explanation: '掌握Tailwind的关键是理解其命名规则（如 m-1, p-2, text-sm），可以快速猜出大多数类的作用。'
                    },
                    {
                        question: 'UnoCSS 的核心设计理念是什么？',
                        options: ['即时、按需、高性能的原子化CSS引擎', '提供完整的UI组件库', '取代CSS预处理器', '一个CSS重置库'],
                        answer: 0,
                        explanation: 'UnoCSS 是一个具有高性能、即时按需生成的原子化CSS引擎，强调灵活性和可定制性。'
                    },
                    {
                        question: 'UnoCSS 的创作者同时也是哪个流行工具的创作者？',
                        options: ['Vite', 'Webpack', 'Rollup', 'Parcel'],
                        answer: 0,
                        explanation: 'UnoCSS 由 Vite 的作者 Anthony Fu 创建，它与Vite有很好的集成。'
                    },
                    {
                        question: 'UnoCSS 与传统框架（如Tailwind）的主要区别是什么？',
                        options: ['它是一个引擎而非框架，可以定制规则', '它不提供任何实用程序类', '它只能在Vite中使用', '它是基于JavaScript的'],
                        answer: 0,
                        explanation: 'UnoCSS 本身是一个引擎，不包含预设的实用程序类，但可以通过预设（如 @unocss/preset-uno）来模拟Tailwind等框架。'
                    },
                    {
                        question: '在UnoCSS中，如何添加自定义工具类规则？',
                        options: ['在配置文件中使用 rules 数组定义', '在CSS文件中定义', '无法自定义', '通过安装插件'],
                        answer: 0,
                        explanation: '你可以在 uno.config.ts 文件中通过 rules 数组来自定义静态或动态的实用程序类规则。'
                    },
                    {
                        question: 'UnoCSS 的“预设”（Presets）机制有什么作用？',
                        options: ['提供一组预定义的规则、变体和主题', '预设开发环境', '预设部署配置', '预设测试框架'],
                        answer: 0,
                        explanation: '预设是UnoCSS的插件化核心，可以让你轻松地引入Tailwind、Windi、Bootstrap等风格的规则集。'
                    },
                    {
                        question: 'UnoCSS 通过什么方式实现极快的热更新？',
                        options: ['基于生成器的按需计算和Vite的HMR', '预编译所有CSS', '使用Web Worker', '缓存整个CSS文件'],
                        answer: 0,
                        explanation: 'UnoCSS利用Vite的热模块替换（HMR）和其生成器机制，实现仅重新生成和使用中类的CSS。'
                    },
                    {
                        question: '以下哪个是UnoCSS的内置变体（Variants），用于处理悬停状态？',
                        options: ['hover:', 'hvr:', 'on-hover:', '悬停:'],
                        answer: 0,
                        explanation: 'UnoCSS 支持类似于Tailwind的变体语法，如 hover: 来处理伪类。'
                    },
                    {
                        question: '在UnoCSS中，“快捷方式”（Shortcuts）功能允许你做什么？',
                        options: ['将多个实用程序类组合成一个自定义类', '快速创建组件', '缩短类名', '创建键盘快捷键'],
                        answer: 0,
                        explanation: 'shortcuts 配置项允许你将一组常用的实用程序类组合成一个单一的缩写类。'
                    },
                    {
                        question: 'UnoCSS 的“属性化模式”（Attributify Mode）有什么特点？',
                        options: ['将实用程序类作为HTML属性使用', '将类名作为属性值', '增强CSS属性', '属性选择器模式'],
                        answer: 0,
                        explanation: '属性化模式允许你将实用程序类写成HTML属性，例如 `<button text="sm">` 而不是 `class="text-sm"`。'
                    },
                    {
                        question: 'UnoCSS 的图标预设（@unocss/preset-icons）如何使用？',
                        options: ['通过类名的方式使用纯CSS图标，按需加载', '通过`<img>`标签使用', '需要手动下载图标', '只能使用特定图标集'],
                        answer: 0,
                        explanation: '图标预设让你可以通过类似 `i-carbon-logo-github` 的类名来使用数千个纯CSS图标，并且是按需加载的。'
                    },
                    {
                        question: '一个入门级Tailwind教程通常会从什么开始？',
                        options: ['安装和配置Tailwind', '直接编写复杂的组件', '学习所有类名', '介绍CSS基础'],
                        answer: 0,
                        explanation: '教程通常先从环境搭建开始，包括如何使用npm安装Tailwind以及如何将其集成到项目中。'
                    },
                    {
                        question: '在入门教程中，你最先学到的布局概念可能是？',
                        options: ['Flexbox和Grid的实用类', '复杂的动画', '暗黑模式', '自定义插件开发'],
                        answer: 0,
                        explanation: '布局是基础，教程通常会先介绍如何使用 flex、grid 相关的实用程序类来构建页面结构。'
                    },
                    {
                        question: '教程可能会通过什么案例来讲解响应式设计？',
                        options: ['在不同屏幕尺寸下改变导航栏样式', '构建一个复杂的仪表盘', '开发一个游戏', '不需要案例'],
                        answer: 0,
                        explanation: '一个典型的入门案例是创建一个导航栏，并通过 md:、lg: 等前缀使其在不同屏幕下自适应变化。'
                    },
                    {
                        question: '在视频教程中，如何演示悬停（hover）效果？',
                        options: ['添加 hover: 前缀的类，如 hover:bg-blue-700', '编写自定义CSS', '使用JavaScript', '无法实现'],
                        answer: 0,
                        explanation: '教程会演示使用 hover: 前缀来轻松实现鼠标悬停时的样式变化。'
                    },
                    {
                        question: '入门教程可能会如何介绍 @apply 指令？',
                        options: ['作为提取重复类模式的方法', '作为定义新CSS规则的方法', '作为引入字体的方法', '作为注释的方法'],
                        answer: 0,
                        explanation: '@apply 常被介绍为一种在自定义CSS中提取和复用常用工具类组合的方法，以减少HTML中的类名重复。'
                    },
                    {
                        question: '教程中通常如何处理间距（Margin/Padding）？',
                        options: ['使用 m-*, p-* 以及组合前缀如 mt-*, pb-*', '手动编写CSS', '使用间隙类 gap-*', '不重要'],
                        answer: 0,
                        explanation: '间距是核心，教程会详细介绍如何使用 m-、p- 以及它们的变体来控制元素的内外边距。'
                    },
                    {
                        question: '在入门教程中，可能会配置 tailwind.config.js 文件来做什么？',
                        options: ['自定义主题颜色或间距', '配置构建工具', '设置代理', '安装插件'],
                        answer: 0,
                        explanation: '通常入门教程会带你修改配置文件，例如添加自定义颜色或覆盖默认的间距比例，以匹配设计规范。'
                    },
                    {
                        question: '为了优化生产环境的CSS大小，教程会强调什么？',
                        options: ['配置PurgeCSS（或Tailwind的内容选项）', '手动删除不用的类', '压缩CSS文件', '使用CDN'],
                        answer: 0,
                        explanation: '教程会重点强调在 tailwind.config.js 中正确设置 content 选项，以便在生产构建时移除未使用的CSS。'
                    },
                    {
                        question: '关于伪类（如 focus、active），教程会教你怎么用？',
                        options: ['使用 focus:、active: 前缀', '在CSS中单独写伪类', '无法使用伪类', '使用JavaScript模拟'],
                        answer: 0,
                        explanation: 'Tailwind通过前缀的方式让伪类使用变得非常简单，这是教程的重点内容之一。'
                    },
                    {
                        question: '一个完整的入门教程结尾，通常会引导你做什么？',
                        options: ['自己动手搭建一个小型项目', '学习下一个高级教程', '记忆所有类名', '不再使用原生CSS'],
                        answer: 0,
                        explanation: '好的入门教程在结尾会鼓励你通过实际构建一个小项目（如个人主页、卡片组件）来巩固所学知识。'
                    }
                ],
                resources: [
                    {
                        name: 'TailwindCSS官方文档',
                        url: 'https://tailwindcss.com/docs',
                        type: 'docs'
                    },
                    {
                        name: 'TailwindCSS中文网',
                        url: 'https://www.tailwindcss.cn/',
                        type: 'docs'
                    },
                    {
                        name: 'UnoCSS官方文档',
                        url: 'https://unocss.dev/',
                        type: 'docs'
                    },
                    {
                        name: 'TailwindCSS入门教程',
                        url: 'https://www.bilibili.com/video/BV1mG411h7aD',
                        type: 'video'
                    }
                ]
            },
            {
                id: 'build_tools',
                name: '前端工程化',
                icon: '📦',
                description: 'Vite、包管理、构建与开发流程',
                priority: 'important',
                quizs: [
                    {
                        question: 'Vite 的核心设计理念是什么？',
                        options: ['利用浏览器原生ES模块，提供极快的开发服务器', '打包所有代码为一个文件', '取代Node.js', '提供UI组件库'],
                        answer: 0,
                        explanation: 'Vite 利用浏览器对ES模块的原生支持，在开发环境下无需打包，实现了极快的模块热更新。'
                    },
                    {
                        question: 'Vite 的开发服务器是基于哪个库实现的？',
                        options: ['Connect', 'Express', 'Koa', 'http-server'],
                        answer: 0,
                        explanation: 'Vite 底层使用了 Connect 库来创建开发服务器。'
                    },
                    {
                        question: '以下哪个命令用于通过 Vite 快速创建一个新项目？',
                        options: ['npm create vite@latest', 'vite create project', 'npm init vite-app', 'yarn create vite-project'],
                        answer: 0,
                        explanation: '官方推荐使用 `npm create vite@latest` 命令来快速搭建一个新的 Vite 项目。'
                    },
                    {
                        question: 'Vite 的生产构建使用的是什么打包器？',
                        options: ['Rollup', 'Webpack', 'Parcel', 'esbuild'],
                        answer: 0,
                        explanation: 'Vite 在生产环境下使用 Rollup 进行打包，因为它提供了优秀的代码分割和优化能力。'
                    },
                    {
                        question: '在 Vite 项目中，环境变量文件通常命名为什么？',
                        options: ['.env', '.env.development', '.env.production', '以上都是'],
                        answer: 3,
                        explanation: 'Vite 支持多种环境变量文件，如 .env、.env.development、.env.production 等，使用 `import.meta.env` 访问。'
                    },
                    {
                        question: 'Vite 的插件 API 是基于什么设计的？',
                        options: ['Rollup 插件接口的扩展', 'Webpack 的 loader 机制', '自定义的全新API', 'Gulp 插件'],
                        answer: 0,
                        explanation: 'Vite 插件扩展自 Rollup 的插件接口，并添加了一些 Vite 特有的钩子。'
                    },
                    {
                        question: '以下哪个是 Vite 支持的文件类型（开箱即用）？',
                        options: ['.js', '.ts', '.vue', '以上都是'],
                        answer: 3,
                        explanation: 'Vite 通过官方插件支持多种文件类型，如 .ts、.vue、.jsx 等。'
                    },
                    {
                        question: 'Vite 的预构建依赖功能主要目的是什么？',
                        options: ['将 CommonJS 模块转换为 ESM 并提高性能', '减少代码体积', '检查依赖安全性', '生成类型声明'],
                        answer: 0,
                        explanation: '预构建功能将 CommonJS 或 UMD 格式的依赖转换为 ESM，并提前打包以提升页面加载性能。'
                    },
                    {
                        question: '在 Vite 配置文件中，用于设置开发服务器代理的选项是？',
                        options: ['server.proxy', 'devServer.proxy', 'proxy', 'build.proxy'],
                        answer: 0,
                        explanation: '在 `vite.config.js` 中，使用 `server.proxy` 选项配置开发服务器的代理规则。'
                    },
                    {
                        question: 'Vite 的 HMR（热模块替换）相比传统工具有什么优势？',
                        options: ['基于原生 ESM，更新速度与模块数量无关', '需要手动配置', '只支持特定框架', '需要额外插件'],
                        answer: 0,
                        explanation: '由于基于原生 ESM，Vite 的 HMR 性能不随模块数量增加而显著下降，始终保持快速。'
                    },
                    {
                        question: 'Webpack 的核心概念是什么？',
                        options: ['将所有资源视为模块，并通过入口打包', '只打包JavaScript文件', '是一个开发服务器', '是一个CSS预处理器'],
                        answer: 0,
                        explanation: 'Webpack 的核心是分析你的项目结构，将各种资源（JS、CSS、图片等）作为模块，根据入口文件构建依赖图并打包。'
                    },
                    {
                        question: 'Webpack 配置文件中，指定打包入口的选项是什么？',
                        options: ['entry', 'input', 'main', 'src'],
                        answer: 0,
                        explanation: '在 webpack.config.js 中，使用 `entry` 选项指定一个或多个入口文件。'
                    },
                    {
                        question: '以下哪个选项用于指定 Webpack 打包后的输出位置？',
                        options: ['output', 'out', 'dist', 'build'],
                        answer: 0,
                        explanation: '`output` 选项告诉 webpack 如何以及在哪里输出打包后的文件。'
                    },
                    {
                        question: 'Webpack 中，loader 的作用是什么？',
                        options: ['转换其他类型的文件为有效模块', '执行代码优化', '启动开发服务器', '定义插件'],
                        answer: 0,
                        explanation: 'loader 用于对模块的源代码进行转换，例如将 TypeScript 转译为 JavaScript，或将图片转为 Data URL。'
                    },
                    {
                        question: '在 Webpack 中，用于处理 CSS 文件的常用 loader 组合是？',
                        options: ['css-loader 和 style-loader', 'style-loader 和 sass-loader', 'css-loader 和 less-loader', 'postcss-loader 和 css-loader'],
                        answer: 0,
                        explanation: '通常使用 css-loader 处理 CSS 中的 `@import` 和 `url()`，再用 style-loader 将 CSS 注入到 DOM 中。'
                    },
                    {
                        question: 'Webpack 插件（plugin）的主要目的是什么？',
                        options: ['执行从打包优化到环境变量注入等更广泛的任务', '转换模块代码', '解析文件路径', '提供开发服务器功能'],
                        answer: 0,
                        explanation: '插件可以介入 webpack 构建的整个生命周期，执行打包优化、资源管理、注入环境变量等 loader 无法完成的任务。'
                    },
                    {
                        question: '以下哪个是 Webpack 5 中内置的模块联邦（Module Federation）功能？',
                        options: ['允许在独立应用之间共享代码', '联邦模块加载器', '管理多版本依赖', '一种新的模块规范'],
                        answer: 0,
                        explanation: '模块联邦允许多个独立的构建组成一个应用程序，它们之间可以共享代码和依赖。'
                    },
                    {
                        question: '在 Webpack 中，用于开发模式下自动更新页面的配置是？',
                        options: ['devServer 的 hot 选项', 'watch 模式', 'liveReload 插件', 'HMR 插件'],
                        answer: 0,
                        explanation: '通过配置 `devServer.hot: true` 可以启用热模块替换（HMR），实现开发时的即时更新。'
                    },
                    {
                        question: 'Webpack 的 Tree Shaking 机制依赖于什么？',
                        options: ['ES6 模块的静态结构', 'CommonJS 模块', '代码注释', 'uglify 插件'],
                        answer: 0,
                        explanation: 'Tree Shaking 依赖于 ES6 模块的静态结构，可以在构建时静态分析并移除未使用的导出。'
                    },
                    {
                        question: '以下哪个选项用于将 CSS 从 JS 中提取为独立文件？',
                        options: ['MiniCssExtractPlugin', 'ExtractTextWebpackPlugin', 'CssMinimizerPlugin', 'StyleExtractPlugin'],
                        answer: 0,
                        explanation: '在 Webpack 5 中，通常使用 `mini-css-extract-plugin` 将 CSS 提取到单独的文件中。'
                    },
                    {
                        question: '一个Webpack入门教程通常会从什么开始？',
                        options: ['介绍核心概念并搭建基础配置', '直接编写复杂的插件', '讲解所有loader的使用', '分析源码'],
                        answer: 0,
                        explanation: '教程通常从安装 webpack 和 webpack-cli 开始，然后创建一个最基础的配置文件，讲解 entry 和 output。'
                    },
                    {
                        question: '在入门教程中，你最先接触的 loader 可能是？',
                        options: ['babel-loader', 'css-loader', 'file-loader', 'html-loader'],
                        answer: 1,
                        explanation: '由于处理 CSS 是最常见的需求之一，css-loader 和 style-loader 通常是入门教程中首先讲解的 loader。'
                    },
                    {
                        question: '教程可能会如何演示开发服务器的作用？',
                        options: ['配置 webpack-dev-server 实现自动刷新', '手动刷新浏览器', '使用 Node.js 启动服务', '使用 live-server'],
                        answer: 0,
                        explanation: '入门教程会教你安装和配置 webpack-dev-server，体验修改代码后浏览器自动刷新的便捷。'
                    },
                    {
                        question: '在教程中，处理图片文件通常会用到哪个 loader？',
                        options: ['asset/resource 或 file-loader', 'image-loader', 'url-loader', 'img-loader'],
                        answer: 0,
                        explanation: 'Webpack 5 使用内置的 Asset Modules 来处理图片等资源，其中 `asset/resource` 对应之前的 file-loader。'
                    },
                    {
                        question: '入门教程可能会通过什么案例来讲解多入口配置？',
                        options: ['构建多页面应用', '构建单页应用', '构建组件库', '构建Node应用'],
                        answer: 0,
                        explanation: '为了讲解多入口和代码分割，教程通常会用一个简单的多页面应用作为案例。'
                    },
                    {
                        question: '在入门教程中，如何配置开发环境和生产环境的分离？',
                        options: ['创建不同的配置文件，如 webpack.dev.js 和 webpack.prod.js', '使用同一个配置文件', '通过命令行参数区分', '无法分离'],
                        answer: 0,
                        explanation: '最佳实践是创建多个配置文件，并使用 webpack-merge 来合并公共配置。'
                    },
                    {
                        question: '教程中讲解 Babel 的主要目的是什么？',
                        options: ['将 ES6+ 代码转译为兼容性更好的 ES5', '压缩代码', '检查代码错误', '格式化代码'],
                        answer: 0,
                        explanation: '为了让现代 JavaScript 代码能在老旧浏览器中运行，教程会教你如何配置 babel-loader。'
                    },
                    {
                        question: '关于 mode 配置，教程会说明什么？',
                        options: ['设置 mode: "development" 或 "production" 启用内置优化', 'mode 是可选配置', 'mode 只影响提示信息', 'mode 用于指定框架'],
                        answer: 0,
                        explanation: 'mode 选项非常重要，设置为 production 会自动启用代码压缩等优化，设置为 development 则会启用命名模块等调试功能。'
                    },
                    {
                        question: '在入门教程中，可能会使用哪个插件来生成 HTML 文件？',
                        options: ['HtmlWebpackPlugin', 'HtmlWebpackPlugin', 'HtmlPlugin', 'InjectHtmlPlugin'],
                        answer: 0,
                        explanation: 'HtmlWebpackPlugin 是一个常用的插件，它会根据模板自动生成 HTML 文件，并自动引入打包后的 JS/CSS。'
                    },
                    {
                        question: '入门教程结束时，通常建议你下一步学习什么？',
                        options: ['深入学习代码分割和懒加载', '学习其他构建工具', '学习框架本身', '不需要再学习'],
                        answer: 0,
                        explanation: '掌握了基础配置后，进阶学习通常包括代码分割、懒加载、缓存优化和性能分析等高级主题。'
                    },
                    {
                        question: '一篇题为“Vite从入门到精通”的文章，通常会涵盖哪些内容？',
                        options: ['从基础搭建到高级配置、插件开发等', '只介绍安装方法', '主要对比Webpack', '重点讲解Vue框架'],
                        answer: 0,
                        explanation: '标题暗示内容会比较全面，通常包括Vite的基本概念、项目搭建、常用配置、环境变量、插件开发以及与框架的集成等。'
                    },
                    {
                        question: '文章中在介绍 Vite 的优势时，可能会强调什么？',
                        options: ['极速的冷启动和热更新', '更小的打包体积', '更多的插件生态', '更好的社区支持'],
                        answer: 0,
                        explanation: 'Vite 最突出的优势是基于原生 ESM 的开发服务器，带来的好处就是无论项目多大，冷启动和热更新都极快。'
                    },
                    {
                        question: '在“从入门”部分，文章可能最先演示什么？',
                        options: ['使用 `npm create vite@latest` 创建一个新项目', '手动配置 webpack', '安装 Vue CLI', '编写第一个插件'],
                        answer: 0,
                        explanation: '入门部分通常从零开始，演示如何快速创建一个 Vite 项目并启动。'
                    },
                    {
                        question: '文章在介绍 Vite 配置时，会重点讲解哪个文件？',
                        options: ['vite.config.js', 'webpack.config.js', 'package.json', 'rollup.config.js'],
                        answer: 0,
                        explanation: 'Vite 的配置文件是项目根目录下的 `vite.config.js` 文件。'
                    },
                    {
                        question: '关于 Vite 插件，这篇文章可能会如何讲解？',
                        options: ['介绍常用官方插件和社区插件，并演示如何配置', '要求读者自己编写插件', '认为插件不重要', '只介绍一个插件'],
                        answer: 0,
                        explanation: '“精通”部分会涵盖 Vite 强大的插件系统，介绍如何使用现有插件，可能还会涉及如何开发自定义插件。'
                    },
                    {
                        question: '在介绍环境变量时，文章会提到如何定义和使用？',
                        options: ['创建 .env 文件，并通过 import.meta.env 访问', '使用 process.env 访问', '在配置文件中定义', '无法使用环境变量'],
                        answer: 0,
                        explanation: 'Vite 使用 `.env` 文件加载环境变量，并通过 `import.meta.env` 对象在客户端代码中访问。'
                    },
                    {
                        question: '如果文章对比了 Vite 和 Webpack，可能的结论是什么？',
                        options: ['Vite 在开发体验上更胜一筹，Webpack 生态更成熟', 'Vite 已经完全取代 Webpack', 'Webpack 更快', '两者没有区别'],
                        answer: 0,
                        explanation: '客观的对比会指出 Vite 在开发环境下的速度优势，以及 Webpack 在丰富的loader/插件生态和生产配置灵活性上的成熟。'
                    },
                    {
                        question: '文章在“精通”部分，可能会涉及哪个高级主题？',
                        options: ['如何优化生产构建配置', '如何在 Vite 中使用 Webpack loader', '如何迁移老项目', '如何使用 Grunt 插件'],
                        answer: 0,
                        explanation: '“精通”会深入生产构建优化，包括代码分割、自定义 Rollup 配置、CDN 部署等。'
                    },
                    {
                        question: '关于对 TypeScript 的支持，文章会说明什么？',
                        options: ['Vite 开箱即支持，仅需安装对应插件', '需要复杂配置', '不支持 TypeScript', '只能用 Babel 编译'],
                        answer: 0,
                        explanation: 'Vite 对 TypeScript 有内置支持，无需额外配置即可直接处理 `.ts` 文件。'
                    },
                    {
                        question: '这篇文章可能推荐的 Vite 使用场景不包括以下哪项？',
                        options: ['开发大型 jQuery 传统应用', '开发 Vue/React 单页应用', '开发库或组件库', '构建静态站点'],
                        answer: 0,
                        explanation: 'Vite 非常适合现代框架开发、库开发和静态站点构建，但对于依赖大量 Webpack 特殊 loader 的旧项目，迁移成本可能较高。'
                    }
                ],
                resources: [
                    {
                        name: 'Vite官方文档',
                        url: 'https://cn.vitejs.dev/',
                        type: 'docs'
                    },
                    {
                        name: 'Webpack官方文档',
                        url: 'https://webpack.docschina.org/',
                        type: 'docs'
                    },
                    {
                        name: 'Webpack入门教程',
                        url: 'https://www.bilibili.com/video/BV1aT4y1g7Xq',
                        type: 'video'
                    },
                    {
                        name: 'Vite从入门到精通',
                        url: 'https://juejin.cn/post/7064853960637456421',
                        type: 'article'
                    }
                ]
            },
            {
                id: 'git',
                name: 'Git',
                icon: '🔀',
                description: '版本控制、分支协作与代码回滚基础',
                priority: 'core',
                quizs: [
                    {
                        question: 'Git 是一个什么样的版本控制系统？',
                        options: ['分布式版本控制系统', '集中式版本控制系统', '本地版本控制系统', '云版本控制系统'],
                        answer: 0,
                        explanation: 'Git 是分布式版本控制系统，每个开发者本地都拥有完整的代码仓库历史。'
                    },
                    {
                        question: 'Git 中用于暂存更改的命令是什么？',
                        options: ['git add', 'git commit', 'git push', 'git stage'],
                        answer: 0,
                        explanation: '`git add` 命令用于将工作区的更改添加到暂存区（stage/index），为提交做准备。'
                    },
                    {
                        question: '以下哪个命令用于查看当前仓库的状态？',
                        options: ['git status', 'git log', 'git diff', 'git show'],
                        answer: 0,
                        explanation: '`git status` 是最常用的命令之一，用于显示工作区和暂存区的状态。'
                    },
                    {
                        question: 'Git 中，用于创建新分支的命令是？',
                        options: ['git branch <name>', 'git checkout -b <name>', 'git switch -c <name>', '以上都是'],
                        answer: 3,
                        explanation: 'Git 提供了多种创建分支的方式，包括 `git branch`、`git checkout -b` 和 `git switch -c`。'
                    },
                    {
                        question: '如何将远程仓库的更新拉取到本地并合并？',
                        options: ['git pull', 'git fetch', 'git merge', 'git sync'],
                        answer: 0,
                        explanation: '`git pull` 命令实际上是 `git fetch` 后跟 `git merge` 的简写，用于拉取远程更新并合并到当前分支。'
                    },
                    {
                        question: 'Git 中用于查看提交历史的命令是？',
                        options: ['git log', 'git history', 'git show-log', 'git commits'],
                        answer: 0,
                        explanation: '`git log` 命令用于显示提交历史记录，支持多种格式和过滤选项。'
                    },
                    {
                        question: '以下哪个文件用于指示 Git 应该忽略哪些文件？',
                        options: ['.gitignore', '.gitconfig', '.gitattributes', '.gitmodules'],
                        answer: 0,
                        explanation: '`.gitignore` 文件用于指定 Git 应该忽略的、不需要纳入版本管理的文件和目录。'
                    },
                    {
                        question: 'Git 中，用于撤销工作区修改的命令是？',
                        options: ['git restore <file>', 'git checkout -- <file>', 'git reset HEAD <file>', '以上都是'],
                        answer: 3,
                        explanation: '在较新版本的 Git 中，`git restore` 是推荐用于撤销工作区或暂存区修改的命令，旧版本常用 `git checkout -- <file>`。'
                    },
                    {
                        question: '如何将本地的提交推送到远程仓库？',
                        options: ['git push', 'git upload', 'git send', 'git remote'],
                        answer: 0,
                        explanation: '`git push` 命令用于将本地分支的提交上传到远程仓库。'
                    },
                    {
                        question: 'Git 中用于合并两个分支的命令是？',
                        options: ['git merge', 'git rebase', 'git combine', 'git join'],
                        answer: 0,
                        explanation: '`git merge` 是用于将一个分支的更改合并到另一个分支的标准命令。'
                    },
                    {
                        question: '根据廖雪峰老师的介绍，Git 的创始人是谁？',
                        options: ['Linus Torvalds', 'Linus Torvalds', 'Richard Stallman', 'Guido van Rossum'],
                        answer: 0,
                        explanation: 'Git 是由 Linux 之父 Linus Torvalds 为了管理 Linux 内核开发而创建的。'
                    },
                    {
                        question: '在廖雪峰Git教程中，通常第一步是做什么？',
                        options: ['安装 Git 并进行全局配置', '创建第一个仓库', '学习分支管理', '提交第一个文件'],
                        answer: 0,
                        explanation: '教程开头会引导你安装 Git，并设置全局的用户名和邮箱，这是使用 Git 的基础。'
                    },
                    {
                        question: '根据教程，`git commit` 命令的 `-m` 参数作用是什么？',
                        options: ['附带提交说明信息', '合并所有修改', '提交所有文件', '修改上一次提交'],
                        answer: 0,
                        explanation: '`-m` 参数用于直接附带本次提交的说明信息，如果不加，会进入文本编辑器要求填写说明。'
                    },
                    {
                        question: '廖雪峰老师如何比喻 Git 的工作区、暂存区和版本库的关系？',
                        options: ['工作区是家里，暂存区是购物车，版本库是仓库', '工作区是舞台，暂存区是后台，版本库是剧本', '工作区是草稿，暂存区是打印店，版本库是存档', '没有明确比喻'],
                        answer: 0,
                        explanation: '廖雪峰教程中常用“购物车”来比喻暂存区：你在工作区（货架）选东西，用 `git add` 放进购物车（暂存区），最后用 `git commit` 结账打包存入仓库（版本库）。'
                    },
                    {
                        question: '在“时光机穿梭”这一章，主要讲解什么功能？',
                        options: ['版本回退和穿梭', '远程仓库操作', '分支管理', '标签管理'],
                        answer: 0,
                        explanation: '“时光机穿梭”章节主要教你如何通过 `git reset` 等命令，在提交历史中前进后退，回到任何过去的版本。'
                    },
                    {
                        question: '教程中推荐使用哪个命令来放弃工作区的修改？',
                        options: ['git checkout -- <file> 或 git restore <file>', 'git reset --hard', 'git revert', 'git clean'],
                        answer: 0,
                        explanation: '廖雪峰教程会介绍使用 `git checkout -- <file>`（新版 Git 推荐 `git restore`）来丢弃工作区的修改。'
                    },
                    {
                        question: '根据教程，Git 的 `HEAD` 指针通常指向什么？',
                        options: ['当前分支的最新提交', '当前分支名', '上一个提交', '远程仓库'],
                        answer: 0,
                        explanation: '`HEAD` 是一个指针，通常指向当前所在分支的最新提交，标识你当前工作的版本。'
                    },
                    {
                        question: '廖雪峰教程中，用于解决冲突的标准流程是什么？',
                        options: ['手动编辑冲突文件 -> git add -> git commit', 'git merge --abort', 'git reset --hard', '重新 clone'],
                        answer: 0,
                        explanation: '解决冲突需要手动编辑文件，删除冲突标记并保留最终代码，然后 `git add` 标记为已解决，最后 `git commit` 完成合并。'
                    },
                    {
                        question: '在讲解分支时，教程最常使用的例子是创建什么分支？',
                        options: ['dev 分支', 'feature-a 分支', 'test 分支', 'master 分支'],
                        answer: 0,
                        explanation: '廖雪峰教程通常以 `dev` 分支作为开发分支的示例，讲解分支的创建、切换和合并。'
                    },
                    {
                        question: '关于远程仓库，教程会重点介绍与哪个平台的联动？',
                        options: ['GitHub', 'GitLab', 'Gitee', 'Bitbucket'],
                        answer: 0,
                        explanation: '教程会以 GitHub 为例，详细讲解如何添加远程库、从远程库克隆以及推送和拉取代码。'
                    },
                    {
                        question: '根据菜鸟教程，Git 与 SVN 最核心的区别是什么？',
                        options: ['Git 是分布式，SVN 是集中式', 'Git 更复杂，SVN 更简单', 'Git 免费，SVN 收费', 'Git 支持分支，SVN 不支持'],
                        answer: 0,
                        explanation: '页面明确指出，“Git 是分布式的，SVN 不是：这是 Git 和其它非分布式的版本控制系统，例如 SVN，CVS 等，最核心的区别。”'
                    },
                    {
                        question: '教程中提到，Git 把内容按什么方式存储？',
                        options: ['元数据方式', '文件方式', '数据库方式', '压缩包方式'],
                        answer: 0,
                        explanation: '页面提到：“Git 把内容按元数据方式存储，而 SVN 是按文件：所有的资源控制系统都是把文件的元信息隐藏在一个类似 .svn、.cvs 等的文件夹里。”'
                    },
                    {
                        question: '根据菜鸟教程，Git 用于保证内容完整性的算法是什么？',
                        options: ['SHA-1 哈希算法', 'MD5 算法', 'CRC32 校验', 'AES 加密'],
                        answer: 0,
                        explanation: '页面说明：“Git 的内容存储使用的是 SHA-1 哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。”'
                    },
                    {
                        question: '菜鸟教程指出，Git 没有而 SVN 有的一个特征是什么？',
                        options: ['全局的版本号', '分支功能', '标签功能', '日志功能'],
                        answer: 0,
                        explanation: '教程中明确指出：“Git 没有一个全局的版本号，而 SVN 有：目前为止这是跟 SVN 相比 Git 缺少的最大的一个特征。”'
                    },
                    {
                        question: '在菜鸟教程中，Git 被描述为不仅仅是版本控制系统，还是什么？',
                        options: ['内容管理系统(CMS)和工作管理系统', '项目管理工具', '代码编辑器', '数据库系统'],
                        answer: 0,
                        explanation: '页面开篇提到：“Git 不仅仅是个版本控制系统，它也是个内容管理系统(CMS)，工作管理系统等。”'
                    },
                    {
                        question: '根据教程，Git 的分支和 SVN 的分支有何不同？',
                        options: ['Git 分支就是指向某个提交的指针，更轻量', 'Git 分支是完整的目录拷贝', '两者没有区别', 'Git 分支必须放在指定目录'],
                        answer: 0,
                        explanation: '结合 Git 的原理，菜鸟教程旨在说明 Git 分支因其指针机制而远比 SVN 的目录拷贝分支轻量和高效。'
                    },
                    {
                        question: '菜鸟教程提供的 Git 快速入门指南叫什么？',
                        options: ['Git 简明指南', 'Git 速查表', 'Git 第一课', 'Git 快速入门'],
                        answer: 0,
                        explanation: '页面提供了一个链接：“Git 简明指南”，方便初学者快速上手。'
                    },
                    {
                        question: '教程末尾提供了哪些额外的 Git 学习资源？',
                        options: ['Git 完整命令手册地址和 PDF 版命令手册', '视频教程链接', '练习平台地址', '认证考试信息'],
                        answer: 0,
                        explanation: '页面提供了 Git 完整命令手册地址 `http://git-scm.com/docs` 和 `github-git-cheat-sheet.pdf` 的下载。'
                    },
                    {
                        question: '基于菜鸟教程的描述，以下哪个是 Git 的特点？',
                        options: ['分布式、分支轻量、内容完整', '集中式、分支沉重、依赖网络', '适合个人、不支持协作', '需要付费使用'],
                        answer: 0,
                        explanation: '页面内容总结起来，Git 的核心特点包括分布式、轻量分支和基于哈希的完整性校验。'
                    },
                    {
                        question: '根据菜鸟教程，学习 Git 前如果了解 SVN，需要注意什么？',
                        options: ['需要做一定的思想转换，适应 Git 的概念', '可以直接套用 SVN 的用法', 'Git 比 SVN 更难学', '不需要注意任何东西'],
                        answer: 0,
                        explanation: '页面提到：“如果你是一个具有使用 SVN 背景的人，你需要做一定的思想转换，来适应 Git 提供的一些概念和特征。”'
                    },
                    {
                        question: '一个面向初学者的 Git 视频教程，通常会从什么开始？',
                        options: ['讲解 Git 的安装和配置', '直接讲解分支管理', '介绍 GitHub 网站', '讲解 git reset 命令'],
                        answer: 0,
                        explanation: '入门教程的第一步总是引导学习者安装 Git 并进行全局用户名和邮箱的配置。'
                    },
                    {
                        question: '在 Git 入门视频中，你最先学到的操作通常是？',
                        options: ['git init 初始化仓库', 'git commit 提交', 'git push 推送', 'git branch 分支'],
                        answer: 0,
                        explanation: '学会安装后，第一个动手操作通常是使用 `git init` 将现有目录变为一个 Git 仓库。'
                    },
                    {
                        question: '视频教程可能会通过什么命令来演示“记录一次修改”？',
                        options: ['git add 和 git commit', 'git push', 'git pull', 'git clone'],
                        answer: 0,
                        explanation: '`git add` 和 `git commit` 是最基础也是最重要的两个命令，用于将修改存入版本库。'
                    },
                    {
                        question: '为了展示版本控制的能力，教程通常会演示什么场景？',
                        options: ['修改文件后，使用 git log 查看历史，并回退到旧版本', '创建远程仓库', '解决复杂的合并冲突', '忽略文件'],
                        answer: 0,
                        explanation: '展示版本回退是入门教程最能体现版本控制价值的部分，会用到 `git log` 和 `git reset`。'
                    },
                    {
                        question: '在入门教程中，讲解分支时可能会如何比喻？',
                        options: ['分支就像是时间线的平行宇宙', '分支是代码的副本', '分支是一个文件夹', '分支是一个标签'],
                        answer: 0,
                        explanation: '“平行宇宙”或“分岔路口”是讲解分支时常用的比喻，帮助理解可以独立开发互不影响。'
                    },
                    {
                        question: '如果教程涉及远程仓库，通常会以哪个平台为例？',
                        options: ['GitHub', 'GitLab', 'Gitee', 'AWS CodeCommit'],
                        answer: 0,
                        explanation: 'GitHub 是最流行的代码托管平台，绝大多数入门教程都会以其为例讲解 `git push` 和 `git pull`。'
                    },
                    {
                        question: '在演示协作流程时，教程可能会制造一个什么场景来讲解冲突？',
                        options: ['两个人修改了同一文件的同一行', '两个人修改了不同文件', '一个人修改了文件，另一个人删除了文件', '同时提交到不同分支'],
                        answer: 0,
                        explanation: '修改同一文件的同一行是最典型的冲突场景，教程会借此讲解如何手动解决冲突。'
                    },
                    {
                        question: '对于初学者，教程通常会建议使用哪种工作流程？',
                        options: ['在 master 分支上直接开发并提交', '创建功能分支开发，完成后合并', '直接在远程仓库修改', '不使用分支'],
                        answer: 0,
                        explanation: '对于个人项目，入门教程可能会简化流程；但对于团队协作，会介绍功能分支（feature branch）的工作流。'
                    },
                    {
                        question: '在教程的结尾，可能会鼓励初学者做什么？',
                        options: ['将本地仓库推送到 GitHub 上备份', '学习所有高级命令', '卸载 SVN', '不再使用其他工具'],
                        answer: 0,
                        explanation: '将本地代码推送到 GitHub 是一个很有成就感的里程碑，也是体验完整 Git 工作流的最后一步。'
                    },
                    {
                        question: '关于 `.gitignore` 文件，入门教程会强调它的什么作用？',
                        options: ['忽略不需要纳入版本管理的文件，如依赖包、编译产物', '记录 Git 命令', '保存用户名密码', '配置 Git 行为'],
                        answer: 0,
                        explanation: '教程会说明如何使用 `.gitignore` 来排除 `node_modules`、`.idea` 等不需要提交的文件，保持仓库整洁。'
                    }
                ],
                resources: [
                    {
                        name: 'Git官方文档',
                        url: 'https://git-scm.com/doc',
                        type: 'docs'
                    },
                    {
                        name: '廖雪峰Git教程',
                        url: 'https://www.liaoxuefeng.com/wiki/896043488029600',
                        type: 'tutorial'
                    },
                    {
                        name: 'Git教程 - 菜鸟教程',
                        url: 'https://www.runoob.com/git/git-tutorial.html',
                        type: 'tutorial'
                    },
                    {
                        name: 'bilibili - Git入门教程',
                        url: 'https://www.bilibili.com/video/BV1pW411A7a5',
                        type: 'video'
                    }
                ]
            }
        ]
    },
    {
        id: 'backend',
        name: '后端开发',
        icon: '⚙️',
        category: 'backend',
        description: '负责接口、数据与业务系统，让服务稳定可扩展',
        skills: [
            {
                id: 'java',
                name: 'Java',
                icon: '☕',
                description: '企业级后端开发与面向对象基础',
                priority: 'core',
                quizs: [
                    // ---- 基础语法与第一个程序 ----
                    {
                        question: 'Java 程序的入口方法是什么？',
                        options: ['public static void main(String[] args)', 'public void main(String[] args)', 'public static int main(String[] args)', 'static void main(String[] args)'],
                        answer: 0,
                        explanation: 'Java 程序的入口点是 main 方法，其签名必须为 public static void main(String[] args)，这是 Java 虚拟机（JVM）规定的标准格式。'
                    },
                    {
                        question: 'Java 源文件的扩展名是什么？',
                        options: ['.java', '.class', '.jar', '.jvm'],
                        answer: 0,
                        explanation: 'Java 源代码文件以 `.java` 为扩展名，经过 `javac` 编译器编译后生成 `.class` 字节码文件。'
                    },
                    {
                        question: '用于编译 Java 源文件的命令是？',
                        options: ['javac', 'java', 'jvm', 'compile'],
                        answer: 0,
                        explanation: '`javac` 是 Java 编译器命令，用于将 `.java` 源文件编译成 `.class` 字节码文件。'
                    },
                    {
                        question: '用于执行 Java 字节码文件的命令是？',
                        options: ['java', 'javac', 'run', 'jre'],
                        answer: 0,
                        explanation: '`java` 命令用于启动 Java 虚拟机（JVM）并执行指定的 `.class` 字节码文件（注意：执行时只需要类名，不加 `.class` 后缀）。'
                    },
                    {
                        question: '根据“菜鸟教程”，执行 `java HelloWorld` 命令时，`HelloWorld` 指的是什么？',
                        options: ['类名', '文件名', '方法名', '包名'],
                        answer: 0,
                        explanation: '`java` 命令后面跟着的是包含 main 方法的**类名**，而不是文件名。'
                    },
                    {
                        question: '在 Java 的 main 方法签名 `public static void main(String[] args)` 中，`String[] args` 的作用是什么？',
                        options: ['接收命令行参数', '定义字符串数组', '声明异常', '存储环境变量'],
                        answer: 0,
                        explanation: '`String[] args` 是一个字符串数组，用于接收来自命令行的参数。多个参数通常用空格分隔。'
                    },
                    {
                        question: '如果要在命令行传给 Java 程序的参数中包含空格（如一个带空格的字符串），应该怎么做？',
                        options: ['使用双引号 `""` 将包含空格的参数括起来', '使用单引号 `\'\'` 括起来', '使用转义字符 `\\`', '无法传递带空格的参数'],
                        answer: 0,
                        explanation: '在命令行中，如果需要传递包含空格的参数，通常需要用双引号 `""` 将该参数括起来。'
                    },
                    // ---- 面向对象基础 ----
                    {
                        question: '以下哪个关键字用于定义类？',
                        options: ['class', 'interface', 'struct', 'type'],
                        answer: 0,
                        explanation: '在 Java 中，使用 `class` 关键字来定义一个类。'
                    },
                    {
                        question: '在 Java 中，`public` 关键字的主要作用是什么？',
                        options: ['声明访问权限为公共的，任何地方都可访问', '声明一个公开的类', '定义一个公共方法', '声明一个公共变量'],
                        answer: 0,
                        explanation: '`public` 是一个访问修饰符，表示所修饰的类、方法或变量是公开的，可以被任何其他类访问。'
                    },
                    {
                        question: '`static` 关键字修饰的方法属于什么？',
                        options: ['属于类本身，而非类的实例', '属于类的实例', '属于方法局部变量', '属于代码块'],
                        answer: 0,
                        explanation: '`static` 关键字表示静态的，它修饰的成员（方法或变量）属于类本身，在类加载时就会初始化，可以直接通过类名调用，而不需要创建类的实例。'
                    },
                    {
                        question: '`void` 关键字在方法声明中表示什么？',
                        options: ['方法没有返回值', '方法返回空值', '方法返回整数0', '方法返回null'],
                        answer: 0,
                        explanation: '`void` 关键字用于指定方法不返回任何值。'
                    },
                    {
                        question: 'Java 中，所有类的根父类是什么？',
                        options: ['java.lang.Object', 'java.lang.Class', 'java.util.Collection', 'java.lang.System'],
                        answer: 0,
                        explanation: '`java.lang.Object` 类是所有 Java 类的最终父类（根类）。'
                    },
                    {
                        question: '以下哪个关键字用于创建对象实例？',
                        options: ['new', 'create', 'instance', 'alloc'],
                        answer: 0,
                        explanation: '在 Java 中，使用 `new` 关键字来创建（实例化）一个对象。'
                    },
                    {
                        question: 'Java 的包（package）机制主要用于什么？',
                        options: ['组织类，避免命名冲突', '管理内存', '控制程序流程', '定义数据类型'],
                        answer: 0,
                        explanation: '包主要用于将相关的类和接口组织在一起，并提供命名空间，以避免类名冲突。'
                    },
                    {
                        question: '如果要在其他类中使用某个包中的类，需要使用哪个关键字导入？',
                        options: ['import', 'include', 'package', 'using'],
                        answer: 0,
                        explanation: '使用 `import` 关键字可以导入其他包中的类，以便在当前类中直接使用。'
                    },
                    // ---- 数据类型与变量 ----
                    {
                        question: '以下哪个不是 Java 的基本数据类型？',
                        options: ['String', 'int', 'char', 'boolean'],
                        answer: 0,
                        explanation: '`String` 是 Java 的一个类（引用类型），不是基本数据类型。Java 的基本数据类型包括 byte, short, int, long, float, double, char, boolean。'
                    },
                    {
                        question: 'Java 中，`int` 类型的默认值是多少？',
                        options: ['0', 'null', '0.0', 'false'],
                        answer: 0,
                        explanation: '对于类的成员变量，`int` 类型的默认初始值是 0。'
                    },
                    {
                        question: '以下哪个是 Java 中正确的变量命名规范？',
                        options: ['myVariable', '2variable', 'my-variable', 'class'],
                        answer: 0,
                        explanation: 'Java 变量名可以以字母、下划线或美元符号开头，不能以数字开头，且不能是 Java 关键字。`2variable` 以数字开头，`my-variable` 包含非法字符 `-`，`class` 是关键字。'
                    },
                    {
                        question: '`final` 关键字修饰的变量意味着什么？',
                        options: ['变量的值一旦被赋值就不能再改变', '变量只能在构造函数中初始化', '变量是静态的', '变量可以被任意修改'],
                        answer: 0,
                        explanation: '`final` 变量在初始化后，其值就不能再被修改，相当于一个常量。'
                    },
                    // ---- 运算符与流程控制 ----
                    {
                        question: '以下哪个是 Java 中的取模（求余）运算符？',
                        options: ['%', '/', '&', '|'],
                        answer: 0,
                        explanation: '`%` 是取模运算符，用于计算两个数相除的余数。'
                    },
                    {
                        question: '`&&` 运算符在 Java 中表示什么？',
                        options: ['逻辑与（短路与）', '逻辑或', '逻辑非', '按位与'],
                        answer: 0,
                        explanation: '`&&` 是逻辑与运算符，具有短路特性：如果第一个表达式为 false，则不会计算第二个表达式。'
                    },
                    {
                        question: '以下哪个语句用于根据多个条件执行不同的代码块？',
                        options: ['if-else', 'for', 'while', 'do-while'],
                        answer: 0,
                        explanation: '`if-else` 语句是 Java 中最基本的条件控制语句，用于根据布尔表达式的值选择执行不同的代码块。'
                    },
                    {
                        question: '以下哪个是 `for` 循环的正确语法？',
                        options: ['for (int i = 0; i < 10; i++) { }', 'for (i = 0; i < 10; i++)', 'for (int i = 0; i < 10) { }', 'for (int i = 0; i++) { }'],
                        answer: 0,
                        explanation: '标准 `for` 循环的语法是 `for (初始化; 布尔表达式; 更新) { //代码块 }`。'
                    },
                    {
                        question: '`break` 语句在循环中的作用是什么？',
                        options: ['立即终止当前循环', '跳过本次循环的剩余部分，进入下一次循环', '结束程序', '返回方法值'],
                        answer: 0,
                        explanation: '`break` 语句用于强行退出当前所在的循环，不再执行循环中剩余的语句及循环条件判断。'
                    },
                    // ---- 面向对象进阶 ----
                    {
                        question: '在 Java 中，继承使用哪个关键字？',
                        options: ['extends', 'implements', 'inherits', 'super'],
                        answer: 0,
                        explanation: '使用 `extends` 关键字来表示一个类继承另一个类（父类）。'
                    },
                    {
                        question: '`super` 关键字在子类中的作用是什么？',
                        options: ['引用父类的成员（构造方法、方法、变量）', '引用当前类的对象', '调用私有方法', '创建父类实例'],
                        answer: 0,
                        explanation: '`super` 关键字用于在子类中访问父类的成员（尤其是当子类覆盖了父类的成员时）。'
                    },
                    {
                        question: '方法重写（Override）发生在什么情况下？',
                        options: ['子类中定义了一个与父类方法签名完全相同的方法', '同一个类中定义多个同名方法', '子类中定义一个新方法', '调用父类方法'],
                        answer: 0,
                        explanation: '方法重写发生在有继承关系的类之间，子类重新定义了父类中已有的方法（方法名、参数列表、返回值类型相同）。'
                    },
                    {
                        question: '方法重载（Overload）的特征是什么？',
                        options: ['在同一个类中，方法名相同但参数列表不同', '在父子类中，方法名相同', '方法名必须不同', '返回值类型必须相同'],
                        answer: 0,
                        explanation: '方法重载是指在同一个类中，允许多个方法拥有相同的名字，但它们的参数列表必须不同（参数个数、类型或顺序）。'
                    },
                    {
                        question: '抽象类（abstract class）的特点是什么？',
                        options: ['不能被实例化，可以包含抽象方法和具体方法', '只能包含抽象方法', '可以被实例化', '不能有构造方法'],
                        answer: 0,
                        explanation: '抽象类使用 `abstract` 修饰，不能被直接实例化。它可以包含抽象方法（只有声明，没有实现），也可以包含已经实现的方法。'
                    },
                    {
                        question: '接口（interface）中的方法默认是什么？',
                        options: ['public abstract', 'private', 'protected', 'static'],
                        answer: 0,
                        explanation: '在传统的接口定义中，所有的方法都隐式地是 `public abstract` 的（Java 8 之后引入了默认方法和静态方法）。'
                    },
                    {
                        question: '类实现接口使用哪个关键字？',
                        options: ['implements', 'extends', 'with', 'interface'],
                        answer: 0,
                        explanation: '一个类可以使用 `implements` 关键字来实现一个或多个接口。'
                    },
                    // ---- 异常处理 ----
                    {
                        question: 'Java 中用于处理异常的语句结构是？',
                        options: ['try-catch-finally', 'throw-catch', 'try-except', 'handle-error'],
                        answer: 0,
                        explanation: 'Java 使用 `try-catch-finally` 块来捕获和处理异常。'
                    },
                    {
                        question: '`finally` 代码块中的代码一定会执行吗？',
                        options: ['通常会的，除非在 try 或 catch 中调用了 `System.exit()` 或 JVM 崩溃', '一定会', '不一定，取决于是否有异常', '只有在没有异常时才会执行'],
                        answer: 0,
                        explanation: '`finally` 块通常会在 `try` 或 `catch` 块执行后被执行，用于清理资源。但如果在 `try` 或 `catch` 中调用了 `System.exit()` 方法终止了 JVM，或者 JVM 发生崩溃，则 `finally` 块可能不会执行。'
                    },
                    {
                        question: '用于手动抛出异常的关键字是？',
                        options: ['throw', 'throws', 'try', 'catch'],
                        answer: 0,
                        explanation: '`throw` 关键字用于在方法体内手动抛出一个异常实例。'
                    },
                    {
                        question: '在方法签名后使用 `throws` 关键字的作用是什么？',
                        options: ['声明该方法可能会抛出的异常，让调用者处理', '抛出异常', '捕获异常', '忽略异常'],
                        answer: 0,
                        explanation: '`throws` 用于在方法声明后面列出该方法可能抛出的异常类型，将异常处理的责任交给调用该方法的上一级。'
                    },
                    // ---- 核心API：数组、字符串、集合 ----
                    {
                        question: '如何声明并初始化一个包含三个整数的数组？',
                        options: ['int[] arr = {1, 2, 3};', 'int arr[] = new int(3);', 'int[3] arr = new int[];', 'Array<int> arr = [1,2,3];'],
                        answer: 0,
                        explanation: '在 Java 中，可以使用静态初始化块 `int[] arr = {1, 2, 3};` 来声明和初始化数组。'
                    },
                    {
                        question: 'Java 中，`String` 对象的内容可以被修改吗？',
                        options: ['不可以，String 是不可变的', '可以，通过其方法修改', '只能在创建时修改', '取决于 JVM'],
                        answer: 0,
                        explanation: '`String` 对象在 Java 中是不可变的（immutable）。任何对其内容的修改操作都会返回一个新的 `String` 对象。'
                    },
                    {
                        question: '以下哪个类用于操作可变字符串，性能通常优于 String 的拼接操作？',
                        options: ['StringBuilder 或 StringBuffer', 'StringUtils', 'CharSequence', 'StringJoiner'],
                        answer: 0,
                        explanation: '`StringBuilder`（非线程安全）和 `StringBuffer`（线程安全）用于创建可变的字符序列，在进行大量字符串拼接时性能远优于使用 `String`。'
                    },
                    {
                        question: '以下哪个不是 Java 集合框架中的接口？',
                        options: ['Set', 'List', 'Map', 'Array'],
                        answer: 3,
                        explanation: '`Set`、`List`、`Map` 都是 Java 集合框架中的顶层接口。`Array`（数组）是 Java 语言内置的数据结构，不属于集合框架。'
                    },
                    {
                        question: '`ArrayList` 和 `LinkedList` 的主要区别是什么？',
                        options: ['ArrayList 基于动态数组，随机访问快；LinkedList 基于双向链表，插入删除快', 'ArrayList 是线程安全的，LinkedList 不是', 'ArrayList 不允许重复元素', '它们没有区别'],
                        answer: 0,
                        explanation: '`ArrayList` 底层是数组，适合随机访问和遍历；`LinkedList` 底层是链表，适合在列表中间频繁进行插入和删除操作。'
                    }
                ],
                resources: [
                    {
                        name: 'Java官方文档',
                        url: 'https://docs.oracle.com/en/java/',
                        type: 'docs'
                    },
                    {
                        name: '菜鸟教程 - Java',
                        url: 'https://www.runoob.com/java/java-tutorial.html',
                        type: 'tutorial'
                    },
                    {
                        name: '廖雪峰Java教程',
                        url: 'https://www.liaoxuefeng.com/wiki/1252599548343744',
                        type: 'tutorial'
                    },
                    {
                        name: 'bilibili - 黑马Java教程',
                        url: 'https://www.bilibili.com/video/BV1Cv411372m',
                        type: 'video'
                    }
                ]
            },
            {
                id: 'python',
                name: 'Python',
                icon: '🐍',
                description: '脚本、接口与服务开发的通用语言',
                priority: 'core',
                quizs: [
                    // ---- 基础语法与第一个程序 ----
                    {
                        question: 'Python 3.x 版本在设计时的主要考量是什么？',
                        options: ['不向下兼容，带来较大升级', '完全兼容 Python 2.x', '只改进了性能', '增加了对移动端的支持'],
                        answer: 0,
                        explanation: '根据菜鸟教程，Python 3.0 在设计时“为了不带入过多的累赘……没有考虑向下兼容”，是一次较大的升级。'
                    },
                    {
                        question: 'Python 官方宣布何时停止对 Python 2 的更新？',
                        options: ['2020年1月1日', '2015年1月1日', '2025年1月1日', '尚未宣布'],
                        answer: 0,
                        explanation: '菜鸟教程明确指出：“官方宣布，2020 年 1 月 1 日，停止 Python 2 的更新。”'
                    },
                    {
                        question: '在命令行中查看已安装的 Python 版本，可以使用哪个命令？',
                        options: ['python -V', 'python version', 'python --ver', 'py version'],
                        answer: 0,
                        explanation: '菜鸟教程示例：使用 `python -V` 或 `python --version` 可以查看 Python 版本。'
                    },
                    {
                        question: 'Python 源代码文件的常用扩展名是什么？',
                        options: ['.py', '.python', '.exe', '.pyc'],
                        answer: 0,
                        explanation: '菜鸟教程提到：“Python 常用文件扩展名为 .py。” `.pyc` 是编译后的字节码文件。'
                    },
                    {
                        question: '用于执行 Python 脚本文件（例如 hello.py）的命令是？',
                        options: ['python hello.py', 'run hello.py', 'execute hello.py', 'py-start hello.py'],
                        answer: 0,
                        explanation: '菜鸟教程示例：使用 `python3 hello.py` 命令执行脚本文件。'
                    },
                    {
                        question: 'Python 中，用于在控制台输出信息的函数是？',
                        options: ['print()', 'console.log()', 'echo()', 'printf()'],
                        answer: 0,
                        explanation: '第一个 Python 程序通常使用 `print("Hello, World!")` 来输出信息。'
                    },
                    {
                        question: '根据廖雪峰Python教程的定位，它主要面向哪个群体？',
                        options: ['完全零基础的小白', '有经验的Java开发者', '数据科学家', '运维工程师'],
                        answer: 0,
                        explanation: '廖雪峰官方网站将其Python教程描述为“完全面向小白的Python新手教程”。'
                    },
                    // ---- 数据类型与变量 ----
                    {
                        question: '以下哪个是 Python 中不可变的数据类型？',
                        options: ['元组 (tuple)', '列表 (list)', '字典 (dict)', '集合 (set)'],
                        answer: 0,
                        explanation: '元组 (tuple) 一旦创建，其内容不能被修改，是不可变类型。'
                    },
                    {
                        question: 'Python 中，用于定义单行注释的符号是？',
                        options: ['#', '//', '/*', '\''],
                        answer: 0,
                        explanation: 'Python 使用井号 `#` 来表示单行注释。'
                    },
                    {
                        question: '在 Python 中，`None` 表示什么？',
                        options: ['空值，即什么都没有', '整数0', '空字符串', 'False'],
                        answer: 0,
                        explanation: '`None` 是 Python 中一个特殊的常量，表示“没有值”或“空值”。'
                    },
                    {
                        question: '以下哪个选项是 Python 中合法的变量命名？',
                        options: ['my_var', '2var', 'my-var', 'class'],
                        answer: 0,
                        explanation: 'Python 变量名可以包含字母、数字和下划线，但不能以数字开头，也不能是关键字。`my_var` 合法，`2var` 以数字开头，`my-var` 包含非法字符 `-`，`class` 是关键字。'
                    },
                    {
                        question: 'Python 是动态类型语言，这意味着什么？',
                        options: ['变量的类型是在运行时根据赋值确定的，无需提前声明', '变量必须先声明类型才能使用', '变量的类型一旦确定就不能改变', '所有变量都是同一个类型'],
                        answer: 0,
                        explanation: '动态类型意味着你不需要在声明变量时指定其类型，解释器会在运行时根据赋给变量的值推断出类型。'
                    },
                    // ---- 运算符与流程控制 ----
                    {
                        question: 'Python 中用于计算整除的运算符是？',
                        options: ['//', '/', '%', '**'],
                        answer: 0,
                        explanation: '`//` 是整除运算符，返回商的整数部分（向下取整）。'
                    },
                    {
                        question: '以下哪个是 Python 中表示“不等于”的比较运算符？',
                        options: ['!=', '<>', '!==', '><'],
                        answer: 0,
                        explanation: 'Python 中，`!=` 是标准的“不等于”运算符。'
                    },
                    {
                        question: 'Python 中 `if` 语句的基本结构是什么？',
                        options: ['if condition:', 'if (condition) then', 'if condition then', 'if {condition}'],
                        answer: 0,
                        explanation: 'Python 使用 `if 条件:` 后跟一个冒号，并通过缩进来表示代码块。'
                    },
                    {
                        question: '以下哪个是 Python 中 `for` 循环遍历列表 `items` 的正确写法？',
                        options: ['for item in items:', 'for (item in items)', 'foreach item in items:', 'for i=0; i<len(items); i++'],
                        answer: 0,
                        explanation: 'Python 的 `for` 循环通常用于遍历任何可迭代对象，语法是 `for 变量 in 可迭代对象:`。'
                    },
                    {
                        question: '在循环中，`break` 语句的作用是什么？',
                        options: ['终止当前循环', '跳过本次循环的剩余部分，进入下一次循环', '结束程序', '什么也不做'],
                        answer: 0,
                        explanation: '`break` 用于完全终止它所在的循环，跳出循环体。'
                    },
                    {
                        question: '在循环中，`continue` 语句的作用是什么？',
                        options: ['跳过本次循环的剩余部分，进入下一次循环', '终止当前循环', '继续执行后续代码', '重启循环'],
                        answer: 0,
                        explanation: '`continue` 用于跳过当前这次循环中 `continue` 之后剩余的语句，直接开始下一次循环迭代。'
                    },
                    // ---- 数据结构：列表、元组、字典、集合 ----
                    {
                        question: '以下哪个符号用于定义列表（list）？',
                        options: ['[]', '{}', '()', '<>'],
                        answer: 0,
                        explanation: 'Python 中使用方括号 `[]` 来定义列表，例如 `[1, 2, 3]`。'
                    },
                    {
                        question: '在 Python 中，如何获取列表 `my_list` 的第一个元素？',
                        options: ['my_list[0]', 'my_list[1]', 'my_list.first()', 'my_list[-0]'],
                        answer: 0,
                        explanation: 'Python 中列表的索引是从 0 开始的，所以第一个元素的索引是 0。'
                    },
                    {
                        question: '以下哪个数据结构是无序的、不重复的元素集合？',
                        options: ['集合 (set)', '列表 (list)', '元组 (tuple)', '字符串 (str)'],
                        answer: 0,
                        explanation: '集合（set）是一个无序的、不包含重复元素的容器。'
                    },
                    {
                        question: '用于定义字典（dict）的花括号是哪个？',
                        options: ['{}', '[]', '()', '<>'],
                        answer: 0,
                        explanation: '字典使用花括号 `{}` 定义，由键值对组成，例如 `{"name": "Alice", "age": 25}`。'
                    },
                    {
                        question: '要从字典 `d` 中获取键为 `"key"` 的值，可以使用什么方法？',
                        options: ['d.get("key")', 'd["key"]', '以上都可以', 'd.key()'],
                        answer: 2,
                        explanation: '可以使用方括号语法 `d["key"]`（如果键不存在会抛出 KeyError），或者 `get` 方法 `d.get("key")`（如果键不存在返回 None 或默认值）。'
                    },
                    {
                        question: 'Python 中，`range(5)` 生成的是什么？',
                        options: ['一个包含 0 到 4 的可迭代序列', '一个包含 0 到 5 的列表', '一个包含 1 到 5 的元组', '数字5'],
                        answer: 0,
                        explanation: '`range(5)` 生成一个从 0 开始到 5 结束（不包括5）的整数序列，常用于循环。'
                    },
                    // ---- 函数与模块 ----
                    {
                        question: '在 Python 中，定义函数需要使用哪个关键字？',
                        options: ['def', 'function', 'func', 'define'],
                        answer: 0,
                        explanation: 'Python 使用 `def` 关键字来定义函数。'
                    },
                    {
                        question: '函数中的 `return` 语句有什么作用？',
                        options: ['返回一个值并结束函数', '结束程序', '暂停函数执行', '返回到函数开始'],
                        answer: 0,
                        explanation: '`return` 语句用于在函数中返回一个值给调用者，并立即退出当前函数。'
                    },
                    {
                        question: 'Python 中，用于从其他文件中导入模块或函数的关键字是？',
                        options: ['import', 'include', 'using', 'require'],
                        answer: 0,
                        explanation: '使用 `import` 关键字来导入模块，例如 `import math`。'
                    },
                    {
                        question: '如果只想从模块 `math` 中导入 `sqrt` 函数，应该使用哪种语法？',
                        options: ['from math import sqrt', 'import sqrt from math', 'import math.sqrt', 'using math.sqrt'],
                        answer: 0,
                        explanation: '使用 `from ... import ...` 语法可以只导入模块中的特定部分。'
                    },
                    {
                        question: '关于函数的参数，以下哪个是 Python 特有的特性？',
                        options: ['支持默认参数和关键字参数', '不支持可变参数', '必须指定参数类型', '参数数量必须固定'],
                        answer: 0,
                        explanation: 'Python 函数支持非常灵活的传参方式，包括默认参数、关键字参数、可变参数 `*args` 和 `**kwargs`。'
                    },
                    // ---- 面向对象 ----
                    {
                        question: 'Python 中用于定义类的关键字是？',
                        options: ['class', 'Class', 'struct', 'type'],
                        answer: 0,
                        explanation: 'Python 使用 `class` 关键字来定义一个类。'
                    },
                    {
                        question: '在 Python 类中，`__init__` 方法的作用是什么？',
                        options: ['类的构造函数，在创建对象时初始化', '析构函数', '类似 Java 的 toString', '普通方法'],
                        answer: 0,
                        explanation: '`__init__` 是一个特殊方法，当类被实例化时，它会自动被调用，用于初始化新对象的属性。'
                    },
                    {
                        question: '在 Python 类的方法中，哪个参数代表实例本身？',
                        options: ['self', 'this', 'me', 'instance'],
                        answer: 0,
                        explanation: '按照惯例，Python 实例方法的第一个参数名为 `self`，它指向调用该方法的实例对象。'
                    },
                    // ---- 异常处理 ----
                    {
                        question: 'Python 中用于捕获异常的语句结构是？',
                        options: ['try...except...', 'try...catch...', 'try...except...finally', 'A 和 C'],
                        answer: 3,
                        explanation: 'Python 使用 `try...except...` 来捕获异常，也可以加上 `finally` 块来执行无论是否发生异常都要执行的清理代码。'
                    },
                    {
                        question: '`try...except` 语句中，`else` 块的作用是什么？',
                        options: ['当 try 块没有引发异常时执行', '当发生异常时执行', '无论是否发生异常都执行', '定义变量'],
                        answer: 0,
                        explanation: '在 `try...except` 块中，`else` 分支只有在 `try` 块成功执行且没有引发任何异常时才会被执行。'
                    },
                    {
                        question: '用于手动引发异常的关键字是？',
                        options: ['raise', 'throw', 'exception', 'assert'],
                        answer: 0,
                        explanation: '在 Python 中，使用 `raise` 语句来主动抛出一个异常。'
                    },
                    // ---- 文件操作与常用模块 ----
                    {
                        question: 'Python 中用于打开文件的内置函数是？',
                        options: ['open()', 'file()', 'fopen()', 'open_file()'],
                        answer: 0,
                        explanation: '`open()` 函数是 Python 用于打开文件的标准函数，返回一个文件对象。'
                    },
                    {
                        question: '关于 `Python-100-Days` 项目（GitHub），以下描述最可能正确的是？',
                        options: ['它是一个关于Python从入门到实践的百日学习计划', '它是一个Python的Web框架', '它是Python的官方文档', '它是一个游戏引擎'],
                        answer: 0,
                        explanation: '根据项目名称 `Python-100-Days` 和其仓库所有者 `jackfrued`，这是一个广受欢迎的系统性Python学习教程和计划。'
                    },
                    // ---- 综合 ----
                    {
                        question: '在廖雪峰Python教程中，可能会使用哪个词来形容其教学风格？',
                        options: ['完全面向小白，浅显易懂', '深入底层源码', '只讲高级特性', '数学推导为主'],
                        answer: 0,
                        explanation: '廖雪峰官方网站将其教程定位为“完全面向小白的Python新手教程”，强调从零开始。'
                    },
                    {
                        question: '菜鸟教程的 Python 3 教程主要面向使用哪个版本的用户？',
                        options: ['Python 3.x', 'Python 2.x', '两者兼顾', 'PyPy'],
                        answer: 0,
                        explanation: '菜鸟教程明确说明：“本教程主要针对 Python 3.x 版本的学习”。'
                    }
                ],
                resources: [
                    {
                        name: 'Python官方文档',
                        url: 'https://docs.python.org/zh-cn/3/',
                        type: 'docs'
                    },
                    {
                        name: '廖雪峰Python教程',
                        url: 'https://www.liaoxuefeng.com/wiki/1016959663602400',
                        type: 'tutorial'
                    },
                    {
                        name: '菜鸟教程 - Python',
                        url: 'https://www.runoob.com/python3/python3-tutorial.html',
                        type: 'tutorial'
                    },
                    {
                        name: 'Python100天',
                        url: 'https://github.com/jackfrued/Python-100-Days',
                        type: 'github'
                    }
                ]
            },
            {
                id: 'nodejs',
                name: 'Node.js',
                icon: '🟢',
                description: 'JavaScript 服务端运行时与接口开发',
                priority: 'important',
                quizs: [
                    // ---- Node.js 基础概念 ----
                    {
                        question: 'Node.js 是什么？',
                        options: [
                            '基于 Chrome V8 引擎的 JavaScript 运行时环境',
                            '一种前端框架',
                            '一种数据库系统',
                            '一种编程语言'
                        ],
                        answer: 0,
                        explanation: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，让 JavaScript 可以运行在服务器端。'
                    },
                    {
                        question: 'Node.js 的核心特点是什么？',
                        options: [
                            '事件驱动、非阻塞 I/O 模型',
                            '多线程同步模型',
                            '阻塞式 I/O 模型',
                            '单任务处理模型'
                        ],
                        answer: 0,
                        explanation: 'Node.js 采用事件驱动和非阻塞 I/O 模型，使其轻量且高效，特别适合处理高并发的 I/O 密集型应用。'
                    },
                    {
                        question: 'Node.js 的包管理工具默认是什么？',
                        options: ['npm', 'pip', 'maven', 'gradle'],
                        answer: 0,
                        explanation: 'npm (Node Package Manager) 是 Node.js 默认的包管理工具，用于安装、共享和管理依赖包。'
                    },
                    {
                        question: '以下哪个命令用于初始化一个新的 Node.js 项目？',
                        options: ['npm init', 'node init', 'npm start', 'node create'],
                        answer: 0,
                        explanation: '`npm init` 命令用于创建一个新的 package.json 文件，初始化 Node.js 项目。'
                    },
                    {
                        question: 'package.json 文件的主要作用是什么？',
                        options: [
                            '管理项目的依赖和元数据',
                            '存放源代码',
                            '配置文件权限',
                            '存储日志信息'
                        ],
                        answer: 0,
                        explanation: 'package.json 记录了项目的名称、版本、依赖包、脚本命令等重要信息。'
                    },
                    // ---- 模块系统 ----
                    {
                        question: '在 Node.js 中，使用哪个函数来引入模块？',
                        options: ['require()', 'import()', 'include()', 'use()'],
                        answer: 0,
                        explanation: 'Node.js 默认使用 CommonJS 模块系统，通过 `require()` 函数来引入其他模块。'
                    },
                    {
                        question: '在 Node.js 中，如何导出一个模块的接口？',
                        options: ['module.exports', 'export default', 'exports default', 'module.export'],
                        answer: 0,
                        explanation: '使用 `module.exports` 或 `exports` 来导出模块中的函数、对象或变量。'
                    },
                    {
                        question: 'Node.js 内置的核心模块中，用于操作文件系统的是哪个？',
                        options: ['fs', 'http', 'path', 'os'],
                        answer: 0,
                        explanation: '`fs` (File System) 模块提供了用于与文件系统进行交互的 API。'
                    },
                    {
                        question: '以下哪个是 Node.js 的全局对象？',
                        options: ['global', 'window', 'document', 'screen'],
                        answer: 0,
                        explanation: '在 Node.js 中，全局对象是 `global`，类似于浏览器中的 `window`。'
                    },
                    {
                        question: '__dirname 在 Node.js 中表示什么？',
                        options: [
                            '当前模块的目录名',
                            '当前文件名',
                            '项目根目录',
                            '临时文件目录'
                        ],
                        answer: 0,
                        explanation: '`__dirname` 是一个全局变量，返回当前模块所在的目录的绝对路径。'
                    },
                    // ---- 异步编程 ----
                    {
                        question: 'Node.js 中处理异步操作的传统方式是什么？',
                        options: ['回调函数', '同步函数', '循环等待', '定时器'],
                        answer: 0,
                        explanation: 'Node.js 早期主要使用回调函数（callback）来处理异步操作。'
                    },
                    {
                        question: '以下哪个问题被称为“回调地狱”？',
                        options: [
                            '多层嵌套的回调函数导致代码难以维护',
                            '回调函数执行速度慢',
                            '回调函数内存泄漏',
                            '回调函数无法捕获错误'
                        ],
                        answer: 0,
                        explanation: '“回调地狱”指多层嵌套的回调函数使代码难以阅读和维护，通常用 Promise 或 async/await 来解决。'
                    },
                    {
                        question: '在 Node.js 中，Promise 对象表示什么？',
                        options: [
                            '异步操作的最终完成或失败的结果',
                            '同步操作的结果',
                            '一个普通的 JavaScript 对象',
                            '一个定时器'
                        ],
                        answer: 0,
                        explanation: 'Promise 是异步编程的一种解决方案，比回调函数更强大，用于处理异步操作的结果。'
                    },
                    {
                        question: '以下哪个关键字用于在 async 函数中等待 Promise 完成？',
                        options: ['await', 'wait', 'then', 'catch'],
                        answer: 0,
                        explanation: '`await` 关键字用于暂停 async 函数的执行，等待 Promise 解决并返回结果。'
                    },
                    {
                        question: '以下哪个函数声明是正确的 async 函数？',
                        options: ['async function fetchData() {}', 'function async fetchData() {}', 'async: function fetchData() {}', 'function fetchData() async {}'],
                        answer: 0,
                        explanation: 'async 函数使用 `async function` 关键字声明，内部可以使用 `await`。'
                    },
                    // ---- HTTP 模块 ----
                    {
                        question: 'Node.js 中用于创建 HTTP 服务器的内置模块是哪个？',
                        options: ['http', 'server', 'web', 'express'],
                        answer: 0,
                        explanation: '`http` 模块是 Node.js 的核心模块，提供了创建 HTTP 服务器和客户端的 API。'
                    },
                    {
                        question: '以下哪个代码片段可以创建一个简单的 HTTP 服务器？',
                        options: [
                            'http.createServer((req, res) => { res.end("Hello"); }).listen(3000);',
                            'http.startServer(3000, () => {})',
                            'http.listen(3000, (req, res) => {})',
                            'http.newServer(3000).start()'
                        ],
                        answer: 0,
                        explanation: '使用 `http.createServer()` 创建服务器，并调用 `listen()` 方法监听端口。'
                    },
                    {
                        question: '在 HTTP 服务器回调中，`req` 参数代表什么？',
                        options: ['请求对象', '响应对象', '服务器对象', '客户端对象'],
                        answer: 0,
                        explanation: '`req` 是 http.IncomingMessage 的实例，代表客户端的 HTTP 请求。'
                    },
                    {
                        question: '在 HTTP 服务器回调中，`res` 参数代表什么？',
                        options: ['响应对象', '请求对象', '路由对象', '会话对象'],
                        answer: 0,
                        explanation: '`res` 是 http.ServerResponse 的实例，用于向客户端发送 HTTP 响应。'
                    },
                    {
                        question: '如何设置 HTTP 响应的状态码为 404？',
                        options: ['res.statusCode = 404', 'res.code = 404', 'res.status = 404', 'res.sendStatus(404)'],
                        answer: 0,
                        explanation: '可以通过设置 `res.statusCode` 属性来指定 HTTP 响应的状态码。'
                    },
                    // ---- Express 框架 ----
                    {
                        question: 'Express 是什么？',
                        options: [
                            'Node.js 的 Web 应用框架',
                            'Node.js 的数据库驱动',
                            'JavaScript 的前端框架',
                            'Node.js 的测试库'
                        ],
                        answer: 0,
                        explanation: 'Express 是一个快速、极简的 Node.js Web 开发框架，基于 http 模块构建。'
                    },
                    {
                        question: '安装 Express 的命令是什么？',
                        options: ['npm install express', 'npm i -g express', 'node install express', 'express install'],
                        answer: 0,
                        explanation: '使用 `npm install express` 命令将 Express 安装为项目的依赖。'
                    },
                    {
                        question: '在 Express 中，如何定义一个处理 GET 请求的路由？',
                        options: ['app.get("/path", handler)', 'app.use("/path", "GET", handler)', 'app.route("GET", "/path", handler)', 'app.request("GET", "/path", handler)'],
                        answer: 0,
                        explanation: 'Express 应用提供了 `get()`、`post()` 等方法来定义不同 HTTP 方法的路由。'
                    },
                    {
                        question: '在 Express 中，`app.use()` 方法的作用是什么？',
                        options: [
                            '挂载中间件函数',
                            '定义 GET 路由',
                            '启动服务器',
                            '配置视图引擎'
                        ],
                        answer: 0,
                        explanation: '`app.use()` 用于将中间件函数挂载到指定路径上，如果没有指定路径，则默认为 "/"。'
                    },
                    {
                        question: '以下哪个是 Express 中用于解析 JSON 请求体的内置中间件？',
                        options: ['express.json()', 'express.urlencoded()', 'bodyParser.json()', 'express.bodyParser()'],
                        answer: 0,
                        explanation: 'Express 4.16+ 版本内置了 `express.json()` 中间件，用于解析 JSON 格式的请求体。'
                    },
                    // ---- 事件模块 ----
                    {
                        question: 'Node.js 中用于处理事件的模块是哪个？',
                        options: ['events', 'emitter', 'event-handler', 'eventbus'],
                        answer: 0,
                        explanation: '`events` 模块是 Node.js 的核心模块，提供了 EventEmitter 类，用于处理事件驱动编程。'
                    },
                    {
                        question: '创建事件发射器实例的代码是什么？',
                        options: [
                            'const EventEmitter = require("events"); const emitter = new EventEmitter();',
                            'const emitter = createEventEmitter();',
                            'const emitter = new Emitter();',
                            'import EventEmitter from "events";'
                        ],
                        answer: 0,
                        explanation: '首先通过 `require("events")` 加载模块，然后创建 EventEmitter 的实例。'
                    },
                    {
                        question: '用于监听事件的 EventEmitter 方法是？',
                        options: ['on()', 'emit()', 'once()', 'off()'],
                        answer: 0,
                        explanation: '`on()` 方法用于为指定事件注册监听器，`emit()` 用于触发事件。'
                    },
                    {
                        question: '用于触发事件的 EventEmitter 方法是？',
                        options: ['emit()', 'on()', 'fire()', 'trigger()'],
                        answer: 0,
                        explanation: '`emit()` 方法用于触发指定事件，可以传递参数给监听器。'
                    },
                    {
                        question: '`once()` 方法与 `on()` 方法的区别是什么？',
                        options: [
                            'once() 注册的监听器最多只会被调用一次',
                            'once() 是同步的，on() 是异步的',
                            'once() 只能用于内置事件',
                            '它们没有区别'
                        ],
                        answer: 0,
                        explanation: '`once()` 注册的监听器在第一次触发事件后会自动移除，最多执行一次。'
                    },
                    // ---- 文件系统 ----
                    {
                        question: 'fs 模块中用于异步读取文件的函数是？',
                        options: ['fs.readFile()', 'fs.readFileSync()', 'fs.read()', 'fs.open()'],
                        answer: 0,
                        explanation: '`fs.readFile()` 是异步读取文件的函数，而 `fs.readFileSync()` 是同步版本。'
                    },
                    {
                        question: '以下哪个是 fs 模块的同步方法？',
                        options: ['fs.readFileSync()', 'fs.readFile()', 'fs.writeFile()', 'fs.mkdir()'],
                        answer: 0,
                        explanation: '以 `Sync` 结尾的方法都是同步的，会阻塞事件循环直到操作完成。'
                    },
                    {
                        question: '如何检查一个文件是否存在（使用 fs 模块）？',
                        options: [
                            'fs.existsSync() 或 fs.access()',
                            'fs.isFile()',
                            'fs.checkFile()',
                            'fs.exist()'
                        ],
                        answer: 0,
                        explanation: '可以使用 `fs.existsSync()` 同步检查，或 `fs.access()` 异步检查文件是否存在。'
                    },
                    {
                        question: 'fs 模块中，用于创建目录的函数是？',
                        options: ['fs.mkdir()', 'fs.createDir()', 'fs.newDir()', 'fs.makeDir()'],
                        answer: 0,
                        explanation: '`fs.mkdir()` 用于创建目录，`fs.mkdirSync()` 是其同步版本。'
                    },
                    {
                        question: '在 fs 模块中，`fs.watch()` 的作用是什么？',
                        options: [
                            '监视文件或目录的变化',
                            '查看文件内容',
                            '监控 CPU 使用率',
                            '记录访问日志'
                        ],
                        answer: 0,
                        explanation: '`fs.watch()` 用于监视文件或目录的变化，当文件被修改时会触发回调。'
                    },
                    // ---- 进程与环境 ----
                    {
                        question: '在 Node.js 中，如何访问命令行参数？',
                        options: ['process.argv', 'process.args', 'process.env', 'process.cmd'],
                        answer: 0,
                        explanation: '`process.argv` 是一个数组，包含启动 Node.js 进程时的命令行参数。'
                    },
                    {
                        question: '如何获取当前进程的 PID？',
                        options: ['process.pid', 'process.id', 'process.getpid()', 'process.PID'],
                        answer: 0,
                        explanation: '`process.pid` 属性返回当前进程的 PID（进程 ID）。'
                    },
                    {
                        question: '如何退出 Node.js 进程？',
                        options: ['process.exit()', 'process.kill()', 'process.quit()', 'process.stop()'],
                        answer: 0,
                        explanation: '`process.exit()` 方法用于以指定的退出码同步地终止 Node.js 进程。'
                    },
                    {
                        question: '用于访问环境变量的对象是？',
                        options: ['process.env', 'process.environment', 'global.env', 'system.env'],
                        answer: 0,
                        explanation: '`process.env` 属性返回包含用户环境变量的对象。'
                    },
                    {
                        question: '`process.cwd()` 方法返回什么？',
                        options: [
                            '当前工作目录的路径',
                            'Node.js 可执行文件的路径',
                            '当前模块的路径',
                            '临时文件夹的路径'
                        ],
                        answer: 0,
                        explanation: '`process.cwd()` 返回 Node.js 进程的当前工作目录的路径。'
                    },
                    // ---- 流与缓冲区 ----
                    {
                        question: 'Node.js 中，流（Stream）的主要用途是什么？',
                        options: [
                            '处理大量数据或逐块数据',
                            '存储临时数据',
                            '创建网络连接',
                            '处理 HTTP 请求'
                        ],
                        answer: 0,
                        explanation: '流是用于处理流式数据的抽象接口，特别适合处理大文件或网络数据。'
                    },
                    {
                        question: '以下哪项不是 Node.js 中流的类型？',
                        options: ['HashStream', 'Readable', 'Writable', 'Duplex'],
                        answer: 0,
                        explanation: 'Node.js 有四种基本流类型：Readable（可读）、Writable（可写）、Duplex（双向）和 Transform（转换）。'
                    },
                    {
                        question: '`Buffer` 类在 Node.js 中的作用是什么？',
                        options: [
                            '处理二进制数据',
                            '缓存字符串',
                            '存储 JSON 对象',
                            '管理内存池'
                        ],
                        answer: 0,
                        explanation: 'Buffer 类用于在 TCP 流或文件系统中处理二进制数据的缓冲区。'
                    },
                    {
                        question: '如何创建一个包含字符串 "Hello" 的 Buffer？',
                        options: [
                            'Buffer.from("Hello")',
                            'new Buffer("Hello")',
                            'Buffer.of("Hello")',
                            'Buffer.alloc("Hello")'
                        ],
                        answer: 0,
                        explanation: '`Buffer.from()` 是创建包含字符串的 Buffer 的推荐方式。'
                    },
                    {
                        question: '在可读流中，哪个事件表示有数据可读？',
                        options: ['data', 'read', 'available', 'chunk'],
                        answer: 0,
                        explanation: '当流有数据可读时，会触发 `data` 事件。'
                    }
                ],
                resources: [
                    { name: 'Node.js官方文档', url: 'https://nodejs.org/zh-cn/docs/', type: 'docs' },
                    { name: 'Node.js入门教程', url: 'https://www.nodebeginner.org/index-zh-cn.html', type: 'tutorial' },
                    { name: '菜鸟教程 - Node.js', url: 'https://www.runoob.com/nodejs/nodejs-tutorial.html', type: 'tutorial' },
                    { name: 'bilibili - 黑马Node.js教程', url: 'https://www.bilibili.com/video/BV1a34y167AZ', type: 'video' }
                ]
            },
            {
                id: 'database',
                name: '数据库设计',
                icon: '🗄️',
                description: '关系型数据库建模、查询与事务基础',
                priority: 'core',
                quizs: [
                    // ---- SQL 基础 ----
                    {
                        question: 'SQL 是什么的缩写？',
                        options: [
                            'Structured Query Language',
                            'Simple Query Language',
                            'Standard Query Language',
                            'Server Query Language'
                        ],
                        answer: 0,
                        explanation: 'SQL 是 Structured Query Language（结构化查询语言）的缩写，用于管理关系型数据库。'
                    },
                    {
                        question: '以下哪个 SQL 语句用于从数据库中检索数据？',
                        options: ['SELECT', 'GET', 'FETCH', 'EXTRACT'],
                        answer: 0,
                        explanation: '`SELECT` 语句用于从数据库表中查询数据。'
                    },
                    {
                        question: '哪个 SQL 语句用于向数据库表中插入新数据？',
                        options: ['INSERT INTO', 'ADD RECORD', 'INSERT NEW', 'ADD INTO'],
                        answer: 0,
                        explanation: '`INSERT INTO` 语句用于向表中插入新的行。'
                    },
                    {
                        question: '用于更新数据库中现有数据的 SQL 语句是？',
                        options: ['UPDATE', 'MODIFY', 'CHANGE', 'ALTER'],
                        answer: 0,
                        explanation: '`UPDATE` 语句用于修改表中的现有记录。'
                    },
                    {
                        question: '用于从数据库中删除数据的 SQL 语句是？',
                        options: ['DELETE', 'REMOVE', 'DROP', 'ERASE'],
                        answer: 0,
                        explanation: '`DELETE` 语句用于删除表中的行。'
                    },
                    // ---- SQL 查询进阶 ----
                    {
                        question: 'SQL 中，哪个子句用于过滤查询结果？',
                        options: ['WHERE', 'HAVING', 'FILTER', 'CONDITION'],
                        answer: 0,
                        explanation: '`WHERE` 子句用于指定查询条件，过滤返回的记录。'
                    },
                    {
                        question: '用于对查询结果进行排序的 SQL 子句是？',
                        options: ['ORDER BY', 'SORT BY', 'GROUP BY', 'ARRANGE BY'],
                        answer: 0,
                        explanation: '`ORDER BY` 子句用于对结果集按照一列或多列进行排序。'
                    },
                    {
                        question: 'SQL 中，`JOIN` 子句的作用是什么？',
                        options: [
                            '从两个或多个表中根据相关列组合行',
                            '连接两个数据库',
                            '合并查询结果',
                            '创建索引'
                        ],
                        answer: 0,
                        explanation: '`JOIN` 子句用于根据两个或多个表之间的相关列，将它们的行组合起来。'
                    },
                    {
                        question: '以下哪个是 SQL 的聚合函数？',
                        options: ['COUNT()', 'SUM()', 'AVG()', '以上都是'],
                        answer: 3,
                        explanation: 'COUNT、SUM、AVG、MAX、MIN 等都是常用的 SQL 聚合函数。'
                    },
                    {
                        question: '`GROUP BY` 子句通常与什么一起使用？',
                        options: ['聚合函数', 'ORDER BY', 'WHERE', 'HAVING'],
                        answer: 0,
                        explanation: '`GROUP BY` 通常与聚合函数（如 COUNT、SUM）一起使用，将结果集按一个或多个列分组。'
                    },
                    // ---- MySQL ----
                    {
                        question: 'MySQL 是什么类型的数据库？',
                        options: [
                            '关系型数据库管理系统',
                            '非关系型数据库',
                            '键值对数据库',
                            '文档型数据库'
                        ],
                        answer: 0,
                        explanation: 'MySQL 是一个开源的关系型数据库管理系统（RDBMS）。'
                    },
                    {
                        question: 'MySQL 中，用于创建数据库的命令是？',
                        options: ['CREATE DATABASE', 'NEW DATABASE', 'MAKE DATABASE', 'ADD DATABASE'],
                        answer: 0,
                        explanation: '`CREATE DATABASE` 语句用于在 MySQL 中创建新数据库。'
                    },
                    {
                        question: 'MySQL 中，哪种存储引擎支持事务处理？',
                        options: ['InnoDB', 'MyISAM', 'MEMORY', 'ARCHIVE'],
                        answer: 0,
                        explanation: 'InnoDB 是 MySQL 默认的存储引擎，支持事务、行级锁和外键。'
                    },
                    {
                        question: 'MySQL 中用于显示所有表的命令是？',
                        options: ['SHOW TABLES', 'LIST TABLES', 'DISPLAY TABLES', 'SELECT TABLES'],
                        answer: 0,
                        explanation: '`SHOW TABLES` 命令用于显示当前数据库中的所有表。'
                    },
                    {
                        question: 'MySQL 中，`AUTO_INCREMENT` 关键字的作用是什么？',
                        options: [
                            '自动为插入的新行生成唯一的数字',
                            '自动更新时间戳',
                            '自动创建索引',
                            '自动备份数据'
                        ],
                        answer: 0,
                        explanation: '`AUTO_INCREMENT` 属性用于为新插入的行生成唯一的数字标识，通常用于主键。'
                    },
                    // ---- PostgreSQL ----
                    {
                        question: 'PostgreSQL 以什么特性而闻名？',
                        options: [
                            '高度兼容 SQL 标准，支持高级数据类型',
                            '轻量级嵌入式数据库',
                            '纯内存数据库',
                            '仅支持 NoSQL'
                        ],
                        answer: 0,
                        explanation: 'PostgreSQL 以其对 SQL 标准的严格遵循、可扩展性和对复杂数据类型（如 JSON、数组）的支持而闻名。'
                    },
                    {
                        question: 'PostgreSQL 中用于创建新表的 SQL 语句是？',
                        options: ['CREATE TABLE', 'NEW TABLE', 'MAKE TABLE', 'ADD TABLE'],
                        answer: 0,
                        explanation: '与其他关系型数据库一样，`CREATE TABLE` 用于在 PostgreSQL 中创建新表。'
                    },
                    {
                        question: 'PostgreSQL 支持以下哪种数据类型？',
                        options: ['JSONB', '数组类型', '几何类型', '以上都是'],
                        answer: 3,
                        explanation: 'PostgreSQL 以丰富的数据类型支持著称，包括 JSONB、数组、hstore 和各种几何类型。'
                    },
                    {
                        question: 'PostgreSQL 中，用于备份数据库的命令行工具是？',
                        options: ['pg_dump', 'mysqldump', 'backupdb', 'psql_backup'],
                        answer: 0,
                        explanation: '`pg_dump` 是 PostgreSQL 提供的用于备份数据库的实用工具。'
                    },
                    {
                        question: 'PostgreSQL 的默认端口号是？',
                        options: ['5432', '3306', '27017', '6379'],
                        answer: 0,
                        explanation: 'PostgreSQL 的默认监听端口是 5432，而 MySQL 是 3306，MongoDB 是 27017，Redis 是 6379。'
                    },
                    // ---- MongoDB ----
                    {
                        question: 'MongoDB 属于哪种类型的数据库？',
                        options: [
                            '文档型 NoSQL 数据库',
                            '关系型数据库',
                            '键值对数据库',
                            '列族数据库'
                        ],
                        answer: 0,
                        explanation: 'MongoDB 是一个基于分布式文件存储的文档型 NoSQL 数据库。'
                    },
                    {
                        question: '在 MongoDB 中，数据的基本单位是什么？',
                        options: ['文档 (Document)', '表 (Table)', '行 (Row)', '记录 (Record)'],
                        answer: 0,
                        explanation: 'MongoDB 使用 BSON 格式的文档（类似于 JSON 对象）作为数据的基本单位。'
                    },
                    {
                        question: 'MongoDB 中，一组文档的集合称为什么？',
                        options: ['集合 (Collection)', '表 (Table)', '数据库 (Database)', '文档集 (Document Set)'],
                        answer: 0,
                        explanation: '在 MongoDB 中，多个文档组成一个集合（Collection），类似于关系型数据库中的表。'
                    },
                    {
                        question: 'MongoDB 中用于插入单个文档的方法是？',
                        options: ['insertOne()', 'insert()', 'addOne()', 'save()'],
                        answer: 0,
                        explanation: '`insertOne()` 是 MongoDB 中用于向集合插入单个文档的方法。'
                    },
                    {
                        question: 'MongoDB 中，用于查询文档的方法是？',
                        options: ['find()', 'query()', 'select()', 'search()'],
                        answer: 0,
                        explanation: '`find()` 方法是 MongoDB 中用于查询集合中文档的主要方法。'
                    },
                    // ---- SQL 高级概念 ----
                    {
                        question: 'SQL 中的主键（Primary Key）必须满足什么条件？',
                        options: [
                            '唯一且非空',
                            '必须为整数类型',
                            '必须自增',
                            '可以为空'
                        ],
                        answer: 0,
                        explanation: '主键必须包含唯一的值，且不能包含 NULL 值。'
                    },
                    {
                        question: '外键（Foreign Key）的作用是什么？',
                        options: [
                            '在两个表之间建立链接，确保数据完整性',
                            '作为表的唯一标识',
                            '加速查询速度',
                            '加密敏感数据'
                        ],
                        answer: 0,
                        explanation: '外键是一个表中的字段，它指向另一个表中的主键，用于确保数据的参照完整性。'
                    },
                    {
                        question: 'SQL 中的索引（Index）的主要作用是什么？',
                        options: [
                            '加速数据检索速度',
                            '占用更少磁盘空间',
                            '保证数据唯一性',
                            '加密数据'
                        ],
                        answer: 0,
                        explanation: '索引是对数据库表中一列或多列的值进行排序的数据结构，可以大大提高查询速度。'
                    },
                    {
                        question: '以下哪个 SQL 语句用于创建索引？',
                        options: ['CREATE INDEX', 'ADD INDEX', 'MAKE INDEX', 'NEW INDEX'],
                        answer: 0,
                        explanation: '使用 `CREATE INDEX` 语句可以在表上创建索引。'
                    },
                    {
                        question: '事务的 ACID 属性中的 "A" 代表什么？',
                        options: ['原子性 (Atomicity)', '一致性 (Consistency)', '隔离性 (Isolation)', '持久性 (Durability)'],
                        answer: 0,
                        explanation: '原子性（Atomicity）指事务是一个不可分割的工作单位，事务中的操作要么都执行，要么都不执行。'
                    },
                    // ---- 数据库设计 ----
                    {
                        question: '数据库设计中的规范化（Normalization）主要目的是什么？',
                        options: [
                            '减少数据冗余，避免更新异常',
                            '增加查询速度',
                            '增加数据冗余以提高可靠性',
                            '简化表结构'
                        ],
                        answer: 0,
                        explanation: '规范化是通过将数据拆分到多个相关表来减少数据冗余和依赖，从而避免插入、更新和删除异常。'
                    },
                    {
                        question: '第三范式（3NF）的要求是什么？',
                        options: [
                            '在满足第二范式的基础上，消除传递依赖',
                            '所有属性都不可再分',
                            '消除部分依赖',
                            '所有列都依赖于主键'
                        ],
                        answer: 0,
                        explanation: '第三范式要求在满足第二范式的基础上，消除非主属性对主键的传递依赖。'
                    },
                    {
                        question: '以下哪种关系是“多对多”关系在数据库中的实现方式？',
                        options: [
                            '通过中间表（连接表）实现',
                            '在一个表中添加多个外键',
                            '在一个表中存储重复数据',
                            '无法实现'
                        ],
                        answer: 0,
                        explanation: '多对多关系通常通过创建一个中间表（连接表）来实现，该表包含两个表的外键。'
                    },
                    // ---- NoSQL 对比 ----
                    {
                        question: '相比关系型数据库，NoSQL 数据库的优势通常是什么？',
                        options: [
                            '水平扩展能力强，灵活的数据模型',
                            '严格的数据一致性',
                            '支持复杂的事务',
                            '使用 SQL 查询'
                        ],
                        answer: 0,
                        explanation: 'NoSQL 数据库通常设计为易于水平扩展，并具有更灵活的数据模型，适合处理大规模数据。'
                    },
                    {
                        question: '以下哪个不是 NoSQL 数据库的类型？',
                        options: ['关系型', '键值型', '文档型', '列族型'],
                        answer: 0,
                        explanation: '关系型数据库是 SQL 数据库，不属于 NoSQL 范畴。NoSQL 主要包括键值型、文档型、列族型和图数据库。'
                    },
                    {
                        question: 'CAP 定理中的 "C" 代表什么？',
                        options: ['一致性 (Consistency)', '可用性 (Availability)', '分区容错性 (Partition Tolerance)', '完整性 (Completeness)'],
                        answer: 0,
                        explanation: 'CAP 定理指出，分布式系统只能同时满足一致性（Consistency）、可用性（Availability）和分区容错性（Partition Tolerance）中的两个。'
                    },
                    {
                        question: '在 MongoDB 中，什么是 “Sharding”？',
                        options: [
                            '将数据分布到多个服务器上的水平分区技术',
                            '数据备份',
                            '数据加密',
                            '数据压缩'
                        ],
                        answer: 0,
                        explanation: 'Sharding（分片）是一种将数据水平分割并分布到多个机器上的数据库架构模式，用于支持大数据量和高吞吐量。'
                    },
                    {
                        question: 'Redis 属于哪种类型的数据库？',
                        options: [
                            '键值存储（Key-Value Store）',
                            '文档型数据库',
                            '列族数据库',
                            '图数据库'
                        ],
                        answer: 0,
                        explanation: 'Redis 是一个开源的内存数据结构存储系统，通常被归类为键值（Key-Value）数据库。'
                    }
                ],
                resources: [
                    { name: 'MySQL官方文档', url: 'https://dev.mysql.com/doc/', type: 'docs' },
                    { name: 'PostgreSQL中文文档', url: 'http://www.postgres.cn/docs/', type: 'docs' },
                    { name: 'MongoDB官方文档', url: 'https://www.mongodb.com/docs/', type: 'docs' },
                    { name: '菜鸟教程 - SQL', url: 'https://www.runoob.com/sql/sql-tutorial.html', type: 'tutorial' }
                ]
            },
            {
                id: 'redis',
                name: 'Redis',
                icon: '🔴',
                description: '缓存设计与高频数据读写优化',
                priority: 'important',
                quizs: [
                    // ---- Redis 基础概念 ----
                    {
                        question: 'Redis 是什么类型的数据库？',
                        options: [
                            '内存中的数据结构存储系统（键值存储）',
                            '关系型数据库',
                            '文档型数据库',
                            '图数据库'
                        ],
                        answer: 0,
                        explanation: 'Redis 是一个开源的内存数据结构存储系统，常用作数据库、缓存和消息代理。'
                    },
                    {
                        question: 'Redis 的全称是什么？',
                        options: [
                            'Remote Dictionary Server',
                            'Redundant Data Server',
                            'Real-time Data Service',
                            'Remote Data Store'
                        ],
                        answer: 0,
                        explanation: 'Redis 的全称是 Remote Dictionary Server（远程字典服务器）。'
                    },
                    {
                        question: 'Redis 默认的端口号是多少？',
                        options: ['6379', '3306', '27017', '5432'],
                        answer: 0,
                        explanation: 'Redis 的默认端口号是 6379，MySQL 是 3306，MongoDB 是 27017，PostgreSQL 是 5432。'
                    },
                    {
                        question: '以下哪个命令用于启动 Redis 服务器？',
                        options: ['redis-server', 'redis-start', 'redis-run', 'redis-cli'],
                        answer: 0,
                        explanation: '`redis-server` 是启动 Redis 服务器的命令。'
                    },
                    {
                        question: '用于连接 Redis 服务器的客户端命令行工具是？',
                        options: ['redis-cli', 'redis-client', 'redis-shell', 'redis-console'],
                        answer: 0,
                        explanation: '`redis-cli` 是 Redis 提供的命令行界面工具，用于与 Redis 服务器交互。'
                    },
                    // ---- 数据类型 ----
                    {
                        question: 'Redis 中，用于存储字符串数据的基本数据类型是？',
                        options: ['String', 'Hash', 'List', 'Set'],
                        answer: 0,
                        explanation: 'String 是 Redis 中最基本的数据类型，可以存储任何形式的字符串。'
                    },
                    {
                        question: 'Redis 中，哪种数据类型适合存储对象（如用户信息）？',
                        options: ['Hash', 'String', 'List', 'Set'],
                        answer: 0,
                        explanation: 'Hash 是一个键值对集合，适合存储对象，因为可以方便地存取对象的单个字段。'
                    },
                    {
                        question: 'Redis 中，用于存储有序集合的数据类型是？',
                        options: ['Sorted Set (ZSet)', 'Set', 'List', 'Hash'],
                        answer: 0,
                        explanation: 'Sorted Set 是有序集合，每个元素都会关联一个分数，集合按分数排序。'
                    },
                    {
                        question: '以下哪个 Redis 数据类型是简单的字符串列表，按照插入顺序排序？',
                        options: ['List', 'Set', 'Hash', 'ZSet'],
                        answer: 0,
                        explanation: 'List 是一个链表结构，可以执行从两端推入或弹出元素的操作。'
                    },
                    {
                        question: 'Redis 中，用于存储不重复元素的无序集合是？',
                        options: ['Set', 'List', 'Hash', 'ZSet'],
                        answer: 0,
                        explanation: 'Set 是无序的字符串集合，集合中的元素是唯一的，不能重复。'
                    },
                    // ---- 常用命令 ----
                    {
                        question: '用于设置键 "name" 的值为 "Redis" 的命令是？',
                        options: ['SET name Redis', 'GET name Redis', 'PUT name Redis', 'STORE name Redis'],
                        answer: 0,
                        explanation: '`SET` 命令用于设置指定键的值。'
                    },
                    {
                        question: '用于获取键 "name" 的值的命令是？',
                        options: ['GET name', 'FETCH name', 'SELECT name', 'RETRIEVE name'],
                        answer: 0,
                        explanation: '`GET` 命令用于获取指定键的值。'
                    },
                    {
                        question: '检查键 "user:100" 是否存在的命令是？',
                        options: ['EXISTS user:100', 'HAS user:100', 'CHECK user:100', 'ISEXIST user:100'],
                        answer: 0,
                        explanation: '`EXISTS` 命令用于检查指定的键是否存在。'
                    },
                    {
                        question: '设置键 "key" 的过期时间为 60 秒的命令是？',
                        options: ['EXPIRE key 60', 'TTL key 60', 'SETEX key 60', 'EXPIREAT key 60'],
                        answer: 0,
                        explanation: '`EXPIRE` 命令用于为键设置生存时间（秒），到期后键会自动删除。'
                    },
                    {
                        question: '查看键 "key" 剩余生存时间的命令是？',
                        options: ['TTL key', 'PTTL key', 'TIME key', 'LIFE key'],
                        answer: 0,
                        explanation: '`TTL` 命令以秒为单位返回键的剩余生存时间。'
                    },
                    // ---- 哈希操作 ----
                    {
                        question: '在 Hash 类型中，用于设置字段的命令是？',
                        options: ['HSET', 'HGET', 'HMSET', 'HSETNX'],
                        answer: 0,
                        explanation: '`HSET` 命令用于设置哈希表中指定字段的值。'
                    },
                    {
                        question: '用于获取 Hash 中所有字段和值的命令是？',
                        options: ['HGETALL', 'HGET', 'HVALS', 'HKEYS'],
                        answer: 0,
                        explanation: '`HGETALL` 命令返回哈希表中所有的字段和值。'
                    },
                    {
                        question: '用于删除 Hash 中一个或多个字段的命令是？',
                        options: ['HDEL', 'HREMOVE', 'HUNLINK', 'HDELETE'],
                        answer: 0,
                        explanation: '`HDEL` 命令用于删除哈希表中的一个或多个指定字段。'
                    },
                    {
                        question: '以下哪个命令用于获取 Hash 中所有字段的名字？',
                        options: ['HKEYS', 'HVALS', 'HGETALL', 'HLEN'],
                        answer: 0,
                        explanation: '`HKEYS` 命令返回哈希表中所有字段的名称。'
                    },
                    {
                        question: '获取 Hash 中字段数量的命令是？',
                        options: ['HLEN', 'HSIZE', 'HCOUNT', 'HLENGTH'],
                        answer: 0,
                        explanation: '`HLEN` 命令返回哈希表中字段的数量。'
                    },
                    // ---- 列表操作 ----
                    {
                        question: '向列表 "mylist" 左侧推入元素 "a" 的命令是？',
                        options: ['LPUSH mylist a', 'RPUSH mylist a', 'PUSH mylist a', 'LADD mylist a'],
                        answer: 0,
                        explanation: '`LPUSH` 命令将一个或多个值插入到列表头部（左侧）。'
                    },
                    {
                        question: '从列表右侧弹出一个元素的命令是？',
                        options: ['RPOP', 'LPOP', 'POP', 'REMOVE'],
                        answer: 0,
                        explanation: '`RPOP` 命令移除并返回列表的最后一个元素（右侧）。'
                    },
                    {
                        question: '获取列表指定范围的元素，使用哪个命令？',
                        options: ['LRANGE', 'LGET', 'LRANGE', 'LINDEX'],
                        answer: 0,
                        explanation: '`LRANGE` 命令返回列表中指定区间内的元素。'
                    },
                    {
                        question: '获取列表长度的命令是？',
                        options: ['LLEN', 'LENGTH', 'LSIZE', 'LCOUNT'],
                        answer: 0,
                        explanation: '`LLEN` 命令返回列表的长度。'
                    },
                    {
                        question: '通过索引获取列表中的元素，使用哪个命令？',
                        options: ['LINDEX', 'LGET', 'LRANGE', 'LPOS'],
                        answer: 0,
                        explanation: '`LINDEX` 命令通过索引获取列表中的元素。'
                    },
                    // ---- 集合操作 ----
                    {
                        question: '向集合添加一个或多个成员的命令是？',
                        options: ['SADD', 'SETADD', 'ADDTO', 'SINSERT'],
                        answer: 0,
                        explanation: '`SADD` 命令用于向集合中添加一个或多个成员。'
                    },
                    {
                        question: '获取集合中所有成员的命令是？',
                        options: ['SMEMBERS', 'SGETALL', 'SLIST', 'SALL'],
                        answer: 0,
                        explanation: '`SMEMBERS` 命令返回集合中的所有成员。'
                    },
                    {
                        question: '判断元素是否为集合的成员的命令是？',
                        options: ['SISMEMBER', 'SIN', 'SCONTAINS', 'SCHECK'],
                        answer: 0,
                        explanation: '`SISMEMBER` 命令判断指定元素是否存在于集合中。'
                    },
                    {
                        question: '返回多个集合的交集的命令是？',
                        options: ['SINTER', 'SUNION', 'SDIFF', 'SINTERSECT'],
                        answer: 0,
                        explanation: '`SINTER` 命令返回多个集合的交集。'
                    },
                    {
                        question: '从集合中移除一个或多个成员的命令是？',
                        options: ['SREM', 'SDEL', 'SREMOVE', 'SPOP'],
                        answer: 0,
                        explanation: '`SREM` 命令用于从集合中移除一个或多个成员。'
                    },
                    // ---- 有序集合操作 ----
                    {
                        question: '向有序集合添加一个成员及其分数的命令是？',
                        options: ['ZADD', 'ZSADD', 'ZINSERT', 'ZPUSH'],
                        answer: 0,
                        explanation: '`ZADD` 命令用于向有序集合添加一个或多个成员，或更新其分数。'
                    },
                    {
                        question: '按分数从小到大返回有序集合指定范围的成员，使用哪个命令？',
                        options: ['ZRANGE', 'ZREVRANGE', 'ZRANGEBYSCORE', 'ZSCORE'],
                        answer: 0,
                        explanation: '`ZRANGE` 命令按索引范围返回有序集合的成员（分数从小到大）。'
                    },
                    {
                        question: '获取有序集合中成员的分数，使用哪个命令？',
                        options: ['ZSCORE', 'ZGET', 'ZRANK', 'ZSCORE'],
                        answer: 0,
                        explanation: '`ZSCORE` 命令返回有序集合中指定成员的分数值。'
                    },
                    {
                        question: '获取有序集合的成员数量，使用哪个命令？',
                        options: ['ZCARD', 'ZLEN', 'ZCOUNT', 'ZSIZE'],
                        answer: 0,
                        explanation: '`ZCARD` 命令返回有序集合的成员数量。'
                    },
                    {
                        question: '获取有序集合中成员的排名（从小到大），使用哪个命令？',
                        options: ['ZRANK', 'ZREVRANK', 'ZPOS', 'ZINDEX'],
                        answer: 0,
                        explanation: '`ZRANK` 命令返回有序集合中指定成员的排名（从0开始，分数从小到大）。'
                    },
                    // ---- 发布订阅与事务 ----
                    {
                        question: 'Redis 中用于发布消息到频道的命令是？',
                        options: ['PUBLISH', 'SUBSCRIBE', 'SEND', 'BROADCAST'],
                        answer: 0,
                        explanation: '`PUBLISH` 命令用于将信息发布到指定的频道。'
                    },
                    {
                        question: 'Redis 中用于订阅一个或多个频道的命令是？',
                        options: ['SUBSCRIBE', 'PUBLISH', 'LISTEN', 'WATCH'],
                        answer: 0,
                        explanation: '`SUBSCRIBE` 命令用于订阅一个或多个频道，等待接收消息。'
                    },
                    {
                        question: 'Redis 事务通过什么命令开始？',
                        options: ['MULTI', 'BEGIN', 'START', 'TRANSACTION'],
                        answer: 0,
                        explanation: '`MULTI` 命令标记一个事务块的开始，后续命令会放入队列中。'
                    },
                    {
                        question: '执行 Redis 事务队列中所有命令的命令是？',
                        options: ['EXEC', 'COMMIT', 'DO', 'RUN'],
                        answer: 0,
                        explanation: '`EXEC` 命令执行所有在 `MULTI` 之后排队的命令。'
                    },
                    {
                        question: '用于监视一个或多个键，以便在事务中实现乐观锁的命令是？',
                        options: ['WATCH', 'MONITOR', 'LOCK', 'OBSERVE'],
                        answer: 0,
                        explanation: '`WATCH` 命令用于在事务开始前监视键，如果事务执行前键被修改，事务将被打断。'
                    },
                    // ---- 持久化与配置 ----
                    {
                        question: 'Redis 的 RDB 持久化方式是什么？',
                        options: [
                            '生成数据集的快照（snapshot）',
                            '记录每次写操作的日志',
                            '实时复制到从节点',
                            '内存映射文件'
                        ],
                        answer: 0,
                        explanation: 'RDB（Redis Database）持久化是通过创建数据集的快照（时间点）来实现的。'
                    },
                    {
                        question: 'Redis 的 AOF 持久化方式是什么？',
                        options: [
                            '记录服务器接收到的每个写操作',
                            '生成二进制快照',
                            '定期保存内存数据',
                            '复制到磁盘'
                        ],
                        answer: 0,
                        explanation: 'AOF（Append Only File）持久化记录服务器接收到的每个写操作命令，重启时重放这些命令来恢复数据。'
                    },
                    {
                        question: '用于强制 Redis 进行 RDB 快照的命令是？',
                        options: ['SAVE 或 BGSAVE', 'SNAPSHOT', 'DUMP', 'BACKUP'],
                        answer: 0,
                        explanation: '`SAVE` 同步保存，`BGSAVE` 后台异步保存，都用于创建 RDB 快照。'
                    },
                    {
                        question: 'Redis 配置文件的通常名称是什么？',
                        options: ['redis.conf', 'redis.config', 'config.redis', 'redis.cfg'],
                        answer: 0,
                        explanation: 'Redis 服务器默认的配置文件名为 `redis.conf`。'
                    },
                    {
                        question: 'Redis 中，用于选择不同数据库的命令是？',
                        options: ['SELECT index', 'USE index', 'SWITCH index', 'DB index'],
                        answer: 0,
                        explanation: 'Redis 默认有16个数据库（0-15），使用 `SELECT` 命令可以切换到不同的数据库。'
                    }
                ],
                resources: [
                    { name: 'Redis官方文档', url: 'https://redis.io/docs/', type: 'docs' },
                    { name: 'Redis中文网', url: 'https://www.redis.net.cn/', type: 'tutorial' },
                    { name: 'Redis入门教程', url: 'https://www.runoob.com/redis/redis-tutorial.html', type: 'tutorial' },
                    { name: 'bilibili - Redis教程', url: 'https://www.bilibili.com/video/BV1S54y1R7SB', type: 'video' }
                ]
            },
            {
                id: 'api_design',
                name: 'API设计',
                icon: '📡',
                description: 'RESTful / GraphQL 接口建模与规范',
                priority: 'core',
                quizs: [
                    // ---- RESTful 基础 ----
                    {
                        question: 'REST 是什么的缩写？',
                        options: [
                            'REpresentational State Transfer',
                            'Remote State Transfer',
                            'Resource State Transfer',
                            'REpresentational Service Transfer'
                        ],
                        answer: 0,
                        explanation: 'REST 是 REpresentational State Transfer（表现层状态转移）的缩写，是一种软件架构风格。'
                    },
                    {
                        question: 'RESTful API 的核心资源通过什么来标识？',
                        options: ['URI (统一资源标识符)', '请求体', 'HTTP 方法', '响应状态码'],
                        answer: 0,
                        explanation: '在 RESTful API 中，每个资源都由一个唯一的 URI 来标识。'
                    },
                    {
                        question: '在 RESTful API 中，用于获取资源的 HTTP 方法通常是？',
                        options: ['GET', 'POST', 'PUT', 'DELETE'],
                        answer: 0,
                        explanation: '`GET` 方法用于请求服务器发送指定的资源。'
                    },
                    {
                        question: '用于创建新资源的 HTTP 方法是？',
                        options: ['POST', 'GET', 'PUT', 'PATCH'],
                        answer: 0,
                        explanation: '`POST` 方法通常用于向指定资源提交数据，以创建新资源或触发操作。'
                    },
                    {
                        question: '用于更新整个资源的 HTTP 方法是？',
                        options: ['PUT', 'POST', 'PATCH', 'UPDATE'],
                        answer: 0,
                        explanation: '`PUT` 方法用于将请求负载完整地替换目标资源。'
                    },
                    {
                        question: '用于部分更新资源的 HTTP 方法是？',
                        options: ['PATCH', 'PUT', 'POST', 'UPDATE'],
                        answer: 0,
                        explanation: '`PATCH` 方法用于对资源进行部分修改。'
                    },
                    {
                        question: '用于删除资源的 HTTP 方法是？',
                        options: ['DELETE', 'REMOVE', 'DEL', 'DESTROY'],
                        answer: 0,
                        explanation: '`DELETE` 方法用于请求服务器删除指定的资源。'
                    },
                    // ---- RESTful 设计原则 ----
                    {
                        question: '一个设计良好的 RESTful API 获取用户 123 的信息，URI 应该是什么？',
                        options: ['/users/123', '/getUser?id=123', '/user.php?uid=123', '/users/get/123'],
                        answer: 0,
                        explanation: 'RESTful 设计提倡使用名词复数表示资源集合，用路径参数标识具体资源。'
                    },
                    {
                        question: '在 RESTful API 中，对 `/users` 使用 `GET` 方法通常表示什么？',
                        options: ['获取用户列表', '创建新用户', '删除所有用户', '更新用户列表'],
                        answer: 0,
                        explanation: '对资源集合使用 `GET` 方法，通常表示获取该资源的列表。'
                    },
                    {
                        question: '在 RESTful API 中，对 `/users` 使用 `POST` 方法通常表示什么？',
                        options: ['创建新用户', '获取用户列表', '更新所有用户', '删除所有用户'],
                        answer: 0,
                        explanation: '对资源集合使用 `POST` 方法，通常表示在集合中创建新资源。'
                    },
                    {
                        question: 'RESTful API 设计鼓励使用哪种格式来表示资源？',
                        options: ['JSON', 'XML', '纯文本', '二进制'],
                        answer: 0,
                        explanation: '虽然 REST 不强制，但 JSON 因其简洁性和易读性成为现代 RESTful API 的事实标准。'
                    },
                    {
                        question: '以下哪个 HTTP 状态码表示请求成功？',
                        options: ['200', '404', '500', '400'],
                        answer: 0,
                        explanation: '200 OK 是最常见的成功状态码。'
                    },
                    {
                        question: 'HTTP 状态码 404 表示什么？',
                        options: ['资源未找到', '请求成功', '服务器错误', '未授权'],
                        answer: 0,
                        explanation: '404 Not Found 表示服务器无法找到请求的资源。'
                    },
                    {
                        question: 'HTTP 状态码 201 通常用于什么场景？',
                        options: ['资源创建成功', '请求成功', '重定向', '错误请求'],
                        answer: 0,
                        explanation: '201 Created 通常在对 `POST` 请求的响应中使用，表示新资源已成功创建。'
                    },
                    // ---- API 版本控制 ----
                    {
                        question: 'API 版本控制的常见方法是什么？',
                        options: [
                            '在 URI 中包含版本号，如 /v1/users',
                            '使用不同的域名',
                            '使用不同的端口',
                            '所有方法都可用'
                        ],
                        answer: 0,
                        explanation: '在 URI 中包含版本号（如 /v1/）是最常见和简单的 API 版本控制方法。'
                    },
                    {
                        question: '除了 URI 版本控制，还有什么版本控制方式？',
                        options: [
                            '通过 Accept 头（内容协商）',
                            '通过请求体',
                            '通过 Cookie',
                            '无法其他方式'
                        ],
                        answer: 0,
                        explanation: '可以通过 `Accept` 头或自定义头进行版本控制，例如 `Accept: application/vnd.myapp.v1+json`。'
                    },
                    // ---- 认证与安全 ----
                    {
                        question: '在 API 设计中，用于无状态认证的常见机制是？',
                        options: ['JWT (JSON Web Token)', 'Session Cookie', 'HTTP Basic Auth', 'IP 白名单'],
                        answer: 0,
                        explanation: 'JWT 是一种无状态的、可跨语言使用的认证机制，非常适合 RESTful API。'
                    },
                    {
                        question: 'API 密钥（API Key）通常放在请求的哪个位置？',
                        options: ['请求头 (Header)', '请求体 (Body)', 'URI 路径', 'Cookie'],
                        answer: 0,
                        explanation: 'API Key 通常放在请求头中，例如 `Authorization: Bearer <token>` 或 `X-API-Key: <key>`。'
                    },
                    {
                        question: 'HTTPS 在 API 设计中的重要作用是什么？',
                        options: [
                            '加密传输数据，保证安全',
                            '提高访问速度',
                            '减少服务器负载',
                            '增加 API 可用性'
                        ],
                        answer: 0,
                        explanation: 'HTTPS 通过 SSL/TLS 协议加密客户端和服务器之间的通信，防止中间人攻击。'
                    },
                    {
                        question: 'HTTP 状态码 401 表示什么？',
                        options: ['未授权 (Unauthorized)', '禁止访问 (Forbidden)', '未找到', '请求超时'],
                        answer: 0,
                        explanation: '401 Unauthorized 表示请求未包含有效的身份验证凭据。'
                    },
                    {
                        question: 'HTTP 状态码 403 表示什么？',
                        options: ['禁止访问 (Forbidden)', '未授权', '资源未找到', '请求成功'],
                        answer: 0,
                        explanation: '403 Forbidden 表示服务器理解请求，但拒绝执行，通常因为权限不足。'
                    },
                    // ---- GraphQL ----
                    {
                        question: 'GraphQL 是由哪家公司创建的？',
                        options: ['Facebook', 'Google', 'Microsoft', 'Netflix'],
                        answer: 0,
                        explanation: 'GraphQL 最初由 Facebook 在 2012 年内部开发，并于 2015 年开源。'
                    },
                    {
                        question: 'GraphQL 相比 REST 的主要优势是什么？',
                        options: [
                            '客户端可以精确请求所需字段，避免 over-fetching',
                            '完全取代 REST',
                            '总是比 REST 快',
                            '不需要 HTTP'
                        ],
                        answer: 0,
                        explanation: 'GraphQL 允许客户端精确指定需要的数据结构，减少了数据传输量和多次请求。'
                    },
                    {
                        question: '在 GraphQL 中，用于查询数据的操作类型是？',
                        options: ['Query', 'Mutation', 'Subscription', 'Fetch'],
                        answer: 0,
                        explanation: '`Query` 类型是 GraphQL 中用于读取数据的操作。'
                    },
                    {
                        question: '在 GraphQL 中，用于修改数据的操作类型是？',
                        options: ['Mutation', 'Query', 'Update', 'Modify'],
                        answer: 0,
                        explanation: '`Mutation` 类型用于执行数据的创建、更新或删除操作。'
                    },
                    {
                        question: 'GraphQL 中，用于实时更新的操作类型是？',
                        options: ['Subscription', 'Query', 'Mutation', 'Live'],
                        answer: 0,
                        explanation: '`Subscription` 用于通过 WebSocket 等协议建立长连接，接收实时更新。'
                    },
                    {
                        question: 'GraphQL 的端点通常只有一个，这个端点通常是什么？',
                        options: ['/graphql', '/api', '/query', '/gql'],
                        answer: 0,
                        explanation: '与 REST 多个端点不同，GraphQL 服务通常只暴露一个端点，通常是 `/graphql`。'
                    },
                    // ---- API 文档与工具 ----
                    {
                        question: 'Swagger / OpenAPI 主要用于什么？',
                        options: [
                            'RESTful API 的文档生成和设计',
                            'GraphQL 的查询语言',
                            '数据库管理',
                            '前端开发框架'
                        ],
                        answer: 0,
                        explanation: 'Swagger（现为 OpenAPI 规范）是一个用于描述、生产和消费 RESTful API 的规范。'
                    },
                    {
                        question: 'Postman 是什么工具？',
                        options: [
                            'API 开发和测试工具',
                            '数据库管理工具',
                            '代码编辑器',
                            '版本控制工具'
                        ],
                        answer: 0,
                        explanation: 'Postman 是一个流行的 API 开发工具，用于设计、测试、文档化和监控 API。'
                    },
                    {
                        question: '在 OpenAPI 规范中，用于定义 API 路径的是哪个部分？',
                        options: ['paths', 'components', 'info', 'servers'],
                        answer: 0,
                        explanation: '`paths` 部分是 OpenAPI 规范中用于定义各个 API 端点的核心对象。'
                    },
                    // ---- 最佳实践 ----
                    {
                        question: '在 RESTful API 中，如何处理分页？',
                        options: [
                            '使用 limit 和 offset 查询参数',
                            '使用 POST 请求体',
                            '使用 Cookie',
                            '无法分页'
                        ],
                        answer: 0,
                        explanation: '常见的分页方法包括使用 `limit` 和 `offset` 参数，或使用 `page` 和 `per_page` 参数。'
                    },
                    {
                        question: 'API 设计中，用于限制客户端请求频率的技术叫什么？',
                        options: ['速率限制 (Rate Limiting)', '负载均衡', '缓存', '压缩'],
                        answer: 0,
                        explanation: '速率限制用于控制客户端在一定时间内可以发出的请求数量，防止滥用。'
                    },
                    {
                        question: 'API 响应中，用于指示速率限制状态的 HTTP 头通常包括？',
                        options: [
                            'X-RateLimit-Limit, X-RateLimit-Remaining',
                            'Content-Type',
                            'Authorization',
                            'Cache-Control'
                        ],
                        answer: 0,
                        explanation: '常见的速率限制头包括 `X-RateLimit-Limit`（总限额）和 `X-RateLimit-Remaining`（剩余请求数）。'
                    },
                    {
                        question: '在 RESTful API 中，如何过滤资源集合？',
                        options: [
                            '使用查询参数，如 /users?role=admin',
                            '使用不同的 URI',
                            '使用 POST 请求体',
                            '无法过滤'
                        ],
                        answer: 0,
                        explanation: '通常通过查询参数来实现过滤，例如 `?status=active&city=beijing`。'
                    },
                    {
                        question: 'RESTful API 中，如何表示资源的关联关系？',
                        options: [
                            '通过嵌套资源，如 /users/123/orders',
                            '使用同一个 URI',
                            '在请求体中指定',
                            '无法表示'
                        ],
                        answer: 0,
                        explanation: '关联资源通常通过嵌套的 URI 路径来表示，如 `/users/123/orders` 表示用户 123 的订单。'
                    },
                    {
                        question: '以下哪个不是 API 设计中的常见错误处理方式？',
                        options: [
                            '总是返回 200 状态码，在响应体中包含错误信息',
                            '使用合适的 HTTP 状态码',
                            '提供详细的错误信息',
                            '遵循一致的错误响应格式'
                        ],
                        answer: 0,
                        explanation: '好的 API 设计应该使用合适的 HTTP 状态码（如 400、404、500）来表示错误，而不是所有请求都返回 200。'
                    },
                    {
                        question: '幂等性（Idempotency）在 HTTP 方法中是什么意思？',
                        options: [
                            '多次执行相同的请求，产生的副作用与执行一次相同',
                            '请求只能执行一次',
                            '请求不需要认证',
                            '请求必须加密'
                        ],
                        answer: 0,
                        explanation: '幂等性指无论调用多少次，结果都是一样的。`GET`、`PUT`、`DELETE` 方法是幂等的。'
                    }
                ],
                resources: [
                    { name: 'RESTful API设计指南', url: 'https://restfulapi.net/', type: 'tutorial' },
                    { name: 'GraphQL官方文档', url: 'https://graphql.cn/learn/', type: 'docs' },
                    { name: 'Swagger文档', url: 'https://swagger.io/docs/', type: 'docs' },
                    { name: 'API设计最佳实践', url: 'https://juejin.cn/post/6844903690368843789', type: 'article' }
                ]
            },
            {
                id: 'spring',
                name: 'Spring',
                icon: '🍃',
                description: 'Java 后端主流框架与工程实践',
                priority: 'important',
                quizs: [
                    // ---- Spring 基础 ----
                    {
                        question: 'Spring 框架的核心是什么？',
                        options: [
                            '控制反转 (IoC) 和面向切面编程 (AOP)',
                            'MVC 模式',
                            '数据访问对象 (DAO)',
                            '模板引擎'
                        ],
                        answer: 0,
                        explanation: 'Spring 的核心特性是 IoC（控制反转）容器和 AOP（面向切面编程）支持。'
                    },
                    {
                        question: '控制反转 (IoC) 在 Spring 中的主要作用是什么？',
                        options: [
                            '将对象的创建和依赖关系交给容器管理',
                            '控制程序的执行流程',
                            '反转网络请求方向',
                            '控制数据库事务'
                        ],
                        answer: 0,
                        explanation: 'IoC 将对象的创建、管理和依赖关系的控制权从程序代码转移到容器（如 Spring IoC 容器）。'
                    },
                    {
                        question: '在 Spring 中，用于实现依赖注入的注解是？',
                        options: ['@Autowired', '@Component', '@Bean', '@Resource'],
                        answer: 0,
                        explanation: '`@Autowired` 是 Spring 提供的用于自动装配依赖的注解。'
                    },
                    {
                        question: '以下哪个是 Spring 框架的模块？',
                        options: ['Spring Core', 'Spring MVC', 'Spring Data', '以上都是'],
                        answer: 3,
                        explanation: 'Spring 框架由多个模块组成，包括 Core、Context、MVC、Data Access、AOP 等。'
                    },
                    {
                        question: 'Spring 中，用于将类标记为 Spring 管理的组件的通用注解是？',
                        options: ['@Component', '@Bean', '@Service', '@Repository'],
                        answer: 0,
                        explanation: '`@Component` 是一个通用注解，用于将类标记为 Spring 管理的 Bean。'
                    },
                    // ---- Spring Boot ----
                    {
                        question: 'Spring Boot 的主要目标是什么？',
                        options: [
                            '简化 Spring 应用的初始搭建和开发过程',
                            '替代 Spring 框架',
                            '提供全新的编程模型',
                            '只用于微服务'
                        ],
                        answer: 0,
                        explanation: 'Spring Boot 旨在通过自动配置和起步依赖，简化新 Spring 应用的初始化和开发。'
                    },
                    {
                        question: 'Spring Boot 应用的入口类通常使用哪个注解？',
                        options: ['@SpringBootApplication', '@Configuration', '@EnableAutoConfiguration', '@ComponentScan'],
                        answer: 0,
                        explanation: '`@SpringBootApplication` 是一个组合注解，包含 `@Configuration`、`@EnableAutoConfiguration` 和 `@ComponentScan`。'
                    },
                    {
                        question: 'Spring Boot 中，用于运行应用的主方法通常是什么？',
                        options: [
                            'SpringApplication.run(Application.class, args)',
                            'Application.start()',
                            'BootApplication.launch()',
                            'SpringBoot.run()'
                        ],
                        answer: 0,
                        explanation: '在 main 方法中调用 `SpringApplication.run()` 来启动 Spring Boot 应用。'
                    },
                    {
                        question: 'Spring Boot 的配置文件默认名称是什么？',
                        options: ['application.properties 或 application.yml', 'spring.config', 'bootstrap.properties', 'app.properties'],
                        answer: 0,
                        explanation: 'Spring Boot 默认读取 `application.properties` 或 `application.yml` 文件。'
                    },
                    {
                        question: 'Spring Boot 中，用于修改内嵌服务器端口的配置项是？',
                        options: ['server.port', 'port.server', 'http.port', 'application.port'],
                        answer: 0,
                        explanation: '在 `application.properties` 中使用 `server.port=8081` 来修改端口。'
                    },
                    // ---- Spring MVC ----
                    {
                        question: '在 Spring MVC 中，用于标记控制器类的注解是？',
                        options: ['@Controller', '@RestController', '@RequestMapping', 'A 和 B'],
                        answer: 3,
                        explanation: '`@Controller` 用于传统 MVC 控制器，`@RestController` 是 `@Controller` 和 `@ResponseBody` 的组合，用于 REST API。'
                    },
                    {
                        question: '用于将 HTTP 请求映射到处理器方法的注解是？',
                        options: ['@RequestMapping', '@GetMapping', '@PostMapping', '以上都是'],
                        answer: 3,
                        explanation: '`@RequestMapping` 及其快捷变体（如 `@GetMapping`）用于将请求映射到处理方法。'
                    },
                    {
                        question: '用于从请求路径中获取路径变量的注解是？',
                        options: ['@PathVariable', '@RequestParam', '@RequestBody', '@RequestHeader'],
                        answer: 0,
                        explanation: '`@PathVariable` 用于从 URI 模板中提取值，例如 `/users/{id}` 中的 `id`。'
                    },
                    {
                        question: '用于从 HTTP 请求中获取查询参数的注解是？',
                        options: ['@RequestParam', '@PathVariable', '@RequestBody', '@RequestHeader'],
                        answer: 0,
                        explanation: '`@RequestParam` 用于绑定请求参数（如 `?page=1`）到方法参数。'
                    },
                    {
                        question: '用于将 HTTP 响应体直接返回（而非视图）的注解是？',
                        options: ['@ResponseBody', '@RequestBody', '@RestController', '@ResponseEntity'],
                        answer: 0,
                        explanation: '`@ResponseBody` 告诉 Spring 将方法的返回值直接写入 HTTP 响应体。'
                    },
                    // ---- 依赖注入 ----
                    {
                        question: '除了 `@Autowired`，Java 标准中用于依赖注入的注解是？',
                        options: ['@Resource', '@Inject', '@Named', '以上都是'],
                        answer: 3,
                        explanation: 'Java 标准（JSR-330）提供了 `@Inject` 和 `@Named`，JSR-250 提供了 `@Resource`，Spring 都支持。'
                    },
                    {
                        question: '`@Qualifier` 注解的作用是什么？',
                        options: [
                            '当有多个相同类型的 Bean 时，指定注入哪一个',
                            '限定 Bean 的作用域',
                            '标记 Bean 为可选的',
                            '指定 Bean 的名称'
                        ],
                        answer: 0,
                        explanation: '`@Qualifier` 常与 `@Autowired` 一起使用，通过指定 Bean 名称来解决歧义。'
                    },
                    {
                        question: 'Spring Bean 的默认作用域是什么？',
                        options: ['singleton', 'prototype', 'request', 'session'],
                        answer: 0,
                        explanation: 'Spring Bean 的默认作用域是单例（singleton），即每个 IoC 容器中只有一个实例。'
                    },
                    {
                        question: '用于创建自定义 Bean 的方法级注解是？',
                        options: ['@Bean', '@Component', '@Service', '@Repository'],
                        answer: 0,
                        explanation: '`@Bean` 注解用于方法，告诉 Spring 该方法返回的对象应该被注册为 IoC 容器中的 Bean。'
                    },
                    // ---- 数据访问 ----
                    {
                        question: 'Spring 中，用于简化 JDBC 操作的类是什么？',
                        options: ['JdbcTemplate', 'JdbcDaoSupport', 'SimpleJdbcInsert', 'NamedParameterJdbcTemplate'],
                        answer: 0,
                        explanation: '`JdbcTemplate` 是 Spring 提供的最核心的 JDBC 简化工具类。'
                    },
                    {
                        question: 'Spring Data JPA 的主要作用是什么？',
                        options: [
                            '简化基于 JPA 的数据访问层实现',
                            '替代 Hibernate',
                            '提供 NoSQL 支持',
                            '生成数据库脚本'
                        ],
                        answer: 0,
                        explanation: 'Spring Data JPA 通过提供基于 JPA 的 Repository 抽象，极大简化了数据访问层的开发。'
                    },
                    {
                        question: '在 Spring Data JPA 中，只需定义接口并继承哪个接口即可获得 CRUD 方法？',
                        options: ['JpaRepository', 'CrudRepository', 'PagingAndSortingRepository', '以上都是'],
                        answer: 3,
                        explanation: '继承 `JpaRepository`（它继承自 `PagingAndSortingRepository` 和 `CrudRepository`）可以获得丰富的 CRUD 方法。'
                    },
                    {
                        question: '用于声明式事务管理的注解是？',
                        options: ['@Transactional', '@Transaction', '@Tx', '@TransactionManagement'],
                        answer: 0,
                        explanation: '`@Transactional` 注解可以声明在类或方法上，以声明式的方式管理事务。'
                    },
                    // ---- AOP ----
                    {
                        question: 'AOP 的全称是什么？',
                        options: [
                            'Aspect Oriented Programming',
                            'Advanced Object Programming',
                            'Application Oriented Process',
                            'Abstract Object Protocol'
                        ],
                        answer: 0,
                        explanation: 'AOP 是 Aspect Oriented Programming（面向切面编程）的缩写。'
                    },
                    {
                        question: '在 AOP 中，“切面”（Aspect）是什么？',
                        options: [
                            '关注点的模块化，如事务管理、日志',
                            '程序执行的一个点',
                            '一个通知',
                            '一个切入点'
                        ],
                        answer: 0,
                        explanation: '切面是跨越多个类的关注点的模块化，例如事务管理就是一个典型的切面。'
                    },
                    {
                        question: '在 Spring AOP 中，“通知”（Advice）表示什么？',
                        options: [
                            '切面在特定连接点执行的动作',
                            '被拦截的方法',
                            '切面的名称',
                            '切入点表达式'
                        ],
                        answer: 0,
                        explanation: '通知定义了切面在特定连接点执行的代码，如 `@Before`、`@After`、`@Around` 等。'
                    },
                    {
                        question: '用于定义在方法执行前执行的通知的注解是？',
                        options: ['@Before', '@After', '@AfterReturning', '@Around'],
                        answer: 0,
                        explanation: '`@Before` 通知在连接点（如方法调用）之前执行。'
                    },
                    // ---- Spring Security ----
                    {
                        question: 'Spring Security 的主要功能是什么？',
                        options: [
                            '提供认证和授权等安全服务',
                            '数据加密',
                            '网络防火墙',
                            '防止 SQL 注入'
                        ],
                        answer: 0,
                        explanation: 'Spring Security 是一个功能强大的、高度可定制的认证和访问控制框架。'
                    },
                    {
                        question: 'Spring Security 中，用于保护方法调用的注解是？',
                        options: ['@Secured', '@PreAuthorize', '@RolesAllowed', '以上都是'],
                        answer: 3,
                        explanation: 'Spring Security 支持多种方法级别的安全注解，如 `@Secured`、`@PreAuthorize` 和 JSR-250 的 `@RolesAllowed`。'
                    },
                    {
                        question: '在 Spring Security 中，`UserDetailsService` 接口的作用是什么？',
                        options: [
                            '用于加载用户特定的数据',
                            '处理登录请求',
                            '加密密码',
                            '管理会话'
                        ],
                        answer: 0,
                        explanation: '`UserDetailsService` 是核心接口，用于根据用户名加载用户信息，常用于认证过程。'
                    },
                    // ---- Spring Boot 自动配置 ----
                    {
                        question: 'Spring Boot 的自动配置是如何工作的？',
                        options: [
                            '基于 classpath 中的依赖和属性文件进行条件化配置',
                            '通过硬编码所有配置',
                            '需要手动导入所有配置',
                            '通过 XML 文件配置'
                        ],
                        answer: 0,
                        explanation: 'Spring Boot 的自动配置通过 `@Conditional` 系列注解，根据 classpath 中的类、Bean 和属性等条件来智能配置。'
                    },
                    {
                        question: '用于排除特定自动配置类的注解是？',
                        options: ['@EnableAutoConfiguration(exclude=...)', '@SpringBootApplication(exclude=...)', '@Import(exclude=...)', 'A 和 B'],
                        answer: 3,
                        explanation: '可以在 `@EnableAutoConfiguration` 或 `@SpringBootApplication` 中使用 `exclude` 属性来排除不需要的自动配置类。'
                    },
                    // ---- 测试 ----
                    {
                        question: 'Spring Boot 中用于编写测试的 starter 是？',
                        options: ['spring-boot-starter-test', 'spring-boot-starter-junit', 'spring-test-starter', 'spring-boot-starter-mockito'],
                        answer: 0,
                        explanation: '`spring-boot-starter-test` 包含了 JUnit、Spring Test、Mockito、AssertJ 等测试库。'
                    },
                    {
                        question: '用于创建 Spring Boot 应用切片测试（如只测试 Web 层）的注解是？',
                        options: ['@WebMvcTest', '@DataJpaTest', '@RestClientTest', '以上都是'],
                        answer: 3,
                        explanation: 'Spring Boot 提供了多个切片测试注解，如 `@WebMvcTest`（测试 Web 层）、`@DataJpaTest`（测试 JPA 层）等。'
                    },
                    // ---- 配置属性 ----
                    {
                        question: '用于将配置文件中的属性绑定到 Java Bean 的注解是？',
                        options: ['@ConfigurationProperties', '@Value', '@PropertySource', '@PropertySource'],
                        answer: 0,
                        explanation: '`@ConfigurationProperties` 可以将带有前缀的配置属性批量绑定到一个 Bean 上。'
                    },
                    {
                        question: '用于注入单个配置值的注解是？',
                        options: ['@Value', '@PropertyValue', '@ConfigValue', '@InjectValue'],
                        answer: 0,
                        explanation: '`@Value` 注解可以用于将配置值注入到字段、方法参数等。'
                    }
                ],
                resources: [
                    { name: 'Spring官方文档', url: 'https://spring.io/projects/spring-framework', type: 'docs' },
                    { name: 'Spring Boot中文网', url: 'https://springboot.io/', type: 'tutorial' },
                    { name: '廖雪峰Spring教程', url: 'https://www.liaoxuefeng.com/wiki/1252599548343744/1266263217141952', type: 'tutorial' },
                    { name: 'bilibili - 尚硅谷Spring教程', url: 'https://www.bilibili.com/video/BV1Vf4y127N5', type: 'video' }
                ]
            },
            {
                id: 'docker',
                name: 'Docker',
                icon: '🐳',
                description: '本地开发到部署的容器化基础',
                priority: 'important',
                quizs: [
                    // ---- Docker 基础概念 ----
                    {
                        question: 'Docker 是什么？',
                        options: [
                            '一个开源的容器化平台',
                            '一个虚拟机软件',
                            '一个配置管理工具',
                            '一个编程语言'
                        ],
                        answer: 0,
                        explanation: 'Docker 是一个开源平台，用于开发、交付和运行应用程序，它使用操作系统级虚拟化来打包软件称为容器。'
                    },
                    {
                        question: '容器与虚拟机的核心区别是什么？',
                        options: [
                            '容器共享主机操作系统内核，而虚拟机包含完整操作系统',
                            '容器性能更差',
                            '容器不能运行 Linux 应用',
                            '它们没有区别'
                        ],
                        answer: 0,
                        explanation: '容器在主机操作系统内核上运行，共享内核，更轻量；虚拟机则包含完整的客户操作系统，更重。'
                    },
                    {
                        question: 'Docker 的官方图标是什么动物？',
                        options: ['鲸鱼', '企鹅', '海豚', '章鱼'],
                        answer: 0,
                        explanation: 'Docker 的 logo 是一只背着集装箱的鲸鱼，象征着容器。'
                    },
                    {
                        question: '以下哪个不是 Docker 的核心组件？',
                        options: ['Docker Swarm', 'Docker Client', 'Docker Daemon', 'Docker Image'],
                        answer: 0,
                        explanation: 'Docker 核心组件包括 Client、Daemon、Images、Containers 和 Registries。Swarm 是 Docker 的集群管理工具。'
                    },
                    {
                        question: 'Docker 守护进程（Daemon）的作用是什么？',
                        options: [
                            '管理 Docker 对象（镜像、容器、网络等）',
                            '提供命令行界面',
                            '编译 Dockerfile',
                            '存储镜像'
                        ],
                        answer: 0,
                        explanation: 'Docker 守护进程（dockerd）监听 Docker API 请求，并管理 Docker 对象。'
                    },
                    // ---- 镜像与容器 ----
                    {
                        question: 'Docker 镜像是什么？',
                        options: [
                            '一个只读模板，用于创建容器',
                            '一个运行中的容器',
                            'Docker 的配置文件',
                            '一个网络服务'
                        ],
                        answer: 0,
                        explanation: 'Docker 镜像是一个轻量级、独立、可执行的软件包，包含运行应用程序所需的一切。'
                    },
                    {
                        question: 'Docker 容器是什么？',
                        options: [
                            '镜像的可运行实例',
                            '镜像的只读版本',
                            'Docker 的配置文件',
                            '一个镜像仓库'
                        ],
                        answer: 0,
                        explanation: '容器是镜像的运行时实例，可以被启动、停止、移动和删除。'
                    },
                    {
                        question: '用于列出本地所有 Docker 镜像的命令是？',
                        options: ['docker images', 'docker list images', 'docker show images', 'docker ps'],
                        answer: 0,
                        explanation: '`docker images` 命令列出本地存储的所有镜像。'
                    },
                    {
                        question: '用于列出当前运行中的容器的命令是？',
                        options: ['docker ps', 'docker container list', 'docker show containers', 'docker run'],
                        answer: 0,
                        explanation: '`docker ps` 命令列出正在运行的容器，加 `-a` 参数列出所有容器（包括已停止的）。'
                    },
                    {
                        question: '从 Docker Hub 拉取一个镜像的命令是？',
                        options: ['docker pull', 'docker push', 'docker fetch', 'docker get'],
                        answer: 0,
                        explanation: '`docker pull` 命令从镜像仓库（如 Docker Hub）拉取镜像到本地。'
                    },
                    // ---- 容器生命周期 ----
                    {
                        question: '用于创建并启动一个新容器的命令是？',
                        options: ['docker run', 'docker start', 'docker create', 'docker exec'],
                        answer: 0,
                        explanation: '`docker run` 命令是 `docker create` 和 `docker start` 的组合，用于创建并启动容器。'
                    },
                    {
                        question: '用于停止一个运行中的容器的命令是？',
                        options: ['docker stop', 'docker kill', 'docker pause', 'docker down'],
                        answer: 0,
                        explanation: '`docker stop` 发送 SIGTERM 信号优雅地停止容器。'
                    },
                    {
                        question: '用于强制停止一个容器的命令是？',
                        options: ['docker kill', 'docker stop', 'docker force-stop', 'docker rm'],
                        answer: 0,
                        explanation: '`docker kill` 发送 SIGKILL 信号立即终止容器。'
                    },
                    {
                        question: '用于删除一个已停止的容器的命令是？',
                        options: ['docker rm', 'docker rmi', 'docker delete', 'docker remove'],
                        answer: 0,
                        explanation: '`docker rm` 命令用于删除一个或多个容器。'
                    },
                    {
                        question: '用于删除一个本地镜像的命令是？',
                        options: ['docker rmi', 'docker rm', 'docker image delete', 'docker delete image'],
                        answer: 0,
                        explanation: '`docker rmi` 命令用于删除一个或多个本地镜像。'
                    },
                    // ---- Dockerfile ----
                    {
                        question: 'Dockerfile 是什么？',
                        options: [
                            '一个文本文件，包含构建镜像的指令',
                            '一个二进制文件',
                            '一个配置文件',
                            '一个脚本文件'
                        ],
                        answer: 0,
                        explanation: 'Dockerfile 是一个文本文件，包含了一系列指令，用于自动化构建 Docker 镜像。'
                    },
                    {
                        question: 'Dockerfile 中，用于指定基础镜像的指令是？',
                        options: ['FROM', 'BASE', 'START', 'IMAGE'],
                        answer: 0,
                        explanation: '`FROM` 指令初始化一个新的构建阶段，并设置基础镜像。'
                    },
                    {
                        question: 'Dockerfile 中，用于执行命令并创建新镜像层的指令是？',
                        options: ['RUN', 'CMD', 'ENTRYPOINT', 'EXEC'],
                        answer: 0,
                        explanation: '`RUN` 指令将在当前镜像之上的新层中执行命令，并提交结果。'
                    },
                    {
                        question: '用于将文件或目录从构建上下文复制到镜像中的指令是？',
                        options: ['COPY', 'ADD', 'MOVE', 'PASTE'],
                        answer: 0,
                        explanation: '`COPY` 和 `ADD` 都用于复制文件，`COPY` 更简单，`ADD` 支持更多特性（如 URL 下载、解压）。'
                    },
                    {
                        question: '用于指定容器监听端口的指令是？',
                        options: ['EXPOSE', 'PORT', 'LISTEN', 'PUBLISH'],
                        answer: 0,
                        explanation: '`EXPOSE` 指令通知 Docker 容器在运行时监听指定的网络端口。'
                    },
                    {
                        question: '用于设置环境变量的指令是？',
                        options: ['ENV', 'ARG', 'SET', 'EXPORT'],
                        answer: 0,
                        explanation: '`ENV` 指令设置环境变量，在构建过程和容器运行时都可用。'
                    },
                    {
                        question: '用于指定容器启动时执行的默认命令的指令是？',
                        options: ['CMD', 'ENTRYPOINT', 'RUN', 'START'],
                        answer: 0,
                        explanation: '`CMD` 提供容器启动时的默认命令，可以被 `docker run` 命令行参数覆盖。'
                    },
                    {
                        question: '用于设置容器的工作目录的指令是？',
                        options: ['WORKDIR', 'CD', 'PWD', 'DIR'],
                        answer: 0,
                        explanation: '`WORKDIR` 为后续的 `RUN`、`CMD`、`ENTRYPOINT`、`COPY` 和 `ADD` 指令设置工作目录。'
                    },
                    {
                        question: '基于当前目录的 Dockerfile 构建镜像的命令是？',
                        options: ['docker build -t myimage .', 'docker build myimage', 'docker build . -t myimage', 'A 和 C'],
                        answer: 3,
                        explanation: '`docker build -t 标签名 路径` 是构建镜像的标准格式，`-t` 用于指定镜像名和标签。'
                    },
                    // ---- 数据管理 ----
                    {
                        question: 'Docker 中，用于将主机目录挂载到容器中的选项是？',
                        options: ['-v 或 --volume', '-m', '-d', '--mount'],
                        answer: 0,
                        explanation: '`-v` 或 `--volume` 选项用于将主机的文件或目录挂载到容器中。'
                    },
                    {
                        question: 'Docker 卷（Volume）的主要用途是什么？',
                        options: [
                            '持久化和共享容器数据',
                            '存储镜像',
                            '缓存构建',
                            '网络配置'
                        ],
                        answer: 0,
                        explanation: '卷是 Docker 管理的数据持久化机制，独立于容器的生命周期。'
                    },
                    {
                        question: '创建一个名为 "myvol" 的 Docker 卷的命令是？',
                        options: ['docker volume create myvol', 'docker create volume myvol', 'docker vol create myvol', 'docker new volume myvol'],
                        answer: 0,
                        explanation: '`docker volume create` 命令用于创建新的卷。'
                    },
                    // ---- 网络 ----
                    {
                        question: 'Docker 默认的网络驱动是什么？',
                        options: ['bridge', 'host', 'overlay', 'none'],
                        answer: 0,
                        explanation: '默认情况下，Docker 使用 `bridge` 网络驱动，创建一个虚拟网桥 `docker0`。'
                    },
                    {
                        question: '用于将容器端口映射到主机端口的 `docker run` 选项是？',
                        options: ['-p', '-P', '--port', '--publish'],
                        answer: 0,
                        explanation: '`-p` (小写) 将容器的指定端口映射到主机的指定端口，格式 `主机端口:容器端口`。'
                    },
                    {
                        question: '用于查看 Docker 网络列表的命令是？',
                        options: ['docker network ls', 'docker net list', 'docker network list', 'docker list networks'],
                        answer: 0,
                        explanation: '`docker network ls` 列出当前所有的 Docker 网络。'
                    },
                    // ---- Docker Compose ----
                    {
                        question: 'Docker Compose 主要用于什么场景？',
                        options: [
                            '定义和运行多容器 Docker 应用程序',
                            '管理单个容器',
                            '构建镜像',
                            '监控容器'
                        ],
                        answer: 0,
                        explanation: 'Docker Compose 是一个用于定义和运行多容器 Docker 应用程序的工具，使用 YAML 文件配置。'
                    },
                    {
                        question: 'Docker Compose 使用的默认配置文件名称是？',
                        options: ['docker-compose.yml', 'compose.yml', 'docker-compose.yaml', 'A 和 C'],
                        answer: 3,
                        explanation: '默认的文件名是 `docker-compose.yml` 或 `docker-compose.yaml`。'
                    },
                    {
                        question: '在 docker-compose.yml 中，用于定义服务的顶级键是？',
                        options: ['services', 'containers', 'apps', 'applications'],
                        answer: 0,
                        explanation: '`services` 是 Compose 文件中的顶级配置，用于定义应用程序的各个服务。'
                    },
                    {
                        question: '启动 docker-compose.yml 中定义的所有服务的命令是？',
                        options: ['docker-compose up', 'docker-compose start', 'docker-compose run', 'docker-compose launch'],
                        answer: 0,
                        explanation: '`docker-compose up` 命令构建、（重新）创建、启动并附加到服务的容器。'
                    },
                    {
                        question: '停止并移除 docker-compose 启动的所有容器的命令是？',
                        options: ['docker-compose down', 'docker-compose stop', 'docker-compose rm', 'docker-compose kill'],
                        answer: 0,
                        explanation: '`docker-compose down` 停止容器并移除由 `up` 创建的容器、网络等资源。'
                    },
                    // ---- 仓库与注册表 ----
                    {
                        question: 'Docker Hub 是什么？',
                        options: [
                            'Docker 官方的公共镜像仓库',
                            'Docker 的包管理器',
                            '一个容器运行时',
                            '一个网络管理工具'
                        ],
                        answer: 0,
                        explanation: 'Docker Hub 是 Docker 官方提供的公共注册表，用于存储和分发 Docker 镜像。'
                    },
                    {
                        question: '将本地镜像推送到远程仓库的命令是？',
                        options: ['docker push', 'docker pull', 'docker upload', 'docker send'],
                        answer: 0,
                        explanation: '`docker push` 将本地镜像推送到远程镜像仓库。'
                    },
                    // ---- 最佳实践 ----
                    {
                        question: '为了减小镜像体积，Dockerfile 的最佳实践是什么？',
                        options: [
                            '合并多个 RUN 命令，使用多阶段构建',
                            '使用更多层',
                            '安装所有调试工具',
                            '不使用 .dockerignore'
                        ],
                        answer: 0,
                        explanation: '合并 RUN 命令减少层数，使用多阶段构建丢弃构建依赖，可以有效减小镜像体积。'
                    },
                    {
                        question: '`.dockerignore` 文件的作用是什么？',
                        options: [
                            '指定构建上下文中要排除的文件和目录',
                            '忽略 Docker 容器中的文件',
                            '忽略 Docker 日志',
                            '配置文件权限'
                        ],
                        answer: 0,
                        explanation: '`.dockerignore` 文件用于避免将不必要的文件（如 `.git`、`node_modules`）发送到构建上下文。'
                    },
                    {
                        question: 'Docker 容器通常应该是“无状态”的，这意味着什么？',
                        options: [
                            '容器不存储需要持久化的数据，数据应使用卷管理',
                            '容器不能有任何文件',
                            '容器不能运行应用',
                            '容器不能有网络'
                        ],
                        answer: 0,
                        explanation: '无状态意味着容器本身不保存持久化数据，所有持久化数据都应使用卷或绑定挂载管理，便于替换和扩展。'
                    }
                ],
                resources: [
                    { name: 'Docker官方文档', url: 'https://docs.docker.com/', type: 'docs' },
                    { name: 'Docker入门教程', url: 'https://www.runoob.com/docker/docker-tutorial.html', type: 'tutorial' },
                    { name: 'Docker从入门到实践', url: 'https://vuepress.mirror.docker-practice.com/', type: 'book' },
                    { name: 'bilibili - Docker教程', url: 'https://www.bilibili.com/video/BV1C5411N7Xv', type: 'video' }
                ]
            }
        ]
    },
    {
        id: 'mobile',
        name: '移动开发',
        icon: '📱',
        category: 'mobile',
        description: '面向 iOS、Android 与跨端框架交付移动应用',
        skills: [
            {
                id: 'dart',
                name: 'Dart',
                icon: '🎯',
                description: 'Flutter 核心语言与异步编程基础',
                priority: 'core',
                quizs: [
                    // ---- Dart 基础概念 ----
                    {
                        question: 'Dart 是什么类型的编程语言？',
                        options: [
                            '面向对象、类定义的、可选类型化的编程语言',
                            '纯脚本语言',
                            '函数式编程语言',
                            '汇编语言'
                        ],
                        answer: 0,
                        explanation: 'Dart 是一种由 Google 开发的面向对象、类定义、可选类型化的编程语言，专为客户端开发优化，尤其是与 Flutter 框架结合使用。'
                    },
                    {
                        question: 'Dart 语言的主要应用场景是什么？',
                        options: [
                            'Flutter 跨平台应用开发',
                            '后端服务器开发',
                            '系统级编程',
                            '数据库查询'
                        ],
                        answer: 0,
                        explanation: 'Dart 是 Flutter 框架的官方语言，主要用于构建跨平台的移动、Web 和桌面应用程序。'
                    },
                    {
                        question: 'Dart 程序的入口点是什么？',
                        options: ['main() 函数', 'start() 函数', 'init() 函数', 'run() 函数'],
                        answer: 0,
                        explanation: '与其他许多编程语言类似，Dart 程序的执行从 `main()` 函数开始。'
                    },
                    {
                        question: '以下哪个命令用于创建新的 Dart 项目？',
                        options: ['dart create', 'dart new', 'dart init', 'dart start'],
                        answer: 0,
                        explanation: '`dart create` 命令用于创建一个新的 Dart 项目。'
                    },
                    {
                        question: 'Dart 中，用于打印输出到控制台的函数是？',
                        options: ['print()', 'console.log()', 'echo()', 'println()'],
                        answer: 0,
                        explanation: '`print()` 是 Dart 中用于将内容输出到控制台的标准函数。'
                    },
                    // ---- 变量与数据类型 ----
                    {
                        question: 'Dart 中，用于声明变量的关键字有哪些？',
                        options: ['var, final, const', 'let, const', 'var, let', 'int, string'],
                        answer: 0,
                        explanation: 'Dart 中使用 `var` 声明变量，`final` 声明运行时常量，`const` 声明编译时常量。'
                    },
                    {
                        question: '在 Dart 中，`final` 和 `const` 的主要区别是什么？',
                        options: [
                            'const 变量是编译时常量，final 变量在运行时第一次使用时初始化',
                            'final 是编译时常量，const 是运行时常量',
                            '它们没有区别',
                            'final 只能用于类中，const 可以用于任何地方'
                        ],
                        answer: 0,
                        explanation: '`const` 变量是编译时常量，必须在编译时确定值；`final` 变量在运行时第一次使用时初始化，之后不可变。'
                    },
                    {
                        question: '以下哪个是 Dart 的基本数据类型？',
                        options: ['int', 'double', 'String', '以上都是'],
                        answer: 3,
                        explanation: 'Dart 的基本数据类型包括 `int`（整数）、`double`（浮点数）、`String`（字符串）、`bool`（布尔值）等。'
                    },
                    {
                        question: 'Dart 中，如何检查一个变量的类型？',
                        options: ['使用 is 关键字', '使用 typeof 函数', '使用 getType() 方法', '使用 instanceof'],
                        answer: 0,
                        explanation: 'Dart 中使用 `is` 关键字进行类型检查，例如 `if (obj is String)`。'
                    },
                    {
                        question: 'Dart 中，用于类型转换的关键字是？',
                        options: ['as', 'cast', 'to', 'convert'],
                        answer: 0,
                        explanation: '使用 `as` 关键字进行类型转换（强制转换），例如 `(employee as Person).firstName`。'
                    },
                    // ---- 控制流程 ----
                    {
                        question: 'Dart 中，以下哪个不是循环语句？',
                        options: ['foreach', 'for', 'while', 'do-while'],
                        answer: 0,
                        explanation: 'Dart 支持 `for`、`while` 和 `do-while` 循环，以及用于集合遍历的 `for-in` 循环。'
                    },
                    {
                        question: 'Dart 中，`switch` 语句支持哪些数据类型？',
                        options: ['整数、字符串和枚举类型', '只能整数', '任何类型', '布尔值'],
                        answer: 0,
                        explanation: 'Dart 的 `switch` 语句可以用于整数、字符串和枚举类型的值。'
                    },
                    {
                        question: 'Dart 中，用于异常捕获的语句结构是？',
                        options: ['try-on-catch-finally', 'try-catch-finally', 'try-except-finally', 'try-catch'],
                        answer: 0,
                        explanation: 'Dart 使用 `try-on-catch-finally` 结构来处理异常，`on` 用于指定异常类型。'
                    },
                    // ---- 函数 ----
                    {
                        question: 'Dart 中，如何定义可选参数？',
                        options: [
                            '使用方括号 [] 定义可选位置参数，使用花括号 {} 定义可选命名参数',
                            '使用 ? 标记',
                            '使用 optional 关键字',
                            '不能定义可选参数'
                        ],
                        answer: 0,
                        explanation: 'Dart 支持两种可选参数：用 `[]` 包裹的可选位置参数和用 `{}` 包裹的可选命名参数。'
                    },
                    {
                        question: 'Dart 中，箭头函数（=>）的用途是什么？',
                        options: [
                            '用于定义简洁的单行函数',
                            '用于多行函数',
                            '用于异步操作',
                            '用于类构造函数'
                        ],
                        answer: 0,
                        explanation: '箭头函数 `=>` 是用于定义只包含单个表达式的函数的简写语法。'
                    },
                    {
                        question: 'Dart 中，如何定义匿名函数？',
                        options: [
                            '使用 (参数) { 函数体 } 或 (参数) => 表达式',
                            '使用 function() {}',
                            '使用 lambda() {}',
                            '使用 anon() {}'
                        ],
                        answer: 0,
                        explanation: 'Dart 支持匿名函数（也称为 lambda 或闭包），语法为 `(参数) { 函数体 }`。'
                    },
                    // ---- 面向对象 ----
                    {
                        question: 'Dart 中，用于定义类的关键字是？',
                        options: ['class', 'Class', 'struct', 'type'],
                        answer: 0,
                        explanation: '与其他面向对象语言类似，Dart 使用 `class` 关键字定义类。'
                    },
                    {
                        question: 'Dart 中，构造函数如何定义？',
                        options: [
                            '使用与类同名的函数，或使用 ClassName() 语法',
                            '使用 constructor 关键字',
                            '使用 init() 函数',
                            '使用 new 关键字'
                        ],
                        answer: 0,
                        explanation: 'Dart 的构造函数使用与类同名的函数来定义，也支持命名构造函数，如 `ClassName.named()`。'
                    },
                    {
                        question: 'Dart 中，`this` 关键字的用途是什么？',
                        options: [
                            '引用当前实例',
                            '引用父类',
                            '引用静态成员',
                            '引用全局变量'
                        ],
                        answer: 0,
                        explanation: '`this` 关键字指向当前类的实例，用于区分实例变量和参数。'
                    },
                    {
                        question: 'Dart 中，如何实现类的继承？',
                        options: ['使用 extends 关键字', '使用 implements 关键字', '使用 with 关键字', '使用 inherits 关键字'],
                        answer: 0,
                        explanation: 'Dart 使用 `extends` 关键字实现单继承。'
                    },
                    {
                        question: 'Dart 中，抽象类使用哪个关键字定义？',
                        options: ['abstract', 'interface', 'virtual', 'base'],
                        answer: 0,
                        explanation: '使用 `abstract` 关键字定义抽象类，抽象类不能实例化。'
                    },
                    {
                        question: 'Dart 中，接口如何定义？',
                        options: [
                            '每个类都隐式定义了一个接口，使用 implements 关键字实现',
                            '使用 interface 关键字',
                            '使用 protocol 关键字',
                            'Dart 不支持接口'
                        ],
                        answer: 0,
                        explanation: '在 Dart 中，每个类都隐式定义了一个接口，使用 `implements` 关键字来实现一个或多个接口。'
                    },
                    {
                        question: 'Dart 中，混入（Mixin）使用哪个关键字实现？',
                        options: ['with', 'mixin', 'use', 'include'],
                        answer: 0,
                        explanation: 'Dart 使用 `with` 关键字和 `mixin` 定义来支持混入，实现代码的复用。'
                    },
                    // ---- 集合与泛型 ----
                    {
                        question: 'Dart 中，用于定义列表（List）的语法是？',
                        options: ['List<int> numbers = [1, 2, 3];', 'int[] numbers = [1, 2, 3];', 'Array<int> numbers = [1, 2, 3];', 'ArrayList<int> numbers = [1, 2, 3];'],
                        answer: 0,
                        explanation: 'Dart 中使用 `List<T>` 表示列表，可以使用字面量 `[]` 创建。'
                    },
                    {
                        question: 'Dart 中，用于定义集合（Set）的语法是？',
                        options: ['Set<int> numbers = {1, 2, 3};', 'HashSet<int> numbers = {1, 2, 3};', 'Set<int> numbers = [1, 2, 3];', 'Set<int> numbers = (1, 2, 3);'],
                        answer: 0,
                        explanation: 'Dart 中使用 `Set<T>` 表示集合，可以使用字面量 `{}` 创建，但需要注意区分 Map 的字面量。'
                    },
                    {
                        question: 'Dart 中，用于定义映射（Map）的语法是？',
                        options: ['Map<String, int> map = {"a": 1, "b": 2};', 'Dictionary<String, int> map = {"a": 1, "b": 2};', 'Map<String, int> map = [("a", 1), ("b", 2)];', 'HashMap<String, int> map = {"a": 1, "b": 2};'],
                        answer: 0,
                        explanation: 'Dart 中使用 `Map<K, V>` 表示键值对映射，可以使用字面量 `{}` 创建。'
                    },
                    {
                        question: 'Dart 中，用于集合遍历的常用方法是？',
                        options: ['forEach()', 'each()', 'loop()', 'iterate()'],
                        answer: 0,
                        explanation: 'Dart 中的集合类型（如 List、Set、Map）都提供了 `forEach()` 方法进行遍历。'
                    },
                    // ---- 异步编程 ----
                    {
                        question: 'Dart 中，用于异步操作的核心对象是？',
                        options: ['Future 和 Stream', 'Promise', 'AsyncTask', 'Thread'],
                        answer: 0,
                        explanation: 'Dart 使用 `Future` 处理单个异步操作的结果，使用 `Stream` 处理一系列异步事件。'
                    },
                    {
                        question: '用于将函数标记为异步函数的关键字是？',
                        options: ['async', 'await', 'async*', 'sync*'],
                        answer: 0,
                        explanation: '使用 `async` 关键字标记函数为异步函数，它允许你在函数体内使用 `await`。'
                    },
                    {
                        question: '用于等待 Future 完成的关键字是？',
                        options: ['await', 'wait', 'then', 'async'],
                        answer: 0,
                        explanation: '`await` 关键字用于等待一个 `Future` 完成，并且只能在 `async` 函数中使用。'
                    },
                    {
                        question: 'Dart 中，用于创建 Stream 的函数标记为？',
                        options: ['async*', 'async', 'sync*', 'stream'],
                        answer: 0,
                        explanation: '使用 `async*` 标记一个生成 Stream 的函数，配合 `yield` 或 `yield*` 发送数据。'
                    },
                    // ---- 空安全 ----
                    {
                        question: 'Dart 的空安全（Null Safety）特性中，如何声明一个可为空的变量？',
                        options: ['使用 ? 后缀，如 int? a;', '使用 optional 关键字', '使用 nullable 关键字', '使用 * 后缀'],
                        answer: 0,
                        explanation: '在空安全中，在类型后加上 `?` 表示该变量可以为 null，如 `int? a = null;`。'
                    },
                    {
                        question: '空安全中，用于断言变量不为 null 的操作符是？',
                        options: ['!', '?', '??', '?.'],
                        answer: 0,
                        explanation: '使用 `!` 操作符告诉编译器该表达式不为 null，例如 `a!.toString()`。'
                    },
                    {
                        question: '用于提供默认值的空值合并操作符是？',
                        options: ['??', '?:', '?', '||'],
                        answer: 0,
                        explanation: '`??` 操作符用于当表达式为 null 时提供默认值，例如 `a ?? "default"`。'
                    },
                    // ---- 库与工具 ----
                    {
                        question: 'Dart 的包管理工具是什么？',
                        options: ['pub', 'npm', 'pip', 'maven'],
                        answer: 0,
                        explanation: 'Dart 使用 `pub` 作为包管理工具，配置文件为 `pubspec.yaml`。'
                    },
                    {
                        question: 'pubspec.yaml 文件的作用是什么？',
                        options: [
                            '管理项目的依赖、元数据和配置',
                            '存储源代码',
                            '编译配置文件',
                            '日志文件'
                        ],
                        answer: 0,
                        explanation: '`pubspec.yaml` 是 Dart 项目的配置文件，用于声明依赖、项目名称、版本等。'
                    },
                    {
                        question: '安装依赖的命令是？',
                        options: ['dart pub get', 'pub install', 'dart get', 'pub update'],
                        answer: 0,
                        explanation: '`dart pub get` 命令根据 `pubspec.yaml` 下载并安装项目依赖。'
                    }
                ],
                resources: [
                    { name: 'Dart官方文档', url: 'https://dart.dev/guides', type: 'docs' },
                    { name: 'Dart中文网', url: 'https://dart.cn/guides', type: 'docs' },
                    { name: 'Dart入门教程', url: 'https://www.bilibili.com/video/BV1S4411E7LY', type: 'video' },
                ]
            },
            {
                id: 'flutter',
                name: 'Flutter',
                icon: '🦋',
                description: '跨平台界面开发与状态管理',
                priority: 'core',
                quizs: [
                    // ---- Flutter 基础概念 ----
                    {
                        question: 'Flutter 是什么？',
                        options: [
                            'Google 开源的 UI 工具包，用于构建跨平台应用',
                            'Facebook 开发的移动框架',
                            '一个后端框架',
                            '一个数据库系统'
                        ],
                        answer: 0,
                        explanation: 'Flutter 是 Google 开源的 UI 工具包，用于从单一代码库构建美观、原生编译的移动、Web 和桌面应用。'
                    },
                    {
                        question: 'Flutter 使用哪种编程语言？',
                        options: ['Dart', 'JavaScript', 'Java', 'Kotlin'],
                        answer: 0,
                        explanation: 'Flutter 使用 Dart 语言进行开发。'
                    },
                    {
                        question: 'Flutter 的核心设计思想是什么？',
                        options: ['一切皆 Widget', '一切皆组件', 'MVC 模式', 'MVVM 模式'],
                        answer: 0,
                        explanation: '在 Flutter 中，几乎所有东西都是 Widget——从布局到手势处理，甚至应用本身都是 Widget。'
                    },
                    {
                        question: 'Flutter 的热重载（Hot Reload）功能有什么作用？',
                        options: [
                            '在不重启应用的情况下快速查看代码更改效果',
                            '重新编译整个应用',
                            '重启设备',
                            '重新加载网络数据'
                        ],
                        answer: 0,
                        explanation: '热重载可以在保持应用状态的情况下，将修改的代码注入到运行中的 Dart 虚拟机中，极大地提升开发效率。'
                    },
                    {
                        question: 'Flutter 使用什么渲染引擎？',
                        options: ['Skia', 'WebKit', 'Blink', 'Gecko'],
                        answer: 0,
                        explanation: 'Flutter 使用 Skia 图形引擎直接在 Canvas 上绘制 UI，不依赖平台原生控件。'
                    },
                    // ---- Widget 体系 ----
                    {
                        question: 'Flutter 中，无状态 Widget（StatelessWidget）的特点是什么？',
                        options: [
                            '没有可变的内部状态，UI 一旦构建就不会改变',
                            '可以有可变状态',
                            '只能用于静态文本',
                            '需要手动管理状态'
                        ],
                        answer: 0,
                        explanation: '`StatelessWidget` 是不可变的，它的属性都是 final 的，UI 在构建后不会随时间变化。'
                    },
                    {
                        question: 'Flutter 中，有状态 Widget（StatefulWidget）的特点是什么？',
                        options: [
                            '具有可变的内部状态，可以通过 setState() 更新 UI',
                            '状态不可变',
                            '不需要 State 对象',
                            '只能用于动画'
                        ],
                        answer: 0,
                        explanation: '`StatefulWidget` 由两部分组成：Widget 本身（不可变）和关联的 `State` 对象（可变），调用 `setState()` 可以触发 UI 更新。'
                    },
                    {
                        question: 'Flutter 中，用于创建基本文本的 Widget 是？',
                        options: ['Text', 'Label', 'TextView', 'TextWidget'],
                        answer: 0,
                        explanation: '`Text` Widget 是用于显示文本的基本组件。'
                    },
                    {
                        question: '用于创建行式布局（水平排列）的 Widget 是？',
                        options: ['Row', 'Column', 'Stack', 'Container'],
                        answer: 0,
                        explanation: '`Row` Widget 将其子 Widget 水平排列。'
                    },
                    {
                        question: '用于创建列式布局（垂直排列）的 Widget 是？',
                        options: ['Column', 'Row', 'ListView', 'Stack'],
                        answer: 0,
                        explanation: '`Column` Widget 将其子 Widget 垂直排列。'
                    },
                    {
                        question: '用于创建堆叠布局（重叠）的 Widget 是？',
                        options: ['Stack', 'Overlay', 'Positioned', 'ZIndex'],
                        answer: 0,
                        explanation: '`Stack` Widget 允许其子 Widget 堆叠在一起，可以使用 `Positioned` 控制位置。'
                    },
                    {
                        question: '用于创建容器（可以设置边距、填充、背景等）的 Widget 是？',
                        options: ['Container', 'Box', 'View', 'Panel'],
                        answer: 0,
                        explanation: '`Container` 是一个多功能的 Widget，可以组合常见的绘画、定位和尺寸调整功能。'
                    },
                    // ---- 布局与样式 ----
                    {
                        question: '在 Flutter 中，如何为 Widget 添加内边距？',
                        options: ['使用 Padding Widget', '设置 margin 属性', '使用 Spacer', '使用 SizedBox'],
                        answer: 0,
                        explanation: '`Padding` Widget 用于给其子 Widget 添加内边距（padding）。'
                    },
                    {
                        question: '用于设置 Widget 大小和间距的 Widget 是？',
                        options: ['SizedBox', 'Container', 'BoxConstraints', '以上都是'],
                        answer: 3,
                        explanation: '`SizedBox` 可以指定固定尺寸，`Container` 可以设置宽高和 margin，`BoxConstraints` 用于约束。'
                    },
                    {
                        question: 'Flutter 中，用于创建可滚动列表的 Widget 是？',
                        options: ['ListView', 'ScrollView', 'ListBox', 'ScrollList'],
                        answer: 0,
                        explanation: '`ListView` 是 Flutter 中最常用的可滚动列表组件。'
                    },
                    {
                        question: '用于创建网格列表的 Widget 是？',
                        options: ['GridView', 'GridList', 'Table', 'ListView'],
                        answer: 0,
                        explanation: '`GridView` 用于创建二维网格列表。'
                    },
                    {
                        question: 'Flutter 中，如何为 Widget 添加装饰（如边框、圆角、阴影）？',
                        options: ['使用 Container 的 decoration 属性', '使用 Border Widget', '使用 Shadow Widget', '使用 Decoration Widget'],
                        answer: 0,
                        explanation: '`Container` 的 `decoration` 属性可以接受 `BoxDecoration` 对象，用于设置边框、圆角、渐变和阴影。'
                    },
                    // ---- 手势与交互 ----
                    {
                        question: '用于处理手势（如点击、拖动）的 Flutter Widget 是？',
                        options: ['GestureDetector', 'TapDetector', 'TouchHandler', 'GestureRecognizer'],
                        answer: 0,
                        explanation: '`GestureDetector` 是一个用于检测手势的无渲染 Widget。'
                    },
                    {
                        question: 'Flutter 中，用于创建按钮的常用 Widget 有哪些？',
                        options: [
                            'ElevatedButton, TextButton, OutlinedButton',
                            'Button, PushButton',
                            'UIButton',
                            'AndroidButton'
                        ],
                        answer: 0,
                        explanation: 'Flutter 提供了多种按钮 Widget，如 `ElevatedButton`（凸起按钮）、`TextButton`（文本按钮）和 `OutlinedButton`（轮廓按钮）。'
                    },
                    {
                        question: '用于响应用户点击的 InkWell Widget 有什么特点？',
                        options: [
                            '提供水波纹效果的点击响应',
                            '只能用于 Material 组件',
                            '不支持手势',
                            '只能用于 iOS'
                        ],
                        answer: 0,
                        explanation: '`InkWell` 是 Material 风格的点击响应 Widget，会在点击位置产生水波纹效果。'
                    },
                    // ---- 状态管理 ----
                    {
                        question: 'Flutter 中，最简单的内置状态管理方式是？',
                        options: ['StatefulWidget 的 setState()', 'Provider', 'BLoC', 'Redux'],
                        answer: 0,
                        explanation: '对于简单的局部状态，`StatefulWidget` 配合 `setState()` 是最直接的方法。'
                    },
                    {
                        question: '以下哪个不是 Flutter 常用的状态管理方案？',
                        options: ['MVC', 'Provider', 'BLoC', 'GetX'],
                        answer: 0,
                        explanation: 'Flutter 常用状态管理方案包括 Provider、BLoC、GetX、Riverpod 等，MVC 在 Flutter 中不常用。'
                    },
                    {
                        question: 'Provider 包的主要作用是什么？',
                        options: [
                            '简化状态管理和依赖注入',
                            '网络请求',
                            '路由管理',
                            '数据库操作'
                        ],
                        answer: 0,
                        explanation: 'Provider 是官方推荐的简单状态管理方案，基于 InheritedWidget，用于状态共享和依赖注入。'
                    },
                    // ---- 导航与路由 ----
                    {
                        question: 'Flutter 中，用于页面导航的核心 Widget 是？',
                        options: ['Navigator', 'Router', 'PageView', 'NavigationBar'],
                        answer: 0,
                        explanation: '`Navigator` 是 Flutter 中管理页面栈的核心组件，提供 `push()`、`pop()` 等方法。'
                    },
                    {
                        question: '用于导航到新页面的方法是？',
                        options: ['Navigator.push()', 'Navigator.go()', 'Navigator.navigate()', 'Navigator.forward()'],
                        answer: 0,
                        explanation: '`Navigator.push()` 方法将新路由压入导航栈。'
                    },
                    {
                        question: '用于返回上一个页面的方法是？',
                        options: ['Navigator.pop()', 'Navigator.back()', 'Navigator.return()', 'Navigator.goBack()'],
                        answer: 0,
                        explanation: '`Navigator.pop()` 方法从导航栈中弹出当前路由。'
                    },
                    {
                        question: '命名路由（Named Routes）的作用是什么？',
                        options: [
                            '通过字符串名称来定义和引用路由',
                            '为路由命名以便调试',
                            '自动生成路由',
                            '路由权限控制'
                        ],
                        answer: 0,
                        explanation: '命名路由允许你通过预定义的字符串名称来管理路由，可以在 `MaterialApp` 的 `routes` 属性中定义。'
                    },
                    // ---- 网络与数据 ----
                    {
                        question: 'Flutter 中，常用的 HTTP 网络请求包是？',
                        options: ['http', 'dio', 'fetch', 'axios'],
                        answer: 0,
                        explanation: '`http` 包是 Dart 官方提供的简单 HTTP 客户端，`dio` 是更强大的第三方请求库。'
                    },
                    {
                        question: '用于解析 JSON 数据的常用方法是？',
                        options: [
                            'jsonDecode() 和 jsonEncode()',
                            'JSON.parse()',
                            'JSON.stringify()',
                            'JSON.decode()'
                        ],
                        answer: 0,
                        explanation: 'Dart 的 `dart:convert` 库提供了 `jsonDecode()` 和 `jsonEncode()` 用于 JSON 处理。'
                    },
                    {
                        question: 'Flutter 中，用于本地存储的常用包是？',
                        options: ['shared_preferences', 'local_storage', 'sqflite', 'A 和 C'],
                        answer: 3,
                        explanation: '`shared_preferences` 用于存储简单键值对，`sqflite` 用于 SQLite 数据库操作。'
                    },
                    // ---- 生命周期 ----
                    {
                        question: 'StatefulWidget 的 State 对象中，initState() 方法在何时被调用？',
                        options: [
                            '当 State 对象被插入树中时，只调用一次',
                            '每次 Widget 重建时',
                            '当页面销毁时',
                            '每次调用 setState() 时'
                        ],
                        answer: 0,
                        explanation: '`initState()` 在 State 对象被插入树中时调用，且在整个生命周期中只调用一次，适合初始化数据。'
                    },
                    {
                        question: 'State 对象中，dispose() 方法的作用是什么？',
                        options: [
                            '在 State 对象被永久移除时调用，用于清理资源',
                            '销毁 Widget',
                            '重建 Widget',
                            '更新状态'
                        ],
                        answer: 0,
                        explanation: '`dispose()` 在 State 对象被永久移除时调用，应该在此方法中释放资源（如取消订阅、关闭流）。'
                    },
                    // ---- 平台集成 ----
                    {
                        question: 'Flutter 中，如何调用平台特定的 API（如相机、传感器）？',
                        options: [
                            '使用 Platform Channel 或第三方插件',
                            '直接编写原生代码混合',
                            '使用 JavaScript 桥接',
                            '无法调用'
                        ],
                        answer: 0,
                        explanation: 'Flutter 通过 Platform Channel（平台通道）与原生代码通信，或者使用 pub.dev 上的现成插件。'
                    },
                    {
                        question: 'MethodChannel 的主要作用是什么？',
                        options: [
                            '在 Flutter 和原生代码之间传递方法调用',
                            '管理路由',
                            '状态管理',
                            '网络请求'
                        ],
                        answer: 0,
                        explanation: '`MethodChannel` 允许 Flutter 客户端调用宿主平台（Android/iOS）上的方法。'
                    },
                    // ---- 调试与工具 ----
                    {
                        question: 'Flutter 开发者常用的调试工具有哪些？',
                        options: [
                            'DevTools、Logging、Debugger',
                            'Chrome DevTools',
                            'Xcode Instruments',
                            'Android Studio Profiler'
                        ],
                        answer: 0,
                        explanation: 'Flutter DevTools 是一套专为 Flutter 和 Dart 设计的性能和调试工具。'
                    },
                    {
                        question: 'Flutter 的 Inspector 工具主要用于什么？',
                        options: [
                            '可视化检查和调试 Widget 树',
                            '性能分析',
                            '网络请求监控',
                            '内存监控'
                        ],
                        answer: 0,
                        explanation: 'Flutter Inspector 可以让你可视化地查看 Widget 树，检查布局问题，调试 UI。'
                    }
                ],
                resources: [
                    { name: 'Flutter官方文档', url: 'https://docs.flutter.dev/', type: 'docs' },
                    { name: 'Flutter中文网', url: 'https://flutter.cn/', type: 'docs' },
                    { name: 'Flutter实战', url: 'https://book.flutterchina.club/', type: 'book' },
                    { name: 'bilibili - Flutter教程', url: 'https://www.bilibili.com/video/BV1LJ411W7dR', type: 'video' },
                ]
            },
            {
                id: 'swift',
                name: 'Swift',
                icon: '🍎',
                description: 'iOS 原生应用与 SwiftUI 基础',
                priority: 'important',
                quizs: [
                    // ---- Swift 基础概念 ----
                    {
                        question: 'Swift 是什么？',
                        options: [
                            'Apple 开发的强类型编程语言，用于 iOS/macOS 开发',
                            'Google 开发的移动开发语言',
                            '脚本语言',
                            '数据库查询语言'
                        ],
                        answer: 0,
                        explanation: 'Swift 是 Apple 于 2014 年推出的强类型编程语言，用于 iOS、macOS、watchOS 和 tvOS 应用开发。'
                    },
                    {
                        question: 'Swift 的主要设计目标是什么？',
                        options: [
                            '安全、快速、表达力强',
                            '兼容 C++',
                            '完全兼容 Objective-C',
                            '跨平台'
                        ],
                        answer: 0,
                        explanation: 'Swift 的设计目标是安全（减少编程错误）、快速（性能接近 C++）和表达力强（语法简洁现代）。'
                    },
                    {
                        question: 'Swift 的包管理工具是什么？',
                        options: ['Swift Package Manager', 'CocoaPods', 'Carthage', '以上都是'],
                        answer: 3,
                        explanation: 'Swift 可以使用官方 Swift Package Manager，以及第三方工具 CocoaPods 和 Carthage 管理依赖。'
                    },
                    {
                        question: 'Swift 中，使用哪个关键字定义常量？',
                        options: ['let', 'const', 'final', 'static'],
                        answer: 0,
                        explanation: 'Swift 使用 `let` 定义常量，常量的值一旦设定就不能更改。'
                    },
                    {
                        question: 'Swift 中，使用哪个关键字定义变量？',
                        options: ['var', 'let', 'variable', 'mut'],
                        answer: 0,
                        explanation: 'Swift 使用 `var` 定义变量，变量的值可以被修改。'
                    },
                    // ---- 数据类型 ----
                    {
                        question: 'Swift 中，`Int` 类型表示什么？',
                        options: ['整数类型', '浮点数类型', '布尔类型', '字符串类型'],
                        answer: 0,
                        explanation: '`Int` 是 Swift 中的整数类型，其长度与平台相关（32位或64位）。'
                    },
                    {
                        question: 'Swift 中，`Double` 和 `Float` 的区别是什么？',
                        options: [
                            'Double 是64位浮点数，精度更高；Float 是32位浮点数',
                            'Double 用于整数，Float 用于小数',
                            '没有区别',
                            'Double 用于科学计算，Float 用于普通计算'
                        ],
                        answer: 0,
                        explanation: '`Double` 是64位浮点数（至少15位小数精度），`Float` 是32位浮点数（约6位小数精度）。'
                    },
                    {
                        question: 'Swift 中，`String` 类型是什么？',
                        options: ['字符串类型', '字符类型', '数组类型', '字典类型'],
                        answer: 0,
                        explanation: '`String` 是 Swift 中的字符串类型，用于存储文本数据。'
                    },
                    {
                        question: 'Swift 中，`Bool` 类型的可能值是什么？',
                        options: ['true 和 false', '0 和 1', 'YES 和 NO', 'T 和 F'],
                        answer: 0,
                        explanation: '`Bool` 是布尔类型，只有两个值：`true` 和 `false`。'
                    },
                    {
                        question: 'Swift 中，如何声明一个可选类型（Optional）？',
                        options: ['在类型后加 ?，如 Int?', '使用 Optional 关键字', '使用 nullable 关键字', '使用 maybe 关键字'],
                        answer: 0,
                        explanation: '可选类型表示值可能存在，也可能为 `nil`，语法为在类型后加 `?`。'
                    },
                    // ---- 控制流程 ----
                    {
                        question: 'Swift 中，`if` 语句的条件可以是什么？',
                        options: ['布尔表达式', '任何数值', '任何对象', '字符串'],
                        answer: 0,
                        explanation: 'Swift 的 `if` 语句条件必须是布尔表达式，不能像 C 语言那样隐式比较非零值。'
                    },
                    {
                        question: 'Swift 中，`for-in` 循环的用途是什么？',
                        options: [
                            '遍历序列（如数组、范围、字典）',
                            '无限循环',
                            '条件循环',
                            '递归'
                        ],
                        answer: 0,
                        explanation: '`for-in` 用于遍历集合或区间中的所有元素。'
                    },
                    {
                        question: 'Swift 中，`switch` 语句的特点是什么？',
                        options: [
                            '不需要显式 break，不会自动贯穿',
                            '必须显式 break',
                            '只能匹配整数',
                            '不支持范围匹配'
                        ],
                        answer: 0,
                        explanation: 'Swift 的 `switch` 在匹配到一个 case 后会自动退出，不需要 `break`，并且支持多种模式匹配。'
                    },
                    {
                        question: 'Swift 中，用于处理可选绑定的语法是？',
                        options: ['if let 或 guard let', 'if optional', 'let where', 'optional binding'],
                        answer: 0,
                        explanation: '`if let` 和 `guard let` 是 Swift 中用于安全解包可选值的常用语法。'
                    },
                    // ---- 函数与闭包 ----
                    {
                        question: 'Swift 中，定义函数的语法是什么？',
                        options: [
                            'func functionName(parameters) -> ReturnType { }',
                            'function functionName(parameters) { }',
                            'def functionName(parameters):',
                            'void functionName(parameters) { }'
                        ],
                        answer: 0,
                        explanation: 'Swift 使用 `func` 关键字定义函数，参数列表后跟 `->` 和返回类型。'
                    },
                    {
                        question: 'Swift 中，闭包（Closure）是什么？',
                        options: [
                            '自包含的函数代码块，可以在代码中传递和使用',
                            '一种循环结构',
                            '一种类',
                            '一种协议'
                        ],
                        answer: 0,
                        explanation: '闭包是功能自包含的代码块，类似于其他语言的 lambda 或匿名函数，可以捕获和存储其上下文中的常量或变量。'
                    },
                    {
                        question: 'Swift 中，尾随闭包（Trailing Closure）语法是什么？',
                        options: [
                            '如果函数的最后一个参数是闭包，可以写在函数调用括号外面',
                            '闭包写在函数前面',
                            '闭包写在参数列表中间',
                            '闭包必须单独一行'
                        ],
                        answer: 0,
                        explanation: '尾随闭包是一种语法糖，当闭包是函数的最后一个参数时，可以将其写在函数调用的括号之后。'
                    },
                    // ---- 面向对象 ----
                    {
                        question: 'Swift 中，定义类的关键字是？',
                        options: ['class', 'struct', 'enum', 'protocol'],
                        answer: 0,
                        explanation: 'Swift 使用 `class` 关键字定义类。'
                    },
                    {
                        question: 'Swift 中，结构体（struct）和类的主要区别是什么？',
                        options: [
                            '结构体是值类型，类是引用类型',
                            '结构体不能有方法',
                            '类不能有属性',
                            '没有区别'
                        ],
                        answer: 0,
                        explanation: 'Swift 中，结构体是值类型（传递时复制），类是引用类型（传递引用）。'
                    },
                    {
                        question: 'Swift 中，用于定义协议的语法是？',
                        options: ['protocol', 'interface', 'contract', 'prototype'],
                        answer: 0,
                        explanation: '`protocol` 用于定义协议，类似于其他语言的接口。'
                    },
                    {
                        question: 'Swift 中，类继承使用哪个符号？',
                        options: [':', 'extends', 'inherits', '<:'],
                        answer: 0,
                        explanation: 'Swift 中使用冒号 `:` 表示继承和遵循协议，例如 `class MyClass: SuperClass, Protocol`。'
                    },
                    {
                        question: 'Swift 中，用于标记方法重写的关键字是？',
                        options: ['override', 'overwrite', 'super', 'redefine'],
                        answer: 0,
                        explanation: '在子类中重写父类方法时，需要使用 `override` 关键字显式标记。'
                    },
                    // ---- 枚举与扩展 ----
                    {
                        question: 'Swift 中，枚举（enum）可以关联值吗？',
                        options: [
                            '可以，枚举可以关联任意类型的值',
                            '不可以',
                            '只能关联整数',
                            '只能关联字符串'
                        ],
                        answer: 0,
                        explanation: 'Swift 的枚举非常强大，可以关联（associated）任意类型的值。'
                    },
                    {
                        question: 'Swift 中，扩展（extension）的作用是什么？',
                        options: [
                            '为已有的类、结构体、枚举或协议添加新功能',
                            '创建新类',
                            '定义新协议',
                            '管理内存'
                        ],
                        answer: 0,
                        explanation: '`extension` 允许你为已有的类型添加新的方法、计算属性、下标等，即使没有源代码。'
                    },
                    // ---- 错误处理 ----
                    {
                        question: 'Swift 中，用于错误处理的语法是？',
                        options: ['do-catch', 'try-catch', 'try-except', 'catch-throw'],
                        answer: 0,
                        explanation: 'Swift 使用 `do-catch` 语句进行错误处理，与 `try` 关键字配合使用。'
                    },
                    {
                        question: '用于标记可能抛出错误的函数的关键字是？',
                        options: ['throws', 'throw', 'try', 'catch'],
                        answer: 0,
                        explanation: '在函数参数后加 `throws` 关键字表示该函数可能抛出错误。'
                    },
                    {
                        question: '用于实际抛出错误的关键字是？',
                        options: ['throw', 'throws', 'raise', 'error'],
                        answer: 0,
                        explanation: '`throw` 用于在函数内部实际抛出一个符合 `Error` 协议的错误。'
                    },
                    // ---- 内存管理 ----
                    {
                        question: 'Swift 使用什么机制进行自动内存管理？',
                        options: ['ARC (自动引用计数)', 'GC (垃圾回收)', '手动管理', 'RAII'],
                        answer: 0,
                        explanation: 'Swift 使用自动引用计数（ARC）来管理内存，大多数情况下你不需要手动管理内存。'
                    },
                    {
                        question: '用于打破循环引用的关键字是？',
                        options: ['weak 和 unowned', 'break', 'strong', 'reference'],
                        answer: 0,
                        explanation: '`weak` 和 `unowned` 用于在闭包或类之间打破强引用循环。'
                    },
                    // ---- 并发 ----
                    {
                        question: 'Swift 5.5 引入的并发特性中，用于定义异步函数的关键字是？',
                        options: ['async', 'await', 'Task', 'actor'],
                        answer: 0,
                        explanation: '使用 `async` 关键字标记函数为异步函数。'
                    },
                    {
                        question: '用于等待异步函数结果的关键字是？',
                        options: ['await', 'async', 'wait', 'suspend'],
                        answer: 0,
                        explanation: '`await` 用于调用异步函数并等待其结果。'
                    },
                    {
                        question: 'Swift 中，`actor` 的作用是什么？',
                        options: [
                            '保护可变状态，防止数据竞争',
                            '执行异步操作',
                            '管理线程',
                            '创建对象'
                        ],
                        answer: 0,
                        explanation: '`actor` 是一种引用类型，用于保护其可变状态，确保在任何时候只有一个任务能访问其内部状态。'
                    }
                ],
                resources: [
                    { name: 'Swift官方文档', url: 'https://docs.swift.org/swift-book/', type: 'docs' },
                    { name: 'Apple开发者文档', url: 'https://developer.apple.com/documentation/', type: 'docs' },
                    { name: 'Swift入门教程', url: 'https://www.bilibili.com/video/BV1YJ411H7F7', type: 'video' },
                ]
            },
            {
                id: 'kotlin',
                name: 'Kotlin',
                icon: '🤖',
                description: 'Android 原生开发与现代语法实践',
                priority: 'important',
                quizs: [
                    // ---- Kotlin 基础概念 ----
                    {
                        question: 'Kotlin 是什么？',
                        options: [
                            'JetBrains 开发的静态类型编程语言，运行在 JVM 上',
                            'Google 开发的语言',
                            '脚本语言',
                            '数据库语言'
                        ],
                        answer: 0,
                        explanation: 'Kotlin 由 JetBrains 开发，是一种简洁、安全的静态类型语言，与 Java 100% 互通，是 Android 官方支持的语言。'
                    },
                    {
                        question: 'Kotlin 的主要设计目标是什么？',
                        options: [
                            '简洁、安全、与 Java 互操作',
                            '高性能计算',
                            '系统级编程',
                            '嵌入式开发'
                        ],
                        answer: 0,
                        explanation: 'Kotlin 旨在提供比 Java 更简洁的语法，更好的空安全，并保持与 Java 的完全互操作性。'
                    },
                    {
                        question: 'Kotlin 文件的扩展名是什么？',
                        options: ['.kt', '.kotlin', '.kts', '.kl'],
                        answer: 0,
                        explanation: 'Kotlin 源代码文件使用 `.kt` 扩展名，脚本文件使用 `.kts`。'
                    },
                    {
                        question: 'Kotlin 中，使用哪个关键字声明包？',
                        options: ['package', 'import', 'namespace', 'module'],
                        answer: 0,
                        explanation: '与 Java 类似，Kotlin 使用 `package` 关键字声明包。'
                    },
                    {
                        question: 'Kotlin 程序的入口点是什么？',
                        options: ['main() 函数', 'start() 函数', 'init() 函数', 'run() 函数'],
                        answer: 0,
                        explanation: 'Kotlin 程序的入口是 `main()` 函数，可以不带参数或带 `Array<String>` 参数。'
                    },
                    // ---- 变量与数据类型 ----
                    {
                        question: 'Kotlin 中，使用哪个关键字声明只读变量？',
                        options: ['val', 'var', 'const', 'final'],
                        answer: 0,
                        explanation: '`val` 声明只读变量（类似 Java 的 final），初始化后不可修改。'
                    },
                    {
                        question: 'Kotlin 中，使用哪个关键字声明可变变量？',
                        options: ['var', 'val', 'let', 'mut'],
                        answer: 0,
                        explanation: '`var` 声明可变变量，可以重新赋值。'
                    },
                    {
                        question: 'Kotlin 中，如何声明可为空的类型？',
                        options: ['在类型后加 ?', '使用 nullable 关键字', '使用 optional 关键字', '使用 maybe 关键字'],
                        answer: 0,
                        explanation: '在类型后加 `?` 表示该变量可以为 null，如 `var name: String? = null`。'
                    },
                    {
                        question: 'Kotlin 中，安全调用操作符是什么？',
                        options: ['?.', '?', '!!', '?.'],
                        answer: 0,
                        explanation: '`?.` 安全调用操作符，如果对象为 null 则返回 null，避免 NPE。'
                    },
                    {
                        question: 'Kotlin 中，非空断言操作符是什么？',
                        options: ['!!', '!', '?', '??'],
                        answer: 0,
                        explanation: '`!!` 操作符用于断言一个表达式不为 null，如果为 null 会抛出 NPE。'
                    },
                    {
                        question: 'Kotlin 中，Elvis 操作符是什么？',
                        options: ['?:', '?', '!!', '?.'],
                        answer: 0,
                        explanation: '`?:` 是 Elvis 操作符，如果左侧表达式不为 null 则返回其值，否则返回右侧表达式。'
                    },
                    // ---- 基本数据类型 ----
                    {
                        question: 'Kotlin 中，数字类型包括哪些？',
                        options: ['Byte, Short, Int, Long, Float, Double', 'byte, short, int, long, float, double', 'Number, Integer, Decimal', '以上都是'],
                        answer: 0,
                        explanation: 'Kotlin 的数字类型与 Java 类似，包括 Byte、Short、Int、Long、Float 和 Double。'
                    },
                    {
                        question: 'Kotlin 中，字符类型使用什么关键字？',
                        options: ['Char', 'Character', 'char', 'Ch'],
                        answer: 0,
                        explanation: '`Char` 表示字符类型，不能直接当作数字使用。'
                    },
                    {
                        question: 'Kotlin 中，布尔类型的值是什么？',
                        options: ['true 和 false', 'True 和 False', 'YES 和 NO', '1 和 0'],
                        answer: 0,
                        explanation: 'Kotlin 的 `Boolean` 类型只有 `true` 和 `false` 两个值。'
                    },
                    {
                        question: 'Kotlin 中，字符串模板的语法是什么？',
                        options: ['${变量名}', '$变量名', '{{变量名}}', '#{变量名}'],
                        answer: 0,
                        explanation: 'Kotlin 支持字符串模板，使用 `$变量名` 或 `${表达式}` 在字符串中嵌入值。'
                    },
                    // ---- 控制流程 ----
                    {
                        question: 'Kotlin 中，`if` 表达式有什么特点？',
                        options: [
                            'if 可以有返回值',
                            'if 只能用于条件判断',
                            'if 必须配合 else',
                            'if 不能嵌套'
                        ],
                        answer: 0,
                        explanation: '在 Kotlin 中，`if` 是一个表达式，它会返回值，因此可以用在三目运算符的位置。'
                    },
                    {
                        question: 'Kotlin 中，`when` 表达式的作用是什么？',
                        options: [
                            '取代 switch 语句，功能更强大',
                            '定义循环',
                            '处理异常',
                            '类型转换'
                        ],
                        answer: 0,
                        explanation: '`when` 是 Kotlin 中强大的模式匹配表达式，可以取代 Java 的 switch，并支持更复杂的条件。'
                    },
                    {
                        question: 'Kotlin 中，`for` 循环通常用于什么？',
                        options: [
                            '遍历实现了迭代器的集合或区间',
                            '无限循环',
                            '条件循环',
                            '递归'
                        ],
                        answer: 0,
                        explanation: '`for` 循环用于遍历任何提供了迭代器的对象，如区间、数组、集合。'
                    },
                    {
                        question: 'Kotlin 中，如何定义一个区间（Range）？',
                        options: ['使用 .. 操作符，如 1..10', '使用 range 关键字', '使用 - 操作符', '使用 to 函数'],
                        answer: 0,
                        explanation: '`..` 操作符用于创建闭区间，例如 `1..10` 表示 1 到 10（包含 10）。'
                    },
                    // ---- 函数 ----
                    {
                        question: 'Kotlin 中，定义函数使用哪个关键字？',
                        options: ['fun', 'func', 'function', 'def'],
                        answer: 0,
                        explanation: 'Kotlin 使用 `fun` 关键字定义函数。'
                    },
                    {
                        question: 'Kotlin 中，如何定义默认参数？',
                        options: [
                            '在参数类型后直接赋值，如 name: String = "default"',
                            '使用 default 关键字',
                            '使用 optional 关键字',
                            '在函数体内部设置'
                        ],
                        answer: 0,
                        explanation: 'Kotlin 支持默认参数，在函数定义时直接给参数赋默认值。'
                    },
                    {
                        question: 'Kotlin 中，单表达式函数可以省略什么？',
                        options: [
                            '花括号和 return 语句',
                            '参数列表',
                            '函数名',
                            '返回类型'
                        ],
                        answer: 0,
                        explanation: '如果函数体只有一个表达式，可以省略花括号和 `return`，使用 `=` 连接。'
                    },
                    {
                        question: 'Kotlin 中，lambda 表达式通常放在什么位置？',
                        options: [
                            '花括号 {} 内',
                            '方括号 [] 内',
                            '圆括号 () 内',
                            '尖括号 <> 内'
                        ],
                        answer: 0,
                        explanation: 'Kotlin 的 lambda 表达式总是用花括号 `{}` 包围。'
                    },
                    // ---- 面向对象 ----
                    {
                        question: 'Kotlin 中，定义类的关键字是？',
                        options: ['class', 'struct', 'type', 'object'],
                        answer: 0,
                        explanation: '使用 `class` 关键字定义类。'
                    },
                    {
                        question: 'Kotlin 中，主构造函数定义在哪里？',
                        options: [
                            '直接在类名后面，如 class Person(name: String)',
                            '在 init 块中',
                            '在类体中使用 constructor 关键字',
                            '在主函数中'
                        ],
                        answer: 0,
                        explanation: 'Kotlin 允许在类名后直接声明主构造函数的参数。'
                    },
                    {
                        question: 'Kotlin 中，`init` 块的作用是什么？',
                        options: [
                            '执行初始化代码，在主构造函数之后执行',
                            '定义静态方法',
                            '声明抽象方法',
                            '实现接口'
                        ],
                        answer: 0,
                        explanation: '`init` 块是在类实例化时执行的初始化代码块，可以有一个或多个。'
                    },
                    {
                        question: 'Kotlin 中，数据类使用哪个注解或关键字？',
                        options: ['data class', 'Data', 'entity', 'model'],
                        answer: 0,
                        explanation: '使用 `data` 关键字修饰的类称为数据类，编译器会自动生成 `equals()`、`hashCode()`、`toString()` 等方法。'
                    },
                    {
                        question: 'Kotlin 中，单例模式使用哪个关键字？',
                        options: ['object', 'singleton', 'static', 'instance'],
                        answer: 0,
                        explanation: '`object` 关键字用于声明单例对象，也是一种对象表达式。'
                    },
                    {
                        question: 'Kotlin 中，伴生对象（companion object）的作用是什么？',
                        options: [
                            '定义静态成员（在 Kotlin 中被称为类级成员）',
                            '创建对象实例',
                            '实现工厂模式',
                            '替代构造函数'
                        ],
                        answer: 0,
                        explanation: '`companion object` 允许你在类内部定义类似于 Java 静态成员的成员，可以通过类名直接访问。'
                    },
                    // ---- 继承与接口 ----
                    {
                        question: 'Kotlin 中，类默认是什么？',
                        options: ['final（不可继承）', 'open（可继承）', 'abstract', 'sealed'],
                        answer: 0,
                        explanation: 'Kotlin 的类默认是 final 的，必须显式使用 `open` 关键字才能被继承。'
                    },
                    {
                        question: 'Kotlin 中，继承使用哪个符号？',
                        options: [':', 'extends', 'inherits', '<:'],
                        answer: 0,
                        explanation: 'Kotlin 使用冒号 `:` 表示继承类和实现接口。'
                    },
                    {
                        question: 'Kotlin 中，方法默认是什么？',
                        options: ['final', 'open', 'override', 'abstract'],
                        answer: 0,
                        explanation: '方法默认也是 final 的，需要显式标记为 `open` 才能被重写。'
                    },
                    {
                        question: 'Kotlin 中，接口可以包含属性吗？',
                        options: [
                            '可以，可以声明抽象属性',
                            '不可以',
                            '只能包含方法',
                            '只能包含常量'
                        ],
                        answer: 0,
                        explanation: 'Kotlin 的接口可以包含抽象属性，以及有默认实现的方法。'
                    },
                    // ---- 扩展与委托 ----
                    {
                        question: 'Kotlin 中，扩展函数的作用是什么？',
                        options: [
                            '在不修改原有类的情况下为其添加新函数',
                            '继承类',
                            '实现接口',
                            '创建对象'
                        ],
                        answer: 0,
                        explanation: '扩展函数允许你为现有类添加新的函数，即使没有该类的源代码。'
                    },
                    {
                        question: 'Kotlin 中，委托属性（delegated property）使用哪个关键字？',
                        options: ['by', 'delegate', 'as', 'with'],
                        answer: 0,
                        explanation: '`by` 关键字用于实现属性委托或类委托。'
                    },
                    {
                        question: 'Kotlin 中，惰性委托（lazy）的作用是什么？',
                        options: [
                            '属性在第一次访问时初始化',
                            '属性延迟加载',
                            '属性不可变',
                            '属性线程安全'
                        ],
                        answer: 0,
                        explanation: '`lazy` 是一个委托，属性的值只在第一次访问时计算并缓存。'
                    },
                    // ---- 协程 ----
                    {
                        question: 'Kotlin 协程的主要作用是什么？',
                        options: [
                            '简化异步编程，提供轻量级线程',
                            '替代线程',
                            '实现并行计算',
                            '网络请求'
                        ],
                        answer: 0,
                        explanation: '协程是一种轻量级的并发设计模式，用于简化异步编程，可以挂起执行而不阻塞线程。'
                    },
                    {
                        question: '用于启动协程的常用构建器是？',
                        options: ['launch', 'async', 'runBlocking', '以上都是'],
                        answer: 3,
                        explanation: '`launch` 启动新协程不返回结果，`async` 返回 Deferred 可获取结果，`runBlocking` 用于桥接阻塞和非阻塞世界。'
                    },
                    {
                        question: '挂起函数（suspend function）只能在什么中调用？',
                        options: [
                            '其他挂起函数或协程中',
                            '任何函数中',
                            '主线程中',
                            '只能在类中'
                        ],
                        answer: 0,
                        explanation: '挂起函数只能在其他挂起函数或协程作用域中被调用。'
                    }
                ],
                resources: [
                    { name: 'Kotlin官方文档', url: 'https://kotlinlang.org/docs/home.html', type: 'docs' },
                    { name: 'Kotlin中文网', url: 'https://www.kotlincn.net/docs/reference/', type: 'docs' },
                    { name: '菜鸟教程 - Kotlin', url: 'https://www.runoob.com/kotlin/kotlin-tutorial.html', type: 'tutorial' },
                ]
            },
            {
                id: 'react_native',
                name: 'React Native',
                icon: '📱',
                description: '基于 React 的跨端移动开发',
                priority: 'important',
                quizs: [
                    // ---- React Native 基础概念 ----
                    {
                        question: 'React Native 是什么？',
                        options: [
                            'Facebook 开源的跨平台移动应用框架',
                            'Google 的移动框架',
                            '前端框架',
                            '后端框架'
                        ],
                        answer: 0,
                        explanation: 'React Native 允许你使用 React 和 JavaScript 构建原生移动应用，实现“一次学习，随处编写”。'
                    },
                    {
                        question: 'React Native 使用哪种编程语言？',
                        options: ['JavaScript/TypeScript', 'Dart', 'Java', 'Swift'],
                        answer: 0,
                        explanation: 'React Native 主要使用 JavaScript 或 TypeScript 进行开发。'
                    },
                    {
                        question: 'React Native 的核心思想是什么？',
                        options: [
                            'Learn once, write anywhere',
                            'Write once, run anywhere',
                            'Code once, deploy everywhere',
                            'Build once, use anywhere'
                        ],
                        answer: 0,
                        explanation: 'React Native 的核心理念是“学习一次，随处编写”，强调共享逻辑和开发经验，而非代码完全复用。'
                    },
                    {
                        question: 'React Native 与 React 的主要关系是什么？',
                        options: [
                            'React Native 是 React 在移动端的延伸，使用相同的组件模型',
                            '两者完全独立',
                            'React Native 是 React 的简化版',
                            'React 是 React Native 的子集'
                        ],
                        answer: 0,
                        explanation: 'React Native 基于 React，共享组件、状态管理和生命周期等概念，但使用原生组件而非 Web 组件。'
                    },
                    {
                        question: 'React Native 应用的入口文件通常是？',
                        options: ['index.js 或 App.js', 'main.js', 'app.jsx', 'entry.js'],
                        answer: 0,
                        explanation: '通常 `index.js` 是入口文件，它注册根组件 `App.js`。'
                    },
                    // ---- 组件与样式 ----
                    {
                        question: 'React Native 中，用于创建文本的基本组件是？',
                        options: ['Text', 'View', 'TextInput', 'Label'],
                        answer: 0,
                        explanation: '`<Text>` 组件用于显示文本内容，类似于 Web 中的 `<span>`。'
                    },
                    {
                        question: 'React Native 中，用于创建布局容器的基本组件是？',
                        options: ['View', 'Container', 'Div', 'Box'],
                        answer: 0,
                        explanation: '`<View>` 是最基本的布局组件，类似于 Web 中的 `<div>`。'
                    },
                    {
                        question: 'React Native 中，用于处理用户文本输入的组件是？',
                        options: ['TextInput', 'Input', 'TextField', 'TextBox'],
                        answer: 0,
                        explanation: '`<TextInput>` 是用于接收用户文本输入的组件。'
                    },
                    {
                        question: 'React Native 中，用于创建可滚动列表的高性能组件是？',
                        options: ['FlatList', 'ScrollView', 'ListView', 'SectionList'],
                        answer: 0,
                        explanation: '`FlatList` 是高性能的虚拟列表组件，适合渲染大型列表数据。'
                    },
                    {
                        question: 'React Native 中，用于创建图片的组件是？',
                        options: ['Image', 'Img', 'Picture', 'Photo'],
                        answer: 0,
                        explanation: '`<Image>` 组件用于显示网络或本地图片。'
                    },
                    {
                        question: 'React Native 中，样式如何定义？',
                        options: [
                            '使用 StyleSheet.create() 创建样式对象',
                            '使用 CSS 文件',
                            '使用内联样式对象',
                            'A 和 C'
                        ],
                        answer: 3,
                        explanation: '可以使用 `StyleSheet.create()` 集中定义样式，也可以直接使用内联样式对象。'
                    },
                    {
                        question: 'React Native 的布局默认使用什么？',
                        options: ['Flexbox', 'Grid', 'Absolute', 'Float'],
                        answer: 0,
                        explanation: 'React Native 默认使用 Flexbox 布局模型。'
                    },
                    // ---- 导航 ----
                    {
                        question: 'React Native 中最常用的导航库是？',
                        options: ['React Navigation', 'React Router Native', 'Native Navigation', 'Stack Navigator'],
                        answer: 0,
                        explanation: '`React Navigation` 是 React Native 社区最流行的导航解决方案。'
                    },
                    {
                        question: '在 React Navigation 中，用于创建堆栈导航器的函数是？',
                        options: ['createStackNavigator', 'createNativeStackNavigator', 'Stack.Navigator', 'A 和 B'],
                        answer: 3,
                        explanation: 'React Navigation 6 中可以使用 `createNativeStackNavigator` 或 `createStackNavigator` 创建堆栈导航。'
                    },
                    {
                        question: '用于在组件中获取导航对象的方法是什么？',
                        options: ['useNavigation Hook', 'withNavigation HOC', 'props.navigation', '以上都是'],
                        answer: 3,
                        explanation: '可以通过 `useNavigation()` Hook、`withNavigation` 高阶组件或直接从 props 获取 `navigation` 对象。'
                    },
                    {
                        question: '用于导航到新页面的方法通常是？',
                        options: ['navigation.navigate()', 'navigation.push()', 'navigation.goBack()', 'A 和 B'],
                        answer: 3,
                        explanation: '`navigate()` 和 `push()` 都可用于导航，但 `push()` 总是添加新路由。'
                    },
                    // ---- 状态管理 ----
                    {
                        question: 'React Native 中，用于创建局部状态的是？',
                        options: ['useState Hook', 'this.state', 'useReducer', '以上都是'],
                        answer: 3,
                        explanation: '在函数组件中使用 `useState` 或 `useReducer`，类组件中使用 `this.state`。'
                    },
                    {
                        question: 'React Native 中，常用的全局状态管理库有哪些？',
                        options: ['Redux', 'MobX', 'Zustand', '以上都是'],
                        answer: 3,
                        explanation: 'Redux、MobX、Zustand、Recoil 等都是 React/React Native 常用的状态管理库。'
                    },
                    {
                        question: 'React Native 中，用于处理副作用的 Hook 是？',
                        options: ['useEffect', 'useState', 'useContext', 'useReducer'],
                        answer: 0,
                        explanation: '`useEffect` 用于在函数组件中执行副作用操作，如数据获取、订阅等。'
                    },
                    // ---- 原生模块与API ----
                    {
                        question: 'React Native 中，如何访问设备原生功能（如相机、地理位置）？',
                        options: [
                            '使用社区提供的原生模块或第三方库',
                            '直接编写原生代码',
                            '使用 Web API',
                            '无法访问'
                        ],
                        answer: 0,
                        explanation: 'React Native 通过原生模块桥接访问设备功能，通常使用社区维护的库如 `react-native-camera`、`@react-native-community/geolocation`。'
                    },
                    {
                        question: '用于处理异步存储（如本地键值对）的 API 是？',
                        options: ['AsyncStorage', 'LocalStorage', 'SessionStorage', 'SecureStore'],
                        answer: 0,
                        explanation: '`AsyncStorage` 是 React Native 提供的简单异步键值存储系统。'
                    },
                    {
                        question: 'React Native 中，用于显示原生弹窗的组件是？',
                        options: ['Alert', 'Modal', 'Dialog', 'Toast'],
                        answer: 0,
                        explanation: '`Alert.alert()` 方法用于显示原生警告弹窗。'
                    },
                    // ---- 网络与数据 ----
                    {
                        question: 'React Native 中，用于网络请求的内置 API 是什么？',
                        options: ['fetch', 'axios', 'XMLHttpRequest', '以上都是'],
                        answer: 3,
                        explanation: 'React Native 支持 `fetch`、`XMLHttpRequest`，也可以使用第三方库如 `axios`。'
                    },
                    {
                        question: 'React Native 中，如何处理 WebSocket 连接？',
                        options: [
                            '使用 WebSocket API 或第三方库',
                            '使用 HTTP 轮询',
                            '使用 Server-Sent Events',
                            '不支持'
                        ],
                        answer: 0,
                        explanation: 'React Native 支持 WebSocket API，可用于实时通信。'
                    },
                    // ---- 调试与工具 ----
                    {
                        question: 'React Native 开发者常用的调试工具有哪些？',
                        options: [
                            'React Native Debugger、Flipper、Chrome DevTools',
                            'Xcode Instruments',
                            'Android Studio Profiler',
                            'Visual Studio'
                        ],
                        answer: 0,
                        explanation: 'React Native 支持使用 Chrome DevTools 调试 JS，以及 Flipper 等专用调试工具。'
                    },
                    {
                        question: 'React Native 中，热重载（Hot Reloading）的作用是什么？',
                        options: [
                            '在不重启应用的情况下应用代码更改',
                            '重启整个应用',
                            '重新编译原生代码',
                            '重新安装应用'
                        ],
                        answer: 0,
                        explanation: '热重载允许你在保持应用状态的情况下实时查看代码更改效果，极大提升开发效率。'
                    },
                    {
                        question: 'Metro 打包器在 React Native 中的作用是什么？',
                        options: [
                            '打包 JavaScript 代码和资源',
                            '编译原生代码',
                            '运行模拟器',
                            '调试应用'
                        ],
                        answer: 0,
                        explanation: 'Metro 是 React Native 默认的 JavaScript 打包器，负责处理模块依赖和打包。'
                    },
                    // ---- 性能优化 ----
                    {
                        question: 'React Native 中，`FlatList` 性能优化的关键是什么？',
                        options: [
                            '虚拟化，只渲染可视区域内的项',
                            '使用更少的数据',
                            '减少列表高度',
                            '禁用动画'
                        ],
                        answer: 0,
                        explanation: '`FlatList` 通过虚拟化只渲染当前可见的项，并回收不可见的项，从而高效处理大型列表。'
                    },
                    {
                        question: '用于避免不必要的组件重渲染的 React 优化方法是？',
                        options: [
                            'React.memo 和 useMemo',
                            '减少组件数量',
                            '使用 shouldComponentUpdate',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: '`React.memo`、`useMemo`、`useCallback` 和 `shouldComponentUpdate` 都可以用于优化渲染性能。'
                    },
                    // ---- 平台差异 ----
                    {
                        question: 'React Native 中，如何针对不同平台编写特定代码？',
                        options: [
                            '使用 .ios.js 和 .android.js 文件扩展名',
                            '使用 Platform.select()',
                            '使用 Platform.OS 条件判断',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: 'React Native 提供多种方式处理平台差异：特定扩展名文件、`Platform.OS` 判断和 `Platform.select()`。'
                    },
                    {
                        question: '`Platform.OS` 在 iOS 上返回值是什么？',
                        options: ['"ios"', '"iOS"', '1', '"iPhone"'],
                        answer: 0,
                        explanation: '`Platform.OS` 在 iOS 设备上返回字符串 `"ios"`，在 Android 上返回 `"android"`。'
                    }
                ],
                resources: [
                    { name: 'React Native官方文档', url: 'https://reactnative.dev/docs/getting-started', type: 'docs' },
                    { name: 'React Native中文网', url: 'https://reactnative.cn/', type: 'docs' },
                    { name: 'bilibili - React Native教程', url: 'https://www.bilibili.com/video/BV1zv411B7nW', type: 'video' },
                ]
            },
            {
                id: 'uniapp',
                name: 'UniApp',
                icon: '🦄',
                description: '面向小程序与多端发布的跨端方案',
                priority: 'important',
                quizs: [
                    // ---- UniApp 基础概念 ----
                    {
                        question: 'UniApp 是什么？',
                        options: [
                            '使用 Vue.js 开发所有前端应用的跨平台框架',
                            '仅用于开发小程序的框架',
                            '后端开发框架',
                            '数据库管理工具'
                        ],
                        answer: 0,
                        explanation: 'UniApp 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到 iOS、Android、Web 以及各种小程序平台。'
                    },
                    {
                        question: 'UniApp 基于哪个前端框架？',
                        options: ['Vue.js', 'React', 'Angular', 'jQuery'],
                        answer: 0,
                        explanation: 'UniApp 基于 Vue.js 语法，支持 Vue 2 和 Vue 3。'
                    },
                    {
                        question: 'UniApp 的核心优势是什么？',
                        options: [
                            '一套代码，多端发布',
                            '性能最好',
                            '学习成本最低',
                            '社区最大'
                        ],
                        answer: 0,
                        explanation: 'UniApp 最大的优势是“多端复用”，一套代码可以编译到多个平台。'
                    },
                    {
                        question: 'UniApp 支持发布到以下哪些平台？',
                        options: [
                            'iOS、Android、H5、微信小程序等',
                            '仅微信小程序',
                            '仅 App',
                            '仅 H5'
                        ],
                        answer: 0,
                        explanation: 'UniApp 支持发布到 App（iOS/Android）、H5、微信小程序、支付宝小程序、百度小程序等多个平台。'
                    },
                    {
                        question: 'UniApp 的开发者是谁？',
                        options: ['DCloud', '阿里巴巴', '腾讯', '字节跳动'],
                        answer: 0,
                        explanation: 'UniApp 由数字天堂（DCloud）开发并维护。'
                    },
                    // ---- 项目结构 ----
                    {
                        question: 'UniApp 项目的页面存放目录通常是？',
                        options: ['/pages', '/views', '/components', '/src'],
                        answer: 0,
                        explanation: 'UniApp 默认将页面文件放在 `pages` 目录下。'
                    },
                    {
                        question: 'UniApp 的配置文件是什么？',
                        options: ['pages.json', 'manifest.json', 'uni.scss', '以上都是'],
                        answer: 3,
                        explanation: '`pages.json` 配置页面路由和窗口样式，`manifest.json` 配置应用信息，`uni.scss` 是全局样式变量。'
                    },
                    {
                        question: 'UniApp 中，`pages.json` 的主要作用是什么？',
                        options: [
                            '配置页面路由、窗口样式、tabBar 等',
                            '配置项目依赖',
                            '配置编译选项',
                            '配置应用名称'
                        ],
                        answer: 0,
                        explanation: '`pages.json` 是 UniApp 的全局配置文件，用于定义页面路径、窗口样式、tabBar 等。'
                    },
                    {
                        question: 'UniApp 中，`manifest.json` 的作用是什么？',
                        options: [
                            '配置应用名称、图标、权限等基本信息',
                            '配置页面路由',
                            '配置全局样式',
                            '配置组件'
                        ],
                        answer: 0,
                        explanation: '`manifest.json` 用于配置应用的名称、图标、版本、App 权限等基本信息。'
                    },
                    // ---- 页面与组件 ----
                    {
                        question: 'UniApp 页面文件由哪几部分组成？',
                        options: [
                            '<template>, <script>, <style>',
                            '<html>, <head>, <body>',
                            '<page>, <data>, <methods>',
                            '<view>, <logic>, <style>'
                        ],
                        answer: 0,
                        explanation: 'UniApp 的页面文件（.vue）由 `<template>`（模板）、`<script>`（逻辑）和 `<style>`（样式）三部分组成。'
                    },
                    {
                        question: 'UniApp 中，用于页面跳转的 API 是？',
                        options: [
                            'uni.navigateTo, uni.redirectTo, uni.switchTab',
                            'wx.navigateTo',
                            'router.push',
                            'location.href'
                        ],
                        answer: 0,
                        explanation: 'UniApp 提供了 `uni.navigateTo`、`uni.redirectTo`、`uni.switchTab` 等路由 API。'
                    },
                    {
                        question: 'UniApp 中，如何获取页面参数？',
                        options: [
                            '在 onLoad 生命周期中通过 options 获取',
                            '通过 this.params',
                            '通过 props',
                            '通过路由守卫'
                        ],
                        answer: 0,
                        explanation: '页面参数可以在 `onLoad` 生命周期函数的 `options` 参数中获取。'
                    },
                    {
                        question: 'UniApp 中，用于显示列表的基础组件是？',
                        options: ['view', 'scroll-view', 'list', 'ul'],
                        answer: 0,
                        explanation: '`<view>` 是最基本的容器组件，结合 `v-for` 可以渲染列表，`<scroll-view>` 用于可滚动区域。'
                    },
                    {
                        question: 'UniApp 中，用于条件编译的写法是？',
                        options: [
                            '// #ifdef 和 // #ifndef',
                            '#ifdef',
                            '@ifdef',
                            '<!-- #ifdef -->'
                        ],
                        answer: 0,
                        explanation: 'UniApp 使用条件编译指令 `// #ifdef` 和 `// #ifndef` 来针对不同平台编写特定代码。'
                    },
                    // ---- API 与能力 ----
                    {
                        question: 'UniApp 中，用于发起网络请求的 API 是？',
                        options: ['uni.request', 'wx.request', 'axios', 'fetch'],
                        answer: 0,
                        explanation: '`uni.request` 是 UniApp 中用于发起网络请求的统一 API。'
                    },
                    {
                        question: 'UniApp 中，用于显示提示框的 API 是？',
                        options: ['uni.showToast', 'uni.alert', 'uni.showModal', 'uni.showLoading'],
                        answer: 0,
                        explanation: '`uni.showToast` 用于显示消息提示框。'
                    },
                    {
                        question: 'UniApp 中，用于数据本地存储的 API 是？',
                        options: [
                            'uni.setStorageSync, uni.getStorageSync',
                            'localStorage.setItem',
                            'sessionStorage',
                            'AsyncStorage'
                        ],
                        answer: 0,
                        explanation: 'UniApp 提供了同步和异步的存储 API，如 `uni.setStorageSync` 和 `uni.setStorage`。'
                    },
                    {
                        question: 'UniApp 中，用于获取用户地理位置的 API 是？',
                        options: ['uni.getLocation', 'navigator.geolocation', 'wx.getLocation', 'location.get'],
                        answer: 0,
                        explanation: '`uni.getLocation` 是 UniApp 中获取地理位置的统一 API。'
                    },
                    // ---- 生命周期 ----
                    {
                        question: 'UniApp 页面生命周期中，页面加载时触发的钩子是？',
                        options: ['onLoad', 'onShow', 'onReady', 'onLaunch'],
                        answer: 0,
                        explanation: '`onLoad` 在页面加载时触发，只触发一次，可以获取页面参数。'
                    },
                    {
                        question: 'UniApp 页面生命周期中，页面显示时触发的钩子是？',
                        options: ['onShow', 'onLoad', 'onReady', 'onHide'],
                        answer: 0,
                        explanation: '`onShow` 在页面每次显示时触发，包括从后台切回等场景。'
                    },
                    {
                        question: 'UniApp 应用生命周期中，应用初始化时触发的钩子是？',
                        options: ['onLaunch', 'onShow', 'onHide', 'onError'],
                        answer: 0,
                        explanation: '`onLaunch` 在应用初始化时触发，全局只触发一次。'
                    },
                    // ---- 组件通信 ----
                    {
                        question: 'UniApp 中，父组件向子组件传递数据的方式是？',
                        options: ['props', 'emit', 'vuex', '事件总线'],
                        answer: 0,
                        explanation: '与 Vue 一样，父组件通过 `props` 向子组件传递数据。'
                    },
                    {
                        question: 'UniApp 中，子组件向父组件传递数据的方式是？',
                        options: ['$emit', 'props', 'vuex', 'ref'],
                        answer: 0,
                        explanation: '子组件通过 `$emit` 触发事件，父组件监听事件来接收数据。'
                    },
                    {
                        question: 'UniApp 中，非父子组件通信可以使用什么？',
                        options: ['事件总线或 Vuex', '只能通过 props', '只能通过 emit', '无法通信'],
                        answer: 0,
                        explanation: '可以使用全局事件总线（`uni.$on`/`uni.$emit`）或 Vuex 进行跨组件通信。'
                    },
                    // ---- 条件编译 ----
                    {
                        question: 'UniApp 中，用于标识仅在微信小程序平台编译的写法是？',
                        options: [
                            '// #ifdef MP-WEIXIN',
                            '// #ifdef WECHAT',
                            '// #ifdef MP',
                            '// #ifdef WEIXIN'
                        ],
                        answer: 0,
                        explanation: '`// #ifdef MP-WEIXIN` 表示这段代码只在微信小程序平台编译。'
                    },
                    {
                        question: 'UniApp 中，用于标识非 H5 平台的写法是？',
                        options: ['// #ifndef H5', '// #ifdef H5', '// #ifndef APP', '// #ifdef APP'],
                        answer: 0,
                        explanation: '`// #ifndef H5` 表示这段代码不在 H5 平台编译，即编译到其他所有平台。'
                    },
                    // ---- 性能优化 ----
                    {
                        question: 'UniApp 中，优化列表渲染性能应该使用？',
                        options: [
                            'v-for 配合 :key',
                            '使用更多的 v-if',
                            '减少列表项',
                            '使用纯文本'
                        ],
                        answer: 0,
                        explanation: '在 `v-for` 中使用 `:key` 可以帮助 Vue 更高效地识别和复用元素。'
                    },
                    {
                        question: 'UniApp 中，减少包体积的有效方法是？',
                        options: [
                            '使用分包加载',
                            '增加更多图片',
                            '使用更多第三方库',
                            '复制代码'
                        ],
                        answer: 0,
                        explanation: 'UniApp 支持小程序分包，可以将页面划分到不同包中，按需加载，减少主包大小。'
                    },
                    // ---- 平台差异 ----
                    {
                        question: 'UniApp 中，如何判断当前运行环境是 App 还是小程序？',
                        options: [
                            '使用 uni.getSystemInfoSync().platform 或 uni.getSystemInfoSync().AppPlatform',
                            '使用 process.env',
                            '使用 navigator.userAgent',
                            '无法判断'
                        ],
                        answer: 0,
                        explanation: '可以通过 `uni.getSystemInfoSync()` 获取系统信息，其中包含当前运行环境信息。'
                    },
                    {
                        question: 'UniApp 中，App 端和 H5 端的路由模式有何不同？',
                        options: [
                            'App 端默认是原生导航，H5 端是浏览器历史',
                            '完全相同',
                            'App 端不支持路由',
                            'H5 端不支持路由'
                        ],
                        answer: 0,
                        explanation: 'App 端通常使用原生导航，H5 端使用浏览器历史 API 进行路由。'
                    },
                    {
                        question: 'UniApp 中，关于样式的说法正确的是？',
                        options: [
                            '支持 rpx 作为响应式单位',
                            '只能使用 px',
                            '不支持 CSS 预处理器',
                            '不支持 scoped'
                        ],
                        answer: 0,
                        explanation: 'UniApp 支持 rpx（响应式像素）作为尺寸单位，可以很好地适应不同屏幕。'
                    }
                ],
                resources: [
                    { name: 'UniApp官方文档', url: 'https://uniapp.dcloud.net.cn/', type: 'docs' },
                    { name: 'UniApp教程', url: 'https://uniapp.dcloud.net.cn/resource', type: 'tutorial' },
                    { name: 'bilibili - UniApp教程', url: 'https://www.bilibili.com/video/BV1BJ411W7p7', type: 'video' },
                ]
            },
            {
                id: 'ui_design',
                name: '移动端 UI 设计',
                icon: '🎨',
                description: '界面规范、组件层级与交互体验',
                priority: 'core',
                quizs: [
                    // ---- 设计基础 ----
                    {
                        question: '什么是 Material Design？',
                        options: [
                            'Google 推出的设计语言，基于物理和纸张的隐喻',
                            'Apple 的设计规范',
                            'Microsoft 的设计语言',
                            '开源的设计系统'
                        ],
                        answer: 0,
                        explanation: 'Material Design 是 Google 在 2014 年推出的设计语言，强调纸张和墨水的物理隐喻。'
                    },
                    {
                        question: '什么是 Human Interface Guidelines (HIG)？',
                        options: [
                            'Apple 的官方设计指南',
                            'Google 的设计规范',
                            'Android 开发文档',
                            'iOS 编程指南'
                        ],
                        answer: 0,
                        explanation: 'HIG 是 Apple 为 iOS、macOS、watchOS 等平台提供的详细设计指南。'
                    },
                    {
                        question: '移动端设计中最常用的布局单位是什么？',
                        options: ['dp/pt', 'px', 'cm', 'em'],
                        answer: 0,
                        explanation: 'Android 使用 dp（密度无关像素），iOS 使用 pt（点），都是与物理像素无关的逻辑单位。'
                    },
                    {
                        question: '响应式布局在移动端的核心思想是什么？',
                        options: [
                            '设计适应不同屏幕尺寸和方向的界面',
                            '固定所有元素尺寸',
                            '只适配一种屏幕',
                            '使用绝对定位'
                        ],
                        answer: 0,
                        explanation: '移动端响应式布局需要考虑不同设备尺寸和横竖屏切换，确保界面能自适应。'
                    },
                    // ---- iOS 设计规范 (HIG) ----
                    {
                        question: 'iOS HIG 中，建议的点击目标最小尺寸是多少？',
                        options: ['44pt x 44pt', '30pt x 30pt', '50px x 50px', '1cm x 1cm'],
                        answer: 0,
                        explanation: 'Apple 建议所有可交互元素的最小点击区域为 44pt × 44pt，确保易用性。'
                    },
                    {
                        question: 'iOS 中，用于返回上一级的标准导航模式是？',
                        options: ['导航栏返回按钮', '底部导航栏', '侧滑返回', 'A 和 C'],
                        answer: 3,
                        explanation: 'iOS 通常使用导航栏左上角的返回按钮和从屏幕左侧边缘右滑的手势返回。'
                    },
                    {
                        question: 'iOS 的 Tab Bar 通常位于屏幕什么位置？',
                        options: ['底部', '顶部', '左侧', '右侧'],
                        answer: 0,
                        explanation: 'iOS 的 Tab Bar（标签栏）通常位于屏幕底部，用于在不同模块间切换。'
                    },
                    {
                        question: 'iOS 中，用于显示重要信息的模态视图叫什么？',
                        options: ['Alert', 'Sheet', 'Popover', 'Action Sheet'],
                        answer: 0,
                        explanation: '`Alert`（警告框）用于显示重要信息，需要用户确认。'
                    },
                    {
                        question: 'iOS HIG 中，建议的字体使用原则是什么？',
                        options: [
                            '使用动态类型，支持用户字体大小设置',
                            '使用固定字体大小',
                            '使用自定义字体',
                            '所有文字加粗'
                        ],
                        answer: 0,
                        explanation: 'iOS 鼓励使用动态类型（Dynamic Type），让系统根据用户设置调整字体大小。'
                    },
                    // ---- Android 设计规范 (Material Design) ----
                    {
                        question: 'Material Design 中，组件的视觉层级主要靠什么体现？',
                        options: [
                            '海拔高度（elevation）和阴影',
                            '颜色鲜艳度',
                            '动画效果',
                            '边框粗细'
                        ],
                        answer: 0,
                        explanation: 'Material Design 使用海拔高度（elevation）产生阴影，表现元素在 Z 轴上的层次关系。'
                    },
                    {
                        question: 'Material Design 中，FAB（Floating Action Button）代表什么？',
                        options: [
                            '悬浮操作按钮，用于主要操作',
                            '底部导航按钮',
                            '快速访问按钮',
                            '浮动广告按钮'
                        ],
                        answer: 0,
                        explanation: 'FAB 是一个圆形的悬浮按钮，用于执行界面上的主要操作。'
                    },
                    {
                        question: 'Material Design 中，推荐的点击反馈效果是什么？',
                        options: ['水波纹（Ripple）', '闪烁', '变色', '无反馈'],
                        answer: 0,
                        explanation: 'Material Design 使用水波纹（Ripple）效果作为触摸反馈。'
                    },
                    {
                        question: 'Android 中，用于显示应用标题和操作的顶部栏叫什么？',
                        options: ['App Bar', 'Toolbar', 'Action Bar', '以上都是'],
                        answer: 3,
                        explanation: '在 Material Design 中通常称为 App Bar，在代码中常用 Toolbar 实现。'
                    },
                    {
                        question: 'Material Design 中，卡片（Card）组件适用于什么场景？',
                        options: [
                            '包含相关内容集合的容器',
                            '导航菜单',
                            '表单输入',
                            '广告展示'
                        ],
                        answer: 0,
                        explanation: '卡片用于包含相关内容，如图文、标题、操作按钮等，通常有圆角和阴影。'
                    },
                    // ---- 移动端设计原则 ----
                    {
                        question: '移动端设计中的“拇指区域”理论是指什么？',
                        options: [
                            '将常用操作放在手指自然覆盖的区域内',
                            '按钮必须设计成拇指形状',
                            '所有操作都放在顶部',
                            '只能使用拇指操作'
                        ],
                        answer: 0,
                        explanation: '拇指区域理论建议将常用操作放在用户手持设备时拇指能够轻松触及的区域。'
                    },
                    {
                        question: '什么是“汉堡菜单”？',
                        options: [
                            '隐藏导航菜单的图标（三条横线）',
                            '一种食品应用',
                            '汉堡店的菜单设计',
                            '复杂的菜单结构'
                        ],
                        answer: 0,
                        explanation: '汉堡菜单图标（☰）用于隐藏导航选项，点击后展开侧边栏菜单。'
                    },
                    {
                        question: '移动端设计中，为什么要避免使用过多的模态弹窗？',
                        options: [
                            '打断用户操作，影响体验',
                            '开发成本高',
                            '设计困难',
                            '加载速度慢'
                        ],
                        answer: 0,
                        explanation: '模态弹窗会强制用户响应，过度使用会打断用户流程，降低体验。'
                    },
                    {
                        question: '什么是“空状态”（Empty State）设计？',
                        options: [
                            '当列表或内容为空时的界面设计',
                            '空白页面',
                            '加载中状态',
                            '错误页面'
                        ],
                        answer: 0,
                        explanation: '空状态指在没有数据或内容时显示的界面，应提供指引或引导用户操作。'
                    },
                    {
                        question: '移动端表单设计中，最佳实践是什么？',
                        options: [
                            '减少输入项，提供实时验证',
                            '使用尽可能多的输入项',
                            '所有字段必须填写',
                            '提交后才显示错误'
                        ],
                        answer: 0,
                        explanation: '表单应尽可能减少输入项，并提供实时验证反馈，减少用户负担。'
                    },
                    // ---- 导航设计 ----
                    {
                        question: '底部导航栏（Bottom Navigation）适用于什么场景？',
                        options: [
                            '3-5个同等重要的顶级页面之间切换',
                            '深层级页面导航',
                            '设置页面',
                            '无限级页面'
                        ],
                        answer: 0,
                        explanation: '底部导航适用于核心功能切换，建议不超过5个选项。'
                    },
                    {
                        question: '导航抽屉（Navigation Drawer）通常隐藏在哪里？',
                        options: ['屏幕左侧边缘', '屏幕底部', '屏幕顶部', '屏幕右侧边缘'],
                        answer: 0,
                        explanation: '导航抽屉通常从屏幕左侧滑出，用于放置扩展导航选项。'
                    },
                    {
                        question: '标签页（Tabs）在移动端通常放在什么位置？',
                        options: ['顶部', '底部', '左侧', '右侧'],
                        answer: 0,
                        explanation: '在 Android 中，标签页通常位于顶部；iOS 中有时也使用顶部分段控件。'
                    },
                    // ---- 色彩与排版 ----
                    {
                        question: '移动端设计中，如何确保文字可读性？',
                        options: [
                            '保证足够的颜色对比度',
                            '使用鲜艳的颜色',
                            '使用小字号',
                            '使用多种字体'
                        ],
                        answer: 0,
                        explanation: '文字与背景的对比度需要足够高，WCAG 建议至少 4.5:1 的对比度。'
                    },
                    {
                        question: '主色（Primary Color）在应用中的作用是什么？',
                        options: [
                            '体现品牌核心，用于主要元素',
                            '用于所有地方',
                            '仅用于背景',
                            '仅用于文字'
                        ],
                        answer: 0,
                        explanation: '主色用于关键 UI 元素如 App Bar、主要按钮、选中状态等，传达品牌形象。'
                    },
                    {
                        question: '移动端设计中，推荐的字体数量是多少？',
                        options: ['1-2种字体', '5-6种字体', '越多越好', '没有限制'],
                        answer: 0,
                        explanation: '为保持一致性，通常使用1-2种字体家族，通过字重、字号来区分层级。'
                    },
                    // ---- 图标与图片 ----
                    {
                        question: '移动端应用图标设计的基本原则是什么？',
                        options: [
                            '简洁、可识别、在不同背景上清晰',
                            '复杂细节',
                            '使用照片',
                            '使用极细线条'
                        ],
                        answer: 0,
                        explanation: '应用图标应在小尺寸下仍然清晰可辨，体现品牌核心。'
                    },
                    {
                        question: '什么是 SF Symbols？',
                        options: [
                            'Apple 提供的图标库',
                            'Google 的图标库',
                            '字体格式',
                            '动画库'
                        ],
                        answer: 0,
                        explanation: 'SF Symbols 是 Apple 提供的一套超过 5000 个图标的图标库，与 San Francisco 字体无缝集成。'
                    },
                    {
                        question: 'Material Icons 是什么？',
                        options: [
                            'Google 提供的开源图标集',
                            'Apple 的图标集',
                            '字体图标',
                            '动画图标'
                        ],
                        answer: 0,
                        explanation: 'Material Icons 是 Google 为 Material Design 提供的一套精美图标。'
                    },
                    // ---- 无障碍设计 ----
                    {
                        question: '移动端无障碍设计（Accessibility）的重要性是什么？',
                        options: [
                            '让有障碍的用户也能使用产品',
                            '增加开发成本',
                            '不需要考虑',
                            '只适用于老年用户'
                        ],
                        answer: 0,
                        explanation: '无障碍设计确保所有用户（包括视障、听障等）都能平等地使用产品。'
                    },
                    {
                        question: 'VoiceOver（iOS）和 TalkBack（Android）是什么？',
                        options: [
                            '屏幕阅读器，帮助视障用户操作',
                            '语音助手',
                            '翻译工具',
                            '语音输入'
                        ],
                        answer: 0,
                        explanation: '它们是为视障用户设计的屏幕阅读器，通过语音描述屏幕内容。'
                    },
                    {
                        question: '设计中对所有可交互元素提供标签（Label）的目的是什么？',
                        options: [
                            '让屏幕阅读器能读出元素的功能',
                            '让界面更好看',
                            '用于调试',
                            '用于搜索'
                        ],
                        answer: 0,
                        explanation: '为元素提供明确的标签，屏幕阅读器才能向用户准确描述该元素的作用。'
                    },
                    // ---- 原型与工具 ----
                    {
                        question: 'Figma 是什么？',
                        options: [
                            '基于浏览器的界面设计工具',
                            '代码编辑器',
                            '数据库管理工具',
                            '项目管理软件'
                        ],
                        answer: 0,
                        explanation: 'Figma 是一个流行的在线协作界面设计工具，用于创建原型和设计稿。'
                    },
                    {
                        question: 'Sketch 是什么？',
                        options: [
                            'macOS 上的界面设计工具',
                            'Windows 设计工具',
                            '代码编辑器',
                            '动画制作软件'
                        ],
                        answer: 0,
                        explanation: 'Sketch 是 macOS 上一款流行的矢量设计工具，专注于 UI/UX 设计。'
                    },
                    {
                        question: '为什么要在开发前制作可交互原型？',
                        options: [
                            '验证设计方案，发现可用性问题',
                            '直接作为最终产品',
                            '增加工作量',
                            '不需要原型'
                        ],
                        answer: 0,
                        explanation: '可交互原型可以帮助团队在开发前验证用户流程和交互设计，降低修改成本。'
                    }
                ],
                resources: [
                    { name: 'Material Design', url: 'https://material.io/design', type: 'docs' },
                    { name: 'Human Interface Guidelines', url: 'https://developer.apple.com/design/human-interface-guidelines/', type: 'docs' },
                    { name: '移动端设计规范', url: 'https://www.yuque.com/uikit/design', type: 'tutorial' },
                ]
            },
        ]
    },
    {
        id: 'data',
        name: '数据分析',
        icon: '📊',
        category: 'data',
        description: '围绕数据清洗、分析、可视化输出业务洞察',
        skills: [
            {
                id: 'python_data',
                name: 'Python 数据分析',
                icon: '🐍',
                description: '数据分析工作流中的脚本与基础库',
                priority: 'core',
                quizs: [
                    // ---- Python 数据分析基础 ----
                    {
                        question: 'Python 中用于数据分析的核心库有哪些？',
                        options: [
                            'NumPy, Pandas, Matplotlib',
                            'Django, Flask',
                            'Requests, BeautifulSoup',
                            'TensorFlow, PyTorch'
                        ],
                        answer: 0,
                        explanation: 'NumPy（数值计算）、Pandas（数据处理）和 Matplotlib（可视化）是Python数据分析的三大核心库。'
                    },
                    {
                        question: 'Python 中，用于科学计算的基础库是？',
                        options: ['NumPy', 'Pandas', 'Matplotlib', 'SciPy'],
                        answer: 0,
                        explanation: 'NumPy 是Python科学计算的基础库，提供了多维数组对象和各种数学函数。'
                    },
                    {
                        question: 'Python 数据分析中，常用的交互式开发环境是？',
                        options: ['Jupyter Notebook', 'PyCharm', 'VS Code', 'IDLE'],
                        answer: 0,
                        explanation: 'Jupyter Notebook 提供了交互式编程环境，支持代码、文本、可视化结果的混合展示，非常适合数据分析工作流。'
                    },
                    {
                        question: '在 Python 中，用于读取 CSV 文件的内置模块是？',
                        options: ['csv', 'pandas', 'numpy', 'json'],
                        answer: 0,
                        explanation: 'Python 内置的 `csv` 模块可以读取和写入 CSV 文件，当然 Pandas 的 `read_csv()` 更常用。'
                    },
                    {
                        question: 'Python 中，用于正则表达式操作的模块是？',
                        options: ['re', 'regex', 'reg', 'regexp'],
                        answer: 0,
                        explanation: '`re` 模块是Python中用于正则表达式操作的标准库。'
                    },
                    // ---- 数据类型与结构 ----
                    {
                        question: 'Python 中，列表（list）和元组（tuple）的主要区别是什么？',
                        options: [
                            '列表可变，元组不可变',
                            '列表不可变，元组可变',
                            '列表有序，元组无序',
                            '没有区别'
                        ],
                        answer: 0,
                        explanation: '列表（list）是可变的，可以增删改元素；元组（tuple）一旦创建就不可变。'
                    },
                    {
                        question: 'Python 中，用于创建集合（set）的语法是？',
                        options: ['{}', '[]', '()', 'set()'],
                        answer: 0,
                        explanation: '可以使用花括号 `{}` 创建集合，但空集合必须使用 `set()`，因为 `{}` 创建的是空字典。'
                    },
                    {
                        question: 'Python 中，字典（dict）的特点是？',
                        options: [
                            '键值对集合，键必须唯一',
                            '有序的序列',
                            '元素不可重复',
                            '只能包含数字'
                        ],
                        answer: 0,
                        explanation: '字典是键值对的集合，键必须是唯一的且不可变。'
                    },
                    {
                        question: '列表推导式（list comprehension）的作用是？',
                        options: [
                            '简洁地创建列表',
                            '推导数学公式',
                            '列表排序',
                            '列表复制'
                        ],
                        answer: 0,
                        explanation: '列表推导式提供了一种简洁的方式来创建列表，例如 `[x**2 for x in range(10)]`。'
                    },
                    {
                        question: 'Python 中，`enumerate()` 函数的用途是什么？',
                        options: [
                            '在遍历时同时获取索引和值',
                            '计数元素',
                            '枚举类型定义',
                            '生成随机数'
                        ],
                        answer: 0,
                        explanation: '`enumerate()` 函数在遍历可迭代对象时返回索引和值对。'
                    },
                    // ---- 函数与模块 ----
                    {
                        question: 'Python 中，定义匿名函数的关键字是？',
                        options: ['lambda', 'def', 'fn', 'function'],
                        answer: 0,
                        explanation: '`lambda` 关键字用于定义简单的匿名函数。'
                    },
                    {
                        question: 'Python 中，`map()` 函数的作用是？',
                        options: [
                            '对可迭代对象的每个元素应用函数',
                            '映射数据类型',
                            '绘制地图',
                            '创建字典'
                        ],
                        answer: 0,
                        explanation: '`map(function, iterable)` 将函数应用于可迭代对象的每个元素，返回一个迭代器。'
                    },
                    {
                        question: 'Python 中，`filter()` 函数的作用是？',
                        options: [
                            '根据条件过滤可迭代对象',
                            '过滤数据',
                            '筛选文件',
                            '清洗数据'
                        ],
                        answer: 0,
                        explanation: '`filter(function, iterable)` 返回一个迭代器，包含使函数返回 True 的元素。'
                    },
                    {
                        question: '`functools` 模块中的 `reduce()` 函数的作用是？',
                        options: [
                            '对序列进行累积计算',
                            '减少元素',
                            '降维',
                            '压缩数据'
                        ],
                        answer: 0,
                        explanation: '`reduce()` 将两个参数的函数累积地应用到序列的元素上，将序列减少为单个值。'
                    },
                    // ---- 文件操作 ----
                    {
                        question: 'Python 中，打开文件的正确语法是？',
                        options: [
                            'open(filename, mode)',
                            'file.open(filename, mode)',
                            'File(filename, mode)',
                            'open.file(filename, mode)'
                        ],
                        answer: 0,
                        explanation: '使用内置函数 `open()` 打开文件，指定文件名和模式（如 `"r"` 读，`"w"` 写）。'
                    },
                    {
                        question: '使用 `with` 语句打开文件的好处是？',
                        options: [
                            '自动关闭文件，即使发生异常',
                            '提高读取速度',
                            '只能读取文本文件',
                            '不需要指定文件名'
                        ],
                        answer: 0,
                        explanation: '`with` 语句会确保文件在使用后被正确关闭，无论是否发生异常。'
                    },
                    {
                        question: 'Python 中，用于读取 JSON 文件的标准库是？',
                        options: ['json', 'pickle', 'csv', 'xml'],
                        answer: 0,
                        explanation: '`json` 模块用于处理 JSON 数据的编码和解码。'
                    },
                    // ---- 数据分析常用操作 ----
                    {
                        question: 'Python 中，如何获取列表 `data` 的长度？',
                        options: ['len(data)', 'data.length', 'size(data)', 'data.size()'],
                        answer: 0,
                        explanation: '使用内置函数 `len()` 获取列表、元组、字符串等对象的长度。'
                    },
                    {
                        question: 'Python 中，用于对列表进行排序的方法是？',
                        options: [
                            'list.sort() 和 sorted(list)',
                            'list.order()',
                            'sort.list()',
                            'list.arrange()'
                        ],
                        answer: 0,
                        explanation: '`list.sort()` 原地排序列表，`sorted(list)` 返回排序后的新列表。'
                    },
                    {
                        question: 'Python 中，如何将一个字符串分割成列表？',
                        options: [
                            '使用 split() 方法',
                            '使用 join() 方法',
                            '使用 divide() 方法',
                            '使用 cut() 方法'
                        ],
                        answer: 0,
                        explanation: '字符串的 `split()` 方法根据分隔符将字符串分割成列表。'
                    },
                    {
                        question: 'Python 中，用于字符串格式化的现代方法是？',
                        options: [
                            'f-string (f"{variable}")',
                            '% 格式化',
                            'str.format()',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: 'Python 支持多种字符串格式化方式，f-string 是 Python 3.6+ 引入的简洁语法。'
                    },
                    {
                        question: 'Python 中，用于数学运算的常用模块是？',
                        options: ['math', 'cmath', 'statistics', 'random'],
                        answer: 0,
                        explanation: '`math` 模块提供数学常数和基本数学函数。'
                    },
                    // ---- 错误与异常处理 ----
                    {
                        question: 'Python 中，捕获异常的基本语法是？',
                        options: ['try-except', 'try-catch', 'catch-error', 'exception-handle'],
                        answer: 0,
                        explanation: 'Python 使用 `try-except` 块来捕获和处理异常。'
                    },
                    {
                        question: '`finally` 子句在异常处理中的作用是？',
                        options: [
                            '无论是否发生异常都会执行',
                            '只在异常发生时执行',
                            '只在没有异常时执行',
                            '在 except 之前执行'
                        ],
                        answer: 0,
                        explanation: '`finally` 子句中的代码无论是否发生异常都会执行，通常用于清理资源。'
                    },
                    {
                        question: 'Python 中，用于手动抛出异常的关键字是？',
                        options: ['raise', 'throw', 'except', 'assert'],
                        answer: 0,
                        explanation: '使用 `raise` 关键字手动抛出一个异常。'
                    },
                    // ---- 数据分析工作流 ----
                    {
                        question: '数据分析的一般流程包括哪些步骤？',
                        options: [
                            '数据获取、清洗、探索、建模、可视化',
                            '数据存储、备份、恢复',
                            '前端开发、后端开发、测试',
                            '需求分析、设计、编码'
                        ],
                        answer: 0,
                        explanation: '数据分析典型流程包括数据收集、数据清洗、探索性分析、特征工程、建模和结果可视化。'
                    },
                    {
                        question: '数据清洗通常包括哪些操作？',
                        options: [
                            '处理缺失值、去重、格式转换',
                            '数据加密',
                            '数据压缩',
                            '数据备份'
                        ],
                        answer: 0,
                        explanation: '数据清洗是处理原始数据中的问题，如缺失值、重复值、格式不一致、异常值等。'
                    },
                    {
                        question: '探索性数据分析（EDA）的目的是？',
                        options: [
                            '理解数据分布、发现模式和关系',
                            '建立预测模型',
                            '数据存储',
                            '数据可视化'
                        ],
                        answer: 0,
                        explanation: 'EDA 通过统计摘要和可视化来理解数据特征、发现模式、识别异常值，为后续分析提供基础。'
                    },
                    // ---- 数据来源与格式 ----
                    {
                        question: '常见的结构化数据格式有哪些？',
                        options: [
                            'CSV, Excel, SQL 数据库',
                            '图像, 音频, 视频',
                            'JSON, XML',
                            '纯文本'
                        ],
                        answer: 0,
                        explanation: '结构化数据通常存储在表格中，常见格式包括 CSV、Excel 文件和关系型数据库。'
                    },
                    {
                        question: '常见的半结构化数据格式有哪些？',
                        options: [
                            'JSON, XML',
                            'CSV, Excel',
                            '数据库表',
                            '图像文件'
                        ],
                        answer: 0,
                        explanation: 'JSON 和 XML 是常见的半结构化数据格式，包含标签或字段来描述数据。'
                    },
                    {
                        question: 'API 在数据分析中的作用是什么？',
                        options: [
                            '从网络服务获取数据',
                            '数据可视化',
                            '数据存储',
                            '模型训练'
                        ],
                        answer: 0,
                        explanation: 'API（应用程序编程接口）允许程序之间交互，常用于从 Web 服务获取数据。'
                    },
                    // ---- 基础统计学 ----
                    {
                        question: '描述性统计主要包括哪些指标？',
                        options: [
                            '均值、中位数、标准差',
                            't检验、卡方检验',
                            '回归系数',
                            '聚类结果'
                        ],
                        answer: 0,
                        explanation: '描述性统计用于总结数据，包括集中趋势（均值、中位数）和离散程度（方差、标准差）等。'
                    },
                    {
                        question: '均值（mean）和中位数（median）的区别是什么？',
                        options: [
                            '均值受极端值影响大，中位数不受',
                            '中位数受极端值影响大，均值不受',
                            '两者相同',
                            '没有区别'
                        ],
                        answer: 0,
                        explanation: '均值是所有值的平均值，容易受异常值影响；中位数是将数据排序后的中间值，对异常值不敏感。'
                    },
                    {
                        question: '标准差（standard deviation）衡量的是什么？',
                        options: [
                            '数据的离散程度',
                            '数据的中心位置',
                            '数据分布的形状',
                            '数据的相关性'
                        ],
                        answer: 0,
                        explanation: '标准差是方差的平方根，衡量数据点相对于均值的离散程度。'
                    },
                    {
                        question: '相关系数（correlation coefficient）衡量什么？',
                        options: [
                            '两个变量之间的线性关系强度和方向',
                            '数据的离散程度',
                            '数据的中心位置',
                            '数据的概率分布'
                        ],
                        answer: 0,
                        explanation: '相关系数（如 Pearson 相关系数）衡量两个变量之间线性关系的强度和方向，范围在 -1 到 1 之间。'
                    }
                ],
                resources: [
                    { name: 'Python官方文档', url: 'https://docs.python.org/zh-cn/3/', type: 'docs' },
                    { name: 'Python数据分析教程', url: 'https://www.bilibili.com/video/BV1rW4y1v7gR', type: 'video' },
                    { name: '利用Python进行数据分析', url: 'https://www.oreilly.com/library/view/python-for-data/9781491957653/', type: 'book' },
                ]
            },
            {
                id: 'sql',
                name: 'SQL',
                icon: '🗃️',
                description: '查询、聚合与数据分析必备语言',
                priority: 'core',
                quizs: [
                    // ---- SQL 基础概念 ----
                    {
                        question: 'SQL 是什么的缩写？',
                        options: [
                            'Structured Query Language',
                            'Simple Query Language',
                            'Standard Query Language',
                            'Server Query Language'
                        ],
                        answer: 0,
                        explanation: 'SQL 是 Structured Query Language（结构化查询语言）的缩写，用于管理关系型数据库。'
                    },
                    {
                        question: '以下哪个是 SQL 的 DML（数据操作语言）语句？',
                        options: ['SELECT', 'CREATE', 'ALTER', 'DROP'],
                        answer: 0,
                        explanation: 'DML 包括 SELECT、INSERT、UPDATE、DELETE 等操作数据的语句。'
                    },
                    {
                        question: '以下哪个是 SQL 的 DDL（数据定义语言）语句？',
                        options: ['CREATE TABLE', 'SELECT', 'INSERT', 'DELETE'],
                        answer: 0,
                        explanation: 'DDL 包括 CREATE、ALTER、DROP 等定义或修改数据库结构的语句。'
                    },
                    {
                        question: '用于从数据库中检索数据的 SQL 语句是？',
                        options: ['SELECT', 'GET', 'FETCH', 'EXTRACT'],
                        answer: 0,
                        explanation: '`SELECT` 语句用于从数据库表中查询数据。'
                    },
                    {
                        question: '用于向数据库表中插入新数据的 SQL 语句是？',
                        options: ['INSERT INTO', 'ADD RECORD', 'INSERT NEW', 'ADD INTO'],
                        answer: 0,
                        explanation: '`INSERT INTO` 语句用于向表中插入新的行。'
                    },
                    // ---- 查询基础 ----
                    {
                        question: '用于选择表中所有列的 SQL 语句是？',
                        options: ['SELECT * FROM table', 'SELECT ALL FROM table', 'SELECT COLUMNS FROM table', 'SELECT table.*'],
                        answer: 0,
                        explanation: '`SELECT *` 表示选择表中的所有列。'
                    },
                    {
                        question: '用于对查询结果进行排序的 SQL 子句是？',
                        options: ['ORDER BY', 'SORT BY', 'GROUP BY', 'ARRANGE BY'],
                        answer: 0,
                        explanation: '`ORDER BY` 子句用于对结果集按照一列或多列进行排序，默认升序（ASC）。'
                    },
                    {
                        question: '用于限制返回行数的 SQL 子句是？',
                        options: ['LIMIT', 'TOP', 'ROWNUM', 'OFFSET'],
                        answer: 0,
                        explanation: '`LIMIT` 子句（MySQL、PostgreSQL）用于限制返回的行数，SQL Server 使用 `TOP`，Oracle 使用 `ROWNUM`。'
                    },
                    {
                        question: 'SQL 中，用于去除重复行的关键字是？',
                        options: ['DISTINCT', 'UNIQUE', 'DIFFERENT', 'SINGLE'],
                        answer: 0,
                        explanation: '`SELECT DISTINCT` 返回唯一不同的值。'
                    },
                    {
                        question: '用于计算行数的聚合函数是？',
                        options: ['COUNT()', 'SUM()', 'AVG()', 'TOTAL()'],
                        answer: 0,
                        explanation: '`COUNT()` 函数返回匹配指定条件的行数。'
                    },
                    // ---- 条件过滤 ----
                    {
                        question: '用于在查询中指定条件的 SQL 子句是？',
                        options: ['WHERE', 'HAVING', 'FILTER', 'CONDITION'],
                        answer: 0,
                        explanation: '`WHERE` 子句用于指定查询条件，过滤返回的记录。'
                    },
                    {
                        question: '以下哪个 SQL 操作符用于模糊匹配？',
                        options: ['LIKE', 'MATCH', 'SIMILAR', 'APPROX'],
                        answer: 0,
                        explanation: '`LIKE` 操作符与通配符（`%` 和 `_`）一起使用，进行模式匹配。'
                    },
                    {
                        question: '`%` 通配符在 LIKE 语句中表示什么？',
                        options: ['零个或多个字符', '单个字符', '数字', '任意字符'],
                        answer: 0,
                        explanation: '`%` 匹配任意数量的字符（包括零个字符）。'
                    },
                    {
                        question: '`_` 通配符在 LIKE 语句中表示什么？',
                        options: ['单个字符', '零个或多个字符', '数字', '字母'],
                        answer: 0,
                        explanation: '`_` 匹配单个字符。'
                    },
                    {
                        question: '用于指定多个可能值的操作符是？',
                        options: ['IN', 'BETWEEN', 'ANY', 'SOME'],
                        answer: 0,
                        explanation: '`IN` 操作符允许在 WHERE 子句中指定多个可能的值。'
                    },
                    // ---- 聚合与分组 ----
                    {
                        question: '用于计算总和的聚合函数是？',
                        options: ['SUM()', 'TOTAL()', 'ADD()', 'COUNT()'],
                        answer: 0,
                        explanation: '`SUM()` 函数返回数值列的总和。'
                    },
                    {
                        question: '用于计算平均值的聚合函数是？',
                        options: ['AVG()', 'MEAN()', 'AVERAGE()', 'AVG()'],
                        answer: 0,
                        explanation: '`AVG()` 函数返回数值列的平均值。'
                    },
                    {
                        question: '用于对结果集进行分组的 SQL 子句是？',
                        options: ['GROUP BY', 'PARTITION BY', 'GROUP', 'ORDER BY'],
                        answer: 0,
                        explanation: '`GROUP BY` 子句将结果集按照一个或多个列进行分组，通常与聚合函数一起使用。'
                    },
                    {
                        question: '在 GROUP BY 之后，用于过滤分组结果的条件子句是？',
                        options: ['HAVING', 'WHERE', 'FILTER', 'CONDITION'],
                        answer: 0,
                        explanation: '`HAVING` 子句用于对分组后的结果进行过滤，类似于 WHERE 但用于聚合后。'
                    },
                    {
                        question: '以下查询中，哪个可能正确？',
                        options: [
                            'SELECT department, COUNT(*) FROM employees GROUP BY department',
                            'SELECT department, name, COUNT(*) FROM employees GROUP BY department',
                            'SELECT COUNT(*) FROM employees GROUP BY department',
                            'SELECT department FROM employees GROUP BY department'
                        ],
                        answer: 0,
                        explanation: '在 GROUP BY 查询中，SELECT 中的列要么是分组列，要么是聚合函数。选项 0 正确。'
                    },
                    // ---- 多表查询 ----
                    {
                        question: 'SQL 中，用于从两个或多个表中根据相关列组合行的子句是？',
                        options: ['JOIN', 'MERGE', 'COMBINE', 'UNION'],
                        answer: 0,
                        explanation: '`JOIN` 子句用于根据两个或多个表之间的相关列，将它们的行组合起来。'
                    },
                    {
                        question: 'INNER JOIN 返回什么？',
                        options: [
                            '两个表中匹配的行',
                            '左表所有行',
                            '右表所有行',
                            '两个表的所有行'
                        ],
                        answer: 0,
                        explanation: 'INNER JOIN 只返回两个表中连接条件匹配的行。'
                    },
                    {
                        question: 'LEFT JOIN 返回什么？',
                        options: [
                            '左表所有行，以及右表匹配的行',
                            '右表所有行',
                            '匹配的行',
                            '所有行的笛卡尔积'
                        ],
                        answer: 0,
                        explanation: 'LEFT JOIN（左连接）返回左表的所有行，即使右表中没有匹配，右表不匹配的列为 NULL。'
                    },
                    {
                        question: '用于合并两个查询结果集的操作符是？',
                        options: ['UNION', 'JOIN', 'MERGE', 'COMBINE'],
                        answer: 0,
                        explanation: '`UNION` 操作符合并两个或多个 SELECT 语句的结果集，默认去重。'
                    },
                    {
                        question: 'UNION 和 UNION ALL 的区别是什么？',
                        options: [
                            'UNION 去重，UNION ALL 不去重',
                            'UNION ALL 去重，UNION 不去重',
                            'UNION 排序，UNION ALL 不排序',
                            '没有区别'
                        ],
                        answer: 0,
                        explanation: 'UNION 会自动去除重复行，UNION ALL 返回所有行，包括重复的。'
                    },
                    // ---- 子查询 ----
                    {
                        question: '子查询（subquery）是什么？',
                        options: [
                            '嵌套在其他 SQL 语句中的查询',
                            '查询的子集',
                            '次要查询',
                            '快速查询'
                        ],
                        answer: 0,
                        explanation: '子查询是嵌套在 SELECT、INSERT、UPDATE 或 DELETE 语句内部的查询。'
                    },
                    {
                        question: '关联子查询（correlated subquery）的特点是什么？',
                        options: [
                            '引用外部查询的列',
                            '独立于外部查询',
                            '只执行一次',
                            '不能使用聚合函数'
                        ],
                        answer: 0,
                        explanation: '关联子查询会引用外部查询中的列，对外部查询的每一行执行一次。'
                    },
                    {
                        question: 'EXISTS 操作符用于检查什么？',
                        options: [
                            '子查询是否返回任何行',
                            '值是否存在',
                            '表是否存在',
                            '列是否存在'
                        ],
                        answer: 0,
                        explanation: '`EXISTS` 用于检查子查询是否至少返回一行数据。'
                    },
                    // ---- 数据修改 ----
                    {
                        question: '用于更新表中现有数据的 SQL 语句是？',
                        options: ['UPDATE', 'MODIFY', 'CHANGE', 'ALTER'],
                        answer: 0,
                        explanation: '`UPDATE` 语句用于修改表中的现有记录。'
                    },
                    {
                        question: '用于从数据库中删除数据的 SQL 语句是？',
                        options: ['DELETE', 'REMOVE', 'DROP', 'ERASE'],
                        answer: 0,
                        explanation: '`DELETE` 语句用于删除表中的行。'
                    },
                    {
                        question: 'DELETE 和 TRUNCATE 的主要区别是什么？',
                        options: [
                            'DELETE 可以带 WHERE，TRUNCATE 删除所有行且不能回滚',
                            'TRUNCATE 可以带 WHERE',
                            'DELETE 更快',
                            '没有区别'
                        ],
                        answer: 0,
                        explanation: 'DELETE 可以带 WHERE 删除特定行，是 DML 可回滚；TRUNCATE 删除所有行，是 DDL 不可回滚。'
                    },
                    // ---- 索引与性能 ----
                    {
                        question: '索引（INDEX）在数据库中的作用是什么？',
                        options: [
                            '加速数据检索速度',
                            '占用更少磁盘空间',
                            '保证数据唯一性',
                            '加密数据'
                        ],
                        answer: 0,
                        explanation: '索引是对数据库表中一列或多列的值进行排序的数据结构，可以大大提高查询速度。'
                    },
                    {
                        question: '主键（PRIMARY KEY）的特点是什么？',
                        options: [
                            '唯一且非空',
                            '可以重复',
                            '可以为空',
                            '自动创建'
                        ],
                        answer: 0,
                        explanation: '主键必须包含唯一的值，且不能包含 NULL 值。'
                    },
                    {
                        question: '外键（FOREIGN KEY）的作用是什么？',
                        options: [
                            '在两个表之间建立链接，确保数据完整性',
                            '作为表的唯一标识',
                            '加速查询速度',
                            '加密敏感数据'
                        ],
                        answer: 0,
                        explanation: '外键是一个表中的字段，它指向另一个表中的主键，用于确保数据的参照完整性。'
                    }
                ],
                resources: [
                    { name: 'SQL教程 - 菜鸟教程', url: 'https://www.runoob.com/sql/sql-tutorial.html', type: 'tutorial' },
                    { name: 'SQLZOO', url: 'https://sqlzoo.net/', type: 'practice' },
                    { name: 'LeetCode SQL题库', url: 'https://leetcode.cn/problemset/database/', type: 'practice' },
                ]
            },
            {
                id: 'pandas',
                name: 'Pandas',
                icon: '🐼',
                description: 'DataFrame 清洗、加工与分析',
                priority: 'core',
                quizs: [
                    // ---- Pandas 基础概念 ----
                    {
                        question: 'Pandas 是什么？',
                        options: [
                            'Python 的数据分析和处理库',
                            'Python 的机器学习库',
                            'Python 的可视化库',
                            'Python 的网络爬虫库'
                        ],
                        answer: 0,
                        explanation: 'Pandas 是基于 NumPy 的 Python 数据分析库，提供了 DataFrame 等数据结构。'
                    },
                    {
                        question: 'Pandas 的两个主要数据结构是什么？',
                        options: ['Series 和 DataFrame', 'Array 和 Matrix', 'List 和 Dict', 'Set 和 Tuple'],
                        answer: 0,
                        explanation: 'Series 是一维带标签数组，DataFrame 是二维表格型数据结构。'
                    },
                    {
                        question: '导入 Pandas 的常用别名是？',
                        options: ['import pandas as pd', 'import pandas as p', 'import pandas', 'import pd'],
                        answer: 0,
                        explanation: '惯例是 `import pandas as pd`。'
                    },
                    {
                        question: 'Pandas 中，Series 对象类似于什么？',
                        options: [
                            '带索引的一维数组',
                            '二维表格',
                            '键值对集合',
                            '列表'
                        ],
                        answer: 0,
                        explanation: 'Series 是一维的，可以看作是带索引的 NumPy 数组或字典。'
                    },
                    {
                        question: 'Pandas 中，DataFrame 对象类似于什么？',
                        options: [
                            '带有行索引和列名的二维表格',
                            '一维数组',
                            '三维数组',
                            '字典'
                        ],
                        answer: 0,
                        explanation: 'DataFrame 是二维的表格结构，有行索引和列名。'
                    },
                    // ---- 数据创建与导入 ----
                    {
                        question: '从字典创建 DataFrame 的正确方法是？',
                        options: [
                            'pd.DataFrame(data)',
                            'pd.createDataFrame(data)',
                            'DataFrame.from_dict(data)',
                            'pd.make_df(data)'
                        ],
                        answer: 0,
                        explanation: '使用 `pd.DataFrame(dict)` 可以从字典创建 DataFrame。'
                    },
                    {
                        question: '从 CSV 文件读取数据到 DataFrame 的函数是？',
                        options: ['pd.read_csv()', 'pd.read_excel()', 'pd.load_csv()', 'pd.import_csv()'],
                        answer: 0,
                        explanation: '`pd.read_csv()` 是读取 CSV 文件的标准函数。'
                    },
                    {
                        question: '将 DataFrame 写入 CSV 文件的方法是？',
                        options: ['df.to_csv()', 'pd.to_csv(df)', 'df.write_csv()', 'pd.save_csv()'],
                        answer: 0,
                        explanation: 'DataFrame 的 `to_csv()` 方法将其保存为 CSV 文件。'
                    },
                    {
                        question: '查看 DataFrame 前几行数据的常用方法是？',
                        options: ['df.head()', 'df.tail()', 'df.first()', 'df.preview()'],
                        answer: 0,
                        explanation: '`df.head(n)` 返回前 n 行数据（默认 5 行）。'
                    },
                    {
                        question: '获取 DataFrame 基本信息（如行数、列名、类型）的方法是？',
                        options: ['df.info()', 'df.describe()', 'df.dtypes', 'df.shape'],
                        answer: 0,
                        explanation: '`df.info()` 显示行数、列名、非空计数和数据类型等概要信息。'
                    },
                    // ---- 数据查看与选择 ----
                    {
                        question: '选择 DataFrame 中的单个列（返回 Series）的语法是？',
                        options: ['df["column_name"]', 'df[["column_name"]]', 'df.column_name', 'A 和 C'],
                        answer: 3,
                        explanation: '可以使用 `df["列名"]` 或 `df.列名` 选择单列，返回 Series。'
                    },
                    {
                        question: '选择 DataFrame 中的多个列（返回 DataFrame）的语法是？',
                        options: ['df[["col1", "col2"]]', 'df["col1", "col2"]', 'df.col1, col2', 'df[["col1"], ["col2"]]'],
                        answer: 0,
                        explanation: '使用列名列表 `df[["列1", "列2"]]` 选择多列，返回 DataFrame。'
                    },
                    {
                        question: '使用行号选择行的属性是？',
                        options: ['df.iloc[]', 'df.loc[]', 'df.at[]', 'df.iat[]'],
                        answer: 0,
                        explanation: '`iloc` 是基于整数位置的选择，`loc` 是基于标签的选择。'
                    },
                    {
                        question: '使用行标签或布尔数组选择行的属性是？',
                        options: ['df.loc[]', 'df.iloc[]', 'df.at[]', 'df.iat[]'],
                        answer: 0,
                        explanation: '`loc` 通过行标签或布尔数组选择数据。'
                    },
                    {
                        question: '条件选择（如选择年龄大于30的行）的语法是？',
                        options: [
                            'df[df["age"] > 30]',
                            'df.loc[df.age > 30]',
                            'df.query("age > 30")',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: '可以使用布尔索引、`loc` 或 `query()` 方法进行条件选择。'
                    },
                    // ---- 数据清洗 ----
                    {
                        question: '检查 DataFrame 中是否有缺失值的方法是？',
                        options: ['df.isnull() 或 df.isna()', 'df.missing()', 'df.checkna()', 'df.hasnull()'],
                        answer: 0,
                        explanation: '`isnull()` 和 `isna()` 返回布尔 DataFrame，指示缺失值。'
                    },
                    {
                        question: '删除包含缺失值的行的函数是？',
                        options: ['df.dropna()', 'df.fillna()', 'df.remove_na()', 'df.delete_na()'],
                        answer: 0,
                        explanation: '`dropna()` 默认删除包含任何缺失值的行。'
                    },
                    {
                        question: '用特定值填充缺失值的函数是？',
                        options: ['df.fillna()', 'df.replace_na()', 'df.fill()', 'df.ffill()'],
                        answer: 0,
                        explanation: '`fillna(value)` 用指定值或方法填充缺失值。'
                    },
                    {
                        question: '删除重复行的函数是？',
                        options: ['df.drop_duplicates()', 'df.unique()', 'df.remove_duplicates()', 'df.deduplicate()'],
                        answer: 0,
                        explanation: '`drop_duplicates()` 删除重复行。'
                    },
                    {
                        question: '重命名列的函数是？',
                        options: ['df.rename(columns={})', 'df.rename_axis()', 'df.set_axis()', 'df.columns = []'],
                        answer: 0,
                        explanation: '`rename(columns={旧名: 新名})` 可以重命名指定列。'
                    },
                    // ---- 数据转换与操作 ----
                    {
                        question: '对列应用函数的常用方法是？',
                        options: ['df["col"].apply(fun)', 'df["col"].map(fun)', 'df.applymap(fun)', '以上都是'],
                        answer: 3,
                        explanation: '`apply()` 对 Series 应用函数，`map()` 类似，`applymap()` 对 DataFrame 每个元素应用函数。'
                    },
                    {
                        question: '向 DataFrame 添加新列的正确方式是？',
                        options: [
                            'df["new_col"] = values',
                            'df.insert(column="new_col", value=values)',
                            'df.assign(new_col=values)',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: '可以通过赋值、`insert()` 或 `assign()` 添加新列。'
                    },
                    {
                        question: '用于对数据进行分组统计的函数是？',
                        options: ['df.groupby()', 'df.pivot_table()', 'df.aggregate()', '以上都是'],
                        answer: 0,
                        explanation: '`groupby()` 是分组操作的核心函数。'
                    },
                    {
                        question: '分组后计算均值的方法是？',
                        options: ['df.groupby("col").mean()', 'df.groupby("col").agg("mean")', 'df.groupby("col").agg(np.mean)', '以上都是'],
                        answer: 3,
                        explanation: '分组后可以使用 `mean()` 或 `agg()` 计算均值。'
                    },
                    {
                        question: '用于创建数据透视表的函数是？',
                        options: ['pd.pivot_table()', 'df.pivot()', 'df.crosstab()', 'df.groupby()'],
                        answer: 0,
                        explanation: '`pivot_table()` 用于创建类似 Excel 的数据透视表。'
                    },
                    // ---- 合并与连接 ----
                    {
                        question: '用于纵向合并两个 DataFrame 的函数是？',
                        options: ['pd.concat()', 'pd.merge()', 'df.append()', 'df.join()'],
                        answer: 0,
                        explanation: '`concat()` 可以沿某个轴连接多个 DataFrame。'
                    },
                    {
                        question: '用于类似 SQL JOIN 操作的函数是？',
                        options: ['pd.merge()', 'pd.concat()', 'df.join()', 'pd.combine()'],
                        answer: 0,
                        explanation: '`merge()` 用于根据列或索引进行数据库风格的连接操作。'
                    },
                    {
                        question: '`pd.merge(df1, df2, on="key")` 默认执行什么连接？',
                        options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'OUTER JOIN'],
                        answer: 0,
                        explanation: '`merge()` 默认执行 inner join。'
                    },
                    // ---- 时间序列 ----
                    {
                        question: '将列转换为时间序列类型的方法是？',
                        options: ['pd.to_datetime()', 'pd.to_timestamp()', 'pd.to_time()', 'pd.to_period()'],
                        answer: 0,
                        explanation: '`to_datetime()` 将参数转换为 datetime 类型。'
                    },
                    {
                        question: '设置 DataFrame 索引为时间列的方法是？',
                        options: ['df.set_index("date_col")', 'df.index = df["date_col"]', 'df.reset_index()', 'df.reindex()'],
                        answer: 0,
                        explanation: '`set_index()` 可以将指定列设置为索引。'
                    },
                    // ---- 统计与聚合 ----
                    {
                        question: '获取 DataFrame 数值列的描述性统计的方法是？',
                        options: ['df.describe()', 'df.info()', 'df.stats()', 'df.summary()'],
                        answer: 0,
                        explanation: '`describe()` 返回计数、均值、标准差、最小值、四分位数等统计信息。'
                    },
                    {
                        question: '计算列与列之间相关系数的方法是？',
                        options: ['df.corr()', 'df.cov()', 'df.correlation()', 'df.rcorr()'],
                        answer: 0,
                        explanation: '`corr()` 计算列之间的成对相关系数。'
                    },
                    {
                        question: '计算列的总和的方法是？',
                        options: ['df.sum()', 'df.total()', 'df.aggregate("sum")', 'A 和 C'],
                        answer: 3,
                        explanation: '`sum()` 和 `agg("sum")` 都可以计算总和。'
                    },
                    {
                        question: '计算每列非缺失值数量的方法是？',
                        options: ['df.count()', 'df.size()', 'df.shape', 'df.len()'],
                        answer: 0,
                        explanation: '`count()` 返回每列的非缺失值数量。'
                    }
                ],
                resources: [
                    { name: 'Pandas官方文档', url: 'https://pandas.pydata.org/docs/', type: 'docs' },
                    { name: 'Pandas中文网', url: 'https://www.pypandas.cn/', type: 'docs' },
                    { name: '10分钟入门Pandas', url: 'https://www.pypandas.cn/docs/getting_started/10min.html', type: 'tutorial' },
                ]
            },
            {
                id: 'visualization',
                name: '数据可视化',
                icon: '📈',
                description: '用图表讲清指标、趋势与结论',
                priority: 'core',
                quizs: [
                    // ---- 可视化基础 ----
                    {
                        question: '数据可视化的主要目的是什么？',
                        options: [
                            '将数据以图形方式呈现，帮助理解和发现模式',
                            '让数据更美观',
                            '替代数据分析',
                            '存储数据'
                        ],
                        answer: 0,
                        explanation: '可视化将数据转换为图形，使模式、趋势和异常更易于被人类理解。'
                    },
                    {
                        question: 'Matplotlib 是什么？',
                        options: [
                            'Python 的绘图库',
                            'JavaScript 的图表库',
                            '数据分析库',
                            '机器学习库'
                        ],
                        answer: 0,
                        explanation: 'Matplotlib 是 Python 最基础的绘图库，提供了 MATLAB 风格的绘图接口。'
                    },
                    {
                        question: 'ECharts 是什么？',
                        options: [
                            '百度开源的 JavaScript 可视化库',
                            'Python 可视化库',
                            '数据库工具',
                            '前端框架'
                        ],
                        answer: 0,
                        explanation: 'ECharts 是百度开源的数据可视化库，基于 JavaScript，提供丰富的交互式图表。'
                    },
                    {
                        question: '导入 Matplotlib 的常用别名是？',
                        options: ['import matplotlib.pyplot as plt', 'import matplotlib as plt', 'import plot as plt', 'import mpl as plt'],
                        answer: 0,
                        explanation: '常用 `import matplotlib.pyplot as plt`。'
                    },
                    {
                        question: '在 Jupyter Notebook 中显示 Matplotlib 图表的魔法命令是？',
                        options: ['%matplotlib inline', '%matplotlib notebook', '%matplotlib qt', '%matplotlib'],
                        answer: 0,
                        explanation: '`%matplotlib inline` 使图表在 Notebook 中直接显示。'
                    },
                    // ---- Matplotlib 基础 ----
                    {
                        question: 'Matplotlib 中，绘制折线图的函数是？',
                        options: ['plt.plot()', 'plt.scatter()', 'plt.bar()', 'plt.hist()'],
                        answer: 0,
                        explanation: '`plot()` 函数用于绘制折线图或散点图。'
                    },
                    {
                        question: 'Matplotlib 中，绘制散点图的函数是？',
                        options: ['plt.scatter()', 'plt.plot()', 'plt.bar()', 'plt.pie()'],
                        answer: 0,
                        explanation: '`scatter()` 专门用于绘制散点图。'
                    },
                    {
                        question: 'Matplotlib 中，绘制柱状图的函数是？',
                        options: ['plt.bar()', 'plt.plot()', 'plt.hist()', 'plt.barh()'],
                        answer: 0,
                        explanation: '`bar()` 用于垂直柱状图，`barh()` 用于水平柱状图。'
                    },
                    {
                        question: 'Matplotlib 中，绘制直方图的函数是？',
                        options: ['plt.hist()', 'plt.bar()', 'plt.hist2d()', 'plt.stem()'],
                        answer: 0,
                        explanation: '`hist()` 用于绘制直方图，展示数据分布。'
                    },
                    {
                        question: 'Matplotlib 中，添加图例的函数是？',
                        options: ['plt.legend()', 'plt.label()', 'plt.legendary()', 'plt.show()'],
                        answer: 0,
                        explanation: '`legend()` 用于在图表上添加图例。'
                    },
                    // ---- 图表定制 ----
                    {
                        question: '设置图表标题的函数是？',
                        options: ['plt.title()', 'plt.suptitle()', 'plt.xlabel()', 'plt.ylabel()'],
                        answer: 0,
                        explanation: '`title()` 设置图表标题。'
                    },
                    {
                        question: '设置 x 轴标签的函数是？',
                        options: ['plt.xlabel()', 'plt.ylabel()', 'plt.title()', 'plt.xticks()'],
                        answer: 0,
                        explanation: '`xlabel()` 设置 x 轴标签。'
                    },
                    {
                        question: '设置 y 轴标签的函数是？',
                        options: ['plt.ylabel()', 'plt.xlabel()', 'plt.title()', 'plt.yticks()'],
                        answer: 0,
                        explanation: '`ylabel()` 设置 y 轴标签。'
                    },
                    {
                        question: '用于显示图表的函数是？',
                        options: ['plt.show()', 'plt.display()', 'plt.output()', 'plt.view()'],
                        answer: 0,
                        explanation: '`show()` 显示当前图形窗口。'
                    },
                    {
                        question: '用于保存图表到文件的函数是？',
                        options: ['plt.savefig()', 'plt.save()', 'plt.write()', 'plt.export()'],
                        answer: 0,
                        explanation: '`savefig()` 将当前图表保存为文件。'
                    },
                    // ---- Seaborn ----
                    {
                        question: 'Seaborn 是什么？',
                        options: [
                            '基于 Matplotlib 的高级可视化库',
                            '替代 Matplotlib 的库',
                            'Python 的机器学习库',
                            '前端图表库'
                        ],
                        answer: 0,
                        explanation: 'Seaborn 基于 Matplotlib，提供更高级的接口和更美观的默认样式。'
                    },
                    {
                        question: '导入 Seaborn 的常用别名是？',
                        options: ['import seaborn as sns', 'import seaborn as sb', 'import sns', 'import seaborn'],
                        answer: 0,
                        explanation: '惯例是 `import seaborn as sns`。'
                    },
                    {
                        question: 'Seaborn 中，绘制分布图的函数是？',
                        options: ['sns.distplot()', 'sns.histplot()', 'sns.kdeplot()', '以上都是'],
                        answer: 3,
                        explanation: 'Seaborn 提供多种分布图，`histplot`、`kdeplot`、`displot` 等。'
                    },
                    {
                        question: 'Seaborn 中，绘制箱线图的函数是？',
                        options: ['sns.boxplot()', 'sns.violinplot()', 'sns.boxenplot()', '以上都是'],
                        answer: 3,
                        explanation: '`boxplot` 绘制箱线图，`violinplot` 绘制小提琴图，`boxenplot` 增强箱线图。'
                    },
                    // ---- ECharts 概念 ----
                    {
                        question: 'ECharts 的主要特点是什么？',
                        options: [
                            '丰富的交互性和可视化类型，支持大数据量',
                            '只支持简单图表',
                            '只能在 Node.js 中使用',
                            '没有交互功能'
                        ],
                        answer: 0,
                        explanation: 'ECharts 提供丰富的图表类型、交互组件和主题，适合 Web 端数据可视化。'
                    },
                    {
                        question: 'ECharts 是基于什么技术的？',
                        options: ['JavaScript/Canvas', 'Python', 'Java', 'C++'],
                        answer: 0,
                        explanation: 'ECharts 是纯 JavaScript 的图表库，使用 Canvas 渲染。'
                    },
                    {
                        question: '在 HTML 中使用 ECharts，需要引入什么？',
                        options: [
                            'echarts.js 文件',
                            'jQuery 库',
                            'Bootstrap 框架',
                            'Node.js 运行时'
                        ],
                        answer: 0,
                        explanation: '需要在 HTML 中通过 `<script>` 标签引入 ECharts 的 JavaScript 文件。'
                    },
                    {
                        question: 'ECharts 的核心配置对象是？',
                        options: ['option', 'config', 'data', 'chart'],
                        answer: 0,
                        explanation: '通过 `option` 对象定义图表的标题、坐标轴、系列数据等配置。'
                    },
                    // ---- 可视化最佳实践 ----
                    {
                        question: '选择图表类型时，比较不同类别数据的大小适合用？',
                        options: ['柱状图', '折线图', '饼图', '散点图'],
                        answer: 0,
                        explanation: '柱状图适合比较不同类别的数值大小。'
                    },
                    {
                        question: '展示时间序列趋势适合用？',
                        options: ['折线图', '饼图', '柱状图', '雷达图'],
                        answer: 0,
                        explanation: '折线图适合显示数据随时间的变化趋势。'
                    },
                    {
                        question: '展示数据分布适合用？',
                        options: ['直方图或箱线图', '饼图', '柱状图', '折线图'],
                        answer: 0,
                        explanation: '直方图展示数据分布形状，箱线图展示分布统计量。'
                    },
                    {
                        question: '展示组成部分占比适合用？',
                        options: ['饼图或环形图', '折线图', '散点图', '面积图'],
                        answer: 0,
                        explanation: '饼图用于显示各部分占总体的比例，当类别不多时效果最好。'
                    },
                    {
                        question: '展示两个变量之间的关系适合用？',
                        options: ['散点图', '柱状图', '折线图', '饼图'],
                        answer: 0,
                        explanation: '散点图用于显示两个连续变量之间的关系和相关性。'
                    },
                    {
                        question: '颜色在可视化中的作用是？',
                        options: [
                            '编码数据类别、值大小或突出关键信息',
                            '让图表好看',
                            '区分不同图表',
                            '没有实际作用'
                        ],
                        answer: 0,
                        explanation: '颜色是可视化中的重要视觉通道，可以表示分类、连续数值或强调。'
                    },
                    {
                        question: '可视化中避免使用过多颜色的原因是？',
                        options: [
                            '增加认知负担，可能导致误解',
                            '颜色不够用',
                            '打印成本高',
                            '浏览器不支持'
                        ],
                        answer: 0,
                        explanation: '过多颜色会让图表难以阅读和理解，应保持简洁和一致性。'
                    }
                ],
                resources: [
                    { name: 'Matplotlib官方文档', url: 'https://matplotlib.org/stable/contents.html', type: 'docs' },
                    { name: 'ECharts官方文档', url: 'https://echarts.apache.org/zh/index.html', type: 'docs' },
                    { name: 'Python数据可视化', url: 'https://www.bilibili.com/video/BV1JZ4y1p7S6', type: 'video' },
                ]
            },
            {
                id: 'excel',
                name: 'Excel',
                icon: '📑',
                description: '表格分析、函数与透视表基础',
                priority: 'important',
                quizs: [
                    // ---- Excel 基础概念 ----
                    {
                        question: 'Excel 文件的默认扩展名是什么？',
                        options: ['.xlsx', '.xls', '.csv', '.txt'],
                        answer: 0,
                        explanation: 'Excel 2007 及以后版本的默认文件格式是 `.xlsx`。'
                    },
                    {
                        question: 'Excel 中，一个工作簿包含多个什么？',
                        options: ['工作表', '单元格', '行', '列'],
                        answer: 0,
                        explanation: '一个 Excel 文件是一个工作簿，默认包含多个工作表（Sheet）。'
                    },
                    {
                        question: 'Excel 中，单元格的地址由什么组成？',
                        options: ['列字母+行号', '行号+列字母', '列号+行号', '行列编号'],
                        answer: 0,
                        explanation: '例如 A1 表示第 A 列第 1 行的单元格。'
                    },
                    {
                        question: 'Excel 中，用于输入公式的前缀符号是？',
                        options: ['=', '+', '-', '@'],
                        answer: 0,
                        explanation: '所有 Excel 公式必须以等号 `=` 开头。'
                    },
                    // ---- 基础操作 ----
                    {
                        question: '在 Excel 中，用于求和的函数是？',
                        options: ['SUM', 'AVERAGE', 'COUNT', 'TOTAL'],
                        answer: 0,
                        explanation: '`SUM` 函数计算指定单元格区域中所有数值的和。'
                    },
                    {
                        question: '在 Excel 中，用于计算平均值的函数是？',
                        options: ['AVERAGE', 'MEAN', 'AVG', 'AVERAGEIF'],
                        answer: 0,
                        explanation: '`AVERAGE` 返回参数的平均值。'
                    },
                    {
                        question: '在 Excel 中，用于统计数字个数的函数是？',
                        options: ['COUNT', 'COUNTA', 'COUNTIF', 'COUNTBLANK'],
                        answer: 0,
                        explanation: '`COUNT` 统计包含数字的单元格数量。'
                    },
                    {
                        question: '在 Excel 中，用于统计非空单元格个数的函数是？',
                        options: ['COUNTA', 'COUNT', 'COUNTIF', 'COUNTBLANK'],
                        answer: 0,
                        explanation: '`COUNTA` 统计非空单元格数量。'
                    },
                    {
                        question: '在 Excel 中，用于求最大值的函数是？',
                        options: ['MAX', 'MIN', 'LARGE', 'MAXA'],
                        answer: 0,
                        explanation: '`MAX` 返回一组数值中的最大值。'
                    },
                    // ---- 函数进阶 ----
                    {
                        question: '`IF` 函数的作用是什么？',
                        options: [
                            '根据条件返回不同值',
                            '循环计算',
                            '求和',
                            '查找数据'
                        ],
                        answer: 0,
                        explanation: '`IF(条件, 真值, 假值)` 根据条件判断返回不同的结果。'
                    },
                    {
                        question: '`VLOOKUP` 函数的作用是什么？',
                        options: [
                            '垂直查找并返回匹配行的值',
                            '水平查找',
                            '查找位置',
                            '求和'
                        ],
                        answer: 0,
                        explanation: '`VLOOKUP` 在表格首列查找指定值，并返回同一行其他列的值。'
                    },
                    {
                        question: '`VLOOKUP` 的最后一个参数 `[range_lookup]` 为 FALSE 表示什么？',
                        options: ['精确匹配', '近似匹配', '模糊匹配', '升序查找'],
                        answer: 0,
                        explanation: 'FALSE 表示查找完全匹配的值，TRUE 表示近似匹配（需排序）。'
                    },
                    {
                        question: '`SUMIF` 函数的作用是什么？',
                        options: [
                            '条件求和',
                            '求和所有值',
                            '条件计数',
                            '条件平均'
                        ],
                        answer: 0,
                        explanation: '`SUMIF(范围, 条件, 求和范围)` 对满足条件的单元格求和。'
                    },
                    {
                        question: '`COUNTIF` 函数的作用是什么？',
                        options: [
                            '条件计数',
                            '条件求和',
                            '条件平均',
                            '条件查找'
                        ],
                        answer: 0,
                        explanation: '`COUNTIF(范围, 条件)` 统计满足条件的单元格数量。'
                    },
                    // ---- 数据处理 ----
                    {
                        question: 'Excel 中，用于去除重复项的功能在哪个选项卡？',
                        options: ['数据', '开始', '插入', '公式'],
                        answer: 0,
                        explanation: '“数据”选项卡中有“删除重复值”按钮。'
                    },
                    {
                        question: 'Excel 中，对数据排序的功能在哪个选项卡？',
                        options: ['数据', '开始', '插入', '页面布局'],
                        answer: 0,
                        explanation: '“数据”选项卡中有“排序”和“筛选”按钮。'
                    },
                    {
                        question: 'Excel 中，用于筛选数据的功能在哪个选项卡？',
                        options: ['数据', '开始', '插入', '公式'],
                        answer: 0,
                        explanation: '“数据”选项卡中的“筛选”按钮可以为每列添加筛选箭头。'
                    },
                    {
                        question: 'Excel 中，用于创建数据透视表的功能在哪个选项卡？',
                        options: ['插入', '数据', '开始', '公式'],
                        answer: 0,
                        explanation: '“插入”选项卡中有“数据透视表”按钮。'
                    },
                    {
                        question: '数据透视表的行区域和列区域分别用于什么？',
                        options: [
                            '行区域放分类字段，列区域放分类字段',
                            '行区域放数值，列区域放分类',
                            '行区域放筛选，列区域放数值',
                            '没有区别'
                        ],
                        answer: 0,
                        explanation: '行和列区域都可以放分类字段，决定透视表的行和列布局。'
                    },
                    // ---- 文本与日期 ----
                    {
                        question: '用于合并多个文本字符串的函数是？',
                        options: ['CONCATENATE 或 CONCAT', 'MERGE', 'JOIN', 'COMBINE'],
                        answer: 0,
                        explanation: '`CONCATENATE` 和更新的 `CONCAT` 函数可以合并文本。'
                    },
                    {
                        question: '用于从文本左侧提取指定数量字符的函数是？',
                        options: ['LEFT', 'RIGHT', 'MID', 'FIND'],
                        answer: 0,
                        explanation: '`LEFT(text, num_chars)` 从文本开头提取字符。'
                    },
                    {
                        question: '用于从文本右侧提取指定数量字符的函数是？',
                        options: ['RIGHT', 'LEFT', 'MID', 'FIND'],
                        answer: 0,
                        explanation: '`RIGHT(text, num_chars)` 从文本末尾提取字符。'
                    },
                    {
                        question: '用于获取当前日期的函数是？',
                        options: ['TODAY()', 'NOW()', 'DATE()', 'CURRENT_DATE()'],
                        answer: 0,
                        explanation: '`TODAY()` 返回当前日期，`NOW()` 返回当前日期和时间。'
                    },
                    {
                        question: '用于计算两个日期之间天数的函数是？',
                        options: ['DATEDIF', 'DAYS', 'NETWORKDAYS', 'A 和 B'],
                        answer: 3,
                        explanation: '`DAYS(end, start)` 或 `DATEDIF(start, end, "d")` 都可以计算天数差。'
                    },
                    // ---- 图表 ----
                    {
                        question: 'Excel 中，插入图表的选项卡是？',
                        options: ['插入', '开始', '数据', '设计'],
                        answer: 0,
                        explanation: '“插入”选项卡中有各种图表类型。'
                    },
                    {
                        question: '在 Excel 中，更改图表类型的选项卡是？',
                        options: ['图表设计', '格式', '插入', '页面布局'],
                        answer: 0,
                        explanation: '选中图表后，会出现“图表设计”和“格式”选项卡。'
                    },
                    {
                        question: 'Excel 中，用于创建迷你图的选项卡是？',
                        options: ['插入', '数据', '公式', '开始'],
                        answer: 0,
                        explanation: '“插入”选项卡中有“迷你图”组，可以创建折线、柱形等迷你图。'
                    },
                    // ---- 数据分析工具 ----
                    {
                        question: 'Excel 中，用于进行“假设分析”的工具包括？',
                        options: [
                            '单变量求解、模拟运算表、方案管理器',
                            '数据透视表',
                            '图表',
                            '条件格式'
                        ],
                        answer: 0,
                        explanation: '“数据”选项卡下的“预测”和“模拟分析”提供这些工具。'
                    },
                    {
                        question: 'Excel 中，单变量求解可用于解决什么问题？',
                        options: [
                            '已知公式结果，反推输入值',
                            '数据排序',
                            '数据筛选',
                            '创建图表'
                        ],
                        answer: 0,
                        explanation: '单变量求解用于逆向计算，例如已知贷款月供求贷款额。'
                    },
                    {
                        question: 'Excel 中，描述性统计工具在哪个加载项中？',
                        options: ['分析工具库', '规划求解', 'Power Pivot', 'Power Query'],
                        answer: 0,
                        explanation: '“分析工具库”需要先在 Excel 选项中加载，提供描述统计、t检验等。'
                    },
                    // ---- 快捷操作 ----
                    {
                        question: 'Excel 中，快速求和（Alt+=）的快捷键是什么？',
                        options: ['Alt + =', 'Ctrl + =', 'Shift + =', 'Ctrl + S'],
                        answer: 0,
                        explanation: '`Alt + =` 是自动求和快捷键。'
                    },
                    {
                        question: '在 Excel 中，冻结窗格的功能在哪个选项卡？',
                        options: ['视图', '开始', '数据', '窗口'],
                        answer: 0,
                        explanation: '“视图”选项卡中有“冻结窗格”按钮。'
                    },
                    {
                        question: 'Excel 中，条件格式的功能在哪个选项卡？',
                        options: ['开始', '插入', '数据', '公式'],
                        answer: 0,
                        explanation: '“开始”选项卡的“样式”组中有“条件格式”。'
                    },
                    {
                        question: 'Excel 中，保护工作表的功能在哪个选项卡？',
                        options: ['审阅', '开始', '数据', '开发工具'],
                        answer: 0,
                        explanation: '“审阅”选项卡中有“保护工作表”和“保护工作簿”。'
                    }
                ],
                resources: [
                    { name: 'Excel教程 - 菜鸟教程', url: 'https://www.runoob.com/excel/excel-tutorial.html', type: 'tutorial' },
                    { name: 'ExcelHome', url: 'https://www.excelhome.net/', type: 'community' },
                    { name: 'Excel函数大全', url: 'https://support.microsoft.com/zh-cn/office/excel-%E5%87%BD%E6%95%B0', type: 'docs' },
                ]
            },
            {
                id: 'statistics',
                name: '统计学',
                icon: '📐',
                description: '概率统计与分析结论的理论基础',
                priority: 'important',
                quizs: [
                    // ---- 描述性统计 ----
                    {
                        question: '描述性统计的主要目的是什么？',
                        options: [
                            '总结和描述数据的主要特征',
                            '推断总体参数',
                            '建立预测模型',
                            '验证假设'
                        ],
                        answer: 0,
                        explanation: '描述性统计通过均值、中位数、标准差等指标来总结和描述数据。'
                    },
                    {
                        question: '均值（Mean）受什么影响较大？',
                        options: ['极端值', '样本量', '数据分布形状', '中位数'],
                        answer: 0,
                        explanation: '均值对极端值（异常值）非常敏感，容易被拉向极端值方向。'
                    },
                    {
                        question: '中位数（Median）的特点是什么？',
                        options: [
                            '不受极端值影响，代表数据中间位置',
                            '受所有值影响',
                            '总是等于均值',
                            '只能用于对称分布'
                        ],
                        answer: 0,
                        explanation: '中位数是排序后的中间值，对极端值不敏感。'
                    },
                    {
                        question: '众数（Mode）表示什么？',
                        options: [
                            '数据中出现次数最多的值',
                            '数据的平均值',
                            '数据的中间值',
                            '数据的最大值'
                        ],
                        answer: 0,
                        explanation: '众数是数据集中出现频率最高的值。'
                    },
                    {
                        question: '方差（Variance）衡量的是什么？',
                        options: [
                            '数据的离散程度',
                            '数据的中心趋势',
                            '数据的偏斜程度',
                            '数据的峰度'
                        ],
                        answer: 0,
                        explanation: '方差是各数据点与均值之差的平方的平均值，衡量数据的波动性。'
                    },
                    {
                        question: '标准差（Standard Deviation）与方差的关系是？',
                        options: [
                            '标准差的平方等于方差',
                            '标准差等于方差的平方根',
                            '两者相等',
                            '没有关系'
                        ],
                        answer: 1,
                        explanation: '标准差是方差的平方根，与原始数据单位相同，更易解释。'
                    },
                    {
                        question: '四分位距（IQR）是如何计算的？',
                        options: [
                            '第三四分位数减第一四分位数',
                            '最大值减最小值',
                            '均值减中位数',
                            '标准差'
                        ],
                        answer: 0,
                        explanation: 'IQR = Q3 - Q1，表示中间50%数据的范围。'
                    },
                    // ---- 概率基础 ----
                    {
                        question: '概率的取值范围是多少？',
                        options: ['0 到 1 之间', '-1 到 1 之间', '0 到 100 之间', '所有实数'],
                        answer: 0,
                        explanation: '概率值在 0（不可能事件）到 1（必然事件）之间。'
                    },
                    {
                        question: '两个独立事件同时发生的概率如何计算？',
                        options: [
                            'P(A) * P(B)',
                            'P(A) + P(B)',
                            'max(P(A), P(B))',
                            'min(P(A), P(B))'
                        ],
                        answer: 0,
                        explanation: '对于独立事件，P(A 且 B) = P(A) × P(B)。'
                    },
                    {
                        question: '两个互斥事件至少有一个发生的概率如何计算？',
                        options: [
                            'P(A) + P(B)',
                            'P(A) × P(B)',
                            'P(A) / P(B)',
                            'P(A) - P(B)'
                        ],
                        answer: 0,
                        explanation: '互斥事件不能同时发生，所以 P(A 或 B) = P(A) + P(B)。'
                    },
                    {
                        question: '条件概率 P(A|B) 表示什么？',
                        options: [
                            '在事件 B 发生的条件下，事件 A 发生的概率',
                            '事件 A 和 B 同时发生的概率',
                            '事件 A 或 B 发生的概率',
                            '事件 B 在 A 之后发生的概率'
                        ],
                        answer: 0,
                        explanation: 'P(A|B) 读作“给定 B 时 A 的概率”。'
                    },
                    // ---- 概率分布 ----
                    {
                        question: '正态分布（Normal Distribution）的特征是什么？',
                        options: [
                            '钟形曲线，对称，均值=中位数=众数',
                            '不对称，长尾',
                            '离散分布',
                            '均匀分布'
                        ],
                        answer: 0,
                        explanation: '正态分布是连续概率分布，关于均值对称，呈钟形。'
                    },
                    {
                        question: '标准正态分布的均值是多少？',
                        options: ['0', '1', '取决于数据', '没有均值'],
                        answer: 0,
                        explanation: '标准正态分布均值为 0，标准差为 1。'
                    },
                    {
                        question: '二项分布（Binomial Distribution）适用于什么场景？',
                        options: [
                            '固定次数的独立伯努利试验',
                            '连续时间事件计数',
                            '指数分布',
                            '均匀分布'
                        ],
                        answer: 0,
                        explanation: '二项分布描述 n 次独立伯努利试验中成功次数的分布。'
                    },
                    {
                        question: '泊松分布（Poisson Distribution）常用于什么？',
                        options: [
                            '单位时间或空间内事件发生的次数',
                            '连续变量的分布',
                            '对称分布',
                            '二项分布的近似'
                        ],
                        answer: 0,
                        explanation: '泊松分布适用于稀有事件在固定区间内的计数。'
                    },
                    // ---- 推断统计 ----
                    {
                        question: '统计推断的主要目的是什么？',
                        options: [
                            '用样本数据推断总体特征',
                            '描述样本数据',
                            '计算样本均值',
                            '绘制图表'
                        ],
                        answer: 0,
                        explanation: '统计推断利用样本信息对总体参数进行估计或假设检验。'
                    },
                    {
                        question: '中心极限定理（Central Limit Theorem）表明什么？',
                        options: [
                            '大样本下，样本均值的分布近似正态分布',
                            '数据总是正态分布',
                            '样本量越大越好',
                            '均值等于中位数'
                        ],
                        answer: 0,
                        explanation: 'CLT 指出，无论总体分布如何，当样本量足够大时，样本均值的抽样分布近似正态。'
                    },
                    {
                        question: '置信区间（Confidence Interval）表示什么？',
                        options: [
                            '在一定置信水平下，总体参数可能落在的区间',
                            '数据的变化范围',
                            '样本均值的范围',
                            '预测值的范围'
                        ],
                        answer: 0,
                        explanation: '例如 95% 置信区间意味着如果重复抽样，有 95% 的区间包含总体参数。'
                    },
                    {
                        question: '假设检验中，p 值的含义是什么？',
                        options: [
                            '在原假设为真时，观察到当前或更极端结果的概率',
                            '备择假设为真的概率',
                            '犯错误的概率',
                            '效应大小'
                        ],
                        answer: 0,
                        explanation: 'p 值衡量样本数据与原假设的一致性，p 值小表明与原假设矛盾。'
                    },
                    {
                        question: '显著性水平 α 通常取多少？',
                        options: ['0.05', '0.5', '0.01', 'A 和 C 常见'],
                        answer: 3,
                        explanation: '常用的显著性水平有 0.05 和 0.01。'
                    },
                    {
                        question: '第一类错误（Type I Error）是什么？',
                        options: [
                            '错误地拒绝真原假设',
                            '错误地接受假原假设',
                            '样本量太小',
                            '数据录入错误'
                        ],
                        answer: 0,
                        explanation: '第一类错误是“假阳性”，α 就是犯第一类错误的概率。'
                    },
                    {
                        question: '第二类错误（Type II Error）是什么？',
                        options: [
                            '错误地接受假原假设',
                            '错误地拒绝真原假设',
                            '样本量太大',
                            '计算错误'
                        ],
                        answer: 0,
                        explanation: '第二类错误是“假阴性”，通常用 β 表示，1-β 是检验功效。'
                    },
                    // ---- 相关与回归 ----
                    {
                        question: '相关系数（Correlation Coefficient）衡量什么？',
                        options: [
                            '两个变量之间线性关系的强度和方向',
                            '因果关系',
                            '数据的离散程度',
                            '变量之间的差异'
                        ],
                        answer: 0,
                        explanation: '相关系数 r 在 -1 到 1 之间，绝对值越大线性关系越强。'
                    },
                    {
                        question: 'Pearson 相关系数为 0 表示什么？',
                        options: [
                            '没有线性相关关系',
                            '没有关系',
                            '数据独立',
                            '负相关'
                        ],
                        answer: 0,
                        explanation: '相关系数为 0 表示不存在线性关系，但仍可能存在非线性关系。'
                    },
                    {
                        question: '线性回归的目标是什么？',
                        options: [
                            '找到最佳拟合数据点的直线，最小化误差平方和',
                            '最大化相关系数',
                            '最小化截距',
                            '使所有点都在线上'
                        ],
                        answer: 0,
                        explanation: '线性回归通过最小二乘法估计参数，使预测值与实际值的残差平方和最小。'
                    },
                    {
                        question: 'R 平方（R-squared）表示什么？',
                        options: [
                            '回归模型解释的因变量变异比例',
                            '相关系数的平方',
                            '模型的显著性',
                            '预测准确率'
                        ],
                        answer: 0,
                        explanation: 'R² 在 0 到 1 之间，衡量模型对数据的拟合优度。'
                    },
                    {
                        question: '残差（Residual）是什么？',
                        options: [
                            '观测值与预测值之差',
                            '回归系数',
                            '误差方差',
                            '自变量'
                        ],
                        answer: 0,
                        explanation: '残差是实际观测值与模型预测值之间的差异。'
                    },
                    // ---- 常见检验 ----
                    {
                        question: 't 检验（t-test）常用于比较什么？',
                        options: [
                            '两组均值是否有显著差异',
                            '多个组均值差异',
                            '变量关系',
                            '数据分布'
                        ],
                        answer: 0,
                        explanation: 't 检验用于比较两组数据的均值（例如独立样本 t 检验、配对 t 检验）。'
                    },
                    {
                        question: '卡方检验（Chi-square test）常用于？',
                        options: [
                            '分类变量之间的关联性',
                            '均值比较',
                            '方差分析',
                            '相关分析'
                        ],
                        answer: 0,
                        explanation: '卡方检验常用于列联表，检验两个分类变量是否独立。'
                    },
                    {
                        question: '方差分析（ANOVA）用于什么？',
                        options: [
                            '比较三个及以上组的均值差异',
                            '比较两组均值',
                            '相关分析',
                            '回归分析'
                        ],
                        answer: 0,
                        explanation: 'ANOVA 用于检验多个组之间均值是否存在显著差异。'
                    }
                ],
                resources: [
                    { name: '可汗学院 - 统计学', url: 'https://zh.khanacademy.org/math/statistics-probability', type: 'course' },
                    { name: '统计学入门', url: 'https://www.bilibili.com/video/BV1Cb411K7XG', type: 'video' },
                    { name: '商务与经济统计', url: 'https://book.douban.com/subject/25953877/', type: 'book' },
                ]
            },
            {
                id: 'machine_learning',
                name: '机器学习建模',
                icon: '🤖',
                description: 'Scikit-learn 建模、特征与评估',
                priority: 'important',
                quizs: [
                    // ---- 机器学习基础概念 ----
                    {
                        question: '机器学习的主要类型有哪些？',
                        options: [
                            '监督学习、无监督学习、强化学习',
                            '回归、分类、聚类',
                            '深度学习、神经网络',
                            '线性模型、树模型'
                        ],
                        answer: 0,
                        explanation: '机器学习主要分为监督学习（有标签）、无监督学习（无标签）和强化学习。'
                    },
                    {
                        question: '监督学习（Supervised Learning）的特点是什么？',
                        options: [
                            '训练数据包含输入和对应标签',
                            '数据没有标签',
                            '与环境交互学习',
                            '不需要训练'
                        ],
                        answer: 0,
                        explanation: '监督学习使用带标签的训练数据，学习从输入到输出的映射。'
                    },
                    {
                        question: '无监督学习（Unsupervised Learning）的典型任务是什么？',
                        options: [
                            '聚类和降维',
                            '分类和回归',
                            '目标检测',
                            '机器翻译'
                        ],
                        answer: 0,
                        explanation: '无监督学习在无标签数据上发现模式，常见任务包括聚类、降维和关联规则。'
                    },
                    {
                        question: '回归问题（Regression）的输出是什么类型？',
                        options: [
                            '连续数值',
                            '离散类别',
                            '概率',
                            '序列'
                        ],
                        answer: 0,
                        explanation: '回归任务预测连续值，如房价、温度。'
                    },
                    {
                        question: '分类问题（Classification）的输出是什么类型？',
                        options: [
                            '离散类别标签',
                            '连续数值',
                            '概率',
                            '无输出'
                        ],
                        answer: 0,
                        explanation: '分类任务预测离散类别，如垃圾邮件检测（是/否）、图像识别。'
                    },
                    // ---- Scikit-learn 基础 ----
                    {
                        question: 'Scikit-learn 是什么？',
                        options: [
                            'Python 的机器学习库',
                            '深度学习框架',
                            '数据可视化库',
                            '自然语言处理库'
                        ],
                        answer: 0,
                        explanation: 'Scikit-learn 是基于 NumPy 和 SciPy 的机器学习库，提供简单高效的机器学习工具。'
                    },
                    {
                        question: 'Scikit-learn 中，用于划分训练集和测试集的函数是？',
                        options: ['train_test_split', 'cross_val_score', 'KFold', 'ShuffleSplit'],
                        answer: 0,
                        explanation: '`train_test_split` 是用于随机划分训练集和测试集的常用函数。'
                    },
                    {
                        question: 'Scikit-learn 中，数据预处理的常用模块是？',
                        options: ['sklearn.preprocessing', 'sklearn.model_selection', 'sklearn.metrics', 'sklearn.pipeline'],
                        answer: 0,
                        explanation: '`preprocessing` 模块提供标准化、归一化、编码等功能。'
                    },
                    {
                        question: 'Scikit-learn 中，用于评估模型性能的模块是？',
                        options: ['sklearn.metrics', 'sklearn.model_selection', 'sklearn.preprocessing', 'sklearn.pipeline'],
                        answer: 0,
                        explanation: '`metrics` 模块提供准确率、精确率、召回率、F1 分数等评估指标。'
                    },
                    // ---- 线性模型 ----
                    {
                        question: '线性回归（Linear Regression）的基本假设是什么？',
                        options: [
                            '因变量与自变量之间存在线性关系',
                            '因变量是类别变量',
                            '数据必须正态分布',
                            '没有假设'
                        ],
                        answer: 0,
                        explanation: '线性回归假设因变量与自变量之间存在线性关系，且误差项独立同分布。'
                    },
                    {
                        question: '逻辑回归（Logistic Regression）主要用于什么？',
                        options: [
                            '二分类问题',
                            '回归问题',
                            '聚类',
                            '降维'
                        ],
                        answer: 0,
                        explanation: '尽管名字有“回归”，但逻辑回归是一种用于分类的线性模型。'
                    },
                    {
                        question: '逻辑回归的输出经过什么函数转换？',
                        options: ['Sigmoid 函数', 'Softmax 函数', 'ReLU 函数', 'Tanh 函数'],
                        answer: 0,
                        explanation: '逻辑回归使用 Sigmoid 函数将线性输出映射到 0-1 之间的概率。'
                    },
                    // ---- 树模型与集成学习 ----
                    {
                        question: '决策树（Decision Tree）的节点分裂依据是什么？',
                        options: [
                            '不纯度降低最多（如基尼系数、信息增益）',
                            '误差最小',
                            '距离最近',
                            '随机选择'
                        ],
                        answer: 0,
                        explanation: '决策树通过选择使不纯度（基尼系数、信息熵）下降最多的特征进行分裂。'
                    },
                    {
                        question: '随机森林（Random Forest）属于什么方法？',
                        options: [
                            '集成学习中的 Bagging',
                            '集成学习中的 Boosting',
                            '单一决策树',
                            '线性模型'
                        ],
                        answer: 0,
                        explanation: '随机森林通过构建多棵决策树并集成它们的预测结果，是 Bagging 的代表算法。'
                    },
                    {
                        question: '梯度提升树（GBDT）属于什么方法？',
                        options: [
                            '集成学习中的 Boosting',
                            '集成学习中的 Bagging',
                            '单一决策树',
                            '线性模型'
                        ],
                        answer: 0,
                        explanation: '梯度提升树通过逐步添加弱学习器，优化损失函数，是 Boosting 算法。'
                    },
                    {
                        question: 'XGBoost 是什么？',
                        options: [
                            '优化的梯度提升库',
                            '随机森林变体',
                            '支持向量机',
                            '神经网络'
                        ],
                        answer: 0,
                        explanation: 'XGBoost 是优化的分布式梯度提升库，高效且灵活，在 Kaggle 竞赛中广泛使用。'
                    },
                    // ---- 支持向量机 ----
                    {
                        question: '支持向量机（SVM）的目标是什么？',
                        options: [
                            '找到最大间隔的超平面',
                            '最小化误差平方和',
                            '最大化似然函数',
                            '最小化损失函数'
                        ],
                        answer: 0,
                        explanation: 'SVM 寻找一个超平面，使不同类别样本之间的间隔最大化。'
                    },
                    {
                        question: 'SVM 中的“核技巧”（Kernel Trick）的作用是什么？',
                        options: [
                            '将数据映射到高维空间，处理非线性问题',
                            '加速训练',
                            '降维',
                            '防止过拟合'
                        ],
                        answer: 0,
                        explanation: '核技巧允许 SVM 在高维特征空间中间接计算，而不必显式转换数据。'
                    },
                    // ---- 无监督学习 ----
                    {
                        question: 'K-Means 聚类算法的输入参数 K 表示什么？',
                        options: [
                            '要形成的簇数量',
                            '迭代次数',
                            '样本数量',
                            '特征数量'
                        ],
                        answer: 0,
                        explanation: 'K-Means 需要预先指定要划分的簇的数量 K。'
                    },
                    {
                        question: 'K-Means 算法的核心步骤是？',
                        options: [
                            '分配样本到最近的质心，更新质心',
                            '计算距离矩阵',
                            '构建树状图',
                            '降维'
                        ],
                        answer: 0,
                        explanation: 'K-Means 迭代进行：分配每个点到最近的簇中心，然后重新计算簇中心。'
                    },
                    {
                        question: '主成分分析（PCA）的主要应用是什么？',
                        options: [
                            '降维和特征提取',
                            '分类',
                            '回归',
                            '聚类'
                        ],
                        answer: 0,
                        explanation: 'PCA 通过线性变换将数据投影到新坐标系，选择方差最大的主成分，实现降维。'
                    },
                    // ---- 模型评估与选择 ----
                    {
                        question: '混淆矩阵（Confusion Matrix）中包含哪些指标？',
                        options: [
                            'TP, TN, FP, FN',
                            '准确率、召回率',
                            '精确率、F1分数',
                            '以上都是'
                        ],
                        answer: 0,
                        explanation: '混淆矩阵是分类问题中统计真正例、真反例、假正例、假反例的表格。'
                    },
                    {
                        question: '准确率（Accuracy）的定义是什么？',
                        options: [
                            '(TP + TN) / (TP + TN + FP + FN)',
                            'TP / (TP + FP)',
                            'TP / (TP + FN)',
                            '2 * (precision * recall) / (precision + recall)'
                        ],
                        answer: 0,
                        explanation: '准确率是正确预测的样本数占总样本数的比例。'
                    },
                    {
                        question: '精确率（Precision）的定义是什么？',
                        options: [
                            'TP / (TP + FP)',
                            'TP / (TP + FN)',
                            '(TP + TN) / (TP + TN + FP + FN)',
                            '2 * (precision * recall) / (precision + recall)'
                        ],
                        answer: 0,
                        explanation: '精确率衡量预测为正例的样本中有多少是真正的正例。'
                    },
                    {
                        question: '召回率（Recall）的定义是什么？',
                        options: [
                            'TP / (TP + FN)',
                            'TP / (TP + FP)',
                            '(TP + TN) / (TP + TN + FP + FN)',
                            '2 * (precision * recall) / (precision + recall)'
                        ],
                        answer: 0,
                        explanation: '召回率衡量真正的正例中有多少被正确预测出来。'
                    },
                    {
                        question: 'F1 分数（F1-Score）是精确率和召回率的什么？',
                        options: [
                            '调和平均数',
                            '算术平均数',
                            '几何平均数',
                            '平方平均数'
                        ],
                        answer: 0,
                        explanation: 'F1 分数是精确率和召回率的调和平均，综合考虑两者。'
                    },
                    {
                        question: '交叉验证（Cross-Validation）的主要作用是什么？',
                        options: [
                            '评估模型泛化能力，减少过拟合',
                            '增加训练数据',
                            '加速训练',
                            '特征选择'
                        ],
                        answer: 0,
                        explanation: '交叉验证将数据分为多份，轮流作为训练集和验证集，更稳定地评估模型性能。'
                    },
                    {
                        question: '过拟合（Overfitting）是指什么？',
                        options: [
                            '模型在训练集上表现很好，但在测试集上表现差',
                            '模型在训练集和测试集上都表现差',
                            '模型训练时间太长',
                            '模型太简单'
                        ],
                        answer: 0,
                        explanation: '过拟合是模型学习到了训练数据中的噪声和细节，导致泛化能力下降。'
                    },
                    {
                        question: '欠拟合（Underfitting）是指什么？',
                        options: [
                            '模型在训练集和测试集上表现都差',
                            '模型在训练集上表现好，测试集差',
                            '模型训练时间太短',
                            '模型太复杂'
                        ],
                        answer: 0,
                        explanation: '欠拟合是模型过于简单，未能捕捉数据中的潜在模式。'
                    },
                    {
                        question: '正则化（Regularization）的作用是什么？',
                        options: [
                            '防止过拟合，通过惩罚复杂模型',
                            '提高训练速度',
                            '增加模型复杂度',
                            '特征选择'
                        ],
                        answer: 0,
                        explanation: '正则化在损失函数中加入模型复杂度惩罚项，如 L1（LASSO）和 L2（Ridge）正则化。'
                    },
                    {
                        question: 'Scikit-learn 中，构建机器学习工作流的推荐方式是？',
                        options: [
                            '使用 Pipeline 类串联预处理和模型',
                            '手动一步步执行',
                            '使用单独脚本',
                            '使用 Excel'
                        ],
                        answer: 0,
                        explanation: '`Pipeline` 可以将数据预处理和模型训练串联，简化工作流，避免数据泄露。'
                    }
                ],
                resources: [
                    { name: 'Scikit-learn官方文档', url: 'https://scikit-learn.org/stable/', type: 'docs' },
                    { name: '吴恩达机器学习', url: 'https://www.coursera.org/learn/machine-learning', type: 'course' },
                    { name: '机器学习实战', url: 'https://book.douban.com/subject/26708119/', type: 'book' },
                ]
            },
        ]
    },
    {
        id: 'ai',
        name: 'AI/算法',
        icon: '🤖',
        category: 'ai',
        description: '结合数学、模型与工程实现落地智能应用',
        skills: [
            {
                id: 'python_ai',
                name: 'Python AI 开发',
                icon: '🐍',
                description: 'AI 实验、数值计算与训练脚本基础',
                priority: 'core',
                quizs: [
                    // ---- Python AI基础 ----
                    {
                        question: 'Python 在 AI 开发中的主要优势是什么？',
                        options: [
                            '丰富的库生态、简洁的语法、强大的社区支持',
                            '执行速度最快',
                            '内存占用最小',
                            '适合底层开发'
                        ],
                        answer: 0,
                        explanation: 'Python 因其丰富的 AI/ML 库（NumPy, PyTorch, TensorFlow）、简洁语法和庞大社区，成为 AI 开发的首选语言。'
                    },
                    {
                        question: 'AI 开发中，用于数值计算的核心库是？',
                        options: ['NumPy', 'Matplotlib', 'Pandas', 'Seaborn'],
                        answer: 0,
                        explanation: 'NumPy 提供了多维数组对象和各种数学函数，是 AI/ML 中数值计算的基础。'
                    },
                    {
                        question: 'Python 中，用于科学计算的库是？',
                        options: ['SciPy', 'NumPy', 'SymPy', '以上都是'],
                        answer: 3,
                        explanation: 'SciPy 构建在 NumPy 之上，提供优化、线性代数、积分等科学计算功能。'
                    },
                    {
                        question: 'Python 中，用于数据处理的库是？',
                        options: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
                        answer: 0,
                        explanation: 'Pandas 提供了 DataFrame 等数据结构，是数据清洗和处理的利器。'
                    },
                    {
                        question: 'Python 中，用于机器学习的经典库是？',
                        options: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'Keras'],
                        answer: 0,
                        explanation: 'Scikit-learn 提供了简单高效的机器学习工具，适合传统机器学习算法。'
                    },
                    {
                        question: 'Python 中，用于深度学习的库有哪些？',
                        options: ['PyTorch, TensorFlow, Keras', 'NumPy, SciPy', 'Matplotlib, Seaborn', 'Pandas, Scikit-learn'],
                        answer: 0,
                        explanation: 'PyTorch 和 TensorFlow 是两大主流深度学习框架，Keras 是 TensorFlow 的高级 API。'
                    },
                    {
                        question: 'Python 中，用于数据可视化的库是？',
                        options: ['Matplotlib, Seaborn', 'NumPy, SciPy', 'Pandas', 'Scikit-learn'],
                        answer: 0,
                        explanation: 'Matplotlib 是最基础的绘图库，Seaborn 在其基础上提供更美观的统计图表。'
                    },
                    {
                        question: 'Jupyter Notebook 在 AI 开发中的主要用途是什么？',
                        options: [
                            '交互式编程、实验记录、结果可视化',
                            '部署模型',
                            '生产环境运行',
                            '代码编译'
                        ],
                        answer: 0,
                        explanation: 'Jupyter Notebook 支持代码、文本、公式和可视化结果的混合，非常适合 AI 实验和教学。'
                    },
                    {
                        question: 'Python 中，用于读取图像的常用库是？',
                        options: ['OpenCV (cv2)', 'PIL/Pillow', 'matplotlib.image', '以上都是'],
                        answer: 3,
                        explanation: 'OpenCV、Pillow 和 Matplotlib 都支持图像的读取和处理。'
                    },
                    {
                        question: 'Python 中，用于处理 JSON 数据的标准库是？',
                        options: ['json', 'pickle', 'yaml', 'csv'],
                        answer: 0,
                        explanation: '`json` 模块用于 JSON 数据的编码和解码。'
                    },
                    {
                        question: 'Python 中，用于正则表达式操作的标准库是？',
                        options: ['re', 'regex', 'reg', 'parse'],
                        answer: 0,
                        explanation: '`re` 模块提供了正则表达式操作。'
                    },
                    {
                        question: 'Python 中，用于系统文件和路径操作的标准库是？',
                        options: ['os', 'sys', 'path', 'file'],
                        answer: 0,
                        explanation: '`os` 模块提供了与操作系统交互的功能，包括文件和目录操作。'
                    },
                    {
                        question: 'Python 中，用于复制对象的模块是？',
                        options: ['copy', 'deepcopy', 'clone', '复制'],
                        answer: 0,
                        explanation: '`copy` 模块提供了 `copy()` 和 `deepcopy()` 函数。'
                    },
                    {
                        question: 'Python 中，用于随机数生成的模块是？',
                        options: ['random', 'numpy.random', 'secrets', '以上都是'],
                        answer: 3,
                        explanation: '内置 `random` 模块、NumPy 的 `random` 子模块以及 `secrets` 模块都可以生成随机数。'
                    },
                    {
                        question: 'Python 中，用于性能测量的标准库是？',
                        options: ['timeit', 'cProfile', 'time', '以上都是'],
                        answer: 3,
                        explanation: '`timeit` 用于小段代码计时，`cProfile` 用于性能分析，`time` 提供基本时间函数。'
                    },
                    {
                        question: 'Python 中，用于并发编程的模块有哪些？',
                        options: ['threading', 'multiprocessing', 'asyncio', '以上都是'],
                        answer: 3,
                        explanation: '`threading` 用于多线程，`multiprocessing` 用于多进程，`asyncio` 用于异步 I/O。'
                    },
                    {
                        question: 'Python 中，用于解析命令行参数的模块是？',
                        options: ['argparse', 'sys.argv', 'click', '以上都是'],
                        answer: 3,
                        explanation: '`argparse` 是标准库，`click` 是第三方库，`sys.argv` 可以获取原始参数。'
                    },
                    {
                        question: 'Python 中，用于日志记录的标准库是？',
                        options: ['logging', 'log', 'logger', 'log4j'],
                        answer: 0,
                        explanation: '`logging` 模块提供了灵活的日志记录系统。'
                    },
                    {
                        question: 'Python 中，用于单元测试的标准库是？',
                        options: ['unittest', 'pytest', 'doctest', 'A 和 C'],
                        answer: 3,
                        explanation: '`unittest` 和 `doctest` 是标准库，`pytest` 是第三方但广泛使用。'
                    },
                    {
                        question: 'Python 中，用于数据序列化的模块是？',
                        options: ['pickle', 'json', 'joblib', '以上都是'],
                        answer: 3,
                        explanation: '`pickle` 用于 Python 对象序列化，`json` 用于 JSON 格式，`joblib` 常用于 Scikit-learn 模型保存。'
                    },
                    {
                        question: 'Python 中，用于数学常量和函数的模块是？',
                        options: ['math', 'cmath', 'statistics', '以上都是'],
                        answer: 3,
                        explanation: '`math` 提供基本数学函数，`cmath` 提供复数运算，`statistics` 提供统计函数。'
                    },
                    {
                        question: 'Python 中，列表推导式（list comprehension）的作用是？',
                        options: [
                            '简洁地创建列表',
                            '推导数学公式',
                            '列表排序',
                            '列表复制'
                        ],
                        answer: 0,
                        explanation: '列表推导式提供了一种简洁的方式来创建列表，例如 `[x**2 for x in range(10)]`。'
                    },
                    {
                        question: 'Python 中，生成器（generator）的特点是什么？',
                        options: [
                            '惰性求值，节省内存',
                            '一次性生成所有值',
                            '只能用于循环',
                            '不能迭代'
                        ],
                        answer: 0,
                        explanation: '生成器使用 `yield` 关键字，每次迭代时生成下一个值，不占用大量内存。'
                    },
                    {
                        question: 'Python 中，装饰器（decorator）的用途是什么？',
                        options: [
                            '在不修改函数代码的情况下增加功能',
                            '装饰界面',
                            '美化代码',
                            '提高执行速度'
                        ],
                        answer: 0,
                        explanation: '装饰器是一种高阶函数，可以在不改变原函数定义的情况下扩展其行为。'
                    },
                    {
                        question: 'Python 中，上下文管理器（with 语句）的作用是？',
                        options: [
                            '管理资源，确保正确释放',
                            '创建上下文',
                            '管理变量作用域',
                            '控制流程'
                        ],
                        answer: 0,
                        explanation: '上下文管理器用于包装 `try...except...finally` 模式，确保资源（如文件）在使用后被正确关闭。'
                    },
                    {
                        question: 'Python 中，`__init__.py` 文件的作用是？',
                        options: [
                            '将目录标记为 Python 包',
                            '初始化模块',
                            '配置项目',
                            '存储元数据'
                        ],
                        answer: 0,
                        explanation: '`__init__.py` 文件用于标识一个目录是一个 Python 包，可以包含包的初始化代码。'
                    },
                    {
                        question: 'Python 中，虚拟环境（virtual environment）的作用是？',
                        options: [
                            '隔离项目依赖，避免版本冲突',
                            '模拟硬件环境',
                            '创建虚拟机',
                            '运行测试'
                        ],
                        answer: 0,
                        explanation: '虚拟环境为每个项目创建独立的 Python 环境，避免不同项目依赖的版本冲突。'
                    },
                    {
                        question: 'Python 中，安装第三方库的命令是？',
                        options: ['pip install', 'conda install', 'python install', 'A 和 B'],
                        answer: 3,
                        explanation: '常用 `pip install` 或 `conda install` 安装第三方库。'
                    },
                    {
                        question: 'Python 中，用于类型注解的语法是？',
                        options: [
                            '使用冒号 : 标注类型',
                            '使用 type 关键字',
                            '使用注解装饰器',
                            '不需要类型注解'
                        ],
                        answer: 0,
                        explanation: '类型注解语法如 `name: str = "Alice"` 或 `def add(a: int, b: int) -> int:`。'
                    },
                    {
                        question: 'Python 中，`if __name__ == "__main__":` 的作用是什么？',
                        options: [
                            '判断模块是被导入还是直接运行',
                            '定义主函数',
                            '检查代码是否为主程序',
                            '条件语句'
                        ],
                        answer: 0,
                        explanation: '该条件为真时，表示模块作为脚本直接运行，常用于测试代码。'
                    },
                    {
                        question: 'Python 中，用于异常处理的基本结构是？',
                        options: ['try-except', 'try-catch', 'catch-error', 'exception-handle'],
                        answer: 0,
                        explanation: 'Python 使用 `try-except` 块捕获和处理异常。'
                    },
                    {
                        question: 'Python 中，`finally` 子句的作用是？',
                        options: [
                            '无论是否发生异常都会执行',
                            '只在异常时执行',
                            '只在无异常时执行',
                            '在 except 前执行'
                        ],
                        answer: 0,
                        explanation: '`finally` 中的代码无论是否发生异常都会执行，常用于资源清理。'
                    },
                    {
                        question: 'Python 中，用于手动抛出异常的关键字是？',
                        options: ['raise', 'throw', 'except', 'assert'],
                        answer: 0,
                        explanation: '`raise` 关键字用于手动抛出一个异常。'
                    },
                    {
                        question: 'Python 中，`assert` 语句的用途是什么？',
                        options: [
                            '调试时检查条件，条件为假时抛出 AssertionError',
                            '断言变量存在',
                            '声明变量类型',
                            '测试代码'
                        ],
                        answer: 0,
                        explanation: '`assert` 用于在开发阶段检查应该为真的条件，失败时终止程序。'
                    },
                    {
                        question: 'Python 中，`*args` 和 `**kwargs` 的作用是什么？',
                        options: [
                            '分别用于接收可变数量的位置参数和关键字参数',
                            '解包操作符',
                            '指针',
                            '引用传递'
                        ],
                        answer: 0,
                        explanation: '`*args` 将多余位置参数收集为元组，`**kwargs` 将多余关键字参数收集为字典。'
                    },
                    {
                        question: 'Python 中，`lambda` 关键字定义的是什么？',
                        options: ['匿名函数', '匿名类', '变量', '模块'],
                        answer: 0,
                        explanation: '`lambda` 用于定义简单的单行匿名函数。'
                    },
                    {
                        question: 'Python 中，`map()` 函数的用途是？',
                        options: [
                            '对可迭代对象每个元素应用函数',
                            '映射数据类型',
                            '绘制地图',
                            '创建字典'
                        ],
                        answer: 0,
                        explanation: '`map(function, iterable)` 将函数应用于可迭代对象的每个元素。'
                    },
                    {
                        question: 'Python 中，`filter()` 函数的用途是？',
                        options: [
                            '过滤可迭代对象中满足条件的元素',
                            '过滤数据',
                            '筛选文件',
                            '清洗数据'
                        ],
                        answer: 0,
                        explanation: '`filter(function, iterable)` 返回一个迭代器，包含使函数返回 True 的元素。'
                    },
                    {
                        question: 'Python 中，`reduce()` 函数位于哪个模块？',
                        options: ['functools', 'itertools', 'operator', 'collections'],
                        answer: 0,
                        explanation: '`functools.reduce()` 对序列进行累积计算。'
                    },
                    {
                        question: 'Python 中，`zip()` 函数的用途是？',
                        options: [
                            '将多个可迭代对象按元素打包成元组',
                            '压缩文件',
                            '解压文件',
                            '迭代'
                        ],
                        answer: 0,
                        explanation: '`zip()` 将多个可迭代对象中对应的元素打包成元组，返回一个 zip 对象。'
                    },
                    {
                        question: 'Python 中，`enumerate()` 函数的用途是？',
                        options: [
                            '在遍历时同时获取索引和值',
                            '计数元素',
                            '枚举类型定义',
                            '生成随机数'
                        ],
                        answer: 0,
                        explanation: '`enumerate(iterable)` 返回一个枚举对象，产生索引和值的元组。'
                    },
                    {
                        question: 'Python 中，`any()` 和 `all()` 函数的区别是？',
                        options: [
                            'any 任一为真返回 True，all 全部为真返回 True',
                            'any 用于数字，all 用于字符串',
                            'any 用于集合，all 用于列表',
                            '没有区别'
                        ],
                        answer: 0,
                        explanation: '`any()` 在可迭代对象中有任一元素为真时返回 True，`all()` 在所有元素都为真时返回 True。'
                    }
                ],
                resources: [
                    { name: 'Python官方文档', url: 'https://docs.python.org/zh-cn/3/', type: 'docs' },
                    { name: 'Python AI开发教程', url: 'https://www.bilibili.com/video/BV1T54y1X7gV', type: 'video' },
                ]
            },
            {
                id: 'ml_basics',
                name: '机器学习基础',
                icon: '🧠',
                description: '监督学习、无监督学习与模型评估基础',
                priority: 'core',
                quizs: [
                    // ---- 机器学习基础概念 ----
                    {
                        question: '机器学习的定义是什么？',
                        options: [
                            '计算机系统使用数据学习，无需明确编程就能提高性能',
                            '计算机编程自动化',
                            '数据库查询优化',
                            '人工智能的别称'
                        ],
                        answer: 0,
                        explanation: 'Arthur Samuel 将机器学习定义为“使计算机无需明确编程就能学习的领域”。'
                    },
                    {
                        question: '机器学习的主要类型有哪些？',
                        options: [
                            '监督学习、无监督学习、强化学习',
                            '分类、回归、聚类',
                            '深度学习、神经网络',
                            '线性模型、树模型'
                        ],
                        answer: 0,
                        explanation: '机器学习主要分为监督学习（有标签）、无监督学习（无标签）和强化学习（与环境交互）。'
                    },
                    {
                        question: '监督学习（Supervised Learning）的特点是什么？',
                        options: [
                            '训练数据包含输入和对应标签',
                            '数据没有标签',
                            '与环境交互学习',
                            '不需要训练'
                        ],
                        answer: 0,
                        explanation: '监督学习使用带标签的训练数据，学习从输入到输出的映射。'
                    },
                    {
                        question: '无监督学习（Unsupervised Learning）的典型任务是什么？',
                        options: [
                            '聚类和降维',
                            '分类和回归',
                            '目标检测',
                            '机器翻译'
                        ],
                        answer: 0,
                        explanation: '无监督学习在无标签数据上发现模式，常见任务包括聚类、降维和关联规则。'
                    },
                    {
                        question: '强化学习（Reinforcement Learning）的核心要素是什么？',
                        options: [
                            '智能体、环境、状态、动作、奖励',
                            '特征、标签、模型',
                            '数据、算法、模型',
                            '输入、输出、误差'
                        ],
                        answer: 0,
                        explanation: '强化学习中，智能体在环境中采取动作，获得奖励，目标是最大化累积奖励。'
                    },
                    {
                        question: '回归问题（Regression）的输出是什么类型？',
                        options: [
                            '连续数值',
                            '离散类别',
                            '概率',
                            '序列'
                        ],
                        answer: 0,
                        explanation: '回归任务预测连续值，如房价、温度。'
                    },
                    {
                        question: '分类问题（Classification）的输出是什么类型？',
                        options: [
                            '离散类别标签',
                            '连续数值',
                            '概率',
                            '无输出'
                        ],
                        answer: 0,
                        explanation: '分类任务预测离散类别，如垃圾邮件检测（是/否）、图像识别。'
                    },
                    {
                        question: '监督学习中，特征（Feature）和标签（Label）的关系是？',
                        options: [
                            '特征是输入，标签是要预测的输出',
                            '特征是输出，标签是输入',
                            '两者相同',
                            '没有关系'
                        ],
                        answer: 0,
                        explanation: '特征是用于预测的输入变量，标签是我们希望模型预测的真实值。'
                    },
                    // ---- 模型评估 ----
                    {
                        question: '混淆矩阵（Confusion Matrix）中包含哪些指标？',
                        options: [
                            'TP, TN, FP, FN',
                            '准确率、召回率',
                            '精确率、F1分数',
                            '以上都是'
                        ],
                        answer: 0,
                        explanation: '混淆矩阵是分类问题中统计真正例、真反例、假正例、假反例的表格。'
                    },
                    {
                        question: '准确率（Accuracy）的定义是什么？',
                        options: [
                            '(TP + TN) / (TP + TN + FP + FN)',
                            'TP / (TP + FP)',
                            'TP / (TP + FN)',
                            '2 * (precision * recall) / (precision + recall)'
                        ],
                        answer: 0,
                        explanation: '准确率是正确预测的样本数占总样本数的比例。'
                    },
                    {
                        question: '精确率（Precision）的定义是什么？',
                        options: [
                            'TP / (TP + FP)',
                            'TP / (TP + FN)',
                            '(TP + TN) / (TP + TN + FP + FN)',
                            '2 * (precision * recall) / (precision + recall)'
                        ],
                        answer: 0,
                        explanation: '精确率衡量预测为正例的样本中有多少是真正的正例。'
                    },
                    {
                        question: '召回率（Recall）的定义是什么？',
                        options: [
                            'TP / (TP + FN)',
                            'TP / (TP + FP)',
                            '(TP + TN) / (TP + TN + FP + FN)',
                            '2 * (precision * recall) / (precision + recall)'
                        ],
                        answer: 0,
                        explanation: '召回率衡量真正的正例中有多少被正确预测出来。'
                    },
                    {
                        question: 'F1 分数（F1-Score）是精确率和召回率的什么？',
                        options: [
                            '调和平均数',
                            '算术平均数',
                            '几何平均数',
                            '平方平均数'
                        ],
                        answer: 0,
                        explanation: 'F1 分数是精确率和召回率的调和平均，综合考虑两者。'
                    },
                    {
                        question: 'ROC 曲线（Receiver Operating Characteristic curve）的横纵坐标是什么？',
                        options: [
                            '横轴：假正率（FPR），纵轴：真正率（TPR）',
                            '横轴：阈值，纵轴：准确率',
                            '横轴：召回率，纵轴：精确率',
                            '横轴：样本数，纵轴：误差'
                        ],
                        answer: 0,
                        explanation: 'ROC 曲线以假正率（FPR）为横轴，真正率（TPR）为纵轴，展示分类器在不同阈值下的性能。'
                    },
                    {
                        question: 'AUC（Area Under the Curve）的含义是什么？',
                        options: [
                            'ROC 曲线下的面积，值越大分类器性能越好',
                            '准确率',
                            '均方误差',
                            '召回率'
                        ],
                        answer: 0,
                        explanation: 'AUC 衡量分类器区分正负类的能力，取值范围在 0.5 到 1 之间。'
                    },
                    {
                        question: '过拟合（Overfitting）是指什么？',
                        options: [
                            '模型在训练集上表现很好，但在测试集上表现差',
                            '模型在训练集和测试集上都表现差',
                            '模型训练时间太长',
                            '模型太简单'
                        ],
                        answer: 0,
                        explanation: '过拟合是模型学习到了训练数据中的噪声和细节，导致泛化能力下降。'
                    },
                    {
                        question: '欠拟合（Underfitting）是指什么？',
                        options: [
                            '模型在训练集和测试集上表现都差',
                            '模型在训练集上表现好，测试集差',
                            '模型训练时间太短',
                            '模型太复杂'
                        ],
                        answer: 0,
                        explanation: '欠拟合是模型过于简单，未能捕捉数据中的潜在模式。'
                    },
                    {
                        question: '偏差（Bias）和方差（Variance）的权衡关系是？',
                        options: [
                            '高偏差导致欠拟合，高方差导致过拟合',
                            '高偏差导致过拟合，高方差导致欠拟合',
                            '两者无关',
                            '偏差和方差必须都高'
                        ],
                        answer: 0,
                        explanation: '简单模型通常高偏差低方差，复杂模型低偏差高方差，需要在两者间平衡。'
                    },
                    {
                        question: '交叉验证（Cross-Validation）的主要作用是什么？',
                        options: [
                            '评估模型泛化能力，减少过拟合',
                            '增加训练数据',
                            '加速训练',
                            '特征选择'
                        ],
                        answer: 0,
                        explanation: '交叉验证将数据分为多份，轮流作为训练集和验证集，更稳定地评估模型性能。'
                    },
                    {
                        question: 'K 折交叉验证（K-Fold CV）中，数据如何划分？',
                        options: [
                            '数据分为 K 份，每次用 K-1 份训练，1 份验证',
                            '数据分为 K 份，每次用 1 份训练，K-1 份验证',
                            '随机采样',
                            '按顺序划分'
                        ],
                        answer: 0,
                        explanation: 'K 折交叉验证将数据均匀分为 K 份，重复 K 次，每次用 K-1 份训练，1 份验证。'
                    },
                    // ---- 常用算法 ----
                    {
                        question: '线性回归（Linear Regression）的基本假设是什么？',
                        options: [
                            '因变量与自变量之间存在线性关系',
                            '因变量是类别变量',
                            '数据必须正态分布',
                            '没有假设'
                        ],
                        answer: 0,
                        explanation: '线性回归假设因变量与自变量之间存在线性关系，且误差项独立同分布。'
                    },
                    {
                        question: '逻辑回归（Logistic Regression）主要用于什么？',
                        options: [
                            '二分类问题',
                            '回归问题',
                            '聚类',
                            '降维'
                        ],
                        answer: 0,
                        explanation: '尽管名字有“回归”，但逻辑回归是一种用于分类的线性模型。'
                    },
                    {
                        question: '逻辑回归的输出经过什么函数转换？',
                        options: ['Sigmoid 函数', 'Softmax 函数', 'ReLU 函数', 'Tanh 函数'],
                        answer: 0,
                        explanation: '逻辑回归使用 Sigmoid 函数将线性输出映射到 0-1 之间的概率。'
                    },
                    {
                        question: '决策树（Decision Tree）的节点分裂依据是什么？',
                        options: [
                            '不纯度降低最多（如基尼系数、信息增益）',
                            '误差最小',
                            '距离最近',
                            '随机选择'
                        ],
                        answer: 0,
                        explanation: '决策树通过选择使不纯度（基尼系数、信息熵）下降最多的特征进行分裂。'
                    },
                    {
                        question: '随机森林（Random Forest）属于什么方法？',
                        options: [
                            '集成学习中的 Bagging',
                            '集成学习中的 Boosting',
                            '单一决策树',
                            '线性模型'
                        ],
                        answer: 0,
                        explanation: '随机森林通过构建多棵决策树并集成它们的预测结果，是 Bagging 的代表算法。'
                    },
                    {
                        question: '梯度提升树（GBDT）属于什么方法？',
                        options: [
                            '集成学习中的 Boosting',
                            '集成学习中的 Bagging',
                            '单一决策树',
                            '线性模型'
                        ],
                        answer: 0,
                        explanation: '梯度提升树通过逐步添加弱学习器，优化损失函数，是 Boosting 算法。'
                    },
                    {
                        question: '支持向量机（SVM）的目标是什么？',
                        options: [
                            '找到最大间隔的超平面',
                            '最小化误差平方和',
                            '最大化似然函数',
                            '最小化损失函数'
                        ],
                        answer: 0,
                        explanation: 'SVM 寻找一个超平面，使不同类别样本之间的间隔最大化。'
                    },
                    {
                        question: 'SVM 中的“核技巧”（Kernel Trick）的作用是什么？',
                        options: [
                            '将数据映射到高维空间，处理非线性问题',
                            '加速训练',
                            '降维',
                            '防止过拟合'
                        ],
                        answer: 0,
                        explanation: '核技巧允许 SVM 在高维特征空间中间接计算，而不必显式转换数据。'
                    },
                    {
                        question: 'K 近邻（KNN）算法的原理是什么？',
                        options: [
                            '找到离新点最近的 K 个训练样本，进行投票或平均',
                            '构建决策树',
                            '最大化间隔',
                            '线性组合'
                        ],
                        answer: 0,
                        explanation: 'KNN 基于实例的学习，新样本的类别由其 K 个最近邻居的多数类别决定。'
                    },
                    {
                        question: 'K-Means 聚类算法的输入参数 K 表示什么？',
                        options: [
                            '要形成的簇数量',
                            '迭代次数',
                            '样本数量',
                            '特征数量'
                        ],
                        answer: 0,
                        explanation: 'K-Means 需要预先指定要划分的簇的数量 K。'
                    },
                    {
                        question: 'K-Means 算法的核心步骤是？',
                        options: [
                            '分配样本到最近的质心，更新质心',
                            '计算距离矩阵',
                            '构建树状图',
                            '降维'
                        ],
                        answer: 0,
                        explanation: 'K-Means 迭代进行：分配每个点到最近的簇中心，然后重新计算簇中心。'
                    },
                    {
                        question: '主成分分析（PCA）的主要应用是什么？',
                        options: [
                            '降维和特征提取',
                            '分类',
                            '回归',
                            '聚类'
                        ],
                        answer: 0,
                        explanation: 'PCA 通过线性变换将数据投影到新坐标系，选择方差最大的主成分，实现降维。'
                    },
                    {
                        question: '朴素贝叶斯（Naive Bayes）的“朴素”假设是什么？',
                        options: [
                            '特征之间相互独立',
                            '特征服从高斯分布',
                            '数据线性可分',
                            '类别均衡'
                        ],
                        answer: 0,
                        explanation: '朴素贝叶斯假设给定类别时，特征之间条件独立。'
                    },
                    // ---- 特征工程 ----
                    {
                        question: '特征工程包括哪些步骤？',
                        options: [
                            '特征提取、特征选择、特征构造',
                            '数据收集、模型训练',
                            '模型评估、调参',
                            '部署、监控'
                        ],
                        answer: 0,
                        explanation: '特征工程是从原始数据中创建能够更好表示问题特征的过程。'
                    },
                    {
                        question: '归一化（Normalization）和标准化（Standardization）的区别是？',
                        options: [
                            '归一化将数据缩放到 [0,1] 区间，标准化使均值为0，标准差为1',
                            '两者相同',
                            '归一化用于分类，标准化用于回归',
                            '归一化用于特征，标准化用于标签'
                        ],
                        answer: 0,
                        explanation: '归一化通常使用 Min-Max 缩放，标准化使用 Z-score 变换。'
                    },
                    {
                        question: '处理类别特征常用的方法是？',
                        options: [
                            '独热编码（One-Hot Encoding）',
                            '标准化',
                            '归一化',
                            '降维'
                        ],
                        answer: 0,
                        explanation: '独热编码将类别变量转换为二进制向量，避免模型误认为类别有顺序关系。'
                    },
                    {
                        question: '处理缺失值的方法包括？',
                        options: [
                            '删除、填充（均值、中位数、众数）、插值',
                            '只能删除',
                            '只能填充零',
                            '忽略'
                        ],
                        answer: 0,
                        explanation: '缺失值处理有多种策略，取决于数据量和缺失模式。'
                    }
                ],
                resources: [
                    { name: '吴恩达机器学习', url: 'https://www.coursera.org/learn/machine-learning', type: 'course' },
                    { name: '李宏毅机器学习', url: 'https://speech.ee.ntu.edu.tw/~hylee/ml/2021-spring.php', type: 'course' },
                    { name: '统计学习方法', url: 'https://book.douban.com/subject/33437381/', type: 'book' },
                ]
            },
            {
                id: 'deep_learning',
                name: '深度学习',
                icon: '🔮',
                description: '神经网络、训练流程与主流框架实践',
                priority: 'core',
                quizs: [
                    // ---- 深度学习基础 ----
                    {
                        question: '深度学习与传统机器学习的主要区别是什么？',
                        options: [
                            '深度学习使用多层神经网络自动学习特征表示',
                            '深度学习需要人工特征工程',
                            '深度学习不能处理大数据',
                            '深度学习更简单'
                        ],
                        answer: 0,
                        explanation: '深度学习通过多层网络自动从数据中学习层次化特征，无需手动特征工程。'
                    },
                    {
                        question: '神经网络中的“神经元”模拟了什么？',
                        options: [
                            '生物神经元：接收输入，加权求和，通过激活函数输出',
                            '计算机处理器',
                            '内存单元',
                            '逻辑门'
                        ],
                        answer: 0,
                        explanation: '人工神经元接收多个输入，进行加权求和，然后通过激活函数产生输出。'
                    },
                    {
                        question: '激活函数（Activation Function）的作用是什么？',
                        options: [
                            '引入非线性，使网络能学习复杂模式',
                            '线性变换',
                            '降维',
                            '正则化'
                        ],
                        answer: 0,
                        explanation: '没有激活函数的网络只能表示线性变换，激活函数引入非线性，使网络能逼近任意函数。'
                    },
                    {
                        question: '以下哪个是常用的激活函数？',
                        options: ['ReLU', 'Sigmoid', 'Tanh', '以上都是'],
                        answer: 3,
                        explanation: 'ReLU（修正线性单元）、Sigmoid 和 Tanh 都是常用的激活函数。'
                    },
                    {
                        question: 'Sigmoid 函数的输出范围是多少？',
                        options: ['(0, 1)', '(-1, 1)', '(-∞, ∞)', '[0, ∞]'],
                        answer: 0,
                        explanation: 'Sigmoid 函数将输入压缩到 0 到 1 之间，常用于二分类输出层。'
                    },
                    {
                        question: 'ReLU 激活函数的定义是什么？',
                        options: [
                            'f(x) = max(0, x)',
                            'f(x) = 1 / (1 + e^{-x})',
                            'f(x) = tanh(x)',
                            'f(x) = x'
                        ],
                        answer: 0,
                        explanation: 'ReLU（修正线性单元）在 x>0 时输出 x，否则输出 0。'
                    },
                    {
                        question: '神经网络中的“层”（Layer）是什么？',
                        options: [
                            '一组并行运行的神经元集合',
                            '网络的深度',
                            '数据的维度',
                            '训练的阶段'
                        ],
                        answer: 0,
                        explanation: '神经网络由输入层、隐藏层和输出层组成，每层包含多个神经元。'
                    },
                    {
                        question: '前向传播（Forward Propagation）的过程是？',
                        options: [
                            '输入数据逐层向前计算，得到输出',
                            '从输出反向计算梯度',
                            '更新权重',
                            '初始化参数'
                        ],
                        answer: 0,
                        explanation: '前向传播将输入通过网络各层，最终产生预测输出。'
                    },
                    {
                        question: '反向传播（Backpropagation）的作用是什么？',
                        options: [
                            '计算损失函数对各层参数的梯度',
                            '从输出向输入传播数据',
                            '加速训练',
                            '特征提取'
                        ],
                        answer: 0,
                        explanation: '反向传播通过链式法则计算损失函数对网络权重的梯度，用于梯度下降更新。'
                    },
                    {
                        question: '梯度下降（Gradient Descent）的目标是什么？',
                        options: [
                            '最小化损失函数',
                            '最大化准确率',
                            '增加模型复杂度',
                            '加速训练'
                        ],
                        answer: 0,
                        explanation: '梯度下降通过沿负梯度方向更新参数，逐步减小损失函数。'
                    },
                    {
                        question: '学习率（Learning Rate）在梯度下降中的作用是什么？',
                        options: [
                            '控制参数更新的步长',
                            '控制网络层数',
                            '控制正则化强度',
                            '控制批次大小'
                        ],
                        answer: 0,
                        explanation: '学习率决定了参数更新时的步长大小，过大会震荡，过小会收敛慢。'
                    },
                    {
                        question: '损失函数（Loss Function）衡量什么？',
                        options: [
                            '模型预测值与真实值之间的差异',
                            '模型的复杂度',
                            '训练速度',
                            '内存占用'
                        ],
                        answer: 0,
                        explanation: '损失函数量化模型预测与真实标签的不一致程度。'
                    },
                    {
                        question: '回归问题常用的损失函数是？',
                        options: ['均方误差（MSE）', '交叉熵损失', 'Hinge 损失', 'KL 散度'],
                        answer: 0,
                        explanation: '均方误差是回归任务中最常见的损失函数。'
                    },
                    {
                        question: '分类问题常用的损失函数是？',
                        options: ['交叉熵损失', '均方误差', '绝对值损失', 'Huber 损失'],
                        answer: 0,
                        explanation: '交叉熵损失是分类任务中最常用的损失函数。'
                    },
                    // ---- 网络结构 ----
                    {
                        question: '全连接层（Fully Connected Layer）的特点是什么？',
                        options: [
                            '每个神经元与上一层所有神经元相连',
                            '神经元只与局部区域相连',
                            '共享权重',
                            '无连接'
                        ],
                        answer: 0,
                        explanation: '全连接层中，每个输出神经元都与前一层的每个输入神经元相连。'
                    },
                    {
                        question: '卷积神经网络（CNN）主要用于什么类型的数据？',
                        options: [
                            '图像数据（网格结构）',
                            '序列数据（文本、时间序列）',
                            '图结构数据',
                            '任意数据'
                        ],
                        answer: 0,
                        explanation: 'CNN 通过卷积操作有效处理网格状数据，如图像。'
                    },
                    {
                        question: '卷积层（Convolutional Layer）的核心思想是什么？',
                        options: [
                            '局部连接、权重共享',
                            '全连接',
                            '全局平均',
                            '池化'
                        ],
                        answer: 0,
                        explanation: '卷积层使用卷积核在输入上滑动，每个卷积核在空间位置共享参数。'
                    },
                    {
                        question: '池化层（Pooling Layer）的作用是什么？',
                        options: [
                            '降维、减少参数量、增强平移不变性',
                            '增加特征图尺寸',
                            '引入非线性',
                            '归一化'
                        ],
                        answer: 0,
                        explanation: '池化层对特征图进行下采样，如最大池化、平均池化。'
                    },
                    {
                        question: '循环神经网络（RNN）主要用于什么类型的数据？',
                        options: [
                            '序列数据（如文本、时间序列、语音）',
                            '图像数据',
                            '图数据',
                            '结构化数据'
                        ],
                        answer: 0,
                        explanation: 'RNN 具有循环连接，能够处理可变长度的序列数据。'
                    },
                    {
                        question: 'LSTM（长短时记忆网络）解决了 RNN 的什么问题？',
                        options: [
                            '长期依赖问题（梯度消失/爆炸）',
                            '训练速度慢',
                            '参数过多',
                            '过拟合'
                        ],
                        answer: 0,
                        explanation: 'LSTM 通过门控机制（遗忘门、输入门、输出门）更好地捕捉长期依赖。'
                    },
                    {
                        question: 'Transformer 模型的核心机制是什么？',
                        options: [
                            '自注意力（Self-Attention）机制',
                            '卷积',
                            '循环连接',
                            '全连接'
                        ],
                        answer: 0,
                        explanation: 'Transformer 完全基于自注意力机制，并行处理序列，是 BERT、GPT 等模型的基础。'
                    },
                    {
                        question: '自注意力（Self-Attention）的作用是什么？',
                        options: [
                            '计算序列中每个元素与其他元素的相关性',
                            '关注自己',
                            '降维',
                            '特征提取'
                        ],
                        answer: 0,
                        explanation: '自注意力机制为序列中的每个位置赋予不同的权重，捕捉长距离依赖。'
                    },
                    // ---- 训练技巧 ----
                    {
                        question: '批归一化（Batch Normalization）的作用是什么？',
                        options: [
                            '加速训练、稳定训练过程、有一定正则化效果',
                            '降维',
                            '增加模型复杂度',
                            '特征提取'
                        ],
                        answer: 0,
                        explanation: '批归一化对每个批次的数据进行标准化，使训练更稳定，允许更高学习率。'
                    },
                    {
                        question: 'Dropout 技术的作用是什么？',
                        options: [
                            '防止过拟合，通过随机丢弃部分神经元',
                            '加速训练',
                            '增加网络深度',
                            '特征选择'
                        ],
                        answer: 0,
                        explanation: 'Dropout 在训练时随机使一部分神经元失活，迫使网络学习更鲁棒的特征。'
                    },
                    {
                        question: '早停（Early Stopping）的作用是什么？',
                        options: [
                            '当验证集性能不再提升时停止训练，防止过拟合',
                            '提前结束训练以节省时间',
                            '跳过某些训练轮次',
                            '自动调整学习率'
                        ],
                        answer: 0,
                        explanation: '早停在验证集损失连续不再下降时终止训练，避免过拟合。'
                    },
                    {
                        question: '数据增强（Data Augmentation）的作用是什么？',
                        options: [
                            '通过对训练数据做变换，增加数据多样性，减少过拟合',
                            '增加数据量',
                            '清洗数据',
                            '特征选择'
                        ],
                        answer: 0,
                        explanation: '数据增强对原始数据进行旋转、缩放、裁剪等变换，扩充训练集。'
                    },
                    {
                        question: '学习率衰减（Learning Rate Decay）的作用是什么？',
                        options: [
                            '在训练过程中逐渐降低学习率，使收敛更稳定',
                            '提高学习率加速训练',
                            '固定学习率',
                            '增加学习率'
                        ],
                        answer: 0,
                        explanation: '训练初期用较大学习率快速下降，后期用小学习率精细调优。'
                    },
                    // ---- PyTorch 基础 ----
                    {
                        question: 'PyTorch 中，`torch.Tensor` 和 `numpy.ndarray` 的关系是？',
                        options: [
                            'Tensor 可以方便地与 NumPy 数组互相转换，支持 GPU 加速',
                            '两者完全相同',
                            'Tensor 不能转换为 NumPy',
                            'NumPy 支持 GPU'
                        ],
                        answer: 0,
                        explanation: 'PyTorch Tensor 类似于 NumPy 数组，但可以运行在 GPU 上，支持自动微分。'
                    },
                    {
                        question: 'PyTorch 中，用于自动微分的模块是？',
                        options: ['torch.autograd', 'torch.optim', 'torch.nn', 'torch.utils.data'],
                        answer: 0,
                        explanation: '`torch.autograd` 提供了自动求导功能，是训练神经网络的基础。'
                    },
                    {
                        question: 'PyTorch 中，定义神经网络模型的常用方法是？',
                        options: [
                            '继承 `torch.nn.Module` 并实现 `forward` 方法',
                            '使用 `torch.nn.Sequential`',
                            '使用函数式 API',
                            'A 和 B'
                        ],
                        answer: 3,
                        explanation: '可以通过继承 `nn.Module` 或使用 `nn.Sequential` 构建模型。'
                    },
                    {
                        question: 'PyTorch 中，`torch.nn.Linear` 代表什么层？',
                        options: ['全连接层', '卷积层', '循环层', '激活层'],
                        answer: 0,
                        explanation: '`nn.Linear` 实现全连接层，进行线性变换 `y = xW^T + b`。'
                    },
                    {
                        question: 'PyTorch 中，`torch.nn.ReLU` 是什么？',
                        options: ['ReLU 激活函数', '损失函数', '优化器', '正则化方法'],
                        answer: 0,
                        explanation: '`nn.ReLU` 是 ReLU 激活函数的模块。'
                    },
                    // ---- TensorFlow 基础 ----
                    {
                        question: 'TensorFlow 2 的默认执行模式是什么？',
                        options: ['Eager Execution（动态图）', 'Graph Execution（静态图）', '混合模式', '符号执行'],
                        answer: 0,
                        explanation: 'TensorFlow 2 默认启用 Eager Execution，使开发更直观，类似 PyTorch。'
                    },
                    {
                        question: 'TensorFlow 中，`keras` 模块的作用是什么？',
                        options: [
                            '提供高级 API，简化模型构建',
                            '底层操作',
                            '数据处理',
                            '可视化'
                        ],
                        answer: 0,
                        explanation: '`tf.keras` 是 TensorFlow 的高级 API，提供简洁的模型构建接口。'
                    },
                    {
                        question: 'TensorFlow 中，使用 `keras.Sequential` 构建的是什么模型？',
                        options: [
                            '层的线性堆叠',
                            '图模型',
                            '循环模型',
                            '任意复杂模型'
                        ],
                        answer: 0,
                        explanation: '`Sequential` 适用于层的简单堆叠，各层依次连接。'
                    }
                ],
                resources: [
                    { name: 'PyTorch官方文档', url: 'https://pytorch.org/docs/stable/index.html', type: 'docs' },
                    { name: 'TensorFlow官方文档', url: 'https://www.tensorflow.org/api_docs', type: 'docs' },
                    { name: '动手学深度学习', url: 'https://zh.d2l.ai/', type: 'book' },
                    { name: '李沐深度学习', url: 'https://www.bilibili.com/video/BV1Wv411h7hR', type: 'video' },
                ]
            },
            {
                id: 'nlp',
                name: '自然语言处理',
                icon: '💬',
                description: '文本处理、表示学习与 LLM 前置基础',
                priority: 'important',
                quizs: [
                    // ---- NLP 基础概念 ----
                    {
                        question: 'NLP（自然语言处理）的主要目标是什么？',
                        options: [
                            '让计算机理解、解释和生成人类语言',
                            '让计算机处理数字',
                            '图像识别',
                            '语音信号处理'
                        ],
                        answer: 0,
                        explanation: 'NLP 致力于实现计算机与人类语言的交互，包括理解、分析和生成。'
                    },
                    {
                        question: '以下哪个是 NLP 的经典任务？',
                        options: [
                            '词性标注、命名实体识别、机器翻译',
                            '目标检测、图像分割',
                            '聚类、降维',
                            '强化学习'
                        ],
                        answer: 0,
                        explanation: '词性标注、命名实体识别、机器翻译、情感分析等都是 NLP 的核心任务。'
                    },
                    {
                        question: '分词（Tokenization）在 NLP 中的作用是什么？',
                        options: [
                            '将文本切分为更小的单元（词、子词、字符）',
                            '将文本翻译成其他语言',
                            '去除停用词',
                            '词性标注'
                        ],
                        answer: 0,
                        explanation: '分词是 NLP 的第一步，将原始文本切分为模型能处理的 token。'
                    },
                    {
                        question: '词干提取（Stemming）和词形还原（Lemmatization）的区别是？',
                        options: [
                            '词干提取粗暴去除词缀，词形还原考虑词性返回词根',
                            '两者相同',
                            '词干提取更精确',
                            '词形还原更快'
                        ],
                        answer: 0,
                        explanation: '词干提取如“running”->“run”可能不合法；词形还原如“better”->“good”返回合法词。'
                    },
                    {
                        question: '停用词（Stop Words）通常指什么？',
                        options: [
                            '在文本中频繁出现但信息量小的词，如“的”、“是”',
                            '所有虚词',
                            '最长的词',
                            '最短的词'
                        ],
                        answer: 0,
                        explanation: '停用词如“a”、“the”、“的”等，通常在预处理时被过滤掉。'
                    },
                    // ---- 文本表示 ----
                    {
                        question: '词袋模型（Bag of Words）的缺点是什么？',
                        options: [
                            '忽略词序和语义信息',
                            '计算复杂',
                            '不能处理英文',
                            '需要大量标注数据'
                        ],
                        answer: 0,
                        explanation: '词袋模型将文本表示为词频向量，丢失了词的顺序和上下文信息。'
                    },
                    {
                        question: 'TF-IDF 的主要思想是什么？',
                        options: [
                            '衡量词在文档中的重要性，同时考虑词频和逆文档频率',
                            '词频越高越重要',
                            '文档频率越高越重要',
                            '与词长度成正比'
                        ],
                        answer: 0,
                        explanation: 'TF-IDF 认为一个词在特定文档中出现频率高，但在整个语料中少见，则重要性高。'
                    },
                    {
                        question: '词嵌入（Word Embedding）相比词袋模型的优势是？',
                        options: [
                            '能捕捉词的语义信息，维度低，稠密',
                            '计算更快',
                            '更易解释',
                            '不需要训练'
                        ],
                        answer: 0,
                        explanation: '词嵌入将词映射到低维稠密向量，语义相似的词在向量空间距离更近。'
                    },
                    {
                        question: 'Word2Vec 的两种主要架构是什么？',
                        options: [
                            'CBOW（连续词袋）和 Skip-gram',
                            'LSTM 和 GRU',
                            'RNN 和 CNN',
                            'BERT 和 GPT'
                        ],
                        answer: 0,
                        explanation: 'CBOW 根据上下文预测中心词，Skip-gram 根据中心词预测上下文。'
                    },
                    {
                        question: 'GloVe 词向量与 Word2Vec 的区别是什么？',
                        options: [
                            'GloVe 利用全局词共现统计，Word2Vec 使用局部上下文窗口',
                            '两者完全相同',
                            'GloVe 不能处理 OOV',
                            'Word2Vec 使用全局统计'
                        ],
                        answer: 0,
                        explanation: 'GloVe（Global Vectors）结合了矩阵分解和局部上下文窗口的优点。'
                    },
                    // ---- 经典模型 ----
                    {
                        question: 'RNN（循环神经网络）在 NLP 中的主要应用是什么？',
                        options: [
                            '处理序列数据，如文本生成、机器翻译',
                            '图像分类',
                            '目标检测',
                            '降维'
                        ],
                        answer: 0,
                        explanation: 'RNN 能处理变长序列，捕捉时间步之间的依赖关系。'
                    },
                    {
                        question: 'LSTM（长短时记忆网络）解决了 RNN 的什么问题？',
                        options: [
                            '梯度消失/爆炸问题，能捕捉长期依赖',
                            '训练速度慢',
                            '参数过多',
                            '过拟合'
                        ],
                        answer: 0,
                        explanation: 'LSTM 通过门控机制（遗忘门、输入门、输出门）更好地保留长期信息。'
                    },
                    {
                        question: 'GRU（门控循环单元）与 LSTM 的主要区别是？',
                        options: [
                            'GRU 结构更简单，参数更少，性能相近',
                            'GRU 不能捕捉长期依赖',
                            'GRU 训练更慢',
                            'GRU 有更多门'
                        ],
                        answer: 0,
                        explanation: 'GRU 将遗忘门和输入门合并为更新门，结构更简单。'
                    },
                    {
                        question: 'Seq2Seq（序列到序列）模型常用于什么任务？',
                        options: [
                            '机器翻译、文本摘要',
                            '图像分类',
                            '情感分析',
                            '命名实体识别'
                        ],
                        answer: 0,
                        explanation: 'Seq2Seq 模型包含编码器和解码器，将一个序列转换为另一个序列。'
                    },
                    {
                        question: '注意力机制（Attention Mechanism）的核心思想是什么？',
                        options: [
                            '在解码时关注输入序列的不同部分，赋予不同权重',
                            '关注所有输入',
                            '忽略部分输入',
                            '平均处理'
                        ],
                        answer: 0,
                        explanation: '注意力机制允许模型在生成每个输出时，动态地关注输入中最相关的部分。'
                    },
                    // ---- Transformer 与预训练模型 ----
                    {
                        question: 'Transformer 模型的核心创新是什么？',
                        options: [
                            '完全基于自注意力机制，抛弃 RNN 的循环结构',
                            '引入卷积',
                            '加深网络',
                            '使用 LSTM'
                        ],
                        answer: 0,
                        explanation: 'Transformer 使用自注意力机制和前馈网络，能够并行计算，训练更快。'
                    },
                    {
                        question: 'BERT 模型的主要特点是什么？',
                        options: [
                            '双向 Transformer 编码器，通过掩码语言模型预训练',
                            '单向语言模型',
                            '生成式模型',
                            '需要大量标注数据'
                        ],
                        answer: 0,
                        explanation: 'BERT（来自 Transformer 的双向编码器表示）通过预测被掩码的词进行预训练。'
                    },
                    {
                        question: 'GPT 系列模型的主要特点是什么？',
                        options: [
                            '自回归语言模型，使用 Transformer 解码器',
                            '双向编码器',
                            '需要微调才能使用',
                            '不能生成文本'
                        ],
                        answer: 0,
                        explanation: 'GPT（生成式预训练 Transformer）从左到右生成文本，擅长文本生成任务。'
                    },
                    {
                        question: 'BERT 的预训练任务包括哪些？',
                        options: [
                            '掩码语言模型（MLM）和下一句预测（NSP）',
                            '语言建模和翻译',
                            '分类和回归',
                            '生成和判别'
                        ],
                        answer: 0,
                        explanation: 'BERT 通过随机掩盖部分词并预测它们（MLM），以及预测两句话是否连续（NSP）进行预训练。'
                    },
                    {
                        question: '微调（Fine-tuning）在 NLP 中的作用是什么？',
                        options: [
                            '在预训练模型基础上，用下游任务数据继续训练，适配特定任务',
                            '从头开始训练模型',
                            '调整学习率',
                            '数据增强'
                        ],
                        answer: 0,
                        explanation: '微调利用预训练模型学到的知识，在特定任务数据上少量更新参数，高效适应新任务。'
                    },
                    // ---- 常见 NLP 任务 ----
                    {
                        question: '文本分类（Text Classification）的任务目标是什么？',
                        options: [
                            '为文本分配预定义的类别标签',
                            '生成文本摘要',
                            '翻译文本',
                            '识别文本中的实体'
                        ],
                        answer: 0,
                        explanation: '文本分类如情感分析、垃圾邮件检测，输出离散类别。'
                    },
                    {
                        question: '情感分析（Sentiment Analysis）的目标是什么？',
                        options: [
                            '判断文本的情感倾向（积极、消极、中性）',
                            '分析文本语法',
                            '生成情感文本',
                            '检测情感实体'
                        ],
                        answer: 0,
                        explanation: '情感分析是文本分类的一种，常用于分析评论、社交媒体观点。'
                    },
                    {
                        question: '命名实体识别（NER）的任务是什么？',
                        options: [
                            '识别文本中预定义类型的实体，如人名、地名、组织名',
                            '翻译实体名称',
                            '生成实体描述',
                            '分类文本'
                        ],
                        answer: 0,
                        explanation: 'NER 是信息抽取的重要子任务，定位并分类命名实体。'
                    },
                    {
                        question: '词性标注（POS Tagging）的任务是什么？',
                        options: [
                            '为文本中的每个词分配词性标签（名词、动词、形容词等）',
                            '标注词的情感',
                            '标注词的长度',
                            '标注词的频率'
                        ],
                        answer: 0,
                        explanation: '词性标注是 NLP 的基础任务，有助于理解句子结构。'
                    },
                    {
                        question: '机器翻译（Machine Translation）的目标是什么？',
                        options: [
                            '将文本从一种语言自动翻译成另一种语言',
                            '翻译图像',
                            '翻译语音',
                            '翻译代码'
                        ],
                        answer: 0,
                        explanation: '机器翻译是 NLP 的核心任务之一，如英译中。'
                    },
                    {
                        question: '文本摘要（Text Summarization）的任务是什么？',
                        options: [
                            '生成简洁、连贯的文本摘要，保留核心信息',
                            '压缩文本大小',
                            '加密文本',
                            '删除冗余词'
                        ],
                        answer: 0,
                        explanation: '文本摘要分为抽取式（提取关键句）和生成式（重新组织语言）。'
                    },
                    {
                        question: '问答系统（Question Answering）的任务是什么？',
                        options: [
                            '根据给定文本回答问题',
                            '生成问题',
                            '回答图像问题',
                            '回答语音问题'
                        ],
                        answer: 0,
                        explanation: '问答系统如 SQuAD 数据集上的任务，从给定段落中找到答案。'
                    },
                    // ---- Hugging Face ----
                    {
                        question: 'Hugging Face 的 Transformers 库主要用于什么？',
                        options: [
                            '提供预训练模型和工具，简化 NLP 开发',
                            '数据可视化',
                            '深度学习框架',
                            '模型部署'
                        ],
                        answer: 0,
                        explanation: 'Transformers 库提供数千个预训练模型，支持 PyTorch、TensorFlow 和 JAX。'
                    },
                    {
                        question: 'Hugging Face 中，`pipeline` 函数的作用是什么？',
                        options: [
                            '提供高级接口，快速使用预训练模型完成常见任务',
                            '构建训练流水线',
                            '数据预处理',
                            '模型训练'
                        ],
                        answer: 0,
                        explanation: '`pipeline` 封装了模型和分词器，一行代码即可完成情感分析、文本生成等任务。'
                    },
                    {
                        question: 'Hugging Face 中，`AutoModel` 和 `AutoTokenizer` 的作用是？',
                        options: [
                            '根据模型名称自动加载相应的模型和分词器',
                            '自动训练模型',
                            '自动选择最优模型',
                            '自动数据增强'
                        ],
                        answer: 0,
                        explanation: 'Auto 类通过模型名称自动识别并加载正确的架构，简化代码。'
                    },
                    {
                        question: '分词器（Tokenizer）在 Transformers 库中的作用是什么？',
                        options: [
                            '将文本转换为模型可接受的输入 ID 和注意力掩码',
                            '训练模型',
                            '评估模型',
                            '可视化结果'
                        ],
                        answer: 0,
                        explanation: '分词器将原始文本编码为输入 ID，并处理填充、截断等。'
                    }
                ],
                resources: [
                    { name: 'Hugging Face教程', url: 'https://huggingface.co/learn/nlp-course/chapter1/zh', type: 'course' },
                    { name: '斯坦福CS224n', url: 'https://web.stanford.edu/class/cs224n/', type: 'course' },
                    { name: '自然语言处理入门', url: 'https://github.com/NLP-LOVE/Introduction-NLP', type: 'github' },
                ]
            },
            {
                id: 'cv',
                name: '计算机视觉',
                icon: '👁️',
                description: '图像处理、识别与视觉建模基础',
                priority: 'important',
                quizs: [
                    // ---- CV 基础概念 ----
                    {
                        question: '计算机视觉（CV）的主要目标是什么？',
                        options: [
                            '让计算机理解和解释图像和视频中的内容',
                            '让计算机生成图像',
                            '图像压缩',
                            '图像存储'
                        ],
                        answer: 0,
                        explanation: 'CV 致力于让计算机能从图像或视频中获取高层次理解，如识别物体、场景、动作。'
                    },
                    {
                        question: '以下哪个是 CV 的经典任务？',
                        options: [
                            '图像分类、目标检测、图像分割',
                            '文本生成、机器翻译',
                            '语音识别',
                            '情感分析'
                        ],
                        answer: 0,
                        explanation: '图像分类、目标检测、图像分割、姿态估计等是 CV 的核心任务。'
                    },
                    {
                        question: '图像分类（Image Classification）的任务是什么？',
                        options: [
                            '为整个图像分配一个类别标签',
                            '定位图像中的物体',
                            '分割图像中的像素',
                            '生成图像'
                        ],
                        answer: 0,
                        explanation: '图像分类如判断一张图片是“猫”还是“狗”。'
                    },
                    {
                        question: '目标检测（Object Detection）的任务是什么？',
                        options: [
                            '定位图像中物体并分类，通常输出边界框',
                            '分类整个图像',
                            '像素级分割',
                            '生成图像'
                        ],
                        answer: 0,
                        explanation: '目标检测不仅告诉图像中有什么，还告诉物体在哪里（边界框）。'
                    },
                    {
                        question: '图像分割（Image Segmentation）的任务是什么？',
                        options: [
                            '对图像进行像素级分类',
                            '检测物体边界框',
                            '分类整个图像',
                            '增强图像'
                        ],
                        answer: 0,
                        explanation: '图像分割为每个像素分配类别标签，分为语义分割和实例分割。'
                    },
                    {
                        question: '语义分割（Semantic Segmentation）和实例分割（Instance Segmentation）的区别是？',
                        options: [
                            '语义分割不区分同类个体，实例分割区分',
                            '两者相同',
                            '语义分割更精确',
                            '实例分割更简单'
                        ],
                        answer: 0,
                        explanation: '语义分割将所有“人”像素标为同一类；实例分割区分不同的人（人1、人2）。'
                    },
                    // ---- 图像处理基础 ----
                    {
                        question: '数字图像的基本组成单位是什么？',
                        options: ['像素（Pixel）', '向量', '张量', '矩阵'],
                        answer: 0,
                        explanation: '图像由像素点阵组成，每个像素有颜色或亮度值。'
                    },
                    {
                        question: 'RGB 彩色图像的三个通道分别代表什么？',
                        options: [
                            '红（Red）、绿（Green）、蓝（Blue）',
                            '色相、饱和度、亮度',
                            '红、黄、蓝',
                            '亮度、对比度、饱和度'
                        ],
                        answer: 0,
                        explanation: 'RGB 是最常用的彩色空间，通过三个通道组合出各种颜色。'
                    },
                    {
                        question: '灰度图像中，每个像素的值通常表示什么？',
                        options: [
                            '亮度（0-255）',
                            '颜色',
                            '透明度',
                            '深度'
                        ],
                        answer: 0,
                        explanation: '灰度图像中，0 表示黑色，255 表示白色，中间值为灰色。'
                    },
                    {
                        question: '图像滤波（Image Filtering）的作用是什么？',
                        options: [
                            '模糊、锐化、边缘检测等',
                            '改变图像尺寸',
                            '压缩图像',
                            '保存图像'
                        ],
                        answer: 0,
                        explanation: '图像滤波通过卷积操作实现各种效果，如高斯模糊、Sobel 边缘检测。'
                    },
                    {
                        question: 'OpenCV 是什么？',
                        options: [
                            '开源计算机视觉库',
                            '深度学习框架',
                            '图像格式',
                            '编程语言'
                        ],
                        answer: 0,
                        explanation: 'OpenCV（Open Source Computer Vision Library）提供了数千种计算机视觉算法。'
                    },
                    // ---- CNN 在 CV 中的应用 ----
                    {
                        question: '为什么卷积神经网络（CNN）适合处理图像数据？',
                        options: [
                            '利用局部连接和权重共享，捕捉空间特征',
                            '处理序列数据',
                            '自动生成图像',
                            '不需要训练'
                        ],
                        answer: 0,
                        explanation: 'CNN 的卷积核能捕捉局部模式（如边缘、纹理），参数共享降低了模型复杂度。'
                    },
                    {
                        question: '卷积层（Convolutional Layer）的核心参数有哪些？',
                        options: [
                            '卷积核大小、步长、填充、输入/输出通道数',
                            '学习率、批次大小',
                            '层数、神经元数',
                            '损失函数'
                        ],
                        answer: 0,
                        explanation: '卷积层的主要超参数决定了特征图的尺寸和数量。'
                    },
                    {
                        question: '池化层（Pooling Layer）的作用是什么？',
                        options: [
                            '降维、减少参数量、增强平移不变性',
                            '增加特征图尺寸',
                            '引入非线性',
                            '归一化'
                        ],
                        answer: 0,
                        explanation: '池化层对特征图进行下采样，如最大池化、平均池化。'
                    },
                    {
                        question: 'LeNet-5 是哪个任务的经典网络？',
                        options: [
                            '手写数字识别（MNIST）',
                            'ImageNet 分类',
                            '目标检测',
                            '图像分割'
                        ],
                        answer: 0,
                        explanation: 'LeNet-5 由 Yann LeCun 提出，用于识别手写数字。'
                    },
                    {
                        question: 'AlexNet 在 2012 年 ImageNet 竞赛中的主要贡献是什么？',
                        options: [
                            '证明了深度 CNN 在图像识别中的强大能力',
                            '第一个卷积网络',
                            '引入了注意力机制',
                            '无需 GPU 训练'
                        ],
                        answer: 0,
                        explanation: 'AlexNet 大幅降低了图像分类错误率，开启了深度学习在 CV 中的应用热潮。'
                    },
                    {
                        question: 'VGGNet 的主要特点是什么？',
                        options: [
                            '使用小卷积核（3x3）堆叠，网络很深',
                            '使用大卷积核',
                            '引入残差连接',
                            '使用 Inception 模块'
                        ],
                        answer: 0,
                        explanation: 'VGG 证明了多个小卷积核堆叠可以替代大卷积核，且参数量更少。'
                    },
                    {
                        question: 'ResNet 的核心创新是什么？',
                        options: [
                            '残差连接（Skip Connection）',
                            '批量归一化',
                            'Dropout',
                            '数据增强'
                        ],
                        answer: 0,
                        explanation: '残差连接让梯度可以直接流过，解决了深层网络的梯度消失问题，使训练更深网络成为可能。'
                    },
                    {
                        question: 'GoogLeNet（Inception）的核心思想是什么？',
                        options: [
                            '使用 Inception 模块，并行多尺度卷积',
                            '使用残差连接',
                            '加深网络',
                            '简化网络'
                        ],
                        answer: 0,
                        explanation: 'Inception 模块在同一层使用不同尺寸的卷积核，捕捉不同尺度的特征。'
                    },
                    // ---- 目标检测 ----
                    {
                        question: 'R-CNN 系列（Region-based CNN）的目标检测流程是什么？',
                        options: [
                            '先提取候选区域，再对每个区域分类',
                            '直接回归边界框',
                            '像素级分割',
                            '生成图像'
                        ],
                        answer: 0,
                        explanation: 'R-CNN 先通过选择性搜索生成候选框，再对每个框用 CNN 分类。'
                    },
                    {
                        question: 'YOLO（You Only Look Once）系列检测器的特点是什么？',
                        options: [
                            '单阶段检测，速度快，将检测视为回归问题',
                            '两阶段检测，速度慢',
                            '需要候选区域',
                            '不能实时'
                        ],
                        answer: 0,
                        explanation: 'YOLO 将图像划分为网格，同时预测边界框和类别概率，实现端到端实时检测。'
                    },
                    {
                        question: 'SSD（Single Shot MultiBox Detector）与 YOLO 的相似之处是？',
                        options: [
                            '都是单阶段检测器，速度快',
                            '都是两阶段检测器',
                            '都需要候选区域',
                            '精度最高'
                        ],
                        answer: 0,
                        explanation: 'SSD 和 YOLO 都是单阶段方法，直接回归边界框和类别。'
                    },
                    {
                        question: '目标检测中，IOU（交并比）用来衡量什么？',
                        options: [
                            '预测边界框与真实边界框的重叠程度',
                            '分类准确率',
                            '检测速度',
                            '模型大小'
                        ],
                        answer: 0,
                        explanation: 'IOU 计算两个框的交集面积除以并集面积，常用于评估定位性能。'
                    },
                    // ---- 图像分割 ----
                    {
                        question: 'FCN（全卷积网络）在图像分割中的作用是什么？',
                        options: [
                            '将全连接层替换为卷积层，实现像素级预测',
                            '分类图像',
                            '检测目标',
                            '生成图像'
                        ],
                        answer: 0,
                        explanation: 'FCN 可以接受任意尺寸输入，输出与输入尺寸相同的分割图。'
                    },
                    {
                        question: 'U-Net 的特点是什么？',
                        options: [
                            '对称的编码器-解码器结构，有跳跃连接',
                            '只有编码器',
                            '只有解码器',
                            '没有跳跃连接'
                        ],
                        answer: 0,
                        explanation: 'U-Net 常用于医学图像分割，跳跃连接帮助恢复空间细节。'
                    },
                    {
                        question: 'Mask R-CNN 扩展了 Faster R-CNN，增加了什么分支？',
                        options: [
                            '分割掩码分支',
                            '分类分支',
                            '回归分支',
                            '注意力分支'
                        ],
                        answer: 0,
                        explanation: 'Mask R-CNN 同时进行目标检测和实例分割，输出边界框和像素级掩码。'
                    },
                    // ---- 生成模型 ----
                    {
                        question: '生成对抗网络（GAN）由哪两部分组成？',
                        options: [
                            '生成器（Generator）和判别器（Discriminator）',
                            '编码器和解码器',
                            'CNN 和 RNN',
                            '变换器和注意力'
                        ],
                        answer: 0,
                        explanation: '生成器试图生成逼真图像，判别器试图区分真实和生成图像，两者对抗训练。'
                    },
                    {
                        question: 'GAN 的训练目标是什么？',
                        options: [
                            '生成器欺骗判别器，判别器正确区分真假，达到纳什均衡',
                            '最小化分类误差',
                            '最大化似然',
                            '最小化重建误差'
                        ],
                        answer: 0,
                        explanation: 'GAN 通过极小极大博弈，使生成器能生成难以与真实区分的图像。'
                    },
                    {
                        question: '变分自编码器（VAE）的目标是什么？',
                        options: [
                            '学习数据的潜在表示，并生成新数据',
                            '分类图像',
                            '检测目标',
                            '分割图像'
                        ],
                        answer: 0,
                        explanation: 'VAE 通过编码器将输入映射到潜在分布，再通过解码器生成数据。'
                    }
                ],
                resources: [
                    { name: '斯坦福CS231n', url: 'http://cs231n.stanford.edu/', type: 'course' },
                    { name: 'OpenCV官方文档', url: 'https://docs.opencv.org/', type: 'docs' },
                    { name: '计算机视觉实战', url: 'https://www.bilibili.com/video/BV1bP4y1p7Zv', type: 'video' },
                ]
            },
            {
                id: 'llm',
                name: '大语言模型',
                icon: '🗣️',
                description: '大模型应用、提示工程与 RAG 实践',
                priority: 'core',
                quizs: [
                    // ---- LLM 基础概念 ----
                    {
                        question: '大语言模型（LLM）的主要特点是什么？',
                        options: [
                            '拥有数十亿以上参数，在海量文本上预训练，能理解生成自然语言',
                            '参数少，训练数据少',
                            '只能处理特定任务',
                            '不能进行对话'
                        ],
                        answer: 0,
                        explanation: 'LLM 通过大规模预训练学习语言知识，展现出强大的通用能力。'
                    },
                    {
                        question: '以下哪个是常见的大语言模型？',
                        options: [
                            'GPT系列、LLaMA、Claude、文心一言',
                            'ResNet、VGG',
                            'YOLO、SSD',
                            'LSTM、GRU'
                        ],
                        answer: 0,
                        explanation: 'GPT、LLaMA、Claude、文心一言等都是大语言模型。'
                    },
                    {
                        question: 'Transformer 架构中，什么机制是 LLM 的核心？',
                        options: [
                            '自注意力机制（Self-Attention）',
                            '卷积',
                            '循环连接',
                            '池化'
                        ],
                        answer: 0,
                        explanation: '自注意力机制使模型能捕捉长距离依赖，是 Transformer 的核心。'
                    },
                    {
                        question: 'GPT 系列模型的架构特点是什么？',
                        options: [
                            '仅使用 Transformer 解码器，自回归生成',
                            '仅使用编码器',
                            '编码器-解码器结构',
                            '卷积结构'
                        ],
                        answer: 0,
                        explanation: 'GPT 是自回归模型，从左到右逐个预测下一个 token。'
                    },
                    {
                        question: 'BERT 和 GPT 的主要区别是什么？',
                        options: [
                            'BERT 是双向编码器，用于理解；GPT 是自回归解码器，用于生成',
                            '两者相同',
                            'BERT 用于生成，GPT 用于理解',
                            'BERT 更大'
                        ],
                        answer: 0,
                        explanation: 'BERT 擅长句子理解任务（如分类、NER），GPT 擅长文本生成任务。'
                    },
                    // ---- 训练与微调 ----
                    {
                        question: '预训练（Pre-training）在 LLM 中的作用是什么？',
                        options: [
                            '在大规模无标签数据上学习通用语言表示',
                            '在特定任务上微调',
                            '优化推理速度',
                            '压缩模型'
                        ],
                        answer: 0,
                        explanation: '预训练使模型学到丰富的语言知识，再通过微调适应具体任务。'
                    },
                    {
                        question: '指令微调（Instruction Tuning）的目标是什么？',
                        options: [
                            '让模型遵循自然语言指令',
                            '增加模型参数量',
                            '减少训练数据',
                            '加速推理'
                        ],
                        answer: 0,
                        explanation: '通过（指令，输出）对微调，使模型能理解并遵循用户指令。'
                    },
                    {
                        question: 'RLHF（基于人类反馈的强化学习）在 ChatGPT 中的作用是什么？',
                        options: [
                            '利用人类偏好优化模型行为',
                            '监督学习',
                            '无监督学习',
                            '数据清洗'
                        ],
                        answer: 0,
                        explanation: 'RLHF 收集人类对模型输出的偏好数据，训练奖励模型，再用强化学习优化。'
                    },
                    {
                        question: 'PEFT（参数高效微调）技术如 LoRA 的优点是什么？',
                        options: [
                            '只更新少量参数，节省计算资源',
                            '更新全部参数',
                            '从头训练',
                            '不需要训练'
                        ],
                        answer: 0,
                        explanation: 'LoRA 在原有模型上添加低秩适配器，只训练适配器，大幅减少可训练参数。'
                    },
                    {
                        question: '上下文学习（In-Context Learning）是指什么？',
                        options: [
                            '在推理时给模型几个示例，不更新参数',
                            '在训练时学习',
                            '微调模型',
                            '数据增强'
                        ],
                        answer: 0,
                        explanation: '通过提示词中的示例，让大模型理解任务并执行，无需参数更新。'
                    },
                    {
                        question: '思维链（Chain-of-Thought）提示的作用是什么？',
                        options: [
                            '引导模型展示推理过程，提高复杂任务准确性',
                            '缩短输出',
                            '加快推理',
                            '减少 token 消耗'
                        ],
                        answer: 0,
                        explanation: 'CoT 让模型一步步思考，再给出最终答案，提升推理能力。'
                    },
                    // ---- 提示工程 ----
                    {
                        question: '提示工程（Prompt Engineering）的主要目的是？',
                        options: [
                            '设计最佳提示，引导模型产生预期输出',
                            '训练模型',
                            '压缩模型',
                            '部署模型'
                        ],
                        answer: 0,
                        explanation: '提示工程通过优化输入文本，让大模型更有效地完成任务。'
                    },
                    {
                        question: '零样本提示（Zero-shot）是指什么？',
                        options: [
                            '不给示例，直接让模型完成任务',
                            '给一个示例',
                            '给多个示例',
                            '微调模型'
                        ],
                        answer: 0,
                        explanation: '零样本提示依赖模型在预训练中学到的知识来理解任务。'
                    },
                    {
                        question: '少样本提示（Few-shot）是指什么？',
                        options: [
                            '在提示中提供几个示例',
                            '使用少量训练数据',
                            '微调时用少量样本',
                            '数据增强'
                        ],
                        answer: 0,
                        explanation: '少样本提示通过示例帮助模型理解任务格式和期望。'
                    },
                    {
                        question: '系统提示（System Prompt）在对话模型中的作用是？',
                        options: [
                            '设定模型的行为、角色和约束',
                            '用户输入',
                            '模型输出',
                            '历史记录'
                        ],
                        answer: 0,
                        explanation: '系统提示告诉模型如何响应，如“你是一个乐于助人的助手”。'
                    },
                    // ---- 应用开发 ----
                    {
                        question: 'LangChain 是什么？',
                        options: [
                            '用于构建 LLM 应用的框架',
                            '大语言模型',
                            '提示词库',
                            '部署工具'
                        ],
                        answer: 0,
                        explanation: 'LangChain 提供模块化组件，简化 LLM 应用的开发，如链式调用、Agent、记忆等。'
                    },
                    {
                        question: 'LangChain 中的“链”（Chain）是什么？',
                        options: [
                            '将多个 LLM 调用或其他组件组合成一个应用',
                            '单个 LLM 调用',
                            '数据存储',
                            '提示模板'
                        ],
                        answer: 0,
                        explanation: '链允许构建复杂的处理流程，例如先检索再生成。'
                    },
                    {
                        question: 'LangChain 中的“Agent”（智能体）有什么能力？',
                        options: [
                            '能使用工具，决定下一步行动',
                            '只能生成文本',
                            '不能调用外部 API',
                            '没有记忆'
                        ],
                        answer: 0,
                        explanation: 'Agent 可以访问工具（如搜索引擎、计算器），自主决定如何完成任务。'
                    },
                    {
                        question: 'RAG（检索增强生成）的作用是什么？',
                        options: [
                            '从外部知识库检索相关信息，帮助 LLM 生成更准确答案',
                            '生成图像',
                            '翻译文本',
                            '分类文本'
                        ],
                        answer: 0,
                        explanation: 'RAG 结合检索系统和大模型，减少幻觉，适用于知识密集型任务。'
                    },
                    {
                        question: '向量数据库在 RAG 中的作用是？',
                        options: [
                            '存储和检索文本的向量表示，用于相似度搜索',
                            '存储原始文本',
                            '存储模型参数',
                            '存储图像'
                        ],
                        answer: 0,
                        explanation: '向量数据库将文档嵌入为向量，支持高效近似最近邻搜索。'
                    },
                    {
                        question: 'OpenAI API 中，`temperature` 参数控制什么？',
                        options: [
                            '输出的随机性，值越高输出越多样',
                            '模型复杂度',
                            '响应速度',
                            '最大 token 数'
                        ],
                        answer: 0,
                        explanation: 'temperature 控制采样概率分布的平滑度，值低更确定性，值高更多样。'
                    },
                    {
                        question: 'OpenAI API 中，`max_tokens` 参数的作用是？',
                        options: [
                            '限制生成文本的最大长度',
                            '控制随机性',
                            '惩罚重复词',
                            '设置提示长度'
                        ],
                        answer: 0,
                        explanation: 'max_tokens 决定生成响应时最多使用多少个 token。'
                    },
                    {
                        question: 'LangChain 中，如何管理对话历史？',
                        options: [
                            '使用 Memory 组件',
                            '手动拼接',
                            '使用数据库',
                            '使用缓存'
                        ],
                        answer: 0,
                        explanation: 'Memory 组件负责存储和加载对话历史，支持多种存储方式。'
                    },
                    {
                        question: 'LangChain 中，`PromptTemplate` 的作用是？',
                        options: [
                            '创建可复用的提示模板，动态插入变量',
                            '训练模型',
                            '评估输出',
                            '解析输出'
                        ],
                        answer: 0,
                        explanation: 'PromptTemplate 简化了提示的构造，避免硬编码。'
                    },
                    {
                        question: 'LangChain 中，`OutputParser` 的作用是？',
                        options: [
                            '将模型输出解析为结构化格式',
                            '生成输出',
                            '过滤输出',
                            '缓存输出'
                        ],
                        answer: 0,
                        explanation: 'OutputParser 用于将 LLM 的文本输出转换为字典、列表等结构，便于后续处理。'
                    },
                    // ---- LLM 评估与挑战 ----
                    {
                        question: '大语言模型的“幻觉”（Hallucination）是指什么？',
                        options: [
                            '生成与事实不符或无意义的内容',
                            '生成重复内容',
                            '拒绝回答',
                            '生成敏感内容'
                        ],
                        answer: 0,
                        explanation: '幻觉是 LLM 生成看似合理但实际错误的信息，是当前主要挑战之一。'
                    },
                    {
                        question: '缓解 LLM 幻觉的方法有哪些？',
                        options: [
                            'RAG、更好的提示、微调',
                            '增加模型尺寸',
                            '加快推理',
                            '减少训练数据'
                        ],
                        answer: 0,
                        explanation: '检索增强生成（RAG）让模型参考外部知识，能有效减少幻觉。'
                    },
                    {
                        question: 'LLM 的上下文窗口（Context Window）是指什么？',
                        options: [
                            '模型一次能处理的最大 token 数量',
                            '模型层数',
                            '注意力头数',
                            '词表大小'
                        ],
                        answer: 0,
                        explanation: '上下文窗口限制了输入和输出的总 token 数，影响模型能处理的文本长度。'
                    },
                    {
                        question: '处理超长文本时，超出上下文窗口的常用策略是？',
                        options: [
                            '文本分割、摘要、滑动窗口',
                            '增加窗口',
                            '丢弃尾部',
                            '随机截断'
                        ],
                        answer: 0,
                        explanation: '可以将长文本分块、生成摘要或使用滑动窗口等方式处理。'
                    },
                    {
                        question: 'LangChain 中如何实现 RAG？',
                        options: [
                            '结合向量存储检索器和 LLM 链',
                            '使用提示工程',
                            '微调模型',
                            '使用 Agent'
                        ],
                        answer: 0,
                        explanation: '通过 `RetrievalQA` 等链，将检索器与 LLM 结合。'
                    }
                ],
                resources: [
                    { name: 'OpenAI文档', url: 'https://platform.openai.com/docs', type: 'docs' },
                    { name: 'LangChain中文网', url: 'https://www.langchain.asia/', type: 'docs' },
                    { name: '提示工程指南', url: 'https://www.promptingguide.ai/zh', type: 'tutorial' },
                ]
            },
            {
                id: 'math',
                name: '数学基础',
                icon: '🔢',
                description: '线性代数、概率统计与优化基础',
                priority: 'core',
                quizs: [
                    // ---- 线性代数基础 ----
                    {
                        question: '向量（Vector）是什么？',
                        options: [
                            '既有大小又有方向的量',
                            '只有大小的量',
                            '只有方向的量',
                            '标量'
                        ],
                        answer: 0,
                        explanation: '向量是数学、物理学中的基本概念，表示有大小和方向的量。'
                    },
                    {
                        question: '矩阵（Matrix）是什么？',
                        options: [
                            '按矩形排列的数字或符号阵列',
                            '单个数字',
                            '向量的集合',
                            '方程'
                        ],
                        answer: 0,
                        explanation: '矩阵是一个二维数组，由行和列组成，用于表示线性变换、方程组等。'
                    },
                    {
                        question: '矩阵的维度通常如何表示？',
                        options: [
                            '行数 × 列数',
                            '列数 × 行数',
                            '行数 + 列数',
                            '行数 / 列数'
                        ],
                        answer: 0,
                        explanation: '一个 m 行 n 列的矩阵称为 m×n 矩阵。'
                    },
                    {
                        question: '向量点积（Dot Product）的计算公式是什么？',
                        options: [
                            '对应元素相乘再相加',
                            '对应元素相加',
                            '向量长度相乘',
                            '矩阵乘法'
                        ],
                        answer: 0,
                        explanation: '两个向量的点积 `a·b = a1*b1 + a2*b2 + ... + an*bn`。'
                    },
                    {
                        question: '矩阵乘法满足什么条件？',
                        options: [
                            '第一个矩阵的列数等于第二个矩阵的行数',
                            '行数必须相等',
                            '列数必须相等',
                            '必须为方阵'
                        ],
                        answer: 0,
                        explanation: '若 A 是 m×n 矩阵，B 是 n×p 矩阵，则 C = AB 是 m×p 矩阵。'
                    },
                    {
                        question: '单位矩阵（Identity Matrix）的特点是什么？',
                        options: [
                            '主对角线为1，其余为0，任何矩阵乘它不变',
                            '所有元素为1',
                            '所有元素为0',
                            '对称矩阵'
                        ],
                        answer: 0,
                        explanation: '单位矩阵 I 满足 AI = IA = A，类似于数的乘法中的1。'
                    },
                    {
                        question: '矩阵的转置（Transpose）是什么操作？',
                        options: [
                            '将矩阵的行列互换',
                            '求逆矩阵',
                            '求行列式',
                            '特征分解'
                        ],
                        answer: 0,
                        explanation: 'A 的转置记作 A^T，其中 (A^T)_{ij} = A_{ji}。'
                    },
                    {
                        question: '逆矩阵（Inverse Matrix）的定义是什么？',
                        options: [
                            '对于方阵 A，若存在 B 使 AB = BA = I，则 B 是 A 的逆',
                            'A 的转置',
                            'A 的行列式',
                            'A 的伴随矩阵'
                        ],
                        answer: 0,
                        explanation: '只有方阵可能有逆矩阵，且行列式不为零。'
                    },
                    {
                        question: '行列式（Determinant）的几何意义是什么？',
                        options: [
                            '矩阵对应线性变换对体积的缩放因子',
                            '矩阵的大小',
                            '矩阵的迹',
                            '矩阵的秩'
                        ],
                        answer: 0,
                        explanation: '行列式绝对值表示变换后平行多面体的体积缩放倍数。'
                    },
                    {
                        question: '特征值（Eigenvalue）和特征向量（Eigenvector）的关系是？',
                        options: [
                            '对于方阵 A，若 Av = λv，则 λ 是特征值，v 是特征向量',
                            'A 与 v 无关',
                            'v 与 λ 无关',
                            'A 必须是对角矩阵'
                        ],
                        answer: 0,
                        explanation: '特征向量经线性变换后方向不变，仅缩放 λ 倍。'
                    },
                    {
                        question: '奇异值分解（SVD）的作用是什么？',
                        options: [
                            '将任意矩阵分解为三个矩阵的乘积',
                            '求逆矩阵',
                            '解线性方程组',
                            '计算行列式'
                        ],
                        answer: 0,
                        explanation: 'SVD 在降维、压缩、推荐系统中广泛应用。'
                    },
                    // ---- 微积分基础 ----
                    {
                        question: '导数（Derivative）的几何意义是什么？',
                        options: [
                            '函数在某点的瞬时变化率或切线斜率',
                            '曲线下的面积',
                            '函数的零点',
                            '函数的极值'
                        ],
                        answer: 0,
                        explanation: '导数 f\'(x) 表示 f(x) 在 x 处的变化率。'
                    },
                    {
                        question: '偏导数（Partial Derivative）用于什么函数？',
                        options: [
                            '多元函数',
                            '一元函数',
                            '向量函数',
                            '矩阵函数'
                        ],
                        answer: 0,
                        explanation: '偏导数求多元函数关于一个变量的导数，其他变量视为常数。'
                    },
                    {
                        question: '梯度（Gradient）向量由什么组成？',
                        options: [
                            '多元函数所有偏导数组成的向量',
                            '函数值',
                            '二阶导数',
                            '方向导数'
                        ],
                        answer: 0,
                        explanation: '梯度指向函数值增长最快的方向。'
                    },
                    {
                        question: '链式法则（Chain Rule）用于什么计算？',
                        options: [
                            '复合函数的导数',
                            '乘积的导数',
                            '商的导数',
                            '和与差的导数'
                        ],
                        answer: 0,
                        explanation: '链式法则 `(f(g(x)))\' = f\'(g(x)) * g\'(x)` 是反向传播的基础。'
                    },
                    {
                        question: '积分（Integral）的几何意义是什么？',
                        options: [
                            '曲线下的面积',
                            '曲线切线斜率',
                            '函数平均值',
                            '函数极值'
                        ],
                        answer: 0,
                        explanation: '定积分表示函数在区间上与 x 轴围成的有向面积。'
                    },
                    // ---- 概率论基础 ----
                    {
                        question: '概率（Probability）的取值范围是多少？',
                        options: ['0 到 1 之间', '-1 到 1 之间', '0 到 100 之间', '所有实数'],
                        answer: 0,
                        explanation: '概率值在 0（不可能事件）到 1（必然事件）之间。'
                    },
                    {
                        question: '条件概率 P(A|B) 表示什么？',
                        options: [
                            '在事件 B 发生的条件下，事件 A 发生的概率',
                            '事件 A 和 B 同时发生的概率',
                            '事件 A 或 B 发生的概率',
                            '事件 B 在 A 之后发生的概率'
                        ],
                        answer: 0,
                        explanation: 'P(A|B) = P(A∩B) / P(B)，P(B) > 0。'
                    },
                    {
                        question: '贝叶斯定理（Bayes\' Theorem）的公式是什么？',
                        options: [
                            'P(A|B) = P(B|A) * P(A) / P(B)',
                            'P(A∩B) = P(A)P(B)',
                            'P(A∪B) = P(A) + P(B)',
                            'P(A|B) = P(A)P(B)'
                        ],
                        answer: 0,
                        explanation: '贝叶斯定理描述了先验概率和后验概率的关系。'
                    },
                    {
                        question: '随机变量（Random Variable）是什么？',
                        options: [
                            '将随机事件映射到数值的函数',
                            '不确定的变量',
                            '随机数',
                            '概率'
                        ],
                        answer: 0,
                        explanation: '随机变量可以是离散的或连续的，其取值由随机试验结果决定。'
                    },
                    {
                        question: '期望（Expectation）的数学意义是什么？',
                        options: [
                            '随机变量取值的加权平均，权重为概率',
                            '最可能的值',
                            '中位数',
                            '众数'
                        ],
                        answer: 0,
                        explanation: '期望 E[X] = Σ x·P(X=x)（离散）或 ∫ x·f(x) dx（连续）。'
                    },
                    {
                        question: '方差（Variance）衡量什么？',
                        options: [
                            '随机变量与其期望的偏离程度',
                            '平均水平',
                            '相关程度',
                            '分布形状'
                        ],
                        answer: 0,
                        explanation: 'Var(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2。'
                    },
                    {
                        question: '标准差（Standard Deviation）与方差的关系是？',
                        options: [
                            '标准差的平方等于方差',
                            '标准差等于方差的平方根',
                            '两者相等',
                            '没有关系'
                        ],
                        answer: 1,
                        explanation: '标准差是方差的平方根，与原始数据单位相同，更易解释。'
                    },
                    {
                        question: '协方差（Covariance）衡量什么？',
                        options: [
                            '两个随机变量的总体误差和相关性',
                            '单个变量的离散程度',
                            '多个变量的平均值',
                            '变量的分布'
                        ],
                        answer: 0,
                        explanation: 'Cov(X,Y) = E[(X - E[X])(Y - E[Y])]，正表示正相关，负表示负相关。'
                    },
                    {
                        question: '相关系数（Correlation Coefficient）的范围是？',
                        options: ['[-1, 1]', '[0, 1]', '(-∞, ∞)', '[0, ∞)'],
                        answer: 0,
                        explanation: '相关系数 ρ 在 -1 到 1 之间，绝对值越大线性关系越强。'
                    },
                    // ---- 概率分布 ----
                    {
                        question: '正态分布（Normal Distribution）的特征是什么？',
                        options: [
                            '钟形曲线，对称，均值=中位数=众数',
                            '不对称，长尾',
                            '离散分布',
                            '均匀分布'
                        ],
                        answer: 0,
                        explanation: '正态分布由均值和标准差完全决定，中心极限定理表明大量独立随机变量之和近似正态。'
                    },
                    {
                        question: '标准正态分布的均值是多少？',
                        options: ['0', '1', '取决于数据', '没有均值'],
                        answer: 0,
                        explanation: '标准正态分布均值为 0，标准差为 1。'
                    },
                    {
                        question: '伯努利分布（Bernoulli Distribution）描述什么？',
                        options: [
                            '单次随机试验，结果只有两个（成功/失败）',
                            '多次独立伯努利试验的成功次数',
                            '单位时间内事件发生次数',
                            '连续随机变量'
                        ],
                        answer: 0,
                        explanation: '伯努利分布是二项分布在单次试验时的特例。'
                    },
                    {
                        question: '二项分布（Binomial Distribution）适用于什么场景？',
                        options: [
                            '固定次数的独立伯努利试验',
                            '连续时间事件计数',
                            '指数分布',
                            '均匀分布'
                        ],
                        answer: 0,
                        explanation: '二项分布描述 n 次独立伯努利试验中成功次数的分布。'
                    },
                    {
                        question: '泊松分布（Poisson Distribution）常用于什么？',
                        options: [
                            '单位时间或空间内事件发生的次数',
                            '连续变量的分布',
                            '对称分布',
                            '二项分布的近似'
                        ],
                        answer: 0,
                        explanation: '泊松分布适用于稀有事件在固定区间内的计数。'
                    },
                    {
                        question: '均匀分布（Uniform Distribution）的特点是什么？',
                        options: [
                            '在区间内所有值等概率出现',
                            '集中在均值附近',
                            '偏态分布',
                            '指数分布'
                        ],
                        answer: 0,
                        explanation: '均匀分布的概率密度函数在区间内为常数。'
                    },
                    // ---- 统计推断 ----
                    {
                        question: '统计推断的主要目的是什么？',
                        options: [
                            '用样本数据推断总体特征',
                            '描述样本数据',
                            '计算样本均值',
                            '绘制图表'
                        ],
                        answer: 0,
                        explanation: '统计推断利用样本信息对总体参数进行估计或假设检验。'
                    },
                    {
                        question: '中心极限定理（Central Limit Theorem）表明什么？',
                        options: [
                            '大样本下，样本均值的分布近似正态分布',
                            '数据总是正态分布',
                            '样本量越大越好',
                            '均值等于中位数'
                        ],
                        answer: 0,
                        explanation: 'CLT 指出，无论总体分布如何，当样本量足够大时，样本均值的抽样分布近似正态。'
                    },
                    {
                        question: '最大似然估计（MLE）的思想是什么？',
                        options: [
                            '选择使观测数据出现概率最大的参数值',
                            '最小化误差平方和',
                            '最大化后验概率',
                            '最小化方差'
                        ],
                        answer: 0,
                        explanation: 'MLE 是参数估计的常用方法，寻找最可能产生观测数据的参数。'
                    }
                ],
                resources: [
                    { name: '3Blue1Brown数学', url: 'https://www.3blue1brown.com/', type: 'video' },
                    { name: '可汗学院 - 线性代数', url: 'https://zh.khanacademy.org/math/linear-algebra', type: 'course' },
                    { name: '机器学习数学基础', url: 'https://www.bilibili.com/video/BV1Qx411m7Lm', type: 'video' },
                ]
            },
        ]
    },
    {
        id: 'devops',
        name: '运维开发',
        icon: '🔧',
        category: 'devops',
        description: '打通开发与运维，推进自动化部署、监控与稳定性',
        skills: [
            {
                id: 'linux',
                name: 'Linux',
                icon: '🐧',
                description: '命令行、系统管理与服务器基础',
                priority: 'core',
                quizs: [
                    // ---- Linux 基础概念 ----
                    {
                        question: 'Linux 操作系统的核心部分是什么？',
                        options: ['内核 (Kernel)', 'Shell', '文件系统', '桌面环境'],
                        answer: 0,
                        explanation: '内核是操作系统的核心，负责管理硬件、进程、内存等核心功能。'
                    },
                    {
                        question: '以下哪个是 Linux 中常见的 Shell？',
                        options: ['Bash', 'PowerShell', 'CMD', 'Zsh'],
                        answer: 0,
                        explanation: 'Bash（Bourne Again Shell）是大多数 Linux 发行版默认的 Shell，Zsh 也是常见 Shell。'
                    },
                    {
                        question: 'Linux 文件系统的根目录是？',
                        options: ['/', '/root', '/home', '/etc'],
                        answer: 0,
                        explanation: 'Linux 文件系统使用单一根目录树，所有分区和目录都挂载在根目录 `/` 下。'
                    },
                    {
                        question: 'Linux 中，用于切换当前工作目录的命令是？',
                        options: ['cd', 'ls', 'pwd', 'dir'],
                        answer: 0,
                        explanation: '`cd`（change directory）命令用于切换当前工作目录。'
                    },
                    {
                        question: 'Linux 中，用于列出目录内容的命令是？',
                        options: ['ls', 'list', 'dir', 'll'],
                        answer: 0,
                        explanation: '`ls` 命令是最常用的列出文件和目录的命令。'
                    },
                    {
                        question: 'Linux 中，用于显示当前工作目录路径的命令是？',
                        options: ['pwd', 'cwd', 'path', 'dir'],
                        answer: 0,
                        explanation: '`pwd`（print working directory）命令显示当前所在目录的绝对路径。'
                    },
                    {
                        question: 'Linux 中，用于创建新目录的命令是？',
                        options: ['mkdir', 'md', 'newdir', 'createdir'],
                        answer: 0,
                        explanation: '`mkdir`（make directory）命令用于创建新目录。'
                    },
                    {
                        question: 'Linux 中，用于删除空目录的命令是？',
                        options: ['rmdir', 'rm -r', 'del', 'deldir'],
                        answer: 0,
                        explanation: '`rmdir` 专门用于删除空目录，`rm -r` 可以递归删除非空目录。'
                    },
                    {
                        question: 'Linux 中，用于复制文件或目录的命令是？',
                        options: ['cp', 'copy', 'mv', 'dd'],
                        answer: 0,
                        explanation: '`cp` 命令用于复制文件或目录。'
                    },
                    {
                        question: 'Linux 中，用于移动或重命名文件/目录的命令是？',
                        options: ['mv', 'move', 'ren', 'cp'],
                        answer: 0,
                        explanation: '`mv` 命令可以移动文件到不同位置，或在同一目录下重命名。'
                    },
                    {
                        question: 'Linux 中，用于删除文件或目录的命令是？',
                        options: ['rm', 'del', 'erase', 'delete'],
                        answer: 0,
                        explanation: '`rm` 命令用于删除文件或目录（需配合 `-r` 递归删除目录）。'
                    },
                    {
                        question: 'Linux 中，用于查看文件内容的命令是？',
                        options: ['cat', 'less', 'more', '以上都是'],
                        answer: 3,
                        explanation: '`cat` 显示全部内容，`less` 和 `more` 分页显示，都可用于查看文件。'
                    },
                    {
                        question: 'Linux 中，用于在文本文件中查找匹配行的命令是？',
                        options: ['grep', 'find', 'awk', 'sed'],
                        answer: 0,
                        explanation: '`grep`（global regular expression print）用于搜索文本中的匹配模式。'
                    },
                    {
                        question: 'Linux 中，用于查看系统进程的命令是？',
                        options: ['ps', 'top', 'htop', '以上都是'],
                        answer: 3,
                        explanation: '`ps` 显示静态进程快照，`top` 和 `htop` 提供动态实时视图。'
                    },
                    {
                        question: 'Linux 中，用于终止进程的命令是？',
                        options: ['kill', 'stop', 'end', 'exit'],
                        answer: 0,
                        explanation: '`kill` 命令向进程发送信号，默认发送 TERM 信号终止进程。'
                    },
                    {
                        question: 'Linux 中，用于修改文件权限的命令是？',
                        options: ['chmod', 'chown', 'chgrp', 'umask'],
                        answer: 0,
                        explanation: '`chmod`（change mode）用于修改文件或目录的读、写、执行权限。'
                    },
                    {
                        question: 'Linux 中，用于修改文件所有者的命令是？',
                        options: ['chown', 'chmod', 'chgrp', 'usermod'],
                        answer: 0,
                        explanation: '`chown`（change owner）用于更改文件的所有者和/或所属组。'
                    },
                    {
                        question: 'Linux 中，用于查看命令帮助文档的命令是？',
                        options: ['man', 'help', 'info', '--help'],
                        answer: 0,
                        explanation: '`man`（manual）命令提供详细的命令手册页。'
                    },
                    {
                        question: 'Linux 中，超级管理员用户的名称通常是？',
                        options: ['root', 'admin', 'super', 'administrator'],
                        answer: 0,
                        explanation: '`root` 是 Linux 系统中权限最高的超级用户。'
                    },
                    {
                        question: 'Linux 中，用于切换用户身份的命令是？',
                        options: ['su', 'sudo', 'user', 'switch'],
                        answer: 0,
                        explanation: '`su`（switch user）允许切换用户身份，`sudo` 允许以其他用户权限执行命令。'
                    }
                ],
                resources: [
                    { name: 'Linux命令大全', url: 'https://www.runoob.com/linux/linux-command-manual.html', type: 'tutorial' },
                    { name: '鸟哥的Linux私房菜', url: 'https://linux.vbird.org/', type: 'book' },
                    { name: 'Linux入门教程', url: 'https://www.bilibili.com/video/BV1Ut411v7gW', type: 'video' },
                ]
            },
            {
                id: 'docker_devops',
                name: 'Docker 运维',
                icon: '🐳',
                description: '镜像、容器与发布流程管理',
                priority: 'core',
                quizs: [
                    {
                        question: 'Docker 是什么？',
                        options: [
                            '一个开源的容器化平台',
                            '一个虚拟机软件',
                            '一个配置管理工具',
                            '一个编程语言'
                        ],
                        answer: 0,
                        explanation: 'Docker 是一个开源平台，用于开发、交付和运行应用程序，它使用操作系统级虚拟化来打包软件称为容器。'
                    },
                    {
                        question: '容器与虚拟机的核心区别是什么？',
                        options: [
                            '容器共享主机操作系统内核，而虚拟机包含完整操作系统',
                            '容器性能更差',
                            '容器不能运行 Linux 应用',
                            '它们没有区别'
                        ],
                        answer: 0,
                        explanation: '容器在主机操作系统内核上运行，共享内核，更轻量；虚拟机则包含完整的客户操作系统，更重。'
                    },
                    {
                        question: 'Docker 的官方图标是什么动物？',
                        options: ['鲸鱼', '企鹅', '海豚', '章鱼'],
                        answer: 0,
                        explanation: 'Docker 的 logo 是一只背着集装箱的鲸鱼，象征着容器。'
                    },
                    {
                        question: 'Docker 镜像是什么？',
                        options: [
                            '一个只读模板，用于创建容器',
                            '一个运行中的容器',
                            'Docker 的配置文件',
                            '一个网络服务'
                        ],
                        answer: 0,
                        explanation: 'Docker 镜像是一个轻量级、独立、可执行的软件包，包含运行应用程序所需的一切。'
                    },
                    {
                        question: 'Docker 容器是什么？',
                        options: [
                            '镜像的可运行实例',
                            '镜像的只读版本',
                            'Docker 的配置文件',
                            '一个镜像仓库'
                        ],
                        answer: 0,
                        explanation: '容器是镜像的运行时实例，可以被启动、停止、移动和删除。'
                    },
                    {
                        question: '用于列出本地所有 Docker 镜像的命令是？',
                        options: ['docker images', 'docker list images', 'docker show images', 'docker ps'],
                        answer: 0,
                        explanation: '`docker images` 命令列出本地存储的所有镜像。'
                    },
                    {
                        question: '用于列出当前运行中的容器的命令是？',
                        options: ['docker ps', 'docker container list', 'docker show containers', 'docker run'],
                        answer: 0,
                        explanation: '`docker ps` 命令列出正在运行的容器，加 `-a` 参数列出所有容器（包括已停止的）。'
                    },
                    {
                        question: '从 Docker Hub 拉取一个镜像的命令是？',
                        options: ['docker pull', 'docker push', 'docker fetch', 'docker get'],
                        answer: 0,
                        explanation: '`docker pull` 命令从镜像仓库（如 Docker Hub）拉取镜像到本地。'
                    },
                    {
                        question: '用于创建并启动一个新容器的命令是？',
                        options: ['docker run', 'docker start', 'docker create', 'docker exec'],
                        answer: 0,
                        explanation: '`docker run` 命令是 `docker create` 和 `docker start` 的组合，用于创建并启动容器。'
                    },
                    {
                        question: '用于停止一个运行中的容器的命令是？',
                        options: ['docker stop', 'docker kill', 'docker pause', 'docker down'],
                        answer: 0,
                        explanation: '`docker stop` 发送 SIGTERM 信号优雅地停止容器。'
                    },
                    {
                        question: '用于删除一个已停止的容器的命令是？',
                        options: ['docker rm', 'docker rmi', 'docker delete', 'docker remove'],
                        answer: 0,
                        explanation: '`docker rm` 命令用于删除一个或多个容器。'
                    },
                    {
                        question: 'Dockerfile 是什么？',
                        options: [
                            '一个文本文件，包含构建镜像的指令',
                            '一个二进制文件',
                            '一个配置文件',
                            '一个脚本文件'
                        ],
                        answer: 0,
                        explanation: 'Dockerfile 是一个文本文件，包含了一系列指令，用于自动化构建 Docker 镜像。'
                    },
                    {
                        question: 'Dockerfile 中，用于指定基础镜像的指令是？',
                        options: ['FROM', 'BASE', 'START', 'IMAGE'],
                        answer: 0,
                        explanation: '`FROM` 指令初始化一个新的构建阶段，并设置基础镜像。'
                    },
                    {
                        question: '用于将文件或目录从构建上下文复制到镜像中的指令是？',
                        options: ['COPY', 'ADD', 'MOVE', 'PASTE'],
                        answer: 0,
                        explanation: '`COPY` 和 `ADD` 都用于复制文件，`COPY` 更简单。'
                    },
                    {
                        question: 'Docker 中，用于将主机目录挂载到容器中的选项是？',
                        options: ['-v 或 --volume', '-m', '-d', '--mount'],
                        answer: 0,
                        explanation: '`-v` 或 `--volume` 选项用于将主机的文件或目录挂载到容器中。'
                    },
                    {
                        question: '用于将容器端口映射到主机端口的 `docker run` 选项是？',
                        options: ['-p', '-P', '--port', '--publish'],
                        answer: 0,
                        explanation: '`-p` (小写) 将容器的指定端口映射到主机的指定端口，格式 `主机端口:容器端口`。'
                    },
                    {
                        question: 'Docker Compose 主要用于什么场景？',
                        options: [
                            '定义和运行多容器 Docker 应用程序',
                            '管理单个容器',
                            '构建镜像',
                            '监控容器'
                        ],
                        answer: 0,
                        explanation: 'Docker Compose 是一个用于定义和运行多容器 Docker 应用程序的工具，使用 YAML 文件配置。'
                    },
                    {
                        question: 'Docker Compose 使用的默认配置文件名称是？',
                        options: ['docker-compose.yml', 'compose.yml', 'docker-compose.yaml', 'A 和 C'],
                        answer: 3,
                        explanation: '默认的文件名是 `docker-compose.yml` 或 `docker-compose.yaml`。'
                    },
                    {
                        question: '启动 docker-compose.yml 中定义的所有服务的命令是？',
                        options: ['docker-compose up', 'docker-compose start', 'docker-compose run', 'docker-compose launch'],
                        answer: 0,
                        explanation: '`docker-compose up` 命令构建、（重新）创建、启动并附加到服务的容器。'
                    },
                    {
                        question: 'Docker Hub 是什么？',
                        options: [
                            'Docker 官方的公共镜像仓库',
                            'Docker 的包管理器',
                            '一个容器运行时',
                            '一个网络管理工具'
                        ],
                        answer: 0,
                        explanation: 'Docker Hub 是 Docker 官方提供的公共注册表，用于存储和分发 Docker 镜像。'
                    },
                    {
                        question: '在容器化项目中，`compose.yaml` 或 `docker-compose.yml` 的主要作用是什么？',
                        options: [
                            '定义多容器应用的服务、网络和卷',
                            '构建 Linux 内核',
                            '查看镜像历史记录',
                            '启动 Kubernetes 集群'
                        ],
                        answer: 0,
                        explanation: 'Compose 文件用于声明多容器应用的结构，例如 Web、数据库、缓存等服务如何一起启动。'
                    },
                    {
                        question: 'Dockerfile 中 `EXPOSE 3000` 指令通常表示什么？',
                        options: [
                            '声明容器会监听 3000 端口',
                            '自动把宿主机 3000 端口映射进去',
                            '启动 3000 个容器',
                            '限制应用只能使用 3000MB 内存'
                        ],
                        answer: 0,
                        explanation: '`EXPOSE` 是镜像元数据，用来说明容器服务默认监听的端口；真正的端口映射仍需要在运行时配置。'
                    }
                ],
                resources: [
                    { name: 'Docker官方文档', url: 'https://docs.docker.com/', type: 'docs' },
                    { name: 'Docker入门教程', url: 'https://www.runoob.com/docker/docker-tutorial.html', type: 'tutorial' },
                    { name: 'Docker从入门到实践', url: 'https://vuepress.mirror.docker-practice.com/', type: 'book' },
                ]
            },
            {
                id: 'kubernetes',
                name: 'Kubernetes',
                icon: '⚓',
                description: '容器编排、服务治理与集群管理',
                priority: 'core',
                quizs: [
                    {
                        question: 'Kubernetes 是什么？',
                        options: [
                            '一个开源的容器编排平台',
                            '一个容器运行时',
                            '一个虚拟化工具',
                            '一个配置管理工具'
                        ],
                        answer: 0,
                        explanation: 'Kubernetes（K8s）是一个用于自动部署、扩展和管理容器化应用程序的开源系统。'
                    },
                    {
                        question: 'Kubernetes 中的最小部署单元是什么？',
                        options: ['Pod', '容器', '节点', '服务'],
                        answer: 0,
                        explanation: 'Pod 是 Kubernetes 中可创建和管理的最小可部署计算单元，一个 Pod 可以包含一个或多个容器。'
                    },
                    {
                        question: 'Kubernetes 中，用于管理一组 Pod 的控制器通常是什么？',
                        options: ['Deployment', 'Service', 'ConfigMap', 'Ingress'],
                        answer: 0,
                        explanation: 'Deployment 是最常用的控制器，用于声明式地管理 Pod 和 ReplicaSet，支持滚动更新和回滚。'
                    },
                    {
                        question: 'Kubernetes 中，用于将流量负载均衡到一组 Pod 的抽象是什么？',
                        options: ['Service', 'Ingress', 'Endpoint', 'LoadBalancer'],
                        answer: 0,
                        explanation: 'Service 定义了一组 Pod 的访问策略，通常通过标签选择器关联 Pod，并提供稳定的 IP 和 DNS 名。'
                    },
                    {
                        question: 'Kubernetes 中，用于从外部访问集群内部服务的资源通常是？',
                        options: ['Ingress', 'Service (NodePort)', 'Service (LoadBalancer)', '以上都是'],
                        answer: 3,
                        explanation: '可以通过 Ingress、NodePort 类型的 Service 或 LoadBalancer 类型的 Service 将服务暴露到集群外部。'
                    },
                    {
                        question: 'Kubernetes 中，用于存储配置信息的资源对象是？',
                        options: ['ConfigMap', 'Secret', 'PersistentVolume', 'Env'],
                        answer: 0,
                        explanation: 'ConfigMap 用于存储非敏感的配置信息，如环境变量、配置文件等。'
                    },
                    {
                        question: 'Kubernetes 中，用于存储敏感信息（如密码、密钥）的资源对象是？',
                        options: ['Secret', 'ConfigMap', 'EncryptedVolume', 'KeyStore'],
                        answer: 0,
                        explanation: 'Secret 用于存储敏感数据，默认以 base64 编码存储，可以挂载为卷或暴露为环境变量。'
                    },
                    {
                        question: 'Kubernetes 中，用于持久化存储的资源对象是？',
                        options: ['PersistentVolume (PV) 和 PersistentVolumeClaim (PVC)', 'StorageClass', 'Volume', 'HostPath'],
                        answer: 0,
                        explanation: 'PV 是集群中的存储资源，PVC 是用户对存储的请求，两者是 Kubernetes 持久化存储的核心。'
                    },
                    {
                        question: '用于管理 Kubernetes 集群的命令行工具是？',
                        options: ['kubectl', 'kubeadm', 'kubelet', 'kubespray'],
                        answer: 0,
                        explanation: '`kubectl` 是 Kubernetes 的命令行工具，用于与集群交互。'
                    },
                    {
                        question: '`kubectl get pods` 命令的作用是？',
                        options: [
                            '列出当前命名空间中的 Pod',
                            '创建 Pod',
                            '删除 Pod',
                            '修改 Pod'
                        ],
                        answer: 0,
                        explanation: '`kubectl get pods` 用于列出 Pod 及其状态信息。'
                    },
                    {
                        question: '`kubectl apply -f deployment.yaml` 命令的作用是？',
                        options: [
                            '创建或更新资源',
                            '查看资源',
                            '删除资源',
                            '导出资源'
                        ],
                        answer: 0,
                        explanation: '`kubectl apply` 可以通过文件或标准输入对资源进行声明式创建或更新。'
                    },
                    {
                        question: 'Kubernetes 中，用于水平自动伸缩的控制器是？',
                        options: ['HorizontalPodAutoscaler (HPA)', 'VerticalPodAutoscaler (VPA)', 'ClusterAutoscaler', 'Deployment'],
                        answer: 0,
                        explanation: 'HPA 根据 CPU 使用率或其他指标自动调整 Deployment 或 ReplicaSet 的副本数。'
                    },
                    {
                        question: 'Kubernetes 中，用于服务发现和配置管理的核心组件是？',
                        options: ['etcd', 'kube-apiserver', 'kube-scheduler', 'kube-controller-manager'],
                        answer: 0,
                        explanation: 'etcd 是 Kubernetes 的后端存储，用于保存所有集群数据。'
                    },
                    {
                        question: 'Kubernetes 中，API Server 的主要作用是什么？',
                        options: [
                            '提供 Kubernetes API，是集群的入口',
                            '调度 Pod 到节点',
                            '运行容器',
                            '管理控制器'
                        ],
                        answer: 0,
                        explanation: 'kube-apiserver 是 Kubernetes 控制平面的前端，处理所有内部和外部请求。'
                    },
                    {
                        question: 'Kubernetes 中，Scheduler 的作用是什么？',
                        options: [
                            '将新创建的 Pod 分配到合适的节点',
                            '运行容器',
                            '存储配置',
                            '提供服务发现'
                        ],
                        answer: 0,
                        explanation: 'kube-scheduler 负责根据资源需求和约束条件，为新 Pod 选择合适的节点运行。'
                    },
                    {
                        question: 'Kubernetes 中，Kubelet 是什么？',
                        options: [
                            '运行在每个节点上的代理，确保容器运行在 Pod 中',
                            '集群入口',
                            '调度器',
                            '控制器'
                        ],
                        answer: 0,
                        explanation: 'kubelet 是在每个节点上运行的代理组件，它确保 Pod 中的容器正常运行。'
                    },
                    {
                        question: 'Kubernetes 中，用于声明网络策略的资源是？',
                        options: ['NetworkPolicy', 'Ingress', 'Service', 'Firewall'],
                        answer: 0,
                        explanation: 'NetworkPolicy 允许在 IP 地址或端口级别控制 Pod 之间的网络流量。'
                    },
                    {
                        question: 'Kubernetes 中，DaemonSet 保证什么？',
                        options: [
                            '每个节点上运行一个 Pod 副本',
                            '运行指定数量的 Pod 副本',
                            '运行一次性任务',
                            '定时运行任务'
                        ],
                        answer: 0,
                        explanation: 'DaemonSet 确保集群中的所有（或部分）节点上都运行同一个 Pod 的副本，常用于日志收集、监控等。'
                    },
                    {
                        question: 'Kubernetes 中，用于运行一次性任务的控制器是？',
                        options: ['Job', 'CronJob', 'Pod', 'Deployment'],
                        answer: 0,
                        explanation: 'Job 负责创建一个或多个 Pod，并确保它们成功终止。CronJob 可以定时执行 Job。'
                    },
                    {
                        question: 'Kubernetes 中，命名空间（Namespace）的作用是什么？',
                        options: [
                            '在同一个集群中实现资源隔离',
                            '隔离容器',
                            '定义网络策略',
                            '存储密钥'
                        ],
                        answer: 0,
                        explanation: '命名空间将集群划分为多个虚拟集群，用于资源分组和隔离。'
                    },
                    {
                        question: 'Kubernetes 中，readinessProbe 主要用来做什么？',
                        options: [
                            '判断 Pod 是否已经可以接收流量',
                            '判断节点是否需要扩容',
                            '检查镜像是否拉取成功',
                            '配置容器日志级别'
                        ],
                        answer: 0,
                        explanation: 'readinessProbe 失败时，Pod 不会从 Service 接收流量，常用于等待应用完全启动或依赖准备就绪。'
                    },
                    {
                        question: 'Kubernetes 中，ConfigMap 更适合存放哪类内容？',
                        options: [
                            '非敏感配置，如环境变量和应用参数',
                            '数据库明文密码',
                            '容器镜像层',
                            '节点的 CPU 指标'
                        ],
                        answer: 0,
                        explanation: 'ConfigMap 用于保存普通配置；敏感信息更适合放在 Secret 中。'
                    }
                ],
                resources: [
                    { name: 'Kubernetes官方文档', url: 'https://kubernetes.io/zh-cn/docs/', type: 'docs' },
                    { name: 'Kubernetes入门教程', url: 'https://www.bilibili.com/video/BV1Qv41167jL', type: 'video' },
                    { name: 'Kubernetes指南', url: 'https://kubernetes.feisky.xyz/', type: 'tutorial' },
                ]
            },
            {
                id: 'cicd',
                name: 'CI/CD',
                icon: '🔄',
                description: '自动化构建、测试、发布与回滚',
                priority: 'core',
                quizs: [
                    {
                        question: 'CI/CD 中的 "CI" 代表什么？',
                        options: [
                            '持续集成 (Continuous Integration)',
                            '持续交付 (Continuous Delivery)',
                            '持续部署 (Continuous Deployment)',
                            '代码集成 (Code Integration)'
                        ],
                        answer: 0,
                        explanation: 'CI（持续集成）指频繁地将代码变更合并到主干，并自动运行构建和测试。'
                    },
                    {
                        question: 'CI/CD 中的 "CD" 通常可以代表什么？',
                        options: [
                            '持续交付 (Continuous Delivery) 或持续部署 (Continuous Deployment)',
                            '持续开发 (Continuous Development)',
                            '代码部署 (Code Deployment)',
                            '以上都不是'
                        ],
                        answer: 0,
                        explanation: 'CD 可以指持续交付（确保代码可随时部署）或持续部署（自动将变更部署到生产环境）。'
                    },
                    {
                        question: '持续集成的主要目标是什么？',
                        options: [
                            '尽早发现集成问题，提高软件质量',
                            '加快代码编写速度',
                            '减少测试人员',
                            '替代版本控制'
                        ],
                        answer: 0,
                        explanation: '通过频繁集成和自动测试，可以快速发现并定位问题，降低集成风险。'
                    },
                    {
                        question: '以下哪个是常见的 CI/CD 工具？',
                        options: ['Jenkins', 'GitHub Actions', 'GitLab CI', '以上都是'],
                        answer: 3,
                        explanation: 'Jenkins 是老牌 CI/CD 工具，GitHub Actions 和 GitLab CI 是云原生时代的集成工具。'
                    },
                    {
                        question: 'Jenkins 是什么？',
                        options: [
                            '一个开源的自动化服务器，用于 CI/CD',
                            '一个版本控制工具',
                            '一个容器编排平台',
                            '一个代码编辑器'
                        ],
                        answer: 0,
                        explanation: 'Jenkins 是基于 Java 的开源持续集成和持续交付工具，通过插件支持各种功能。'
                    },
                    {
                        question: 'Jenkins 的 Pipeline 通常使用什么文件定义？',
                        options: ['Jenkinsfile', 'pipeline.yml', 'config.jenkins', 'build.xml'],
                        answer: 0,
                        explanation: 'Jenkinsfile 是定义 Jenkins Pipeline 的文本文件，可以存储在版本库中。'
                    },
                    {
                        question: 'Jenkins Pipeline 支持哪两种语法？',
                        options: [
                            '声明式 (Declarative) 和脚本式 (Scripted)',
                            'YAML 和 JSON',
                            'XML 和 Properties',
                            'Groovy 和 Java'
                        ],
                        answer: 0,
                        explanation: '声明式 Pipeline 更简单，脚本式 Pipeline 基于 Groovy 更灵活。'
                    },
                    {
                        question: 'GitHub Actions 的工作流文件存放在仓库的哪个目录？',
                        options: ['.github/workflows', '.actions', 'workflows', 'ci-cd'],
                        answer: 0,
                        explanation: 'GitHub Actions 的工作流使用 YAML 格式，存放在仓库的 `.github/workflows` 目录下。'
                    },
                    {
                        question: 'GitHub Actions 中，`on` 关键字的作用是什么？',
                        options: [
                            '定义触发工作流的事件',
                            '定义运行环境',
                            '定义作业步骤',
                            '定义变量'
                        ],
                        answer: 0,
                        explanation: '`on` 指定触发工作流运行的事件，如 `push`、`pull_request` 等。'
                    },
                    {
                        question: 'GitLab CI 的配置文件名称是什么？',
                        options: ['.gitlab-ci.yml', 'gitlab-ci.yml', 'ci.yml', 'config.gitlab'],
                        answer: 0,
                        explanation: 'GitLab CI 使用 `.gitlab-ci.yml` 文件定义流水线，存放在仓库根目录。'
                    },
                    {
                        question: 'GitLab CI 中，用于定义作业的关键字是？',
                        options: ['job', 'stage', 'task', 'step'],
                        answer: 0,
                        explanation: '每个作业可以有脚本、阶段、依赖等配置。'
                    },
                    {
                        question: 'CI/CD 流水线中的 "阶段" (Stage) 通常代表什么？',
                        options: [
                            '并行或顺序执行的一组作业',
                            '单个命令',
                            '代码提交',
                            '部署环境'
                        ],
                        answer: 0,
                        explanation: '流水线通常划分为多个阶段，如 build、test、deploy，同一阶段的作业可以并行执行。'
                    },
                    {
                        question: 'CI/CD 中，构建（Build）阶段通常做什么？',
                        options: [
                            '编译代码，生成可部署的制品',
                            '运行单元测试',
                            '部署到测试环境',
                            '代码审查'
                        ],
                        answer: 0,
                        explanation: '构建阶段将源代码转换为可执行文件或 Docker 镜像等制品。'
                    },
                    {
                        question: 'CI/CD 中，测试阶段通常不包括以下哪项？',
                        options: ['部署到生产环境', '单元测试', '集成测试', '代码质量检查'],
                        answer: 0,
                        explanation: '测试阶段包括各种自动测试和质量检查，生产环境部署通常是后续阶段。'
                    },
                    {
                        question: '持续交付（Continuous Delivery）的含义是？',
                        options: [
                            '确保代码可以随时安全地部署到生产环境',
                            '每次变更都自动部署到生产',
                            '手动部署代码',
                            '只进行集成测试'
                        ],
                        answer: 0,
                        explanation: '持续交付要求代码始终处于可部署状态，但部署到生产可能需要手动触发。'
                    },
                    {
                        question: '持续部署（Continuous Deployment）的含义是？',
                        options: [
                            '每次通过自动测试的变更都自动部署到生产',
                            '需要手动点击部署按钮',
                            '只部署到测试环境',
                            '不定期部署'
                        ],
                        answer: 0,
                        explanation: '持续部署是持续交付的下一步，完全自动化生产环境的发布。'
                    },
                    {
                        question: 'CI/CD 中，制品（Artifact）通常指什么？',
                        options: [
                            '构建过程产生的可部署文件，如 JAR、Docker 镜像',
                            '源代码',
                            '配置文件',
                            '测试报告'
                        ],
                        answer: 0,
                        explanation: '制品是构建过程的输出，通常在流水线后续阶段（如测试、部署）中使用。'
                    },
                    {
                        question: 'CI/CD 流水线中，环境变量通常用于什么？',
                        options: [
                            '存储敏感信息或配置，如 API 密钥、数据库连接',
                            '定义流水线步骤',
                            '控制流程',
                            '命名作业'
                        ],
                        answer: 0,
                        explanation: '环境变量将配置与代码分离，特别适合存储密码等敏感信息（通常需加密）。'
                    },
                    {
                        question: '蓝绿部署（Blue-Green Deployment）的策略是什么？',
                        options: [
                            '同时运行两个环境，通过切换流量实现零停机发布',
                            '逐步替换旧版本',
                            '先部署到一小部分用户',
                            '回滚到上一个版本'
                        ],
                        answer: 0,
                        explanation: '蓝绿部署维护两套环境，切换负载均衡器即可完成版本切换，回滚也很快。'
                    },
                    {
                        question: '金丝雀发布（Canary Release）的策略是什么？',
                        options: [
                            '让一小部分用户先使用新版本，观察无问题后逐步推广',
                            '一次性全部更新',
                            '同时运行多个版本',
                            '回滚所有变更'
                        ],
                        answer: 0,
                        explanation: '金丝雀发布是一种降低风险的部署策略，通过监控新版本的早期使用情况来决定是否全量发布。'
                    },
                    {
                        question: '在 CI 流水线中缓存依赖（如 npm cache、Maven cache）的主要收益是什么？',
                        options: [
                            '减少重复下载时间，加快构建速度',
                            '替代自动化测试',
                            '防止代码合并冲突',
                            '让所有构建都无需联网'
                        ],
                        answer: 0,
                        explanation: '缓存常用依赖能显著缩短构建时间，但仍需要结合锁文件和缓存策略保证可复现性。'
                    },
                    {
                        question: '如果测试阶段失败，较合理的 CI/CD 处理方式通常是？',
                        options: [
                            '阻止后续部署阶段继续执行',
                            '忽略失败直接发布',
                            '只通知前端同学',
                            '自动删除整个仓库'
                        ],
                        answer: 0,
                        explanation: '测试失败意味着质量门禁未通过，通常应中断后续发布，避免问题版本进入环境。'
                    }
                ],
                resources: [
                    { name: 'Jenkins官方文档', url: 'https://www.jenkins.io/zh/doc/', type: 'docs' },
                    { name: 'GitHub Actions文档', url: 'https://docs.github.com/zh/actions', type: 'docs' },
                    { name: 'GitLab CI文档', url: 'https://docs.gitlab.com/ee/ci/', type: 'docs' },
                ]
            },
            {
                id: 'cloud',
                name: '云服务',
                icon: '☁️',
                description: '云主机、存储、网络与部署基础',
                priority: 'important',
                quizs: [
                    {
                        question: '什么是云计算？',
                        options: [
                            '通过网络按需提供可配置的计算资源',
                            '本地服务器集群',
                            '一种编程语言',
                            '数据库系统'
                        ],
                        answer: 0,
                        explanation: '云计算通过网络按需提供服务器、存储、数据库等计算资源，只需为使用量付费。'
                    },
                    {
                        question: 'IaaS（基础设施即服务）提供什么？',
                        options: [
                            '虚拟化计算资源，如虚拟机、存储、网络',
                            '应用程序托管平台',
                            '软件应用',
                            '开发框架'
                        ],
                        answer: 0,
                        explanation: 'IaaS 提供基础计算资源，用户可部署和运行任意软件。'
                    },
                    {
                        question: 'PaaS（平台即服务）提供什么？',
                        options: [
                            '应用程序开发和部署平台，用户无需管理底层基础设施',
                            '虚拟机',
                            '物理服务器',
                            '网络设备'
                        ],
                        answer: 0,
                        explanation: 'PaaS 提供运行时环境、中间件等，用户只需关注应用代码。'
                    },
                    {
                        question: 'SaaS（软件即服务）提供什么？',
                        options: [
                            '可直接使用的完整软件应用，如邮箱、办公软件',
                            '基础设施',
                            '开发平台',
                            '数据库'
                        ],
                        answer: 0,
                        explanation: 'SaaS 提供即开即用的应用软件，用户无需安装和维护。'
                    },
                    {
                        question: 'AWS 的云服务器（虚拟机）服务名称是什么？',
                        options: ['EC2', 'S3', 'RDS', 'Lambda'],
                        answer: 0,
                        explanation: 'Amazon Elastic Compute Cloud (EC2) 提供可扩展的虚拟服务器。'
                    },
                    {
                        question: 'AWS 的对象存储服务名称是什么？',
                        options: ['S3', 'EBS', 'EFS', 'Glacier'],
                        answer: 0,
                        explanation: 'Amazon Simple Storage Service (S3) 是一种对象存储服务。'
                    },
                    {
                        question: '阿里云的云服务器服务名称是什么？',
                        options: ['ECS', 'EC2', 'CVM', 'BMS'],
                        answer: 0,
                        explanation: '阿里云弹性计算服务 (ECS) 是其核心的云服务器产品。'
                    },
                    {
                        question: '腾讯云的云服务器服务名称是什么？',
                        options: ['CVM', 'EC2', 'ECS', 'BMC'],
                        answer: 0,
                        explanation: '腾讯云云服务器 (CVM) 是其提供的可扩展计算服务。'
                    },
                    {
                        question: 'AWS 的关系型数据库服务名称是什么？',
                        options: ['RDS', 'DynamoDB', 'Redshift', 'Aurora'],
                        answer: 0,
                        explanation: 'Amazon Relational Database Service (RDS) 简化了关系型数据库的部署和操作。'
                    },
                    {
                        question: '阿里云的对象存储服务名称是什么？',
                        options: ['OSS', 'S3', 'OBS', 'COS'],
                        answer: 0,
                        explanation: '阿里云对象存储服务 (OSS) 是其海量、安全的云存储服务。'
                    },
                    {
                        question: '腾讯云的对象存储服务名称是什么？',
                        options: ['COS', 'OSS', 'S3', 'TOS'],
                        answer: 0,
                        explanation: '腾讯云对象存储 (COS) 是一种无目录层次结构、无数据格式限制的云存储服务。'
                    },
                    {
                        question: 'AWS 的无服务器计算服务名称是什么？',
                        options: ['Lambda', 'Fargate', 'ECS', 'EC2'],
                        answer: 0,
                        explanation: 'AWS Lambda 允许您运行代码而无需预置或管理服务器。'
                    },
                    {
                        question: '阿里云的无服务器计算服务名称是什么？',
                        options: ['函数计算', 'Serverless App', 'FC', 'SAE'],
                        answer: 0,
                        explanation: '阿里云函数计算是事件驱动的全托管计算服务。'
                    },
                    {
                        question: '云平台中，VPC 代表什么？',
                        options: [
                            '虚拟私有云（Virtual Private Cloud）',
                            '虚拟处理核心',
                            '虚拟机监控器',
                            '虚拟网络连接'
                        ],
                        answer: 0,
                        explanation: 'VPC 允许您在云中创建一个逻辑隔离的虚拟网络，定义 IP 地址范围、子网、路由等。'
                    },
                    {
                        question: 'CDN 在云平台中的作用是什么？',
                        options: [
                            '内容分发网络，加速静态资源访问',
                            '备份数据',
                            '监控服务器',
                            '管理域名'
                        ],
                        answer: 0,
                        explanation: 'CDN 通过将内容缓存到边缘节点，使用户就近获取内容，降低延迟。'
                    },
                    {
                        question: '云平台中，负载均衡器的主要作用是什么？',
                        options: [
                            '将流量分发到多个后端服务器',
                            '存储数据',
                            '管理域名',
                            '提供防火墙'
                        ],
                        answer: 0,
                        explanation: '负载均衡器可以提高应用的可用性和扩展性，自动分发流量。'
                    },
                    {
                        question: 'AWS 中，用于自动扩展（Auto Scaling）的功能是什么？',
                        options: [
                            '根据条件自动调整 EC2 实例数量',
                            '自动升级操作系统',
                            '自动备份数据',
                            '自动部署代码'
                        ],
                        answer: 0,
                        explanation: 'Auto Scaling 可根据负载指标或计划动态调整计算资源。'
                    },
                    {
                        question: '云平台中，安全组（Security Group）的作用是什么？',
                        options: [
                            '充当虚拟防火墙，控制实例的入站和出站流量',
                            '用户组管理',
                            '加密数据',
                            '身份认证'
                        ],
                        answer: 0,
                        explanation: '安全组是一组规则，允许您指定允许访问实例的协议、端口和源 IP。'
                    },
                    {
                        question: '云平台中，什么是可用区（Availability Zone）？',
                        options: [
                            '一个区域内独立的物理位置，用于容错',
                            '数据存储位置',
                            '网络分区',
                            '服务器类型'
                        ],
                        answer: 0,
                        explanation: '可用区是区域内独立的物理位置，通常由多个数据中心组成，用于构建高可用应用。'
                    },
                    {
                        question: '云平台中，什么是区域（Region）？',
                        options: [
                            '全球范围内独立的地理区域，包含多个可用区',
                            '数据中心',
                            '国家/地区',
                            '网络边界'
                        ],
                        answer: 0,
                        explanation: '区域是云服务提供商在全球分布的独立地理区域，如华北-北京、美国东部等。'
                    },
                    {
                        question: '如果要存放图片、视频、备份文件这类静态资源，通常更适合使用哪种云服务？',
                        options: [
                            '对象存储服务',
                            '关系型数据库',
                            '消息队列',
                            '负载均衡器'
                        ],
                        answer: 0,
                        explanation: '对象存储适合大规模静态文件存储，具备高可用、低成本和易于结合 CDN 分发等特点。'
                    },
                    {
                        question: '云平台中的 IAM（身份与访问管理）主要解决什么问题？',
                        options: [
                            '管理用户、角色和资源访问权限',
                            '提高单机 CPU 性能',
                            '自动压缩镜像体积',
                            '实现数据库主从复制'
                        ],
                        answer: 0,
                        explanation: 'IAM 用于控制“谁可以访问什么资源以及能执行什么操作”，是云上权限治理的基础。'
                    }
                ],
                resources: [
                    { name: '阿里云文档', url: 'https://help.aliyun.com/', type: 'docs' },
                    { name: '腾讯云文档', url: 'https://cloud.tencent.com/document', type: 'docs' },
                    { name: 'AWS文档', url: 'https://docs.aws.amazon.com/', type: 'docs' },
                ]
            },
            {
                id: 'monitoring',
                name: '监控告警',
                icon: '📡',
                description: '指标、日志、告警与可观测性',
                priority: 'important',
                quizs: [
                    {
                        question: 'Prometheus 是什么？',
                        options: [
                            '开源的监控和告警工具包',
                            '可视化仪表板工具',
                            '日志收集工具',
                            '容器编排平台'
                        ],
                        answer: 0,
                        explanation: 'Prometheus 是一个开源的系统监控和告警工具包，最初由 SoundCloud 开发。'
                    },
                    {
                        question: 'Prometheus 的核心数据模型是什么？',
                        options: [
                            '时序数据，由指标名称和键值对标签标识',
                            '关系型数据',
                            '键值对',
                            '文档型数据'
                        ],
                        answer: 0,
                        explanation: 'Prometheus 将所有数据存储为带时间戳的时序数据，每个时序由指标名和标签唯一标识。'
                    },
                    {
                        question: 'Prometheus 主要使用什么方式收集指标？',
                        options: [
                            '主动拉取（Pull）目标端点',
                            '被动接收（Push）数据',
                            '订阅消息队列',
                            '读取日志文件'
                        ],
                        answer: 0,
                        explanation: 'Prometheus 通过 HTTP 定期拉取（Pull）已配置的目标端点暴露的指标。'
                    },
                    {
                        question: 'Prometheus 中，用于查询数据的语言是？',
                        options: ['PromQL', 'SQL', 'GraphQL', 'LogQL'],
                        answer: 0,
                        explanation: 'PromQL (Prometheus Query Language) 是用于选择和聚合时序数据的查询语言。'
                    },
                    {
                        question: '以下哪个 PromQL 查询表示“过去5分钟的 CPU 使用率”？',
                        options: [
                            'avg(rate(node_cpu_seconds_total{mode="system"}[5m]))',
                            'node_cpu_seconds_total[5m]',
                            'sum(node_cpu_seconds_total)',
                            'count(node_cpu_seconds_total)'
                        ],
                        answer: 0,
                        explanation: '`rate()` 函数计算区间向量中时序的每秒平均增长率，常用于 Counter 类型指标。'
                    },
                    {
                        question: 'Prometheus 中，告警规则定义在哪里？',
                        options: [
                            '在 Prometheus 配置文件中定义规则文件',
                            '在 Grafana 中定义',
                            '在单独的数据库中',
                            '在应用程序代码中'
                        ],
                        answer: 0,
                        explanation: '告警规则在 YAML 格式的规则文件中定义，然后在 Prometheus 配置中加载。'
                    },
                    {
                        question: 'Prometheus 中，用于处理告警的独立组件是？',
                        options: ['Alertmanager', 'Prometheus Server', 'Grafana', 'Pushgateway'],
                        answer: 0,
                        explanation: 'Alertmanager 负责接收 Prometheus 发送的告警，进行去重、分组、静默，并发送通知。'
                    },
                    {
                        question: 'Grafana 是什么？',
                        options: [
                            '开源的可视化和分析平台',
                            '监控数据存储',
                            '日志收集工具',
                            '告警发送器'
                        ],
                        answer: 0,
                        explanation: 'Grafana 是一个开源的可视化平台，支持从 Prometheus 等多种数据源创建仪表板。'
                    },
                    {
                        question: 'Grafana 的主要作用是什么？',
                        options: [
                            '将监控数据以图表等形式可视化',
                            '存储时序数据',
                            '收集指标',
                            '发送告警'
                        ],
                        answer: 0,
                        explanation: 'Grafana 连接数据源，帮助用户创建、浏览和分享仪表板。'
                    },
                    {
                        question: 'Grafana 中，仪表板（Dashboard）由什么组成？',
                        options: ['行和面板', '表格', 'SQL 查询', '脚本'],
                        answer: 0,
                        explanation: '仪表板由行（Row）和面板（Panel）组成，面板可以是图表、表格、单值统计等。'
                    },
                    {
                        question: '以下哪个不是 Prometheus 支持的四种指标类型？',
                        options: ['Gauge', 'Histogram', 'Summary', 'Event'],
                        answer: 3,
                        explanation: 'Prometheus 客户端库支持四种核心指标类型：Counter、Gauge、Histogram 和 Summary。'
                    },
                    {
                        question: 'Prometheus 中，Counter 类型的指标适用于什么？',
                        options: [
                            '只增不减的累计值，如请求总数',
                            '可升可降的瞬时值，如内存使用量',
                            '统计数据分布',
                            '事件计数'
                        ],
                        answer: 0,
                        explanation: 'Counter 代表一个累积的指标，它只能增加（除非重启），适合表示请求数、任务完成数等。'
                    },
                    {
                        question: 'Prometheus 中，Gauge 类型的指标适用于什么？',
                        options: [
                            '可任意增减的瞬时值，如温度、内存使用量',
                            '累计值',
                            '统计分布',
                            '事件计数'
                        ],
                        answer: 0,
                        explanation: 'Gauge 代表一个可以任意上下变化的瞬时值，适合测量值。'
                    },
                    {
                        question: 'Prometheus 中，Histogram 类型的指标有什么作用？',
                        options: [
                            '对观测值进行采样，并统计在可配置的桶中的计数',
                            '计算平均值',
                            '记录最大值',
                            '计数事件'
                        ],
                        answer: 0,
                        explanation: 'Histogram 将观测值放入预定义的桶中，可用于计算分位数，如请求延迟的90分位数。'
                    },
                    {
                        question: 'Node Exporter 在 Prometheus 生态中的作用是什么？',
                        options: [
                            '暴露主机硬件和操作系统的指标',
                            '导出数据库指标',
                            '可视化指标',
                            '发送告警'
                        ],
                        answer: 0,
                        explanation: 'Node Exporter 是用于采集 Linux 系统各种指标（CPU、内存、磁盘等）的官方 exporter。'
                    },
                    {
                        question: 'Pushgateway 在 Prometheus 生态中的作用是什么？',
                        options: [
                            '允许临时任务或批处理任务推送指标',
                            '拉取指标',
                            '存储指标',
                            '可视化指标'
                        ],
                        answer: 0,
                        explanation: 'Pushgateway 允许那些无法被 Prometheus 拉取的服务（如短生命周期任务）推送指标。'
                    },
                    {
                        question: 'Prometheus 默认的拉取指标端口是多少？',
                        options: ['9090', '9100', '3000', '80'],
                        answer: 0,
                        explanation: 'Prometheus 自身的 Web UI 和 API 默认使用 9090 端口。Node Exporter 默认使用 9100 端口。'
                    },
                    {
                        question: 'Grafana 默认的 Web 端口是多少？',
                        options: ['3000', '9090', '8080', '80'],
                        answer: 0,
                        explanation: 'Grafana 默认启动在 3000 端口，默认用户/密码为 admin/admin。'
                    },
                    {
                        question: 'Prometheus 的告警分组（Grouping）在 Alertmanager 中的作用是？',
                        options: [
                            '将相似性质的告警合并为一个通知，减少告警噪音',
                            '将告警分类存储',
                            '提高告警发送速度',
                            '忽略重复告警'
                        ],
                        answer: 0,
                        explanation: '分组将同一类告警合并，避免短时间内收到大量相似通知。'
                    },
                    {
                        question: 'Prometheus 中，`up` 指标通常用来做什么？',
                        options: [
                            '表示目标是否正常（1 为正常，0 为不可达）',
                            '表示系统运行时间',
                            '表示 CPU 使用率',
                            '表示请求数'
                        ],
                        answer: 0,
                        explanation: '`up` 是 Prometheus 为每个抓取目标自动生成的内置指标，用于监控目标健康状态。'
                    },
                    {
                        question: '监控体系里常说的“告警疲劳”通常指什么？',
                        options: [
                            '低价值告警过多，导致团队对真正异常变得迟钝',
                            '告警系统 CPU 使用率过高',
                            '监控数据保留时间太短',
                            'Grafana 面板颜色太多'
                        ],
                        answer: 0,
                        explanation: '如果告警噪音太多，值班人员容易忽略关键问题，因此需要做好分级、抑制和收敛。'
                    },
                    {
                        question: '在可观测性实践中，SLO 更接近下面哪种含义？',
                        options: [
                            '服务可用性或响应时间等目标值',
                            '日志采集工具名称',
                            '数据库分片策略',
                            '容器镜像规范'
                        ],
                        answer: 0,
                        explanation: 'SLO 是 Service Level Objective，表示服务团队对关键指标设定的目标，例如月度可用性 99.9%。'
                    }
                ],
                resources: [
                    { name: 'Prometheus官方文档', url: 'https://prometheus.io/docs/', type: 'docs' },
                    { name: 'Grafana官方文档', url: 'https://grafana.com/docs/', type: 'docs' },
                    { name: '监控系统入门', url: 'https://www.bilibili.com/video/BV1Tb4y1z7fN', type: 'video' },
                ]
            },
            {
                id: 'shell',
                name: 'Shell脚本',
                icon: '💻',
                description: '批处理脚本与日常运维自动化',
                priority: 'core',
                quizs: [
                    {
                        question: 'Shell 脚本是什么？',
                        options: [
                            '为 Shell 编写的脚本程序',
                            '编译型程序',
                            '二进制文件',
                            '数据库脚本'
                        ],
                        answer: 0,
                        explanation: '根据菜鸟教程，Shell 脚本（shell script）是一种为 shell 编写的脚本程序。'
                    },
                    {
                        question: 'Linux 系统中，最常见的默认 Shell 是什么？',
                        options: ['Bash', 'C Shell', 'K Shell', 'Zsh'],
                        answer: 0,
                        explanation: '菜鸟教程指出，Bash（Bourne Again Shell）是大多数 Linux 系统默认的 Shell。'
                    },
                    {
                        question: 'Shell 脚本文件通常使用的扩展名是什么？',
                        options: ['.sh', '.bash', '.shell', '.scr'],
                        answer: 0,
                        explanation: '菜鸟教程示例中使用 `.sh` 扩展名，但扩展名不影响执行，主要用于标识。'
                    },
                    {
                        question: 'Shell 脚本的第一行 `#!/bin/bash` 的作用是什么？',
                        options: [
                            '告诉系统使用哪个解释器执行此脚本',
                            '注释',
                            '定义变量',
                            '导入库'
                        ],
                        answer: 0,
                        explanation: '菜鸟教程解释：`#!` 是一个约定的标记，告诉系统其后路径指定的程序是解释此脚本文件的 Shell。'
                    },
                    {
                        question: '运行 Shell 脚本的正确方式是什么？（假设脚本有执行权限）',
                        options: ['./test.sh', 'test.sh', 'sh test.sh', 'A 和 C'],
                        answer: 3,
                        explanation: '菜鸟教程提到，可以作为可执行程序运行 `./test.sh`，或作为解释器参数运行 `sh test.sh`。'
                    },
                    {
                        question: '为什么直接输入 `test.sh` 可能无法执行当前目录的脚本？',
                        options: [
                            '当前目录通常不在 PATH 环境变量中',
                            '脚本没有执行权限',
                            '脚本语法错误',
                            '文件名错误'
                        ],
                        answer: 0,
                        explanation: '菜鸟教程解释：系统会去 PATH 里寻找，当前目录通常不在 PATH 里，需要用 `./test.sh` 明确指定。'
                    },
                    {
                        question: '给 Shell 脚本添加执行权限的命令是？',
                        options: ['chmod +x test.sh', 'chmod 755 test.sh', 'chmod a+x test.sh', '以上都是'],
                        answer: 3,
                        explanation: '`chmod +x` 为所有用户添加执行权限，`chmod 755` 和 `chmod a+x` 也都可以。'
                    },
                    {
                        question: 'Shell 中，用于输出文本到控制台的命令是？',
                        options: ['echo', 'print', 'printf', 'console.log'],
                        answer: 0,
                        explanation: '菜鸟教程实例中使用 `echo` 命令向窗口输出文本。'
                    },
                    {
                        question: 'Shell 中，定义变量的语法是？',
                        options: ['name="value"', 'let name="value"', 'var name="value"', 'set name="value"'],
                        answer: 0,
                        explanation: 'Shell 变量定义很简单，直接 `变量名=值` 即可，注意等号两侧不能有空格。'
                    },
                    {
                        question: 'Shell 中，引用变量时需要加什么符号？',
                        options: ['$变量名', '${变量名}', '%变量名%', 'A 和 B'],
                        answer: 3,
                        explanation: '使用 `$变量名` 或 `${变量名}` 来引用变量，花括号通常用于界定变量名边界。'
                    },
                    {
                        question: 'Shell 中，用于接收脚本参数的特殊变量是？',
                        options: ['$1, $2, ...', '$#', '$*', '以上都是'],
                        answer: 3,
                        explanation: '`$1`、`$2` 等代表位置参数；`$#` 是参数个数；`$*` 或 `$@` 代表所有参数。'
                    },
                    {
                        question: 'Shell 中，`$?` 变量的作用是什么？',
                        options: [
                            '获取上一个命令的退出状态（0 表示成功）',
                            '获取当前进程 ID',
                            '获取脚本名称',
                            '获取参数个数'
                        ],
                        answer: 0,
                        explanation: '`$?` 存储了最后执行命令的退出码，通常 0 表示成功，非 0 表示失败。'
                    },
                    {
                        question: 'Shell 中，用于条件测试的语法是？',
                        options: ['[ condition ]', 'test condition', '[[ condition ]]', '以上都是'],
                        answer: 3,
                        explanation: '`test` 命令和 `[ ]` 是传统方式，`[[ ]]` 是增强版，支持更多模式匹配。'
                    },
                    {
                        question: 'Shell 中，`if` 语句的基本结构是？',
                        options: [
                            'if [ condition ]; then ...; fi',
                            'if (condition) { ... }',
                            'if condition then ... end',
                            'if condition: ...'
                        ],
                        answer: 0,
                        explanation: 'Shell 的 `if` 以 `if` 开头，`then` 换行或加分号，最后以 `fi` 结束。'
                    },
                    {
                        question: 'Shell 中，`for` 循环遍历一系列值的基本语法是？',
                        options: [
                            'for var in list; do ...; done',
                            'for (var in list) { ... }',
                            'foreach var in list ...',
                            'for var: list ...'
                        ],
                        answer: 0,
                        explanation: '`for` 循环使用 `in` 指定值列表，以 `do` 和 `done` 包围循环体。'
                    },
                    {
                        question: 'Shell 中，`while` 循环的基本语法是？',
                        options: [
                            'while [ condition ]; do ...; done',
                            'while (condition) { ... }',
                            'while condition do ... done',
                            'while condition: ...'
                        ],
                        answer: 0,
                        explanation: '`while` 循环在条件为真时执行循环体，语法与 `for` 类似。'
                    },
                    {
                        question: 'Shell 中，用于定义函数的关键字是？',
                        options: ['function', 'func', 'def', 'fn'],
                        answer: 0,
                        explanation: '可以省略 `function` 直接写 `函数名() { ... }`，但使用 `function` 关键字更清晰。'
                    },
                    {
                        question: 'Shell 中，如何让脚本在调试模式下执行？',
                        options: ['bash -x script.sh', 'bash -v script.sh', 'bash -d script.sh', 'bash -c script.sh'],
                        answer: 0,
                        explanation: '`bash -x` 会在执行前打印每一条命令及其参数，是常用调试手段。'
                    },
                    {
                        question: 'Shell 脚本中，用于读取用户输入的命令是？',
                        options: ['read', 'input', 'scan', 'get'],
                        answer: 0,
                        explanation: '`read` 命令从标准输入读取一行，并赋值给变量。'
                    },
                    {
                        question: 'Shell 中，算术运算的正确方式是？',
                        options: ['$((a + b))', '$[a + b]', 'expr a + b', '以上都是'],
                        answer: 3,
                        explanation: '`$(( ))` 和 `$[ ]` 是整数运算，`expr` 是外部命令，都可以进行算术运算。'
                    },
                    {
                        question: 'Shell 中，管道符 `|` 的主要作用是什么？',
                        options: [
                            '把前一个命令的输出作为后一个命令的输入',
                            '在后台运行命令',
                            '创建文件夹',
                            '进行变量赋值'
                        ],
                        answer: 0,
                        explanation: '管道可以把多个小命令串联起来，例如 `ps aux | grep node`。'
                    },
                    {
                        question: '在 Bash 脚本开头加上 `set -e` 通常表示什么？',
                        options: [
                            '只要某个命令返回非 0，脚本就立即退出',
                            '脚本进入交互模式',
                            '自动导出所有变量',
                            '忽略所有错误继续执行'
                        ],
                        answer: 0,
                        explanation: '`set -e` 有助于在自动化脚本中尽早暴露失败步骤，避免错误结果继续扩散。'
                    }
                ],
                resources: [
                    { name: 'Shell教程', url: 'https://www.runoob.com/linux/linux-shell.html', type: 'tutorial' },
                    { name: 'Bash脚本指南', url: 'https://github.com/vvzero/learning-bash-scripting', type: 'github' },
                    { name: 'Shell脚本入门', url: 'https://www.bilibili.com/video/BV1gW411f79D', type: 'video' },
                ]
            },
        ]
    },
    {
        id: 'game',
        name: '游戏开发',
        icon: '🎮',
        category: 'game',
        description: '围绕玩法、引擎、图形与联机构建游戏体验',
        skills: [
            {
                id: 'unity',
                name: 'Unity',
                icon: '🎮',
                description: 'Unity 引擎、组件系统与游戏原型开发',
                priority: 'core',
                quizs: [
                    {
                        question: 'Unity 是什么？',
                        options: [
                            '一个跨平台的实时3D/2D游戏引擎',
                            '一个代码编辑器',
                            '一个3D建模软件',
                            '一个版本控制工具'
                        ],
                        answer: 0,
                        explanation: 'Unity 是一个功能强大的跨平台游戏引擎，广泛用于开发2D和3D游戏、模拟、VR/AR应用等。'
                    },
                    {
                        question: 'Unity 中，用于编写游戏逻辑的主要编程语言是？',
                        options: ['C#', 'C++', 'JavaScript', 'Python'],
                        answer: 0,
                        explanation: 'Unity 主要使用 C# 作为脚本编程语言，用于控制游戏对象的行为和交互。'
                    },
                    {
                        question: 'Unity 中，一个游戏对象（GameObject）通常包含什么？',
                        options: [
                            '组件（Component）的容器',
                            '纹理和材质',
                            '动画片段',
                            '音频文件'
                        ],
                        answer: 0,
                        explanation: 'GameObject 是 Unity 中的基本实体，本身没有功能，通过附加不同的组件（Component）获得属性、行为和功能。'
                    },
                    {
                        question: 'Unity 中，用于控制游戏对象位置、旋转和缩放的组件是？',
                        options: ['Transform', 'Mesh Renderer', 'Collider', 'Rigidbody'],
                        answer: 0,
                        explanation: 'Transform 组件是每个 GameObject 都有的，它定义了对象在场景中的位置、旋转和缩放。'
                    },
                    {
                        question: 'Unity 中，用于模拟物理效果（如重力、碰撞）的组件是？',
                        options: ['Rigidbody', 'Collider', 'Animator', 'Camera'],
                        answer: 0,
                        explanation: 'Rigidbody（刚体）组件使 GameObject 受物理引擎影响，可以施加力和扭矩。'
                    },
                    {
                        question: 'Unity 中，用于检测碰撞的组件通常与 Rigidbody 配合使用的是？',
                        options: ['Collider', 'Trigger', 'Mesh Filter', 'Box Collider'],
                        answer: 0,
                        explanation: 'Collider（碰撞器）组件定义了物体的物理形状，用于碰撞检测。'
                    },
                    {
                        question: 'Unity 中，脚本中常用的生命周期方法 `Start()` 在何时调用？',
                        options: [
                            '在脚本启用且 Update 第一次调用之前',
                            '每帧调用一次',
                            '固定时间步长调用',
                            '对象销毁时'
                        ],
                        answer: 0,
                        explanation: '`Start()` 在脚本实例启用后，`Update()` 第一次调用前被调用，通常用于初始化。'
                    },
                    {
                        question: 'Unity 中，用于每帧更新的生命周期方法是？',
                        options: ['Update()', 'FixedUpdate()', 'LateUpdate()', 'OnGUI()'],
                        answer: 0,
                        explanation: '`Update()` 每帧调用一次，适合处理常规的游戏逻辑和输入检测。'
                    },
                    {
                        question: 'Unity 中，用于处理物理相关更新（如施加力）的推荐方法是？',
                        options: ['FixedUpdate()', 'Update()', 'LateUpdate()', 'Start()'],
                        answer: 0,
                        explanation: '`FixedUpdate()` 在固定的时间步长调用，独立于帧率，适合处理物理模拟。'
                    },
                    {
                        question: 'Unity 中，预制体（Prefab）的作用是什么？',
                        options: [
                            '可重复使用的游戏对象模板',
                            '预制的动画',
                            '预编译的脚本',
                            '预先设置的摄像机'
                        ],
                        answer: 0,
                        explanation: 'Prefab 允许您创建、配置和存储一个游戏对象及其所有组件，作为资源在场景中多次实例化。'
                    },
                    {
                        question: 'Unity 中，用于在不同场景之间切换的方法是？',
                        options: ['SceneManager.LoadScene()', 'Application.LoadLevel()', 'SceneManager.Load()', 'Application.LoadScene()'],
                        answer: 0,
                        explanation: '`SceneManager.LoadScene()` 是 Unity 中加载新场景的推荐方法（需要 using UnityEngine.SceneManagement）。'
                    },
                    {
                        question: 'Unity 中，Input 类用于检测什么？',
                        options: [
                            '玩家输入，如键盘、鼠标、触控',
                            '网络输入',
                            '音频输入',
                            'AI 决策'
                        ],
                        answer: 0,
                        explanation: '`Input` 类提供了访问输入设备（如键盘、鼠标、手柄、触控）的接口。'
                    },
                    {
                        question: 'Unity 中，检测“空格键按下”的正确代码是？',
                        options: [
                            'Input.GetKeyDown(KeyCode.Space)',
                            'Input.GetKey(KeyCode.Space)',
                            'Input.GetKeyUp(KeyCode.Space)',
                            'Input.GetButton("Space")'
                        ],
                        answer: 0,
                        explanation: '`GetKeyDown` 检测键按下的那一帧，`GetKey` 检测按住，`GetKeyUp` 检测松开。'
                    },
                    {
                        question: 'Unity 中，用于实例化（克隆）预制体的方法是？',
                        options: ['Instantiate()', 'Create()', 'Clone()', 'New()'],
                        answer: 0,
                        explanation: '`Instantiate()` 方法用于在运行时创建游戏对象或预制体的实例。'
                    },
                    {
                        question: 'Unity 中，用于查找游戏对象的常用方法是？',
                        options: [
                            'GameObject.Find() 或 GameObject.FindWithTag()',
                            'GameObject.Search()',
                            'GameObject.Locate()',
                            'GameObject.Get()'
                        ],
                        answer: 0,
                        explanation: '`GameObject.Find()` 按名称查找，`GameObject.FindWithTag()` 按标签查找，性能开销较大，不建议在 Update 中使用。'
                    },
                    {
                        question: 'Unity 中，动画系统的主要组件是什么？',
                        options: ['Animator', 'Animation', 'Animator Controller', 'A 和 C'],
                        answer: 3,
                        explanation: '`Animator` 组件与 `Animator Controller` 资源配合，管理动画状态机。'
                    },
                    {
                        question: 'Unity 中，用于创建用户界面的系统是？',
                        options: ['UGUI (Unity UI)', 'IMGUI', 'UI Toolkit', '以上都是'],
                        answer: 3,
                        explanation: 'Unity 提供了多种 UI 系统：UGUI（基于 GameObject）、IMGUI（即时模式）和较新的 UI Toolkit。'
                    },
                    {
                        question: 'Unity 中，用于配置构建设置和平台的菜单是？',
                        options: ['File -> Build Settings', 'Edit -> Project Settings', 'Window -> Package Manager', 'Assets -> Build'],
                        answer: 0,
                        explanation: 'Build Settings 窗口用于选择目标平台、配置场景、优化选项并执行构建。'
                    },
                    {
                        question: 'Unity 中，资源（Asset）包括哪些类型？',
                        options: [
                            '模型、纹理、音频、脚本、场景等',
                            '只有 3D 模型',
                            '只有代码文件',
                            '只有配置文件'
                        ],
                        answer: 0,
                        explanation: 'Asset 是可以在 Unity 项目中使用的任何文件或数据，如 3D 模型、贴图、材质、音频文件、脚本、场景等。'
                    },
                    {
                        question: 'Unity 的坐标系统是如何的？',
                        options: [
                            '左手坐标系，Y 轴向上',
                            '右手坐标系，Y 轴向上',
                            '左手坐标系，Z 轴向上',
                            '右手坐标系，Z 轴向上'
                        ],
                        answer: 0,
                        explanation: 'Unity 使用左手坐标系，其中 Y 轴为向上的方向，X 轴为右，Z 轴为前。'
                    }
                ],
                resources: [
                    { name: 'Unity官方文档', url: 'https://docs.unity3d.com/', type: 'docs' },
                    { name: 'Unity中文课堂', url: 'https://learn.u3d.cn/', type: 'course' },
                    { name: 'Unity入门教程', url: 'https://www.bilibili.com/video/BV1Xt411B7y2', type: 'video' },
                ]
            },
            {
                id: 'unreal',
                name: 'Unreal',
                icon: '🎯',
                description: '蓝图、渲染与高品质游戏开发',
                priority: 'important',
                quizs: [
                    {
                        question: 'Unreal Engine 是什么？',
                        options: [
                            '由 Epic Games 开发的游戏引擎',
                            '一款 3D 建模软件',
                            '一个动画制作工具',
                            '一个代码编辑器'
                        ],
                        answer: 0,
                        explanation: 'Unreal Engine 是 Epic Games 开发的强大游戏引擎，以其高质量的图形渲染和工具集著称，广泛用于 AAA 级游戏开发。'
                    },
                    {
                        question: 'Unreal Engine 中，用于编写游戏逻辑的脚本系统主要有？',
                        options: [
                            '蓝图（Blueprint）和 C++',
                            'C# 和 Lua',
                            'Python 和 JavaScript',
                            'Visual Scripting'
                        ],
                        answer: 0,
                        explanation: 'Unreal 提供两种主要编程方式：可视化脚本系统“蓝图”（Blueprint）和更底层的 C++ 代码。'
                    },
                    {
                        question: 'Unreal Engine 的蓝图系统是什么？',
                        options: [
                            '基于节点的可视化脚本工具',
                            '一个关卡设计工具',
                            '一个材质编辑器',
                            '一个动画系统'
                        ],
                        answer: 0,
                        explanation: '蓝图是一个强大的可视化脚本系统，允许开发者通过连接节点来创建游戏逻辑，而无需编写代码。'
                    },
                    {
                        question: 'Unreal Engine 中，Actor 是什么？',
                        options: [
                            '可以被放置在关卡中的任何对象',
                            '一个角色模型',
                            '一个动画实例',
                            '一个游戏控制器'
                        ],
                        answer: 0,
                        explanation: 'Actor 是所有可以被放置在世界中的对象的基类，包括静态网格体、摄像机、玩家控制器、灯光等。'
                    },
                    {
                        question: 'Unreal Engine 中，Pawn 是什么？',
                        options: [
                            '可以被控制器控制的 Actor',
                            '一个道具',
                            '一个静态物体',
                            '一个粒子系统'
                        ],
                        answer: 0,
                        explanation: 'Pawn 是继承自 Actor 的类，代表游戏中的角色或实体，可以被 Controller（如玩家或 AI）控制。'
                    },
                    {
                        question: 'Unreal Engine 中，Character 是什么？',
                        options: [
                            '一种专为可玩角色设计的 Pawn，包含运动组件',
                            '一个角色模型',
                            '一个动画蓝图',
                            '一个用户界面'
                        ],
                        answer: 0,
                        explanation: 'Character 是 Pawn 的子类，专门设计用于可操控的角色，内置了 CharacterMovementComponent 来处理行走、跳跃等运动。'
                    },
                    {
                        question: 'Unreal Engine 中，GameMode 的作用是什么？',
                        options: [
                            '定义游戏的规则和逻辑',
                            '管理游戏界面',
                            '处理玩家输入',
                            '渲染场景'
                        ],
                        answer: 0,
                        explanation: 'GameMode 设置游戏规则，如默认的 Pawn 类、玩家控制器类、HUD 类，以及游戏如何进行（如胜利条件）。'
                    },
                    {
                        question: 'Unreal Engine 中，用于创建和编辑材质的是？',
                        options: ['材质编辑器 (Material Editor)', '材质实例', '着色器', '纹理'],
                        answer: 0,
                        explanation: '材质编辑器是一个基于节点的编辑器，用于创建和编辑材质，定义物体表面的视觉属性。'
                    },
                    {
                        question: 'Unreal Engine 的坐标系统是如何的？',
                        options: [
                            '左手坐标系，Z 轴向上',
                            '左手坐标系，Y 轴向上',
                            '右手坐标系，Z 轴向上',
                            '右手坐标系，Y 轴向上'
                        ],
                        answer: 0,
                        explanation: 'Unreal Engine 使用左手坐标系，Z 轴为向上的方向，X 轴为前，Y 轴为右。'
                    },
                    {
                        question: 'Unreal Engine 中，用于创建地形和风景的工具是？',
                        options: ['地形工具 (Landscape)', 'Static Mesh', 'Spline', 'Foliage'],
                        answer: 0,
                        explanation: '地形工具允许开发者雕刻和绘制大型户外地形，支持高度图、材质层和植被系统。'
                    },
                    {
                        question: 'Unreal Engine 中，粒子和视觉效果系统是？',
                        options: ['Niagara', 'Cascade', 'Particle System', 'A 和 B'],
                        answer: 3,
                        explanation: 'Unreal 有传统的粒子系统 Cascade 和新一代的视觉特效系统 Niagara，后者更强大和灵活。'
                    },
                    {
                        question: 'Unreal Engine 中，用于创建高质量光照和阴影的系统是？',
                        options: [
                            'Lumen（全动态全局光照）',
                            '静态光照',
                            '预计算光照',
                            '实时阴影'
                        ],
                        answer: 0,
                        explanation: 'Lumen 是 UE5 中的全动态全局光照和反射系统，能够实时响应光照和环境变化。'
                    },
                    {
                        question: 'Unreal Engine 中，用于创建高精度模型的几何体工具是？',
                        options: ['Nanite', 'ZBrush', 'Blender', 'Substance Painter'],
                        answer: 0,
                        explanation: 'Nanite 是 UE5 的虚拟化几何体系统，允许导入高模（数以亿计的多边形）而无需担心性能。'
                    },
                    {
                        question: 'Unreal Engine 中，Animation Blueprint 的作用是什么？',
                        options: [
                            '控制角色的动画混合和状态',
                            '创建角色模型',
                            '定义物理效果',
                            '编辑动画序列'
                        ],
                        answer: 0,
                        explanation: '动画蓝图用于处理动画的逻辑，包括状态机、混合空间、蒙太奇，并最终输出最终的骨骼姿势。'
                    },
                    {
                        question: 'Unreal Engine 中，用于创建和编辑游戏关卡的是？',
                        options: ['关卡编辑器', '世界场景', '关卡流', '以上都是'],
                        answer: 0,
                        explanation: '关卡编辑器是核心工作区，用于放置 Actor、设置光照、地形、构建游戏世界。'
                    },
                    {
                        question: 'Unreal Engine 中，用于处理物理模拟和碰撞的组件是？',
                        options: ['碰撞组件', '物理组件', 'Chaos Physics', 'PhysX'],
                        answer: 0,
                        explanation: 'Unreal 使用 Chaos Physics（UE5）或 PhysX（早期版本）作为其物理引擎，通过碰撞和物理组件模拟刚体、布料等。'
                    },
                    {
                        question: 'Unreal Engine 中，UMG 是什么？',
                        options: [
                            'Unreal Motion Graphics UI 设计器',
                            '通用材质图形',
                            '统一模型生成器',
                            '用户管理组'
                        ],
                        answer: 0,
                        explanation: 'UMG 是 Unreal 的 UI 制作工具，允许通过可视化方式创建游戏界面。'
                    },
                    {
                        question: 'Unreal Engine 中，如何实现网络多人游戏？',
                        options: [
                            '基于客户端-服务器模型，使用 Actor 复制和 RPC',
                            '点对点连接',
                            '本地多人',
                            '无法实现'
                        ],
                        answer: 0,
                        explanation: 'Unreal 内置了强大的多人游戏框架，基于服务器权威的客户端-服务器模型，通过 Actor 复制和远程过程调用（RPC）同步状态。'
                    },
                    {
                        question: 'Unreal Engine 中，用于打包和发布项目的菜单是？',
                        options: ['文件 -> 打包项目', '构建 -> 打包', '项目设置 -> 发布', '编辑 -> 项目打包'],
                        answer: 0,
                        explanation: '在 File 菜单下选择“打包项目”（Package Project），可以选择目标平台进行打包。'
                    },
                    {
                        question: 'Unreal Engine 中，控制台命令输入的地方是？',
                        options: ['~ 键开启的控制台', '输出日志窗口', '命令行参数', '以上都是'],
                        answer: 0,
                        explanation: '在编辑器中按 `~` 键可以打开控制台，输入命令进行调试、性能分析或修改参数。'
                    },
                    {
                        question: 'Unreal Engine 中，`BeginPlay()` 一般会在什么时候触发？',
                        options: [
                            'Actor 或组件进入游戏并开始运行时',
                            '编译蓝图之前',
                            '项目打包完成后',
                            '编辑器启动瞬间'
                        ],
                        answer: 0,
                        explanation: '`BeginPlay()` 是 Unreal 常用生命周期入口，通常用于初始化运行时逻辑。'
                    },
                    {
                        question: '在 Unreal 开发中，Blueprint 和 C++ 更常见的配合方式是什么？',
                        options: [
                            '核心系统用 C++，高层逻辑和调试迭代可用 Blueprint',
                            '两者不能同时出现在同一项目中',
                            'Blueprint 只能写 UI，不能控制玩法',
                            'C++ 只用于导入贴图资源'
                        ],
                        answer: 0,
                        explanation: '很多团队会用 C++ 处理底层性能和框架，用 Blueprint 提升策划与玩法迭代效率。'
                    }
                ],
                resources: [
                    { name: 'Unreal官方文档', url: 'https://docs.unrealengine.com/', type: 'docs' },
                    { name: 'Unreal官方学习', url: 'https://www.unrealengine.com/zh-CN/learn', type: 'course' },
                    { name: 'Unreal入门教程', url: 'https://www.bilibili.com/video/BV1g64y1a7cD', type: 'video' },
                ]
            },
            {
                id: 'csharp',
                name: 'C#',
                icon: '💜',
                description: 'Unity 常用脚本语言与面向对象能力',
                priority: 'core',
                quizs: [
                    {
                        question: 'C# 是什么？',
                        options: [
                            '微软开发的面向对象编程语言',
                            '一种脚本语言',
                            '数据库查询语言',
                            '标记语言'
                        ],
                        answer: 0,
                        explanation: 'C# 是微软开发的现代、面向对象、类型安全的编程语言，运行于 .NET 框架上。'
                    },
                    {
                        question: 'C# 中，程序执行的入口点是？',
                        options: ['Main 方法', 'Start 方法', 'Init 方法', 'Run 方法'],
                        answer: 0,
                        explanation: 'C# 控制台应用程序的入口点是 `Main` 方法。'
                    },
                    {
                        question: 'C# 中，用于在控制台输出信息的语句是？',
                        options: ['Console.WriteLine()', 'print()', 'echo()', 'Log.Write()'],
                        answer: 0,
                        explanation: '`Console.WriteLine()` 是向控制台输出文本的标准方法。'
                    },
                    {
                        question: 'C# 中，以下哪个是值类型？',
                        options: ['int', 'string', 'object', 'class'],
                        answer: 0,
                        explanation: '`int` 是值类型，`string`、`object` 和 `class` 都是引用类型。'
                    },
                    {
                        question: 'C# 中，声明一个整型变量的正确语法是？',
                        options: ['int myNumber = 10;', 'integer myNumber = 10;', 'Int myNumber = 10;', 'var myNumber := 10;'],
                        answer: 0,
                        explanation: 'C# 使用类型在前的方式声明变量，如 `int myNumber = 10;`。'
                    },
                    {
                        question: 'C# 中，用于声明常量的关键字是？',
                        options: ['const', 'readonly', 'static', 'final'],
                        answer: 0,
                        explanation: '`const` 用于声明编译时常量。'
                    },
                    {
                        question: 'C# 中，定义数组的语法是？',
                        options: ['int[] numbers = new int[5];', 'int numbers[5];', 'Array<int> numbers = new Array<int>(5);', 'int numbers = new int[5];'],
                        answer: 0,
                        explanation: '`int[] numbers = new int[5];` 是创建长度为 5 的整数数组的正确方式。'
                    },
                    {
                        question: 'C# 中，if 语句的基本结构是？',
                        options: [
                            'if (condition) { ... }',
                            'if condition then { ... }',
                            'if (condition) then ...',
                            'if condition: ...'
                        ],
                        answer: 0,
                        explanation: 'C# 的 if 语句条件必须放在括号内，执行的代码块放在花括号内。'
                    },
                    {
                        question: 'C# 中，for 循环的正确语法是？',
                        options: [
                            'for (int i = 0; i < 10; i++) { ... }',
                            'for (i = 0; i < 10; i++) { ... }',
                            'for (int i = 0; i < 10) { ... }',
                            'for (int i = 0; i++) { ... }'
                        ],
                        answer: 0,
                        explanation: '`for` 循环由初始化、条件、迭代表达式三部分组成，用分号分隔。'
                    },
                    {
                        question: 'C# 中，用于定义类的关键字是？',
                        options: ['class', 'Class', 'struct', 'type'],
                        answer: 0,
                        explanation: '`class` 关键字用于定义一个类。'
                    },
                    {
                        question: 'C# 中，类的构造函数名称必须？',
                        options: ['与类名相同', '是 Initialize', '是 Constructor', '与文件名相同'],
                        answer: 0,
                        explanation: '构造函数是与类同名的特殊方法，在实例化时自动调用。'
                    },
                    {
                        question: 'C# 中，用于表示“继承”的符号是？',
                        options: [':', 'extends', 'inherits', '<:'],
                        answer: 0,
                        explanation: 'C# 使用冒号 `:` 来表示继承和实现接口。'
                    },
                    {
                        question: 'C# 中，`public` 关键字的作用是？',
                        options: [
                            '访问修饰符，表示成员在任何地方都可访问',
                            '声明一个公开类',
                            '定义一个公共方法',
                            '声明一个公共变量'
                        ],
                        answer: 0,
                        explanation: '`public` 是访问修饰符，被修饰的成员对其他任何类都可见。'
                    },
                    {
                        question: 'C# 中，`private` 关键字的作用是？',
                        options: [
                            '访问修饰符，表示成员只能在当前类内部访问',
                            '私有化一个类',
                            '隐藏方法',
                            '声明变量'
                        ],
                        answer: 0,
                        explanation: '`private` 是最严格的访问级别，成员只在其所在的类内部可访问。'
                    },
                    {
                        question: 'C# 中，`static` 关键字修饰的成员属于？',
                        options: ['类本身', '类的实例', '方法局部变量', '代码块'],
                        answer: 0,
                        explanation: '`static` 成员属于类，而不是类的任何特定实例，通过类名直接访问。'
                    },
                    {
                        question: 'C# 中，`void` 关键字在方法声明中表示？',
                        options: ['方法不返回任何值', '方法返回空指针', '方法返回 null', '方法没有参数'],
                        answer: 0,
                        explanation: '`void` 作为返回类型，指定方法不返回任何值。'
                    },
                    {
                        question: 'C# 中，`try-catch` 语句的作用是？',
                        options: [
                            '处理可能发生的异常',
                            '捕获变量',
                            '定义代码块',
                            '测试代码性能'
                        ],
                        answer: 0,
                        explanation: '`try-catch` 用于异常处理，将可能引发异常的代码放在 `try` 块，在 `catch` 块中处理异常。'
                    },
                    {
                        question: 'C# 中，`List<T>` 位于哪个命名空间？',
                        options: ['System.Collections.Generic', 'System.Collections', 'System.Linq', 'System.IO'],
                        answer: 0,
                        explanation: '`List<T>` 泛型集合位于 `System.Collections.Generic` 命名空间。'
                    },
                    {
                        question: 'C# 中，`foreach` 循环用于？',
                        options: [
                            '遍历集合或数组中的元素',
                            '固定次数的循环',
                            '条件循环',
                            '递归'
                        ],
                        answer: 0,
                        explanation: '`foreach` 提供了一种简洁的语法来遍历可枚举集合（如数组、列表）中的每个元素。'
                    },
                    {
                        question: 'C# 中，属性（Property）的作用是？',
                        options: [
                            '提供灵活的机制来读取、写入或计算私有字段的值',
                            '定义特征',
                            '存储数据',
                            '执行计算'
                        ],
                        answer: 0,
                        explanation: '属性是封装类的字段的成员，包含 `get` 和 `set` 访问器，可以在访问字段时添加逻辑。'
                    },
                    {
                        question: 'C# 中，`interface` 更适合用来描述什么？',
                        options: [
                            '一组必须实现的行为契约',
                            '对象在内存中的地址',
                            '程序集的版本号',
                            '数据库表结构'
                        ],
                        answer: 0,
                        explanation: '接口用来定义“能做什么”，不直接提供状态实现，适合抽象能力边界。'
                    },
                    {
                        question: 'C# 中 `async` / `await` 的主要作用是什么？',
                        options: [
                            '以更清晰的方式编写异步代码，避免阻塞线程',
                            '强制代码并行执行',
                            '替代异常处理',
                            '自动优化所有算法复杂度'
                        ],
                        answer: 0,
                        explanation: '`async` / `await` 让异步流程更接近同步写法，常用于 I/O、网络请求和资源加载。'
                    }
                ],
                resources: [
                    { name: 'C#官方文档', url: 'https://docs.microsoft.com/zh-cn/dotnet/csharp/', type: 'docs' },
                    { name: '菜鸟教程 - C#', url: 'https://www.runoob.com/csharp/csharp-tutorial.html', type: 'tutorial' },
                    { name: 'C#入门教程', url: 'https://www.bilibili.com/video/BV1vJ411J7iP', type: 'video' },
                ]
            },
            {
                id: 'cpp',
                name: 'C++',
                icon: '⚡',
                description: '高性能游戏模块与底层编程基础',
                priority: 'important',
                quizs: [
                    {
                        question: 'C++ 是什么？',
                        options: [
                            '一种通用编程语言，支持面向对象和底层操作',
                            '一种脚本语言',
                            '数据库查询语言',
                            '标记语言'
                        ],
                        answer: 0,
                        explanation: 'C++ 是 C 语言的扩展，支持面向对象、泛型和底层内存操作，广泛应用于游戏引擎、系统软件等。'
                    },
                    {
                        question: 'C++ 中，程序执行的入口点是？',
                        options: ['main() 函数', 'Start() 函数', 'init() 函数', 'WinMain() 函数'],
                        answer: 0,
                        explanation: '标准 C++ 控制台程序的入口点是 `main` 函数。Windows GUI 程序可能使用 `WinMain`。'
                    },
                    {
                        question: 'C++ 中，用于在控制台输出的标准方式是？',
                        options: ['std::cout << "text";', 'printf("text");', 'console.log("text");', 'A 和 B'],
                        answer: 3,
                        explanation: '`std::cout` 是 C++ 的流输出方式，`printf` 是从 C 继承的函数，两者都可用于输出。'
                    },
                    {
                        question: 'C++ 中，声明一个整型变量的正确语法是？',
                        options: ['int myNumber = 10;', 'integer myNumber = 10;', 'Int myNumber = 10;', 'var myNumber = 10;'],
                        answer: 0,
                        explanation: 'C++ 使用类型在前的方式声明变量，如 `int myNumber = 10;`。'
                    },
                    {
                        question: 'C++ 中，用于定义常量的关键字是？',
                        options: ['const', 'readonly', 'final', 'static'],
                        answer: 0,
                        explanation: '`const` 关键字用于声明一个常量，其值不能被修改。'
                    },
                    {
                        question: 'C++ 中，指针是什么？',
                        options: [
                            '存储另一个变量内存地址的变量',
                            '一种智能变量',
                            '一个引用',
                            '一个数组'
                        ],
                        answer: 0,
                        explanation: '指针是一个变量，它存储的是另一个变量的内存地址。'
                    },
                    {
                        question: 'C++ 中，用于获取变量地址的运算符是？',
                        options: ['&', '*', '->', '.'],
                        answer: 0,
                        explanation: '取地址符 `&` 用于获取一个变量的内存地址。'
                    },
                    {
                        question: 'C++ 中，通过指针访问其指向的变量值使用的运算符是？',
                        options: ['*', '&', '->', '.'],
                        answer: 0,
                        explanation: '解引用运算符 `*` 用于访问指针所指向地址中存储的值。'
                    },
                    {
                        question: 'C++ 中，用于动态内存分配的关键字是？',
                        options: ['new', 'malloc', 'alloc', 'create'],
                        answer: 0,
                        explanation: '`new` 是 C++ 中用于在堆上动态分配内存的运算符。'
                    },
                    {
                        question: 'C++ 中，与 `new` 对应的释放内存的关键字是？',
                        options: ['delete', 'free', 'release', 'dealloc'],
                        answer: 0,
                        explanation: '`delete` 运算符释放由 `new` 分配的内存。'
                    },
                    {
                        question: 'C++ 中，引用（Reference）是什么？',
                        options: [
                            '一个已存在变量的别名',
                            '一个指针',
                            '一个地址',
                            '一个值'
                        ],
                        answer: 0,
                        explanation: '引用为一个变量提供另一个名字，一旦初始化就绑定到该变量，不能重新绑定到其他变量。'
                    },
                    {
                        question: 'C++ 中，用于定义类的关键字是？',
                        options: ['class', 'struct', 'type', 'A 和 B'],
                        answer: 3,
                        explanation: '`class` 和 `struct` 都可以用于定义类，区别在于默认访问权限不同（class 默认 private，struct 默认 public）。'
                    },
                    {
                        question: 'C++ 中，类的访问修饰符 `public` 的作用是？',
                        options: [
                            '成员在类外部可访问',
                            '成员只能在类内部访问',
                            '成员只能在派生类中访问',
                            '成员是静态的'
                        ],
                        answer: 0,
                        explanation: '`public` 成员在程序的任何地方都可以被访问。'
                    },
                    {
                        question: 'C++ 中，`private` 访问修饰符的作用是？',
                        options: [
                            '成员只能在类内部访问',
                            '成员在类外部可访问',
                            '成员只能在派生类中访问',
                            '成员是保护的'
                        ],
                        answer: 0,
                        explanation: '`private` 成员只能被同一个类的成员函数访问。'
                    },
                    {
                        question: 'C++ 中，`protected` 访问修饰符的作用是？',
                        options: [
                            '成员在类内部和派生类中可访问，外部不可访问',
                            '成员在任何地方都可访问',
                            '成员只能在类内部访问',
                            '成员是静态的'
                        ],
                        answer: 0,
                        explanation: '`protected` 成员可以被该类及该类的派生类的成员函数访问。'
                    },
                    {
                        question: 'C++ 中，虚函数（virtual function）的作用是？',
                        options: [
                            '实现运行时多态，允许派生类重写基类方法',
                            '定义一个内联函数',
                            '声明一个纯虚函数',
                            '创建抽象类'
                        ],
                        answer: 0,
                        explanation: '通过基类指针或引用调用虚函数时，将根据实际对象类型动态绑定到正确的派生类函数。'
                    },
                    {
                        question: 'C++ 中，纯虚函数（pure virtual）的声明方式是？',
                        options: ['virtual void func() = 0;', 'virtual void func() {}', 'abstract void func();', 'virtual abstract func();'],
                        answer: 0,
                        explanation: '纯虚函数在声明后加上 `= 0`，使类成为抽象类，不能实例化。'
                    },
                    {
                        question: 'C++ 中，用于处理异常的基本结构是？',
                        options: ['try-catch', 'try-except', 'catch-throw', 'error-handle'],
                        answer: 0,
                        explanation: 'C++ 使用 `try`、`catch` 和 `throw` 关键字来处理异常。'
                    },
                    {
                        question: 'C++ 标准库中，用于动态数组的容器是？',
                        options: ['std::vector', 'std::array', 'std::list', 'std::map'],
                        answer: 0,
                        explanation: '`std::vector` 是一个动态数组，可以在运行时改变大小。'
                    },
                    {
                        question: 'C++ 中，`namespace` 的作用是？',
                        options: [
                            '避免命名冲突，将代码组织在逻辑分组中',
                            '定义一个命名空间',
                            '创建一个对象',
                            '声明一个函数'
                        ],
                        answer: 0,
                        explanation: '命名空间用于封装代码，防止不同库中的相同名称产生冲突。'
                    },
                    {
                        question: 'C++ 中常说的 RAII（资源获取即初始化）核心思想是什么？',
                        options: [
                            '把资源生命周期绑定到对象生命周期，离开作用域自动释放',
                            '所有资源都必须手动 `delete`',
                            '只在运行时进行类型检查',
                            '把所有对象都放到全局作用域'
                        ],
                        answer: 0,
                        explanation: 'RAII 是现代 C++ 的核心习惯，用构造和析构管理资源，减少泄漏和异常路径问题。'
                    },
                    {
                        question: '相较于裸指针，`std::unique_ptr` 的主要优势是什么？',
                        options: [
                            '独占所有权并在离开作用域时自动释放资源',
                            '允许任意复制同一块内存',
                            '只能管理栈对象',
                            '会让程序永远不抛异常'
                        ],
                        answer: 0,
                        explanation: '`std::unique_ptr` 是常用智能指针，能明确所有权并自动清理资源。'
                    }
                ],
                resources: [
                    { name: 'C++官方文档', url: 'https://isocpp.org/', type: 'docs' },
                    { name: '菜鸟教程 - C++', url: 'https://www.runoob.com/cplusplus/cpp-tutorial.html', type: 'tutorial' },
                    { name: 'C++ Primer', url: 'https://book.douban.com/subject/25708312/', type: 'book' },
                ]
            },
            {
                id: 'game_design',
                name: '游戏设计',
                icon: '🎲',
                description: '核心循环、关卡与玩法机制设计',
                priority: 'core',
                quizs: [
                    {
                        question: '游戏设计的主要目标是什么？',
                        options: [
                            '创造有趣、有吸引力的玩家体验',
                            '编写游戏代码',
                            '制作游戏美术',
                            '测试游戏 bug'
                        ],
                        answer: 0,
                        explanation: '游戏设计专注于定义游戏的规则、内容、玩法，以创造引人入胜的玩家体验。'
                    },
                    {
                        question: '游戏中的“核心机制”（Core Mechanic）指的是？',
                        options: [
                            '玩家在游戏中重复执行的主要活动',
                            '游戏的故事情节',
                            '游戏的画面风格',
                            '游戏的音乐'
                        ],
                        answer: 0,
                        explanation: '核心机制是玩家在整个游戏中最常做的动作，如平台跳跃游戏中的“跳跃”，射击游戏中的“瞄准和射击”。'
                    },
                    {
                        question: '游戏设计中的“心流”（Flow）状态是指？',
                        options: [
                            '玩家完全沉浸其中，忘记时间的状态',
                            '游戏卡顿的状态',
                            '玩家愤怒的状态',
                            '游戏加载的状态'
                        ],
                        answer: 0,
                        explanation: '心流理论描述的是挑战与技能完美平衡时，玩家进入的深度专注和享受的状态。'
                    },
                    {
                        question: '什么是游戏的“循环”（Game Loop）？',
                        options: [
                            '玩家在游戏中进行的一系列重复动作形成的循环',
                            '游戏的编程循环',
                            '游戏的时间周期',
                            '游戏的主菜单'
                        ],
                        answer: 0,
                        explanation: '游戏循环通常指玩家行为的重复模式，例如“探索-战斗-升级”的宏观循环，或“攻击-等待冷却-攻击”的微观循环。'
                    },
                    {
                        question: '游戏中的“叙事”（Narrative）指的是？',
                        options: [
                            '游戏的故事、情节和角色发展',
                            '游戏的操作说明',
                            '游戏的关卡设计',
                            '游戏的得分系统'
                        ],
                        answer: 0,
                        explanation: '叙事是讲述故事的方式，包括主线剧情、世界观、角色背景等。'
                    },
                    {
                        question: '游戏设计中，MDA 框架是什么的缩写？',
                        options: [
                            '机制、动态、美学 (Mechanics, Dynamics, Aesthetics)',
                            '模型、数据、资产',
                            '移动、设计、艺术',
                            '主设计师、艺术总监、程序员'
                        ],
                        answer: 0,
                        explanation: 'MDA 是一个用于理解和分析游戏设计的框架，从设计者角度（机制）、系统角度（动态）和玩家角度（美学）来分析游戏。'
                    },
                    {
                        question: '游戏中的“随机性”通常用于？',
                        options: [
                            '增加不确定性和重玩价值',
                            '使游戏更简单',
                            '减少玩家决策',
                            '加快游戏进程'
                        ],
                        answer: 0,
                        explanation: '适度的随机性（如掉落物品、暴击率）可以增加游戏的不可预测性和策略调整空间。'
                    },
                    {
                        question: '什么是“正反馈循环”？',
                        options: [
                            '游戏状态使获胜方更容易继续获胜，如领先的玩家获得更多优势',
                            '反馈正常的循环',
                            '积极的反馈意见',
                            '游戏加载循环'
                        ],
                        answer: 0,
                        explanation: '正反馈会放大领先优势，可能导致“滚雪球”效应，常见于 RTS 和 MOBA 游戏。'
                    },
                    {
                        question: '什么是“负反馈循环”？',
                        options: [
                            '游戏状态帮助落后方追赶，如跑跑卡丁车中的加速道具',
                            '负面的反馈意见',
                            '游戏错误反馈',
                            '循环终止'
                        ],
                        answer: 0,
                        explanation: '负反馈平衡游戏进程，使落后方获得优势，有助于保持竞争的悬念。'
                    },
                    {
                        question: '游戏平衡性（Balance）主要关注什么？',
                        options: [
                            '确保不同角色、策略、选择没有明显的优劣之分',
                            '游戏画面的亮度',
                            '游戏帧率的稳定',
                            '音效的大小'
                        ],
                        answer: 0,
                        explanation: '平衡性确保玩家有多种可行的策略选择，防止出现“最优解”破坏竞争性。'
                    },
                    {
                        question: '游戏中的“节奏”（Pacing）指的是？',
                        options: [
                            '游戏紧张和放松情绪交替的节奏控制',
                            '游戏音乐的节拍',
                            '游戏操作的速度',
                            '游戏帧率'
                        ],
                        answer: 0,
                        explanation: '节奏指游戏高潮和低潮的安排，控制玩家情绪的起伏。'
                    },
                    {
                        question: '什么是“游戏可访问性”（Accessibility）？',
                        options: [
                            '让尽可能多的玩家（包括有障碍的玩家）都能玩',
                            '游戏容易安装',
                            '游戏价格低廉',
                            '游戏操作简单'
                        ],
                        answer: 0,
                        explanation: '可访问性包括色盲模式、字幕、可重设按键、难度选项等设计。'
                    },
                    {
                        question: '游戏原型（Prototype）的主要目的是？',
                        options: [
                            '快速测试核心玩法，验证游戏是否有趣',
                            '制作最终产品',
                            '宣传游戏',
                            '测试市场反应'
                        ],
                        answer: 0,
                        explanation: '原型是早期简陋的版本，用于验证核心机制，以便在大量投入前快速迭代和调整。'
                    },
                    {
                        question: '“游戏文档”（Game Design Document, GDD）的作用是？',
                        options: [
                            '记录游戏的设计理念、机制、角色、关卡等',
                            '编写游戏代码',
                            '记录 bug',
                            '营销文案'
                        ],
                        answer: 0,
                        explanation: 'GDD 是团队的“设计圣经”，确保所有成员对游戏目标有一致的理解。'
                    },
                    {
                        question: '什么是“涌现式玩法”？',
                        options: [
                            '由简单规则组合产生的复杂、出乎意料的玩家行为',
                            '提前设计的玩法',
                            '有 bug 的玩法',
                            '需要编程实现的玩法'
                        ],
                        answer: 0,
                        explanation: '涌现式玩法源于系统的交互，如《我的世界》中玩家利用物理规则创造复杂机械。'
                    },
                    {
                        question: '游戏中，什么是“学习曲线”？',
                        options: [
                            '玩家掌握游戏机制所需的难度变化过程',
                            '游戏的教学关卡',
                            '游戏难度上升的曲线',
                            '游戏技能树'
                        ],
                        answer: 0,
                        explanation: '好的学习曲线应该平稳，让玩家逐步掌握技能，不会突然变得太难或太无聊。'
                    },
                    {
                        question: '什么是“情感设计”？',
                        options: [
                            '设计游戏来引发特定情感反应，如恐惧、喜悦、悲伤',
                            '设计游戏角色的表情',
                            '设计游戏背景音乐',
                            '设计游戏剧情'
                        ],
                        answer: 0,
                        explanation: '情感设计通过机制、叙事、视听元素来塑造玩家的情绪体验。'
                    },
                    {
                        question: '游戏中的“可重玩性”取决于什么？',
                        options: [
                            '每次游戏有不同的体验，如随机要素、多结局、不同玩法',
                            '游戏长度',
                            '游戏画质',
                            '游戏价格'
                        ],
                        answer: 0,
                        explanation: '高可重玩性鼓励玩家多次游玩，如《以撒的结合》的随机道具，《黑暗之魂》的多周目。'
                    },
                    {
                        question: '什么是“游戏测试”？',
                        options: [
                            '让真实玩家体验并收集反馈',
                            '检查游戏 bug',
                            '测试游戏性能',
                            '测试网络延迟'
                        ],
                        answer: 0,
                        explanation: '游戏测试是设计的重要环节，通过观察玩家行为发现设计问题和改进方向。'
                    },
                    {
                        question: '游戏设计中，什么是“杠杆作用”？',
                        options: [
                            '玩家通过少量操作获得大量效果的设计',
                            '使用杠杆的工具',
                            '游戏内的物理模拟',
                            '游戏操作难度'
                        ],
                        answer: 0,
                        explanation: '杠杆作用让玩家的小决策产生重大影响，如《塞尔达传说》中一击必杀隐藏 boss 的机制。'
                    },
                    {
                        question: '新手引导（Onboarding / Tutorial）设计得好的核心价值是什么？',
                        options: [
                            '帮助玩家理解核心规则并尽快进入乐趣循环',
                            '尽量延长无法操作的时间',
                            '把所有系统一次性讲完',
                            '只展示世界观设定'
                        ],
                        answer: 0,
                        explanation: '优秀的新手引导会让玩家尽快“上手并感到有成就”，而不是被信息量压垮。'
                    },
                    {
                        question: '游戏中的“有意义选择”更接近下面哪种情况？',
                        options: [
                            '不同选项各有收益与代价，玩家需要权衡',
                            '所有选项结果完全一样',
                            '只有一个绝对正确答案',
                            '随机点击也不会影响结果'
                        ],
                        answer: 0,
                        explanation: '有意义选择能提升策略感和参与感，让玩家真正思考“为什么现在这么做”。'
                    }
                ],
                resources: [
                    { name: '游戏设计原理', url: 'https://book.douban.com/subject/25796665/', type: 'book' },
                    { name: '游戏设计文档', url: 'https://www.gamedesigning.org/', type: 'tutorial' },
                    { name: '游戏设计入门', url: 'https://www.bilibili.com/video/BV1tV411B7F2', type: 'video' },
                ]
            },
            {
                id: 'shader',
                name: 'Shader编程',
                icon: '✨',
                description: '材质、着色器与实时图形效果',
                priority: 'important',
                quizs: [
                    {
                        question: 'Shader 是什么？',
                        options: [
                            '在 GPU 上运行的程序，控制渲染效果',
                            '一种着色器语言',
                            '游戏中的阴影效果',
                            '材质系统'
                        ],
                        answer: 0,
                        explanation: 'Shader 是在图形处理单元（GPU）上运行的小程序，决定了顶点位置和像素颜色。'
                    },
                    {
                        question: 'Shader 中，顶点着色器（Vertex Shader）的主要作用是什么？',
                        options: [
                            '处理顶点位置和变换',
                            '处理像素颜色',
                            '计算光照',
                            '生成纹理'
                        ],
                        answer: 0,
                        explanation: '顶点着色器对每个顶点执行，负责将顶点从模型空间转换到屏幕空间。'
                    },
                    {
                        question: 'Shader 中，片段着色器（Fragment Shader）的主要作用是什么？',
                        options: [
                            '决定每个像素的最终颜色',
                            '处理顶点位置',
                            '生成几何体',
                            '计算物理模拟'
                        ],
                        answer: 0,
                        explanation: '片段着色器（或像素着色器）在光栅化后对每个像素执行，计算输出颜色。'
                    },
                    {
                        question: 'Unity 中，常用的 Shader 语言是？',
                        options: ['HLSL', 'GLSL', 'CG', 'ShaderLab'],
                        answer: 0,
                        explanation: 'Unity 主要使用 HLSL（High Level Shader Language）编写 Shader，并包装在 ShaderLab 中。'
                    },
                    {
                        question: 'Unreal Engine 中，常用的 Shader 语言是？',
                        options: ['HLSL', 'GLSL', 'CG', 'Material Graph'],
                        answer: 0,
                        explanation: 'Unreal 使用 HLSL 作为底层 Shader 语言，并提供材质编辑器进行可视化编程。'
                    },
                    {
                        question: 'Shader 中，UV 坐标通常表示什么？',
                        options: [
                            '纹理坐标，范围通常是 [0,1]',
                            '顶点位置',
                            '颜色值',
                            '法线方向'
                        ],
                        answer: 0,
                        explanation: 'UV 坐标用于将纹理映射到模型表面，U 是水平方向，V 是垂直方向。'
                    },
                    {
                        question: '法线贴图（Normal Map）的作用是什么？',
                        options: [
                            '模拟凹凸细节，不改变几何体',
                            '增加模型顶点数量',
                            '改变材质颜色',
                            '产生镜面反射'
                        ],
                        answer: 0,
                        explanation: '法线贴图通过存储法线信息，在光照计算中产生凹凸的视觉假象。'
                    },
                    {
                        question: 'Shader 中，顶点着色器输出的位置通常是什么空间？',
                        options: ['裁剪空间', '世界空间', '模型空间', '屏幕空间'],
                        answer: 0,
                        explanation: '顶点着色器输出经过 MVP 变换后的位置，位于裁剪空间，供后续光栅化使用。'
                    },
                    {
                        question: '混合（Blending）在 Shader 中的作用是什么？',
                        options: [
                            '控制透明物体如何与背景融合',
                            '混合多种颜色',
                            '混合纹理',
                            '混合顶点'
                        ],
                        answer: 0,
                        explanation: '混合决定当前片段的颜色如何与帧缓冲区中的已有颜色结合，用于实现透明度、发光等效果。'
                    },
                    {
                        question: '深度测试（Depth Test）的作用是什么？',
                        options: [
                            '决定哪些像素被遮挡，处理遮挡关系',
                            '测试颜色深度',
                            '测试纹理深度',
                            '测试物体深度'
                        ],
                        answer: 0,
                        explanation: '深度测试通过比较像素的深度值，确保靠近相机的像素覆盖远处的像素。'
                    },
                    {
                        question: '什么是 PBR（基于物理的渲染）？',
                        options: [
                            '模拟光与物质物理相互作用的光照模型',
                            '一种编程语言',
                            '一种游戏引擎',
                            '一种建模软件'
                        ],
                        answer: 0,
                        explanation: 'PBR 是一系列渲染技术，遵循物理定律来表现材质的光学属性（如金属度、粗糙度）。'
                    },
                    {
                        question: 'Shader 中，金属度（Metallic）参数的作用是？',
                        options: [
                            '控制材质是金属（反射）还是非金属（漫反射）',
                            '控制材质光泽度',
                            '控制材质透明度',
                            '控制材质颜色'
                        ],
                        answer: 0,
                        explanation: '金属度在 PBR 中区分导体（金属）和绝缘体（非金属），影响高光和反射行为。'
                    },
                    {
                        question: 'Shader 中，粗糙度（Roughness）参数的作用是？',
                        options: [
                            '控制表面微观不平度，影响高光扩散',
                            '控制表面颜色',
                            '控制表面透明度',
                            '控制表面凹凸'
                        ],
                        answer: 0,
                        explanation: '粗糙度高的表面产生模糊的高光，如磨砂材质；粗糙度低的表面产生清晰的高光，如镜面。'
                    },
                    {
                        question: 'Shader Graph 是什么？',
                        options: [
                            'Unity 的可视化 Shader 编辑工具',
                            '一种 Shader 语言',
                            'Unreal 的材质编辑器',
                            '着色器调试工具'
                        ],
                        answer: 0,
                        explanation: 'Shader Graph 允许开发者在 Unity 中通过连接节点来创建 Shader，而无需编写代码。'
                    },
                    {
                        question: 'Unity 的 ShaderLab 是什么？',
                        options: [
                            '定义 Unity Shader 结构和属性的语言',
                            '一种 Shader 编程语言',
                            'Unity 的图形 API',
                            'Unity 的渲染管线'
                        ],
                        answer: 0,
                        explanation: 'ShaderLab 是一种声明性语言，用于配置 Shader 的属性、子着色器、Pass 和回退。'
                    },
                    {
                        question: '计算着色器（Compute Shader）的作用是什么？',
                        options: [
                            '执行通用计算任务，不直接参与图形渲染',
                            '计算光照',
                            '计算顶点位置',
                            '计算像素颜色'
                        ],
                        answer: 0,
                        explanation: '计算着色器用于通用 GPU 计算（GPGPU），可用于粒子系统、后处理、物理模拟等。'
                    },
                    {
                        question: 'Shader 中，`#include` 指令的作用是？',
                        options: [
                            '包含其他 Shader 文件或头文件',
                            '导入库文件',
                            '包含纹理',
                            '包含模型'
                        ],
                        answer: 0,
                        explanation: '`#include` 允许 Shader 复用公共代码，如光照函数、工具函数。'
                    },
                    {
                        question: 'Shader 的性能优化通常关注什么？',
                        options: [
                            '减少纹理采样、减少指令数、避免分支',
                            '增加更多特效',
                            '增加代码行数',
                            '使用更复杂的算法'
                        ],
                        answer: 0,
                        explanation: '优化 Shader 时需考虑 GPU 指令预算，复杂的分支和过多的纹理采样会降低性能。'
                    },
                    {
                        question: '什么是“屏幕空间”效果？',
                        options: [
                            '基于最终屏幕图像的后处理效果',
                            '在 3D 空间中渲染',
                            '在 UI 上渲染',
                            '在模型上渲染'
                        ],
                        answer: 0,
                        explanation: '屏幕空间效果在渲染完成后对屏幕图像进行处理，如景深、光晕、色彩校正。'
                    },
                    {
                        question: 'Shader 中，`half` 数据类型通常用于什么？',
                        options: [
                            '存储较低精度的浮点数，节省性能',
                            '存储整数',
                            '存储布尔值',
                            '存储颜色'
                        ],
                        answer: 0,
                        explanation: '`half`（16 位浮点）比 `float`（32 位）精度低但更快，适合颜色、方向等不需要高精度的数据。'
                    },
                    {
                        question: 'Shader 中常见的 `lerp(a, b, t)` 通常表示什么？',
                        options: [
                            '按照系数 t 在 a 和 b 之间做线性插值',
                            '把颜色全部转成黑白',
                            '随机打乱顶点顺序',
                            '将纹理压缩成更小尺寸'
                        ],
                        answer: 0,
                        explanation: '`lerp` 常用于在两种颜色、位置或材质参数之间平滑过渡。'
                    },
                    {
                        question: '为什么很多贴图采样和光照计算会放在片段着色器（Fragment Shader）阶段？',
                        options: [
                            '因为它针对每个像素执行，能得到更细致的表面结果',
                            '因为片段着色器只能处理顶点',
                            '因为顶点着色器不能输出位置',
                            '因为片段着色器运行次数更少'
                        ],
                        answer: 0,
                        explanation: '片段着色器面向像素级处理，更适合做颜色、法线、光照和后处理等精细计算。'
                    }
                ],
                resources: [
                    { name: 'Shader入门', url: 'https://www.bilibili.com/video/BV1sE411T7dR', type: 'video' },
                    { name: 'Unity Shader入门', url: 'https://learn.unity.com/tutorial/unity-shader-graph', type: 'tutorial' },
                    { name: 'The Book of Shaders', url: 'https://thebookofshaders.com/?lan=ch', type: 'book' },
                ]
            },
            {
                id: 'network',
                name: '网络同步',
                icon: '🌐',
                description: '多人联机、状态同步与延迟处理',
                priority: 'important',
                quizs: [
                    {
                        question: '网络游戏的核心挑战是什么？',
                        options: [
                            '状态同步、延迟、带宽限制',
                            '图形渲染',
                            '物理模拟',
                            'AI 决策'
                        ],
                        answer: 0,
                        explanation: '网络游戏的主要挑战在于在不可靠的网络条件下，高效、一致地同步多个玩家的游戏状态。'
                    },
                    {
                        question: '客户端-服务器架构的优势是什么？',
                        options: [
                            '防止作弊，权威服务器负责逻辑',
                            '不需要网络连接',
                            '性能更好',
                            '更容易开发'
                        ],
                        answer: 0,
                        explanation: '在客户端-服务器模型中，服务器是权威的，防止客户端作弊，保证公平性。'
                    },
                    {
                        question: '网络游戏中，服务器权威（Server Authority）意味着什么？',
                        options: [
                            '所有重要的游戏逻辑由服务器执行，客户端仅为显示',
                            '客户端决定游戏结果',
                            '对等网络所有节点平等',
                            '客户端和服务器共同决定'
                        ],
                        answer: 0,
                        explanation: '服务器权威能防止作弊，因为即使客户端被修改，服务器仍会强制执行规则。'
                    },
                    {
                        question: '什么是 RPC（远程过程调用）？',
                        options: [
                            '调用远程服务器上的函数',
                            '网络协议',
                            '游戏引擎功能',
                            '数据库查询'
                        ],
                        answer: 0,
                        explanation: 'RPC 允许客户端或服务器调用对方端的函数，是多人游戏通信的常用机制。'
                    },
                    {
                        question: 'Unity 中，用于网络通信的官方系统是？',
                        options: [
                            'Unity Transport',
                            'UNet (已弃用)',
                            'Mirror / Photon',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: 'Unity 有官方的 Unity Transport 包，UNet 已弃用，第三方如 Mirror 和 Photon 也非常流行。'
                    },
                    {
                        question: '网络游戏中，延迟（Latency）的影响是什么？',
                        options: [
                            '玩家操作和反馈之间的延迟，影响体验',
                            '游戏画质下降',
                            '帧率下降',
                            '内存占用增加'
                        ],
                        answer: 0,
                        explanation: '高延迟会导致输入响应迟缓，影响射击精度、移动平滑度等。'
                    },
                    {
                        question: '什么是“插值”（Interpolation）在网游中的应用？',
                        options: [
                            '平滑其他玩家的运动，弥补网络数据包之间的间隙',
                            '提高画质',
                            '压缩数据',
                            '加密通信'
                        ],
                        answer: 0,
                        explanation: '插值通过计算收到的位置数据之间的中间位置，使其他玩家的运动看起来更平滑。'
                    },
                    {
                        question: '什么是“预测”（Prediction）在网游中的应用？',
                        options: [
                            '客户端提前预测本地玩家操作的结果，立即响应',
                            '预测网络延迟',
                            '预测敌人位置',
                            '预测游戏结果'
                        ],
                        answer: 0,
                        explanation: '客户端立即响应玩家输入，同时将输入发送给服务器，服务器验证后修正（如有差异），减少延迟感。'
                    },
                    {
                        question: '什么是“回滚”（Rollback）技术？',
                        options: [
                            '服务器权威模式下，若客户端预测错误，则回滚状态并重放',
                            '游戏回档',
                            '撤销操作',
                            '断开连接'
                        ],
                        answer: 0,
                        explanation: '回滚常见于格斗游戏，如 GGPO 技术，允许本地立即响应，若服务器不同步则回溯并重新模拟。'
                    },
                    {
                        question: '网络游戏中，状态同步和事件同步的主要区别是？',
                        options: [
                            '状态同步同步整个游戏状态，事件同步只同步动作',
                            '状态同步更节省带宽',
                            '事件同步更精确',
                            '没有区别'
                        ],
                        answer: 0,
                        explanation: '状态同步定期发送所有游戏状态，事件同步仅发送发生的事件（如射击），各有优劣。'
                    },
                    {
                        question: '什么是“数据包压缩”的目的？',
                        options: [
                            '减少网络带宽消耗',
                            '提高游戏画质',
                            '增加安全性',
                            '减少延迟'
                        ],
                        answer: 0,
                        explanation: '压缩网络数据包可以减少传输的数据量，尤其对移动端游戏重要。'
                    },
                    {
                        question: '什么是“快照插值”（Snapshot Interpolation）？',
                        options: [
                            '在收到状态快照之间平滑插值',
                            '压缩快照',
                            '增加快照频率',
                            '减少快照大小'
                        ],
                        answer: 0,
                        explanation: '快照插值接收方在不同时间点收到的状态之间进行插值，生成平滑的运动轨迹。'
                    },
                    {
                        question: '网络游戏中，TCP 和 UDP 协议的主要区别是什么？',
                        options: [
                            'TCP 可靠有序但慢，UDP 快速但可能丢包',
                            'TCP 更快',
                            'UDP 更可靠',
                            '没有区别'
                        ],
                        answer: 0,
                        explanation: 'UDP 更适合实时游戏，因为它不等待确认，可以容忍少量丢包；TCP 适合可靠传输。'
                    },
                    {
                        question: '什么是“服务器帧率”（Server Tick Rate）？',
                        options: [
                            '服务器更新游戏状态的频率，如 20 Hz、60 Hz',
                            '客户端渲染帧率',
                            '网络延迟',
                            '数据包大小'
                        ],
                        answer: 0,
                        explanation: '服务器 Tick Rate 决定状态同步的频率，更高的频率通常带来更流畅的游戏体验，但也增加负载。'
                    },
                    {
                        question: '什么是“房间”（Room）或“大厅”（Lobby）系统？',
                        options: [
                            '玩家匹配和加入游戏的机制',
                            '游戏内的聊天室',
                            '游戏场景',
                            '游戏存档'
                        ],
                        answer: 0,
                        explanation: '房间系统负责管理玩家集合，包括匹配、创建/加入房间、开始游戏等。'
                    },
                    {
                        question: '网络游戏中，如何处理“作弊”问题？',
                        options: [
                            '服务器权威验证、反作弊软件、数据加密',
                            '提高网络速度',
                            '增加更多游戏内容',
                            '降低画质'
                        ],
                        answer: 0,
                        explanation: '服务器权威是基础，配合反作弊软件（如 EAC、BattlEye）和加密通信来防止作弊。'
                    },
                    {
                        question: '什么是“P2P”（点对点）网络架构？',
                        options: [
                            '玩家之间直接通信，无需中央服务器',
                            '客户端-服务器架构',
                            '云游戏架构',
                            '分布式数据库'
                        ],
                        answer: 0,
                        explanation: 'P2P 架构中所有客户端平等，但容易作弊和受 NAT 限制，多用于局域网或合作游戏。'
                    },
                    {
                        question: '什么是“主机迁移”（Host Migration）？',
                        options: [
                            '当主机玩家退出时，选择新的主机',
                            '迁移服务器',
                            '迁移数据',
                            '迁移玩家'
                        ],
                        answer: 0,
                        explanation: '在 P2P 或房间主机的架构中，主机迁移机制防止因主机退出导致游戏中断。'
                    },
                    {
                        question: '网络游戏中，带宽限制的影响是？',
                        options: [
                            '限制了同时传输的数据量，影响同步质量',
                            '影响画质',
                            '影响 CPU 性能',
                            '影响内存'
                        ],
                        answer: 0,
                        explanation: '有限带宽迫使开发者优化同步数据量，降低频率，或使用更紧凑的数据格式。'
                    },
                    {
                        question: '什么是“兴趣管理”（Interest Management）？',
                        options: [
                            '只同步玩家附近的其他实体，减少数据量',
                            '管理玩家兴趣',
                            '匹配玩家',
                            '游戏内推荐系统'
                        ],
                        answer: 0,
                        explanation: '在大型多人在线游戏中，只向玩家发送其感知范围内的实体信息，大幅降低带宽。'
                    },
                    {
                        question: '网络射击游戏中的“延迟补偿”（Lag Compensation）主要是为了解决什么问题？',
                        options: [
                            '让高延迟玩家的命中判定尽量接近其开枪时看到的画面',
                            '提高纹理分辨率',
                            '减少显存占用',
                            '让客户端永远拥有最终裁决权'
                        ],
                        answer: 0,
                        explanation: '延迟补偿会结合时间戳和历史状态回溯，改善高延迟下的命中体验。'
                    },
                    {
                        question: '当客户端预测结果和服务器权威结果不一致时，常见做法是什么？',
                        options: [
                            '用服务器结果校正客户端状态，并重新平滑同步',
                            '始终相信客户端，忽略服务器',
                            '立刻踢掉所有玩家',
                            '直接关闭网络同步'
                        ],
                        answer: 0,
                        explanation: '客户端预测提升手感，但最终仍要以服务器为准，再通过校正和插值减少画面突兀感。'
                    }
                ],
                resources: [
                    { name: 'Unity网络开发', url: 'https://docs.unity3d.com/Manual/UNet.html', type: 'docs' },
                    { name: '多人游戏架构', url: 'https://www.bilibili.com/video/BV1xQ4y1M7tN', type: 'video' },
                    { name: '游戏网络编程', url: 'https://gafferongames.com/categories/networked-physics/', type: 'tutorial' },
                ]
            },
        ]
    }
];

// 根据ID获取职业方向
export function getCareerById(id: string): CareerDirection | undefined {
    return careerDirections.find(c => c.id === id);
}

// 获取核心技能列表
export function getCoreSkills(career: CareerDirection) {
    return career.skills.filter(s => s.priority === 'core');
}

// 获取重要技能列表
export function getImportantSkills(career: CareerDirection) {
    return career.skills.filter(s => s.priority === 'important');
}
