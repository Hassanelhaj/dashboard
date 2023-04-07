import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../imgs/logo.png';


const SettingsCard = ({data})=>{



      return (
        <Card className='settings-card-con'>
          <Card.Img variant="top" src={logo} className='settings-poster'/>

          <Card.Body className='card-info'>
            <h6 className='tiny-txt'>{
               
             
            }</h6>
              <h6 className='tiny-txt'>{
                <FontAwesomeIcon icon="fa-solid fa-database" />
                 
              }</h6>
            <Card.Text>
            {/* <p> Spider Man</p> */}
            <h5>{data.name}</h5>
            </Card.Text>
            {/* <Button className='card-btn' >Add To List</Button> */}
          </Card.Body>
        </Card>
      );

}
export default SettingsCard;