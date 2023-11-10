 



const Team = ({team}) => {
  const {name, designation, img} = team;
    
    return (
      
      <div >
        <div className=''>
          <div className='flex justify-center '>
          <img className='w-72 h-80 object-cover filter grayscale hover:grayscale-0 hover:duration-1000' src={img} alt="" />
          </div>
         <div className='lg:text-left text-center mt-6 mb-5 ms-11 md:mb-10'>
         <h3 className='text-3xl font-semibold'>{name}</h3>
          <p className='text-xl text-gray-500'>{designation}</p>
         </div>
        </div>
        
      </div>
    );
};

export default Team;