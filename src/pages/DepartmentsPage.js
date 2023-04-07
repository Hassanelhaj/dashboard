import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import Departments from '../components/Mainbar/Departments'
import NavBar from '../components/Mainbar/NavBar.js';
import SubNav from '../components/Mainbar/SubNav';

const DepartmentsPage = () => {
   const departments = useSelector(state=>state.departs.value);

  return (
    <div className='flex-col-start'>
    <NavBar/>

  <SubNav data ={{title:'Departments',btn:'Department',length:departments.length,to:'createDepartment'}}/>

    <Container className='cards-list'>
    <Departments />
  </Container>
  </div>
  )
}

export default DepartmentsPage
