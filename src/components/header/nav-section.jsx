import Menu from "./menu";
import NavButton from "./nav-button";

const NavSection = () => {
  return (
    <div className="flex gap-6 items-center max-sm:hidden ">
      <Menu />
      <NavButton />
    </div>
  );
};
export default NavSection;
