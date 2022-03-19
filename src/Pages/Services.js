import React from 'react'
import dataScience from '../assets/images/data-science.png'
import Earth from '../assets/images/earth.png'
import Consulting from '../assets/images/consulting.png'
import { useState } from 'react'

function Services() {
  const [isAlgorithmSectionOpen, setIsAlgorithmSectionOpen] = useState(false)
  const [isEsgOpen, setIsEsgOpen] = useState(false)

  return (
    <div className="services__pg">
      <div className="case-studies-center">
        <h1 className="title case-studies__title services-title__pg">
          OUR SERVICES
        </h1>
      </div>
      <section className="services__section__pg">
        <div className="services__box services__box-pg">
          <div className="service__header">
            <div className="service__header-start">
              <h1 className="service__title">ALGORITHM DEVELOPMENT</h1>
            </div>
            <img
              src={dataScience}
              width="40"
              height="40"
              loading="lazy"
              alt="data science icon"
            />
          </div>
          <p className="service__text">
            Firms have increasingly adopted and embedded algorithms into their
            operating models. This innovation has allowed companies to
            differentiate themselves in the market and improve the efficiency
            with which they provide goods and services to customers.
            <br />
            <br />
            Algorithms are now responsible for a whole host of applications,
            from targeting consumers with bespoke advertisements, through to
            product recommendations and filtering what content we see online (to
            name just a few).
          </p>
          <div className="service-arrows__container">
            <button
              className="service-arrow-btns"
              onClick={() => setIsAlgorithmSectionOpen(!isAlgorithmSectionOpen)}
              type="button"
            >
              {isAlgorithmSectionOpen ? 'SHOW LESS' : 'SHOW MORE'}
            </button>
          </div>
          {isAlgorithmSectionOpen && (
            <>
              <br />
              <br />
              <p className="service__text">
                With these algorithms capable of processing vastly more data
                than before, and the ability to adapt to each unique interaction
                of an individual customer, the prospects for businesses to
                capitalise and take a competitive advantage in the market have
                never been greater.
                <br />
                <br />
                With new and quickly evolving technology, regulations and
                guidelines are still developing, which created a challenging
                accountability, transparency and compliance landscape for
                algorithms.
                <br />
                <br />
                Our specialist Advanced Algorithm Development Team can help
                organisations with our range of development and assurance
                expertise in algorithm technology, risk management and coding
                skills. Our approach gives careful consideration to relevant
                regulatory requirements and industry standards and leverages of
                our proprietary algorithm control framework and validation
                methodologies, which we have developed while working across
                different industries and sectors.
                <br />
                <br />
                DataClue can assist organisations in identifying and
                understanding how they use their algorithms. We can also
                challenge related governance and oversight, examine the adequacy
                of algorithm policies and procedures, identify, manage and
                mitigate risks. Moreover, we can assess whether the control
                framework meets industry best practice, or relevant defined
                standards. Where needed, we will also support specific algorithm
                review activities, including code reviews, making use of our
                specialist coding teams across a range of programming languages.
              </p>
            </>
          )}
        </div>
        <div className="services__box services__box-pg">
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
            data collection, improve data quality, benchmark performance, and
            communicate more effectively with internal and external
            stakeholders.
            <br />
            <br />
            We empower companies to create value through their ESG strategy,
            data, and narrative, which ultimately drives better business
            performance and make more sustainable investment decisions.
            <br />
            <br />
            <strong>Benefits of DataClue's ESG platform:</strong> Own your ESG
            narrative through better reporting and better performance. Next
            generation sustainability management, allowing you to create value
            from your ESG strategy, data, and reporting. Harness the power of
            your ESG data, to better measure, track, and improve key ESG and
            climate matrices.
          </p>
          <div className="service-arrows__container">
            <button
              className="service-arrow-btns"
              onClick={() => setIsEsgOpen(!isEsgOpen)}
            >
              {isEsgOpen ? 'SHOW LESS' : 'SHOW MORE'}
            </button>
          </div>
          {isEsgOpen && (
            <p className="service__text">
              <h1 className="service__title">
                The ESG Problem, addressed by DataClue's ESG & Climate Scoring
                Platform
              </h1>
              <h4 className="service__content__subtitle">ESG Data</h4>
              <ul>
                <li>Non-Standardized</li>
                <li>Not complete or accurate</li>
                <li>wide ranging</li>
              </ul>
              <br />
              <h4 className="service__content__subtitle">ESG Methodology</h4>
              <ul>
                <li>Opaque methodology provided by score providers</li>
              </ul>
              <br />
              <h4 className="service__content__subtitle">
                Investor Sentiment Shift
              </h4>
              <ul>
                <li>Millenials want to invest conscientiously</li>
              </ul>
              <ul>
                <li>Covid accelerated ESG investments</li>
              </ul>
              <br />
              <h4 className="service__content__subtitle">
                New ESG Regulations
              </h4>
              <ul>
                <li>
                  EU, UK, US & APAC either have or are going to publish more
                  regulatory requirements
                </li>
              </ul>
              <br />
              <h4 className="service__content__subtitle">
                New ESG Regulations
              </h4>
              <ul>
                <li>Current scores are disparate and often greenwashed</li>
              </ul>
              <br />
              <h1 className="service__title">
                The DataClue's ESG & Climate Scoring Platform
              </h1>
              <h4 className="service__content__subtitle">
                Transparent & Flexible framework
              </h4>
              <ul>
                <li>
                  We provide capital markets revenue generators - a flexible and
                  transparent ESG methodolgy and framework to choose from for
                  their investment decision making
                </li>
              </ul>
              <br />
              <h4 className="service__content__subtitle">
                Multiple data types and sources
              </h4>
              <ul>
                <li>
                  Clients can choose any number of ESG reference data providers
                  and data sources (MSCI, Sustainalytics et.AI.) + Unstructured
                  data sources such as news articles and research reports
                </li>
              </ul>
              <br />
              <h4 className="service__content__subtitle">
                Applying Advanced Analytics (AI/ML/DL)
              </h4>
              <ul>
                <li>
                  We apply advanced data mining tools to create new data sets.
                  But also utilize advanced statistical models and ML/AL, DL
                  tools such as topic modelling, sentiment analysis, NLP etc. to
                  provide dynamic insights into ESG big data.
                </li>
              </ul>
              <br />
              <p>
                We offer different commercial and consumption models of our
                Platform. We create the right consumption model that works for
                you.
              </p>
              <br />
              <h4 className="service__content__subtitle">
                Analytics in PAAS/SASS
              </h4>
              <ul>
                <li>
                  Is a platform product which can be integrated within any OMS
                </li>
              </ul>
              <br />
              <h4 className="service__content__subtitle">Data as a Service</h4>
              <ul>
                <li>
                  Create dynamic and unique ESG data repository which can be
                  easily accesible to clients
                </li>
              </ul>
              <br />
              <h4 className="service__content__subtitle">Networked API</h4>
              <ul>
                <li>
                  Our product accesses multiple data and analytics sources via
                  networked API's and therefore is fungible
                </li>
              </ul>
            </p>
          )}
        </div>
        <div className="services__box services__box-pg">
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
            We at DataClue believe that data is at the core of the go-forward We
            at DataClue believe that data is at the core of the go-forward
            business strategy for all businesses. It’s all about the data
            driving business growth and new business opportunities for value
            creation
            <br />
            <br />
            <strong>Services offered:</strong> Advanced Data Algorithm
            Development. Data led transformation. Ethical implementation of AI.
            Intelligent Data and AI platform creation. Data and Analytics
            Advisory. Discreet technology team building services.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Services
