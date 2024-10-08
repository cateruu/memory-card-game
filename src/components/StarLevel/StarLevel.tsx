import { DifficultyLevel } from '../../constants';
import StarIcon from './StarIcon';

interface Props {
  difficulty: DifficultyLevel;
}

const StarLevel = ({ difficulty }: Props) => {
  return (
    <div>
      <StarIcon color={'#FDE047'} />
      <StarIcon
        color={difficulty !== DifficultyLevel.Easy ? '#FDE047' : '#6B7280'}
      />
      <StarIcon
        color={difficulty === DifficultyLevel.Hard ? '#FDE047' : '#6B7280'}
      />
    </div>
  );
};

export default StarLevel;
