import styles from './App.module.scss';
import Landing from './components/Landing/Landing';
import { useGameStore } from './store/gameStore';

export const App = () => {
  const isGameStarted = useGameStore((state) => state.isStarted);

  return (
    <>
      <h1 className={styles.header}>MEMORY 🃏🧠</h1>
      <div className={styles.container}>
        {isGameStarted ? <Landing /> : <Landing />}
      </div>
    </>
  );
};
