import React, { useRef, useState } from 'react'
import { Alert, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import daslogo from '../../imgs/daslogo.png';
import AlertCom from './AlertCom';
import logo from '../../imgs/logo.png';
import AddEmpoloy from './AddEmpoloy';
import { AddProject } from '../../redux/Slices/ProjectsSlice';
const CreateTask = () => {
  // const task={};
  const taskName =useRef();
  const taskType =useRef();
  const taskLeader =useRef();
  const taskCost =useRef();
  const taskDeadLine =useRef();
const dispach = useDispatch();
const [show, setShow] = useState(false);

  const handleSubmit =()=>{
    // e.preventDefalut();
    const task ={name:taskName.current.value,type:taskType.current.value
      ,implies:logo,level:'0%'
    };
    console.log('project is added !!!!!');

        dispach(AddProject(task));
        setShow(true);
      
  }
  return (
    <div className='create-task-wrraper'>

    {/* <Form> */}
    <center><img className='dash-logo mb-2' src={daslogo}/>
    <h1>Create Task</h1></center>
      <Form.Group className="mb-3 mt-5">

        <Form.Control type="text" placeholder="Project Name" ref={taskName}/>
       
      </Form.Group>


    <Form.Select aria-label="Project Type" className='mb-3' ref={taskType}>
    <option disabled>Project Type</option>

      <option value="programming" >Programming</option>
      <option value="grapic design">Graphic Design</option>
      <option value="networking">Networking</option>
      <option value="cloud services">Cloud Services</option>
    </Form.Select>

    <Form.Select aria-label="Team Leadr" ref={taskLeader}>
      <option  disabled >Team Leader</option>
      <option value="hassan">Hassan</option>
      <option value="ali">Ali</option>
     
    </Form.Select>

    <Form.Group className="mb-3">

<Form.Control type="number" placeholder="Cost" className='mt-3' ref={taskCost}/>

</Form.Group>

    <Form.Group className="mb-3">

<Form.Control type="number" placeholder="Dead Line" className='mt-3' ref={taskDeadLine}/>

</Form.Group>




     <center>
      <Button className='newTask-btn' type="submit" onClick={handleSubmit}>
        Confirm
      </Button>
      </center>

    {/* </Form> */}
    {show?
      <Alert variant="success" onClick={() => setShow(false)} dismissible>
        <Alert.Heading>Task is added successfuly</Alert.Heading>
        <p>
       
        </p>
      </Alert>
    :<p></p>}
   
    </div>
  )
}

export default CreateTask
