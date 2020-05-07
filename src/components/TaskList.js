import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTodos, selectTaskFile } from "../redux/task/task.selector";
import {
  deleteTask,
  editTask,
  addEditedTask,
  toggleCompletedTask,
} from "../redux/task/task.actions";
import { ReactComponent as Checked } from "../assets/checked_square.svg";
import { ReactComponent as EmptySquare } from "../assets/empty_sqare.svg";

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

  // console.log(selectors.taskfile);

  const handleDelete = (index) => {
    const task = selectors.todos[index];
    dispatch(deleteTask(task));
  };

  const handleEdit = (index) => {
    const task = selectors.todos[index];
    dispatch(editTask(task));
  };

  const handleSubmit = (event, index) => {
    const fullTodo = selectors.todos[index];
    event.preventDefault();
    dispatch(addEditedTask({ fullTodo, task }));
    setTask("");
  };

  const handleCompleted = (event, index) => {
    const task = selectors.todos[index];
    event.preventDefault();
    dispatch(toggleCompletedTask(task));
  };

  return (
    <div>
      {selectors.todos.map((todo, index) => (
        <>
          {todo.edit === false && <li key={todo.id}>{todo.text}</li>}

          {todo.edit === true && (
            <Input
              value={task}
              setVar={setTask}
              handleSubmit={(event) => handleSubmit(event, index)}
            ></Input>
          )}
          {todo.completed === false ? (
            <EmptySquare onClick={(event) => handleCompleted(event, index)} />
          ) : (
            <Checked onClick={(event) => handleCompleted(event, index)} />
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
