import React from 'react'
import Profile from './components/Profile/Profile'
import './App.css'

import userData from './userData.json'

function App() {
  return (
    <div>
      <Profile
      name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}>
      </Profile>
    </div>
  )
}

export default App
