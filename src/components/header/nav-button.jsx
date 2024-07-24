import { IoSunnyOutline } from "react-icons/io5";

const NavButton = () => {
  return (
    <div className="flex border-l-2 gap-4 pl-6 items-center">
      <IoSunnyOutline className="text-2xl" />

      <button className="bg-black text-white rounded-lg  py-[6px] px-4">
        Download CV
      </button>
    </div>
  );
};
export default NavButton;
