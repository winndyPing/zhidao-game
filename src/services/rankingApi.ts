import type { RankingEntry, RankingType } from '@/utils/rankingSystem';
import { requestJson } from './http';

export interface RankingResponse {
  rankings: RankingEntry[];
  myRank: number | null;
}

export interface RankingSubmitPayload {
  level: number;
  power: number;
  attack: number;
  defense: number;
  hp: number;
  equipmentCount: number;
  nickname?: string;
  avatar?: string;
}

export function fetchRanking(type: RankingType) {
  return requestJson<RankingResponse>(`/api/rankings?type=${encodeURIComponent(type)}`, {
    method: 'GET',
    auth: true,
  });
}

export function submitRanking(payload: RankingSubmitPayload) {
  return requestJson<{ ok: true; updatedAt: number }>('/api/rankings/submit', {
    method: 'POST',
    auth: true,
    body: payload,
  });
}
