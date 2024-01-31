import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../header/header.css'
import { useState } from 'react';
import { NavLink, } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Search from './search';




const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignIn = () => {
        setIsLoggedIn(true);
    };
    const handleSignOut = () => {
        setIsLoggedIn(false);
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.clear();
        sessionStorage.clear();

        window.location.href = '/signin';
    };

    document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll(".nav-link");
        for (const link of navLinks) {
            link.addEventListener("click", function () {
                const navbarToggler = document.querySelector(".navbar-toggler");
                if (navbarToggler.style.display !== "none") {
                    navbarToggler.click();
                }
            });
        }
    });


    return (
        <header>

            <nav className="navbar navs sticky-top navbar-expand-lg d-flex justify-content-center ">
                <div className="container-fluid">

                    <NavLink className="navbar-brand" >
                        <h1>RAYSTORE</h1>
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbarr navbar-collapse" id="navbarNav">
                        <Navbar.Collapse className={isMenuOpen ? 'show' : 'none'}>
                            <ul className="navbar-nav   d-flex justify-content-md-around ">


                                <li className="nav-item active">
                                    <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
                                </li>

                                <li className="nav-item active">
                                    <NavLink className="nav-link" to='/about'>About</NavLink>
                                </li>

                                <li className="nav-item active">
                                    <NavLink className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" to='/store'>Store</NavLink>

                                    <ul class="dropdown-menu">

                                        <li className='drop'><a class="dropdown-item" href="/serums">Serums</a></li>
                                        <li className='drop'><a class="dropdown-item" href="#">Face Wash</a></li>
                                        <li className='drop'><a class="dropdown-item" href="#">Face Cream</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item active">
                                    <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                                </li>

                                {!isLoggedIn &&<li className="nav-item">
                                    <NavLink className="nav-link" onClick={handleSignIn} to='/signin'>Sign In</NavLink>
                                </li>}
                                {/* {!isLoggedIn && <li className="nav-item">
                                    <NavLink className="nav-link" onClick={handleSignOut} to='/signup'>Sign Up</NavLink>
                                </li>}
                               */}

                                <li className='nav-item active'>
                                    <NavLink className="nav-link cart" to="/cart">Cart
                                        <i className='fa fa-shopping-bag shopping' />
                                    </NavLink>
                                </li>
                                {isLoggedIn && <li className="nav-item">
                                    <NavLink className="nav-link" onClick={handleLogout}>Log Out</NavLink>
                                </li>}

                            </ul>

                        </Navbar.Collapse>

                    </div>

                </div>

            </nav>
            <Search />
        </header>

    )
}

export default Header