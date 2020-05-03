import { TaskActionTypes } from "./task.types";

export const addTask = (task) => ({
  type: TaskActionTypes.ADD_TASK,
  payload: task,
});

export const deleteTask = (task) => ({
  type: TaskActionTypes.DELETE_TASK,
  payload: task,
});
