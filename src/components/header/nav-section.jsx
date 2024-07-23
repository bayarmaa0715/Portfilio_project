import Menu from "./menu";
import NavButton from "./nav-button";

const NavSection = () => {
  return (
    <div className="flex gap-6 items-center ">
      <Menu />
      <NavButton />
    </div>
  );
};
export default NavSection;
