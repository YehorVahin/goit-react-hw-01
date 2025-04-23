import React from 'react'
import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
import './App.css'

import userData from './userData.json'
import friends from './friends.json'
import transactions from './transactions.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

function App() {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}>
        </Profile>
      <FriendList
        friends={friends}>
        </FriendList>
        <TransactionHistory items={transactions}></TransactionHistory>
    </>
  )
}

export default App
