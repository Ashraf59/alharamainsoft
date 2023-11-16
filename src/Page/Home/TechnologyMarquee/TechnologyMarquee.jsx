import Marquee from "react-fast-marquee";
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

const TechnologyMarquee = () => {
    return (
        <div className="">
            <div className='text-center pt-20 lg:pt-32'>
            <p className='uppercase ourTech-title'>OUR TECH STACK</p>
            <h1 className='mt-5 text-3xl md:text-5xl font-bold ourTech-subtitle'>We focus on trending technologies</h1>

            <p className='py-6 text-base max-w-xs md:max-w-2xl md:text-xl mx-auto'>We focus on leading technologies for building high performing web & mobile products.</p>
            </div>
           <Marquee direction="right">
           <div className="mr-14">
            <img className="w-48  object-contain" src={reactPng} alt="" />
          </div>
          <div className="mr-14">
          <img className="w-48  object-contain" src={nextPng} alt="" />
          </div>
          <div className="mr-14">
          <img className="w-48  object-contain" src={typescriptPng} alt="" />
          </div>
          <div className="mr-14">
          <img className="w-48  object-contain" src={nodePng} alt="" />
          </div>
          <div className="mr-14">
          <img className="w-48  object-contain" src={tailwindPng} alt="" />
          </div>
          <div className="mr-14">
          <img className="w-48 h-28 object-contain" src={bootstrapPng} alt="" />
          </div>
          <div className="mr-14">
          <img className="w-48 object-contain" src={reduxPng} alt="" />
          </div>
          <div className="mr-14">
          <img className="w-48 object-contain" src={mongodbPng} alt="" />
          </div>
          <div className="mr-14">
          <img className="w-48 object-contain" src={reactNative} alt="" />
          </div>
          <div className="mr-14">
          <img className="w-48 object-contain" src={flutter} alt="" />
          </div>
          <div className="mr-14">
          <img className="w-48 object-contain" src={wordpress} alt="" />
          </div>
            </Marquee> 
        </div>
    );
};

export default TechnologyMarquee;