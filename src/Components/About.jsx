import React from 'react'
import HeroSection from './HeroSection'

const About = () => {
  const data = {
    name: "Amit Kumar",
    image: "./images/about.svg"
  }
  return <HeroSection {...data} />
}

export default About
