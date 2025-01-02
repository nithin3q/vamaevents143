import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from "@emailjs/browser";
// import '../styles/Contactus.css';

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
      title: "Call Us",
      details: "+91 9876543210",
      color: "#4ECDC4"
    },
    {
      icon: faEnvelope,
      title: "Email Us",
      details: "info@vamsicine.com",
      color: "#FF6B6B"
    },
    {
      icon: faLocationDot,
      title: "Visit Us",
      details: "Hyderabad, Telangana",
      color: "#96C93D"
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormStatus({ done: false, error: false });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse.length) {
      setFormStatus({ done: false, error: true, message: "Please verify you're not a robot" });
      return;
    }

    if (!Object.values(formData).every(Boolean)) {
      setFormStatus({ done: false, error: true, message: "Please fill all fields" });
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
          setFormStatus({ done: true, error: false, message: "Message sent successfully!" });
          grecaptcha.reset();
          form.current.reset();
        },
        () => {
          setFormStatus({ done: false, error: true, message: "Failed to send message" });
        }
      );
  };

  return (
    <motion.div 
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="contact-header">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Get In <span className="accent-text">Touch</span>
        </motion.h1>
        <p>Let's create something extraordinary together</p>
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
                <FontAwesomeIcon icon={info.icon} className="info-icon" />
                <h3>{info.title}</h3>
                <p>{info.details}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="contact-image">
            <img 
              src="https://res.cloudinary.com/drjmfligo/image/upload/v1719339220/contact_plwjcw.jpg" 
              alt="Contact Us"
            />
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
                placeholder="Your Name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="reply_to"
                placeholder="Your Email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                onChange={handleChange}
              />
            </div>
            <div className="g-recaptcha" data-sitekey="6LfVv_wpAAAAACsLoZMrLAGadJNUbvUSPjHHsBOV" />
            
            <motion.button 
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
