import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Address</h3>
          <p>Unit 2 Pilar Development Center Rose 
          Ave. Pilar Village, Las Piñas 1740</p>

          <h3 className="mt">Opening Hours</h3>
          <p>Monday - Sunday:</p>
          <p>7:00 AM - 11:00 PM</p>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <ul>
            <li><FaFacebookF/> Altitud Coffee Space</li>
            <li><FaInstagram/>  Altitud Coffee Space</li>
            <li><FiMail/>  altitudcoffeespace@gmail.com</li>
            <li><FiPhone/>  09951282815</li>
          </ul>

          <h3 className="mt">For Updates and Promotions</h3>
          <form className="footer-form">
            <input type="email" placeholder="Enter Email Address" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <p>Copyright © Altitud Coffee Space</p>
        <div className="footer-links">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;