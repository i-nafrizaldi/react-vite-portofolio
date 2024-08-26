// import { Link } from "react-router-dom";
// import ContactNav from "./ComponentContact/ContactNavbar";

// const Portofolio = () => {
//   return (
//     <>
//       <div className="md:flex md:flex-row flex flex-col bg-tertiary gap-8 p-6 md:p-0 min-h-screen md:px-6">
//         {/* LEFT NAVBAR */}
//         <ContactNav />
//         <div className=" md:my-auto">
//           <div className="container mx-auto mt-28 md:w-[600px] text-main">
//             <h1 className="font-italiana md:text-[100px] text-7xl font-semibold">
//               Portofolio
//             </h1>
//             <div className=" md:w-[400px] font-montserrat">
//               {`My best work lies in web development. I believe the digital development world is always evolving, just like my role in it. Every day, I keep learning and gaining new skills.`}
//             </div>
//           </div>
//         </div>
//         {/* RIGHT SECTION */}
//         <div className="text-main md:my-auto md:flex md:flex-col md:gap-6">
//           <Link
//             to="/kucekin"
//             className="font-italiana transition duration-500 hover:translate-x-3 hover:italic hover:drop-shadow-xl flex gap-2 md:text-8xl text-xl"
//           >
//             <p className=" items-center">-</p>
//             <div className="flex flex-col">
//               <p className="">{"Kucekin"}</p>
//               <p className="text-sm">Laundry Delivery Service App</p>
//             </div>
//           </Link>
//           <Link
//             to="/purwapora"
//             className="font-italiana transition duration-500 hover:translate-x-3 hover:italic hover:drop-shadow-xl flex gap-2 md:text-8xl text-xl"
//           >
//             <p className=" items-center">-</p>
//             <div className="flex flex-col">
//               <p className="">{"Purwa Pora"}</p>
//               <p className="text-sm">Event Management Platform</p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Portofolio;

import { Link } from "react-router-dom";
import ContactNav from "./ComponentContact/ContactNavbar";

// Reusable Link Component
const PortfolioLink = ({ to, title, subtitle }) => (
  <Link
    to={to}
    className="font-italiana transition duration-500 hover:translate-x-3 hover:italic hover:drop-shadow-xl flex gap-2 md:text-8xl text-4xl"
  >
    <p className="items-center">-</p>
    <div className="flex flex-col">
      <p>{title}</p>
      <p className="text-sm">{subtitle}</p>
    </div>
  </Link>
);

const Portofolio = () => (
  <div className="md:flex md:flex-row flex flex-col bg-tertiary gap-8 p-6 md:p-0 min-h-screen md:px-6">
    {/* LEFT NAVBAR */}
    <ContactNav />
    {/* MAIN CONTENT */}
    {/* <div className="md:my-auto "> */}
      <div className=" mx-auto mt-28 md:w-[500px] md:my-auto text-main">
        <h1 className="font-italiana md:text-[140px] text-7xl font-semibold">
          Portofolio
        </h1>
        <p className="md:w-[400px] font-montserrat">
          My best work lies in web development. I believe the digital
          development world is always evolving, just like my role in it. Every
          day, I keep learning and gaining new skills.
        </p>
      </div>
    {/* </div> */}
    {/* RIGHT SECTION */}
    <div className="text-main md:my-auto md:flex md:flex-col md:gap-6 md:mx-auto">
      <PortfolioLink
        to="/kucekin"
        title="Kucekin"
        subtitle="Laundry Delivery Service App"
      />
      <PortfolioLink
        to="/purwapora"
        title="Purwa Pora"
        subtitle="Event Management Platform"
      />
    </div>
  </div>
);

export default Portofolio;
