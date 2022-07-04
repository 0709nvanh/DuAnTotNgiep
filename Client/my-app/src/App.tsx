import React from 'react';
import  './css/home.css'; 
import  './css/footer.css'; 
import  './css/header.css'; 
import  './css/welcome.css'; 

// import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/AdminLayout';
import List from './pages/products/List';
import SignIn from './pages/SignIn';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Home />} />
        </Route>


        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Navigate to="product" />} />
          <Route path="product" >
            <Route index element={<List />} />
          </Route>
        </Route>

        <Route path='/login' element={<SignIn />}>
          
        </Route>

        <Route path='/welcome' element={<Welcome />}>
          
          </Route>

      </Routes>



    </div>
  );
}

export default App;