import { useEffect, useState } from "react";
import Contact from "./Contact/Contact";
import style from "./ContactList.module.css";
import { Link } from "react-router-dom";
import getContacts from "../../services/getContactServices";
import deleteContact from "../../services/deleteContactService";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);
  const [allContacts, setAllConttacts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const deleteContactHandler = async (id) => {
    try {
      const filteredContact = contacts.filter((c) => c.id !== id);
      setContacts(filteredContact);
      await deleteContact(id);
    } catch (error) {}
  };

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    const searchValue = e.target.value;

    if (searchValue !== "") {
      const filterSearch = allContacts.filter((c) => {
        return Object.values(c)
          .join("")
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase());
      });
      setContacts(filterSearch);
    } else {
      setContacts(allContacts);
    }
  };

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
      setAllConttacts(data);
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

        <div className={style.search}>
          <input
            type="text"
            value={searchTerm}
            onChange={searchHandler}
            placeholder="search something"
          />
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
