
import './OurTeam.css';
import img1 from '../../../assets/team/ashraf-1.png'
import img2 from '../../../assets/team/tanvir-1.png'
import img3 from '../../../assets/team/developer.jpg'
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
            name: 'Mr. Carl',
            designation: 'UI / UX Designer, Alharamain Soft',
            img:img3 
              
        }
    ]
   
   
    return (
            <div className='max-w-6xl mx-auto mt-10'>
            <h1 className='text-8xl font-bold text-gray-200'>Alharamain Soft</h1>
             <h2 className='text-9xl font-bold -mt-7'>Team</h2>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center my-12'>
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