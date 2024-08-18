import { Link } from "react-router-dom";
import ContactNav from "./ComponentContact/ContactNavbar";

const Contact = () => {
  return (
    <>
      <div className="md:flex md:flex-row flex flex-col gap-8 min-h-screen bg-tertiary md:px-6 p-6 md:p-0">
        <ContactNav />
        <div className=" md:ml-20 ">
          <div className="mx-auto mt-28 md:w-[600px] text-main">
            <h1 className="font-italiana md:text-[200px] text-7xl font-semibold">Hello.</h1>
            <div className=" md:first-line:w-[400px] font-montserrat">
              {`Need a unique, user-friendly website? Let's chat and create something awesome for you to own and manage effortlessly. Reach out now!`}
              <br />
              <br />
              Email :
              <Link
                to="mailto:ivannafrizaldi@gmail.com"
                className="underline hover:line-through"
              >
                ivannafrizaldi@gmail.com
              </Link>
              <br />
              On the Internet :
              <Link
                to={"https://www.linkedin.com/in/nafrizaldi"}
                target="_blank"
                className="underline hover:line-through"
              >
                LinkedIn
              </Link>{" "}
              /
              <Link
                to={"https://github.com/i-nafrizaldi"}
                target="_blank"
                className="underline hover:line-through"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
