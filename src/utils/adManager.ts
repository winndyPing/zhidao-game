/**
 * 广告管理器 - 封装微信激励视频广告
 * 支持多种广告位：CP补给、双倍掉落、复活机会
 */

// 微信小程序环境声明
declare const wx: any;

// 广告配置
interface AdConfig {
  adUnitId: string;
  rewardCP: number;
  dailyLimit: number;
  description: string;
}

// 广告位配置（上线前替换为真实的 adUnitId）
const AD_CONFIGS: Record<string, AdConfig> = {
  cp_supply: {
    adUnitId: 'adunit-cp-supply-demo', // 替换为真实广告位ID
    rewardCP: 50,
    dailyLimit: 10,
    description: '观看视频获得50CP'
  },
  double_drop: {
    adUnitId: 'adunit-double-drop-demo',
    rewardCP: 0,
    dailyLimit: 3,
    description: '下次战斗双倍材料掉落'
  },
  revive: {
    adUnitId: 'adunit-revive-demo',
    rewardCP: 0,
    dailyLimit: 2,
    description: '战斗失败后复活'
  },
};

// 广告类型常量
export const AD_TYPES = {
  CP_SUPPLY: 'cp_supply',
  DOUBLE_DROP: 'double_drop',
  REVIVE: 'revive',
} as const;

// 广告结果
export interface AdResult {
  success: boolean;
  completed: boolean;
  reward?: number;
  message: string;
}

// 当日观看次数缓存
const dailyCountCache: Record<string, number> = {};

class AdManager {
  private rewardedAd: any = null;
  private currentAdType: string = '';
  private isWechatEnv: boolean = false;

  constructor() {
    // 检测微信环境
    this.isWechatEnv = typeof wx !== 'undefined' && wx.createRewardedVideoAd;
  }

  /**
   * 检查是否在微信小程序环境
   */
  isSupported(): boolean {
    return this.isWechatEnv;
  }

  /**
   * 获取广告配置
   */
  getConfig(adType: string): AdConfig | undefined {
    return AD_CONFIGS[adType];
  }

  /**
   * 获取今日日期字符串（用于存储key）
   */
  private getTodayKey(): string {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  }

  /**
   * 检查当日是否已达上限
   */
  checkDailyLimit(adType: string): boolean {
    const todayKey = this.getTodayKey();
    const cacheKey = `${adType}_${todayKey}`;
    
    // 优先使用缓存
    if (dailyCountCache[cacheKey] !== undefined) {
      const limit = AD_CONFIGS[adType]?.dailyLimit || 0;
      return dailyCountCache[cacheKey] < limit;
    }

    // 从 localStorage 读取
    try {
      const storedCount = localStorage.getItem(`ad_count_${cacheKey}`);
      const count = parseInt(storedCount || '0');
      dailyCountCache[cacheKey] = count;
      
      const limit = AD_CONFIGS[adType]?.dailyLimit || 0;
      return count < limit;
    } catch {
      return false;
    }
  }

  /**
   * 增加当日计数
   */
  private incrementDailyCount(adType: string): void {
    const todayKey = this.getTodayKey();
    const cacheKey = `${adType}_${todayKey}`;
    
    const currentCount = dailyCountCache[cacheKey] || 0;
    const newCount = currentCount + 1;
    
    dailyCountCache[cacheKey] = newCount;
    
    try {
      localStorage.setItem(`ad_count_${cacheKey}`, newCount.toString());
    } catch {
      // 忽略存储错误
    }
  }

  /**
   * 获取剩余观看次数
   */
  getRemainingCount(adType: string): number {
    const todayKey = this.getTodayKey();
    const cacheKey = `${adType}_${todayKey}`;
    
    // 优先使用缓存
    if (dailyCountCache[cacheKey] !== undefined) {
      const limit = AD_CONFIGS[adType]?.dailyLimit || 0;
      return Math.max(0, limit - dailyCountCache[cacheKey]);
    }

    // 从 localStorage 读取
    try {
      const storedCount = localStorage.getItem(`ad_count_${cacheKey}`);
      const count = parseInt(storedCount || '0');
      dailyCountCache[cacheKey] = count;
      
      const limit = AD_CONFIGS[adType]?.dailyLimit || 0;
      return Math.max(0, limit - count);
    } catch {
      return AD_CONFIGS[adType]?.dailyLimit || 0;
    }
  }

