import { useState } from "react";
import _ from "lodash";
import style from "./Checklist.module.css";
import DisplaySubtasks from "../DisplaySubtasks/DisplaySubtasks";

const INITIAL_LIST = {
  "Organize closet": [
    { "Donate old clothes and shoes": false },
    { "Buy new shelf": false },
    { "Put in shelf by color": false },
  ],
  "Finish homework": [
    { "Finish math homework": false },
    { "Finish science homework": false },
    { "Finish Reactjs homework": false },
  ],
  "Achieve nirvana": [
    { "Meditate a little": false },
    { "Gain some wisdom": false },
  ],
};

const Checklist = () => {
  const [list, setList] = useState(INITIAL_LIST);

  const clickTask = (topTask, index, taskText) => {
    const newList = _.cloneDeep(list);
    newList[topTask][index][taskText] = !newList[topTask][index][taskText];
    setList(newList);
  };

  return (
    <div className={style.wrapper}>
      {Object.entries(list).map(([topTask, subTasks]) => {
        return (
          <>
            <h2>{topTask}</h2>
            <div style={{ display: "flex" }}>
              <DisplaySubtasks
                topTask={topTask}
                subTasks={subTasks}
                clickTask={clickTask}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Checklist;
