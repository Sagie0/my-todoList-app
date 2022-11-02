import { useState } from "react";
import "./App.css";
import Task from "./Task";
import TextField from "@mui/material/TextField";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [newTaskDetails, setNewTaskDetails] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const detailsHandleChange = (event) => {
    setNewTaskDetails(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (!newTask && !newTaskDetails) {
      return;
    }
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      name: newTask,
      completed: false,
      details: newTaskDetails,
    };
    setTodoList([...todoList, task]);
    setNewTask("");
    setNewTaskDetails("");
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    const taskFound = todoList.find((task) => task.id === id);
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !taskFound.completed };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <form onSubmit={addTask} className="form">
          <input
            onChange={handleChange}
            className="title"
            value={newTask}
            placeholder="Enter Todo Title"
          />
          <TextField
            className="details"
            id="outlined-multiline-flexible"
            label="Task Details"
            multiline
            maxRows={4}
            value={newTaskDetails}
            onChange={detailsHandleChange}
          />
          <button>Add Task</button>
        </form>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              handleDelete={handleDelete}
              completeTask={completeTask}
              task={task}
              key={task.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
