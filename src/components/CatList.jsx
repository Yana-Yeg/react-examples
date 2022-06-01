import { useState } from "react";
import style from "./CatList.module.css";

const CatList = () => {
  const [input, setInput] = useState("");
  const [robotList, setRobotList] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setRobotList([...robotList, input]);
    setInput("");
  };

  return (
    <div className={style.wrapper}>
      <form onSubmit={onSubmit}>
        <input
          className={style.input}
          value={input}
          placeholder={"Generate Cat - enter smth"}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <h2>Cat List</h2>
      <div className={style.list}>
        {robotList.map((robo) => (
          <img
            onClick={() =>
              setRobotList(robotList.filter((robot) => robot !== robo))
            }
            width={200}
            height={200}
            src={`https://robohash.org/${robo}?set=set4`}
            alt={`${robo}`}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default CatList;
