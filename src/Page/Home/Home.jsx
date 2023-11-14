
import About from "./About/About";
import Banner from "./Banner/Banner";
import DevelopBusiness from "./DevelopBusiness/DevelopBusiness";

import OurTech from "./OurTech/OurTech";
import Services from "./Services/Services";
import WhyChooseUs from "./whyChooseUs/whyChooseUs";
import OurTeam from "./OurTeam/OurTeam";
import Portfolio from "./Portfolio/Portfolio";
import ServiceMarqueeText from "./ServiceMarqueeText/ServiceMarqueeText";
import TechnologyMarquee from "./TechnologyMarquee/TechnologyMarquee";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <ServiceMarqueeText></ServiceMarqueeText>
          {/* <OurTech></OurTech> */}
          <TechnologyMarquee></TechnologyMarquee>
          <Services></Services>
          <WhyChooseUs></WhyChooseUs>
          <About></About>
          <DevelopBusiness></DevelopBusiness>
         
         <OurTeam></OurTeam>
         <Portfolio></Portfolio>
        </div>
    );
};

export default Home;