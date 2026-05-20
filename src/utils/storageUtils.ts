import type { DynamicData, UserInfo } from '@/types/game';

// 存储键前缀
const STORAGE_PREFIX = 'zhidao_game_';
const USER_LIST_KEY = `${STORAGE_PREFIX}user_list`;
const CURRENT_USER_KEY = `${STORAGE_PREFIX}current_user`;

// ==================== 用户列表管理 ====================

export function getUserList(): UserInfo[] {
  try {
    const data = localStorage.getItem(USER_LIST_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('获取用户列表失败:', e);
    return [];
  }
}

export function saveUserList(users: UserInfo[]): void {
  try {
    localStorage.setItem(USER_LIST_KEY, JSON.stringify(users));
  } catch (e) {
    console.error('保存用户列表失败:', e);
  }
}

export function findUserByPhone(phone: string): UserInfo | undefined {
  const users = getUserList();
  return users.find(u => u.phone === phone);
}

export function addUserToList(user: UserInfo): void {
  const users = getUserList();
  const existingIndex = users.findIndex(u => u.phone === user.phone);
  if (existingIndex >= 0) {
    users[existingIndex] = user;
  } else {
    users.push(user);
  }
  saveUserList(users);
}

// ==================== 当前用户管理 ====================

export function getCurrentUserPhone(): string | null {
  try {
    return localStorage.getItem(CURRENT_USER_KEY);
  } catch (e) {
    console.error('获取当前用户失败:', e);
    return null;
  }
}

export function setCurrentUserPhone(phone: string): void {
  try {
    localStorage.setItem(CURRENT_USER_KEY, phone);
  } catch (e) {
    console.error('设置当前用户失败:', e);
  }
}

export function clearCurrentUser(): void {
  try {
    localStorage.removeItem(CURRENT_USER_KEY);
  } catch (e) {
    console.error('清除当前用户失败:', e);
  }
}

// ==================== 用户数据存储 ====================

function getUserDataKey(phone: string): string {
  return `${STORAGE_PREFIX}data_${phone}`;
}

export function saveUserData(phone: string, data: DynamicData): void {
  try {
    localStorage.setItem(getUserDataKey(phone), JSON.stringify(data));
  } catch (e) {
    console.error('保存用户数据失败:', e);
  }
}

export function loadUserData(phone: string): DynamicData | null {
  try {
    const data = localStorage.getItem(getUserDataKey(phone));
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('加载用户数据失败:', e);
    return null;
  }
}

export function deleteUserData(phone: string): void {
  try {
    localStorage.removeItem(getUserDataKey(phone));
  } catch (e) {
    console.error('删除用户数据失败:', e);
  }
}

// ==================== 自动登录检查 ====================

export function checkAutoLogin(): { phone: string; data: DynamicData } | null {
  const currentPhone = getCurrentUserPhone();
  if (!currentPhone) return null;
  
  const userData = loadUserData(currentPhone);
  if (!userData || !userData.user.isLoggedIn) return null;
  
  return { phone: currentPhone, data: userData };
}
