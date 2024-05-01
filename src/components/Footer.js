import React from 'react';
import '../styles/navbar.css';  
import EmailUs from './EmailUs';

const Footer = ({ theme }) => {
  return (
    
    <div className='footer'>
      <div className={`card text-center ${theme === 'light' ? 'light-footer' : 'dark-footer'}`}>
        <div className="card-header">
          About Us
        </div>
        <div className="card-body">
          <h5 className="card-title">Special Time To Check Us</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary"><EmailUs /></a>
        </div>
        <div className={`card-footer ${theme === 'light' ? 'light-footer' : 'dark-footer'}`}>
          Code With Mayor
        </div>
      </div>
    </div>
  
  )
}

export default Footer;
