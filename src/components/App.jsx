import Profile from './profile/profile.js';
import user from './user.json';
import Statistics from './data/data.js'
import data from './data.json'
import FriendList from './friendsList/friendslist.js'
import friends from './friends.json'
import items from './transactions.json'
import TransactionHistory from './transactions/transactions.js'

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} 
      />
      <Statistics
        title="upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </>

  );
};
