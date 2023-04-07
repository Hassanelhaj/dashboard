import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SideBar from "./components/sidbar/SideBar";
import About from "./pages/About";
import AddEmpoloy from "./pages/AddEmpoloyPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import HomePage from "./pages/HomePage";
import ImpoloiesPage from "./pages/ImpoloiesPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import TasksPage from "./pages/TasksPage";
import AddEmpoloyPage from "./pages/AddEmpoloyPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import EditProfile from "./components/Mainbar/Settings/EditProfile";
import Notifications from "./components/Mainbar/Settings/Notifications.";
import Security from "./components/Mainbar/Settings/Security";
import Settings from "./components/Mainbar/Settings/Settings";
import NavBar from "./components/Mainbar/NavBar.js";
import { Container } from "react-bootstrap";
import IncomesPAge from "./pages/IncomesPAge";
import EngagementsPage from "./pages/EngagementsPage";
import AdministrionPage from "./pages/AdministrionPage";
import ResourcesPage from "./pages/ResourcesPage";
import MoreDetails from "./pages/MoreDetails";


function App() {

  return (
    <div >
 
  <Routes>
  <Route index path="/" element={<HomePage/>}/>
  <Route  path="/tasks" element={<TasksPage/>}/>
  <Route  path="/createTask" element={<CreateTaskPage/>}/>
  <Route  path="/addEmpoloy" element={<AddEmpoloyPage/>}/>

  <Route  path="/empoloies" element={<ImpoloiesPage/>}/>
  <Route  path="/departments" element={<DepartmentsPage/>}/>

  <Route  path="/reports" element={<ReportsPage/>}/>
  <Route  path="/settings/" element={<SettingsPage/>}/>
  <Route  path="/about" element={<About/>}/>
  <Route  path="/editProfile" element={<EditProfile/>}/> 
  <Route  path="/notifications" element={<Notifications/>}/>
   <Route  path="/security" element={<Security/>}/>
   <Route  path="/incomes" element={<IncomesPAge/>}/>
   <Route  path="/engagments" element={<EngagementsPage/>}/>
   <Route  path="/administration" element={<AdministrionPage/>}/>
   <Route  path="/resources" element={<ResourcesPage/>}/>
   <Route  path="/moreDetails" element={<MoreDetails/>}/>
   {/* <Route  path="*" element={<MoreDetails/>}/> */}

   <Route exact path="/moreDetails/:id/" element={<MoreDetails/>}/>

  </Routes>
  {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
