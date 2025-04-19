import React from 'react';
import Profile from './components/Profile/Profile'
import userData from './components/userData.json';
import FriendList from "./components/FriendList/FriendList";
import friends from "./components/friends.json";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
       <FriendList friends={friends} />
    </div>
  );
};

export default App;
