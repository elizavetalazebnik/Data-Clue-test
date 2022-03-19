import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/images/logo.svg'

function Nav() {
  const [showNavList, setNavList] = useState(false)

  return (
    <>
    <div className="navbar__container">
          <Link to="/">
          <img src={img} alt="dataclue logo" />
        </Link>
        <button
          onClick={() => setNavList(!showNavList)}
          className="navbar__btn--mobile"
          type="button"
        >
          {showNavList ? (
            <span className="navbar__btn--mobile-close"> &#10005;</span>
          ) : (
            <span className="navbar__btn--mobile-open">&#8801;</span>
          )}
        </button>
        </div>
      {showNavList && (
        <nav className="navbar">
          <ul className="navbar__list navbar__list--show">
            <li className="navbar__list-item" onClick={() => setNavList(!showNavList)}>
              <Link to="/about" className="link navbar__link">
                ABOUT
              </Link>
            </li>
            <li className="navbar__list-item" onClick={() => setNavList(!showNavList)}>
              <Link to="/team" className="link navbar__link">
                TEAM
              </Link>
            </li>
            <li className="navbar__list-item" onClick={() => setNavList(!showNavList)}>
            <Link to="/algorithm-development" className="link navbar__link">
              ALGORITHM DEVELOPMENT
            </Link>
          </li>
            <li className="navbar__list-item" onClick={() => setNavList(!showNavList)}>
          <Link to="/esg-and-climate-scoring" className="link navbar__link">
            ESG
          </Link>
        </li>
        <li className="navbar__list-item" onClick={() => setNavList(!showNavList)}>
        <Link to="/consulting" className="link navbar__link">
          CONSULTING
        </Link>
      </li>
          <li className="navbar__list-item" onClick={() => setNavList(!showNavList)}>
            <Link to="/case-studies" className="link navbar__link">
              CASE STUDIES
            </Link>
          </li>
            <li className="navbar__list-item" onClick={() => setNavList(!showNavList)}>
              <Link to="/blogs" className="link navbar__link">
                BLOG
              </Link>
            </li>
            <li className="navbar__list-item" onClick={() => setNavList(!showNavList)}>
            <Link to="/algorithm-portfolio" className="link navbar__link">
              ALGORITHM PORTFOLIO
            </Link>
          </li>
            <li className="navbar__list-item" onClick={() => setNavList(!showNavList)}>
              <Link to="/contact" className="link navbar__link">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      )}
      </>
  )
}

export default Nav
