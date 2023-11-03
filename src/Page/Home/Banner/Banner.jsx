


import './Banner.css';





const Banner = () => {

  
    return (
      <div className='banner-section bg-image'>
        <div className='banner-title'>
        <h3 className='w-4/5 text-center'>Turn Your Dreams Into Reality
          With Our Digital Solutions</h3>
          <p className='w-4/5 text-center'>Alharamain Soft is a global leader in modern business innovation. We encourage you to dream big and provide them with comprehensive solutions designed specifically to meet your visual and performance needs.</p>
          <div className='left-1/2 absolute top-3/4'>
          <button className="bg-transparent text-white hover:bg-gray-300 hover:text-black py-2 px-4 border border-gray-400 rounded shadow">
             Contact Now
          </button>
          </div>
        </div>
        
      </div>
    );
};

export default Banner;