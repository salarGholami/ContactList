import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import { Route, Routes } from "react-router-dom";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import axios from "axios";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([
      ...contacts,
      {
        id: Math.ceil(Math.random() * 100),
        ...contact,
      },
    ]);
  };

  const deleteContactHandler = (id) => {
    const filteredContact = contacts.filter((c) => c.id !== id);
    setContacts(filteredContact);
  };

  useEffect(() => {
    const getContacts = async () => {
      const { data } = await axios.get("http://localhost:3004/contacts");
      setContacts(data);
    };
    getContacts();
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
        <Route path="/user/:id" element={<ContactDetail />} />
      </Routes>
    </main>
  );
}

export default App;
