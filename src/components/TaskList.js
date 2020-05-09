import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTodos } from "../redux/task/task.selector";
import { selectItem } from "../redux/filter/filter.selector";

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
      item: selectItem,
      todos: selectTodos,
    })
  );

  const filtered = selectors.todos.filter((todo) => {
    if (selectors.item === "SHOW_COMPLETED") {
      return todo.completed;
    } else if (selectors.item === "SHOW_ONGOING") {
      return !todo.completed;
    } else {
      return true;
    }
  });

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
      {filtered.map((todo, index) => (
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
