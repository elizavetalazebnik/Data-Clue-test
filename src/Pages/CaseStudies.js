import React from 'react'
import { Link } from 'react-router-dom'
import ship from '../assets/images/ship.jpg'
import sign from '../assets/images/digital-signature.jpg'
import machinelearning from '../assets/images/machinelearning.jpg'
import football from '../assets/images/football.jpg'
import pizza from '../assets/images/pizza.jpg'
import cosmetics from '../assets/images/cosmetics.jpg'
import jobsearch from '../assets/images/job-search.jpg'
import multilanguage from '../assets/images/multi-language.jpg'

const caseStudies = [
  {
    title: 'Football (Soccer) Players Analysis',
    text: 'The client needed a system that would allow for real-time analysis ,using several (static in location, non-static in angle movement) using cameras, to track, record and monitor each player for his movement throughout a live match, and then show areas of improvement.',
    id: 4,
    href: '/case-studies/football-analysis',
    img: football,
    alt: 'blue skies, sun is shining on a very green football pitch. There is a silver and orange football boot and a football on the pitch.',
  },
  {
    title: 'The Best Clients for Italian Goods',
    text: 'Italy, the land of pizza, pasta, and super brand fashion labels. But profiling the buyers, isn’t such an easy task? Avoiding blind spots, with a 360 degree view of your audience on social media, across multiple channels and markets, is a must to survive in such an online competitive market, more so now since Covid-19 lockdown restrictions.',
    id: 5,
    href: '/case-studies/clients-for-italian-goods',
    img: pizza,
    alt: 'margarhita pizza on a wooden table, there is a wood burning stove in the background.',
  },
  {
    title: 'Global Sales Cosmetic Prediction',
    text: 'A global cosmetics brand, during 2020/2021 had to transition from its traditional channel to market of over the counter (OTC) sales, to a system that allowed it to maintain the same volume of sales, globally, in a B2C model. ',
    id: 6,
    href: '/case-studies/global-sales-cosmetic-prediction',
    img: cosmetics,
    alt: 'close up of a make up brush holder filled with various sized make up brushes',
  },
  {
    title: 'Job Search & Recommendation Engine',
    text: 'Our client required an algorithm which would allow them to integrate its training computation protocol in the Cloud, to determine at speed, the optimal space of parameters for a given RL problem.',
    id: 7,
    href: '/case-studies/job-search-recommendation-engine',
    img: jobsearch,
    alt: 'three people laughing around a table in a cafe, they are working with their laptops and notepads',
  },
  {
    title: 'Ship Classification by Sonars',
    text: 'DataClue, working collaboratively with the special enforcement forces, created the DataClue sonar protocol algorithm “DSP”.',
    id: 1,
    href: '/case-studies/ship-classification',
    img: ship,
    alt: 'long red ship surrounded by the vast open ocean',
  },
  {
    title: 'Multi Language Search Engine',
    text: 'The internet is the largest data repository, on the planet, that we all have access too. The sheer volume of data is overwhelming; understanding the complexities of how this data is retrieved or searched is something none of us rarely give a second thought too',
    id: 8,
    href: '/case-studies/multi-language-search-engine',
    img: multilanguage,
    alt: 'black background with falling scrabble letter pieces',
  },

  {
    title: 'Secure Signature',
    text: 'Our client needed a robust system, with was able to 99.999% able to authenticate that the individual that signed a document was indeed the individual to whom the signature belonged.',
    id: 2,
    href: '/case-studies/secure-signature',
    img: sign,
    alt: 'man holding his phone with a black signature on the screen',
  },
  {
    title: 'Optimal RK dual-parameter space search',
    text: 'Our client required an algorithm which would integrate into its training computation protocol, (Cloud based) the optimal space of parameters for a given RL problem, at speed.',
    id: 3,
    href: '/case-studies/optimal-space-search',
    img: machinelearning,
    alt: 'a white robot stands with the picture of the moon behind it',
  },
]

function CaseStudies() {
  return (
    <div>
      <h1 className="cs-title">CASE STUDIES</h1>
      <div className="cs-container">
        {caseStudies.map((cs) => (
          <div key={cs.id} className="cs-inner-container">
            <img
              src={cs.img}
              alt={cs.alt}
              className="cs-blog-img"
              width="200"
              height="200"
            />
            <Link to={`${cs.href}`} className="cs-link">
              {cs.title}
            </Link>
            <p className="cs-text">{cs.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CaseStudies
