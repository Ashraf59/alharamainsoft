
import About from "./About/About";
import Banner from "./Banner/Banner";
import DevelopBusiness from "./DevelopBusiness/DevelopBusiness";
import Services from "./Services/Services";
import WhyChooseUs from "./whyChooseUs/whyChooseUs";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <WhyChooseUs></WhyChooseUs>
          <Services></Services>
          <About></About>
          <DevelopBusiness></DevelopBusiness>
          
        </div>
    );
};

export default Home;