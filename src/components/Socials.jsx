import React from 'react';
import '../styles/Socials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
    const handleWhatsApp = (e) => {
        e.preventDefault();
        window.open('https://wa.me/+918801474749', '_blank');
    }

    const handleFacebook = (e) => {
        e.preventDefault();
        window.open('https://www.facebook.com/vamsi.cheliboyina', '_blank');
    }

    const handleInstagram = (e) => {
        e.preventDefault();
        window.open('https://www.instagram.com/vamsi.events', '_blank');
    }

    return (
        <div className="socials-container">
            <a href="#" onClick={handleFacebook} className="icon fb-icon">
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" onClick={handleWhatsApp} className="icon whatsapp-icon">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span className="whatsapp-number">8801474749</span>
            </a>
            <a href="#" onClick={handleInstagram} className="icon instagram-icon">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
    );
}

export default Socials;
