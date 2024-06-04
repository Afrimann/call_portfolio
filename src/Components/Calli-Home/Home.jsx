import React from 'react'
import Header from '../Header'
import './Home.css'
import MinHome from './MinHome'
import MinAbout from './MinAbout'
import ViewYoutube from './ViewYoutube'
import PersonalAbout from './PersonalAbout'
import RecentWorks from './RecentWorks'
import Reviews from './Reviews'
import Sponsors from './Sponsors'
import Footer from './Footer'
import { useRef } from 'react'
import { motion, useInView, useAnimate } from 'framer-motion'

const Home = () => {
  const transition = [{ type: 'spring', duration: 3 }]
  const parentVariants = {
    hidden: {
      opacity: 1
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between children animations
        delayChildren: 0.25,  // initial delay before the first child starts animating
      }
    }
  };
  const childVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 }
  }

  const spanVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className='Home'>
      <MinHome />
      <MinAbout />
      <ViewYoutube />
      <PersonalAbout />
      <RecentWorks />
      <Reviews />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default Home
