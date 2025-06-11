import React from 'react';
import './../styles/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container col-lg-2 pb-3">

        <div className="footer-links">
          <h4>Pages</h4>
          <ul>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <Link to="https://www.facebook.com/"><FaFacebookF /></Link>
            <Link to="https://x.com/"><FaTwitter /></Link>
            <Link to="https://www.instagram.com/"><FaInstagram /></Link>
            <Link to="https://in.linkedin.com/"><FaLinkedinIn /></Link>
          </div>
        </div>

        <div className="footer-legal">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SkillSnapshot. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
