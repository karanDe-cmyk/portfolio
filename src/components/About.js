import React, { useState } from 'react'
import cv from '../images/B.sc.pdf'
import about from '../images/about-us.webp'
import js from '../images/js.png'
import nextjs from '../images/Nextjs-logo.svg'
import react from '../images/react.svg'
import webfrontend from '../images/web-fronted.png'
import backend from '../images/backend-coding.png'
import nodejs from '../images/nodejs.svg'
import mongodb from '../images/MongoDB_Logo.svg'
import php from '../images/php.svg'
import express from '../images/express-original.svg'
import mysql from '../images/mysql.png'
import GradientText from './GradientText/GradientText';

export default function About() {

    const [activeTab, setActiveTab] = useState('frontend');

    return (
        <div>
            <section id="about" className="about_wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-4 mb-lg-0" data-aos="fade-right">
                            <img
                                src={about}
                                className="img-fluid"
                                alt="about-us"
                            />
                        </div>
                        <div className="col-lg-5 mb-4 mb-lg-0" data-aos="fade-left">
                            <h3>
                                let's <br />
                                Introduce about <br />
                                myself
                            </h3>
                            <p>
                                I am a full-stack developer with 1 year of experience, skilled
                                in PHP, MySQL, React, Node.js, Express, and MongoDB. I also have
                                experience in UI/UX design with Photoshop. Passionate about
                                building dynamic and responsive web applications, I focus on
                                creating efficient, user-friendly solutions.
                            </p>
                            <a href={cv} className="main-btn primary-btn mt-4">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="row justify-content-center pt-5" data-aos="fade-left">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="row d-flex align-items-center justify-content-center">
                                <GradientText>
                                    <h2 className="text-center mb-3" style={{ fontWeight: "bold", fontSize: "30px" }}>
                                        Technologies I Use for Web Development
                                    </h2>
                                </GradientText>
                                <div className="col-md-12 mb-4 d-flex justify-content-center">
                                    <button className={`tab main-btn primary-btn me-2 px-3 ${activeTab === 'frontend' ? 'active' : ''}`} onClick={() => setActiveTab('frontend')}>
                                        <img src={webfrontend} alt="Web Frontend Icon" style={{ width: '20px', height: '20px' }} className="tab-icon" /> Web Frontend
                                    </button>
                                    <button className={`tab main-btn primary-btn me-2 px-3 ${activeTab === 'backend' ? 'active' : ''}`} onClick={() => setActiveTab('backend')}>
                                        <img src={backend} alt="Backend Icon" style={{ width: '20px', height: '20px' }} className="tab-icon" /> Backend
                                    </button>
                                </div>
                                <div className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                                    {
                                        activeTab === 'frontend' && (
                                            <div className='d-flex gap-3'>
                                                <div className="d-flex responsive gap-3">
                                                    <div className="tech-cards gap-3 d-flex">
                                                        <div className="tech-card">
                                                            <img src={js} alt="JavaScript" />
                                                            <p>JavaScript</p>
                                                        </div>
                                                        <div className="tech-card">
                                                            <img src={nextjs} alt="Next.js" />
                                                            <p>Next.js</p>
                                                        </div>
                                                        <div className="tech-card">
                                                            <img src={react} alt="React.js" />
                                                            <p>React.js</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                    {
                                        activeTab === 'backend' && (
                                            <div className="tech-cards d-flex flex-wrap gap-3">
                                                <div className="d-flex responsive gap-3">
                                                    <div className="tech-card text-center">
                                                        <img width="48" height="48" src={nodejs} alt="Node.js" />
                                                        <p><strong>Node.js</strong></p>
                                                    </div>
                                                    <div className="tech-card text-center">
                                                        <img src={express} alt="Express.js" />
                                                        <p><strong>Express.js</strong></p>
                                                    </div>
                                                    <div className="tech-card text-center">
                                                        <img src={mongodb} alt="MongoDB" />
                                                        <p><strong>MongoDB</strong></p>
                                                    </div>
                                                    <div className="tech-card text-center">
                                                        <img src={mysql} alt="MySQL" />
                                                        <p><strong>MySQL</strong></p>
                                                    </div>
                                                    <div className="tech-card text-center">
                                                        <img width="48" height="48" src={php} alt="PHP" />
                                                        <p><strong>PHP</strong></p>
                                                    </div>
                                                </div>

                                                <div className="d-flex gap-3">


                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="offset-lg-2 col-lg-4 col-md-10">
                            <div className="client-info">
                                <div className="d-flex">
                                    <span className="large">1</span>
                                    <span className="smll">
                                        Year <br />
                                        Working <br />
                                        Experince
                                    </span>
                                </div>
                                <div className="call-now d-flex py-4">
                                    <div>
                                        <span className="fa fa-phone-alt"></span>
                                    </div>
                                    <div className="ms-4">
                                        <p>Call Me Now</p>
                                        <h5>+91 8287568224</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
