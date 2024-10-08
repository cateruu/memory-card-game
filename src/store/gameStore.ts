import { create } from 'zustand';
import { DifficultiyLevel } from '../constants';
import { CardType, getGameCards } from '../utils/getGameCards';

interface GameState {
  isStarted: boolean;
  difficulty: DifficultiyLevel;
  moves: number;
  time: number;
  cards: CardType[];
  startGame: (value: DifficultiyLevel) => void;
  setTime: () => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>()((set) => ({
  isStarted: false,
  difficulty: DifficultiyLevel.Easy,
  moves: 0,
  time: 0,
  cards: [],
  startGame: (value) =>
    set(() => ({
      isStarted: true,
      difficulty: value,
      moves: 0,
      time: 0,
      cards: getGameCards(value),
    })),
  setTime: () => set((state) => ({ time: ++state.time })),
  resetGame: () => set(() => ({ moves: 0, time: 0 })),
}));
