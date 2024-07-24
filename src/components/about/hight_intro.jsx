const HightIntro = () => {
  return (
    <div className="my-24 max-sm:my-8 ">
      <div className="flex  justify-center items-center">
        <h1 className="text-center mb-12 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
          About me
        </h1>
      </div>

      <div className="flex justify-evenly max-sm:grid max-sm:items-center max-sm:justify-center max-sm:my-8 ">
        <div className=" w-[400px] h-[480px] relative ">
          <div className="size-full   bg-gray-200  absolute top-10 right-10   "></div>
          <img
            src="/images/b1.png"
            alt=""
            className="size-full object-cover relative  border-8 border-white  "
          />
        </div>

        <div className="w-[582px] grid grid-cols-1 gap-4 text-gray-600 ">
          <h1 className="text-[30px] font-semibold text-black">
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
