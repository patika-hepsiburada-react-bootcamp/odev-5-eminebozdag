import { Action, Dispatch } from "redux";
import { v4 as uuidv4 } from "uuid";
import TodoDto from "../../dtos/todoDto";
import FilterType from "../../enum/filterType";

enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  SET_FILTER_TYPE = "SET_FILTER_TYPE",
}

const addTodo = (name: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: TodoActionType.ADD_TODO,
      item: {
        id: uuidv4(),
        completed: false,
        name,
      } as TodoDto,
    });
  };
};

const toggleTodo = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: TodoActionType.TOGGLE_TODO,
      id,
    });
  };
};

const removeTodo = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: TodoActionType.REMOVE_TODO,
      id,
    });
  };
};

const setFilterType = (filterType: FilterType) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: TodoActionType.SET_FILTER_TYPE,
      filterType,
    });
  };
};

export { TodoActionType, addTodo, toggleTodo, removeTodo, setFilterType };
