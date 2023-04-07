import React from 'react'
import List from './List'
import daslogo from '../../imgs/daslogo.png';
const SideBar = () => {
  return (
    <div className='sidebar-con'>
    <div className='flex-row-start'>
      <img src={daslogo} className='dash-logo'/>
      <h1 >Alsfa </h1>
</div> 
     <List />
      
    </div>
  )
}

export default SideBar