  /**
   * 初始化广告实例
   */
  private initAd(adType: string): boolean {
    if (!this.isWechatEnv) {
      return false;
    }

    const config = AD_CONFIGS[adType];
    if (!config) {
      return false;
    }

    // 如果广告类型变化，需要重新创建实例
    if (this.currentAdType !== adType || !this.rewardedAd) {
      this.currentAdType = adType;
      
      try {
        this.rewardedAd = wx.createRewardedVideoAd({
          adUnitId: config.adUnitId
        });
      } catch (e) {
        console.error('创建广告实例失败:', e);
        return false;
      }
    }

    return true;
  }

  /**
   * 预加载广告（提前准备，加快显示速度）
   */
  preloadAd(adType: string): void {
    if (!this.initAd(adType)) {
      return;
    }

    try {
      this.rewardedAd.load();
    } catch (e) {
      console.error('预加载广告失败:', e);
    }
  }

  /**
   * 显示广告
   * @returns Promise<AdResult> 广告播放结果
   */
  async showAd(adType: string): Promise<AdResult> {
    const config = AD_CONFIGS[adType];
    if (!config) {
      return {
        success: false,
        completed: false,
        message: '广告配置不存在'
      };
    }

    // 非微信环境：模拟广告成功（开发调试用）
    if (!this.isWechatEnv) {
      // 模拟2秒广告时间
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // 模拟90%完整观看率
      const completed = Math.random() < 0.9;
      
      if (completed) {
        this.incrementDailyCount(adType);
        return {
          success: true,
          completed: true,
          reward: config.rewardCP,
          message: '模拟广告播放完成'
        };
      } else {
        return {
          success: true,
          completed: false,
          message: '模拟广告中途退出'
        };
      }
    }

    // 检查次数限制
    if (!this.checkDailyLimit(adType)) {
      return {
        success: false,
        completed: false,
        message: '今日观看次数已达上限'
      };
    }

    // 初始化广告
    if (!this.initAd(adType)) {
      return {
        success: false,
        completed: false,
        message: '广告初始化失败'
      };
    }

    return new Promise((resolve) => {
      // 监听关闭事件
      const onClose = (res: any) => {
        this.rewardedAd.offClose(onClose);
        this.rewardedAd.offError(onError);
        
        if (res && res.isEnded) {
          // 完整观看，发放奖励
          this.incrementDailyCount(adType);
          resolve({
            success: true,
            completed: true,
            reward: config.rewardCP,
            message: '观看完成'
          });
        } else {
          // 中途关闭，无奖励
          resolve({
            success: true,
            completed: false,
            message: '请完整观看视频才能获得奖励'
          });
        }
      };

      // 监听错误事件
      const onError = (err: any) => {
        this.rewardedAd.offClose(onClose);
        this.rewardedAd.offError(onError);
        console.error('广告错误:', err);
        resolve({
          success: false,
          completed: false,
          message: '广告播放失败，请稍后重试'
        });
      };

      this.rewardedAd.onClose(onClose);
      this.rewardedAd.onError(onError);

      // 显示广告
      this.rewardedAd.show().catch(() => {
        // 失败后重新加载并显示
        this.rewardedAd.load().then(() => {
          this.rewardedAd.show().catch(() => {
            resolve({
              success: false,
              completed: false,
              message: '广告加载失败'
            });
          });
        }).catch(() => {
          resolve({
            success: false,
            completed: false,
            message: '广告加载失败'
          });
        });
      });
    });
  }

  /**
   * 重置某广告类型的当日计数（用于测试）
   */
  resetDailyCount(adType: string): void {
    const todayKey = this.getTodayKey();
    const cacheKey = `${adType}_${todayKey}`;
    dailyCountCache[cacheKey] = 0;
    
    try {
      localStorage.removeItem(`ad_count_${cacheKey}`);
    } catch {
      // 忽略存储错误
    }
  }
}

// 导出单例
export const adManager = new AdManager();

// 导出广告配置供UI使用
export const adConfigs = AD_CONFIGS;
