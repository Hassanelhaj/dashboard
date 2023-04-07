import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { useSelector } from "react-redux";
import { tasksData } from "../../Data";

const add=(arr,el)=>{
     arr.push(el);
     return arr;


}
const ProjectSlice= createSlice({
    name:'projects',
    initialState:{value:tasksData},
    reducers:{
        AddProject:(state,action)=>{
            
            state = state.value.push(action.payload);
            const myList = action.payload;
            // console.log(myList);
          
        },
        RemoveProject:(state)=>{

        }
    }
});

export const {AddProject,RemoveMovi} = ProjectSlice.actions;
export default ProjectSlice.reducer;