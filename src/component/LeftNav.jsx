import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="w-15 sticky top-0 ml-5 flex h-screen flex-col justify-between py-10 font-thin text-stone-800">
      <div className="-rotate-90">
        <Link to="/">HOME</Link>
      </div>
      <div className=" mx-auto h-[200px] w-[2px] bg-black"></div>
      <div className=" -rotate-90 ">©/2024</div>
    </div>
  );
};

export default LeftNav;
