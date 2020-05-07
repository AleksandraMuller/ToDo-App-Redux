import { TaskActionTypes } from "./task.types";

export const addTask = (task) => ({
  type: TaskActionTypes.ADD_TASK,
  payload: task,
});

export const deleteTask = (task) => ({
  type: TaskActionTypes.DELETE_TASK,
  payload: task,
});

export const deleteAll = () => ({
  type: TaskActionTypes.DELETE_ALL,
});

export const editTask = (task) => ({
  type: TaskActionTypes.EDIT_TASK,
  payload: task,
});

export const addEditedTask = (obj) => ({
  type: TaskActionTypes.ADD_EDITED_TASK,
  payload: obj,
});
