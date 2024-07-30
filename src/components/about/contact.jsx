import { LuGithub } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsCopy } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="md:mt-24 max-sm:p-0 max-sm:m-0 ">
      <div className="flex  justify-center items-center">
        <h1 className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
          Get in touch
        </h1>
      </div>

      <div className=" flex justify-center items-center text-center">
        <div>
          <h1 className="text-center text-gray-600 mb-16">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </h1>
          <div className="text-2xl mb-12 grid gap-2 items-center">
            <div className="flex justify-center items-center gap-4">
              <CiMail />
              <h1>bayrmaa.m49@gmail.com</h1>
              <BsCopy />
            </div>
            <div className="flex justify-center items-center gap-4">
              <CiMail />

              <h1>+976 86367692</h1>
              <BsCopy />
            </div>
          </div>

          <p>You may also find me on these platforms!</p>
          <div className="flex gap-2 text-2xl items-center justify-center mt-3">
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
      </div>
      <p className="text-center mt-8 text-gray-500 text-sm mb-1 bg-gray-50 md:py-2">
        2024 | Greetings with ❤️️ from Ulaanbaatar
      </p>
    </div>
  );
};
export default Contact;
