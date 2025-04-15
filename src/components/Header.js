import React from 'react';
import logo from '../images/logo.png';
import rightBanner from '../images/home-right.webp';
import whatsapp from '../images/whatsapp-icon.png'
import cv from '../images/B.sc.pdf'
import About from './About';
// import Service from './Service';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Footer from './Footer';
import GradientText from './GradientText/GradientText';
import FadeContent from './FadeContent/FadeContent';

export default function Header() {

    return (
        <div>
            <header className="header_wrapper">
                <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#fff" }}>
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src={logo} className="img-fluid" alt="logo" /></a>
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
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#services">Services</a>
                                </li> */}
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
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <section id="home" className="banner_wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 order-lg-1 order-2 banner-content">
                                <h2 className="text-uppercase position-relative"><GradientText
                                    colors={["#40ffaa", "#4079ee", "#40ffaa", "#4079ff", "#40ffaa"]}
                                    className="custom-class"
                                >Hello</GradientText></h2>
                                <h1 className="text-uppercase"><GradientText>I am karan</GradientText>
                                </h1>
                                <h5 className="text-uppercase">Full Stack Developer</h5>
                                <div className="mt-5">
                                    <a className="main-btn primary-btn" href="https://wa.me/8287568224">Hire Me <span
                                        className="whatsapp-icon"><img src={whatsapp}
                                            alt="whatsapp-icon" /></span></a>
                                    <a className="main-btn secondary-btn ms-4" href={cv}>Get CV</a>
                                </div>
                            </div>
                            <div className="col-lg-5 order-lg-2 order-1">
                                <div className="top-right-img">
                                    <img src={rightBanner} className="img-fluid" alt="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeContent>
            <About />
            {/* <Service /> */}
            <Portfolio />
            <Blog />
            <Footer />
        </div>
    );
}
