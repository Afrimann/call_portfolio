import React from 'react'
import './Form.css'
import { motion } from 'framer-motion'

const Form = ({onCloseForm}) => {
    const transition = [{ type: 'spring', duration: 3 }]

    const parentVariants = {
        hidden: {
            opacity: 0
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
        <motion.div 
        variants={parentVariants}
        initial= 'hidden'
        whileInView = 'visible'
        transition={{...transition, duration: 6}}
        className="Wrapper">
            <div className='form'>
            <form className='form-container' action="">
                <span className="form-head">Let's Talk!</span>
                <div className="form-body">
                    <div>
                        <label htmlFor="fullName">FullName</label>
                        <input type="text" placeholder='Full Name' />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="alpha" placeholder='Phone Number' />
                    </div>
                    <div>
                        <label htmlFor="msg">Text</label>
                        <textarea name="msg" id="msg" cols='10' rows= '2' placeholder='Your Message'></textarea>
                    </div>
                    <button type='button' onClick={onCloseForm}>Submit</button>
                </div>
            </form>
        </div>
        </motion.div>
    )
}

export default Form
