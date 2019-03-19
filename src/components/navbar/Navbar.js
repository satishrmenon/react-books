import React from 'react';
import './Navbar.scss';
import logo  from '../../logo.png';
export default () => {
  return (
    <nav className="navbar">
    <img src={logo} alt="logo" className="logoimg"/>
    <ul className="nav-links">
      <li><a href="/" className="nav-link">Home</a></li>    
      <li><a href="/About" className="nav-link">About</a></li>
      
      <li><a href="/Books" className="nav-link active">Books</a></li>
      </ul>

    </nav>
      
    
  )
}
