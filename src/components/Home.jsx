import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://res.cloudinary.com/drjmfligo/image/upload/v1719338380/fireworks_a3ivuf.jpg",
      title: "Create Unforgettable Moments",
      subtitle: "Perfect Venue for Your Next Event",
      description: "Transform your special occasions into magical experiences with our stunning venue and premium services."
    },
    {
      image: "https://res.cloudinary.com/drjmfligo/image/upload/v1719338391/smokebomb_vyvhvq.jpg",
      title: "Dream Wedding Destination",
      subtitle: "Where Love Stories Begin",
      description: "Elegant spaces, exceptional service, and breathtaking details to make your wedding day truly spectacular."
    },
    {
      image: "https://res.cloudinary.com/drjmfligo/image/upload/v1719338369/confetti_tvikwn.jpg",
      title: "Celebrate Together",
      subtitle: "Perfect for Gatherings",
      description: "Create lasting memories in our versatile spaces designed for celebrations of all sizes."
    }
  ];

  return (
    <div className='home-container' id="home">
      <div className="hero-section">
        <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#eventCarousel"
                data-bs-slide-to={index}
                className={currentSlide === index ? 'active' : ''}
                aria-current={currentSlide === index}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
                <div className="overlay"></div>
                <img src={slide.image} className="d-block w-100 hero-image" alt={slide.title} />
                <div className="carousel-content">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="content-wrapper"
                  >
                    <h2 className="subtitle">{slide.subtitle}</h2>
                    <h1 className="title">{slide.title}</h1>
                    <p className="description">{slide.description}</p>
                    <div className="cta-buttons ">
                      <NavHashLink smooth to="#contact" className="primary-btn text-decoration-none">Book Now</NavHashLink>
                      <NavHashLink smooth to="#services" className="secondary-btn text-decoration-none">Our Services</NavHashLink>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            <button className="carousel-control prev" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control next" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
