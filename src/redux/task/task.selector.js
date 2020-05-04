import { createSelector } from "reselect";

export const selectTaskFile = (state) => state.task;

export const selectTodos = createSelector(
  [selectTaskFile],
  (task) => task.todos
);

export const selectTotal = createSelector(
  [selectTaskFile],
  (task) => task.total
);
