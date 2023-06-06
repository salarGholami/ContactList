import { Link } from "react-router-dom";
import userImage from "../../../assets/images/user.png";
import style from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;

  return (
    <div key={id} className={style.item}>
      <img src={userImage} alt="user" />

      <Link to={ `/user/${id}`} state={{contact}}>
        <div className={style.userData}>
          <p>name : {name}</p>
          <p>email : {email}</p>
        </div>
      </Link>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  );
};

export default Contact;
