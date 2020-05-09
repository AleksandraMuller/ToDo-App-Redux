import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { taskReducer } from "./task/task.reducer";
import { filterReducer } from "./filter/filter.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["task", "filter"],
};

const rootReducer = combineReducers({
  task: taskReducer,
  filter: filterReducer,
});

export default persistReducer(persistConfig, rootReducer);
