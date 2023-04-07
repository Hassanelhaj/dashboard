import React, { useRef, useState } from 'react'
import { Alert, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import daslogo from '../../imgs/daslogo.png';
import logo from '../../imgs/logo.png';
import { AddEmpo } from '../../redux/Slices/EmpoloiesSlice';


const AddEmpoloy = () => {
    const empoId = useRef();

    const empoName = useRef();
    const empoEmail = useRef();
    const empoAddress = useRef();
    const empoAge = useRef();
    const empojopTitle = useRef();
    const empoDepart = useRef();
    const empoSalary = useRef();
    const dispach = useDispatch();
    const [show, setShow] = useState(false);

    const handleSubmit = () => {

        const empoloy = {
            name: empoName.current.value, email: empoEmail.current.value,
            Title: empojopTitle.current.value, Age: empoAge.current.value,
            Address: empoAddress.current.value, department: empoDepart.current.value,
            img: logo, salary: empoSalary.current.value

        };

        dispach(AddEmpo(empoloy));
        setShow(true);

        console.log('empoloy is hired');

    }
    return (

        <div className='create-task-wrraper'>

            <center><img className='dash-logo mb-2' src={daslogo} />
                <h1>Add Empoloy</h1></center>
            <Form.Group className="mb-3 mt-3">

                <Form.Control type="text" placeholder="Full Name" ref={empoName} />

            </Form.Group>

            <Form.Group className="mb-3 ">

                <Form.Control type="text" placeholder="Email" ref={empoEmail} />

            </Form.Group>
            <Form.Group className="mb-3 mt-3">

                <Form.Control type="text" placeholder="Adress " ref={empoAddress} />

            </Form.Group>

            <Form.Group className="mb-3 mt-3">

                <Form.Control type="date" placeholder="Date of Berth" ref={empoAge} />

            </Form.Group>

            <Form.Select aria-label="Jop Title" className='mb-3' ref={empojopTitle}>
                <option disabled>Jop Title</option>

                <option value=" Web Dev">Programming</option>
                <option value="graphic designer">Graphic Design</option>
                <option value="networking Eng">Networking</option>
                <option value="cloud service Eng">Cloud Services</option>
            </Form.Select>

            <Form.Select aria-label="Department" className='mb-3' ref={empoDepart}>
                <option disabled>Debartment</option>

                <option>Programming</option>
                <option value="graphic design">Graphic Design</option>
                <option value="networking">Networking</option>
                <option value="cloud services">Cloud Services</option>
            </Form.Select>
            <Form.Group className="mb-3">

                <Form.Control type="number" placeholder="Salary" className='mt-3' ref={empoSalary} />

            </Form.Group>
            <center>
                <Button className='newTask-btn' type="submit" onClick={handleSubmit}>
                    Hire !
                </Button>
                {show ?
                    <Alert variant="success" onClick={() => setShow(false)} dismissible>
                        <Alert.Heading>Empoloy is hired successfuly</Alert.Heading>
                        <p>

                        </p>
                    </Alert>
                    : <p></p>}
            </center>


        </div>
    )

}

export default AddEmpoloy
