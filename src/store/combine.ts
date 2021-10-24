import { combineReducers } from "redux";
import todoStore from "./todoStore";

const reducers = combineReducers({
  todoStore,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
