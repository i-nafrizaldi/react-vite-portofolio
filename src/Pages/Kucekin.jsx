// import React from "react";
// import LeftNav from "../component/LeftNav";
// import landingoageweb from "../../public/kucekin/landingpageweb.png";
// import landingoagemobile from "../../public/kucekin/landingpagemobile.png";
// import admin from "../../public/kucekin/admin.png";
// import login from "../../public/kucekin/login.png";
// import pickup from "../../public/kucekin/pickup.png";
// import profile from "../../public/kucekin/profile.png";
// import user from "../../public/kucekin/user.png";

// const Kucekin = () => {
//   return (
//     <main className=" min-h-screen md:flex md:flex-row gap-8 bg-main p-6 md:py-8">
//       <LeftNav />
//       <div className="flex flex-col gap-24">
//         <div className="px-6 mx-auto h-screen place-content-center md:w-3/4 bg-tertiary text-main">
//           <h1 className="font-italiana md:text-[150px] text-7xl font-bold  ">
//             KUCEKIN
//           </h1>
//           <p className="font-montserrat">
//             {
//               "KUCEKIN is a Laundry Web App designed as an e-commerce platform that allows customers to have their laundry done without visiting the physical outlet. It features pickup and delivery services provided by the laundry service. With multiple branch locations, customers can be served by the nearest outlet available."
//             }
//             <br />
//             <br />
//             {
//               "This application is built using TypeScript, Next.js, Tailwind CSS, ShadCN UI, React Hook Form, Redux, and Axios for the frontend. On the backend, it uses Express.js, JWT, Nodemailer, Handlebars, Bcrypt, and Prisma ORM. It utilizes the OpenCage API to get user locations, Google OAuth for users to log in or register using their Google accounts, and Midtrans as the payment gateway."
//             }
//           </p>

//           <p className="font-bold text-xl">Development Module List :</p>
//           <br />
//           <br />
//           <p>
//             Frontend :{" "}
//             <span>
//               TypeScript / Next.js / Tailwind CSS / ShadCN UI / React Hook Form
//               / Redux / Axios / Redux
//             </span>
//           </p>
//           <p>
//             Backend :{" "}
//             <span>
//               Express.js / JSON Web Token / Nodemailer / Handlebars / Bcrypt /
//               Prisma ORM / OpenCage API / Google OAuth / Midtrans
//             </span>
//           </p>
//         </div>

//         <div className="flex flex-col mx-auto font-montserrat min-h-screen place-content-center gap-8 text-tertiary">
//           <div className="rounded-xl overflow-hidden">
//             <img alt="img" loading="lazy" src={landingoageweb} />
//           </div>
//           <p className="text-center text-lg">
//             {
//               "This was a collaborative project with designer and friend Ryandhi Rofifu C."
//             }
//             <br />
//             {"This was a collaborative project with designer and friend Ryandhi Rofifu C. This application is web-based with a mobile-first approach."}
//           </p>
//           <div className="flex flex-col gap-20">
//             <div className="flex gap-20 justify-center">
//               <img
//                 alt="img"
//                 loading="lazy"
//                 src={landingoagemobile}
//                 className="md:w-80 w-70"
//               />
//               <p className=" content-center md:text-3xl font-extrabold md:w-1/2 hidden md:block text-center">
//                 Landing Page Mobile Version
//               </p>
//             </div>
//             <div className="flex gap-20 justify-center">
//               <div className=" md:w-1/2 hidden  text-center md:flex md:flex-col gap-4 place-content-center ">
//                 <p className="md:text-3xl  font-extrabold">Login Page</p>
//                 <p className="hidden md:block">
//                   On the login page, users can log in or register using either
//                   their email or Google account.
//                 </p>
//               </div>

//               <img
//                 alt="img"
//                 loading="lazy"
//                 src={login}
//                 className="md:w-80 w-70"
//               />
//             </div>
//             <div className="flex gap-20 justify-center">
//               <img
//                 alt="img"
//                 loading="lazy"
//                 src={user}
//                 className="md:w-80 w-70"
//               />
//               <div className=" md:w-1/2 hidden md:block text-center  flex-col gap-4 place-content-center ">
//                 <p className="md:text-3xl font-extrabold">User Home Page</p>
//                 <p className="hidden md:block">
//                   On the user home page, users can view notifications and see
//                   the activities of orders in progress for the day. There is a
//                   navbar at the bottom to navigate users to the request pickup
//                   page, the user profile page, or back to the home page.
//                 </p>
//               </div>
//             </div>
//             <div className="flex gap-20 justify-center">
//               <div className=" md:w-1/2 hidden md:block text-center  flex-col gap-4 place-content-center ">
//                 <p className="md:text-3xl font-extrabold">Profile Page</p>
//                 <p className="hidden md:block">
//                   On the profile page, users can view their profile details and
//                   edit them, such as avatar, name, email, and password. Users
//                   can also view their order history, manage their addresses, add
//                   new addresses, edit existing addresses, or delete addresses.
//                 </p>
//               </div>

