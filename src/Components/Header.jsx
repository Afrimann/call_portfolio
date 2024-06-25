import React, { useState } from 'react'
import logo from './Images/logo-dark.svg'
import { Link } from 'react-router-dom'
import './Header.css'
import { motion } from 'framer-motion'
import Form from './Calli-Home/Form.jsx'

const Header = ({onShowForm}) => {
  const btn_name = 'Lets Talk'
  const transition = [{ type: 'spring', duration: 3 }]


  return (

    <motion.div
      initial={{ opacity: 0, top: -20 }}
      whileInView={{ opacity: 1, top: 0 }}
      transition={{ ...transition, duration: 1 }}

      className='Header'>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-nav">
          <nav>
            <ul>
              <li><a href="#" className='active'><Link to='/'>Home</Link></a></li>
              <li><a href="#"><Link to='/about'>About</Link></a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <button className='btn_header btn' onClick={onShowForm}>{btn_name}</button>
        </div>
      </div>
    </motion.div>
  )
}

export default Header
