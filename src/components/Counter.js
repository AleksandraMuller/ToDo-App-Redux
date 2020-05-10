import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTotal } from "../redux/task/task.selector";

export const Counter = () => {
  const selectors = useSelector(
    createStructuredSelector({
      total: selectTotal,
    })
  );

  return (
    <div>
      <p>{selectors.total} todos</p>
    </div>
  );
};
