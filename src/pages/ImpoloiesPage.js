import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Departments from '../components/Mainbar/Departments'
import Empolies from '../components/Mainbar/Empolies'
import NavBar from '../components/Mainbar/NavBar.js'
import SubNav from '../components/Mainbar/SubNav'

const ImpoloiesPage = () => {
  const empo = useSelector(state=>state.empoloies.value);

  return (
    <div className='flex-col-start'>
    <NavBar/>
    <SubNav data={{title:'Empoloies',btn:'Employ',
    length:empo.length,to:'addEmpoloy'}}/>

    {/* <h3 className='m-5 head-title'>There are {empo.length} empoloy</h3> */}
    <Container className='cards-list'>
    <Empolies/>
  </Container>
    </div>
   
  )
}

export default ImpoloiesPage
