import NavSection from "./nav-section";
import NavSectionMobile from "./nav-section-mobile";
const Header = () => {
  return (
    <header className="flex justify-between my-4 mx-40 items-center max-sm:mx-4  ">
      <h1 className="uppercase font-black text-xl  ">Bayarmaa</h1>
      <NavSection className="" />
      <NavSectionMobile />
    </header>
  );
};

export default Header;
