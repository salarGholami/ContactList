import { Link } from "react-router-dom";
import userImage from "../../../assets/images/user.png";
import style from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;

  return (
    <div key={id} className={style.item}>
      <div
        style={{ display: "flex", alignItems: "center", textAlign: "start" }}
      >
        <img src={userImage} alt="user" />

        <Link to={`/user/${id}`} state={{ contact }}>
          <div className={style.userData}>
            <p>name : {name}</p>
            <p>email : {email}</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/edit/${id}`}>
          <button className={style.btnEdit}>edit</button>
        </Link>
        <button onClick={() => onDelete(id)}>delete</button>
      </div>
    </div>
  );
};

export default Contact;
