import { useSelector } from "react-redux";
import Task from "./Task";
import "../styles/listask.css";

const TasksList = () => {
  const tasks = useSelector((state) => state.ToDo)
  
  return (
    <>
      <div className="list">
        <h2>List of Tasks</h2>
        {tasks.map((t) => (
          <Task
            task={t}
            key={t.id}
          />
        ))}

      </div>
    </>
  );
};

export default TasksList;