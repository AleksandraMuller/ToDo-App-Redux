import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTodos, selectTaskFile } from "../redux/task/task.selector";
import { deleteTask } from "../redux/task/task.actions";

import { Button } from "./Button";

export const TaskList = () => {
  const dispatch = useDispatch();

  const selectors = useSelector(
    createStructuredSelector({
      todos: selectTodos,
      taskfile: selectTaskFile,
    })
  );

  console.log(selectors.taskfile);

  const handleDelete = (index) => {
    // console.log(`clicked on${index}`);
    const task = selectors.todos[index];
    // selectors.todos.filter((todo) => todo === task);
    dispatch(deleteTask(task));
  };

  return (
    <div>
      {selectors.todos.map((todo, index) => (
        <>
          <li key={index}>{todo}</li>
          <Button
            label="Delete"
            handleClick={() => handleDelete(index)}
          ></Button>
        </>
      ))}
    </div>
  );
};
