const MenuEl = [
  { label: "About", link: "https://www.keisukeono.com/" },
  { label: "Work", link: "https://www.keisukeono.com/" },
  { label: "Codes", link: "https://www.keisukeono.com/" },
  { label: "Contact", link: "https://www.keisukeono.com/" },
];

const Menu = () => {
  return (
    <div>
      <ul className="flex gap-6">
        {MenuEl.map((MenuELObject) => (
          <li>
            <a href={MenuELObject.link}>{MenuELObject.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Menu;
