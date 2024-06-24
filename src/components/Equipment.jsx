import React from 'react';
// import '../styles/Equipment.css';
import image1 from '../assets/images/equip1.jpg';
import image2 from '../assets/images/equip2.jpg';
import image3 from '../assets/images/equip3.jpg';
import image4 from '../assets/images/equip4.jpg';
import image5 from '../assets/images/equip22.jpg';
import image6 from '../assets/images/equip6.jpg';
import image7 from '../assets/images/equip7.jpg';
import image8 from '../assets/images/equip8.jpg';
import image9 from '../assets/images/equip9.jpg';




const Equipment = () => {
    const images = [
        { src: image1, title: "Event 1", date: "Foam machine", tags: ["TRENDS", "DESIGN"] },
        { src: image5, title: "Event 2", date: "Co2 LED confetti gun", tags: ["MUSIC"] },
        { src: image6, title: "Event 3", date: "Dry smoke machine", tags: ["BIRTHDAY"] },
        { src: image2, title: "Event 5", date: "Co2 confetti gun", tags: ["WEDDING"] },
        { src: image3, title: "Event 4", date: "Snow fall machine", tags: ["MUSIC"] },
        { src: image4, title: "Event 1", date: "Co2 jet machine", tags: ["MUSIC"] },
        { src: image7, title: "Event 4", date: "Dry ice fog matka", tags: ["WEDDING"] },
        { src: image8, title: "Event 6", date: "Electric blower led confetti", tags: ["WEDDING"] },
        { src: image9, title: "Event 9", date: "Jumbo blower confetti", tags: ["WEDDING"] },
       
    ];

    return (
        <div className="containerses">
            <h1 className="text-center py-4 text-custom2"><span className="text-custom">Our </span>Equipment</h1>
            <div className="card-columns">
                {images.map((image, index) => (
                    <div key={index} className="card text-white border-0">
                        <div className="position-relative">
                            <img className="video-card" src={image.src} />
                            <div className="card-img-overlay d-flex flex-column justify-content-between align-items-start p-5">
                                <div className="d-flex justify-content-between w-100 mb-3">
                                    <div>
                                        {/* {image.tags.map((tag, idx) => (
                                            <span key={idx} className="badge badge-info mr-2">{tag}</span>
                                        ))} */}
                                    </div>
                                    {/* <a href="javascript://">
                                        <div className="myicoo"></div>
                                    </a> */}
                                </div>
                                <div className="mb-4">
                                    <div className="h3">
                                        {/* <a className="text-white text-decoration-none" href="javascript://">{image.title}</a> */}
                                    </div>
                                </div>
                                <div className="text-light text-light2">{image.date}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Equipment;
