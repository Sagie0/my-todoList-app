import React from 'react'

const Task = (props) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.completed ? "dodgerblue" : "white" }}
    >
      <h1 style={{ color: props.completed ? "white" : "black" }}>
        {props.taskName}
      </h1>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.handleDelete(props.id)}> X </button>
    </div>
  );
}

export default Task;