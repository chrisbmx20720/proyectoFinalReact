import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {

  
  return (
    <div className ="container w-100">
      

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/" className="nav-link" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">Register</Link>
        </li>
  
      </ul>
    </div>
  </nav>
    </div>
  );
}
