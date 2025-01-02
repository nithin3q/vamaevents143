import React, { useEffect } from "react";
import "../styles/About.css";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const containers = document.querySelectorAll(".about-container");
    // Add to existing useEffect
    const fadeInOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    };

    const options = {
      threshold: 0.1,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;
          const video = container.querySelector(".about-video");
          const text = container.querySelector(".about-description");

          container.style.opacity = "1";
          video.classList.add("slide-in-left");
          text.classList.add("slide-in-right");

          observer.unobserve(container);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    containers.forEach((container) => {
      observer.observe(container);
    });
  }, []);
  const { scrollYProgress } = useScroll();
const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div id="about1" className="container container-about">
      <h1 className="text-center py-4 text-custom2 bg-white">
        <span className="gradient-text ">Creating Magical Moments</span> 
      </h1>

      <div className="about-container">
        <div className="about-video">
          <video
            className="videoPlayer"
            src="https://res.cloudinary.com/drjmfligo/video/upload/v1719312787/crop2_pxjahe.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="about-description bg-white">
          <h2>Wedding Entry Extravaganza</h2>
          <p>
            Experience the magic of a grand wedding entry with spectacular cold
            fire fireworks and mesmerizing dry ice effects. As the couple makes
            their way into the venue, the enchanting display of cold fire sparks
            and the ethereal mist of dry ice create an unforgettable atmosphere,
            captivating all the guests. This unique celebration element adds a
            touch of fairy tale charm and elegance to the special occasion,
            ensuring a moment that will be cherished forever.
          </p>
          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <span className="highlight-icon">🎭</span>
            <h4>Dramatic Entrances</h4>
          </motion.div>
        </div>
      </div>
      <motion.div className="feature-cards" variants={containerVariants}>
        {[
          {
            title: "Spectacular Effects",
            description:
              "Create unforgettable moments with our premium special effects",
            icon: "✨",
          },
          {
            title: "Professional Team",
            description:
              "Expert technicians ensuring safe and stunning displays",
            icon: "👥",
          },
          {
            title: "Custom Solutions",
            description:
              "Tailored effects packages for your unique celebration",
            icon: "🎯",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="about-container reverse">
        <div className="about-description bg-white">
          <h2>On-Stage Wedding Spectacle</h2>
          <p>
            Experience the breathtaking spectacle of an on-stage wedding
            celebration enhanced by the vibrant display of background color bomb
            fireworks and enchanting cold fire effects. As the couple stands
            center stage, the dynamic bursts of color and the mesmerizing cold
            fires create a stunning visual backdrop, adding a dramatic and
            magical touch to the event.This awe-inspiring combination of effects
            ensures a memorable and visually captivating experience for all
            attendees, making the special day even more extraordinary.
          </p>
          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <span className="highlight-icon">✨</span>
            <h4>Spectacular Effects</h4>
          </motion.div>
        </div>
        <div className="about-video">
          <video
            className="videoPlayer"
            src="https://res.cloudinary.com/drjmfligo/video/upload/v1719312883/vid2org_ph1bdg.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </div>
  );
};

export default About;
