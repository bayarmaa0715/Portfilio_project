import { root } from "postcss";
import { CiShare1 } from "react-icons/ci";
const WorkCard = ({ workEl, swap }) => {
  return (
    <div
      className={`flex ${
        swap ? "flex-row-reverse" : ""
      } justify-between md:w-[1150px] border-b-2 border-gray-300 dark:border-gray-800 rounded-b-xl p-8 max-sm:grid max-sm:w- max-sm:p-3  max-sm:m-2`}
    >
      <div className="md:w-[480px] md:h-[384px]">
        <img src="/images/work1.png" alt="" className="size-full" />
      </div>
      <div className="grid md:w-[480px] gap-6">
        <h1 className="font-bold ">{workEl.garchig}</h1>
        <p className="text-gray-600">{workEl.details}</p>
        <div>
          <ul className="grid grid-cols-4 gap-3 max-sm:grid-cols-3 ">
            {workEl.skill.map((skillEl) => {
              return (
                <li className="text-center mb-4 text-gray-600 bg-gray-200 dark:text-gray-400 dark:bg-gray-800  py-1 px-[20px] rounded-xl ">
                  {skillEl}
                </li>
              );
            })}
          </ul>
        </div>
        <p className="text-2xl font-bolder">
          <CiShare1 />
        </p>
      </div>
    </div>
  );
};
export default WorkCard;
