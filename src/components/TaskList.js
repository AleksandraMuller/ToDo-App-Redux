import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTodos } from "../redux/task/task.selector";

import { Button } from "./Button";

export const TaskList = () => {
  const selectors = useSelector(
    createStructuredSelector({
      todos: selectTodos,
    })
  );

  return (
    <div>
      {selectors.todos.map((todo) => (
        <>
          <li>{todo}</li>
          <Button label="Delete"></Button>
        </>
      ))}
    </div>
  );
};
