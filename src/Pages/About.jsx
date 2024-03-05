// import { Link } from "react-router-dom";
import LeftNav from "../component/LeftNav";
import MidSection from "./ComponentAbout/MidSection";
import RightSection from "./ComponentAbout/RightSection";

const About = () => {
  return (
    <div className="flex flex-row bg-zinc-200">
      <LeftNav />
      <MidSection />
      <RightSection />
    </div>
  );
};

export default About;
