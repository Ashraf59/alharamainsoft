import './developBusiness.css';
import itBusiness from '../../../assets/banner-video/it-business.png';


const DevelopBusiness = () => {
    return (
        <div className="hero min-h-screen mt-[43rem] md:mt-[47rem] lg:mt-[29rem]">
        <div className="hero-content flex-col lg:flex-row"  data-aos="zoom-in" data-aos-duration="2000">
          <div className="text-center lg:text-left w-full md:max-w-xl max-w-md">
            <p className="uppercase company-title">WELCOME TO OUR COMPANY</p>
            <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl">We Make Awesome website & Apps For Your Newly Business</h1>
            <p className="py-6 text-base md:text-xl lg:text-xl text-gray-400">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
          </div>
          <div className="max-w-2xl model-img">
          <figure><img className='' src={itBusiness} alt="Album"/></figure>
          </div>

         
        </div>
      </div>
    );
};

export default DevelopBusiness;