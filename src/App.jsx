import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from '../src/Components/Calli-Home/Home.jsx'
import './App.css'
import {motion} from 'framer-motion'
import About from '../src/Components/Calli-About/About.jsx'
const App = () => {
    
    return (
        <div className='App'>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='about' element={<About/>} />
            </Routes>


        </div>
    )
}

export default App
