import React from 'react'
import machinelearning from '../assets/images/machinelearning.jpg'

function CaseStudy2() {
  return (
    <div className="article-container">
      <div className="article-container--img">
        <img
          width="200"
          height="200"
          className="article-banner-img individual-img"
          src={machinelearning}
          alt="a white robot stands with the picture of the moon behind it"
        />
      </div>
      <div className="article-container--text">
        <h1 className="article-title">
          Optimal RK dual-parameter space search
        </h1>
        <h2 className="article-sub-title">The Challenge</h2>
        <p className="article-text">
          Our client required an algorithm which would integrate into its
          <strong> training computation protocol</strong> (Cloud based). The
          optimal space of parameters for a given <strong>RL problem</strong> at
          speed. We all know that Robotic Process Automation is cool, what's
          cooler is when Robots can learn to solve new tasks they have never
          performed or seen before (if the task is similar enough to one they
          already performed before). To make a robot <strong>"master"</strong> a
          task/tasks, one should start by letting the computer find
          the space of <strong>parameters </strong>representing the problem.
        </p>
        <h2 className="article-sub-title">Our Algorithm</h2>
        <p className="article-text">
          This information is currently under patent provisional rights. We can't wait to share the <strong>published</strong>{' '}
          solution with you shortly.
        </p>
        <h2 className="article-sub-title">Technology Stack</h2>
        <ul className="article-list">
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Python 3.7
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Java
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Matlab (testing)
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CaseStudy2
