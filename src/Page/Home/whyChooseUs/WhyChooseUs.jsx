
import './whyChooseUs.css';
import model from '../../../assets/banner-video/why-choose-us-model.png';

const WhyChooseUs = () => {
    return (
        <div className="hero min-h-screen whyChooseUs-bg">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-full max-w-md">
            <p className="py-6 text-lg whyChooseUs-subtitle font-semibold uppercase">REASON TO CHOOSE US</p>
            <h1 className="text-6xl font-bold">We provide truly prominent IT solutions.</h1>
            <p className="py-6 text-xl">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
          </div>
          <div className="max-w-2xl model-img">
          <figure><img src={model} alt="Album"/></figure>
          </div>
        </div>
      </div>
    );
};

export default WhyChooseUs;