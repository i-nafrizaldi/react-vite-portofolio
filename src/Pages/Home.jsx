import HomeNavbar from "./ComponentHome/HomeNavbar";
import HomeLeftSection from "./ComponentHome/HomeLeftSection";
import HomeRightSection from "./ComponentHome/HomeRightSection";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col gap-8 bg-main md:h-screen w-full md:flex md:flex-row px-6 md:py-0 py-6">
      <HomeNavbar />
      <HomeLeftSection />
      <HomeRightSection />
    </div>
  );
};
export default Home;
