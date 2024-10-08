import { useGameStore } from '../../store/gameStore';
import { CardType } from '../../utils/getGameCards';
import styles from './Card.module.scss';

interface Props {
  card: CardType;
}

const Card = ({ card }: Props) => {
  const { addFlippedCard, flippedCards } = useGameStore((state) => state);

  const isFlipped = flippedCards.includes(card);

  return (
    <div
      className={styles.container}
      onClick={() => {
        if (!card.isMatched && !isFlipped && flippedCards.length < 2) {
          addFlippedCard(card);
        }
      }}
    >
      <div
        className={styles.wrapper}
        style={{
          transform: isFlipped || card.isMatched ? 'rotateY(180deg)' : 'none',
        }}
      >
        <div className={styles.front}>?</div>
        <div className={`${styles.back} ${card.isMatched && styles.matched}`}>
          {card.value}
        </div>
      </div>
    </div>
  );
};

export default Card;
