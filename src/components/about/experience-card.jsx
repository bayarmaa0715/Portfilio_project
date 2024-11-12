const ExperienceCard = ({ experience }) => {
  return (
    <div className="flex justify-between md:w-[832px] border-b-2 border-gray-300 bg-white rounded-xl md:p-8 max-sm:grid max-sm:p-3 max-sm:m-3 dark:bg-gray-800 dark:border-gray-900">
      <h1 className="text-green-500  font-bold">{experience.companyLogo}</h1>
      <div>
        <h1 className="mb-4 font-bold">{experience.position}</h1>
        <ul className="list-disc ml-4 grid gap-1">
          {experience.lists.map((element, key1) => {
            return <li key={key1}>{element}</li>;
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
