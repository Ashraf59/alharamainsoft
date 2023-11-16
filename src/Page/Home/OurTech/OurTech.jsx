import './ourTech.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import reactPng from '../../../assets/tech/reactjs.png';
import typescriptPng from '../../../assets/tech/typescript.png';
import nextPng from '../../../assets/tech/Nextjs-logo.svg.png';
import nodePng from '../../../assets/tech/nodejs.png';
import bootstrapPng from '../../../assets/tech/bootstrap.png';
import tailwindPng from '../../../assets/tech/tailwind.png';
import reduxPng from '../../../assets/tech/Redux.png';
import mongodbPng from '../../../assets/tech/MongoDB.png';
import reactNative from '../../../assets/tech/react native.png';
import flutter from '../../../assets/tech/flutter.png';
import wordpress from '../../../assets/tech/WordPress.png';


const OurTech = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 7000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div>
            <div className='text-center pt-32'>
            <p className='uppercase ourTech-title'>OUR TECH STACK</p>
            <h1 className='mt-5 text-4xl md:text-5xl font-bold ourTech-subtitle'>We focus on trending technologies</h1>

            <p className='py-6 px-4 text-2xl w-48 md:w-10/12'>We focus on leading technologies for building high performing web & mobile products.</p>
            </div>

            <div className='tech-slider mb-16'>
            <Slider {...settings}>
          <div>
            <img src={reactPng} alt="" />
          </div>
          <div>
          <img src={nextPng} alt="" />
          </div>
          <div>
          <img src={typescriptPng} alt="" />
          </div>
          <div>
          <img src={nodePng} alt="" />
          </div>
          <div>
          <img src={tailwindPng} alt="" />
          </div>
          <div>
          <img src={bootstrapPng} alt="" />
          </div>
          <div>
          <img src={reduxPng} alt="" />
          </div>
          <div>
          <img src={mongodbPng} alt="" />
          </div>
          <div>
          <img src={reactNative} alt="" />
          </div>
          <div>
          <img src={flutter} alt="" />
          </div>
          <div>
          <img src={wordpress} alt="" />
          </div>
        </Slider>

            </div>
        </div>
    );
};

export default OurTech;