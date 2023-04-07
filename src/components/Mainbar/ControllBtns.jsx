import React from 'react'
// import Card from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

const ControllBtns = () => {
  const projects = useSelector(state=>state.projects);

  return (
<div className='flex-row controll-btns'>
 {/* <h3>Tasks</h3> */}
    <>
      <Card className='all-task btn'>
        
        <Card.Body>
          
          <Card.Text>
        <h4> All Tasks </h4>
        <h5>{(18+projects.value.length)}</h5>

          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card className='current-task btn'>
       
        <Card.Body>
          
          <Card.Text>
          <h4>Current</h4>
          <h5>{projects.value.length}</h5>

          </Card.Text>
        </Card.Body>
      </Card>
      <br />


      <Card className='unfinsh btn'>
       
        <Card.Body>
          
          <Card.Text>
          <h4>Faild</h4>
          <h5>0</h5>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card className='completted btn' >
        
        <Card.Body>
          
          <Card.Text>
           <h4> Done </h4>
          <h5>18</h5>

          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>



        </div>
      );
    }
    

 

export default ControllBtns
