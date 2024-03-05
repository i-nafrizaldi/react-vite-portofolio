import { Link } from "react-router-dom";

const HomeRightSection = () => {
  return (
    <div className="font-serif w-full text-stone-800 md:flex md:flex-col md:justify-center md:pl-10">
      <Link
        to="/about"
        className="font-italiana text-9xl transition duration-500 hover:translate-x-3 hover:italic hover:drop-shadow-xl md:w-0 md:font-italiana md:text-[160px]"
      >
        <p>ABOUT</p>
      </Link>

      <Link
        to="/contact"
        className="md:w-0 font-italiana text-[160px] transition duration-500 hover:translate-x-3 hover:italic hover:shadow-xl"
      >
        <p>CONTACT</p>
      </Link>
    </div>
  );
};

export default HomeRightSection;
