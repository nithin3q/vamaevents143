import React, { useState } from 'react';
// import image1 from '../assets/images/equip1.jpg';
// import image2 from '../assets/images/equip2.jpg';
// import image3 from '../assets/images/equip3.jpg';
// import image4 from '../assets/images/equip4.jpg';
// import image5 from '../assets/images/equip22.jpg';
// import image6 from '../assets/images/equip6.jpg';
// import image7 from '../assets/images/equip7.jpg';
// import image8 from '../assets/images/equip8.jpg';
// import image9 from '../assets/images/equip9.jpg';
import LoadingAnimation from './LoadingAnimation';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Equipment = () => {
    const [showAllImages, setShowAllImages] = useState(false);
    const [loadingStates, setLoadingStates] = useState(new Array(9).fill(true));

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

    const imagesToDisplay = showAllImages ? images : images.slice(0, 3);

    const handleImageLoad = (index) => {
        setLoadingStates((prevLoadingStates) => {
            const newLoadingStates = [...prevLoadingStates];
            newLoadingStates[index] = false;
            return newLoadingStates;
        });
    };

    return (
        <div className="containerses">
            <h1 className="text-center py-4 text-custom2"><span className="text-custom">Our </span>Equipment</h1>
            <div className="card-columns">
                {imagesToDisplay.map((image, index) => (
                    <div key={index} className="card text-white border-0">
                        <div className="position-relative">
                            {loadingStates[index] && <LoadingAnimation />}
                            <img
                                className="video-card"
                                src={image.src}
                                alt={image.title}
                                onLoad={() => handleImageLoad(index)}
                                style={{ display: loadingStates[index] ? 'none' : 'block' }}
                            />
                            <div className="card-img-overlay d-flex flex-column justify-content-between align-items-start p-5">
                                <div className="mb-4">
                                    {/* <div className="h3">{image.title}</div> */}
                                </div>
                                <div className="text-light text-light2">{image.date}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {!showAllImages && (
                <div className="text-center my-4">
                    <button 
                        className="btn btn-primarys" 
                        onClick={() => setShowAllImages(true)}
                    >
                        Show All <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Equipment;
