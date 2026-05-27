export type CustomAdNetwork = 'youxiao' | 'tencent' | 'custom';

export interface CustomAdPlacement {
  slot: string;
  network: CustomAdNetwork;
  label: string;
  minHeight?: number;
  customHtml?: string;
  notes?: string;
}

// Paste official H5 website ad snippets here after the platform approves your site.
// Keep one placement per slot so pages can stay provider-agnostic.
export const customAdPlacements: Record<string, CustomAdPlacement> = {
  'article-sidebar': {
    slot: 'article-sidebar',
    network: 'youxiao',
    label: 'Article Sidebar',
    minHeight: 250,
    customHtml: '',
    notes: 'Paste the official sidebar snippet from Youxiao or Tencent here.',
  },
  'article-inline-primary': {
    slot: 'article-inline-primary',
    network: 'youxiao',
    label: 'Article Inline',
    minHeight: 120,
    customHtml: '',
    notes: 'Use a native or in-article snippet provided for mobile H5 content pages.',
  },
};

export function getCustomAdPlacement(slot: string) {
  return customAdPlacements[slot];
}
