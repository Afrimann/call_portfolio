import React from 'react'
import './MinHome.css'
import Header from '../Header'
import handImg from '../Images/calligraphy-artist-hero-hand-img-bg.png'
import { motion } from 'framer-motion'
const MinHome = () => {
  const transition = [{type:'spring',duration : 3}]
  return (
    <div className='MinHome'>
      <Header />

      <div
      className="home">
        <div className="home-title">
          <motion.span
          initial = {{opacity: 0, top : -20}}
          whileInView={{opacity : 1, top: 0}}
          transition={{...transition,duration:1}}
          >Hand Lettering &  Calligraphy</motion.span>
          <motion.span
          initial = {{opacity: 0, top : -20}}
          whileInView={{opacity : 1, top: 0}}
          transition={{...transition,duration:1}}

          >Artist Based in New York.</motion.span>
        </div>
        <motion.div
        initial = {{opacity: 0, top : -20}}
        whileInView={{opacity : 1, top: 0}}
        transition={{...transition,duration:1}}
        className="home-btn">
          <button className='explore btn large'>  Explore More</button>
          <button className='learn-more btn'>Learn More <ion-icon name="arrow-forward-outline"></ion-icon></button>
        </motion.div>
        <div className="hand-image">
          <img src={handImg} alt="" />
        </div>
      </div> 
    </div>
  )
}

export default MinHome
