import React, { useState } from 'react';
import ServiceModal from './Servicemodal';
import LoadingAnimation from './LoadingAnimation';
import { NavHashLink } from "react-router-hash-link";
import '../styles/Services.css';
// import fire from '../assets/images/fire.jpg';
// import firemachine from '../assets/images/firemachine.jpg';
// import paperblast from '../assets/images/IMG-20240618-WA0002.jpg';
// import co2jet from '../assets/images/IMG-20240618-WA0003.jpg';
// import co2smokegun from '../assets/images/IMG-20240618-WA0004.jpg';
// import coldfires from '../assets/images/IMG-20240618-WA0007.jpg';
// import coldfireentry from '../assets/images/IMG-20240618-WA0009.jpg';
// import coloursmokes from '../assets/images/color_smoke.jpg';
// import bubblemachine from '../assets/images/bubble.jpg';

const servicesData = [
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339232/IMG-20240618-WA0002_sndywt.jpg",
    title: 'Paper Blast',
    text: 'Create a festive atmosphere with our paper blast machines, perfect for celebratory moments.',
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339232/IMG-20240618-WA0003_xl0n6a.jpg",
    title: 'Co2 Jet Machine',
    text: 'Cool down the dance floor with our Co2 jet machines, providing an exciting burst of cold air.',
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339233/IMG-20240618-WA0004_h1ofyl.jpg",
    title: 'Co2 Smoke Gun',
    text: 'Create an exciting atmosphere with our Co2 smoke guns, perfect for dramatic entrances and dance floor effects.',
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339234/IMG-20240618-WA0007_pge1b6.jpg",
    title: 'Cold Fires',
    text: 'Safe and stunning, our cold fires provide a spectacular effect without the heat, ideal for indoor events.',
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339235/IMG-20240618-WA0009_otqmgj.jpg",
    title: 'Cold Fire Entry',
    text: 'Make a grand entrance with our cold fire entry machines, creating a memorable and safe visual display.',
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339219/color_smoke_oxpo6y.jpg",
    title: 'Colour Smokes',
    text: 'Add vibrant colors to your event with our colour smoke machines, perfect for photo shoots and dramatic effects.',
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339215/bubble_pgwexa.jpg",
    title: 'Bubble Machine',
    text: 'Add vibrant colors to your event with our bubble machines, perfect for photo shoots and dramatic effects.',
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339230/fire_ebzsqx.jpg",
    title: 'Sparkle Machine',
    text: 'Add a touch of magic with our sparkle machines, perfect for creating a stunning visual effect at your event.',
  },
  {
    img: "https://res.cloudinary.com/drjmfligo/image/upload/v1719339231/firemachine_gafrzb.jpg",
    title: 'Fire Machine',
    text: 'Enhance your event with our fire machines, creating dramatic flame effects that captivate your audience.',
  },
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [loadingStates, setLoadingStates] = useState(servicesData.map(() => true));

  const handleImageLoad = (index) => {
    setLoadingStates((prevLoadingStates) => {
      const newLoadingStates = [...prevLoadingStates];
      newLoadingStates[index] = false;
      return newLoadingStates;
    });
  };

  const handleCardClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="col containerss" id="services">
      <div className="cardss h-100 card-body border-0 shadow-sm">
        <h1 className="text-center py-4 text-custom2"><span className="text-custom">Our </span>Services</h1>
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-4 w-100 mx-auto">
          {servicesData.map((service, index) => (
            <div key={index} className="col services-card button-866" onClick={() => handleCardClick(service)}>
              <div className="card service-card h-100 cards">
                {loadingStates[index] && <LoadingAnimation />}
                <img
                  src={service.img}
                  className="card-img-top"
                  alt={service.title}
                  onLoad={() => handleImageLoad(index)}
                  style={{ display: loadingStates[index] ? 'none' : 'block' }}
                />
                <div className="card-body cardbody">
                  <h5 className="card-title">{service.title}</h5>
                  <NavHashLink smooth to="#contact">
                    <button className="button-85" role="button">Book Now</button>
                  </NavHashLink>
                </div>
                <div className="card-hover-description">
                  <p className="card-text">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ServiceModal isOpen={isModalOpen} onClose={handleCloseModal} service={selectedService} />
    </div>
  );
};

export default Services;
