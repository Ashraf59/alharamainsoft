import { Link } from "react-router-dom";


const Gallery = ({image}) => {
    const {img, link, website} = image;
    return (
        <div>
            <div className='flex justify-center relative hover:scale-90 duration-500 '>
                <img className="w-[340px] h-[420px] object-cover filter-none shadow-xl" src={img} alt="" />
               
                <div className="bg-transparen hover:bg-white w-52 h-60 hover:scale-125 duration-500 absolute z-10 bottom-20 hover:opacity-100 text-4xl font-semibold opacity-0">
                   <div className="absolute top-2/4 left-10">
                 <Link to={link} target="_blank">
                 <h1>Explore</h1>
                 </Link>
                   </div>

                </div>
                <div className="absolute bottom-0 flex items-center justify-center text-5xl text-gray-100 w-[340px] h-20 font-semibold bg-black bg-opacity-50">
                    <h1>{website}</h1>
                </div>
                
            </div>
        </div>
    );
};

export default Gallery;