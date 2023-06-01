import { useState } from "react";
import style from "./AddContact.module.css";

const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => { 
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    addContactHandler(contact);
    setContact({ name: "", email: "" }); 
  };

  return (
    <form onSubmit={submitForm}>
      <div className={style.formControl}>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className={style.formControl}>
        <label>email</label>
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
