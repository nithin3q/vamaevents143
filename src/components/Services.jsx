import React from "react";
import { motion } from "framer-motion";
import { NavHashLink } from "react-router-hash-link";
import "../styles/Services.css";

const servicesData = [
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339232/IMG-20240618-WA0002_sndywt.jpg",
    title: "Paper Blast",
    emoji: "🎉",
    text: "Create a festive atmosphere with our paper blast machines, perfect for celebratory moments.",
    color: "#FFD93D"
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339232/IMG-20240618-WA0003_xl0n6a.jpg",
    title: "Co2 Jet Machine",
    emoji: "❄️",
    text: "Cool down the dance floor with our Co2 jet machines, providing an exciting burst of cold air.",
    color: "#4D96FF"
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339233/IMG-20240618-WA0004_h1ofyl.jpg",
    title: "Co2 Smoke Gun",
    emoji: "💨",
    text: "Create an exciting atmosphere with our Co2 smoke guns, perfect for dramatic entrances and dance floor effects.",
    color: "#FF6B6B"
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339234/IMG-20240618-WA0007_pge1b6.jpg",
    title: "Cold Fires",
    emoji: "🔥",
    text: "Safe and stunning, our cold fires provide a spectacular effect without the heat, ideal for indoor events.",
    color: "#4ECDC4"
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339235/IMG-20240618-WA0009_otqmgj.jpg",
    title: "Cold Fire Entry",
    emoji: "✨",
    text: "Make a grand entrance with our cold fire entry machines, creating a memorable and safe visual display.",
    color: "#FF9A8B"
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339219/color_smoke_oxpo6y.jpg",
    title: "Colour Smokes",
    emoji: "🌈",
    text: "Add vibrant colors to your event with our colour smoke machines, perfect for photo shoots and dramatic effects.",
    color: "#A5B4FC"
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339215/bubble_pgwexa.jpg",
    title: "Bubble Machine",
    emoji: "🫧",
    text: "Add vibrant colors to your event with our bubble machines, perfect for photo shoots and dramatic effects.",
    color: "#B5E48C"
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339230/fire_ebzsqx.jpg",
    title: "Sparkle Machine",
    emoji: "⚡",
    text: "Add a touch of magic with our sparkle machines, perfect for creating a stunning visual effect at your event.",
    color: "#FFB703"
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339231/firemachine_gafrzb.jpg",
    title: "Fire Machine",
    emoji: "🔥",
    text: "Enhance your event with our fire machines, creating dramatic flame effects that captivate your audience.",
    color: "#FB5607"
  }
];


const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <h1 className="services-title">
            Our Vibe <span className="emoji-wave">✨</span>
          </h1>
          <p className="services-subtitle">
            Level up your events with these cool effects
          </p>
        </motion.div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ backgroundColor: `${service.color}15` }}
            >
              <div className="service-content">
                <div className="service-emoji">{service.emoji}</div>
                <div className="service-image-wrapper">
                  <img src={service.img} alt={service.title} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-text">{service.text}</p>
                <NavHashLink smooth to="#contact">
                  <motion.button
                    className="book-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ backgroundColor: service.color }}
                  >
                    Get This Vibe
                  </motion.button>
                </NavHashLink>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
