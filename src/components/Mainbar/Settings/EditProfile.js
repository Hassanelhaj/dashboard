import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Settings from './Settings'
import Form from 'react-bootstrap/Form';

const EditProfile = () => {
  return (
    <div >

    <div className='edit-form'>
    <Container>
      <h1 className='text-center mt-3'>Edit profile</h1>
      <div>
      <Form.Group className="mb-3 mt-3">

<Form.Control type="text" placeholder="UserName" value={'hassan'}/>

</Form.Group>

<Form.Group className="mb-3 ">

<Form.Control type="password" placeholder="Password" value={'hassan1111'} />

</Form.Group>
<center><Button className='newTask-btn'>Edit</Button></center>
</div>
</Container>
    </div>
    </div>
  )
}

export default EditProfile
