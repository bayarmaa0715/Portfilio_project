const HightIntro = () => {
  return (
    <div className="py-24 max-sm:p-0 bg-gray-50 dark:bg-gray-900">
      <div className="flex  justify-center items-center">
        <h1 className="text-center mb-12 text-gray-600 bg-gray-200 dark:bg-gray-800 dark:text-gray-400 py-1 px-[20px] rounded-xl">
          About me
        </h1>
      </div>

      <div className="flex justify-evenly max-sm:grid max-sm:grid-cols-1 max-sm:items-center max-sm:justify-center  max-sm:gap-12 ">
        <div className=" w-[400px] h-[480px] relative max-sm:grid max-sm:grid-rows-1 max-sm:justify-center max-sm:items-center max-sm:mx-1  max-sm:w-[280] max-sm:h-[360px]  ">
          <div className="size-full   bg-gray-200  absolute md:top-10 md:right-10  dark:bg-gray-800 max-sm:top-5 max-sm:right-12  max-sm:left-12 max-sm:w-[300px] max-sm:h-[350px] "></div>
          <img
            src="/images/b1.png"
            alt=""
            className="size-full object-cover relative  border-8 border-white dark:border-gray-900 "
          />
        </div>

        <div className="md:w-[582px] grid grid-cols-1 gap-4 text-gray-600 dark:text-gray-400 max-sm:m-8 ">
          <h1 className="text-[30px] font-semibold text-black dark:text-white">
            Curious about me? Here you have it:
          </h1>
          <p>
            I'm a designer turned full stack developer, passionate about
            React.js and Node.js. I excel in blending technical and visual
            aspects to craft exceptional digital products, prioritizing user
            experience, precise design, and optimized code.
          </p>
          <p>
            Since starting my web development journey in 2025, I've embraced
            challenges and kept up with the latest tech trends. Now in my early
            thirties, seven years in, I'm building cutting-edge web apps using
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
          </p>
          <p>
            With a progressive mindset, I enjoy the entire product development
            process, from ideation to execution. Off duty, you'll find me on
            Twitter, tracking startup journeys, or unwinding. Follow me for tech
            insights and public project updates on Twitter or GitHub.
          </p>
          <p>Finally, some quick bits about me.</p>
          <ul className="list-disc	grid grid-cols-2 ml-5">
            <li>B.E. in Computer Engineering</li>
            <li>Full time freelancer</li>
            <li>Avid learner</li>
          </ul>

          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
export default HightIntro;
