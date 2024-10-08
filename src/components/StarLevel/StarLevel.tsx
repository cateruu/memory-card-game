import { DifficultiyLevel } from '../../constants';
import StarIcon from './StarIcon';

interface Props {
  difficulty: DifficultiyLevel;
}

const StarLevel = ({ difficulty }: Props) => {
  return (
    <div>
      <StarIcon color={'#FDE047'} />
      <StarIcon
        color={difficulty !== DifficultiyLevel.Easy ? '#FDE047' : '#6B7280'}
      />
      <StarIcon
        color={difficulty === DifficultiyLevel.Hard ? '#FDE047' : '#6B7280'}
      />
    </div>
  );
};

export default StarLevel;
