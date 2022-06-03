import { useEffect, useRef, useState } from "react";
import style from "./ShortList.module.css";
import Icons from "../../images/sprite.svg";

const ShortList = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const modalRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setList([...list, input]);
    setInput("");
  };

  const openModal = (text) => {
    setModalText(text);
    setModalOpen(true);
  };

  useEffect(() => {
    const clickedOutside = (e) => {
      if (
        modalOpen &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", clickedOutside);

    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [modalOpen]);

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.info}>
          <svg className={style.image}>
            <use xlinkHref={`${Icons}#icon-info1`} />
          </svg>
          <p className={style.text}>Enter your word or phrase</p>
          <p className={style.text}>
            Choose from the list and see full content
          </p>
        </div>
        <form onSubmit={submitHandler}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            placeholder="Enter your word"
          />
        </form>

        {list.map((item) => {
          return (
            <p onClick={() => openModal(item)}>
              {item.length > 5 ? `${item.substring(0, 5)}...` : item}
            </p>
          );
        })}
      </div>
      {modalOpen && (
        <div ref={modalRef} className={style.modal}>
          <p>{`Full text: "${modalText}"`}</p>
        </div>
      )}
    </>
  );
};

export default ShortList;
