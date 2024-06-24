import React from 'react';
import '../styles/Servicemodal.css';
import { NavHashLink } from "react-router-hash-link";


const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={service.img} alt={service.title} className="modal-img" />
        <h2>{service.title}</h2>
        <p>{service.text}</p>
        <NavHashLink  smooth to="#contact" >
              <button className="button-85" role="button" onClick={onClose}>Book Now</button>
              </NavHashLink>
      </div>
    </div>
  );
}

export default ServiceModal;
