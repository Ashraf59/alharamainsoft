
import './Banner.css';
const Banner = () => {

 return(
  <>
   <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <div className='slider__item-01 h-screen w-full'>
    <div className='flex flex-col justify-center items-center h-screen'>
    <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white font-bold'>Alharamain Soft</h1>
    <p className='text-white text-lg lg:text-2xl text-center mx-10'>Our Digital Solutions Are the Key to Making Your Dreams Come True</p>
    </div>
    </div>
    <div className="absolute transform -translate-y-1/2 left-1/2 top-[80%] hidden md:block">
      <a href="#slide5" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <div className='slider__item-02 h-screen w-full'>
    <div className='flex flex-col justify-center items-center h-screen'>
    <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white font-bold'>Web Development</h1>
    <p className='text-white text-lg lg:text-2xl text-center mx-10'>Our dedicated web development team is ready to help your business</p>
    </div>
    </div>
    <div className="absolute transform -translate-y-1/2 left-1/2 top-[80%] hidden md:block">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className='slider__item-03 h-screen w-full'>
  <div className='flex flex-col justify-center items-center h-screen'>
    <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white font-bold'>Apps Development</h1>
    <p className='text-white text-lg lg:text-2xl text-center mx-10'>Our dedicated Android and iOS development team is ready to help your business</p>
    </div>
    </div>
    <div className="absolute transform -translate-y-1/2 left-1/2 top-[80%] hidden md:block">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className='slider__item-04 h-screen w-full relative'>
    <div className='flex flex-col justify-center items-center h-screen'>
    <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white font-bold'>UI/UX Design</h1>
    <p className='text-white text-lg lg:text-2xl text-center mx-10'>Our dedicated ui/ux team is ready to help your business</p>
    </div>
    </div>
    <div className="absolute transform -translate-y-1/2 left-1/2 top-[80%] hidden md:block">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide5" className="carousel-item relative w-full">
  <div className='slider__item-05 h-screen w-full'>
  <div className='flex flex-col justify-center items-center h-screen'>
    <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white font-bold'>Digital Marketing</h1>
    <p className='text-white text-lg lg:text-2xl text-center mx-10'>Our dedicated digital marketing team is ready to help your business</p>
    </div>
    </div>
    <div className="absolute transform -translate-y-1/2 left-1/2 top-[80%] hidden md:block">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <div className='slider__item-05 h-screen w-full'>
  <div className='flex flex-col justify-center items-center h-screen'>
    <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white font-bold'>Digital Marketing</h1>
    <p className='text-white text-lg lg:text-2xl text-center mx-10'>Our dedicated digital marketing team is ready to help your business</p>
    </div>
    </div>
    <div className="absolute transform -translate-y-1/2 left-1/2 top-[80%] hidden md:block">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </>
 )
};

export default Banner;