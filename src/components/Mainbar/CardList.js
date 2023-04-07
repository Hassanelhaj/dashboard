
import CardInfo from "./CardInfo";

import { useSelector } from "react-redux";


const CardList = ()=>{
const empoloies = useSelector(state=>state.empoloies.value);
 
    return(  
        
        empoloies.length ==0?<h1>No Empoloies ...</h1>:    
         
        empoloies.map((empo,ind)=>{
            // console.log(movi);
            
            
            return (
            <CardInfo key={ind} data={empo}/>
            );
        
            
            // </div>
            
        }



    ));
      
          

      
 


    
}
export default CardList;