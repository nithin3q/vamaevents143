import React, { useState, useEffect } from "react";
import ServiceModal from "./Servicemodal";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Services.css";
import { NavHashLink } from "react-router-hash-link";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339232/IMG-20240618-WA0002_sndywt.jpg",
    title: "Paper Blast",
    text: "Create a festive atmosphere with our paper blast machines, perfect for celebratory moments.",
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339232/IMG-20240618-WA0003_xl0n6a.jpg",
    title: "Co2 Jet Machine",
    text: "Cool down the dance floor with our Co2 jet machines, providing an exciting burst of cold air.",
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339233/IMG-20240618-WA0004_h1ofyl.jpg",
    title: "Co2 Smoke Gun",
    text: "Create an exciting atmosphere with our Co2 smoke guns, perfect for dramatic entrances and dance floor effects.",
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339234/IMG-20240618-WA0007_pge1b6.jpg",
    title: "Cold Fires",
    text: "Safe and stunning, our cold fires provide a spectacular effect without the heat, ideal for indoor events.",
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339235/IMG-20240618-WA0009_otqmgj.jpg",
    title: "Cold Fire Entry",
    text: "Make a grand entrance with our cold fire entry machines, creating a memorable and safe visual display.",
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339219/color_smoke_oxpo6y.jpg",
    title: "Colour Smokes",
    text: "Add vibrant colors to your event with our colour smoke machines, perfect for photo shoots and dramatic effects.",
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339215/bubble_pgwexa.jpg",
    title: "Bubble Machine",
    text: "Add vibrant colors to your event with our bubble machines, perfect for photo shoots and dramatic effects.",
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339230/fire_ebzsqx.jpg",
    title: "Sparkle Machine",
    text: "Add a touch of magic with our sparkle machines, perfect for creating a stunning visual effect at your event.",
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339231/firemachine_gafrzb.jpg",
    title: "Fire Machine",
    text: "Enhance your event with our fire machines, creating dramatic flame effects that captivate your audience.",
  },
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
    hover: {
      y: -15,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const handleImageLoad = (index) => {
    setLoadingStates((prevLoadingStates) => {
      const newLoadingStates = [...prevLoadingStates];
      newLoadingStates[index] = false;
      return newLoadingStates;
    });
  };

  const handleCardClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };
  return (
    <section className="services-section" id="services" ref={ref}>
      <motion.div
        className="services-container"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="gradient-text">Our</span> Services
        </motion.h1>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedService(service)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="image-wrapper">
                    <img src={service.img} alt={service.title} />
                    <div className="overlay" />
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <div className="card-back">
                  <p>{service.text}</p>
                  <NavHashLink smooth to="#contact">
                    <motion.button
                      className="book-now-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Book Now
                    </motion.button>
                  </NavHashLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <ServiceModal
          onClose={handleCloseModal}
          isOpen={isModalOpen}
          service={selectedService}
        />
      </motion.div>
    </section>
  );
};

export default Services;
