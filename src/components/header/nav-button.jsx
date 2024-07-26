import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

const NavButton = () => {
  const { theme, setTheme } = useTheme();

  console.log("T", theme);

  return (
    <div className="flex border-l-2 gap-4 pl-6 items-center">
      {theme === "light" ? (
        <button
          onClick={() => {
            setTheme("dark");
          }}
        >
          <IoSunnyOutline className="text-2xl hover:cursor-pointer" />
        </button>
      ) : (
        <button
          onClick={() => {
            setTheme("light");
          }}
        >
          <FaMoon className="text-2xl hover:cursor-pointer" />
        </button>
      )}

      {/* 
      <ModeIcon /> */}

      <button
        className="bg-black text-white dark:text-black dark:bg-white rounded-lg  py-[6px] px-4"
        onClick={() => {}}
      >
        Download CV
      </button>
    </div>
  );
};
export default NavButton;

// const ModeIcon = () => {
//   // const [theme, setTheme] = useState(true);
//   if (theme) {
//     <IoSunnyOutline
//       className="text-2xl hover:cursor-pointer"
//       onClick={() => {
//         console.log("light");
//         setTheme(false);
//       }}
//     />;
//   } else {
//     <FaMoon
//       className="text-2xl hover:cursor-pointer"
//       onClick={() => {
//         console.log("dark");
//         setTheme(true);
//         console.log("setthem n", setTheme(true));
//       }}
//     />;
//   }
// };
