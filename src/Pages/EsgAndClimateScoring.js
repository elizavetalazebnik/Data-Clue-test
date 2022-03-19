import React from "react"
import esg from "../assets/images/esg.jpg"
import esgplatformvideo from "../assets/videos/esg-platform.mp4"
import cloud from "../assets/images/cloud.png"
import cactus from "../assets/images/cactus.png"
import thermometer from "../assets/images/thermometer.png"
import palm from "../assets/images/palm-tree.png"
import factory from "../assets/images/factory.png"
import plant from "../assets/images/plant.png"
import search from "../assets/images/search.png"
import apple from "../assets/images/apple.png"
import chain from "../assets/images/chain.png"
import data from "../assets/images/analysis.png"
import api from "../assets/images/api.png"

function EsgAndClimateScoring() {
    return (
        <>
        <img className="service-banner-img" src={esg} />
        <div className="services--pg-container">
        <h1 className="services-title--consulting-services">ESG and Climate Scoring Platform</h1>
        <p>
        DataClue’s ESG and Climate Scoring Platform is an all-in-one sustainability management platform that helps companies streamline data collection, improve data quality, benchmark performance, and communicate more effectively with internal and external stakeholders.
        We empower companies to create value through their ESG strategy, data, and narrative, which ultimately drives better business performance and make more sustainable investment decisions.</p>
        <h2 className="services-heading2">Benefits of DataClue's ESG platform:</h2>
        <ul>
        <li className="services-pg-list--item">Own your ESG narrative through better reporting and better performance.
        </li>
        <li className="services-pg-list--item">Next generation sustainability management, allowing you to create value from your ESG strategy, data, and reporting.</li>
        <li className="services-pg-list--item">Harness the power of your ESG data, to better measure, track, and improve key ESG and climate matrices.</li>
        </ul>
        <div>
        <div className="services-container--video">
        <h2 className="services-heading2 services-additional-margin">Select Demo of our ESG & Climate Platform <a href="https://dataclue.co.uk/esg_platform/dashboard.html" target="_blank" className="services-pg--link">here</a>.</h2>
        <div className="services--video-container">
        <video autoPlay loop muted playsInline width="500" height="500" className="services-video">
        <source src={esgplatformvideo} />
         </video>
         </div>
         </div>
        </div>
        <h2 className="services-heading2 services-additional-margin">DataClue's ESG & Climate Scoring Platform</h2>
        <div className="services__section">

        <div className="services__box">
        <div className="service__header service__header-esg">
        <h3 className="services-grid-title">ESG Data</h3>
        <img src={cloud} width="30" height="30" alt="cloud icon" />
        </div>
        <ul>
        <li className="services-pg-list--item">Not complete or accurate</li>
        <li className="services-pg-list--item">Wide ranging</li>
        </ul>
        </div>

        <div className="services__box">
        <div className="service__header service__header-esg">
        <h3 className="services-grid-title">ESG Methodology</h3>
        <img src={cactus} width="30" height="30" alt="cactus icon" />
        </div>
        <ul>
        <li className="services-pg-list--item">Opaque methodology provided by score providers</li>
        </ul>
        </div>

        <div className="services__box">
        <div className="service__header service__header-esg">
        <h3 className="services-grid-title">Investor Sentiment Shift</h3>
        <img src={thermometer} width="30" height="30" alt="thermometer icon" />
        </div>
        <ul>
        <li className="services-pg-list--item">Millennials want to invest conscientiously</li>
        <li className="services-pg-list--item">Covid accelerated ESG investments</li>
        </ul>
        </div>
        </div>

        <div className="services__section services__section__bottom">

        <div className="services__box">
        <div className="service__header service__header-esg">
        <h3 className="services-grid-title">New ESG Regulations</h3>
        <img src={palm} width="30" height="30" alt="palm tree icon" />
        </div>
        <ul>
        <li className="services-pg-list--item">EU, UK, US and APAC either have or are going to publish more regulatory requirements</li>
        </ul>
        </div>

        <div className="services__box">
        <div className="service__header service__header-esg">
        <h3 className="services-grid-title">Greenwashing</h3>
        <img src={factory} width="30" height="30" alt="factory icon" />
        </div>
        <ul>
        <li className="services-pg-list--item">Current scores are disparate and often greenwashed</li>
        </ul>
        </div>

        </div>
        <h2 className="services-heading2 services-additional-margin">Benefits of DataClue's Platform: </h2>
        <div className="services-grid">
        <div className="services-grid--item">
        <div className="services-icon-container">
        <h3 className="services-grid-title">Transparent and flexible framework</h3>
        <img src={search} width="30" height="30" alt="search icon" />
        </div>
        <ul className="services-esg-list">
        <li className="services-pg-list--item">We provide capital markets revenue generators a flexible and transparent ESG methodology and framework to choose from for their investment decision making</li>
        </ul>
        </div>
        <div className="services-grid--item">
        <div className="services-icon-container">
        <h3 className="services-grid-title">Multiple data types and sources</h3>
        <img src={plant} width="30" height="30" alt="plant icon" />
        </div>
        <ul className="services-esg-list">
        <li className="services-pg-list--item">Clients can choose any number of ESG reference data providers and data sources (MSCI, Sustrainalytics et.AI.) + Unstructured data sources such as news articles, research reports</li>
        </ul>

        </div>
        <div className="services-grid--item">
        <div className="services-icon-container">
        <h3 className="services-grid-title">Applying Advanced Analytics (AI/ML/DL)</h3>
        <img src={apple} width="30" height="30" alt="apple icon" />
        </div>
        <ul className="services-esg-list">
        <li className="services-pg-list--item">We apply advanced data mining tools to create new data sets. But also utilize advanced statistical models and ML/AI, DL tools such as topic modelling, sentiment analysis, NLP etc to provide dynamic insights into ESG big data.</li>
        </ul>
        </div>
        </div>
        <h2 className="services-heading2 services-additional-margin">We can create the right commercial/consumption model that works for you.</h2>
        <div className="services-grid">
        <div className="services-grid--item">
        <div className="services-icon-container">
        <h3 className="services-grid-title">Analytics in PAAS/SASS</h3>
        <img src={chain} width="30" height="30" alt="chain icon" />
        </div>
        <ul className="services-esg-list">
        <li className="services-pg-list--item">Is a platform product which can be integrated within any OMS</li>
        </ul>
        </div>
        <div className="services-grid--item">
        <div className="services-icon-container">
        <h3 className="services-grid-title">Data As A Service</h3>
        <img src={data} width="30" height="30" alt="data icon" />
        </div>
        <ul className="services-esg-list">
        <li className="services-pg-list--item">Create dynamic and unique ESG data and unique ESG data repository which can be easily accesible to clients</li>
        </ul>
        </div>
        <div className="services-grid--item">
        <div className="services-icon-container">
        <h3 className="services-grid-title">Networked API</h3>
        <img src={api} width="30" height="30" alt="gear icon with the word API in the middle of it" />
        </div>
        <ul className="services-esg-list">
        <li className="services-pg-list--item">Our product accesses multiple data and analytics sources via networked API's and therefore is fungible</li>
        </ul>
        </div>
        </div>
       </div>
        </>
 )
}

export default EsgAndClimateScoring
