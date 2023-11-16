


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
      <h3 className='text-center text-white font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl w-11/12 mx-auto duration-500'>Alharamain Soft's Digital Solutions</h3>
          <p className='text-center text-white font-medium text-lg lg:text-2xl w-9/12 mx-auto'>Our Digital Solutions Are the Key to Making Your Dreams Come True.</p>
          </div>
  
          {/* <div className='left-1/2 absolute top-3/4'>
          <button className="bg-transparent text-white hover:bg-gray-300 hover:text-black py-2 px-4 border border-gray-400 rounded shadow">
             Contact Now
          </button>
          </div> */}
             
      </div>
  
      <div className="min-h-screen slider__item-02">
      <div className="banner-title left-0 absolute top-1/3 w-full">
      <h3 className='text-center text-white font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl duration-500'>Apps Development <br /> Android and iOS</h3>
          <p className='text-center text-white font-medium text-lg lg:text-2xl w-9/12 mx-auto'>Our dedicated Android and iOS development team is ready to help your business.</p>
          </div>
  
          {/* <div className='left-1/2 absolute top-3/4'>
          <button className="bg-transparent text-white hover:bg-gray-300 hover:text-black py-2 px-4 border border-gray-400 rounded shadow">
             Contact Now
          </button>
          </div> */}
      </div>
  
      <div className="min-h-screen slider__item-03">
      <div className="banner-title left-0 absolute top-1/3 w-full">
      <h3 className='text-center text-white font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl duration-500'>Web Development</h3>
          <p className='text-center text-white font-medium text-lg lg:text-2xl w-9/12 mx-auto'>Our dedicated web development team is ready to help your business.</p>
          </div>
  
          {/* <div className='left-1/2 absolute top-3/4'>
          <button className="bg-transparent text-white hover:bg-gray-300 hover:text-black py-2 px-4 border border-gray-400 rounded shadow">
             Contact Now
          </button>
          </div> */}
      </div>
      <div className="min-h-screen slider__item-04">
      <div className="banner-title left-0 absolute top-1/3 w-full">
      <h3 className='text-center text-white font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl duration-500'>Digital Marketing</h3>
          <p className='text-center text-white font-medium text-lg lg:text-2xl w-9/12 mx-auto'>Our dedicated digital marketing team is ready to help your business.</p>
          </div>
  
          {/* <div className='left-1/2 absolute top-3/4'>
          <button className="bg-transparent text-white hover:bg-gray-300 hover:text-black py-2 px-4 border border-gray-400 rounded shadow">
             Contact Now
          </button>
          </div> */}
      </div>
      <div className="min-h-screen slider__item-05">
      <div className="banner-title left-0 absolute top-1/3 w-full">
      <h3 className='text-center text-white font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl duration-500'>UI / UX Design</h3>
          <p className='text-center text-white font-medium text-lg lg:text-2xl w-9/12 mx-auto'>Our dedicated ui/ux team is ready to help your business.</p>
          </div>
  
          {/* <div className='left-1/2 absolute top-3/4'>
          <button className="bg-transparent text-white hover:bg-gray-300 hover:text-black py-2 px-4 border border-gray-400 rounded shadow">
             Contact Now
          </button>
          </div> */}
      </div>
    </Slider>
    );
};

export default Banner;