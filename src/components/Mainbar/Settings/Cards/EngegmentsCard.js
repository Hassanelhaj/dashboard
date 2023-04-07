import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import logo from '../../../../imgslogo.png';


const  EngagmentsCard = ()=>{


      return (
        <Card className='card-con sett-card'>
        <Link to='/engagments'>
          <Card.Body className='card-info'>
       <center className='card-logo'><h1 className='card-logo'>
       <i className="fa-solid fa-file-contract" ></i></h1></center>

            <h6 className='tiny-txt'>
            More Detailes
            </h6>
            
            <Card.Text>
            {/* <p> Spider Man</p> */}
            <h5>Engagments</h5>
            </Card.Text>
            {/* <Button className='card-btn' >Add To List</Button> */}
          </Card.Body>
        </Link>

        </Card>
      );

}
export default EngagmentsCard;