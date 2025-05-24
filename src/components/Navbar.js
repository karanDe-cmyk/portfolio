import React from 'react'
import logo from '../images/logo.png';

export default function Navbar() {
    return (
        <div>
            <header className="header_wrapper">
                <nav className="navbar navbar-expand-md fixed-top navbar-before-scroll shadow" style={{ backgroundColor: "#fff" }}>
                    <div className="container">
                        <a className="navbar-brand" href={'/'}><img src={logo} className="img-fluid" alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
                            <i className="fas fa-stream navbar-toggler-icon"></i>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav menu-navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
