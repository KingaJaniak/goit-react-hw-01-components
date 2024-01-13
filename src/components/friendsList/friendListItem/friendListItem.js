import PropTypes from 'prop-types';
import { ListImg, ListName, ListLi, ListSpan } from './friendListItem.styled';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <ListLi key={id}>
      <ListSpan className={clsx({ online: isOnline, offline: !isOnline })} />
      <ListImg src={avatar} alt={name} />
      <ListName>{name}</ListName>
    </ListLi>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
