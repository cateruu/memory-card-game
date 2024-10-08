import { DifficultiyLevel } from '../../constants';
import { getFormattedDate } from '../../utils/getFormattedDate';
import { getFormattedTime } from '../../utils/getFormattedTime';
import StarLevel from '../StarLevel/StarLevel';
import styles from './SavedGame.module.scss';

export interface Game {
  time: number;
  moves: number;
  difficulty: DifficultiyLevel;
  date: Date;
}

interface Props {
  game: Game;
}

const SavedGame = ({ game }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.sideWrapper}>
        <time>{getFormattedTime(game.time)}</time>
        <p>Moves: {game.moves}</p>
      </div>
      <div className={styles.sideWrapper}>
        <div className={styles.stars}>
          <StarLevel difficulty={game.difficulty} />
        </div>
        <p className={styles.date}>{getFormattedDate(game.date)}</p>
      </div>
    </div>
  );
};

export default SavedGame;
