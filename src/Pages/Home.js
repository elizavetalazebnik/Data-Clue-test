import React from 'react'
import Slider from '../components/Slider'
import Services from '../components/Services'
import Intro from '../components/Intro'
import Header from '../components/Header'
import LatestCaseStudies from '../components/LatestCaseStudies'

function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <LatestCaseStudies />
      <Slider />
    </>
  )
}

export default Home
