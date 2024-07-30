import Menu from "./menu";
import NavButton from "./nav-button";
import MobileMenu from "./nav-section-mobile";

const NavSection = () => {
  return (
    <div className="flex gap-6 items-center  ">
      <Menu />
      <NavButton />
      <MobileMenu />
    </div>
  );
};
export default NavSection;
