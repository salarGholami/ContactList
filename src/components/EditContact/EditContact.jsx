import { useEffect, useState } from "react";
import style from "../AddContact/AddContact.module.css";
import { useNavigate, useParams } from "react-router-dom";
import getOneContact from "../../services/getOneContact";
import getContacts from "../../services/getContactServices";
import updateContact from "../../services/updateContacts";

const EditContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const Navigate = useNavigate();
  const params = useParams();
  const paramsId = params.id;

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
      await updateContact(paramsId, contact);
      await getContacts();
    } catch (error) {};
    setContact({ name: "", email: "" });
    Navigate("/");
  };

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(paramsId);
        setContact({ name: data.name, email: data.email });
      } catch (error) {}
    };
    localFetch();
  }, []);

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
      <button type="submit">update Contact</button>
    </form>
  );
};

export default EditContact;
