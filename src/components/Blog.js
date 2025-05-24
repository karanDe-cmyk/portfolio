import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blog from '../images/blog/web-design-trends-header-2024.jpg';
import blog1 from '../images/blog/responsive.jpg';
import blog2 from '../images/blog/user.jpg';
import blog3 from '../images/blog/backend.jpg';
import './Blog.css'; // Create this CSS file for custom styles

const blogPosts = [
    {
        id: 1,
        title: "Shared Hosting Limitations",
        image: blog,
        text: "Why shared hosting isn't ideal for React + Node.js applications",
        content: "Shared hosting environments often lack the necessary resources and configuration options needed for modern JavaScript applications. React apps benefit from server-side rendering and Node.js requires specific server configurations that shared hosting typically doesn't support. This article explores the technical limitations and better alternatives for hosting full-stack JavaScript applications."
    },
    {
        id: 2,
        title: "The Importance of Responsive Design",
        image: blog1,
        text: "Why It Matters in Modern Web Development",
        content: "With over 50% of web traffic coming from mobile devices, responsive design is no longer optional. This post covers the core principles of responsive design, including fluid grids, flexible images, and media queries. We'll also discuss how frameworks like Bootstrap and Tailwind CSS can help streamline responsive development."
    },
    {
        id: 3,
        title: "Creating User-Friendly Interfaces",
        image: blog2,
        text: "UX Best Practices for Developers",
        content: "As developers, we often focus on functionality over usability. This article provides practical UX guidelines that developers can implement to create more intuitive interfaces. Topics include proper form design, navigation patterns, loading states, and accessibility considerations that every full-stack developer should know."
    },
    {
        id: 4,
        title: "Backend Development Strategies",
        image: blog3,
        text: "Building Scalable Web Applications",
        content: "Choosing the right backend architecture is crucial for application scalability. We compare monolithic vs. microservices approaches, discuss database optimization techniques, and explore how to design RESTful APIs that stand the test of time. Real-world examples from production applications illustrate these concepts."
    }
];

export default function Blog() {
    const [showModal, setShowModal] = useState(false);
    const [activePost, setActivePost] = useState(null);

    const handleOpenModal = (post) => {
        setActivePost(post);
        setShowModal(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setActivePost(null);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    return (
        <div className="blog-page">
            <section id="blog" className="blog_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2 className="section-title">Developer Blog</h2>
                            <p className="section-subtitle">
                                Insights on full-stack development, web technologies, and best practices.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        {blogPosts.map((post) => (
                            <div className="col-lg-3 col-md-6 mb-4" key={post.id}>
                                <div className="card blog-card h-100 rounded-0 border-0">
                                    <img
                                        src={post.image}
                                        className="card-img-top img-fluid"
                                        alt={post.title}
                                        loading="lazy"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.text}</p>
                                        <p className="card-excerpt">{post.excerpt}</p>
                                    </div>
                                    <div className="card-footer bg-transparent border-0">
                                        <Link
                                            to={`/blog/${post.id}`}
                                            className="btn btn-primary btn-read-more"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>

    );
}