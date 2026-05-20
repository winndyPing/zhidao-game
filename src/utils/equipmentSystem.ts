import type { Equipment, EquipmentStats, EquipmentType, GameData } from '@/types/game';

// ==================== 装备系统 ====================

class EquipmentSystem {
  // 获取装备总属性
  getTotalStats(gameData: GameData): Required<EquipmentStats> {
    const stats: Required<EquipmentStats> = {
      attack: 0,
      defense: 0,
      intelligence: 0,
      speed: 0,
      hp: 0,
      bugResist: 0,
      crit: 0,
    };

    gameData.inventory.equipment
      .filter(e => e.equipped)
      .forEach(e => {
        Object.keys(e.stats).forEach(stat => {
          const key = stat as keyof EquipmentStats;
          if (e.stats[key] !== undefined) {
            stats[key] = (stats[key] || 0) + (e.stats[key] || 0);
          }
        });
      });

    return stats;
  }

  // 装备物品
  equip(itemId: string, gameData: GameData): boolean {
    const item = gameData.inventory.equipment.find(e => e.id === itemId);
    if (!item) return false;

    // 卸下同类型装备
    gameData.inventory.equipment
      .filter(e => e.type === item.type && e.equipped)
      .forEach(e => { e.equipped = false; });

    item.equipped = true;
    return true;
  }

  // 卸下装备
  unequip(itemId: string, gameData: GameData): void {
    const item = gameData.inventory.equipment.find(e => e.id === itemId);
    if (item) {
      item.equipped = false;
    }
  }

  // 重新计算buff
  recalculateBuffs(gameData: GameData): void {
    const stats = this.getTotalStats(gameData);
    gameData.buffs = [];

    if (stats.attack > 0) gameData.buffs.push(`攻击 +${stats.attack}`);
    if (stats.defense > 0) gameData.buffs.push(`防御 +${stats.defense}`);
    if (stats.hp > 0) {
      const bonusHp = stats.hp - 10; // 减去初始布衣的10点HP
      if (bonusHp > 0) {
        gameData.buffs.push(`生命 +${bonusHp}`);
      }
    }
    if (stats.bugResist > 0) gameData.buffs.push(`bug抗性 +${stats.bugResist}%`);
    if (stats.speed > 0) gameData.buffs.push(`速度 +${stats.speed}`);
    if (stats.crit > 0) gameData.buffs.push(`暴击 +${stats.crit}%`);
    if (stats.intelligence > 0) gameData.buffs.push(`智力 +${stats.intelligence}`);
  }

  // 合成装备
  craft(recipeId: string, gameData: GameData): boolean {
    const recipe = gameData.recipes.find(r => r.id === recipeId);
    if (!recipe || !recipe.unlocked) return false;

    // 检查材料
    for (const material of recipe.materials) {
      const invItem = gameData.inventory.materials.find(m => m.id === material.id);
      if (!invItem || invItem.count < material.count) return false;
    }

    // 消耗材料
    recipe.materials.forEach(material => {
      const invItem = gameData.inventory.materials.find(m => m.id === material.id);
      if (invItem) invItem.count -= material.count;
    });

    // 创建新装备
    const newEquipment: Equipment = {
      id: `${recipe.result.type}_${Date.now()}`,
      name: recipe.result.name,
      icon: recipe.result.icon,
      type: recipe.result.type,
      rarity: recipe.rarity,
      stats: recipe.result.stats,
      equipped: false,
    };

    gameData.inventory.equipment.push(newEquipment);
    return true;
  }

  // 检查是否有足够材料
  hasEnoughMaterials(recipeId: string, gameData: GameData): boolean {
    const recipe = gameData.recipes.find(r => r.id === recipeId);
    if (!recipe) return false;

    return recipe.materials.every(material => {
      const invItem = gameData.inventory.materials.find(m => m.id === material.id);
      return invItem && invItem.count >= material.count;
    });
  }

  // 获取已装备的物品
  getEquippedByType(type: EquipmentType, gameData: GameData): Equipment | undefined {
    return gameData.inventory.equipment.find(e => e.type === type && e.equipped);
  }
}

export const equipmentSystem = new EquipmentSystem();
