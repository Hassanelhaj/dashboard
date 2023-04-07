import React from 'react'
import { useSelector } from 'react-redux';
import CardInfo from './CardInfo';

const Tasks = () => {
  
    const tasks = useSelector(state=>state.projects.value);
    return (
      tasks.map((task)=>{
          return(<CardInfo data={task}/>)
      })
    )
  
}

export default Tasks
