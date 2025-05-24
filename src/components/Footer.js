import React from 'react'
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle email logic here
        alert("Thank you! We'll be in touch.");
    };

    const icons = [
        { icon: faLinkedin, link: "https://www.linkedin.com/in/karan-kumar-b39319258" },
        { icon: faGithub, link: "https://github.com/karanDe-cmyk" },
        { icon: faInstagram, link: "https://www.instagram.com/_karan.683/" }
    ]

    return (
        <div>
            <section id="contact" className="footer_wrapper mt-3 mt-md-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 letter text-center px-4">
                            <h3 className="text-white">get connected from anywhere</h3>
                            <p className="text-white">
                                Get connected with me. Just drop your email here.
                            </p>

                            <form onSubmit={handleSubmit} className="row g-3 justify-content-center mt-4">
                                <div className="col col-sm-6 col-lg-4">
                                    <input type="email" className="form-control" placeholder="Email Address" required />
                                </div>
                                <div className="col col-auto">
                                    <button type="submit" className="main-btn secondary-btn border-white mb-3">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 text-center">
                            <div className="footer-logo mb-3 mb-md-0">
                                <img src={logo} className="img-fluid" alt="logo" />
                            </div>
                            <div className="my-4 social-icons">
                                <h5>Follow Me</h5>
                                <ul className="list-unstyled d-flex justify-content-center align-items-center">
                                    {icons.map((platform, index) => (
                                        <li key={index}>
                                            <a href={platform.link}>
                                                <FontAwesomeIcon icon={platform.icon} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <p className="footer-text text-center my-2">
                                Copyright © 2024 All rights reserved |
                                <a href={'/'} className="ms-1">Karan</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
