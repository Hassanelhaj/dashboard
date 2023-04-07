import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const SubNav = (prob) => {
    // const empos = useSelector(state=>state.empoloies.value);
  return (
    <Container className='sub-nav'>
      <h3>Ther are{' '+ prob.data.length+' '}{prob.data.title}</h3>
      <Link to={`/${prob.data.to}`}>New{prob.data.btn}</Link>
    </Container>
  )
}

export default SubNav
