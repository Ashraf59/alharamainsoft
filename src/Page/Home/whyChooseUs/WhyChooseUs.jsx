
import './whyChooseUs.css';
import model from '../../../assets/banner-video/web-development.jpg';



const WhyChooseUs = () => {
    return (
        <div className="hero py-10 bg-black mt-20 pt-6 whyChooseUs-bg">
        <div className="hero-content flex justify-center items-center flex-col lg:flex-row">
          <div className="text-center lg:text-left w-full max-w-md md:max-w-xl lg:max-w-md" data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine" data-aos-duration="1000">
         
            <p className="py-6 whyChooseUs-subtitle uppercase">REASON TO CHOOSE US</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl whychooseUs-title">We provide truly prominent IT solutions.</h1>
            <p className="py-6 whychooseUs-p text-base lg:text-xl text-gray-400">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
          </div>
          <div className="mx-auto max-w-xl model-img " data-aos="fade-left"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine" data-aos-duration="1000">
          <figure><img className='rounded-xl lg:w-full' src={model} alt="Album"/></figure>
          </div>
        </div>
      </div>
    );
};

export default WhyChooseUs;