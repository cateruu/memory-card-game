import { create } from 'zustand';
import { DifficultyLevel } from '../constants';
import { CardType, getGameCards } from '../utils/getGameCards';

interface GameState {
  isStarted: boolean;
  isWon: boolean;
  difficulty: DifficultyLevel;
  moves: number;
  time: number;
  cards: CardType[];
  flippedCards: CardType[];
  startGame: (value: DifficultyLevel) => void;
  setTime: () => void;
  resetGame: () => void;
  addFlippedCard: (card: CardType) => void;
  resetFlippedCards: () => void;
  setMatch: (matchedCards: CardType[]) => void;
  addMove: () => void;
  setWon: () => void;
  goToNewGame: () => void;
}

export const useGameStore = create<GameState>()((set) => ({
  isStarted: false,
  isWon: false,
  difficulty: DifficultyLevel.Easy,
  moves: 0,
  time: 0,
  cards: [],
  flippedCards: [],
  startGame: (value) =>
    set(() => ({
      isStarted: true,
      difficulty: value,
      moves: 0,
      time: 0,
      cards: getGameCards(value),
      isWon: false,
    })),
  setTime: () => set((state) => ({ time: ++state.time })),
  resetGame: () =>
    set((state) => ({
      moves: 0,
      time: 0,
      cards: getGameCards(state.difficulty),
      isWon: false,
      flippedCards: [],
    })),
  addFlippedCard: (card: CardType) =>
    set((state) => ({ flippedCards: [...state.flippedCards, card] })),
  resetFlippedCards: () => set(() => ({ flippedCards: [] })),
  setMatch: (matchedCards) =>
    set((state) => ({
      cards: state.cards.map((card) => {
        if (matchedCards.includes(card)) {
          card.isMatched = true;
        }

        return card;
      }),
    })),
  addMove: () => set((state) => ({ moves: ++state.moves })),
  setWon: () => set(() => ({ isWon: true })),
  goToNewGame: () => set(() => ({ isStarted: false })),
}));
