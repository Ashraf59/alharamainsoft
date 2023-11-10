


import Slider from 'react-slick';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  const settings = {
    fade:true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  }
  
    return (
      <Slider {...settings} className='hero__slider'>
      <div className="min-h-screen slider__item-01 ">
      <div className="banner-title left-0 absolute top-1/3 w-full">
      <h3 className='text-center text-white font-medium text-7xl'>Turn Your Dreams Into Reality
          With Our Digital Solutions</h3>
          <p className='text-center text-white font-medium text-2xl'>Alharamain Soft is a global leader in modern business innovation. We encourage you to dream big and provide them with comprehensive solutions designed specifically to meet your visual and performance needs.</p>
          </div>
  
          <div className='left-1/2 absolute top-3/4'>
          <button className="bg-transparent text-white hover:bg-gray-300 hover:text-black py-2 px-4 border border-gray-400 rounded shadow z-10">
             Contact Now
          </button>
          </div>
             
      </div>
  
      <div className="min-h-screen slider__item-02 mt0">
      <div className="banner-title left-0 absolute top-1/3 w-full">
      <h3 className='text-center text-white font-medium text-7xl'>Apps Development Android and iOS</h3>
          <p className='text-center text-white font-medium text-2xl'>Alharamain Soft is a global leader in modern business innovation. We encourage you to dream big and provide them with comprehensive solutions designed specifically to meet your visual and performance needs.</p>
          </div>
  
          <div className='left-1/2 absolute top-3/4'>
          <button className="bg-transparent text-white hover:bg-gray-300 hover:text-black py-2 px-4 border border-gray-400 rounded shadow z-20">
             Contact Now
          </button>
          </div>
      </div>
  
      <div className="min-h-screen slider__item-03 mt0">
      <div className="banner-title left-0 absolute top-1/3 w-full">
      <h3 className='text-center text-white font-medium text-7xl'>Web Development</h3>
          <p className='text-center text-white font-medium text-2xl'>Alharamain Soft is a global leader in modern business innovation. We encourage you to dream big and provide them with comprehensive solutions designed specifically to meet your visual and performance needs.</p>
          </div>
  
          <div className='left-1/2 absolute top-3/4'>
          <button className="bg-transparent text-white hover:bg-gray-300 hover:text-black py-2 px-4 border border-gray-400 rounded shadow z-30">
             Contact Now
          </button>
          </div>
      </div>
    </Slider>
    );
};

export default Banner;