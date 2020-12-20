import React, { useEffect } from 'react'
import '../../styles/services.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {

    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    }, [])

    return (
        <div className="service-container" id="services">

            <div className="service-head">
                <h4>Our Services</h4>
            </div>

            <div className="service-grid">

                <div className="service-card-container">
                    <div data-aos="slide-up" className="service-card">
                            
                        <div className="card-header">
                            <h4>Card Header</h4>
                        </div>

                        <div className="card-body">
                            <p>Card Body</p>
                        </div>

                        <div className="card-btn">
                            <p>Know more</p>
                        </div>
                            
                    </div>
                </div>

                    <div className="service-card-container">
                        <div data-aos="flip-up" className="service-card">
                            
                            <div className="card-header">
                                <h4>Card Header</h4>
                            </div>

                            <div className="card-body">
                                <p>Card Body</p>
                            </div>

                            <div className="card-btn">
                                <p>Know more</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="service-card-container">
                        <div data-aos="slide-up" className="service-card">
                            
                            <div className="card-header">
                                <h4>Card Header</h4>
                            </div>

                            <div className="card-body">
                                <p>Card Body</p>
                            </div>

                            <div className="card-btn">
                                <p>Know more</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="service-card-container">
                        <div data-aos="slide-up" className="service-card">
                            
                            <div className="card-header">
                                <h4>Card Header</h4>
                            </div>

                            <div className="card-body">
                                <p>Card Body</p>
                            </div>

                            <div className="card-btn">
                                <p>Know more</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="service-card-container">
                        <div data-aos="flip-up" className="service-card">
                            
                            <div className="card-header">
                                <h4>Card Header</h4>
                            </div>

                            <div className="card-body">
                                <p>Card Body</p>
                            </div>

                            <div className="card-btn">
                                <p>Know more</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="service-card-container">
                        <div data-aos="slide-up" className="service-card">
                            
                            <div className="card-header">
                                <h4>Card Header</h4>
                            </div>

                            <div className="card-body">
                                <p>Card Body</p>
                            </div>

                            <div className="card-btn">
                                <p>Know more</p>
                            </div>
                            
                        </div>
                    </div>

            </div>
        </div>
    );
}

export default Services