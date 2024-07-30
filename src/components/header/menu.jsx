const menuEl = [
  { label: "About", link: "https://www.keisukeono.com/" },
  { label: "Work", link: "https://www.keisukeono.com/" },
  { label: "Codes", link: "https://www.keisukeono.com/" },
  { label: "Contact", link: "https://www.keisukeono.com/" },
];

const Menu = () => {
  return (
    <div>
      <ul className="flex gap-6 text-gray-600 dark:text-gray-400 max-sm:hidden">
        {menuEl.map((MenuELObject) => (
          <li>
            <a href={MenuELObject.link}>{MenuELObject.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Menu;
