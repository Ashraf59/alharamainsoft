
import About from "./About/About";
import Banner from "./Banner/Banner";
import DevelopBusiness from "./DevelopBusiness/DevelopBusiness";
import OurTech from "./OurTech/OurTech";
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
          <OurTech></OurTech>
          
        </div>
    );
};

export default Home;