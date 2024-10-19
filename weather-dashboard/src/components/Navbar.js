import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Weather Dashboard</h1>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li>
              <Link to="/weather" className="text-white">Weather</Link>
            </li>
            <li>
              <Link to="/signup" className="text-white">Sign Up</Link>
            </li>
            <li>
              <Link to="/about" className="text-white">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
