import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || [];
  });

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
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <main className="App">
      <h1>Contact App </h1>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} onDelete={deleteContactHandler} />
    </main>
  );
}

export default App;
