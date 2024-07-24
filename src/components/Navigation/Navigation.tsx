import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="flex gap-10 absolute p-4">
      <NavLink
        className="border-solid border-2 border-[#3470ff] p-[10px] px-[20px] rounded-[12px] text-[#3470ff] hover:text-white hover:bg-[#3470ff]"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="border-solid border-2 border-[#3470ff] p-[10px] px-[20px] rounded-[12px] text-[#3470ff] hover:text-white hover:bg-[#3470ff]"
        to="/catalog"
      >
        Catalog
      </NavLink>
      <NavLink
        className="border-solid border-2 border-[#3470ff] p-[10px] px-[20px] rounded-[12px] text-[#3470ff] hover:text-white hover:bg-[#3470ff]"
        to="/favorites"
      >
        Favorites
      </NavLink>
    </header>
  );
};

export default Navigation;
