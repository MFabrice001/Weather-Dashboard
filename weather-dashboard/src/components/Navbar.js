import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Weather Dashboard</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/weather">Weather</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
