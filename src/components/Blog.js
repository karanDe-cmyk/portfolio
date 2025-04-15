import React, {useState} from 'react'
import blog from '../images/blog/web-design-trends-header-2024.jpg'
import blog1 from '../images/blog/responsive.jpg'
import blog2 from '../images/blog/user.jpg'
import blog3 from '../images/blog/backend.jpg'

const blogPosts = [
    {
        title: "Web design trends",
        image: blog,
        text: "The Future of Web Design",
    },
    {
        title: "The Importance of Responsive Design",
        image: blog1,
        text: "Why It Matters",
    },
    {
        title: "Creating a User-Friendly Interface",
        image: blog2,
        text: "Best Practices",
    },
    {
        title: "Backend Development",
        image: blog3,
        text: "Building Scalable Web Applications",
    },
];


export default function Blog() {
    const [showModal, setShowModal] = useState(false);
    const [activePost, setActivePost] = useState(null);

    const handleOpenModal = (post) => {
        setActivePost(post);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setActivePost(null);
    };

    return (
        <div>
            <section id="blog" className="blog_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center mb-5">
                            <h2>BLOG</h2>
                            <p>
                                Here are some engaging topics for a full stack developer{" "}
                                <br className="d-none d-lg-block" />
                                These can help attract readers interested in web development, programming, and technology.<br />
                                provide valuable insights, and position you as an expert in the
                                field.
                            </p>
                        </div>

                        {blogPosts.map((post, index) => (
                            <div className="col-lg-3 col-sm-6 mb-4" key={index}>
                                <div className="card rounded-0 border-0 p-0">
                                    <img src={post.image} className="img-fluid" alt="blog" />
                                    <button type="button" data-toggle="modal" data-target="#exampleModal" className="blog-details btn btn-primary" onClick={() => handleOpenModal(post)}>
                                        <div className="blog_text text-center">
                                            <h5 className="text-white mb-4">{post.title}</h5>
                                            <div className="border_line"></div>
                                            <p className="text-white mb-4">{post.text}</p>
                                        </div>
                                    </button >

                                    {showModal && (
                                        <div className="modal show fade d-block" tabIndex="-1" role="dialog">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">{activePost?.title}</h5>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p className="text-muted">Content coming soon...</p>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
