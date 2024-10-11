import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  const getNavClass = (prop) => {
    return prop.isActive ? css.active : css.noActive;
  };

  return (
    <div className={css.box}>
      <NavLink to="/register" className={getNavClass}>
        Register
      </NavLink>
      <NavLink to="/logIn" className={getNavClass}>
        Log in
      </NavLink>
    </div>
  );
}
