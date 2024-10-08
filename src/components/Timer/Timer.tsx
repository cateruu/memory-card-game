import styles from './Timer.module.scss';
import { useEffect } from 'react';
import { useGameStore } from '../../store/gameStore';
import { getFormattedTime } from '../../utils/getFormattedTime';

const Timer = () => {
  const { setTime, time } = useGameStore((state) => state);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [setTime]);

  return <time className={styles.time}>{getFormattedTime(time)}</time>;
};

export default Timer;
