import { nanoid } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import s from "./Form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  // const dispatch = useDispatch();
  // const items = useSelector(getItems);

  const nameInputId = useRef(nanoid());
  const numberInputId = useRef(nanoid());

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      name,
      number,
    };

    reset();
  };
  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit} autocomplete="off">
        <label className={s.label} htmlFor={nameInputId.current}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters"
            onChange={handleChange}
            id={nameInputId}
            required
          />
        </label>

        <label className={s.label} htmlFor={numberInputId.current}>
          Email
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits "
            onChange={handleChange}
            id={numberInputId}
          />
        </label>

        <label className={s.label} htmlFor={numberInputId.current}>
          Message
          <textarea
            className={s.textarea}
            name=""
            id=""
            cols="30"
            rows="5"
          ></textarea>
        </label>
        <button className={s.formBtn} type="submit" disabled={!number && !name}>
          Send
        </button>
      </form>
    </>
    // return (
    // <form autocomplete="off">
    //   <label for="text" class="form-label">
    //     Name
    //     <input
    //       type="text"
    //       class="form-input"
    //       name="name"
    //       id="text"
    //       placeholder=" "
    //     />
    //   </label>

    //   <label for="text" class="form-label">
    //     Email
    //     <input
    //       type="text"
    //       class="form-input"
    //       name="email"
    //       id="text"
    //       placeholder=" "
    //     />
    //   </label>

    //   <label for="text" class="form-label">
    //     Message
    //     <textarea></textarea>
    //   </label>
    //   <button type="submit">Send</button>
    // </form>
  );
};

export default Form;
