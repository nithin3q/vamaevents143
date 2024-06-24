import React from 'react';
import '../styles/Home.css'; // Assuming you have a CSS file for styling
import img1 from '../assets/images/fireworks.jpg';
import img2 from '../assets/images/smokebomb.jpg';
import img3 from '../assets/images/confetti.jpg';
import { NavHashLink } from "react-router-hash-link";


const Home = () => {
  return (
    <div className='containers' id="home">
      <header>
        {/* Slider */}
        <section className="slider">
          <div id="carouselExampleCaptions" className="carousel slide nithin22" data-bs-ride="carousel">
            <div className="carousel-indicators nithin22">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item ">
                <img src={img1} className="d-block w-100 nithin2" alt="Fireworks" />
                <div className="carousel-caption mb-lg-4">
                  <h1>Perfect Spot for your next event</h1>
                  <p className="d-none d-sm-block">We have an awesome venue. Which is decorated <br /> with colorful lights and
                    many beautiful Craftsmanship.</p>
                    <NavHashLink smooth to="#contact" 
                    className="white-btn py-1 px-2 px-lg-4 py-lg-2">Book Now</NavHashLink>
                </div>
              </div>
              <div className="carousel-item active">
                <img src={img2} className="d-block w-100 nithin2" alt="Smoke Bomb" />
                <div className="carousel-caption mb-lg-4">
                  <h1>Perfect Spot for your Wedding</h1>
                  <p className="d-none d-sm-block">We have an awesome venue. Which is decorated <br /> with colorful lights and
                    many beautiful Craftsmanship.</p>
                    <NavHashLink smooth to="#contact" 
                    className="white-btn py-1 px-2 px-lg-4 py-lg-2">Book Now</NavHashLink>
                </div>
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100 nithin2" alt="Confetti" />
                <div className="carousel-caption mb-lg-4">
                  <h1>Perfect Spot for get together</h1>
                  <p className="d-none d-sm-block">We have an awesome venue. Which is decorated <br /> with colorful lights and
                    many beautiful Craftsmanship.</p>
                    <NavHashLink smooth to="#contact" 
                    className="white-btn py-1 px-2 px-lg-4 py-lg-2">Book Now</NavHashLink>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Home;
