import React, { useEffect } from 'react';
import '../styles/About.css';
import video1 from '../assets/video/crop2.mp4';
import video2 from '../assets/video/vid2org.mp4';

const About = () => {
  useEffect(() => {
    const containers = document.querySelectorAll('.about-container');

    const options = {
      threshold: 0.1,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;
          const video = container.querySelector('.about-video');
          const text = container.querySelector('.about-description');

          container.style.opacity = '1';
          video.classList.add('slide-in-left');
          text.classList.add('slide-in-right');

          observer.unobserve(container);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    containers.forEach((container) => {
      observer.observe(container);
    });
  }, []);

  return (
    <div id="about1" className="container">
      <h1 className="text-center py-4 text-custom2">
        <span className="text-custom">We </span>Offer
      </h1>

      <div className="about-container">
        <div className="about-video">
          <video className="videoPlayer" src={video1} autoPlay loop muted></video>
        </div>
        <div className="about-description">
          <h2>Wedding Entry Extravaganza</h2>
          <p>
            Experience the magic of a grand wedding entry with spectacular cold fire fireworks and mesmerizing dry ice effects. As the couple makes their way into the venue, the enchanting display of cold fire sparks and the ethereal mist of dry ice create an unforgettable atmosphere, captivating all the guests. This unique celebration element adds a touch of fairy tale charm and elegance to the special occasion, ensuring a moment that will be cherished forever.
          </p>
        </div>
      </div>

      <div className="about-container reverse">
        <div className="about-description">
          <h2>On-Stage Wedding Spectacle</h2>
          <p>
            Experience the breathtaking spectacle of an on-stage wedding celebration enhanced by the vibrant display of background color bomb fireworks and enchanting cold fire effects. As the couple stands center stage, the dynamic bursts of color and the mesmerizing cold fires create a stunning visual backdrop, adding a dramatic and magical touch to the event.This awe-inspiring combination of effects ensures a memorable and visually captivating experience for all attendees, making the special day even more extraordinary.
          </p>
        </div>
        <div className="about-video">
          <video className="videoPlayer" src={video2} autoPlay loop muted></video>
        </div>
      </div>
    </div>
  );
};

export default About;
