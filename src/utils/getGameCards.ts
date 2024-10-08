import { DifficultyLevel } from '../constants';

export interface CardType {
  id: number;
  value: string;
  isMatched: boolean;
}

const CARDS = [
  '💀',
  '🔥',
  '🚀',
  '💰',
  '👽',
  '😭',
  '👻',
  '💩',
  '🌍',
  '🦴',
  '🎃',
  '🙏',
  '⚽',
  '🎸',
  '❤️',
];

const generateCardsArray = (length: number): string[] => {
  const usedCards = CARDS.slice(0, length);

  return usedCards.concat(usedCards);
};

export const getGameCards = (difficulty: DifficultyLevel): CardType[] => {
  const [rows, columns] = difficulty.split('x');
  const cards = generateCardsArray((+rows * +columns) / 2);
  const shuffledCards = cards.sort(() => 0.5 - Math.random());

  return shuffledCards.map<CardType>((card, idx) => ({
    id: idx,
    value: card,
    isMatched: false,
  }));
};
