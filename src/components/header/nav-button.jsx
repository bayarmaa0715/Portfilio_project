import { IoSunnyOutline } from "react-icons/io5";

import { FaMoon } from "react-icons/fa";
import { useState } from "react";

const NavButton = () => {
  const [theme, setTheme] = useState(true);
  return (
    <div className="flex border-l-2 gap-4 pl-6 items-center">
      {theme ? (
        <IoSunnyOutline
          className="text-2xl hover:cursor-pointer"
          onClick={() => {
            console.log("light");
            setTheme(false);
          }}
        />
      ) : (
        <FaMoon
          className="text-2xl hover:cursor-pointer"
          onClick={() => {
            console.log("dark");
            setTheme(true);
            console.log("setthem n", setTheme(true));
          }}
        />
      )}

      {/* 
      <ModeIcon /> */}

      <button
        className="bg-black text-white rounded-lg  py-[6px] px-4"
        onClick={() => {}}
      >
        Download CV
      </button>
    </div>
  );
};
export default NavButton;

const ModeIcon = () => {
  // const [theme, setTheme] = useState(true);
  if (theme) {
    <IoSunnyOutline
      className="text-2xl hover:cursor-pointer"
      onClick={() => {
        console.log("light");
        setTheme(false);
      }}
    />;
  } else {
    <FaMoon
      className="text-2xl hover:cursor-pointer"
      onClick={() => {
        console.log("dark");
        setTheme(true);
        console.log("setthem n", setTheme(true));
      }}
    />;
  }
};
