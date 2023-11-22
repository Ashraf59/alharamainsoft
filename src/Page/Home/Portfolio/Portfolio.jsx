import img1 from '../../../assets/portfolio/ecommerce.png';
import img2 from '../../../assets/portfolio/realstate.png';
import img3 from '../../../assets/portfolio/dentist1.png';
import img4 from '../../../assets/portfolio/restaurant.png';
import img5 from '../../../assets/portfolio/car.png';
import img6 from '../../../assets/portfolio/school.png';
import img7 from '../../../assets/portfolio/construction.png';
import img8 from '../../../assets/portfolio/logistic.png';
import img9 from '../../../assets/portfolio/ecommerce-2.png';
import img10 from '../../../assets/portfolio/hotel -booking.png';
import img11 from '../../../assets/portfolio/travel.png';
import Gallery from './Gallery';
import Marquee from "react-fast-marquee";

const Portfolio = () => {
    const images = [
        {
            id: 1,
            img: img1,
            link: 'https://korando-demo.myshopify.com/',
            website: 'Ecommerce'
        },
        {
            id: 2,
            img: img9,
            link: 'https://practice.torikul.me/',
            website: 'Fsahion'

        },
        {
            id: 3,
            img: img2,
            link: 'https://findhouse-nextjs.netlify.app/',
            website: 'Real Estate'
        },
        {
            id: 4,
            img: img3,
            link: 'https://dentalia.orionthemes.com/demo-1/',
            website: 'Dental'
        },
        {
            id: 5,
            img: img4,
            link: 'https://beautiful-brigadeiros-3390e8.netlify.app/',
            website: 'Restaurant'

        },
        {
            id: 6,
            img: img5,
            link: 'https://carhire-01.netlify.app/home',
            website: 'Car Hire'
        },
        {
            id: 7,
            img: img6,
            link: 'https://educator.qodeinteractive.com/kindergarten/',
            website: 'Eduction'

        },
        {
            id: 8,
            img: img7,
            link: 'https://themes247.net/html5/construction/demo/home-hero-slideshow.html',
            website: 'Construction'

        },
        {
            id: 9,
            img: img8,
            link: 'https://themexriver.com/wp/trakirna/',
            website: 'Logistic'

        },
        {
            id: 10,
            img: img10,
            link: 'http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/',
            website: 'Hotel Booking'

        },
        {
            id: 11,
            img: img11,
            link: 'https://gotrip-appdir.vercel.app/',
            website: 'Travel Agency'

        }
     
       
    ]
    return (
        
        <div className='max-w-6xl mx-auto mt-10' id='portfolio'>
            <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-200 text-center lg:text-left'>Alharamain Soft</h1>
             <h2 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold lg:-mt-7 text-center lg:text-left -mt-3'>Portfolio</h2>
             
             <Marquee>
             <div className='mt-4'>
             <p className='text-2xl lg:text-4xl overflow-y-hidden'>We develop any types of - <span className='font-medium'>Website & Apps</span> from scratch -</p>
             </div>
             <div className='mt-4'>
             <p className='text-2xl lg:text-4xl overflow-y-hidden'>We also customize - <span className='font-medium'>themeforest templete</span> - </p>
             </div>
                </Marquee>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center my-20 gap-y-7'>
            
            {
                images.map(image => <Gallery
                key={image.id}
                image={image}
                ></Gallery>)
            }
         
        </div>
        </div>
    );
};

export default Portfolio;