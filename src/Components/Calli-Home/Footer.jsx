import React from 'react'
import '../Calli-Home/Footer.css'
import logo from '../Images/logo-light.svg'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Footer-container">
                <div className="flex-1 flex">
                    <img src={logo} alt="" />
                    <p>
                        Amet morbi justo facilisis integer odio eu feugiat egestas nulla a ipsum morbi iaculis urna nunc.
                    </p>
                </div>
                <div className="flex-2 flex">
                    <span className='lg-title'>Contact Info</span>
                    <div className="address">
                        <span>123 Fifth Ave, New York, NY 12004, USA.</span>
                        <span>+1 123 456 78 90.</span>
                        <span>Ammywatt@gmail.com</span>
                    </div>
                </div>
                <div className="flex-3 flex">
                    <span className='lg-title'>Quick Link</span>

                    <div>
                        <li>About Me</li>
                        <li>My Works</li>
                        <li>Capabilities</li>
                        <li>Let's Talk!</li>
                    </div>

                </div>
                <div className="flex-4 flex">
                    <span className='lg-title'>My Expertise</span>
                    <div>
                        <li>Type Design</li>
                        <li>Advertising</li>
                        <li>Product</li>
                        <li>Editorial</li>
                    </div>
                </div>
            </div>


            <div className="work-type">

                <li>Logo Type</li>
                <li>Publishing</li>
                <li>Wall Art</li>
                <li>Signage Design</li>

                <div className="socials">
                    <div className="social-icons">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-youtube"></ion-icon>
                    </div>
                </div>
                <hr />

               <div className='credit'>
               <span className="content">
                    Copyright &copy; 2024 | Created by PeterOmohh
                </span>
               </div>
            </div>
        </div>
    )
}

export default Footer
