import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



import CardList from '../components/Mainbar/CardList'
import NavBar from '../components/Mainbar/NavBar.js'
import EditProfile from '../components/Mainbar/Settings/EditProfile'
import Notifications from '../components/Mainbar/Settings/Notifications.'
import Settings from '../components/Mainbar/Settings/Settings'

const SettingsPage = () => {
  return (
    <Container>
    <NavBar/>
    <h2 className='sub-nav'>Settings </h2>
<div className='settings-grid flex-row'>
<Settings/>





</div>
 {/* <LineChart/> */}


</Container>
  )
}

export default SettingsPage
