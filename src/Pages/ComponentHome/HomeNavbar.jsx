import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <>
      <div className="md:w-15 sticky top-0 md:flex md:h-screen md:flex-col flex flex-row justify-between font-thin text-stone-800 md:py-5 md:pb-10">
        <div className="md:-rotate-90">
          <Link to={"https://www.linkedin.com/in/nafrizaldi"} target="_blank">
            LI
          </Link>
        </div>
        <div className="md:-rotate-90">
          <Link to={"https://github.com/i-nafrizaldi"} target="_blank">
            GH
          </Link>
        </div>
        <div className=" mx-auto md:h-[200px] md:w-[2px] hidden md:block bg-black"></div>
        <div className=" md:-rotate-90 ">©/2024</div>
      </div>
    </>
  );
};

export default HomeNavbar;
