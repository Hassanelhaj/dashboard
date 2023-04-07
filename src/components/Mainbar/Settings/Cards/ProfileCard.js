import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import logo from '../../../../imgslogo.png';


const ProfileCard = ()=>{


      return (
        <Card className='card-con sett-card'>
        <Link to='/editProfile'>
          <Card.Body className='card-info'>
       <center className='card-logo'><h1 className='card-logo'>
       <i className="fa-solid fa-id-badge card-logo" ></i></h1></center>

            <h6 className='tiny-txt'>
            More Detailes
            </h6>
            
            <Card.Text>
            {/* <p> Spider Man</p> */}
            <h5>Profile</h5>
            </Card.Text>
            {/* <Button className='card-btn' >Add To List</Button> */}
          </Card.Body>
        </Link>

        </Card>
      );

}
export default ProfileCard;