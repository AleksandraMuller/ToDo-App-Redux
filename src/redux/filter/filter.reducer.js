import { FilterActionTypes } from "./filter.types";

const INITIAL_STATE = {
  item: "SHOW_ALL",
};

export const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.SHOW_ALL:
      return {
        ...state,
        item: action.payload,
      };
    case FilterActionTypes.SHOW_COMPLETED:
      return {
        ...state,
        item: action.payload,
      };
    case FilterActionTypes.SHOW_ONGOING:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};
