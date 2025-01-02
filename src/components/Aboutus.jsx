import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faAward, faUsers, faMagic, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/AboutUs.css';

const AboutUs = () => {
  const achievements = [
    { icon: faClock, number: "5+", text: "Years Experience", color: "#FF6B6B" },
    { icon: faAward, number: "500+", text: "Events Completed", color: "#4ECDC4" },
    { icon: faUsers, number: "1000+", text: "Happy Clients", color: "#45B7D1" },
    { icon: faMagic, number: "50+", text: "Special Effects", color: "#96C93D" }
  ];

  const features = [
    "Professional Special Effects Equipment",
    "Customized Event Solutions",
    "Expert Technical Team",
    "24/7 Support Service",
    "Safety-First Approach",
    "Nationwide Coverage"
  ];

  return (
    <div className="about-wrapper">
      <motion.div 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="hero-content">
          <motion.h1 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
          >
            <span className="gradient-text">Transforming</span> Events Into 
            <span className="gradient-text"> Extraordinary</span> Experiences
          </motion.h1>
          <p className="hero-subtitle">Since 2019</p>
          
        </div>
      </motion.div>

      <div className="about-main">
        <div className="content-section">
          <motion.div 
            className="text-section"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
          >
            <h2>Welcome to Vamsi Cine Special Effects</h2>
            <p className="lead-text">
            From weddings and corporate events to concerts and parties, Vamsi Cine Special Effects is dedicated to making your events extraordinary. Join us on a journey of creativity and wonder, and let us transform your visions into reality.</p>
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="image-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            
            <img 
              src="https://res.cloudinary.com/drjmfligo/image/upload/v1719341122/visitingcard11_j3gfll.jpg" 
              alt="Vamsi Cine Special Effects"
            />
            <p className='mt-1'>Founded in 2019, Vamsi Cine Special Effects has been a pioneer in providing exceptional special effects services across India. Our expertise spans a wide range of effects.</p>
            <p>
            Our commitment to innovation and safety has made us a trusted name in the industry. We strive to bring the magic of cinema to your special moments, creating spectacular visual experiences that captivate and delight audiences.
          </p>
          </motion.div>
        </div>

        <div className="achievements-section">
          {achievements.map((item, index) => (
            <motion.div 
              key={index}
              className="achievement-card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              style={{ '--accent-color': item.color }}
            >
              <FontAwesomeIcon icon={item.icon} className="achievement-icon" />
              <h3>{item.number}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
