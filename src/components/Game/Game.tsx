import styles from './Game.module.scss';
import { useGameStore } from '../../store/gameStore';
import StarLevel from '../StarLevel/StarLevel';
import Board from '../Board/Board';
import Timer from '../Timer/Timer';

const Game = () => {
  const { difficulty, moves, resetGame, goToNewGame } = useGameStore(
    (state) => state
  );

  return (
    <main className={styles.container}>
      <div className={styles.starWrapper}>
        <StarLevel difficulty={difficulty} />
      </div>
      <header className={styles.header}>
        <div className={styles.leftSideWrapper}>
          <Timer />
          <p>Moves: {moves}</p>
        </div>
        <button className={`${styles.button}`} onClick={goToNewGame}>
          New Game
        </button>
        <button className={`${styles.button}`} onClick={resetGame}>
          Reset
        </button>
      </header>
      <Board />
    </main>
  );
};

export default Game;
