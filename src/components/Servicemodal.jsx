import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavHashLink } from "react-router-hash-link";
import '../styles/Servicemodal.css';

const ServiceModal = ({ isOpen, onClose, service }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={e => e.stopPropagation()}
          >
            <motion.button 
              className="close-button"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
            >
              ×
            </motion.button>

            <div className="modal-image-container ">
              <motion.img 
                src={service.img} 
                alt={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              />
            </div>

            <motion.div 
              className="modal-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className='text-primary'>{service.title}</h2>
              <p className='text-white-50'>{service.text}</p>
              
              <div className="modal-actions">
                <NavHashLink smooth to="#contact">
                  <motion.button 
                    className="book-now-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                  >
                    Book Now
                  </motion.button>
                </NavHashLink>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ServiceModal;
