import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png';


const CardInfo = ({data})=>{
console.log(data.url);
const dispatch = useDispatch();
const handelAddMovie=(el)=>{
//   dispatch(Addmovie(el));


}

      return (
        <Card className='card-con'>
        <Link to={'/'}>
          <Card.Img variant="top" src={logo} className='poster'/>
          <Card.Body className='card-info'>
            <h6 className='tiny-txt'>{
              data.head? 'headmaster '+data.head:
              data.head  || data.Title
              }</h6>
              <h6 className='tiny-txt'>{
             
              data.type  || ''
              }</h6>
            <Card.Text>
            {/* <p> Spider Man</p> */}
            <h5>{data.name}</h5>
            </Card.Text>
            {/* <Button className='card-btn' >Add To List</Button> */}
          </Card.Body>
          </Link>
        </Card>
      );

}
export default CardInfo;