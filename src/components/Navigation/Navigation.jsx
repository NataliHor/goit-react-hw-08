import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const getNavClass = (prop) => {
    return prop.isActive ? css.active : css.noActive;
  };

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={getNavClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={getNavClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
