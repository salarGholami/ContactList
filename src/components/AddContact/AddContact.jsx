import { useState } from "react";
import style from "./AddContact.module.css";

const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    console.log(e.target.value);
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={style.formControl}>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
        <div className={style.formControl}>
          <label>eamil</label>
          <input
            type="text"
            name="eamil"
            value={contact.email}
            onChange={changeHandler}
          />
        </div>
      </div>
      <button type="submit">Add Content</button>
    </form>
  );
};

export default AddContact;
