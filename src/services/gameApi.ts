import type { DynamicData } from '@/types/game';
import { requestJson } from './http';

export interface GameStateResponse {
  state: DynamicData | null;
}

export interface SaveStateResponse {
  updatedAt: number;
}

export function fetchGameState() {
  return requestJson<GameStateResponse>('/api/game/state', {
    method: 'GET',
    auth: true,
  });
}

export function saveGameState(state: DynamicData) {
  return requestJson<SaveStateResponse>('/api/game/state', {
    method: 'PUT',
    auth: true,
    body: { state },
  });
}
