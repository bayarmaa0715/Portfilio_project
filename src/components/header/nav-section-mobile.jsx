import Menu from "./menu";
import NavButton from "./nav-button";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const NavSectionMobile = () => {
  return (
    <button className="max-sm:grid max-[4900px]:hidden">
      <PiDotsThreeOutlineVerticalFill />
    </button>
  );
};
export default NavSectionMobile;
