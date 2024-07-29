import WorkCard from "./work-card";

const worksObject = [
  {
    image: "/imeges/work1.png",
    garchig: "Ubcab",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skill: ["React", "Next.js", "Javascript", "Node.js", "Work"],
  },
  {
    image: "/imeges/work1.png",
    garchig: "Mentorhub",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skill: ["React", "Next.js", "Javascript", "Node.js", "Work"],
  },
  {
    image: "/imeges/work1.png",
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
        <h1 className="text-center mb-4 text-gray-600 bg-gray-200 py-1 px-[20px] rounded-xl">
          Work
        </h1>
      </div>

      <div>
        <h1 className="text-center text-gray-600 mb-16">
          Some of the noteworthy projects I have built:
        </h1>
        <div className=" grid  gap-12 items-center justify-center ">
          {worksObject.map((workEl) => (
            <WorkCard workEl={workEl} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Work;
