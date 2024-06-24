import React, { useState, useRef } from 'react';
import '../styles/Contactus.css';
import contactus from '../assets/images/contact.jpg';
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
      alert("Please verify that you are not a robot.");
      return;
    }

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          "service_te7e0vy",
          "template_01u0shk",
          form.current,
          "Up-XYUI4vUWGqymay"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            grecaptcha.reset(); // Reset reCAPTCHA after successful submission
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div>
      <section id="contact" className="container mx-auto pt-5 mt-lg-5">
        <h1 className="text-center py-4 text-custom-2">
          <span className="text-custom">Contact</span> us
        </h1>
        <div className="contact row row-cols-1 row-cols-lg-2 g-lg-4 d-flex align-items-center">
          <div className="col contact-image">
            <img className="img-fluid" src={contactus} alt="Contact" />
          </div>
          <div className="col form">
            <form
              name="fantasy-convention-center"
              className="p-3 bulk-order-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                className="p-2 mb-2 w-100 d-block"
                type="text"
                name="from_name"
                id="fullname"
                placeholder="* Enter your Full name..."
                required
                onChange={handleChange}
              />
              <input
                className="p-2 mb-2 w-100 d-block"
                type="text"
                name="sub"
                id="sub"
                placeholder="* Enter your Subject.."
                required
                onChange={handleChange}
              />
              <input
                className="p-2 mb-4 w-100 d-block"
                type="text"
                name="reply_to"
                id="text"
                placeholder="* Enter your E-mail/number"
                required
                onChange={handleChange}
              />
              <textarea
                className="w-100 p-3"
                name="message"
                id="message"
                cols="30"
                rows="8"
                placeholder="* Messages...."
                required
                onChange={handleChange}
              ></textarea>
              <div
                className="g-recaptcha"
                data-sitekey="6LfVv_wpAAAAACsLoZMrLAGadJNUbvUSPjHHsBOV"
              ></div>
              <input className="pink-btn" type="submit" value="Send Message" />
              {done &&
              <span className="done alert alert-success">
                
                  "Thanks for contacting me. Also, if you need me, you can contact me on WhatsApp."
              </span>
              }
              {notDone && (
                <span className="not-done alert alert-danger">
                  Please fill in all the fields.
                </span>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
