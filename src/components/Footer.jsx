import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { NavHashLink } from "react-router-hash-link";
import "../styles/Footer.css";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/vamsi.cheliboyina", color: "#1877F2" },
    { icon: <FaWhatsapp />, url: "https://wa.me/+918801474749", color: "#25D366" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/vamcvamc0143", color: "#E4405F" }
  ];

  return (
    <motion.footer 
      className="footer-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} className="footer-brand">
            <img
              src="http://res.cloudinary.com/drjmfligo/image/upload/v1719341220/logo66_fylljf.png"
              alt="Vamsi Cine Special Effects"
              className="footer-logo"
            />
            <p className="brand-description">
              Professional special effects services for events and occasions, including cold fires, 
              color smokes, CO2 gas, dry ice, paper blast, and bubble machines.
            </p>
          </Col>

          <Col lg={2} md={6} className="footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li><NavHashLink smooth to="#aboutus">About Us</NavHashLink></li>
              <li><NavHashLink smooth to="#contact">Contact Us</NavHashLink></li>
              <li><NavHashLink smooth to="#">Services</NavHashLink></li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="footer-services">
            <h5>Our Services</h5>
            <ul>
              <li>Cold Fires</li>
              <li>Color Smokes</li>
              <li>CO2 Gas Effects</li>
              <li>Dry Ice Effects</li>
              <li>Paper Blast</li>
              <li>Bubble Machines</li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="footer-contact">
            <h5>Contact Info</h5>
            <div className="contact-info">
              <p><FaMapMarkerAlt /> Ponnamanda village, Konaseema, AP, 533248</p>
              <p><FaPhone /> +91 8801474749</p>
              <p><FaEnvelope /> vamsicinespecialeffects@gmail.com</p>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ "--social-color": social.color }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Vamsi Cine Special Effects. All rights reserved.
          </p>
        </div>
      </Container>
    </motion.footer>
  );
};

export default Footer;
