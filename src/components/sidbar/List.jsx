import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { } from '@fortawesome/react-fontawesome';
import projects from '../../imgs/projects.png';
import { Link } from 'react-router-dom';
// import {facoffee}from '@fortawesome/free-solid-svg-icons'
const List = () => {
  return (


    <ListGroup  >
      <p className='sidebar-list'><Link to='/' className='side-bar-link'><i class="fa-solid fa-house"></i> Home</Link></p>
      <p className='sidebar-list'><Link to='/tasks' className='side-bar-link'><p>
        <i className="fa-sharp fa-solid fa-list-check"></i>  Projects</p>
      </Link></p>
      <p className='sidebar-list'><Link to='/departments' className='side-bar-link'><p>
        <i className="fa-solid fa-users-line"></i>  Deparments</p>
      </Link></p>
      <p className='sidebar-list'><Link to='/empoloies' className='side-bar-link'><p>
      <i className="fa-solid fa-user">
      </i>  Empoloies</p></Link></p>
      <p className='sidebar-list'><Link to='/reports' className='side-bar-link'>
        <p><i class="fa-solid fa-chart-simple"></i> Reports</p>
      </Link>
      </p>
      <p className='sidebar-list'><Link to='/settings' className='side-bar-link'>
        <p><i className="fa-solid fa-gear"></i>  Settings</p>
      </Link></p>
      <p className='sidebar-list'><Link to='/about' className='side-bar-link'>
        <p><i className="fa-solid fa-circle-info"></i>  About</p> </Link></p>
    </ListGroup>
  );



}

export default List
