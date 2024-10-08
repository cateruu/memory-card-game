import styles from './DifficultySelector.module.scss';
import { useGameStore } from '../../store/gameStore';
import StarLevel from '../StarLevel/StarLevel';
import { DifficultiyLevel } from '../../constants';

const DIFFICULTIES: DifficultiyLevel[] = [
  DifficultiyLevel.Easy,
  DifficultiyLevel.Normal,
  DifficultiyLevel.Hard,
];

const DifficultySelector = () => {
  const startGame = useGameStore((state) => state.startGame);

  return (
    <section className={styles.container}>
      {DIFFICULTIES.map((difficulty) => (
        <button
          className={styles.button}
          onClick={() => {
            startGame(difficulty);
          }}
          key={difficulty}
        >
          <p>{difficulty}</p>
          <StarLevel difficulty={difficulty} />
        </button>
      ))}
    </section>
  );
};

export default DifficultySelector;
