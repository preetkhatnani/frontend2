import React from "react";
import './Navbar.css';


const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#aboutus">ABOUT US</a></li>
          <li><a href="#features">FEATURES</a></li>
          <li><a href="#testimonials">TESTIMONIALS</a></li>
          <li><a href="#subscription">SUBSCRIPTION</a></li>
          <li><a href="#contactus">CONTACT US</a></li>
          <li><a href="#login">LOGIN</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;