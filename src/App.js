import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import { Route, Routes } from "react-router-dom";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import getContacts from "./services/getContactServices";
import deleteContact from "./services/deleteContactService";
import addContact from "./services/addContactServices";
import EditContact from "./components/EditContact/EditContact";
import updateContact from "./services/updateContacts";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {
    try {
      const { data } = await addContact(contact);
      setContacts([...contacts, data]);
    } catch (error) {}
  };

  const deleteContactHandler = async (id) => {
    try {
      const filteredContact = contacts.filter((c) => c.id !== id);
      setContacts(filteredContact);
      await deleteContact(id);
    } catch (error) {}
  };

  const editContactHandler = async (contact, id) => {
    await updateContact(id, contact);
    const { data } = await getContacts();
    setContacts(data);
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
    <main className="App">
      <h1>Contact App </h1>
      <Routes>
        <Route
          path="/"
          element={
            <ContactList contacts={contacts} onDelete={deleteContactHandler} />
          }
        />
        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route
          path="/edit/:id"
          element={<EditContact editContactHandler={editContactHandler} />}
        />
        <Route path="/user/:id" element={<ContactDetail />} />
      </Routes>
    </main>
  );
}

export default App;
