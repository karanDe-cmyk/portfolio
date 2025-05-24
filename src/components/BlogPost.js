import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const blogPosts = [
    {
        id: 1,
        title: "Shared Hosting Limitations",
        image: require('../images/blog/web-design-trends-header-2024.jpg'),
        text: "Why shared hosting isn't ideal for React + Node.js applications",
        content: [
            "Shared hosting environments often lack the necessary resources and configuration options needed for modern JavaScript applications. React apps benefit from server-side rendering and Node.js requires specific server configurations that shared hosting typically doesn't support.",
            "In this article, we'll explore the technical limitations of shared hosting for modern web applications:",
            "- Limited Node.js and npm support",
            "- No SSH access for proper deployment",
            "- Resource constraints that affect performance",
            "- Lack of environment variable support",
            "We'll also discuss better alternatives like VPS hosting, Platform-as-a-Service options, and serverless architectures that better suit React + Node.js applications."
        ],
        date: "June 15, 2024",
        author: "Your Name",
        tags: ["Hosting", "React", "Node.js"]
    },
    // ... other blog posts with similar structure
];

const categories = ["All", "Technology", "Hosting", "React", "Node.js"];

export default function BlogPost() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const post = id ? blogPosts.find(post => post.id === parseInt(id)) : null;

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeTab === "All" || post.tags.includes(activeTab);
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (post) {
        return (
            <div className="py-4" data-aos="fade-up" style={{ top: '120px', position: 'absolute' }}>
                <div className="mb-4 px-4">
                    <h1>{post.title}</h1>
                    <p className="text-muted">{post.date} • By {post.author}</p>
                    <div className="mb-3">
                        {post.tags.map(tag => (
                            <span className="badge bg-secondary me-2" key={tag}>{tag}</span>
                        ))}
                    </div>
                    <div className="position-relative mb-4 rounded overflow-hidden" style={{ height: '500px' }}>
                        <img
                            src={post.image}
                            alt={post.title}
                            className="img-fluid w-100 h-100"
                            style={{ objectFit: 'cover' }}
                        />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: '#fff',
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}
                        >
                            <div className="d-flex flex-column align-items-center text-white">
                                <h2 className="mb-4">{post.title}</h2>
                                <div className="position-relative w-100" style={{ maxWidth: '500px' }}>
                                    <input
                                        type="search"
                                        className="form-control rounded-pill bg-transparent text-white ps-5 pe-4 border border-light"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <span
                                        className="position-absolute start-0 translate-middle-y ps-3 "
                                        style={{ color: 'white', top: '38%', cursor: 'pointer' }}
                                    >
                                        <Search />
                                    </span>
                                </div>
                                <ul className="nav nav-pills justify-content-center mb-3 gap-2 mt-3">
                                    {categories.map(cat => (
                                        <li className="nav-item" key={cat}>
                                            <button
                                                className={`nav-link px-3 py-2 small fw-medium text-white ${activeTab === cat ? 'active' : ''}`}
                                                onClick={() => setActiveTab(cat)}
                                                style={{
                                                    borderRadius: '50px',
                                                    backdropFilter: 'blur(6px)',
                                                    backgroundColor: activeTab === cat ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                                    transition: 'all 0.3s ease',
                                                    fontSize: '0.9rem',
                                                }}
                                            >
                                                {cat}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </div>
                    </div>
                    <h2>{post.text}</h2>
                    <div className="post-content px-md-3">
                        {post.content.map((para, i) => {
                            // Check if it’s a bullet point (starts with "-")
                            if (para.trim().startsWith("-")) {
                                return (
                                    <div key={i} className="d-flex align-items-start mb-2">
                                        <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                                        <p className="mb-1 text-dark">{para.replace(/^- /, '')}</p>
                                    </div>
                                );
                            } else {
                                return (
                                    <p key={i} className="text-secondary fs-6 mb-3">
                                        <i className="fas fa-angle-double-right me-2 text-primary"></i>
                                        {para}
                                    </p>
                                );
                            }
                        })}
                    </div>

                    <a href="/blog" className="btn btn-outline-secondary mt-3">← Back to Blog</a>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-listing">
            {/* Banner Section */}
            <div className="bg-dark text-white py-5">
                <div className=" text-center">
                    <h2 className="mb-3">Explore Our Blog</h2>
                    <input
                        type="text"
                        placeholder="Search blog posts..."
                        className="form-control w-50 mx-auto mb-4"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Blog Cards */}
            <div className=" py-5">
                <div className="row">
                    {filteredPosts.map(post => (
                        <div className="col-md-4 mb-4" key={post.id} data-aos="fade-up">
                            <div className="card h-100 shadow-sm">
                                <img src={post.image} className="card-img-top" alt={post.title} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text text-muted">{post.date}</p>
                                    <p className="card-text">{post.text}</p>
                                    <a href={`/blog/${post.id}`} className="btn btn-primary mt-auto">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                    {filteredPosts.length === 0 && (
                        <div className="text-center">
                            <p>No blog posts found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}