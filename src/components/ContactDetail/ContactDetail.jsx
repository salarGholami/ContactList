import { Link, useLocation } from "react-router-dom";
import style from "./ContactDeteail.module.css";

const ContactDetail = (props) => {
  const location = useLocation();
  const contact = location.state.contact;

  return (
    <div className={style.contactDetail}>
      <div className={style.dataContent}>
        <p>user name : {contact.name}</p>
        <p>user email : {contact.email}</p>
      </div>
      <div className={style.contactLink}>
        <Link to="/">
          <button>go to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
