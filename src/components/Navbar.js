import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="logo">
        <Link to="/">SkillSnapshot</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/features">Feature</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="login-area">
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
