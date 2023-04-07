import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../public';

// import 'mdb-react-ui-kit/dist/css/';
import App from './App';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './components/sidbar/SideBar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>

    <Provider store={Store}>
    <div className='app'>
    <SideBar/>
    <App />
    </div>
  
    
    
    </Provider>
 </BrowserRouter>


);

