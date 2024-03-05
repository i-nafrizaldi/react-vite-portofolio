import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <div>
      <div>
        <div className="w-15 sticky top-0 ml-5 flex h-screen flex-col justify-between py-10 font-thin text-stone-800">
          <div className="md:-rotate-90">
            <Link to={"https://www.linkedin.com/in/nafrizaldi"} target="_blank">
              LI
            </Link>
          </div>
          <div className="md:-rotate-90">
            <Link to={"https://twitter.com/idlazirfannavi"} target="_blank">
              TW
            </Link>
          </div>
          <div className="md:-rotate-90">
            <Link to={"https://github.com/i-nafrizaldi"} target="_blank">
              GH
            </Link>
          </div>
          <div className=" mx-auto h-[200px] w-[2px] bg-black"></div>
          <div className=" -rotate-90 ">©/2024</div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
