import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "./Input";
import { TaskList } from "./TaskList";
import { addTask } from "../redux/task/task.actions";

export const Main = () => {
  // const [todos, setTodos] = useState([]);
  const [task, setTask] = useState();

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTask("");
    // setTodos([...todos, task]);
    dispatch(addTask(task));
  };

  return (
    <div>
      <h1>My ToDO - App</h1>
      <Input
        handleChange={handleChange}
        value={task}
        handleSubmit={handleSubmit}
      />
      <TaskList />
    </div>
  );
};
