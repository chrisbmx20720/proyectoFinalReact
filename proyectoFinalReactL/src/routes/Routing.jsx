import React from 'react'
import {Route, Routes} from  'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login'
import Register from '../pages/Register'
import Admin from '../pages/Admin'
import ProtectedRoutes from './private/ProtectedRoutes';

export function Routing() {
const user = false;

  
  return (
    <div>
      <Routes>
        <Route path='/' element ={ <Home/> } />
        <Route path='/home' element ={<Home/> }/>
        <Route element = {<ProtectedRoutes/>}>
          <Route path='/admin' element ={<Admin/> }/>
        </Route>
        <Route path='/login' element ={ <Login/> } />
        <Route path='/register' element ={ <Register/> } />
      </Routes>
    </div>
  )
}
