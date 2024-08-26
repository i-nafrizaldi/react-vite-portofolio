// import React from "react";
// import LeftNav from "../component/LeftNav";

// const Purwapora = () => {
//   return (
//     <main className=" min-h-screen md:flex md:flex-row gap-8 bg-main p-6 md:py-8">
//       <LeftNav />
//       <div className="flex flex-col gap-24">
//         <div className="px-6 mx-auto h-screen place-content-center md:w-3/4 bg-tertiary text-main flex flex-col gap-6">
//           <h1 className="font-italiana md:text-[150px] text-7xl font-bold">
//             Purwa Pora
//           </h1>
//           <p className="font-montserrat">
//             Purwapora is an event management platform designed to allow
//             organizers to create and promote events while enabling attendees to
//             browse and register. The MVP aims to feature event discovery with
//             filtering, searching, and pagination; event creation with detailed
//             information and pricing; user authentication with roles for
//             participants and organizers; referral-based discounts and points;
//             and an event management dashboard for organizers to view and analyze
//             event data. The platform will support user reviews, responsiveness,
//             protected routes, and SQL transactions, with features like debounced
//             search and popup confirmations.
//           </p>
//           <div className="flex flex-col gap-4">
//             <p className="text-xl font-bold">Development Module List :</p>
//             <p>
//               Frontend :
//               <span className="block">
//                 Next JS / Tailwind CSS / Shadcn UI / Formik / Yup / React Chart
//               </span>
//             </p>
//             <p>
//               Backend :
//               <span className="block">
//                 Express JS / JSON Web Token / Prisma ORM / Bycript / Jest /
//                 MySQL
//               </span>
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col mx-auto font-montserrat min-h-screen place-content-center gap-8 text-tertiary">
//           <div className="rounded-xl overflow-hidden mb-16">
//             <img
//               alt="img"
//               loading="lazy"
//               src={"../../public/purwapora/Macbook-Air-localhost.png"}
//               className="md:w-3/4 rounded-xl mx-auto"
//             />
//           </div>

//           <div className="flex flex-col gap-20">
//             <div className="flex gap-20 justify-center">
//               <img
//                 alt="img"
//                 loading="lazy"
//                 src={"../../public/purwapora/iPhone-13-PRO-localhost.png"}
//                 className="md:w-80 w-70"
//               />
//               <p className=" content-center md:text-3xl font-extrabold md:w-1/2 hidden md:block text-center">
//                 Landing Page Mobile Version
//               </p>
//             </div>
//             <div className="flex gap-20 justify-center">
//               <div className=" md:w-1/2 hidden  text-center md:flex md:flex-col gap-4 place-content-center ">
//                 <p className="md:text-3xl  font-extrabold">Login Page</p>
//               </div>

//               <img
//                 alt="img"
//                 loading="lazy"
//                 src={
//                   "../../public/purwapora/Salinan iPhone-13-PRO-localhost.png"
//                 }
//                 className="md:w-80 w-70"
//               />
//             </div>

//             <div className="flex gap-20 justify-center">
//               <img
//                 alt="img"
//                 loading="lazy"
//                 src={"../../public/purwapora/eventDetailMobile.png"}
//                 className="md:w-80 w-70"
//               />
//               <div className=" md:w-1/2 hidden md:block text-center  flex-col gap-4 place-content-center ">
//                 <p className="md:text-3xl font-extrabold">Event Detail Page</p>
//               </div>
//             </div>
//             <div className="md:flex gap-20 justify-center">
//               <div className=" md:w-1/2 hidden md:block text-left  flex-col gap-4 place-content-center ">
//                 <p className="md:text-3xl text-center font-extrabold">
//                   Admin Dashboard
//                 </p>
//               </div>

//               <img
//                 alt="img"
//                 loading="lazy"
//                 src={"../../public/purwapora/Macbook-Air-localhost (1).png"}
//                 className="md:w-3/4 rounded-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Purwapora;

import React from "react";
import LeftNav from "../component/LeftNav";

const Purwapora = () => {
  const images = [
    {
      src: "../../public/purwapora/iPhone-13-PRO-localhost.png",
      alt: "Landing Page Mobile Version",
      text: "Landing Page Mobile Version",
    },
    {
      src: "../../public/purwapora/Salinan iPhone-13-PRO-localhost.png",
      alt: "Login Page",
      text: "Login Page",
    },
    {
      src: "../../public/purwapora/eventDetailMobile.png",
      alt: "Event Detail Page",
      text: "Event Detail Page",
    },
    {
      src: "../../public/purwapora/Macbook-Air-localhost (1).png",
      alt: "Admin Dashboard",
      text: "Admin Dashboard",
      isLarge: true,
    },
  ];

  return (
    <main className="min-h-screen md:flex md:flex-row gap-8 bg-main p-6 md:py-8">
      <LeftNav />
      <div className="flex flex-col gap-24">
        <section className="px-6 mx-auto h-screen place-content-center md:w-3/4 bg-tertiary text-main flex flex-col gap-6">
          <h1 className="font-italiana md:text-[150px] text-7xl font-bold">
            Purwa Pora
          </h1>
          <p className="font-montserrat">
            Purwapora is an event management platform designed to allow
            organizers to create and promote events while enabling attendees to
            browse and register. The MVP aims to feature event discovery with
            filtering, searching, and pagination; event creation with detailed
            information and pricing; user authentication with roles for
            participants and organizers; referral-based discounts and points;
            and an event management dashboard for organizers to view and analyze
            event data. The platform will support user reviews, responsiveness,
            protected routes, and SQL transactions, with features like debounced
            search and popup confirmations.
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-bold">Development Module List:</p>
            <p>
              Frontend:
              <span className="block">
                Next JS / Tailwind CSS / Shadcn UI / Formik / Yup / React Chart
              </span>
            </p>
            <p>
              Backend:
              <span className="block">
                Express JS / JSON Web Token / Prisma ORM / Bycript / Jest /
                MySQL
              </span>
            </p>
          </div>
        </section>

        <section className="flex flex-col mx-auto font-montserrat min-h-screen place-content-center gap-8 text-tertiary">
          <div className="rounded-xl overflow-hidden mb-16">
            <img
              alt="Main showcase"
              loading="lazy"
              src="../../public/purwapora/Macbook-Air-localhost.png"
              className="md:w-3/4 rounded-xl mx-auto"
            />
          </div>

          <div className="flex flex-col gap-20">
            {images.map(({ src, alt, text, isLarge }, index) => (
              <div
                key={index}
                className={`flex gap-20 justify-center ${
                  index % 2 === 0 ? "" : "flex-row-reverse"
                }`}
              >
                <img
                  alt={alt}
                  loading="lazy"
                  src={src}
                  className={`${
                    isLarge ? "md:w-3/4" : "md:w-80 w-70"
                  } rounded-xl`}
                />
                <div
                  className={`${
                    isLarge ? "md:w-3/4 text-left" : "md:w-1/2 text-center"
                  } hidden md:flex flex-col gap-4 place-content-center`}
                >
                  <p className="md:text-4xl mx-auto text-center font-extrabold">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Purwapora;
