import { useDispatch, useSelector } from "react-redux";
import { selectName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const hendleClick = () => {
    dispatch(logout());
  };

  return (
    <div className={css.menu}>
      <p>Welcome, {name}!</p>
      <button type="button" onClick={hendleClick}>
        LogOut
      </button>
    </div>
  );
}
