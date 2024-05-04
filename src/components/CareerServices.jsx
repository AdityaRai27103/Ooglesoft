import React from 'react'
import careerabout from '../assets/hero-career-about.jpg'
import icon1 from '../assets/service-icon-1.svg'
import icon2 from '../assets/service-icon-2.svg'
import icon3 from '../assets/service-icon-3.svg'
import icon4 from '../assets/service-icon-4.svg'
import icon5 from '../assets/hwd-icon-4.svg'
import icon6 from '../assets/service-icon-6.svg'
import icon7 from '../assets/service-icon-7.svg'
import icon8 from '../assets/service-icon-8.svg'
import icon9 from '../assets/service-icon-9.svg'
import icon10 from '../assets/service-icon-5.svg'



function CareerServices() {
    return (
        <>
            <section className="company-service-area career-service-area">
                <div className="custom-container">
                    <div className="hero-service-about">
                        <img src={careerabout} alt="Service About" />
                        <div className="hero-service-about-body">
                            <p>Our team is a collective force of top talents, pros, experts, and visionaries from diverse fields. With a passion for excellence, our professionals bring a wealth of experience and knowledge to every project. At Slack, we are committed to delivering nothing short of excellence. From concept to implementation, we maintain the highest standards of quality and craftsmanship, leaving no room for compromise.</p>
                            <ul>
                                <li>
                                    <i className="las la-check"></i> Managed Services and Products
                                </li>
                                <li>
                                    <i className="las la-check"></i> Flexibility and Adaptability
                                </li>
                                <li>
                                    <i className="las la-check"></i> Competitive Advantage
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- Service Area --> */}
            <section className="service-area service-black-area">
                <div className="custom-container">
                    <div className="service-section-header section-header d-flex align-items-end justify-content-between">
                        <div className="left">
                            <h5 className="section-subtitle">WHAT WE’RE OFFERING</h5>
                            <h1 className="section-title">Dealing in all professional <br />IT services.</h1>
                        </div>
                        <p>One fundamental aspect of IT services is infrastructure management. This involves the design,
                            implementation, and maintenance of the hardware, software, networks, and servers.</p>
                    </div>

                    <div className="services-list">
                        <div className="service-card simple-shadow">
                            <img src={icon1} alt="Service Icon" className="service-icon" />
                            <h3><a href="#">Development</a></h3>
                            <p>Our development is pixel perfect in all ways.</p>
                        </div>
                        <div className="service-card simple-shadow">
                            <img src={icon2} alt="Service Icon" className="service-icon" />
                            <h3><a href="#">Woo Commerce</a></h3>
                            <p>We have a best team for your shopping websites.</p>
                        </div>
                        <div className="service-card simple-shadow">
                            <img src={icon3} alt="Service Icon" className="service-icon" />
                            <h3><a href="#">CRM Solutions</a></h3>
                            <p>We enhance customer experiences for success.</p>
                        </div>
                        <div className="service-card simple-shadow">
                            <img src={icon4} alt="Service Icon" className="service-icon" />
                            <h3><a href="#">Web Design</a></h3>
                            <p>We create vibrant, intuitive and minimalist web</p>
                        </div>
                        <div className="service-card simple-shadow">
                            <img src={icon6} alt="Service Icon" className="service-icon" />
                            <h3><a href="#">Hardware Services</a></h3>
                            <p>We offers expert assistance
                                for your IT issues.</p>
                        </div>
                        <div className="service-card simple-shadow">
                            <img src={icon5} alt="Service Icon" className="service-icon" />
                            <h3><a href="#">Cloud Services</a></h3>
                            <p>we can provide all around
                                the world.</p>
                        </div>
                        <div className="service-card simple-shadow">
                            <img src={icon7} alt="Service Icon" className="service-icon" />
                            <h3><a href="#">Network Security</a></h3>
                            <p>We have a best team for your shopping websites.</p>
                        </div>
                        <div className="service-card simple-shadow">
                            <img src={icon8} alt="Service Icon" className="service-icon" />
                            <h3><a href="#">Monitoring</a></h3>
                            <p>We enhance customer
                                experiences for success.</p>
                        </div>
                        <div className="service-card simple-shadow">
                            <img src={icon9} alt="Service Icon" className="service-icon" />
                            <h3><a href="#">Email Services</a></h3>
                            <p>We create vibrant, intuitive
                                and minimalist web</p>
                        </div>
                        <div className="service-card simple-shadow">
                            <span className="service-badge">Free!</span>
                            <img src={icon10} alt="Service Icon" className="service-icon" />
                            <h3><a href="#">IT Support</a></h3>
                            <p>We offers expert assistance for your IT issues.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CareerServices