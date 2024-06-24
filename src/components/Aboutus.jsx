import React from 'react';
import '../styles/AboutUs.css'; 
import servicesImg from '../assets/images/visitingcard11.jpg';

const AboutUs = () => {
  return (
    <div id="aboutus" className="about-us-container">
      <h1 className="text-center py-4 text-custom2">
        <span className="text-custom">About </span>Us
      </h1>
      <div className="about-us-content">
        <div className="about-us-description">
          <h2>Welcome to Vamsi Cine Special Effects</h2>
          <p>
            Founded in 2019, Vamsi Cine Special Effects has been a pioneer in providing exceptional special effects services across India. Our expertise spans a wide range of effects.
          </p>
          <p>
            Our commitment to innovation and safety has made us a trusted name in the industry. We strive to bring the magic of cinema to your special moments, creating spectacular visual experiences that captivate and delight audiences.
          </p>
          <p>
            From weddings and corporate events to concerts and parties, Vamsi Cine Special Effects is dedicated to making your events extraordinary. Join us on a journey of creativity and wonder, and let us transform your visions into reality.
          </p>
        </div>
        <div className="about-us-image visitingcard">
          <img src={servicesImg} alt="Our Services" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
