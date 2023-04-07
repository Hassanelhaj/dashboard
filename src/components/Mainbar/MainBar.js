import React from 'react'
import ControllBtns from './ControllBtns.jsx'
import DailyTasks from './DailyTasks.js'

import NavBar from './NavBar.js'


const MainBar = () => {
  return (
    <div>
    <NavBar/>
      <h3 className='tasks-title'>Projects</h3>
      <ControllBtns/>
      {/* <DailyTasks/> */}
    </div>
  )
}

export default MainBar
