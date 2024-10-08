import styles from './Timer.module.scss';
import { useEffect } from 'react';
import { useGameStore } from '../../store/gameStore';
import { getFormattedTime } from '../../utils/getFormattedTime';

const Timer = () => {
  const { setTime, time, isWon } = useGameStore((state) => state);

  useEffect(() => {
    let interval: number;
    if (!isWon) {
      interval = setInterval(() => {
        setTime();
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isWon, setTime]);

  return <time className={styles.time}>{getFormattedTime(time)}</time>;
};

export default Timer;
