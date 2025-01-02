import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faSearch, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/Equipment.css';

const Equipment = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedEquipment, setSelectedEquipment] = useState(null);
    const images = [
        { src: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339223/equip1_xdypsd.jpg", title: "Event 1", date: "Foam machine", tags: ["TRENDS", "DESIGN"] },
        { src: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339229/equip22_ntgtyo.jpg", title: "Event 2", date: "Co2 LED confetti gun", tags: ["MUSIC"] },
        { src: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339227/equip6_eg2vmx.jpg", title: "Event 3", date: "Dry smoke machine", tags: ["BIRTHDAY"] },
        { src: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339223/equip2_uizibo.jpg", title: "Event 5", date: "Co2 confetti gun", tags: ["WEDDING"] },
        { src: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339224/equip3_lzt4va.jpg", title: "Event 4", date: "Snow fall machine", tags: ["MUSIC"] },
        { src: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339225/equip4_iyet7k.jpg", title: "Event 1", date: "Co2 jet machine", tags: ["MUSIC"] },
        { src: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339227/equip7_wm19mv.jpg", title: "Event 4", date: "Dry ice fog matka", tags: ["WEDDING"] },
        { src: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339228/equip8_xaafj5.jpg", title: "Event 6", date: "Electric blower led confetti", tags: ["WEDDING"] },
        { src: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339229/equip9_psthvs.jpg", title: "Event 9", date: "Jumbo blower confetti", tags: ["WEDDING"] },
    ];
    const imagesToDisplay = showAll ? images : images.slice(0, 3);

    return (
        <motion.div 
            className="equipment-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.div 
                className="equipment-header"
                initial={{ y: -50 }}
                animate={{ y: 0 }}
            >
                <h1><span className="gradient-text">Professional</span> Equipment</h1>
                <p>State-of-the-art event equipment for unforgettable experiences</p>
            </motion.div>

            <div className="equipment-grid">
                {imagesToDisplay.map((item, index) => (
                    <motion.div
                        key={index}
                        className="equipment-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="image-container">
                            <motion.img
                                src={item.src}
                                alt={item.date}
                                whileHover={{ scale: 1.05 }}
                            />
                            <motion.div 
                                className="overlay"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            >
                                <motion.button
                                    className="info-button"
                                    whileHover={{ scale: 1.1 }}
                                    onClick={() => setSelectedEquipment(item)}
                                >
                                    <FontAwesomeIcon icon={faSearch} />
                                </motion.button>
                            </motion.div>
                        </div>
                        <div className="equipment-info">
                            <h3>{item.date}</h3>
                            <div className="specs">
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <span>Professional Grade</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {!showAll && (
                <motion.button
                    className="view-more-btn"
                    onClick={() => setShowAll(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    View More Equipment
                    <motion.span
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <FontAwesomeIcon icon={faArrowDown} />
                    </motion.span>
                </motion.button>
            )}

            <AnimatePresence>
                {selectedEquipment && (
                    <motion.div 
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedEquipment(null)}
                    >
                        <motion.div 
                            className="modal-content"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.5 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <img src={selectedEquipment.src} alt={selectedEquipment.date} />
                            <div className="modal-info">
                                <h2>{selectedEquipment.date}</h2>
                                <p>Professional grade equipment for your events</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Equipment;
