import React from 'react'
import { Link } from 'react-router-dom'
import signature from '../assets/images/digital-signature.jpg'
import machinelearning from '../assets/images/machinelearning.jpg'

function LatestCaseStudies() {
  return (
    <div className="case-studies">
      <div className="case-studies-center">
        <h1 className="title case-studies__title">
          Find out what we've been working on
        </h1>
        <Link to="/case-studies" className="link case-studies__link">
          VIEW ALL CASE STUDIES
        </Link>
      </div>
      <section className="case-studies__container">
        <Link to="/case-studies/secure-signature">
          <article className="case-studies__article">
            <img
              src={signature}
              className="case-studies__article-img"
              loading="lazy"
              alt="mans hand is creating a digital signature on his mobile phone"
            />
            <h1 className="case-studies__article-header">Secure Signature</h1>
            <h2 className="case-studies__date">10.20 - 02.21</h2>
          </article>
        </Link>
        <Link to="/case-studies/optimal-space-search">
          <article className="case-studies__article">
            <img
              src={machinelearning}
              className="case-studies__article-img"
              loading="lazy"
              alt="white robot with a picture of the moon behind it"
            />
            <h1 className="case-studies__article-header">
              Optimal RL dual-parameter space search
            </h1>
            <h2 className="case-studies__date">07.21 - 02.22</h2>
          </article>
        </Link>
      </section>
    </div>
  )
}

export default LatestCaseStudies
