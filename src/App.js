import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";

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

  return (
    <main className="App">
      <h1>Contact App </h1>
      <AddContact addContactHandler={addContactHandler} />
      <section>Contact List</section>
    </main>
  );
}

export default App;
