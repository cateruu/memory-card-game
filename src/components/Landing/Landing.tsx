import DifficultySelector from '../DifficultySelector/DifficultySelector';
import styles from './Landing.module.scss';

const Landing = () => {
  return (
    <div>
      <h2 className={styles.header}>START NEW GAME</h2>
      <DifficultySelector />
    </div>
  );
};

export default Landing;
