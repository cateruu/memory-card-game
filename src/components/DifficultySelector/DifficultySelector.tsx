import styles from './DifficultySelector.module.scss';
import { useGameStore } from '../../store/gameStore';
import StarLevel from '../StarLevel/StarLevel';
import { DifficultyLevel } from '../../constants';

const DIFFICULTIES: DifficultyLevel[] = [
  DifficultyLevel.Easy,
  DifficultyLevel.Normal,
  DifficultyLevel.Hard,
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
