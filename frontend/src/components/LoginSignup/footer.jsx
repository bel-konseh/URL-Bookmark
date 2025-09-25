import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="brand">
          <h3>BookmarkHub</h3>
          <p>Organize your web favorites</p>
        </div>

        
        <div className="links">
          <a href="#">About</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </div>
        <div className="copy">
          © 2024 BookmarkHub
        </div>
      </div>
    </footer>
  );
};

export default Footer;
