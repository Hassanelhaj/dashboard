import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { useSelector } from "react-redux";
import { Departs} from "../../Data";

const add=(arr,el)=>{
     arr.push(el);
     return arr;


}
const DepartmentesSlice= createSlice({
    name:'departs',
    initialState:{value:Departs},
    reducers:{
        AddDepart:(state,action)=>{
            
            state = state.value.push(action.payload);
            const myList = action.payload;
            // console.log(myList);
          
        },
        RemoveDepart:(state)=>{

        }
    }
});

export const {AddDepart,RemoveDepart} = DepartmentesSlice.actions;
export default DepartmentesSlice.reducer;