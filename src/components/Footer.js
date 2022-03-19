import React from 'react'
import privacyPolicy from '../assets/files/PrivacyPolicy.pdf'
import termsAndConditions from '../assets/files/TermsConditions.pdf'
import img from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="contact-information">
          <img src={img} alt="dataclue logo" />
        </div>
        <div className="legal-information">
          <div className="policies">
            <a href={privacyPolicy} className="policy-link" download>
              PRIVACY POLICY
            </a>
            <span className="dot">&bull;</span>
            <a href={termsAndConditions} className="policy-link" download>
              TERMS AND CONDITIONS
            </a>
            <span className="dot">&bull;</span>
            <Link to="/attributions" className="policy-link">
              ATTRIBUTIONS
            </Link>
            <span className="dot">&bull;</span>
            <Link to="/contact" role="button" className="policy-link">
              CONTACT
            </Link>
          </div>
          <h1 className="all-rights-reserved">
            © 2022 DataClue UK, all rights reserved.
          </h1>
        </div>
      </footer>
    </>
  )
}

export default Footer
