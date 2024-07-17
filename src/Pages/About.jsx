// import { Link } from "react-router-dom";
import LeftNav from "../component/LeftNav";
import MidSection from "./ComponentAbout/MidSection";
import RightSection from "./ComponentAbout/RightSection";

const About = () => {
  return (
    <div className="md:flex md:flex-row gap-8 bg-main p-6 md:py-0">
      <LeftNav />
      <MidSection />
      <RightSection />
    </div>
  );
};

export default About;
