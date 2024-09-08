import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Admin from '../pages/Admin';
import Products from '../pages/Admin/Products';
import Users from '../pages/Admin/Users';
import Media from '../pages/Admin/Media';
import Services from '../pages/Admin/Services';
import Settings from '../pages/Admin/Settings';
import ProtectedRoutes from './private/ProtectedRoutes';

export function Routing() {
  const user = false; // Cambia esta lógica según tu autenticación real
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        
        {/* Rutas protegidas */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/admin' element={<Admin />}>
            <Route path='products' element={<Products />} />
            <Route path='users' element={<Users />} />
            <Route path='media' element={<Media />} />
            <Route path='services' element={<Services />} />
            <Route path='settings' element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
