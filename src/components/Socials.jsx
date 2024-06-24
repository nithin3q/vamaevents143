import React from 'react';
import '../styles/Socials.css';

const Socials = () => {
    function openWhatsApp() {
        window.open('https://wa.me/+918801474749', '_blank');
    }

    function openFacebook() {
        window.open('https://www.facebook.com/vamsi.cheliboyina', '_blank');
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
        </div>
    );
}

export default Socials;
