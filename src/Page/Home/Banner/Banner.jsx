
import './Banner.css';
import { Typewriter } from 'react-simple-typewriter'
import heroVideo from '../../../assets/banner-video/hero-bg.mp4';

const Banner = () => {
    return (
        <div className='banner-section'>
            <div className='overlay'></div>
            <video autoPlay loop muted>
                <source src={heroVideo} type='video/mp4' />
            </video>
              <div className='container banner-content'>
                <h1 className='text-white max-w-3xl mx-12 text-5xl font-bold leading-[4rem]'>Empower Your <span style={{ fontWeight: 'bold' }}>
          
          <Typewriter
            words={['Business', 'Startup', 'Technology', 'Software']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </span>
                    Website with Alharamainsoft</h1>
                    <p className='text-white text-2xl ms-12 max-w-2xl mt-6 leading-16 tracking-wide'>We provide the most responsive and functional IT design for companies and businesses worldwide.</p>

                    
                    <div className="buttons">
                     <button className="btn-hover color-3">Get Started</button>
                    </div>
            </div>  
           
              
            
        </div>
    );
};

export default Banner;