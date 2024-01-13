import Profile from './profile/profile.js';
import user from './user.json';
import Statistics from './data/data.js'
import data from './data.json'

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
       title="upload stats" stats={data}/>
    </>
  );
};
