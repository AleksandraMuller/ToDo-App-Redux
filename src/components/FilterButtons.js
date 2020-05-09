import React from "react";
import { useDispatch } from "react-redux";

import {
  showAll,
  showCompleted,
  showOngoing,
} from "../redux/filter/filter.actions";
import { selectTodos } from "../redux/task/task.selector";

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
    <div>
      <button onClick={handleAll}>SHOW ALL</button>
      <button onClick={handleCompleted}>SHOW COMPLETED</button>
      <button onClick={handleOngoing}>SHOW ONGOING</button>
    </div>
  );
};
