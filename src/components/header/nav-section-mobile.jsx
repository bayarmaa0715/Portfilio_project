import Menu from "./menu";
import NavButton from "./nav-button";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const NavSectionMobile = () => {
  return (
    <a href="./nav-section" className="max-sm:grid max-[4900px]:hidden">
      <PiDotsThreeOutlineVerticalFill />
    </a>
  );
};
export default NavSectionMobile;
