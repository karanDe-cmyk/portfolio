import React from 'react';
import GradientText from './GradientText/GradientText';

const serviceData = [
    {
        title: "Web Design",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        description: "Custom, responsive website designs that captivate your audience and reflect your brand identity with modern UI/UX principles.",
        tech: ["Figma"]
    },
    {
        title: "Web Development",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        description: "Full-stack development services using cutting-edge technologies like React, Next.js, Node.js, and modern frameworks.",
        tech: ["React", "Next.js", "Node.js"]
    },
    {
        title: "App Development",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        description: "Cross-platform mobile application development with React Native or Flutter for iOS and Android with native performance.",
        tech: ["React Native"]
    },
    {
        title: "Admin Panels",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        description: "Custom admin dashboards with analytics, user management, and business logic tailored to your operational needs.",
        tech: ["MERN Stack", "Material UI"]
    },
    // {
    //     title: "E-Commerce Solutions",
    //     image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    //     description: "Complete online store development with payment gateways, inventory management, and secure checkout systems.",
    //     tech: ["Shopify", "WooCommerce", "Magento"]
    // },
    {
        title: "API Development",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        description: "RESTful and MongoDB API development with proper documentation, authentication, and scalability in mind.",
        tech: ["Node.js", "MYSQL", "MongoDB", "Postman"]
    }
];

export default function Service() {
    return (
        <div className="service-section">
            <section id="services" className="service_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center mb-5 d-flex flex-column align-items-center">
                            <GradientText><h2>FULL STACK DEVELOPMENT SERVICES</h2></GradientText>
                            <p className="service-intro">
                                Comprehensive digital solutions from front-end design to back-end functionality.
                                <br className="d-none d-lg-block" />
                                End-to-end development tailored to your business requirements.
                            </p>
                        </div>

                        {serviceData.map((service, index) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                <div className="card service-card">
                                    <div className="service-image-container">
                                        <img
                                            src={service.image}
                                            className="service-image"
                                            alt={service.title}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="service-title">{service.title}</h5>
                                        <p className="service-description">{service.description}</p>
                                        <div className="tech-stack">
                                            {service.tech.map((tech, i) => (
                                                <span key={i} className="tech-badge">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .service-section {
                    padding: 5rem 0;
                    background: #f8fafc;
                }
                .service_wrapper {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .service-intro {
                    color: #64748b;
                    max-width: 700px;
                    font-size: 1.1rem;
                }
                .service-card {
                    height: 100%;
                    border: none;
                    border-radius: 12px;
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                    background: white;
                }
                .service-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                }
                .service-image-container {
                    height: 200px;
                    overflow: hidden;
                }
                .service-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .service-card:hover .service-image {
                    transform: scale(1.05);
                }
                .card-body {
                    padding: 1.5rem;
                }
                .service-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 0.75rem;
                }
                .service-description {
                    color: #64748b;
                    font-size: 0.95rem;
                    margin-bottom: 1.25rem;
                }
                .tech-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                .tech-badge {
                    background: #e2e8f0;
                    color: #334155;
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    font-weight: 500;
                }
                
                @media (max-width: 768px) {
                    .service-section {
                        padding: 3rem 0;
                    }
                    .service-image-container {
                        height: 160px;
                    }
                }
            `}</style>
        </div>
    )
}