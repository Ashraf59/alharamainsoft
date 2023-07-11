import React from 'react';
import './Banner.css';
import myGif from '../../../assets/banner-video/giphy .gif'
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className='banner-section flex justify-around bg-black items-center'>
            <div className='banner-left'>
                <h1 className='text-white text-left ms-12 text-5xl font-bold leading-[4rem]'>Empower Your <span style={{ fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Business', 'Startup', 'Technology', 'Software']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </span>
                    Website with Alharamain</h1>
            </div>
            <div className='banner-right h-screen max-w-lg w-full'>
            <img src={myGif} alt="my-gif" />
            </div>
              
            
        </div>
    );
};

export default Banner;