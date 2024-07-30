import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const NavSection = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center gap-3 max-sm:hidden">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-500"
      >
        {theme === "light" ? (
          <MdOutlineLightMode className="hover:cursor-pointer text-2xl" />
        ) : (
          <MdOutlineDarkMode className="hover:cursor-pointer text-2xl" />
        )}
      </button>
      <button
        href="/path-to-cv.pdf"
        download
        className="px-4 py-2 text-center text-white bg-gray-900 rounded-md dark:bg-white dark:text-gray-900"
      >
        Download CV
      </button>
    </div>
  );
};

export default NavSection;

// const ModeIcon = () => {
//   // const [theme, setTheme] = useState(true);
//   if (theme) {
//     <IoSunnyOutline
//       className="text-2xl hover:cursor-pointer"
//       onClick={() => {
//         console.log("light");
//         setTheme(false);
//       }}`
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

// {theme === "light" ? (
//   <button
//     onClick={() => {
//       setTheme("dark");
//     }}
//   >
//     <IoSunnyOutline className="text-2xl hover:cursor-pointer" />
//   </button>
// ) : (
//   <button
//     onClick={() => {
//       setTheme("light");
//     }}
//   >
//     <FaMoon className="text-2xl hover:cursor-pointer" />
//   </button>
// )}
