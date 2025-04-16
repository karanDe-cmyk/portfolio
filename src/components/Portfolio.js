import React, { useState } from 'react'
import portfolio1 from '../images/portfolio/jwt.png'
import portfolio2 from '../images/portfolio/razorpay.jpg'
import portfolio3 from '../images/portfolio/admin.png'
import portfolio4 from '../images/portfolio/portfolio4.webp'
import portfolio5 from '../images/portfolio/portfolio5.webp'
import portfolio6 from '../images/portfolio/portfolio6.webp'
import portfolio7 from '../images/portfolio/portfolio7.webp'
import portfolio8 from '../images/portfolio/portfolio8.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const portfolioTabs = [
    {
        id: "pills-one",
        title: "Popular",
        active: true,
        projects: [
            { image: portfolio1, name: "JWT AUTHENTICATION", video: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7316850499666743296?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe' },
            { image: portfolio2, name: "RAZORPAY INTEGRATION", video: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7318178466539933698?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>'},
            { image: portfolio3, name: "Admin Dashboard" }
        ]
    },
    {
        id: "pills-two",
        title: "Latest",
        active: false,
        projects: [
            { image: portfolio4 },
            { image: portfolio5 },
            { image: portfolio6 }
        ],
    },
    {
        id: "pills-three",
        title: "Working...",
        active: false,
        projects: [
            { image: portfolio7 },
            { image: portfolio8 },
            { image: portfolio3, name: "Admin Dashboard" }
        ]
    }
];

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState("pills-one");
    const [showModal, setShowModal] = useState(false);
    const [activeProject, setActiveProject] = useState(null);

    const handleOpenModal = (project) => {
        setActiveProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setActiveProject(null);
        setShowModal(false);
    };
    return (
        <div>
            <section id="portfolio" className="portfolio_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-left mb-md-5 mb-2">
                            <h2>
                                QUALITY WORK <br /> RECENTLY DONE PROJECT
                            </h2>
                        </div>
                    </div>

                    {/* Tabs */}
                    <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
                        {portfolioTabs.map((tab, index) => (
                            <li className="nav-item" role="presentation" key={tab.id}>
                                <button
                                    className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                                    id={`${tab.id}-tab`}
                                    onClick={() => setActiveTab(tab.id)}
                                    type="button"
                                    role="tab"
                                    aria-controls={tab.id}
                                    aria-selected={activeTab === tab.id}
                                >
                                    {tab.title}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Tab Content */}
                    <div className="tab-content" id="pills-tabContent">
                        {portfolioTabs.map((tab) => (
                            <div
                                key={tab.id}
                                className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""
                                    }`}
                                id={tab.id}
                                role="tabpanel"
                                aria-labelledby={`${tab.id}-tab`}
                            >
                                <div className="row">
                                    {tab.projects.map((project, i) => (
                                        <div className="col-lg-4 col-sm-6" key={i}>
                                            <div className="portfolio-img" onClick={() => handleOpenModal(project)}>
                                                <img
                                                    src={`${project.image}`}
                                                    className="img-fluid w-100"
                                                    alt="portfolio"
                                                />
                                                <div className="overlay">
                                                    <FontAwesomeIcon className="fa fa-plus" icon={faPlus} />
                                                </div>
                                            </div>
                                            <h5 className="mb-0 mt-4">{project.name}</h5>
                                            <p>Portfolio</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {
                showModal && activeProject && (
                    <div className="modal show fade d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{activeProject.name}</h5>
                                </div>
                                <div className="modal-body">
                                    {activeProject.video ? (
                                        <div dangerouslySetInnerHTML={{ __html: activeProject.video }} />
                                    ) : (
                                        <p>No video available for this project.</p>
                                    )}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
