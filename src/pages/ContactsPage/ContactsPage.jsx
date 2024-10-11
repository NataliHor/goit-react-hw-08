import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBar from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

export default function ContactsPage() {
  return (
    <div>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
}
