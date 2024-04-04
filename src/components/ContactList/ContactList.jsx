import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchFilter = useSelector(selectNameFilter);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchFilter.trim().toLowerCase())
  );

  return (
    <div>
      <ul className={css.contactBox}>
        {filterContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
      {filterContacts.length === 0 && contacts.length !== 0 && (
        <p>No contacts found </p>
      )}
    </div>
  );
};

export default ContactList;
