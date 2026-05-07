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
            <span className="contact__mark">E</span>
            <span>
              <span className="contact__label">Email</span>
              <span className="contact__value">georgesboulos80@gmail.com</span>
            </span>
            <span className="contact__action">Write</span>
          </a>
          <a href="tel:+96171696471" className="contact__item">
            <span className="contact__mark">P</span>
            <span>
              <span className="contact__label">Phone</span>
              <span className="contact__value">+961 71 696 471</span>
            </span>
            <span className="contact__action">Call</span>
          </a>
          <a
            href="http://linkedin.com/in/georges-boulos-167695356"
            className="contact__item contact__item--linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact__mark">In</span>
            <span>
              <span className="contact__label">LinkedIn</span>
              <span className="contact__value">
                linkedin.com/in/georges-boulos-167695356
              </span>
            </span>
            <span className="contact__action">Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
