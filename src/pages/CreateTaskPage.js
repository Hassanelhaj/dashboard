import React from 'react'
import CreateTask from '../components/Mainbar/CreateTask'
import NavBar from '../components/Mainbar/NavBar.js'

const CreateTaskPage = () => {
  return (
    <div>
      {/* <h1> create tasks page</h1> */}
    <NavBar/>

      <CreateTask/>
    </div>
  )
}

export default CreateTaskPage
