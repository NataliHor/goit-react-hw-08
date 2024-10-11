import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <ul>
        <li className={css.text}>
          <FaUser />
          {name}
        </li>
        <li className={css.text}>
          <BsFillTelephoneFill />
          {number}
        </li>
      </ul>
      <button
        type="button"
        className={css.btn}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </div>
  );
}
