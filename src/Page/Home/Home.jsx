
import About from "./About/About";
import Banner from "./Banner/Banner";
import DevelopBusiness from "./DevelopBusiness/DevelopBusiness";
import Services from "./Services/Services";
import OurTeam from "./OurTeam/OurTeam";
import Portfolio from "./Portfolio/Portfolio";
import ServiceMarqueeText from "./ServiceMarqueeText/ServiceMarqueeText";
import TechnologyMarquee from "./TechnologyMarquee/TechnologyMarquee";
import ReasonChoose from "./ReasonChoose/ReasonChoose";




const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <ServiceMarqueeText></ServiceMarqueeText>
          <TechnologyMarquee></TechnologyMarquee>
          <Services></Services>
          <ReasonChoose></ReasonChoose>
          <About></About>
          <DevelopBusiness></DevelopBusiness>
         <OurTeam></OurTeam>
         <Portfolio></Portfolio>
        </div>
    );
};

export default Home;