import React from 'react'
import '../Calli-Home/RecentWorks.css'
import img1 from '../Images/calligraphy-img-04.jpg'
import img2 from '../Images/calligraphy-artist-work-2.jpg'
import img3 from '../Images/calligraphy-artist-work-3.jpg'
import img4 from '../Images/calligraphy-img-02.jpg'
import img5 from '../Images/calligraphy-artist-work-4.jpg'
import img6 from '../Images/calligraphy-img-05.jpg'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';



const RecentWorks = () => {
    // const works = [
    //     {
    //         id: '1',
    //         img: img1,
    //         imgText: 'Venenatis Odio Viverra',
    //         imgBtnText: 'View Detail'
    //     },
    //     {
    //         id: '1',
    //         img: img2,
    //         imgText: 'Venenatis Odio Viverra',
    //         imgBtnText: 'View Detail'
    //     },
    //     {
    //         id: '1',
    //         img: img3,
    //         imgText: 'Venenatis Odio Viverra',
    //         imgBtnText: 'View Detail'
    //     },
    //     {
    //         id: '1',
    //         img: img4,
    //         imgText: 'Venenatis Odio Viverra',
    //         imgBtnText: 'View Detail'
    //     },
    //     {
    //         id: '1',
    //         img: img5,
    //         imgText: 'Venenatis Odio Viverra',
    //         imgBtnText: 'View Detail'
    //     },
    //     {
    //         id: '1',
    //         img: img6,
    //         imgText: 'Venenatis Odio Viverra',
    //         imgBtnText: 'View Detail'
    //     }
    // ]


    return (
        <div className='RecentWorks'>
            <div className="about-head">
                <div className="head-title">
                    <span>Recent Works</span>
                    <p>Dictum congue fermentum in ut tortor, pretium accumsan at metus vitae, posuere egestas senectus in porttitor tortor suscipit</p>
                </div>
                <div className="about-btn">
                    <button className='works-btn'>View All Works</button>
                </div>

            </div>

            <div className="works-showcase">

                <Splide
                    options={{
                        rewind: false,
                        gap: '1rem',
                    }}
                    aria-label="My Favorite Images"
                >
                    <SplideSlide className='slide-container'>
                        <div>
                            <img src={img1} alt="" />
                            <span style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, suscipit.</span>
                        </div>
                        <div>
                            <img src={img2} alt="" />
                            <span style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, suscipit.</span>
                        </div>
                        <div>
                            <img src={img3} alt="" />
                            <span style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, suscipit.</span>
                        </div>
                    </SplideSlide>

                    <SplideSlide className='slide-container'>
                        <div>
                            <img src={img4} alt="" />
                            <span style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, suscipit.</span>
                        </div>
                        <div>
                            <img src={img5} alt="" />
                            <span style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, suscipit.</span>
                        </div>
                        <div>
                            <img src={img6} alt="" />
                            <span style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, suscipit.</span>
                        </div>
                    </SplideSlide>
                    <SplideSlide className='slide-container'>
                        <div>
                            <img src={img3} alt="" />
                            <span style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, suscipit.</span>
                        </div>
                        <div>
                            <img src={img1} alt="" />
                            <span style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, suscipit.</span>
                        </div>
                        <div>
                            <img src={img4} alt="" />
                            <span style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, suscipit.</span>
                        </div>
                    </SplideSlide>
                </Splide>


            </div>
        </div>

    )
}

export default RecentWorks
