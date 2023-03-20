import React from 'react'
import Mywork from '../Mywork'
import Contact from './Contact'
import HeroSection from './HeroSection'

const Home = (props) => {
  const data = {
    name: "Amit Web-Dev",
    image: "./images/hero.svg"   
  }
  return (
    <>
    <HeroSection {...data} />
    <Mywork/>
    <Contact/>
    </>
  )
}


export default Home
