import React from 'react'
import { motion } from 'framer-motion'
import '../Calli-Home/Reviews.css'
import reviewImage1 from '../Images/calligraphy-artist-reviewer.jpg'
import reviewImage2 from '../Images/calligraphy-artist-reviewer-2.jpg'
import Sponsors from './Sponsors'
const Reviews = () => {
    const reviewDetail = [
        {
            name: 'EMMA HART',
            picture: reviewImage1,
            content: '“Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla.”'
        },
        {
            name: 'ERIK DOE',
            picture: reviewImage2,
            content: '“Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla.”'
        },
    ]
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
    const spanVariants = {
        hidden: { opacity: 0, y: 70 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div className='Reviews'>
            <h2 style={{paddingBottom: '30px'}}>My Reviews</h2>

            <motion.div
                variants={parentVariants}
                transition={{ duration: 0.5 }}

                className="review-container">

                {
                    reviewDetail.map((review, index) => (
                        <motion.div
                            variants={spanVariants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5 }}


                            className="review">
                            <img src={review.picture} alt="" />
                            <p>{review.content}</p>
                            <span>{review.name}</span>
                        </motion.div>
                    ))
                }
            </motion.div>

        </div>
    )
}

export default Reviews
