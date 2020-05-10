import React from "react";
import { useDispatch } from "react-redux";

import {
  showAll,
  showCompleted,
  showOngoing,
} from "../redux/filter/filter.actions";

// import { Button } from "./Button";

import styled from "styled-components";

export const FilterButtons = () => {
  const dispatch = useDispatch();

  const handleAll = (event) => {
    event.preventDefault();
    dispatch(showAll("SHOW_ALL"));
  };

  const handleCompleted = (event) => {
    event.preventDefault();
    dispatch(showCompleted("SHOW_COMPLETED"));
  };

  const handleOngoing = (event) => {
    event.preventDefault();
    dispatch(showOngoing("SHOW_ONGOING"));
  };
  return (
    <Container>
      <Button onClick={handleAll}>SHOW ALL</Button>
      <Button onClick={handleCompleted}>SHOW COMPLETED</Button>
      <Button onClick={handleOngoing}>SHOW ONGOING</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  cursor: pointer;
  font-family: "Fjalla One", sans-serif;
  background-color: #f2bc1c;
  color: #173847;
  padding: 0.5rem;
  border: none;
  @media (min-width: 900px) {
    padding: 1rem;
  }
  :hover {
    color: #f2bc1c;
    background-color: #173847;
  }
`;
