import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  function handleChange(evt) {
    dispatch(changeFilter(evt.target.value));
  }
  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
}
