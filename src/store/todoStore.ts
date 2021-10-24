import TodoDto from "../dtos/todoDto";
import FilterType from "../enum/filterType";
import { TodoActionType } from "./actions/todoActions";

const initialState = {
  items: [] as TodoDto[],
  filterType: FilterType.All,
};

const todoStore = (state = initialState, action: any) => {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      state.items.push(action.item);
      return { items: state.items, filterType: state.filterType };
    case TodoActionType.TOGGLE_TODO:
      const updatedItems = state.items.map((e) => {
        if (e.id === action.id) {
          e.completed = !e.completed;
        }
        return e;
      });
      return { items: updatedItems, filterType: state.filterType };
    case TodoActionType.REMOVE_TODO:
      const removeIndex = state.items.findIndex((e) => e.id === action.id);
      state.items.splice(removeIndex, 1);
      return { items: state.items, filterType: state.filterType };
    case TodoActionType.SET_FILTER_TYPE:
      return { items: state.items, filterType: action.filterType };
    default:
      return state;
  }
};

export default todoStore;
