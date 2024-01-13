import PropTypes from 'prop-types';
import FriendListItem from './friendListItem/friendListItem';
import { FriendUl } from './friendslist.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendUl>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          {...friend}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
    </FriendUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
