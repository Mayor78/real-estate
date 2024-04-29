import React from 'react'
import { navbar  }from "../styles/navbar.css";

import Mode from './Mode';



const Navbar = () => {
   

    const logo = "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?size=626&ext=jpg"
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img title='Abraham House' src={logo}alt="" />
    <h1 className='name'>Abraham Real Estate</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
            <Mode/>
         
        </li>
      </ul>
      <span className="navbar-text">
       <button className='btn1'>Check More</button>
      </span>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
