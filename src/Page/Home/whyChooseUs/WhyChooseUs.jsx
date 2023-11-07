
import './whyChooseUs.css';
import model from '../../../assets/banner-video/web-development.jpg';



const WhyChooseUs = () => {
    return (
        <div className="hero min-h-screen bg-black pt-6 whyChooseUs-bg">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-full max-w-md">
         
            <p className="py-6 whyChooseUs-subtitle uppercase">REASON TO CHOOSE US</p>
            <h1 className="text-6xl whychooseUs-title">We provide truly prominent IT solutions.</h1>
            <p className="py-6 whychooseUs-p text-xl text-gray-400">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
          </div>
          <div className="max-w-xl model-img ">
          <figure><img className='rounded-xl w-full' src={model} alt="Album"/></figure>
          </div>
        </div>
      </div>
    );
};

export default WhyChooseUs;