//               <img
//                 alt="img"
//                 loading="lazy"
//                 src={profile}
//                 className="md:w-80 w-70"
//               />
//             </div>
//             <div className="flex gap-20 justify-center">
//               <img
//                 alt="img"
//                 loading="lazy"
//                 src={pickup}
//                 className="md:w-80 w-70"
//               />
//               <div className=" md:w-1/2 hidden md:block text-center  flex-col gap-4 place-content-center ">
//                 <p className="md:text-3xl font-extrabold">
//                   Request Pickup Page
//                 </p>
//                 <p className="hidden md:block">
//                  " On the request pickup page, users can select which address
//                   will be used for pickup. Then, they can choose the nearest
//                   outlet address from their selected address. The page also
//                   provides information about the distance between the user's
//                   address and the outlet address, as well as the pickup cost
//                   based on the distance."
//                 </p>
//               </div>
//             </div>
//             <div className="md:flex gap-20 justify-center">
//               <div className=" md:w-1/2 hidden md:block text-left  flex-col gap-4 place-content-center ">
//                 <p className="md:text-3xl text-center font-extrabold">
//                   Admin Dashboard
//                 </p>
//                 <p className="hidden md:block">
//                   On the admin dashboard, the admin can view sales reports and
//                   analysis, including income reports for all outlets, with data
//                   filterable by outlet. They can manage user data (view, create,
//                   update, delete) for roles such as outlet admin, worker, or
//                   driver. The admin can view all registered users, assign outlet
//                   admins, workers, and drivers to specific outlets, and manage
//                   laundry items and outlet data (view, create, update, delete).
//                   Additionally, the admin can precisely set outlet location
//                   points.
//                 </p>
//               </div>

//               <img
//                 alt="img"
//                 loading="lazy"
//                 src={admin}
//                 className="md:w-3/4 rounded-xl"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mx-auto">
//           <p className="font-italiana text-5xl font-bold text-center">
//             Check it Out.
//           </p>
//           <div className="mb-10 mt-5 flex gap-2">
//             <a href="https://jcwd031003.purwadhikabootcamp.com/" target="blank">
//               <button className=" h-auto w-56 rounded-[50px] bg-stone-800 px-4 py-2 text-center text-3xl text-main transition-all duration-300 hover:w-80 font-italiana">
//                 Kucek.in
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Kucekin;

import React from "react";
import LeftNav from "../component/LeftNav";

import landingoageweb from "../../public/kucekin/landingpageweb.png";
import landingoagemobile from "../../public/kucekin/landingpagemobile.png";
import admin from "../../public/kucekin/admin.png";
import login from "../../public/kucekin/login.png";
import pickup from "../../public/kucekin/pickup.png";
import profile from "../../public/kucekin/profile.png";
import user from "../../public/kucekin/user.png";

