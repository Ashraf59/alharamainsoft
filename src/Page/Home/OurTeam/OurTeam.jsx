
import './OurTeam.css';
import img1 from '../../../assets/team/ashraf-1.png'
import img2 from '../../../assets/team/tanvir.png'
import img4 from '../../../assets/team/Amanullah.png'
import img5 from '../../../assets/team/Hafijul.png'
import img6 from '../../../assets/team/Torikul.png'
import img7 from '../../../assets/team/tista.png'
import img8 from '../../../assets/team/juwairia.png'
import Team from '../Team/Team';


const OurTeam = () => {
    const teamData = [
        {
            id: 1,
            name: 'Md. Ashraf Ali',
            designation: 'Founder & CEO, Alharamain Soft',
            img:img1 
            
        },
        {
            id: 2,
            name: 'Md. Tanvir',
            designation: 'Full Stack Developer (MERN), Alharamain Soft',
            img:img2 
           
           
        },
    
        {
            id: 3,
            name: 'Md. Amanullah Parvez',
            designation: 'Full Stack Web Developer (MERN), Alharamain Soft',
            img:img4 
              
        },
        {
            id: 4,
            name: 'Md. Hafijul Islam',
            designation: 'Wordpress Developer, Alharamain Soft',
            img:img5 
              
        },
        {
            id: 5,
            name: 'Torikul Islam Tarif',
            designation: 'Wordpress Developer, Alharamain Soft',
            img:img6 
              
        },
        {
            id: 6,
            name: 'Tajnuva Taskin Tahiya Tista',
            designation: 'UI/UX Designer, Alharamain Soft',
            img:img7 
              
        },
        {
            id: 7,
            name: 'Juwairia Rubaiyat Saria Shifa',
            designation: 'Digital Marketer, Alharamain Soft',
            img:img8 
              
        }
    ]
   
   
    return (
            <div className='max-w-6xl mx-auto mt-10'>
            <h1 className='text-6xl md:text-7xl lg:text-8xl font-bold text-gray-200'>Alharamain Soft</h1>
             <h2 className='text-6xl md:text-8xl lg:text-9xl font-bold -mt-7'>Team</h2>
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center my-12'>
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