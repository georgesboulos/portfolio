import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <span className="section-label">03. Contact</span>
        <h2 className="section-title">
          Let’s Create <em>Something Great</em>
        </h2>
        <div className="contact__links">
          <a href="mailto:georgesboulos80@gmail.com" className="contact__item">
            <span className="contact__label">Email</span>
            <span className="contact__value">georgesboulos80@gmail.com</span>
          </a>
          <a href="tel:+96171696471" className="contact__item">
            <span className="contact__label">Phone</span>
            <span className="contact__value">+961 71 696 471</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
