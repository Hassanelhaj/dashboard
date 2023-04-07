import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { tasksData } from '../../Data';
import daslogo from '../../imgs/daslogo.png';
import SubtTtles from './SubtTtles';
import Task from './Task';

const DailyTasks = () => {
  const projects = useSelector(state=>state.projects);

  return (
    <div>
    <div className='flex-row-between'>
      <h1 className='tasks-title'> Daily Tasks</h1>
      <Link to='createTask' className='newTask-btn'> New Task</Link>
      </div>
      <div className='daily-tasks'>
     <SubtTtles/>
     {projects.value.map((el,ind)=>{
      
        return(
        
     <Task el = {el}/>
     )
     })}
  

      </div>
    </div>
  )
}

export default DailyTasks
