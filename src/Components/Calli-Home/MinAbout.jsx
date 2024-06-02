import React from 'react'
import './MinAbout.css'
import { motion } from 'framer-motion'


const MinAbout = () => {
    const flexMenuDetails = [
        {
            head: '01',
            title: 'Type Design',
            para: 'In magna aliquet viverra quam quam integer enim vivamus turpis gravida placerat.',
            button: 'Learn More'
        },
        {
            head: '02',
            title: 'Advertising',
            para: 'Elementum laoreet est libero, a mauris diam ac eleifend facilisi ipsum arcu.',
            button: 'Learn More'
        },
        {
            head: '03',
            title: 'Product',
            para: 'A faucibus ornare pellentesque eget convallis sit vel lacus vel amet sit',
            button: 'Learn More'
        },
        {
            head: '04',
            title: 'Editorial',
            para: 'Lectus morbi et posuere eget volutpat volutpat et viverra amet sagittis nec.',
            button: 'Learn More'
        }

    ]
    const transition = [{ type: 'spring', duration: 0.5 }]
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
        <div className='MinAbout'>
            <div className="about-head">
                <div className="head-title">
                    <motion.span
                        variants={spanVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ type: 'spring', duration: 1 }}

                    >What I Do</motion.span>
                    <motion.p
                        variants={spanVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ type: 'tween', duration: 0.3 }}

                    >Dictum congue fermentum in ut tortor, pretium accumsan at metus vitae, posuere egestas senectus in porttitor tortor suscipit</motion.p>
                </div>
                <motion.div
                    variants={spanVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="about-btn">
                    <button className='btn-transparent'>View All Services</button>
                </motion.div>

            </div>

            <motion.div
                variants={parentVariants}
                initial="hidden"
                whileInView="visible"
                className="flex-menu">

                {flexMenuDetails.map((det, index) => (

                    <motion.div
                        variants={childVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5 }}


                        className="menu" key={index}>

                        <span>{det.head}</span>
                        <span>{det.title}</span>
                        <span>{det.para}</span>

                        <div className="menu-nav">
                            <a href="#" className='menu-link'>Learn More</a> <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    )
}

export default MinAbout
