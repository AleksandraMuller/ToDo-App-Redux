import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTodos } from "../redux/task/task.selector";
import { addTask, deleteAll } from "../redux/task/task.actions";

import { Input } from "./Input";
import { TaskList } from "./TaskList";
import { Counter } from "./Counter";
import { FilterButtons } from "./FilterButtons";
import { EmptyState } from "./EmptyState";
import { Button } from "./Button";

import styled from "styled-components";

export const Main = () => {
  const [task, setTask] = useState();

  const dispatch = useDispatch();

  const selectors = useSelector(
    createStructuredSelector({
      todos: selectTodos,
    })
  );

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

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  return (
    <Container>
      <Header>Todos</Header>
      <FilterButtons />
      <CounterContainer>
        <Counter />
        <StyledButton
          label="Delete all"
          handleClick={handleDeleteAll}
        ></StyledButton>
      </CounterContainer>
      <SecondHeader>Add a todo here:</SecondHeader>
      <StyledInput setVar={setTask} value={task} handleSubmit={handleSubmit} />
      {selectors.todos.length === 0 ? <EmptyState /> : <TaskList />}
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  @media (min-width: 600px) {
    width: 80%;
  }
  @media (min-width: 900px) {
    width: 70%;
  }
  @media (min-width: 1200px) {
    width: 50%;
  }
`;

const CounterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Header = styled.h1`
  color: #55b8cb;
  font-family: "Permanent Marker", cursive;
  text-align: center;
  font-size: 2rem;
  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
  @media (min-width: 900px) {
    font-size: 3rem;
  }
  @media (min-width: 1200px) {
    font-size: 3.5rem;
  }
`;

const SecondHeader = styled.h2`
  font-size: 1rem;
`;

const StyledButton = styled(Button)`
  background-color: #e86267;
  border: none;
  :hover {
    background-color: #173847;
    color: #e86267;
  }
  margin: 0.4rem 0;
  margin-left: 1rem;
`;

const StyledInput = styled(Input)`
  padding: 0.5rem;
  margin: auto 0;
  width: 90%;
  font-family: "Fjalla One", sans-serif;
  @media (min-width: 600px) {
    width: 80%;
  }
  @media (min-width: 900px) {
    width: 70%;
  }
`;
