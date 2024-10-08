import { useEffect } from 'react';
import { useGameStore } from '../../store/gameStore';
import styles from './WinScreen.module.scss';
import ConfettiExplosion from 'react-confetti-explosion';

const WinScreen = () => {
  const { moves, time, difficulty } = useGameStore((state) => state);

  useEffect(() => {
    const gamesJSON = localStorage.getItem('games');
    if (gamesJSON) {
      const games = JSON.parse(gamesJSON);
      localStorage.setItem(
        'games',
        JSON.stringify([
          ...games,
          {
            time: time,
            moves: moves,
            difficulty: difficulty,
            date: new Date(),
          },
        ])
      );
    } else {
      localStorage.setItem(
        'games',
        JSON.stringify([
          {
            time: time,
            moves: moves,
            difficulty: difficulty,
            date: new Date(),
          },
        ])
      );
    }
  }, [difficulty, moves, time]);

  return (
    <div className={styles.container}>
      <ConfettiExplosion />
      <h3 className={styles.header}>YOU WON!</h3>
    </div>
  );
};

export default WinScreen;
