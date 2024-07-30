import ExperienceCard from "./experience-card";

const experiences = [
  {
    companyLogo: "upWork",
    position: "Sr. Fullstack Developer",
    lists: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    startDate: "Jul 2027",
    finishDate: "Jul 2027",
  },
  {
    companyLogo: "Turing",
    position: "Sr. Frontend Developer",
    lists: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    startDate: "Jul 2027",
    finishDate: "Jul 2027",
  },
  {
    companyLogo: "Turing",
    position: "Team Lead",
    lists: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    startDate: "Jul 2027",
    finishDate: "Jul 2027",
  },
];

const Experience = () => {
  return (
    <div className="md:py-24 bg-gray-50 max-sm:py-12">
      <div className="flex  justify-center items-center">
        <h1 className="text-center mb-4 text-gray-600 bg-gray-200 dark:bg-gray-800 dark:text-gray-400 py-1 px-[20px] rounded-xl">
          Experience
        </h1>
      </div>

      <div>
        <h1 className="text-center text-gray-600 mb-16">
          Here is a quick summary of my most recent experiences:
        </h1>
        <div className="flex gap-12 items-center justify-center ">
          <div className="grid gap-20 ">
            {experiences.map((experience) => (
              <ExperienceCard experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
