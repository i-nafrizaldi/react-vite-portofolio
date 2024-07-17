import { Link } from "react-router-dom";

const ContactNav = () => {
  return (
    <>
      <div className="md:w-15 sticky top-0 md:flex md:h-screen md:flex-col flex flex-row justify-between font-thin text-white md:py-10 md:pb-10">
        <div className="md:-rotate-90">
          <Link to="/">HOME</Link>
        </div>
        <div className=" mx-auto md:h-[200px] md:w-[2px] hidden md:block bg-main"></div>
        <div className=" md:-rotate-90 ">©/2024</div>
      </div>
    </>
  );
};

export default ContactNav;
