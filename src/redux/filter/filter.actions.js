import { FilterActionTypes } from "./filter.types";

export const showAll = (item) => ({
  type: FilterActionTypes.SHOW_ALL,
  payload: item,
});

export const showCompleted = (item) => ({
  type: FilterActionTypes.SHOW_COMPLETED,
  payload: item,
});

export const showOngoing = (item) => ({
  type: FilterActionTypes.SHOW_ONGOING,
  payload: item,
});
