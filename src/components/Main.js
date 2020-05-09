import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "./Input";
import { TaskList } from "./TaskList";
import { Counter } from "./Counter";
import { FilterButtons } from "./FilterButtons";
import { addTask } from "../redux/task/task.actions";

export const Main = () => {
  const [task, setTask] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setTask("");
    dispatch(
      addTask({
        text: task,
        id: new Date().valueOf(),
        completed: false,
        edit: false,
      })
    );
  };

  return (
    <div>
      <h1>My ToDO - App</h1>
      <Counter />
      <Input setVar={setTask} value={task} handleSubmit={handleSubmit} />
      <TaskList />
      <FilterButtons />
    </div>
  );
};
