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


const OurTech = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
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
            <div className='text-center mt-16'>
            <p className='text-lg font-semibold uppercase ourTech-title'>OUR TECH STACK</p>
            <h1 className='mt-5 text-5xl font-bold'>We focus on trending technologies</h1>

            <p className='py-6 text-xl'>We focus on leading technologies for building high performing web & mobile products.</p>
            </div>

            <div className='tech-slider mb-16 mt-6'>
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
        </Slider>

            </div>
        </div>
    );
};

export default OurTech;