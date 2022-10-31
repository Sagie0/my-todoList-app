import { useEffect, useRef, useState } from "react";
import "./App.css";
import Task from "./Task";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = newTask;
  }, [newTask]);

  const handleChange = (event) => {
    event.preventDefault();
    setNewTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
    previousInputValue.current = ''
    console.log(previousInputValue.current, 'current');
    setNewTask((previousState) => {previousState = previousInputValue.current;})
    console.log(newTask, 'Nu');
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <form onSubmit={addTask}>
          <input
            onChange={handleChange}
            ref={previousInputValue}
            value={previousInputValue.current}
          />
          <button>Add Task</button>
        </form>
      </div>

      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              handleDelete={handleDelete}
              completeTask={completeTask}
              completed={task.completed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
