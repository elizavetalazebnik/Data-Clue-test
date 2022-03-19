import React from 'react'
import multilanguage from '../assets/images/multi-language.jpg'

function CaseStudy8() {
  return (
    <div className="article-container" id="secure-signature">
      <div className="article-container--img">
        <img
          width="200"
          height="200"
          className="article-banner-img individual-img"
          src={multilanguage}
          alt="black background with falling scrabble letter pieces"
        />
      </div>
      <div className="article-container--text">
        <h1 className="article-title">Multi Language Search Engine</h1>
        <p className="article-text">
          The internet is the largest data repository on the planet.  The sheer volume of data is overwhelming and
          understanding the complexities of how this data is retrieved or
          searched is something we rarely think about. We
          run a search and expect instant results. Search engines (such as
          Google) play a <strong>significant</strong> role in aiding this
          process. But what if we want to search in multiple languages and in
          parallel? This is when things become more complex.
        </p>
        <h2 className="article-sub-title">The Task</h2>
        <p className="article-text">
          Create a search engine that would cater for both Hebrew and English
          for a given database of possible results.
        </p>
        <h2 className="article-sub-title">
          The Algorithmic Solution Developed
        </h2>
        <p className="article-text">
          <strong>1.</strong> Firstly, we gathered tens of millions of sentences
          from all over the internet in both languages (from both structured
          and unstructured data). We kept the subject and style as diverse as
          possible.
          <br />
          <br />
          <strong>2.</strong> Using Machine Learning, we trained an
          algorithm to learn the language(s).
          <br />
          <br />
          <strong>3.</strong> Big Data sets of search queries and
          results from the data repository were created and we taught the algorithm a
          score function.
          <br />
          <br />
          <strong>4.</strong> We repeated the process for each language.
          <br />
          <br />
          <strong></strong>5.
          Finally, we deployed IBM's language detection software and ran on the
          right instance of the algorithm.
        </p>
        <h2 className="article-sub-title">Technology Stack</h2>
        <ul className="article-list">
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span>Python 3.7
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Google W2V
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span>Flask
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span>Ubunto Sever 16.04
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CaseStudy8
