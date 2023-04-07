import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { useSelector } from "react-redux";
import { emploies} from "../../Data";

const add=(arr,el)=>{
     arr.push(el);
     return arr;


}
const EmpoloiesSlice= createSlice({
    name:'empoloies',
    initialState:{value:emploies},
    reducers:{
        AddEmpo:(state,action)=>{
            
            state = state.value.push(action.payload);
            const myList = action.payload;
            // console.log(myList);
          
        },
        RemoveEmpoloy:(state)=>{

        }
    }
});

export const {AddEmpo,RemoveEmpoloy} = EmpoloiesSlice.actions;
export default EmpoloiesSlice.reducer;