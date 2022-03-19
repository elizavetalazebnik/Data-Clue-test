import React from 'react'
import ship from '../assets/images/ship.jpg'

function CaseStudy3() {
  return (
    <div className="article-container">
      <div className="article-container--img">
        <img
          width="200"
          height="200"
          className="article-banner-img individual-img"
          src={ship}
          alt="long red ship surrounded by the vast open ocean"
        />
      </div>
      <div className="article-container--text">
        <h1 className="article-title">Ship Classification by Sonar's</h1>
        <h2 className="article-sub-title">The Challenge</h2>
        <p className="article-text">
          Knowing who is in your waters is <strong>essential</strong> for your nations security. We collaborated with special
          enforcement to create the
          <strong> DataClue sonar protocol algorithm “DSP”.</strong>

        </p>
        <h2 className="article-sub-title">The Solution</h2>
        <p className="article-text">
          DataClue was mandated to create an
          algorithm-based system for <strong>tracking and locating</strong>{' '}
          breaches of their international waters.
        </p>
        <h2 className="article-sub-title">The approach</h2>
        <ul className="article-num-list">
          <li className="article-num-item">
            <strong>1.</strong> Firstly, we gathered{' '}
            <strong>real-world data</strong> about different common combinations
            of locations of ships in the sea.
          </li>
          <li className="article-num-item">
            <strong>2.</strong> Then, we collected samples of{' '}
            <strong>sonars</strong> reflected from possible ships (friendly or
            hostile).
          </li>
          <li className="article-num-item">
            <strong>3.</strong> Using this data, we ran 4 different
            classification models. These are run on 3 devices and perform
            <strong> consensus-based algorithms</strong> on the results of all
            12 models for the final classification. Through
            this methodology we were able to <strong>precisely pinpoint</strong> any vessels  which
            should not have been within a specific radius, allowing special enforcment to take appropriate action.
          </li>
        </ul>
        <h2 className="article-sub-title">Technology Stack</h2>
        <ul className="article-list">
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> C++
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Matlab (Testing)
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Windows Server
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> OpenCV
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CaseStudy3
