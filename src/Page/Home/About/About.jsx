import './about.css';
import bigImg from '../../../assets/banner-video/about-big.jpg';
import smallImg from '../../../assets/banner-video/about-sm.jpg';

const About = () => {
    return (
        <div className='mt-14 lg:py-28 h-screen '>
            
            <div className="flex justify-around items-center flex-col-reverse lg:flex-row">
            <div className="mt-12 relative">
            <div data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <img className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg w-11/12 mx-auto' src={bigImg} alt="" />
            </div>
            <div className='absolute -bottom-8 mx-8 lg:-right-8' data-aos="fade-left"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <img className='rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-10/12 mx-auto' src={smallImg} alt="" />
            </div>
          </div>
          <div className="text-center lg:text-left w-full max-w-md md:max-w-xl" data-aos="fade-up"
        data-aos-duration="3000">
            <p className="py-6 uppercase about-title">who we are</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl"> We run all kinds of software services that vow your success.</h1>
            <p className="py-6 text-base md:text-xl md:max-w-lg max-w-xs mx-auto lg:text-xl text-gray-400">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>

            <div className='about-div-bg max-w-xs  md:max-w-lg mx-auto  rounded-lg p-6'>
              <p className='text-base md:text-xl'>Accelerate innovation with world-class tech teams We’ll match you to an entire remote.</p>
            </div>
          </div>
          
        </div>
        </div>
    );
};

export default About;