const Kucekin = () => {
  const images = [
    {
      src: landingoageweb,
      alt: "Landing Page Web Version",
      text: "Landing Page Web Version",
      subText:
        "This was a collaborative project with designer and friend Ryandhi Rofifu C. This application is web-based with a mobile-first approach.",
      isLarge: true,
    },
    {
      src: landingoagemobile,
      alt: "Landing Page Mobile Version",
      text: "Landing Page Mobile Version",
    },
    {
      src: login,
      alt: "Login Page",
      subText:
        "On the login page, users can log in or register using either their email or Google account.",
      text: "Login Page",
    },
    {
      src: user,
      alt: "User Home Page",
      text: "User Home Page",
      subText:
        "On the user home page, users can view notifications and see the activities of orders in progress for the day. There is a navbar at the bottom to navigate users to the request pickup page, the user profile page, or back to the home page.",
    },
    {
      src: profile,
      alt: "Profile Page",
      text: "Profile Page",
      subText:
        "On the profile page, users can view their profile details and edit them, such as avatar, name, email, and password. Users can also view their order history, manage their addresses, add new addresses, edit existing addresses, or delete addresses.",
    },
    {
      src: pickup,
      alt: "Request Pickup Page",
      text: "Request Pickup Page",
      subText:
        " On the request pickup page, users can select which address will be used for pickup. Then, they can choose the nearest outlet address from their selected address. The page also provides information about the distance between the user's address and the outlet address, as well as the pickup cost based on the distance.",
    },
    {
      src: admin,
      alt: "Admin Dashboard",
      text: "Admin Dashboard",
      isLarge: true,
      subText:
        "On the admin dashboard, the admin can view sales reports and analysis, including income reports for all outlets, with data filterable by outlet. They can manage user data (view, create, update, delete) for roles such as outlet admin, worker, or driver. The admin can view all registered users, assign outlet admins, workers, and drivers to specific outlets, and manage laundry items and outlet data (view, create, update, delete). Additionally, the admin can precisely set outlet location points.",
    },
  ];

  return (
    <main className="min-h-screen md:flex md:flex-row gap-8 bg-main p-6 md:py-8">
      <LeftNav />
      <div className="flex flex-col gap-24">
        <section className="px-6 mx-auto h-screen place-content-center md:w-3/4 bg-tertiary text-main flex flex-col gap-6">
          <h1 className="font-italiana md:text-[150px] text-7xl font-bold">
            Kucekin
          </h1>
          <p className="font-montserrat">
            KUCEKIN is a Laundry Web App designed as an e-commerce platform that
            allows customers to have their laundry done without visiting the
            physical outlet. It features pickup and delivery services provided
            by the laundry service. With multiple branch locations, customers
            can be served by the nearest outlet available.
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-bold">Development Module List:</p>
            <p>
              Frontend:
              <span className="block">
                TypeScript / Next.js / Tailwind CSS / ShadCN UI / React Hook
                Form / Redux / Axios
              </span>
            </p>
            <p>
              Backend:
              <span className="block">
                Express.js / JSON Web Token / Nodemailer / Handlebars / Bcrypt /
                Prisma ORM / OpenCage API / Google OAuth / Midtrans / MySQL
              </span>
            </p>
          </div>
        </section>

        {/* <section className="px-6 mx-auto h-screen flex flex-col justify-center  md:w-3/4 bg-tertiary text-main">
          <h1 className="font-italiana md:text-[150px] text-7xl font-bold">
            KUCEKIN
          </h1>
          <p className="font-montserrat text-center md:text-left">
            KUCEKIN is a Laundry Web App designed as an e-commerce platform that
            allows customers to have their laundry done without visiting the
            physical outlet. It features pickup and delivery services provided
            by the laundry service. With multiple branch locations, customers
            can be served by the nearest outlet available.
          </p>
          <div className="text-center md:text-left">
            <p className="font-bold text-xl">Development Module List:</p>
            <div className="flex flex-col gap-2 mt-2">
              <p>
                Frontend:
                <span className="block">
                  TypeScript / Next.js / Tailwind CSS / ShadCN UI / React Hook
                  Form / Redux / Axios
                </span>
              </p>
              <p>
                Backend:
                <span className="block">
                  Express.js / JSON Web Token / Nodemailer / Handlebars / Bcrypt
                  / Prisma ORM / OpenCage API / Google OAuth / Midtrans
                </span>
              </p>
            </div>
          </div>
        </section> */}

        <section className="flex flex-col mx-auto font-montserrat min-h-screen justify-center gap-12 text-tertiary px-8">
          {images.map(({ src, alt, text, isLarge, subText }, index) => (
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
                  isLarge ? "md:w-3/4" : "md:w-1/2"
                } hidden md:flex flex-col gap-4 justify-center items-center text-center`}
              >
                <p className="md:text-3xl font-extrabold">{text}</p>
                <p className="">{subText}</p>

              </div>
            </div>
          ))}
        </section>

        <section className="mx-auto text-center">
          <p className="font-italiana text-5xl font-bold">Check it Out.</p>
          <div className="mb-10 mt-5 flex justify-center">
            <a
              href="https://jcwd031003.purwadhikabootcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="h-auto w-56 rounded-full bg-stone-800 px-4 py-2 text-3xl text-main transition-all duration-300 hover:w-80 font-italiana">
                Kucek.in
              </button>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Kucekin;
