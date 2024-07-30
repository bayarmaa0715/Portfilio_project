import NavSection from "./nav-section";
import MobileMenu from "./nav-section-mobile";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Header = () => {
  return (
    <header
      className={`flex justify-between my-4 mx-40 items-center max-sm:mx-4 `}
    >
      <h1
        className={`uppercase font-black text-xl ${dancingScript.className} `}
      >
        Bayarmaa
      </h1>
      <NavSection className="" />
    </header>
  );
};

export default Header;
