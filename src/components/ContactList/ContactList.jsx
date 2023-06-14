import { useEffect, useState } from "react";
import Contact from "./Contact/Contact";
import style from "./ContactList.module.css";
import { Link } from "react-router-dom";
import getContacts from "../../services/getContactServices";
import deleteContact from "../../services/deleteContactService";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);

  const deleteContactHandler = async (id) => {
    try {
      const filteredContact = contacts.filter((c) => c.id !== id);
      setContacts(filteredContact);
      await deleteContact(id);
    } catch (error) {}
  };

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  return (
    <div className={style.listWrapper}>
      <div className={style.contactList}>
        <div className={style.listHeader}>
          <h2>contacts</h2>
          <Link to="/add">
            <button>add contact</button>
          </Link>
        </div>

        {contacts ? (
          contacts.map((contact, id) => {
            return (
              <Contact
                key={id}
                contact={contact}
                onDelete={deleteContactHandler}
              />
            );
          })
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};

export default ContactList;
