import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/images/logo66.png";
import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
  function openWhatsApp() {
    window.open("https://wa.me/+918801474749", "_blank");
  }

  function openInstagarm() {
    window.open("https://www.instagram.com/vamcvamc0143", "_blank");
  }

  function openFacebook() {
    window.open("https://www.facebook.com/vamsi.cheliboyina", "_blank");
  }
  return (
    <footer className="bg-light text-dark py-5 footer">
      <Container className="footer-w">
        <Row>
          <Col md="3">
            <img
              className="img-fluid"
              width="300"
              height="20"
              src={logo}
              alt="cine special effects"
            />
            {/* <h5>Vamsi Cine Special Effects</h5> */}

            <p>
              We provide services like cold fires, color smokes, CO2 gas, dry
              ice, paper blast, bubble machine, etc., for occasions and events.
            </p>
          </Col>
          <Col md="3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <NavHashLink smooth to="#aboutus">
                  About Us
                </NavHashLink>
              </li>
              <li>
                <NavHashLink smooth to="#contact">
                  Contact us
                </NavHashLink>
              </li>
              <li>
                <NavHashLink smooth to="#">
                  Privacy Policy
                </NavHashLink>
              </li>
            </ul>
          </Col>

          <Col md="3">
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Cold Fires</a>
              </li>
              <li>
                <a href="/">Color Smokes</a>
              </li>
              <li>
                <a href="/">CO2 Gas</a>
              </li>
              <li>
                <a href="/">Dry Ice</a>
              </li>
              <li>
                <a href="/">Paper Blast</a>
              </li>
              <li>
                <a href="/">Bubble Machine</a>
              </li>
            </ul>
          </Col>
          <Col md="3">
            <h5>Location</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Ponnamanda village</a>
              </li>
              <li>
                <a href="/">Konaseema, Andhra Pradesh</a>
              </li>
              <li>
                <a href="/">533248.</a>
              </li>
              <li>
                <a href="tel:+918801474749">+91 8801474749</a>
              </li>
              <li>
                <a href="mailto:vamsicinespecialeffects@gmail.com">
                  vamsicinespecialeffects@gmail.com
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="12" className="d-flex justify-content-center">
            <Button
              variant="outline-light"
              className="mx-2"
              onClick={openFacebook}
            >
              <FaFacebookF />
            </Button>
            <Button
              variant="outline-light"
              className="mx-2"
              onClick={openWhatsApp}
            >
              <FaWhatsapp />
            </Button>
            <Button
              variant="outline-light"
              className="mx-2"
              onClick={openInstagarm}
            >
              <FaInstagram />
            </Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md="12" className="text-center">
            <small>
              &copy; Vamsi Cine Special Effects, 2024. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
