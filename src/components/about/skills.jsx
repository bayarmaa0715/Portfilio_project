import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="my-24 max-sm:my-10 ">
      <div className="flex  justify-center items-center">
        <h1 className="text-center mb-4 text-gray-600 bg-gray-200 dark:bg-gray-800 dark:text-gray-400 py-1 px-[20px] rounded-xl">
          Skills
        </h1>
      </div>

      <div className="max-sm:justify-center max-sm:grid ">
        <h1 className="text-center text-gray-600 mb-16">
          The skills, tools and technologies I am really good at:
        </h1>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          className="flex justify-evenly text-center max-sm:grid max-sm:grid-cols-3 max-sm:gap-8 max-sm:pl-5 max-sm:justify-center max-sm:items-center"
        >
          <div className="w-20 h-20 dark:bg-black">
            <img src="/images/js.png" alt="" />
            <h1>Javascript</h1>
          </div>

          <div className="w-20 h-20 dark:bg-black">
            <img src="/images/ts.png" alt="" />
            <h1>Typescript</h1>
          </div>
          <div className="w-20 h-20">
            <img src="/images/react.png" alt="" />
            <h1>React</h1>
          </div>
          <div className="w-20 h-20">
            <img src="/images/next.png" alt="" />
            <h1>Next.js</h1>
          </div>
          <div className="w-20 h-20">
            <img src="/images/node.png" alt="" />
            <h1>Node.js</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Skills;
