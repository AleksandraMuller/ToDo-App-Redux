import { createSelector } from "reselect";

export const selectFilter = (state) => state.filter;

export const selectItem = createSelector(
  [selectFilter],
  (filter) => filter.item
);
