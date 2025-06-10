import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import '../styles/Equipment.css';

const Equipment = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedEquipment, setSelectedEquipment] = useState(null);
    const [likes, setLikes] = useState({});

    const equipment = [
        {
            img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339223/equip1_xdypsd.jpg",
            name: "Foam Machine",
            tag: "#FoamParty",
            description: "Turn up the vibes with epic foam effects! 🌊",
            price: "Starting from ₹999/hr"
        },
        {
            img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339229/equip22_ntgtyo.jpg",
            name: "LED Confetti Gun",
            tag: "#PartyPop",
            description: "Light up the night with glowing confetti! ✨",
            price: "Starting from ₹799/hr"
        },
        {
            img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339227/equip6_eg2vmx.jpg",
            name: "Smoke Machine",
            tag: "#SmokeVibes",
            description: "Create that dreamy aesthetic for your pics 💨",
            price: "Starting from ₹699/hr"
        },
        {
            img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339223/equip2_uizibo.jpg",
            name: "CO2 Gun",
            tag: "#CoolVibes",
            description: "Instant cool factor for your event! ❄️",
            price: "Starting from ₹899/hr"
        },
        {
            img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339224/equip3_lzt4va.jpg",
            name: "Snow Machine",
            tag: "#WinterMagic",
            description: "Make it snow anywhere, anytime! ⛄",
            price: "Starting from ₹1299/hr"
        },
        {
            img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339225/equip4_iyet7k.jpg",
            name: "CO2 Jet",
            tag: "#CoolBlast",
            description: "Festival vibes on demand! 🎪",
            price: "Starting from ₹1499/hr"
        },
        {
            img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339227/equip7_wm19mv.jpg",
            name: "Fog Matka",
            tag: "#DesiCool",
            description: "Traditional meets trendy! 🪔",
            price: "Starting from ₹599/hr"
        },
        {
            img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339228/equip8_xaafj5.jpg",
            name: "LED Blower",
            tag: "#GlowUp",
            description: "Glow different with LED effects! 💫",
            price: "Starting from ₹899/hr"
        },
        {
            img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339229/equip9_psthvs.jpg",
            name: "Jumbo Blower",
            tag: "#BigVibes",
            description: "Go big or go home! 🌪️",
            price: "Starting from ₹1199/hr"
        }
    ];

    const toggleLike = (index) => {
        setLikes(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const equipmentToShow = showAll ? equipment : equipment.slice(0, 6);

    return (
        <div className="equipment-container" id="equipment">
            <motion.div 
                className="equipment-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h1>Our Equipment <span className="sparkle">✨</span></h1>
                <p>Swipe through our trending party gear</p>
            </motion.div>

            <div className="equipment-grid">
                {equipmentToShow.map((item, index) => (
                    <motion.div
                        key={index}
                        className="equipment-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="card-image">
                            <img src={item.img} alt={item.name} />
                            <div className="card-overlay">
                                <motion.button
                                    className={`like-btn ${likes[index] ? 'liked' : ''}`}
                                    onClick={() => toggleLike(index)}
                                    whileTap={{ scale: 1.2 }}
                                >
                                    <FontAwesomeIcon icon={faHeart} />
                                </motion.button>
                                <motion.button
                                    className="share-btn"
                                    whileTap={{ scale: 1.2 }}
                                >
                                    <FontAwesomeIcon icon={faShare} />
                                </motion.button>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>{item.name}</h3>
                            <span className="tag">{item.tag}</span>
                            <p>{item.description}</p>
                            <div className="price">{item.price}</div>
                            <motion.button 
                                className="book-now"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book Now
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {!showAll && (
                <motion.button
                    className="load-more"
                    onClick={() => setShowAll(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    See More Equipment
                    <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
                </motion.button>
            )}
        </div>
    );
}

export default Equipment;
