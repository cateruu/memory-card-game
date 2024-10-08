import { useGameStore } from '../../store/gameStore';
import Card from '../Card/Card';
import styles from './Board.module.scss';

const Board = () => {
  const { difficulty, cards } = useGameStore((state) => state);
  const [rows, columns] = difficulty.split('x');

  return (
    <section
      className={styles.container}
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {cards.map((card, idx) => (
        <Card key={`${card.value}-${idx}`} card={card} />
      ))}
    </section>
  );
};

export default Board;
