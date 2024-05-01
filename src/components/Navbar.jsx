import React from 'react';
import '../styles/navbar.css'; // Import CSS file using a regular import statement
import { MdNightlight } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";

const Navbar = ({ toggleTheme, theme }) => {


   
    const logo = "https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?size=626&ext=jpg";

    return (
        <div className={`Navbar ${theme === 'light' ? 'light-navbar' : 'dark-navbar'}`}>
            <nav className="navbar navbar-expand-lg bg-whitesmoke">
                <div className="container-fluid">
                    <img title='Abraham House' src={logo} alt="" />
                    <h1 className="name">Abraham Real Estate</h1>
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
                        </ul>
                        <span className="nav">
                        <button onClick={toggleTheme}>
                                {theme === 'light' ? <MdNightlight /> : <IoMdSunny />}
                            </button>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
