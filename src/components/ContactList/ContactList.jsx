import style from "./ContactList.module.css";
import userImage from "../../assets/images/user.png";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <div className={style.contactList}>
        <div>
          <h2>contacts</h2>
          <Link to="/add">
            <button>add contact</button>
          </Link>
        </div>
        
        {contacts.map((contact) => {
          const { name, email, id } = contact;
          return (
            <div key={id} className={style.item}>
              <img src={userImage} alt="user" />
              <p>name : {name}</p>
              <p>email : {email}</p>
              <button onClick={() => onDelete(id)}>delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContactList;
