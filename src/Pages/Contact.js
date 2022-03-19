import React from 'react'
import pin from '../assets/images/pin.png'
import contact from '../assets/images/contact.png'

function Contact() {
  return (
    <div className="cp-containerr">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9425422395884!2d-0.11394568402796479!3d51.514270118021415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b4a62daeef%3A0x5b0e331a029fcf48!2s7%20Bell%20Yard%2C%20London%20WC2A%202JR%2C%20UK!5e0!3m2!1sen!2sil!4v1646211447046!5m2!1sen!2sil"
          style={{ border: 'none' }}
          allowFullScreen=""
          className="cp-map"
        ></iframe>
      </div>
      <div className="cp-heading">
        <div>
          <h1 className="cp-title">CONTACT</h1>
          <h2 className="cp-subtitle">
            Whatever the question, we would love to hear from you.
          </h2>
        </div>
        <img
          src={contact}
          width="70"
          height="70"
          alt="contact icon"
          className="cp-img"
        />
      </div>
      <div className="cp-header">
        <div>
          <div className="cp-pin-container">
            <h3 className="cp-office margin">Head Office</h3>
            <img src={pin} alt="red marker pin" width="16" height="16" />
          </div>
          <h4 className="margin">7 Bell Yard Street, Holborn</h4>
          <h4 className="margin"> WC2A 2JR</h4>
          <h4 className="margin">London, UK</h4>
          <h3 className="margin">+44 7927 236181</h3>
          <a href="mailto:sales@dataclue.co.uk" className="cp-email margin">
            sales@dataclue.co.uk
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
