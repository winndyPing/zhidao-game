import type { DynamicData, UserInfo } from '@/types/game';

// 存储键前缀
const STORAGE_PREFIX = 'zhidao_game_';
const USER_LIST_KEY = `${STORAGE_PREFIX}user_list`;
const CURRENT_USER_KEY = `${STORAGE_PREFIX}current_user`;
const ACCESS_TOKEN_KEY = `${STORAGE_PREFIX}access_token`;

// ==================== 用户列表管理 ====================

export function getUserList(): UserInfo[] {
  try {
    const data = localStorage.getItem(USER_LIST_KEY);
    const users = data ? JSON.parse(data) : [];
    return users.map((user: UserInfo & { phone?: string }) => ({
      ...user,
      email: user.email || user.phone || '',
    }));
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

export function findUserByEmail(email: string): UserInfo | undefined {
  const users = getUserList();
  return users.find(u => u.email === email);
}

export function addUserToList(user: UserInfo): void {
  const users = getUserList();
  const existingIndex = users.findIndex(u => u.email === user.email);
  if (existingIndex >= 0) {
    users[existingIndex] = user;
  } else {
    users.push(user);
  }
  saveUserList(users);
}

// ==================== 当前用户管理 ====================

export function getCurrentUserEmail(): string | null {
  try {
    return localStorage.getItem(CURRENT_USER_KEY);
  } catch (e) {
    console.error('获取当前用户失败:', e);
    return null;
  }
}

export function setCurrentUserEmail(email: string): void {
  try {
    localStorage.setItem(CURRENT_USER_KEY, email);
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

export function getAccessToken(): string | null {
  try {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  } catch (e) {
    console.error('获取登录凭证失败:', e);
    return null;
  }
}

export function setAccessToken(token: string): void {
  try {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  } catch (e) {
    console.error('设置登录凭证失败:', e);
  }
}

export function clearAccessToken(): void {
  try {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  } catch (e) {
    console.error('清除登录凭证失败:', e);
  }
}

// ==================== 用户数据存储 ====================

function getUserDataKey(email: string): string {
  return `${STORAGE_PREFIX}data_${encodeURIComponent(email)}`;
}

export function saveUserData(email: string, data: DynamicData): void {
  try {
    localStorage.setItem(getUserDataKey(email), JSON.stringify(data));
  } catch (e) {
    console.error('保存用户数据失败:', e);
  }
}

export function loadUserData(email: string): DynamicData | null {
  try {
    const data = localStorage.getItem(getUserDataKey(email));
    if (!data) return null;
    const parsed = JSON.parse(data) as DynamicData & { user: UserInfo & { phone?: string } };
    if (!parsed.user.email) {
      parsed.user.email = parsed.user.phone || email;
    }
    return parsed;
  } catch (e) {
    console.error('加载用户数据失败:', e);
    return null;
  }
}

export function deleteUserData(email: string): void {
  try {
    localStorage.removeItem(getUserDataKey(email));
  } catch (e) {
    console.error('删除用户数据失败:', e);
  }
}

// ==================== 自动登录检查 ====================

export function checkAutoLogin(): { email: string; data: DynamicData } | null {
  const currentEmail = getCurrentUserEmail();
  if (!currentEmail) return null;
  
  const userData = loadUserData(currentEmail);
  if (!userData || !userData.user.isLoggedIn) return null;
  
  return { email: currentEmail, data: userData };
}
