import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../header/header.css'
import { useState } from 'react';
import { NavLink,  } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';




const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.clear(); 
        sessionStorage.clear(); 
    
        window.location.href = '/signin'; 
      };
  
    return (
        <div>

            <nav className="navbar sticky-top navbar-expand-lg bg-light d-flex justify-content-center ">
                <div className="container-fluid">

                    <NavLink className="navbar-brand">
                        <h1>RAYSTORE</h1>
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbarr navbar-collapse" id="navbarNav">
                    <Navbar.Collapse className={isMenuOpen ? 'show' : ''}>
                        <ul className="navbar-nav   d-flex justify-content-md-around ">


                            <li className="nav-item active">
                                <NavLink className="nav-link" aria-current="page" to='/home'>Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to='/signin'>Sign In</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to='/signup'>Sign Up</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" onClick={handleLogout}>Log Out</NavLink>
                            </li>

                        </ul>

                        </Navbar.Collapse>

                    </div>

                </div>

            </nav>
        </div>
    )
}

export default Header