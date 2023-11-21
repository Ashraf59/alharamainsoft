import './about.css';
import bigImg from '../../../assets/banner-video/about-big.jpg';
import smallImg from '../../../assets/banner-video/about-sm.jpg';

const About = () => {
    return (
        <div className='max-w-6xl mx-auto mt-20 lg:mt-24' id='about'>
            
            <div className="flex justify-around items-center flex-col-reverse lg:flex-row">
            <div className="mt-12 relative">
            <div data-aos="fade-up"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <img className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg w-11/12 mx-auto' src={bigImg} alt="" />
            </div>
            <div className='absolute -bottom-8 mx-8 lg:-right-8' data-aos="fade-up"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine" data-aos-duration="2000">
            <img className='rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-10/12 mx-auto' src={smallImg} alt="" />
            </div>
          </div>
          <div className="text-center lg:text-left w-full max-w-md md:max-w-xl" data-aos="fade-up"
        data-aos-duration="3000">
            <p className="py-6 uppercase about-title">who we are</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl"> We run all kinds of digital services that vow your success.</h1>
            <p className="py-6 text-base md:text-xl md:max-w-lg max-w-xs mx-auto lg:text-xl text-gray-500">Embark on a digital journey of innovation and excellence with Alharamain Soft, founded in 2023. Our seasoned team, meticulously curated for expertise, crafts bespoke solutions in web development, Android & iOS apps, digital marketing, and UI/UX design. With over 7 years of collective mastery and a global clientele, we seamlessly blend creativity and functionality to redefine your digital presence. Trust us to elevate your vision into a digital masterpiece – because at Alharamain Soft, success is not just a goal; it's a commitment.</p>

          </div>
          
        </div>
        </div>
    );
};

export default About;