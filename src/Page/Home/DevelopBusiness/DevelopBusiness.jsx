import './developBusiness.css';
import itBusiness from '../../../assets/banner-video/it-business.png';

const DevelopBusiness = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-full max-w-md">
            <p className="text-lg developBusiness-title font-semibold uppercase">WELCOME TO OUR COMPANY</p>
            <h1 className="mt-5 text-5xl font-bold">We Make Awesome website & Apps For Your Newly Business</h1>
            <p className="py-6 text-xl">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
          </div>
          <div className="max-w-2xl model-img">
          <figure><img src={itBusiness} alt="Album"/></figure>
          </div>
        </div>
      </div>
    );
};

export default DevelopBusiness;