import Contact from "./Contact/Contact";
import style from "./ContactList.module.css";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={style.listWrapper}>
      <div className={style.contactList}>
        <div className={style.listHeader}>
          <h2>contacts</h2>
          <Link to="/add">
            <button>add contact</button>
          </Link>
        </div>

        {contacts.map((contact, id) => {
          return <Contact key={id} contact={contact} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};

export default ContactList;
