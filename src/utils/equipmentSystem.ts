import type { Equipment, EquipmentStats, EquipmentType, Recipe } from '@/types/game';

interface EquipmentGameData {
  inventory: {
    equipment: Equipment[];
    materials: Array<{
      id: string;
      count: number;
    }>;
  };
  recipes: Recipe[];
  buffs?: string[];
}

class EquipmentSystem {
  getTotalStats(gameData: EquipmentGameData): Required<EquipmentStats> {
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
      .filter((equipment) => equipment.equipped)
      .forEach((equipment) => {
        Object.keys(equipment.stats).forEach((stat) => {
          const key = stat as keyof EquipmentStats;
          if (equipment.stats[key] !== undefined) {
            stats[key] = (stats[key] || 0) + (equipment.stats[key] || 0);
          }
        });
      });

    return stats;
  }

  equip(itemId: string, gameData: EquipmentGameData): boolean {
    const item = gameData.inventory.equipment.find((equipment) => equipment.id === itemId);
    if (!item) return false;

    gameData.inventory.equipment
      .filter((equipment) => equipment.type === item.type && equipment.equipped)
      .forEach((equipment) => {
        equipment.equipped = false;
      });

    item.equipped = true;
    return true;
  }

  unequip(itemId: string, gameData: EquipmentGameData): void {
    const item = gameData.inventory.equipment.find((equipment) => equipment.id === itemId);
    if (item) {
      item.equipped = false;
    }
  }

  recalculateBuffs(gameData: EquipmentGameData): void {
    const stats = this.getTotalStats(gameData);
    const buffs = gameData.buffs ?? [];
    buffs.length = 0;

    if (stats.attack > 0) buffs.push(`攻击 +${stats.attack}`);
    if (stats.defense > 0) buffs.push(`防御 +${stats.defense}`);
    if (stats.hp > 0) buffs.push(`生命 +${stats.hp}`);
    if (stats.bugResist > 0) buffs.push(`Bug抗性 +${stats.bugResist}%`);
    if (stats.speed > 0) buffs.push(`速度 +${stats.speed}`);
    if (stats.crit > 0) buffs.push(`暴击 +${stats.crit}%`);
    if (stats.intelligence > 0) buffs.push(`智力 +${stats.intelligence}`);

    gameData.buffs = buffs;
  }

  craft(recipeId: string, gameData: EquipmentGameData): boolean {
    const recipe = gameData.recipes.find((currentRecipe) => currentRecipe.id === recipeId);
    if (!recipe || !recipe.unlocked) return false;

    for (const material of recipe.materials) {
      const invItem = gameData.inventory.materials.find((inventoryMaterial) => inventoryMaterial.id === material.id);
      if (!invItem || invItem.count < material.count) {
        return false;
      }
    }

    recipe.materials.forEach((material) => {
      const invItem = gameData.inventory.materials.find((inventoryMaterial) => inventoryMaterial.id === material.id);
      if (invItem) {
        invItem.count -= material.count;
      }
    });

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

  hasEnoughMaterials(recipeId: string, gameData: EquipmentGameData): boolean {
    const recipe = gameData.recipes.find((currentRecipe) => currentRecipe.id === recipeId);
    if (!recipe) return false;

    return recipe.materials.every((material) => {
      const invItem = gameData.inventory.materials.find((inventoryMaterial) => inventoryMaterial.id === material.id);
      return !!invItem && invItem.count >= material.count;
    });
  }

  getEquippedByType(type: EquipmentType, gameData: EquipmentGameData): Equipment | undefined {
    return gameData.inventory.equipment.find((equipment) => equipment.type === type && equipment.equipped);
  }
}

export const equipmentSystem = new EquipmentSystem();
