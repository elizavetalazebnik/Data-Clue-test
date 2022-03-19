import React from 'react'
import bsx from '../assets/images/bsx.svg'
import client1 from '../assets/images/client1.png'
import client2 from '../assets/images/client2.jpg'
import client3 from '../assets/images/client3.png'
import client4 from '../assets/images/client4.jpg'
import client5 from '../assets/images/client5.png'
import google from '../assets/images/google-logo.png'
import webeffect from '../assets/images/webeffect.png'
import digitalofthings from '../assets/images/digitalofthings.jpg'
import engineering from '../assets/images/engineering.jpg'

function About() {
  return (
    <div className="ap-container">
      <img
        src={engineering}
        width="500"
        height="500"
        className="about-img"
        alt="blue computer hardware engraved with gold"
      />
      <div className="ap-text-sections">
        <h1 className="ap-header">WHO WE ARE</h1>
        <div className="ap-text-container">
          <p className="ap-text">
            DataClue is a data and analytics firm that partners with businesses
            and society to tackle their most important challenges and capture
            their greatest opportunities. Our success depends on deep
            collaboration and a community of <strong>diverse</strong>{' '}
            individuals determined to make the world and each other better every
            day. We work closely and collaboratively with clients to embrace a
            transformational approach aimed at benefiting all stakeholders—
            <strong>empowering</strong> organizations to grow, build sustainable
            competitive advantage, and drive positive societal impact.
          </p>
        </div>
      </div>
      <div className="ap-text-sections">
        <h1 className="ap-header">OUR PURPOSE</h1>
        <div className="ap-text-container">
          <p className="ap-text">
            At DataClue, we have one simple statement that encapsulates our
            broader purpose - We seek out people and clients who challenge
            themselves to be exceptional, build world class operations and
            intelligently unlock the potential of their Data. We bring to light
            by challenging traditional thinking and ways of operating and
            bringing new perspectives to the toughest problems, through the
            development and ethical and measured implementation of{' '}
            <strong>advanced</strong> Algorithms. We drive impact by
            collaborating closely with our clients to enable and energize their
            organizations, through providing them with true insights of their
            business performance, from a operational, financial and business
            perspective. We overcome complexity by discovering unique sources of
            competitive advantage and hidden truths in dynamic, complex systems,
            using <strong>AI, ML and Deep Learning</strong>. We lead with
            integrity, staying true to our values, and stating our views
            candidly and directly. We enable our clients build success and
            achieve their full potential, through ethical and{' '}
            <strong>intelligent</strong> use of their data.
          </p>
        </div>
      </div>
      <h1 className="ap-header ap-center">OUR PARTNERS</h1>
      <div className="ap-partners-container">
        <div className="ap-partners-image--container">
          <img src={bsx} alt="bsx logo" className="ap-partner-img" />
        </div>
        <div className="ap-partners-image--container">
          <img
            src={google}
            alt="google cloud platform logo"
            className="ap-partner-img"
          />
        </div>
        <div className="ap-partners-image--container">
          <img
            src={webeffect}
            alt="webeffect logo"
            className="ap-partner-img"
          />
        </div>
        <div className="ap-partners-image--container">
          <img
            src={digitalofthings}
            alt="digitalofthings logo"
            className="ap-partner-img"
          />
        </div>
      </div>
      <h1 className="ap-header ap-center">OUR CLIENTS</h1>
      <div className="ap-partners-container">
        <div className="ap-partners-image--container">
          <img src={client1} alt="cybowall logo" className="ap-partner-img" />
        </div>
        <div className="ap-partners-image--container">
          <img src={client2} alt="cybowall logo" className="ap-partner-img" />
        </div>
        <div className="ap-partners-image--container">
          <img src={client3} alt="kayma logo" className="ap-partner-img" />
        </div>
        <div className="ap-partners-image--container">
          <img src={client4} alt="auraair logo" className="ap-partner-img" />
        </div>
        <div className="ap-partners-image--container">
          <img src={client5} alt="botson logo" className="ap-partner-img" />
        </div>
      </div>
    </div>
  )
}

export default About
