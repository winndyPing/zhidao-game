import type { DynamicData, UserInfo } from '@/types/game';
import { requestJson } from './http';

export interface SendCodeResponse {
  message: string;
  delivery?: 'dev' | 'resend';
  devCode?: string;
  emailId?: string;
}

export interface LoginResponse {
  accessToken: string;
  user: UserInfo;
}

export interface MeResponse {
  user: UserInfo;
}

export interface BootstrapResponse {
  user: UserInfo;
  state: DynamicData | null;
}

export function sendEmailCode(email: string) {
  return requestJson<SendCodeResponse>('/api/auth/email/code', {
    method: 'POST',
    body: { email },
  });
}

export function loginWithEmailCode(email: string, code: string) {
  return requestJson<LoginResponse>('/api/auth/email/login', {
    method: 'POST',
    body: { email, code },
  });
}

export function fetchCurrentUser() {
  return requestJson<MeResponse>('/api/auth/me', {
    method: 'GET',
    auth: true,
  });
}

export function fetchBootstrapSession() {
  return requestJson<BootstrapResponse>('/api/auth/bootstrap', {
    method: 'GET',
    auth: true,
  });
}
