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
import styled from "styled-components";

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
        <SingleTaskContainer>
          <TodoContainer>
            {todo.completed === false ? (
              <IconEmpty onClick={(event) => handleCompleted(event, index)} />
            ) : (
              <IconChecked onClick={(event) => handleCompleted(event, index)} />
            )}
            {todo.edit === false && <List key={todo.id}>{todo.text}</List>}

            {todo.edit === true && (
              <Input
                value={task}
                setVar={setTask}
                handleSubmit={(event) => handleSubmit(event, index)}
              ></Input>
            )}
          </TodoContainer>
          <ButtonContainer>
            {todo.edit === false && (
              <EditButton
                label="Edit"
                handleClick={() => handleEdit(index)}
              ></EditButton>
            )}
            <DeleteButton
              label="Delete"
              handleClick={() => handleDelete(index)}
            ></DeleteButton>
          </ButtonContainer>
        </SingleTaskContainer>
      ))}
    </div>
  );
};

const SingleTaskContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconEmpty = styled(EmptySquare)`
  width: 35px;
  height: 35px;
  margin-right: 1rem;
  cursor: pointer;
`;
const IconChecked = styled(Checked)`
  width: 35px;
  height: 35px;
  margin-right: 1rem;
  cursor: pointer;
`;

const List = styled.li`
  list-style: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
const TodoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const EditButton = styled(Button)`
  background-color: #f2bc1c;
  color: #173847;
  :hover {
    color: #f2bc1c;
    background-color: #173847;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #e86267;
  color: #173847;
  margin-left: 1rem;
  :hover {
    color: #e86267;
    background-color: #173847;
  }
`;
