

import web from '../../../assets/banner-video/web.png';
import mob from '../../../assets/banner-video/mob-app.png';
import ui from '../../../assets/banner-video/ui-design.png';
import Service from './Service';
import './Services.css';


const Services = () => {
    const serviceData = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Accelerate innovation with world-class tech teams We ll match you to an entire remote team.',
            img:web 
            
        },
        {
            id: 2,
            title: 'App Development',
            description: 'Accelerate innovation with world-class tech teams We ll match you to an entire remote team.',
            img:mob 
           
           
        },
        {
            id: 3,
            title: 'UI/UX',
            description: 'Accelerate innovation with world-class tech teams We ll match you to an entire remote team.',
            img:ui 
              
        }
    ]
  
    return (
        <div className=' pt-20'>
            <div className=' text-center uppercase'>
            <h2 className=''>WHAT WE PROVIDE</h2>
            <h3 className='capitalize text-4xl font-bold mt-5 service-subtitle'>Igniting growth through our tailored digital services.</h3>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 container mx-auto max-w-5xl'>
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