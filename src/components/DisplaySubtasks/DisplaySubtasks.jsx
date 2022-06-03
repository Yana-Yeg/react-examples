import style from "./DisplaySubtasks.module.css";

const DisplaySubtasks = ({ topTask, subTasks, clickTask }) => {
  return (
    <>
      <div className={style.wrapNotCompleted}>
        <h3>Not yet completed</h3>
        {subTasks.map((subTask, index) => {
          const taskText = Object.keys(subTask)[0];
          if (!subTask[taskText])
            return (
              <p onClick={() => clickTask(topTask, index, taskText)}>
                {taskText}
              </p>
            );
        })}
      </div>

      <div className={style.wrapCompleted}>
        <h3>Completed</h3>
        {subTasks.map((subTask, index) => {
          const taskText = Object.keys(subTask)[0];
          if (subTask[taskText])
            return (
              <p onClick={() => clickTask(topTask, index, taskText)}>
                {taskText}
              </p>
            );
        })}
      </div>
    </>
  );
};

export default DisplaySubtasks;
