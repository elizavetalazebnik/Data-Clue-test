import React from 'react'
import dataScience from '../assets/images/data-science.png'
import Earth from '../assets/images/earth.png'
import Consulting from '../assets/images/consulting.png'
import { Link } from "react-router-dom"

function Services() {
  return (
    <div className="services">
      <div className="case-studies-center">
        <h1 className="title case-studies__title">
          We help you through the following services
        </h1>
      </div>

      <section className="services__section">
        <div className="services__box">
          <div className="service__header">
            <h1 className="service__title">ALGORITHM DEVELOPMENT</h1>
            <img
              src={dataScience}
              width="40"
              height="40"
              loading="lazy"
              alt="data science icon"
            />
          </div>
          <p className="service__text">
            Our specialist advanced algorithm development team can help
            organisations with our range of development and research expertise
            in artificial intelligence, machine learning and software
            development skills.
          </p>

          <Link to="/algorithm-development" className="read-more--link">READ MORE</Link>
          </div>

        <div className="services__box">
          <div className="service__header">
            <h1 className="service__title">ESG & CLIMATE SCORING</h1>
            <img
              src={Earth}
              width="40"
              height="40"
              loading="lazy"
              alt="earth icon"
            />
          </div>
          <p className="service__text">
            DataClue’s ESG and Climate Scoring Platform is an all-in-one
            sustainability management platform that helps companies streamline
            data collection, improve data quality, benchmark performance &
            communicate more effectively with stakeholders.
          </p>

          <Link to="esg-and-climate-scoring" className="read-more--link">READ MORE</Link>

        </div>
        <div className="services__box">
          <div className="service__header">
            <h1 className="service__title">CONSULTING</h1>
            <img
              src={Consulting}
              width="40"
              height="40"
              loading="lazy"
              alt="consulting icon"
            />
          </div>
          <p className="service__text">
            We at DataClue believe that data is at the core of the go-forward
            business strategy for all businesses. It’s all about the data
            driving business growth and new business opportunities for value
            creation.
          </p>

          <Link to="/consulting" className="read-more--link">READ MORE</Link>

        </div>
      </section>
    </div>
  )
}

export default Services
