import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTotal } from "../redux/task/task.selector";
import { deleteAll } from "../redux/task/task.actions";

import { Button } from "./Button";

export const Counter = () => {
  const selectors = useSelector(
    createStructuredSelector({
      total: selectTotal,
    })
  );

  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  return (
    <div>
      <p>Total ToDos: {selectors.total}</p>
      <Button label="Delete all" handleClick={handleDeleteAll}></Button>
    </div>
  );
};
