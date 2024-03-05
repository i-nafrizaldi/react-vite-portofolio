import HomeNavbar from "./ComponentHome/HomeNavbar";
import HomeLeftSection from "./ComponentHome/HomeLeftSection";
import HomeRightSection from "./ComponentHome/HomeRightSection";

const Home = () => {
  return (
    <div className="h-screen w-[430px] flex-col bg-zinc-200 md:flex md:h-screen md:w-full md:flex-row md:bg-zinc-200">
      <HomeNavbar />
      <HomeLeftSection />
      <HomeRightSection />
    </div>
  );
};

export default Home;
