import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { NavHashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
                onClick={() => setCurrentSlide(index)}
                aria-current={currentSlide === index}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <AnimatePresence mode='wait'>
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
                  <motion.div 
                    className="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.img 
                    src={slide.image} 
                    className="d-block w-100 hero-image" 
                    alt={slide.title}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 6 }}
                  />
                  <div className="carousel-content">
                    <motion.div
                      className="content-wrapper"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <motion.h2 
                        className="subtitle"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {slide.subtitle}
                      </motion.h2>
                      <motion.h1 
                        className="title"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {slide.title}
                      </motion.h1>
                      <motion.p 
                        className="description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        {slide.description}
                      </motion.p>
                      <motion.div 
                        className="cta-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <NavHashLink smooth to="#contact" className="primary-btn text-decoration-none">
                          Book Now
                        </NavHashLink>
                        <NavHashLink smooth to="#services" className="secondary-btn text-decoration-none">
                          Our Services
                        </NavHashLink>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatePresence>
          
          <div className="carousel-controls">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="carousel-control prev" 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="carousel-control next" 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
