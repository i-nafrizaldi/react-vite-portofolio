import { Link } from "react-router-dom";
import ContactNav from "./ComponentContact/ContactNavbar";

const Portofolio = () => {
  return (
    <>
      <div className="md:flex md:flex-row flex flex-col bg-tertiary gap-8 p-6 md:p-0 min-h-screen md:px-6">
        {/* LEFT NAVBAR */}
        <ContactNav />
        <div className=" md:my-auto">
          <div className="container mx-auto mt-28 md:w-[600px] text-main">
            <h1 className="font-italiana md:text-[100px] text-8xl font-semibold">
              Portofolio
            </h1>
            <div className=" md:w-[400px] font-montserrat">
              {`My best work lies in web development. I believe the digital development world is always evolving, just like my role in it. Every day, I keep learning and gaining new skills.`}
            </div>
          </div>
        </div>
        {/* RIGHT SECTION */}
        <div className="text-main md:items-center md:flex">
          {/* <div className="md:flex md:flex-col"> */}
          <Link
            to="/kucekin"
            className="font-italiana transition duration-500 hover:translate-x-3 hover:italic hover:drop-shadow-xl flex gap-2 md:text-9xl text-3xl"
          >
            <p className=" items-center">-</p>
            <div className="flex flex-col">
              <p className="">{"Kucekin"}</p>
              <p className="text-sm">Laundry Delivery Service App</p>
            </div>
          </Link>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Portofolio;
