import React from 'react'
import logo1 from '../Images/logo-1.svg'
import logo2 from '../Images/logo-2.svg'
import logo3 from '../Images/logo-3.svg'
import logo4 from '../Images/logo-4.svg'
import logo5 from '../Images/logo-5.svg'
import '../Calli-Home/Reviews.css'
const Sponsors = () => {
    const logos = [
        {
            id:'1',
            logo: logo1
        },
        {
            id:'1',
            logo: logo2
        },
        {
            id:'1',
            logo: logo3
        },
        {
            id:'1',
            logo: logo4
        },
        {
            id:'1',
            logo: logo5
        }
    ]
    return (
        
        <div className='Sponsors'>
            {
                logos.map((logo,index)=> (
                    <div className="logo">
                        <img src={logo.logo} alt="" />
                    </div>
                ))
                
            }
        </div>
    )
}

export default Sponsors
