import React from 'react'
import{  navbar}  from "../styles/navbar.css";
import EmailUs from './EmailUs'

const Footer = () => {
  return (
    <div className='footer'>
      <div class="card text-center">
  <div class="card-header">
    About Us
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary"><EmailUs/></a>
  </div>
  <div class="card-footer text-body-secondary">
    Code With Mayor
  </div>
</div>
    </div>
  )
}

export default Footer
