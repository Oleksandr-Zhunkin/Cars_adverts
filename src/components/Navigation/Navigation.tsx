import { NavLink } from "react-router-dom";
import Logo from "../Icons/Logo";
import s from "./Navigation.module.scss";
import clsx from "clsx";

interface LinkClassProps {
  isActive: boolean;
}

const buildLinkClass = ({ isActive }: LinkClassProps) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <header className={s.header}>
      <div>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <div className="flex gap-6 ml-auto">
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/catalog">
          Catalog
        </NavLink>
        <NavLink className={buildLinkClass} to="/favorites">
          Favorites
        </NavLink>
      </div>
    </header>
  );
};

export default Navigation;
