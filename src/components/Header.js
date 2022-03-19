import React from 'react'
import video from '../assets/videos/video1.mp4'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <section className="header">
      <div className="header__background">
        <video autoPlay loop muted playsInline>
          <source src={video} />
        </video>
      </div>
      <div className="header__text-container">
        <h1 className="header__title">
        Where Aspiration Meets Innovation
        </h1>
        <h2 className="header__subtitle">
          Helping clients who challenge themselves to be exceptional, ambitious
          and lead in the digital world.
        </h2>
        <div className="header__button-container">
          <Link
            to="/case-studies"
            role="button"
            className="header-btn header-btn__block"
          >
            Case Studies
          </Link>
          <Link
            to="/contact"
            role="button"
            className="header-btn header-btn__outline"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Header
