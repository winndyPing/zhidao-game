export interface OfferPackage {
  name: string;
  price: string;
  badge: string;
  summary: string;
  deliverables: string[];
  bestFor: string;
  timeline: string;
}

export interface OutreachTarget {
  title: string;
  painPoint: string;
  pitch: string;
}

export interface CopyTemplate {
  id: string;
  title: string;
  description: string;
  content: string;
}

export const offerPackages: OfferPackage[] = [
  {
    name: '99元验证版',
    price: '¥99',
    badge: '最容易成交',
    summary: '把现有职业闯关 demo 换成对方品牌，适合先拿第一单。',
    deliverables: [
      '替换 Logo、标题、主视觉文案',
      '保留职业选择 + 闯关体验 + 学习资源结构',
      '交付 H5 静态演示包或在线预览链接',
    ],
    bestFor: '大学社团、训练营助教、个人知识博主',
    timeline: '当天可交付',
  },
  {
    name: '299元活动版',
    price: '¥299',
    badge: '利润更稳',
    summary: '加入客户自己的职业方向、题库和课程链接，能直接用于活动宣传。',
    deliverables: [
      '定制 3 到 5 个职业方向卡片',
      '替换题库与学习资源',
      '增加活动介绍、报名引导或社群引导文案',
    ],
    bestFor: '就业服务机构、训练营、校园活动主办方',
    timeline: '1 到 2 天',
  },
  {
    name: '699元招生版',
    price: '¥699',
    badge: '适合认真卖',
    summary: '做成一套更完整的招生小游戏着陆页，适合作为小型定制项目。',
    deliverables: [
      '完整品牌换肤和落地页包装',
      '按客户方向重写职业路线、资源和引导文案',
      '预留报名、企微、表单或公众号跳转入口',
    ],
    bestFor: '培训机构、求职服务团队、小型工作室',
    timeline: '2 到 3 天',
  },
];

export const outreachTargets: OutreachTarget[] = [
  {
    title: '大学生就业社群',
    painPoint: '缺少能吸引同学参与的互动内容，活动海报转化低。',
    pitch: '把枯燥的职业介绍做成小游戏，适合社群拉新和线下分享会暖场。',
  },
  {
    title: '培训机构和训练营',
    painPoint: '课程介绍页同质化，用户很难在前 30 秒感受到差异。',
    pitch: '用闯关 demo 展示职业方向、课程路线和学习资源，比传统长图更容易让用户停留。',
  },
  {
    title: '个人博主或知识付费创作者',
    painPoint: '只有图文内容，缺少能转发和互动的轻量产品。',
    pitch: '这套 demo 可以快速换皮成你的职业测试或学习路线页，拿来做引流很合适。',
  },
];

export const copyTemplates: CopyTemplate[] = [
  {
    id: 'listing',
    title: '闲鱼/朋友圈文案',
    description: '适合直接发商品介绍、朋友圈或社群招募。',
    content:
      '我这边做了一个“职业方向闯关小游戏”Demo，可以快速改成你的品牌版，适合就业指导、训练营招生、社群拉新。\n\n现阶段提供 99 元验证版：当天换 Logo、标题、主文案，保留职业选择、闯关、学习资源展示，直接给你 H5 演示链接。\n\n如果你有课程、活动、社群，也可以做 299 元活动版，把职业方向、题库、课程链接替换成你的内容。想看演示我可以直接发预览。',
  },
  {
    id: 'dm',
    title: '私聊开场话术',
    description: '适合给潜在客户发第一条消息。',
    content:
      '你好，我最近做了一个适合就业指导/课程招生的互动小游戏 demo。不是普通海报页，而是用户可以选职业方向、做闯关、看学习路线的 H5。\n\n如果你最近有活动、招生、社群拉新，我可以先做一个 99 元验证版给你看效果，当天能交。要不要我把演示链接和可改内容发你？',
  },
  {
    id: 'followup',
    title: '跟进成交话术',
    description: '对方有兴趣但还没下单时使用。',
    content:
      '这套最适合先低成本验证，不需要你准备很多东西。你只要给我 3 样内容：品牌名、目标人群、想引导到哪里，我就能先出一个可看的版本。\n\n建议你先用 99 元版试一下，如果活动反馈不错，再升级成 299 元活动版。我这边可以今天排给你。',
  },
];

export const first100Plan: string[] = [
  '先卖 99 元验证版，不要一上来谈大定制。',
  '今天就联系 10 个潜在客户，优先找你能直接私聊到的人。',
  '开口只卖一个结果：把职业介绍做成可互动的小游戏演示页。',
  '成交后只做轻定制，控制在 1 天内交付，先赚到第一笔现金流。',
];

export const deliveryChecklist: string[] = [
  '客户 Logo 或品牌名',
  '活动标题或课程名称',
  '目标人群描述',
  '3 到 5 个职业方向或主题',
  '想引导的链接、二维码或联系方式',
];
