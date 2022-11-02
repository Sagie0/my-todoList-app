import React, { useState } from "react";
import TaskModal from "./Modal";

const Task = ({ task, completeTask, handleDelete }) => {
  const [toggleTask, setToggleTask] = useState(false);

  const viewTask = (e) => {
    e.preventDefault();
    setToggleTask(!toggleTask);
  };
  return (
    <div
      className="task"
      style={{ backgroundColor: task.completed ? "dodgerblue" : "white" }}
    >
      <h1 style={{ color: task.completed ? "white" : "black" }}>{task.name}</h1>
      <button onClick={viewTask} id="view">
        View Task
      </button>
      {toggleTask && (
        <TaskModal
          task={task}
          toggleTask={toggleTask}
          setToggleTask={setToggleTask}
        />
      )}
      <button onClick={() => completeTask(task.id)} id="complete">
        {task.completed ? "Completed" : "Pending"}
      </button>
      <button onClick={() => handleDelete(task.id)} id="delete">
        {" "}
        X{" "}
      </button>
    </div>
  );
};

export default Task;
