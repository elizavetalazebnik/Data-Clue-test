import React from 'react'
import jobsearch from '../assets/images/job-search.jpg'

function CaseStudy7() {
  return (
    <div className="article-container" id="secure-signature">
      <div className="article-container--img">
        <img
          width="200"
          height="200"
          className="article-banner-img individual-img"
          src={jobsearch}
          alt="three people laughing around a table in a cafe, they are working with their laptops and notepads."
        />
      </div>
      <div className="article-container--text">
        <h1 className="article-title">Job Search and Recommendation Engine</h1>
        <h2 className="article-sub-title">Introduction</h2>
        <p className="article-text">
          Our client required an algorithm which would allow them to integrate
          training computation protocol in the Cloud and to determine at speed,
          the optimal space of parameters for a given RL problem.
        </p>
        <h2 className="article-sub-title">The Algorithm Developed</h2>
        <p className="article-text">
          This information is currently under patent provisional rights and will
          be published very shortly.
        </p>
        <h2 className="article-sub-title">Technology Stack</h2>
        <ul className="article-list">
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span>Python 3.7
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Java
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span>Matlab (testing)
          </li>
        </ul>
      </div>
    </div>
  )
}
export default CaseStudy7
