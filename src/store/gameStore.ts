import { create } from 'zustand';
import { DifficultiyLevel } from '../constants';

interface GameState {
  isStarted: boolean;
  difficulty: DifficultiyLevel;
  startGame: (value: DifficultiyLevel) => void;
}

export const useGameStore = create<GameState>()((set) => ({
  isStarted: false,
  difficulty: DifficultiyLevel.Easy,
  startGame: (value) => set(() => ({ isStarted: true, difficulty: value })),
}));
