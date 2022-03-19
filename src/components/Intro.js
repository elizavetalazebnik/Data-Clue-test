import React from 'react'
import lightbulb from '../assets/images/lightbulb.jpg'
import { Link } from 'react-router-dom'

function Intro() {
  return (
    <section className="intro">
      <div className="intro__container-img">
        <img
          src={lightbulb}
          className="intro__img"
          alt="warm light bulb against a black background"
        />
      </div>
      <div className="intro__container-text">
        <h1 className="intro__title">We champion the bold to achieve the extraordinary.</h1>
        <p className="intro__summary">
          At DataClue, we have one simple statement that encapsulates our
          broader purpose - We seek out people and clients who challenge
          themselves to be exceptional, build world class operations and
          intelligently unlock the potential of their Data.
          <br />
          <br />
          We overcome complexity by discovering unique sources of competitive
          advantage and hidden truths in dynamic, complex systems, using AI, ML
          and Deep Learning.
        </p>
        <Link to="/about" className="intro__link link">
          READ MORE
        </Link>
      </div>
    </section>
  )
}

export default Intro
