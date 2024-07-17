import { Link } from "react-router-dom";

const HomeRightSection = () => {
  return (
    <>
      <div className="font-serif  text-stone-800 flex flex-col justify-center md:pl-10 md:text-[150px] text-[60px]">
        <Link
          to="/about"
          className="font-italiana transition duration-500 hover:translate-x-3 hover:italic"
        >
          <p>ABOUT</p>
        </Link>
        <Link
          to="/contact"
          className="font-italiana transition duration-500 hover:translate-x-3 hover:italic"
        >
          <p>CONTACT</p>
        </Link>
        <Link
          to="/portofolio"
          className="font-italiana transition duration-500 hover:translate-x-3 hover:italic"
        >
          <p>PORTOFOLIO</p>
        </Link>
      </div>
    </>
  );
};
export default HomeRightSection;
