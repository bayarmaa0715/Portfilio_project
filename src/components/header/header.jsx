import NavSection from "./nav-section";

const Header = () => {
  return (
    <header className="flex justify-between my-4 mx-28 items-center">
      <h1 className="uppercase font-black text-xl  ">Bayarmaa</h1>
      <NavSection />
    </header>
  );
};

export default Header;
