import React from 'react'
import { useSelector } from 'react-redux'
import CardInfo from './CardInfo';

const Departments = () => {
   const departments = useSelector(state=>state.departs.value);
  return (
    departments.map((dep)=>{
        return(<CardInfo data={dep}/>)
    })
  )
}

export default Departments
