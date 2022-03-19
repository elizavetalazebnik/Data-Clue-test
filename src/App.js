import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import CaseStudies from './Pages/CaseStudies'
import CaseStudy1 from './Pages/CaseStudy1'
import CaseStudy2 from './Pages/CaseStudy2'
import CaseStudy3 from './Pages/CaseStudy3'
import CaseStudy4 from './Pages/CaseStudy4'
import CaseStudy5 from './Pages/CaseStudy5'
import CaseStudy6 from './Pages/CaseStudy6'
import CaseStudy7 from './Pages/CaseStudy7'
import CaseStudy8 from './Pages/CaseStudy8'

import Blogs from './Pages/Blogs'
import Blog1 from './Pages/Blog1'
import Blog2 from './Pages/Blog2'
import Blog3 from './Pages/Blog3'
import Blog4 from './Pages/Blog4'
import Blog5 from './Pages/Blog5'
import Contact from './Pages/Contact'
import ErrorPage from './Pages/Error'
import Nav from './components/Nav'
import Attributions from './Pages/Attributions'
import Footer from './components/Footer'
import Team from './Pages/Team'
import ScrollToTop from './components/ScrollToTop'

import AlgorithmDevelopment from "./Pages/AlgorithmDevelopment"
import AlgorithmPortfolio from "./Pages/AlgorithmPortfolio"

import EsgAndClimateScoring from './Pages/EsgAndClimateScoring'
import Consulting from './Pages/Consulting'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/algorithm-development" element={<AlgorithmDevelopment />} />
        <Route path="/esg-and-climate-scoring" element={<EsgAndClimateScoring />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="case-studies/secure-signature" element={<CaseStudy1 />} />
        <Route
          path="case-studies/optimal-space-search"
          element={<CaseStudy2 />}
        />
        <Route
          path="case-studies/ship-classification"
          element={<CaseStudy3 />}
        />
        <Route
          path="case-studies/clients-for-italian-goods"
          element={<CaseStudy4 />}
        />
        <Route path="case-studies/football-analysis" element={<CaseStudy5 />} />
        <Route
          path="case-studies/global-sales-cosmetic-prediction"
          element={<CaseStudy6 />}
        />
        <Route
          path="case-studies/job-search-recommendation-engine"
          element={<CaseStudy7 />}
        />
        <Route
          path="case-studies/multi-language-search-engine"
          element={<CaseStudy8 />}
        />
        <Route path="/algorithm-portfolio" element={<AlgorithmPortfolio />}/>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/machine-learning-projects" element={<Blog1 />} />
        <Route path="/blog/medical-imaging" element={<Blog5 />} />
        <Route path="/blog/professional-ai" element={<Blog4 />} />
        <Route path="/blog/information-retrieval" element={<Blog3 />} />
        <Route path="/blog/outsourcing" element={<Blog2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/attributions" element={<Attributions />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
