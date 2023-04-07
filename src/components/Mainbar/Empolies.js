import React from 'react'
import { emploies } from '../../Data';
import Table from 'react-bootstrap/Table';

import Imploy from './Imploy';
import { useSelector } from 'react-redux';
import Departments from './Departments';
import { Container } from 'react-bootstrap';
import CardInfo from './CardInfo';

const Empolies = () => {
  const empo = useSelector(state=>state.empoloies.value);
  return (
    empo.map((empo)=>{
        return(<CardInfo data={empo}/>)
    })
  )
}

export default Empolies
