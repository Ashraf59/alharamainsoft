
import './OurTeam.css';
import img1 from '../../../assets/team/ashraf-1.png'
import img2 from '../../../assets/team/tanvir.png'
import img4 from '../../../assets/team/Amanullah.png'
import img5 from '../../../assets/team/Hafijul.png'
import img6 from '../../../assets/team/Torikul.png'
import img7 from '../../../assets/team/tista.png'
import img3 from '../../../assets/team/Ashraf Hossen.png'
import img11 from '../../../assets/team/Mahatir.png'
import img8 from '../../../assets/team/juwairia.png'
import img9 from '../../../assets/team/tahidur.png'
import img10 from '../../../assets/team/Yasen.png'
import img12 from '../../../assets/team/Sakerul Isalm.png'
import img14 from '../../../assets/team/Murad Hasan.png'
import Team from '../Team/Team';
import Marquee from "react-fast-marquee";


const OurTeam = () => {
    const teamData = [
     
        {
            id: 1,
            name: 'Md. Tanvir',
            designation: 'Full Stack Web Developer (MERN), ',
            img:img2 
           
           
        },
    
        {
            id: 2,
            name: 'Md. Amanullah Parvez',
            designation: 'Full Stack Web Developer (MERN), ',
            img:img4 
              
        },
        {
            id: 3,
            name: 'Md. Hafijul Islam',
            designation: 'Wordpress Developer, ',
            img:img5 
              
        },
        {
            id: 4,
            name: 'Torikul Islam Tarif',
            designation: 'Wordpress Developer, ',
            img:img6 
              
        },
   
        {
            id: 6,
            name: 'Murad Hasan',
            designation: 'Wordpress Developer, ',
            img:img14 
              
        },
        {
            id: 7,
            name: 'Sakerul Islam',
            designation: 'Shopify & Wordpress Developer, ',
            img:img12 
              
        },
        {
            id: 8,
            name: 'Tajnuva Taskin Tahiya',
            designation: 'UI/UX Designer, ',
            img:img7 
              
        },
        {
            id: 9,
            name: 'Ashraf Hossain',
            designation: 'UI/UX Designer, ',
            img:img3 
              
        },
        {
            id: 10,
            name: 'Mahatir Mohammmad',
            designation: 'UI/UX Designer,',
            img:img11 
              
        },
        {
            id: 11,
            name: 'Juwairia Rubaiyat',
            designation: 'Digital Marketer,',
            img:img8 
              
        },
        {
            id: 12,
            name: 'Tahidur Rahman',
            designation: 'React Native & Flutter Developer,',
            img:img9 
              
        },
        {
            id: 13,
            name: 'Md Yasen Rafe ',
            designation: 'React Native Developer,',
            img:img10 
              
        },
    ]
   
   
    return (
            <div className='max-w-6xl mx-auto mt-20 lg:mt-32'>
            <h1 className='text-4xl ml-3 sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-200 text-center lg:text-left'>Alharamain Soft</h1>
             <h2 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold lg:-mt-7 -mt-3 ml-3 text-center lg:text-left'>Team</h2>
             <Marquee>
             <div className='mt-4'>
             <p className='text-2xl lg:text-4xl overflow-y-hidden'> Our <span className='font-medium'>Talented & Experience Team </span> is ready to help you - </p>
             </div>
             <div className='mt-4'>
             <p className='text-2xl lg:text-4xl overflow-y-hidden'> Our team's seamless journey from - <span className='font-medium'>Vision to Reality </span> - </p>
             </div>
                </Marquee>
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center my-12 gap-x-5 mx-5'>
        {
            teamData.map(team => <Team
            key={team.id}
            team={team}
            ></Team>)
        }
         </div>
        </div>
   
    );
};

export default OurTeam;