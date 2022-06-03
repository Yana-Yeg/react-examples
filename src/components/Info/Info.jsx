import style from "./Info.module.css";
import Icons from "../../images/sprite.svg";

const Info = ({ text }) => {
  return (
    <div className={style.info}>
      <svg className={style.image}>
        <use xlinkHref={`${Icons}#icon-info1`} />
      </svg>
      <p className={style.text}>{text}</p>
    </div>
  );
};

export default Info;
