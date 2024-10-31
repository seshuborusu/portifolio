import React from 'react';
// import {a} from "react-router-dom"
// Ensure Bootstrap JS is included
import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark h-25">
                <div className=" container ">
                    <a className="navbar-brand fs-4 fw-bold" href="#">SESHU.com</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarNav" >
                        <div className="navbar-nav  ms-auto d-flex justify-content-end align-items-center w-100 me-5 fs-6 fw-semibold">
                            <li className="nav-item me-3 ">
                                <a className="nav-link navnames" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item abcd me-3">
                                <a className="nav-link navnames" href="#about">About</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link navnames" href="#education">Education</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link navnames" href="" >Projects</a>
                            </li>
                            <li className='nav-item me-2'>
                                <a className='nav-link navnames' href='#contact'>Contact</a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
