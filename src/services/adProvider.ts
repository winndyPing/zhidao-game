import { getCustomAdPlacement, type CustomAdNetwork } from '@/data/adPlacements';

export type AdProvider = 'none' | 'adsense' | 'youxiao' | 'tencent' | 'custom';
export type AdRenderMode = 'placeholder' | 'adsense' | 'custom-html';

export interface AdRuntime {
  provider: AdProvider;
  providerLabel: string;
  renderMode: AdRenderMode;
  isLive: boolean;
  statusText: string;
  descriptionText: string;
  scriptSrc?: string;
  adsenseClient?: string;
  customHtml?: string;
  minHeight: number;
}

function normalizeProvider(input: string | undefined): AdProvider {
  switch ((input ?? '').trim().toLowerCase()) {
    case 'adsense':
      return 'adsense';
    case 'youxiao':
      return 'youxiao';
    case 'tencent':
      return 'tencent';
    case 'custom':
      return 'custom';
    default:
      return 'none';
  }
}

function getNetworkLabel(network: CustomAdNetwork) {
  switch (network) {
    case 'youxiao':
      return '优效 H5';
    case 'tencent':
      return '腾讯广告';
    default:
      return '自定义广告';
  }
}

export function resolveAdRuntime(slot: string) {
  const provider = normalizeProvider(import.meta.env.VITE_AD_PROVIDER as string | undefined);
  const adsenseClient = (import.meta.env.VITE_ADSENSE_CLIENT as string | undefined)?.trim();
  const placement = getCustomAdPlacement(slot);

  if (provider === 'adsense') {
    const isLive = Boolean(adsenseClient);
    return {
      provider,
      providerLabel: 'Google AdSense',
      renderMode: isLive ? 'adsense' : 'placeholder',
      isLive,
      statusText: isLive ? '广告位已启用' : '等待配置 AdSense',
      descriptionText: isLive
        ? '当前广告位正在使用 AdSense 网站广告。'
        : '请先配置 VITE_ADSENSE_CLIENT 并完成 AdSense 站点审核。',
      scriptSrc: adsenseClient
        ? `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`
        : undefined,
      adsenseClient,
      minHeight: 96,
    } satisfies AdRuntime;
  }

  if (provider === 'youxiao' || provider === 'tencent' || provider === 'custom') {
    const customHtml = placement?.customHtml?.trim();
    const label =
      provider === 'custom'
        ? getNetworkLabel(placement?.network ?? 'custom')
        : getNetworkLabel(provider);

    return {
      provider,
      providerLabel: label,
      renderMode: customHtml ? 'custom-html' : 'placeholder',
      isLive: Boolean(customHtml),
      statusText: customHtml ? '广告代码已接入' : '等待粘贴平台代码',
      descriptionText: customHtml
        ? `当前广告位正在使用 ${label} 提供的 H5 广告代码。`
        : `请在 src/data/adPlacements.ts 中为 ${slot} 粘贴 ${label} 官方提供的 H5 广告代码。`,
      customHtml,
      minHeight: placement?.minHeight ?? 96,
    } satisfies AdRuntime;
  }

  return {
    provider,
    providerLabel: '广告占位',
    renderMode: 'placeholder',
    isLive: false,
    statusText: '广告位占位中',
    descriptionText: '当前未启用真实广告平台，保留版位结构以便后续接入。',
    minHeight: placement?.minHeight ?? 96,
  } satisfies AdRuntime;
}
