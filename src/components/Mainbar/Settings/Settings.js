import React from 'react'
import { SettingsData } from '../../../Data'
import SettingsCard from './SettingsCard';

// import { Link } from 'react-router-dom'
// import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfileCard from './Cards/ProfileCard';
import NotificationsCard from './Cards/NotificationsCard';
import { div, Row } from 'react-bootstrap';
import Security from './Security';
import SecurityCard from './Cards/SecurityCard';
import WorkHoursCard from './Cards/WorkHoursCard';
import IncomesCard from './Cards/IncomesCard';
import EngagmentsCard from './Cards/EngegmentsCard';
import AdministrtionCard from './Cards/AdministrionCard';
import ResourceCard from './Cards/ResourceCard';
import OthersSettingsCard from './Cards/OthersSettingsCard';

const Settings = () => {
return(
 
  <div className='settings-wrapper'>
  <div className='settings-con'>
  
  <ProfileCard/>
  <NotificationsCard/>
  <SecurityCard/>



  {/* </div>

  <div className='settings-con'> */}
  <WorkHoursCard/>
 <IncomesCard/>
<EngagmentsCard/>
  {/* </div>

  <div className='settings-con'> */}
  <AdministrtionCard/>
 <ResourceCard/>
<OthersSettingsCard/>
  </div>


  </div>
  )
}
export default Settings


{/*     


    
      <ListGroup.Item><p className='flex-row-start'> */}
      {/* <FontAwesomeIcon icon="fa-solid fa-database" /> */}
      {/* {/* Resource</p> */}
    
    {/* </ListGroup> */}
  


  


