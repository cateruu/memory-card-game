import { useEffect } from 'react';
import { useGameStore } from '../../store/gameStore';
import Card from '../Card/Card';
import styles from './Board.module.scss';
import WinScreen from '../WinScreen/WinScreen';

const Board = () => {
  const {
    difficulty,
    cards,
    flippedCards,
    resetFlippedCards,
    setMatch,
    addMove,
    isWon,
    setWon,
  } = useGameStore((state) => state);
  const [rows, columns] = difficulty.split('x');

  useEffect(() => {
    let timeout: number;
    if (flippedCards.length >= 2) {
      addMove();
      if (flippedCards[0].value === flippedCards[1].value) {
        setMatch(flippedCards);
      }
      timeout = setTimeout(() => {
        resetFlippedCards();
      }, 600);
    }

    return () => clearTimeout(timeout);
  }, [addMove, flippedCards, resetFlippedCards, setMatch]);

  useEffect(() => {
    let timeout: number;
    if (cards.every((card) => card.isMatched)) {
      timeout = setTimeout(() => {
        setWon();
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [cards, setWon]);

  return (
    <div className={styles.container}>
      <section
        className={styles.wrapper}
        style={{
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
      >
        {cards.map((card) => (
          <Card key={card.index} card={card} />
        ))}
      </section>
      {isWon && <WinScreen />}
    </div>
  );
};

export default Board;
