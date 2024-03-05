import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="flex flex-row bg-stone-900">
        <div className="w-15 sticky top-0 ml-5 flex h-screen flex-col justify-between py-10 font-thin text-zinc-200">
          <div className="-rotate-90">
            <Link to="/">HOME</Link>
          </div>
          <div className=" mx-auto h-[200px] w-[2px] bg-zinc-200 font-montserrat"></div>
          <div className=" -rotate-90 ">©/2024</div>
        </div>
        <div className=" ml-20 ">
          <div className="container mx-auto mt-28 w-[600px] text-zinc-200">
            <h1 className="font-italiana text-[200px] font-semibold">Hello.</h1>
            <div className=" w-[400px] font-montserrat">
              {`Need a unique, user-friendly website? Let's chat and create something awesome for you to own and manage effortlessly. Reach out now!`}
              <br />
              <br />
              Email :
              <Link to="mailto:ivannafrizaldi@gmail.com" className="underline hover:line-through">ivannafrizaldi@gmail.com
              </Link>
              <br />
              On the Internet :
              <Link
                to={"https://www.linkedin.com/in/nafrizaldi"}
                target="_blank" className="underline hover:line-through"
              >LinkedIn
              </Link> / 
              <Link to={"https://github.com/i-nafrizaldi"} target="_blank" className="underline hover:line-through">
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
