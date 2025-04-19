import React from 'react';
import Profile from './components/Profile/Profile'
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from './components/TransactionHistory/TransactionHistory';


import friends from "./components/friends.json";
import userData from './components/userData.json';
import transactions from './components/transactions.json'



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
       <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
