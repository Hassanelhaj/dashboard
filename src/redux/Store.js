import { configureStore } from "@reduxjs/toolkit";
import DepartmentsSlice from "./Slices/DepartmentsSlice";

import EmpoloiesSlice from "./Slices/EmpoloiesSlice";

import ProjectsSlice from "./Slices/ProjectsSlice";

const Store = configureStore({
    reducer:{
        empoloies:EmpoloiesSlice,
        
        projects:ProjectsSlice,
        departs:DepartmentsSlice
    }
});
export default Store;