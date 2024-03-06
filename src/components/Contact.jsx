import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact"> 
      <div className="container">
        <h1>Contact Me</h1>
        <p>
          For more details
          
        </p>
        <div className="contact-info">
          <div className="contact-details">
            <img src="assets/mobile.png" />
            <a href="tel:6479161309">+44 7833812122</a>
          </div>
          <div className="contact-details">
            <img src="assets/email.png" />
            <a href="mailto:mariamaihong1309@gmail.com">
              msavinsonu@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
