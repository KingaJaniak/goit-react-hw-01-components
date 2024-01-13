import PropTypes from 'prop-types';
import {
  StatsDiv,
  Title,
  Label,
  Percentage,
  Ul,
  Li,
} from './statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatsDiv>
      {title && <Title>{title.toUpperCase()}</Title>}
      <Ul>
        {stats.map(stat => (
          <Li key={stat.id}>
            <Label>{stat.label}</Label>{' '}
            <Percentage>{stat.percentage}%</Percentage>
          </Li>
        ))}
      </Ul>
    </StatsDiv>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
