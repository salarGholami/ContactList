import { useState } from "react";
import style from "./AddContact.module.css";
import { useNavigate } from "react-router-dom";
import addContact from "../../services/addContactServices";

const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const Navigate = useNavigate();

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("all fildes are mandatory !");
      e.preventDefault();
      return;
    }
    e.preventDefault();
    try {
      await addContact(contact);
      setContact({ name: "", email: "" });
      Navigate("/");
    } catch (error) {}
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
