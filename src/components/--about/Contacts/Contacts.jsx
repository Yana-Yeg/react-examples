import style from "./Contacts.module.css";
import Icons from "../../../images/sprite.svg";

const Contacts = () => {
  return (
    <div className={style.wrapper}>
      <h1>Contacts</h1>
      <p className={style.text}>
        We work from Monday to Friday from 08:00 to 19:00. Saturday after
        pre-registration.
      </p>
      <ul className={style.list}>
        <li className={style.item}>
          <svg className={style.icon}>
            <use xlinkHref={`${Icons}#icon-location`} />
          </svg>
          <h3>Address</h3>
          <p>al. Architects 10B 54-115 Wroclaw</p>
        </li>
        <li className={style.item}>
          <svg className={style.icon}>
            <use xlinkHref={`${Icons}#icon-email`} />
          </svg>
          <h3>Email</h3>
          <p>kontakt@architekciusmiechu.pl</p>
        </li>
        <li className={style.item}>
          <svg className={style.icon}>
            <use xlinkHref={`${Icons}#icon-phone`} />
          </svg>
          <h3>Tel</h3>
          <p> 607 706 890</p>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
