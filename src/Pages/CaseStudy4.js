import React from 'react'
import pizza from '../assets/images/pizza.jpg'

function CaseStudy4() {
  return (
    <div className="article-container" id="secure-signature">
      <div className="article-container--img">
        <img
          width="200"
          height="200"
          className="article-banner-img individual-img"
          src={pizza}
          alt="margarhita pizza on a wooden table, there is a wood burning stove in the background."
        />
      </div>
      <div className="article-container--text">
        <h1 className="article-title">The Best Clients for Italian Goods</h1>
        <p className="article-text">
          Italy - the land of pizza, pasta, and designer fashion. But
          profiling the buyers, isn’t such an easy task? Avoiding blind spots
          with a 360 degree view of your audience on social media across
          multiple channels and markets is essential to survive in such an{' '}
          <strong>online competitive market</strong> (especially since Covid-19
          lockdown restrictions).
        </p>
        <h2 className="article-sub-title">The Task</h2>
        <p className="article-text">
          The Historical data captured by online shopping (across multiple global
          markets) and shoppers buying habits creates an extremely powerful
          target marketing tool. Our client tasked us with designing an
          algorithm that allowed for{' '}
          <strong>classification of international customers</strong>
          , using their demographic data and buying history from multiple
          reselling sources.
        </p>
        <h2 className="article-sub-title">The algorithmic solution created</h2>
        <p className="article-text">
          <strong>1.</strong> Firstly, we embarked upon a significant task of
          data cleansing the organisations large and unstructured
          data.
          <br />
          <br />
          <strong>2.</strong> The data was then stored
          in a format which allowed us to repossess for reuse.
          <br />
          <br />
          <strong>3.</strong> While doing so, an automatic component that can be
          integrated into the client's systems was introduced.
          <br />
          <br />
          <strong>4.</strong> The main challenge was to identify which
          parameters represented meaningful data as to which product was important
          to what client. This led us to develop a simulator, results of which
          were analysed in a meaningful way.
          <br />
          <br />
          <strong>5.</strong> We then introduced data-driven hypotheses which
          had been tested, from which we developed an FcNN (Deep Learning)
          model that allows for classification of different clients and their
          buying habits.
          <br />
          <br />
          <strong>6.</strong> Then, using genetic algorithms and a fine-tuned
          simulator we were able to update the monthly prediction of sales in each
          segment, for each item, for each type of customer class.
          <br />
          <br />
          <strong>7.</strong> Lastly, taking a proactive
          approach, we encouraged the client to generate an email to their
          customers suggesting which products they should consider for purchase
          that following month. In turn, this created a bespoke tailored shopping
          experience which ultimately led to customer loyalty and reoccurring custom.
        </p>
        <h2 className="article-sub-title">Technology stack</h2>
        <ul className="article-list">
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Python 3.7
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> TensorFlow
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Keras
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Ubuntu16.04 Server
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Multiple Google Cloud Platform
            (GCP) services
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CaseStudy4
