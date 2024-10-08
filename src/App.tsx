import styles from './App.module.scss';
import Game from './components/Game/Game';
import Landing from './components/Landing/Landing';
import { useGameStore } from './store/gameStore';

const App = () => {
  const isGameStarted = useGameStore((state) => state.isStarted);

  return (
    <>
      <h1 className={styles.header}>MEMORY 🃏🧠</h1>
      <div className={styles.container}>
        {isGameStarted ? <Game /> : <Landing />}
      </div>
    </>
  );
};

export default App;
