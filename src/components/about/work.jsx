import WorkCard from "./work-card";

const worksObject = [
  {
    image: "/images/work1.png",
    garchig: "Ubcab",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skill: ["React", "Next.js", "Javascript", "Node.js", "Work"],
  },
  {
    image: "/images/work2.png",
    garchig: "Mentorhub",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skill: ["React", "Next.js", "Javascript", "Node.js", "Work"],
  },
  {
    image: "/images/work3.jpeg",
    garchig: "iToim",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skill: [
      "React",
      "Next.js",
      "Javascript",
      "Node.js",
      "Work   ",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
    ],
  },
];

const Work = () => {
  return (
    <div className="my-24 max-sm:my-6">
      <div className="flex  justify-center items-center">
        <h1 className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] dark:bg-gray-800 dark:text-gray-400 rounded-xl">
          Work
        </h1>
      </div>

      <div>
        <h1 className="text-center text-gray-600 mb-16">
          Some of the noteworthy projects I have built:
        </h1>
        <div className=" grid  gap-12 items-center justify-center ">
          {worksObject.map((workEl, i) => (
            <WorkCard key={i} workEl={workEl} swap={i % 2} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Work;
