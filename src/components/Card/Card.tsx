import { CardType } from '../../utils/getGameCards';
import styles from './Card.module.scss';

interface Props {
  card: CardType;
}

const Card = ({ card }: Props) => {
  return (
    <div className={styles.container} onClick={() => console.log(card.value)}>
      ?
    </div>
  );
};

export default Card;
