

import web from '../../../assets/banner-video/web.png';
import mob from '../../../assets/banner-video/mob-app.png';
import ui from '../../../assets/banner-video/ui-design.png';
import digital from '../../../assets/banner-video/digital.png';
import Service from './Service';
import './Services.css';


const Services = () => {
    const serviceData = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Transform your business and propel it to new heights of success with our comprehensive web solutions.',
            img:web 
            
        },
        {
            id: 2,
            title: 'Android & iOS Development',
            description: 'High-performing mobile apps for iOS and Android that prioritize user experience.',
            img:mob 
           
           
        },
        {
            id: 3,
            title: 'UI/UX Design',
            description: 'Transforming experiences through creative and functional UI/UX design. Captivate and engage with visually stunning, seamless designs.',
            img:ui 
              
        },
        {
            id: 4,
            title: 'Digital Marketing',
            description: 'Our expert team will help you expand the digital reach of your business and achieve a higher ROI with a conversion focused approach.',
            img:digital 
              
        }
    ]
  
    return (
        <div className='mt-20 lg:mt-32' id='service' data-aos="fade-up"
        data-aos-duration="2000">
            <div className=' text-center uppercase'>
            <h2 className='service-title'>WHAT WE PROVIDE</h2>
            <h3 className='capitalize text-3xl md:text-5xl font-bold mt-5 service-subtitle'>Igniting growth through our tailored digital services.</h3>
            </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 container max-w-xs mx-auto sm:max-w-[600px] lg:max-w-6xl'>
           {
                serviceData.map(service => <Service
                key={service.id}
                service = {service}
                
                ></Service>)
            }
           </div>
            
        </div>
    );
};

export default Services;