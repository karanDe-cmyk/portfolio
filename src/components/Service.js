import React from 'react'
import mouse from '../images/services-img/mouse.webp'
import seo from '../images/services-img/seo.webp'
import uiux from '../images/services-img/ui-ux.webp'
import website from '../images/services-img/website.webp'
import GradientText from './GradientText/GradientText';

const serviceData = [
    {
        title: "Reels",
        image: mouse,
        description:
            "Cutting, trimming, and organizing raw footage into a cohesive video sequence based on a script or storyboard.",
    },
    {
        title: "Videos",
        image: seo,
        description:
            "Adding transitions (e.g., fade, dissolve) between clips and applying visual effects to make the video more dynamic.",
    },
    {
        title: "Thumbnail",
        image: uiux,
        description:
            "Creating optimized videos for social media with quick cuts, captions, and branding elements.",
    },
    {
        title: "Revision and Feedback",
        image: website,
        description:
            "Working with clients to make revisions based on feedback until the final product meets expectations.",
    },
];

export default function Service() {

    return (
        <div>
            <section id="services" className="service_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center mb-5 d-flex flex-column align-items-center">
                            <GradientText><h2>SERVICES OFFERS</h2></GradientText>
                            <p>
                                Offers a variety of services to enhance and finalize video
                                projects. Here’s a list of common services provided by me{" "}
                                <br className="d-none d-lg-block" />
                                Working with clients to make revisions based on feedback until the
                                final product meets expectations.
                            </p>
                        </div>

                        {serviceData.map((service, index) => (
                            <div className="col-lg-3 col-sm-6 mb-4" key={index}>
                                <div className="card rounded-0 border-0 text-center py-5 px-3">
                                    <div>
                                        <img
                                            src={service.image}
                                            className="img-fluid"
                                            alt={`${service.title}-icon`}
                                        />
                                    </div>
                                    <h5 className="text-uppercase mt-4 mb-3">{service.title}</h5>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}
