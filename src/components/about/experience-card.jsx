const ExperienceCard = ({ experience }) => {
  return (
    <div className="flex justify-between w-[832px] border-b-2 border-gray-300 bg-white rounded-xl p-8 max-sm:grid max-sm:w-[35rem]">
      <h1 className="text-green-500  font-bold">{experience.companyLogo}</h1>
      <div>
        <h1 className="mb-4 font-bold">{experience.position}</h1>
        <ul className="list-disc ml-4 grid gap-1">
          {experience.lists.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
      </div>
      <p>
        {experience.startDate}- {experience.finishDate}
      </p>
    </div>
  );
};

export default ExperienceCard;
