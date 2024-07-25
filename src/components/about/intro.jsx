import { IoLocation } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LuGithub } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
const Intro = () => {
  return (
    <div className=" flex justify-evenly py-20 max-sm:grid max-sm:grid-cols-1 max-sm:items-center max-sm:justify-center max-sm:p-8 max-sm:mb-8">
      <div>
        <div>
          <h1 className="text-gray-900 text-6xl font-bold mb-2 ">
            Hi, I’m Bayarmaa 👋
          </h1>
          <p className="w-[600px] text-gray-600 text-[16px] font-normal pb-12 max-sm:w-[90%]">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 0.2 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
        </div>

        <div className="pb-12 ">
          <div className="flex gap-2">
            <span className="text-2xl">
              <IoLocation />
            </span>{" "}
            <p>Ulaanaatar,Mongolia</p>
          </div>
          <div className="flex gap-2">
            <span className="text-2xl text-green-400">
              <GoDotFill />
            </span>{" "}
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="flex gap-2 text-2xl items-center">
          <a
            href="https://github.com/bayarmaa0715/Portfilio_project"
            className="text-2xl"
          >
            <LuGithub />
          </a>
          <a
            href="https://github.com/bayarmaa0715/Portfilio_project"
            className="text-3xl"
          >
            <CiTwitter />
          </a>
          <a
            className="text-2xl"
            href="https://www.figma.com/design/6JvI0EkfFqn1OOJHsqT9k6/Personal-Portfolio-Website?node-id=316-177&t=6WNGZ1gfbuqGgBgI-0"
          >
            <FaFigma />
          </a>
        </div>
      </div>

      <div className=" w-72 h-80 relative max-sm:flex max-sm:justify-center max-sm:items-center ">
        <div className="size-full   bg-gray-200  absolute top-10 left-10   "></div>
        <img
          src="/images/b.png"
          alt=""
          className="size-full object-cover relative  border-8 border-white  "
        />
      </div>
    </div>
  );
};

export default Intro;
