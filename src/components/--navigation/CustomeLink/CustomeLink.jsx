import { Link } from "react-router-dom";
import style from "./CustomeLink.module.css";

const CustomeLink = ({ children, to }) => {
  return (
    <Link to={to} className={style.link}>
      {children}
    </Link>
  );
};

export default CustomeLink;
