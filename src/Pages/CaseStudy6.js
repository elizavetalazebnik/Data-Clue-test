import React from 'react'
import cosmetic from '../assets/images/cosmetics.jpg'

function CaseStudy6() {
  return (
    <div className="article-container">
      <div className="article-container--img">
        <img
          width="200"
          height="200"
          className="article-banner-img individual-img"
          src={cosmetic}
          alt="long red ship surrounded by the vast open ocean"
        />
      </div>
      <div className="article-container--text">
        <h1 className="article-title">Global Sales Cosmetic Prediction</h1>
        <p className="article-text">
          During 2020 - 2021, a global cosmetics brand had to transition from its
          over the counter sales to a system that allowed it to maintain the same{' '}
          <strong>volume of sales</strong>, in a B2C model. Sales
          related historic data was collected from four different systems
          across the organisation daily and reported back to the regional sales
          leaders to improve sales.
        </p>
        <h2 className="article-sub-title">The Algorithm Developed</h2>
        <p className="article-text">
          <strong>1.</strong> Firstly, we automated the data collection process
          across the systems and stored the data in one place, removing
          all irrelevant sales data.
          <br />
          <br />
          <strong>2.</strong> We then restructured the sales data (client, product,
          demographic, geographical etc).
          <br />
          <br />
          <strong>3.</strong> We then ran a "smart" stochastic brute-force
          search algorithm to find optimum decisions, thus improving global
          sales across multiple channels. We wanted to ensure that Covid-19 restrictions
          did not impact the brand or the sales. In fact, we improved sales and
          allowed for better decision making, inventory management and optimised
          their supply chain. All because we had gained a better understanding of regional customer
          requirements, frequency and product choice (which differed
          considerably across the global geographies).
        </p>
        <h2 className="article-sub-title">Implementation</h2>
        <p className="article-text">
          Using RANSAC and brute-force based approaches we were able to drive
          optimal decisions in the search product category. The implementation of
          the re-structured data and converting log-style data to a signal-style
          was implemented using the least mean square method.
        </p>
        <h2 className="article-sub-title">Benefits</h2>
        <ul className="article-list">
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Inventory optimisation.
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Improved sales.
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Customer loyalty improvements.
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Improved working capital
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Drove significant online sales.
          </li>
        </ul>
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
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Google Cloud Platform
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CaseStudy6
