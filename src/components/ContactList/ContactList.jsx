import style from "./ContactList.module.css";
import userImage from "../../assets/images/user.png";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <div className={style.contactList}>
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
