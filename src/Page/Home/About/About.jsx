import './about.css';
import devVideo from '../../../assets/banner-video/dev.mp4';

const About = () => {
    return (
        <div className='about-bg mb-28 h-screen '>
            
            <div className="flex justify-around items-center flex-col lg:flex-row">
            <div className="mt-12">
            <video muted loop autoPlay={"true"} className="mt-12 rounded-2xl shadow-2xl shadow-cyan-300" style={{height: "450px"}}>
  <source
    src={devVideo}
    type="video/mp4"
  />
</video>
{/* <img src={devVideo} alt="dev-video"  /> */}
          </div>
          <div className="text-center lg:text-left w-full max-w-md">
            <p className="py-6 text-lg font-semibold uppercase about-title">who we are</p>
            <h1 className="text-5xl font-bold text-white"> Elevate your business with our expertise.</h1>
            <p className="py-6 text-xl text-white">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
          </div>
          
        </div>
        </div>
    );
};

export default About;