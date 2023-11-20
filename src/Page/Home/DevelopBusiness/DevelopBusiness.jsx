import './developBusiness.css';
import itBusiness from '../../../assets/banner-video/it-business.png';


const DevelopBusiness = () => {
    return (
        <div className="max-w-6xl mx-auto mt-20 lg:mt-40">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-full md:max-w-xl max-w-md" data-aos="fade-up"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <p className="uppercase company-title">WELCOME TO OUR COMPANY</p>
            <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl">We Make Awesome website & Apps For Your Newly Business</h1>
            <p className="py-6 text-base md:text-xl lg:text-xl text-gray-400"> Drive innovation with elite tech teams. Experience excellence as we connect you with a dedicated remote workforce of exceptional freelance talent, tailored to meet all your software development requirements.</p>
          </div>
          <div className="max-w-2xl model-img" data-aos="fade-up"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine" data-aos-duration="2000">
          <figure><img className='' src={itBusiness} alt="Album"/></figure>
          </div>

         
        </div>
      </div>
    );
};

export default DevelopBusiness;