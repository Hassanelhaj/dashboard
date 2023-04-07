import React from 'react'
import { useParams } from 'react-router-dom'
import {Departs} from '../Data'

const MoreDetails = () => {
    const arg = useParams();
    const {id}= useParams(); 
  const user = Departs.filter((val)=>{
    return(val.id == id)
  })
    console.log(user);
  return (
    <div>
      <h1>More Detailsp page {id}</h1>
      <p> {user[0].name}</p>
    </div>
  )
}

export default MoreDetails
