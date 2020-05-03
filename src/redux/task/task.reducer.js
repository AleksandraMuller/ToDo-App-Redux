import { TaskActionTypes } from "./task.types";
import { addTaskToArr } from "./task.utils";

const INITIAL_STATE = {
  todos: [],
};

export const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return {
        ...state,
        todos: addTaskToArr(state.todos, action.payload),
      };
    case TaskActionTypes.DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload),
      };
    default:
      return state;
  }
};
