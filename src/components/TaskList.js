import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTodos, selectTaskFile } from "../redux/task/task.selector";
import {
  deleteTask,
  editTask,
  addEditedTask,
} from "../redux/task/task.actions";

import { Button } from "./Button";
import { Input } from "./Input";

export const TaskList = () => {
  const [task, setTask] = useState();
  const dispatch = useDispatch();

  const selectors = useSelector(
    createStructuredSelector({
      todos: selectTodos,
      taskfile: selectTaskFile,
    })
  );

  console.log(selectors.taskfile);
  console.log(task);

  const handleDelete = (index) => {
    const task = selectors.todos[index];
    dispatch(deleteTask(task));
  };

  const handleEdit = (index) => {
    const task = selectors.todos[index];
    console.log(task);
    console.log(selectors.edit);
    dispatch(editTask(task));
  };

  const handleSubmit = (event, index) => {
    const fullTodo = selectors.todos[index];
    event.preventDefault();
    dispatch(addEditedTask({ fullTodo, task }));

    setTask("");
  };

  return (
    <div>
      {selectors.todos.map((todo, index) => (
        <>
          {todo.edit === false && (
            <li key={index}>
              {todo.id}|| {todo.text}
            </li>
          )}

          {todo.id === selectors.todos[index].id && todo.edit === true && (
            <Input
              // placeholder={todo.text}
              value={task}
              setVar={setTask}
              handleSubmit={(event) => handleSubmit(event, index)}
            ></Input>
          )}
          {todo.edit === false && (
            <Button label="Edit" handleClick={() => handleEdit(index)}></Button>
          )}
          <Button
            label="Delete"
            handleClick={() => handleDelete(index)}
          ></Button>
        </>
      ))}
    </div>
  );
};
