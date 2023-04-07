import React from 'react'
import { Container } from 'react-bootstrap';

import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../components/Mainbar/NavBar.js';
import SubNav from '../components/Mainbar/SubNav.js';
import Tasks from '../components/Mainbar/Tasks';
import { tasksData } from '../Data';



const TasksPage = () => {
  const tasks = useSelector(state=>state.projects.value);
  return (
    <div className='flex-col-start'>
    <NavBar/>
    <SubNav data={{title:'Projects under Development',btn:'Project',
    length:tasks.length, to:'createTask'}
   }/>
    <Container className='cards-list'>
    <Tasks/>
  </Container>
    </div>
  )
}

export default TasksPage
