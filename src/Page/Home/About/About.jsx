import './about.css';
import bigImg from '../../../assets/banner-video/about-big.jpg';
import smallImg from '../../../assets/banner-video/about-sm.jpg';

const About = () => {
    return (
        <div className=' py-28 h-screen '>
            
            <div className="flex justify-around items-center flex-col lg:flex-row">
            <div className="mt-12 relative">
            <div className='border-b-8 border-gray-500 border-s-8 rounded-lg'>
            <img className='rounded-r-lg' src={bigImg} alt="" />
            </div>
            <div className='absolute -bottom-8 -right-8 border-e-8 border-b-8 border-gray-500 rounded-lg'>
            <img className='rounded-l-lg' src={smallImg} alt="" />
            </div>
          </div>
          <div className="text-center lg:text-left w-full max-w-md">
            <p className="py-6 uppercase about-title">who we are</p>
            <h1 className="text-6xl"> We run all kinds of software services that vow your success.</h1>
            <p className="py-6 text-xl text-gray-400">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>

            <div className='about-div-bg rounded-lg p-6'>
              <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote.</p>
            </div>
          </div>
          
        </div>
        </div>
    );
};

export default About;