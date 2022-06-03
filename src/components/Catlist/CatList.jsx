import { useState } from "react";
import Info from "../Info/Info";
import style from "./CatList.module.css";

const CatList = () => {
  const [input, setInput] = useState("");
  const [robotList, setRobotList] = useState([]);

  const instruction = "Enter your word and see unique cat with this name. ";

  const onSubmit = (e) => {
    e.preventDefault();
    setRobotList([...robotList, input]);
    setInput("");
  };

  return (
    <div className={style.wrapper}>
      <Info text={instruction} />
      <form onSubmit={onSubmit}>
        <input
          className={style.input}
          value={input}
          placeholder={"Generate Cat - enter smth"}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      {/* <h2>Cat List</h2> */}
      <div className={style.list}>
        {robotList.map((robo) => (
          <img
            onClick={() =>
              setRobotList(robotList.filter((robot) => robot !== robo))
            }
            width={300}
            height={300}
            src={`https://robohash.org/${robo}?set=set4`}
            alt={`${robo}`}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default CatList;
