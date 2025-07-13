import React from 'react';
import '../styles/Socials.css';

const Socials = () => {
    function openWhatsApp() {
        window.open('https://wa.me/+918801474749', '_blank');
    }

    function openFacebook() {
        window.open('https://www.facebook.com/vamsi.cheliboyina', '_blank');
    }

    function openInstagram() {
        window.open('https://www.instagram.com/vamsi.events', '_blank');
    }

    return (
        <div className="socials-container">
            <div className="icon fb-icon" onClick={openFacebook}>
                <i className="fab fa-facebook-f"></i>
            </div>
            <div className="icon whatsapp-icon" onClick={openWhatsApp}>
                <i className="fab fa-whatsapp"></i>
                <span className="whatsapp-number">8801474749</span>
            </div>
            <div className="icon instagram-icon" onClick={openInstagram}>
                <i className="fab fa-instagram"></i>
            </div>
        </div>
    );
}

export default Socials;
