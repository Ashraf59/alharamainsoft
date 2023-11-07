import './Team.module..css'; 
import img1 from '../../../assets/team/ashraf-1.png'
import img2 from '../../../assets/team/tanvir-1.png'
import img3 from '../../../assets/team/developer.jpg'


const Team = () => {
    
    return (
      <div className='max-w-6xl mx-auto mt-10'>
      <h1 className='text-8xl font-bold text-gray-200'>Alharamain Soft</h1>
      <h2 className='text-9xl font-bold -mt-7'>Team</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center my-12'>
        <div className=''>
          <div className='flex justify-center'>
          <img className='w-72 h-80 object-cover' src={img1} alt="" />
          </div>
         <div className='text-left mt-6 lg:ms-11'>
         <h3 className='text-3xl font-semibold'>Md. Ashraf Ali</h3>
          <p className='text-xl text-gray-500'>Founder & CEO,  Alharamain Soft</p>
         </div>
        </div>
        <div className=''>
          <div className='flex justify-center'>
          <img className='w-72 h-80 object-cover' src={img2} alt="" />
          </div>
          <div className='text-left mt-6 lg:ms-11'>
          <h3 className='text-3xl font-semibold'>Md. Tanvir</h3>
          <p className='text-xl text-gray-500'>Full Stack Web Developer (MERN), Alharamain Soft</p>
          </div>
        </div>
        <div className=''>
          <div className='flex justify-center'>
          <img className='w-72 h-80 object-cover' src={img3} alt="" />
          </div>
          <div className='text-left mt-6 lg:ms-11'>
          <h3 className='text-3xl font-semibold'>Md. Carl</h3>
          <p className='text-xl text-gray-500'>UI/UX, Alharamain Soft</p>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Team;