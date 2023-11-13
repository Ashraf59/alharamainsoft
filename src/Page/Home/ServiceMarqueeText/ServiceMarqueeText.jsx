import Marquee from "react-fast-marquee";
import { FaAndroid, FaBullhorn, FaDisease, FaGlobeAmericas, FaHandshake, FaSpa } from 'react-icons/fa';

const ServiceMarqueeText = () => {
    return (
        <div className="bg-black text-white p-4 -mt-2">
            <Marquee>
            <div className="flex items-center mr-6">
                <h3 className="mr-6 text-2xl font-medium">Alharamain Soft Services </h3>
                <span className="text-3xl"><FaHandshake></FaHandshake></span>
            </div>
            <div className="flex items-center mr-6">
                <h3 className="mr-6 text-2xl font-medium"> Web Design </h3>
                <span className="text-3xl"><FaDisease></FaDisease></span>
            </div>
            <div className="flex items-center mr-6">
                <h3 className="mr-6 text-2xl font-medium">Web Development </h3>
                <span className="text-3xl"><FaGlobeAmericas></FaGlobeAmericas></span>
            </div>
            <div className="flex items-center mr-6">
                <h3 className="mr-6 text-2xl font-medium">Android & iOS Development </h3>
                <span className="text-3xl"><FaAndroid></FaAndroid></span>
            </div>
            <div className="flex items-center mr-6">
                <h3 className="mr-6 text-2xl font-medium">UI/UX Design </h3>
                <span className="text-3xl"><FaSpa></FaSpa></span>
            </div>
            <div className="flex items-center mr-6">
                <h3 className="mr-6 text-2xl font-medium">Digital Marketing </h3>
                <span className="text-3xl"><FaBullhorn></FaBullhorn></span>
            </div>
            </Marquee>
        </div>
    );
};

export default ServiceMarqueeText;