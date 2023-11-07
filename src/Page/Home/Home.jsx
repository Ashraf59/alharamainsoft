
import About from "./About/About";
import Banner from "./Banner/Banner";
import DevelopBusiness from "./DevelopBusiness/DevelopBusiness";
import Team from "./Team/Team";
import OurTech from "./OurTech/OurTech";
import Services from "./Services/Services";
import WhyChooseUs from "./whyChooseUs/whyChooseUs";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <OurTech></OurTech>
          <Services></Services>
          <WhyChooseUs></WhyChooseUs>
          <About></About>
          <DevelopBusiness></DevelopBusiness>
         
         <Team></Team>
        </div>
    );
};

export default Home;