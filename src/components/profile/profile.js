import PropTypes from 'prop-types';
import {
  StyledImg,
  StyledName,
  StyledProfile,
  Tag,
  Location,
  Stats,
  StatsLi,
  Label,
  Quantity,
} from './profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <StyledProfile>
    <StyledImg src={avatar} alt={username} />
    <StyledName>{username}</StyledName>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
    <Stats>
      <StatsLi>
        <Label>Followers: </Label>
        <Quantity>{stats.followers}</Quantity>
      </StatsLi>
      <StatsLi>
        <Label>Views:</Label> <Quantity>{stats.views}</Quantity>
      </StatsLi>
      <StatsLi>
        <Label>Likes: </Label>
        <Quantity>{stats.likes}</Quantity>
      </StatsLi>
    </Stats>
  </StyledProfile>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
