import { TaskActionTypes } from "./task.types";
import { addTaskToArr } from "./task.utils";

const INITIAL_STATE = {
  todos: [],
  total: 0,
};

export const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return {
        ...state,
        todos: addTaskToArr(state.todos, action.payload),
        total: state.total + 1,
      };
    case TaskActionTypes.DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload),
        total: state.total - 1,
      };
    case TaskActionTypes.DELETE_ALL:
      return {
        todos: (state.todos = []),
        total: (state.total = 0),
      };
    default:
      return state;
  }
};
