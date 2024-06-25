import React from 'react'
import '../Calli-Home/PersonalAbout.css'
import ArtistImage from '../Images/cal-artist.jpg'
import { motion } from 'framer-motion'
const PersonalAbout = () => {
    const transition = [{ type: 'spring', duration: 3 }]

    const listExp = [
        {
            year: '2002',
            experience: 'Nibh aliquet turpis morbi quam nibh'
        },
        {
            year: '2002',
            experience: 'Sit vestibulum dignissim erat suspendisse'
        },
        {
            year: '2002',
            experience:
                'Vestibulum lectus ultricies purus augue egestas'
        },
        {
            year: '2002',
            experience: 'Faucibus molestie cras pellentesque aliquet amet'
        },
        {
            year: '2002',
            experience:
                'Commodo scelerisque turpis praesent'
        }
    ]

    // variants for framer-motion
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
        <div className="PersonalAbout">
            <div className='PersonalAboutContainer'>
                <motion.div
                    variants={spanVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.3 }}

                    className="col-01">
                    <span className='lg-title persAbout-title'>About Me</span>
                    <p className='para-1'>
                        Duis ullamcorper ante vel sit nisl pellentesque faucibus eget diam nunc lacus placerat porttitor mi, aliquam amet faucibus sed dui.
                    </p>
                    <p className='para-2'>
                        Ut integer turpis etiam aliquet vulputate cras neque morbi ipsum maecenas vel velit cum a pellentesque egestas sit quam urna, consectetur a malesuada ut ut aliquet aliquet non nullam dictum congue porttitor sit pellentesque massa est sollicitudin.
                    </p>
                </motion.div>

                <motion.div
                    variants={childVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.9 }}
                    className="col-02">

                    <div className="artist-image">
                        <img src={ArtistImage} alt="" />
                    </div>
                </motion.div>
            </div>
            <button className='learn-more btn-transparent btn'>Read More <ion-icon name="arrow-forward-outlinze"></ion-icon></button>

            {/* showcase */}
            <div className="showcase">
                <div className="achievements">
                    <motion.div
                        variants={childVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1 }}
                        className="ach-container">

                        <div className="box">
                            <span className="name">128</span>
                            <span className="ach-title">PROJECTS</span>
                        </div>
                        <div className="box">
                            <span className="name">420</span>
                            <span className="ach-title">ARTWORKS</span>
                        </div>
                        <div className="box">
                            <span className="name">4</span>
                            <span className="ach-title">AWARRDS</span>
                        </div>
                        <div className="box">
                            <span className="name">88</span>
                            <span className="ach-title">CLIENTS</span>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    variants={childVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1.3 }}
                    className="experiences">

                    <span className="exp-title">My Experiences</span>
                    <div className="list-of-experiences">
                        {
                            listExp.map((eachExp, index) => (
                                <div key={index} className="myExperiences">
                                    <span>{eachExp.year}</span>
                                    <span>{eachExp.experience}</span>
                                </div>
                            ))
                        }
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default PersonalAbout
