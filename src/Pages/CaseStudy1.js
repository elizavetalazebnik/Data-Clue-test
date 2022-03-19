import React from 'react'
import sign from '../assets/images/digital-signature.jpg'

function CaseStudy1() {
  return (
    <div className="article-container" id="secure-signature">
      <div className="article-container--img">
        <img
          width="200"
          height="200"
          className="article-banner-img individual-img"
          src={sign}
          alt="mans hand is creating a digital signature on his mobile phone"
        />
      </div>
      <div className="article-container--text">
        <h1 className="article-title">Secure Signature</h1>
        <h2 className="article-sub-title">Introduction</h2>
        <p className="article-text">
          A signature is used to <strong>authenticate</strong> an individual’s
          identity and verify if a document has been read and/or
          approved. This system is still widely used in the 21st century
          (even in the age of digital security). Unethical hackers from around
          the world can hack security systems/computer systems to steal signatures. Every year more than{' '}
          <strong>120 million </strong>
          dollars of signature fraud is carried out, with an individual’s
          signature forged for monetary theft.
        </p>
        <h2 className="article-sub-title">Our Algorithm</h2>
        <p className="article-text">
          Through our research we realised that most approaches for signature
          authentication are based on <strong>image processing </strong> of some
          kind. After implementing the state-of-the-art{' '}
          <strong>CNN model-based </strong>approach, we found an academic paper
          which was published in a famous CS journal. We realised just how
          easily one could hack the algorithm by introducing specific noise to
          the image. By consulting with art specialists we
          <strong> concluded</strong> that the signature is a by-product and
          the signing process is the heart of the problem.
        </p>
        <h2 className="article-sub-title">Solution</h2>
        <p className="article-text">
          We took multiple signatures
          from the same individual as part of the signature registering
          process, using <strong>RNN</strong> based models. Instead of the traditional method of signature comparison, we used <strong>signal processing </strong>
          (checking if the process is like the sample set
          and not the image itself).This allowed for
          virtually <strong>99.999% accurate</strong> authentication.
        </p>
        <h2 className="article-sub-title">Technology Stack</h2>
        <ul className="article-list">
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Python 3.5
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> TensorFlow 1.15
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Keras
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> C#
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Dot Net Core 2.1
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> JS (JQuery)
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CaseStudy1
