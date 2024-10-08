import { useEffect, useState } from 'react';
import DifficultySelector from '../DifficultySelector/DifficultySelector';
import styles from './Landing.module.scss';
import SavedGame, { Game } from '../SavedGame/SavedGame';

const Landing = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const gamesJSON = localStorage.getItem('games');
    if (gamesJSON) {
      setGames(JSON.parse(gamesJSON));
    }
  }, []);

  return (
    <div>
      <h2 className={styles.header}>START NEW GAME</h2>
      <DifficultySelector />
      {games.length > 0 && (
        <>
          <h3 className={styles.latestHeader}>Latest Games</h3>
          {(games as Game[]).map((game) => (
            <SavedGame key={game.date.toLocaleString()} game={game} />
          ))}
        </>
      )}
    </div>
  );
};

export default Landing;
