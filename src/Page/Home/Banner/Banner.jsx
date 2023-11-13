


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
      <Slider {...settings} className=''>
      <div className="min-h-screen slider__item-01 ">
      <div className="banner-title left-0 absolute top-1/3 w-full">
      <h3 className='text-center text-white font-medium text-7xl w-11/12 mx-auto duration-500'>Our Digital Solutions Are the Key to Making Your Dreams Come True</h3>
          <p className='text-center text-white font-medium text-2xl'>Alharamain Soft is a global leader in modern business innovation. We encourage you to dream big and provide them with comprehensive solutions designed specifically to meet your visual and performance needs.</p>
          </div>
  
          <div className='left-1/2 absolute top-3/4'>
          <button className="bg-transparent text-white hover:bg-gray-300 hover:text-black py-2 px-4 border border-gray-400 rounded shadow">
             Contact Now
          </button>
          </div>
             
      </div>
  
      <div className="min-h-screen slider__item-02">
      <div className="banner-title left-0 absolute top-1/3 w-full">
      <h3 className='text-center text-white font-medium text-8xl duration-500'>Apps Development <br /> Android and iOS</h3>
          <p className='text-center text-white font-medium text-2xl w-9/12 mx-auto'>Alharamain Soft's dedicated Android and iOS development team, crafting seamless digital solutions for a dynamic future.</p>
          </div>
  
          <div className='left-1/2 absolute top-3/4'>
          <button className="bg-transparent text-white hover:bg-gray-300 hover:text-black py-2 px-4 border border-gray-400 rounded shadow">
             Contact Now
          </button>
          </div>
      </div>
  
      <div className="min-h-screen slider__item-03">
      <div className="banner-title left-0 absolute top-1/3 w-full">
      <h3 className='text-center text-white font-medium text-8xl duration-500'>Web Development</h3>
          <p className='text-center text-white font-medium text-2xl w-9/12 mx-auto'>Alharamain Soft's Web Development Team, blending design finesse with technical prowess to create websites that tell your unique story.</p>
          </div>
  
          <div className='left-1/2 absolute top-3/4'>
          <button className="bg-transparent text-white hover:bg-gray-300 hover:text-black py-2 px-4 border border-gray-400 rounded shadow">
             Contact Now
          </button>
          </div>
      </div>
      <div className="min-h-screen slider__item-04">
      <div className="banner-title left-0 absolute top-1/3 w-full">
      <h3 className='text-center text-white font-medium text-8xl duration-500'>Digital Marketing</h3>
          <p className='text-center text-white font-medium text-2xl w-9/12 mx-auto'>Alharamain Soft's Digital Marketing Team, where creativity meets strategy to propel your brand into the spotlight. Let's amplify your online presence together!</p>
          </div>
  
          <div className='left-1/2 absolute top-3/4'>
          <button className="bg-transparent text-white hover:bg-gray-300 hover:text-black py-2 px-4 border border-gray-400 rounded shadow">
             Contact Now
          </button>
          </div>
      </div>
      <div className="min-h-screen slider__item-05">
      <div className="banner-title left-0 absolute top-1/3 w-full">
      <h3 className='text-center text-white font-medium text-8xl duration-500'>UI / UX Design</h3>
          <p className='text-center text-white font-medium text-2xl w-9/12 mx-auto'>Alharamain Soft's UI/UX Team, crafting digital experiences that resonate with users on a deeper level. Let's build a user-centric world together!</p>
          </div>
  
          <div className='left-1/2 absolute top-3/4'>
          <button className="bg-transparent text-white hover:bg-gray-300 hover:text-black py-2 px-4 border border-gray-400 rounded shadow">
             Contact Now
          </button>
          </div>
      </div>
    </Slider>
    );
};

export default Banner;