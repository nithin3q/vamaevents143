import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faPaperPlane, faHeart } from '@fortawesome/free-solid-svg-icons';
import emailjs from "@emailjs/browser";
import '../styles/Contactus.css';

const Contactus = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({ done: false, error: false });
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: faPhone,
      title: "Ring Us",
      details: "+91 9876543210",
      emoji: "📱",
      color: "#FFD93D"
    },
    {
      icon: faEnvelope,
      title: "Drop a Line",
      details: "info@vamsicine.com",
      emoji: "📧",
      color: "#FF6B6B"
    },
    {
      icon: faLocationDot,
      title: "Find Us",
      details: "Hyderabad, Telangana",
      emoji: "📍",
      color: "#4ECDC4"
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormStatus({ done: false, error: false });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!Object.values(formData).every(Boolean)) {
      setFormStatus({ done: false, error: true, message: "Fill in all the deets!" });
      return;
    }

    emailjs
      .sendForm(
        "service_te7e0vy",
        "template_01u0shk",
        form.current,
        "Up-XYUI4vUWGqymay"
      )
      .then(
        () => {
          setFormStatus({ done: true, error: false, message: "Message sent! We'll get back to you soon! 🚀" });
          form.current.reset();
        },
        () => {
          setFormStatus({ done: false, error: true, message: "Oops! Something went wrong 😅" });
        }
      );
  };

  return (
    <motion.div 
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="contact-header" id="contact">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Let's Connect <span className="emoji-wave">👋</span>
        </motion.h1>
        <p>Slide into our DMs or hit us up the old-school way!</p>
      </div>

      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
        >
          <div className="info-cards">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="info-card"
                whileHover={{ scale: 1.05 }}
                style={{ '--card-color': info.color }}
              >
                <div className="card-emoji">{info.emoji}</div>
                <FontAwesomeIcon icon={info.icon} className="info-icon" />
                <h3>{info.title}</h3>
                <p>{info.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="contact-form"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name *"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="reply_to"
                placeholder="Your Email *"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="What's this about? *"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message *"
                rows="6"
                onChange={handleChange}
              />
            </div>
            
            <motion.button 
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
            </motion.button>

            {formStatus.done && (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {formStatus.message}
              </motion.div>
            )}
            
            {formStatus.error && (
              <motion.div 
                className="error-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {formStatus.message}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contactus;
