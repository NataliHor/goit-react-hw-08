import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";

export default function ContactList() {
  const filteredData = useSelector(selectFilteredContacts);
  return (
    <ul className={css.list}>
      {filteredData.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
