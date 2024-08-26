const MidSection = () => {
  return (
    <div className="md:basis-3/4 md:py-8">
      <div className="mx-auto mt-28 md:w-[600px] text-stone-800">
        <h1 className="font-italiana md:text-[200px] text-9xl font-semibold mb-8">
          About
        </h1>

        <div className="space-y-8">
          <h2 className="font-montserrat text-5xl font-semibold">
            I'm Ivan, turning caffeine into sleek web magic. Tech enthusiast!
          </h2>
          <p className="font-montserrat">
            Hey yo! I just graduated and I'm rocking it as a fullstack web dev
            ninja. From making the frontend look slick to pulling off backend
            magic. Had a blast leveling up at Purwadhika Digital Technology
            School, where I soaked in the skills and slayed it in web dev
            projects.
          </p>
          <p className="font-montserrat">
            I am a seasoned Fullstack Developer fluent in crafting cutting-edge
            web applications using React, HTML, CSS, JavaScript, and TypeScript.
            With expertise spanning Express.js and Next.js for robust backend
            solutions, I excel in implementing Redux for state management and
            harnessing Tailwind CSS for sleek, responsive design. I thrive in
            the creative realm where technology meets innovation, transforming
            ideas into powerful solutions. Ready to collaborate with clients and
            teams alike, I bring a blend of technical prowess and design finesse
            to drive impactful results.
          </p>
          <p className="font-montserrat">
            What truly excites me as a developer is crafting solutions that
            prioritize real-world impact over mere aesthetics. I believe
            technology goes beyond buttons and website designs; it's about
            creating enriching user experiences. With expertise in React, HTML,
            CSS, JavaScript, and TypeScript, coupled with backend proficiency in
            Express.js and Next.js, I emphasize the importance of listening to
            customer needs, identifying innovative solutions, and continually
            elevating the standard of superior user experiences.
          </p>
          <blockquote className="font-montserrat text-5xl font-semibold italic">
            “There is nothing so useless as doing efficiently that which should
            not be done at all.”
          </blockquote>
          <p className="font-montserrat">
            This resonates so deeply with me because I have no desire to make
            pretty things just for the sake of it. Some people love that! But
            it's not for me. I only want to make, design or build ideas and
            products that are real, that matter and have an impact in the world.
          </p>

          <div className="space-y-4">
            <h2 className="font-montserrat text-3xl font-semibold">SKILLS</h2>
            <p className="font-montserrat">
              JavaScript / TypeScript / HTML / CSS / React JS / Typescript / Express JS /
              Node JS / Next JS / Tailwind / MySQL / CMS / Jira / Docker / Git /
              GitHub / Prisma ORM
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-montserrat text-3xl font-semibold">KUDOS</h2>
            <p className="font-montserrat">
              Yo, most of the cool stuff in this portfolio is a result of
              teamwork. It's kinda rare these days to pull off something awesome
              all by yourself. I'm only throwing in the work where I played a
              big part, whether it's in design, ideas, UX, process, coding,
              mentorship, advice, or just being the creative genius I am.
            </p>
            <p className="font-montserrat">
              Big shoutout to my rockstar lecturer, Daniel Reinhard, who's been
              the guiding light in my journey as a fresh graduate fullstack web
              developer at Purwadhika Digital Technology School. And massive
              thanks to my homies from "JCWD Purwadhika" – you guys have been
              the real MVPs, influencing my growth and career path big time.
              Thanks for the support, collaboration, and the crazy learning
              vibes. It's been a wild ride, and I'm grateful for all of it. BIG
              THANKS!
            </p>
          </div>
        </div>

        <div className="mt-11">
          <a href="/contact">
            <button className="h-auto w-56 rounded-full bg-stone-800 px-4 py-2 text-center font-montserrat text-2xl text-zinc-200 transition-all duration-300 hover:w-80">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
