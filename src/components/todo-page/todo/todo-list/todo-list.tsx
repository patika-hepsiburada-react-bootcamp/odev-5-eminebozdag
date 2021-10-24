import { useDispatch, useSelector } from "react-redux";
import TodoDto from "../../../../dtos/todoDto";
import FilterType from "../../../../enum/filterType";
import { removeTodo, toggleTodo } from "../../../../store/actions/todoActions";
import Task from "./components/task";
import "./todo-list.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const { items, filterType } = useSelector((s: any) => s.todoStore);

  let todos = [];
  if (filterType === FilterType.Completed)
    todos = items.filter((item: TodoDto) => item.completed);
  else if (filterType === FilterType.NotCompleted)
    todos = items.filter((item: TodoDto) => !item.completed);
  else todos = items;

  return (
    <div className="todo-list">
      <div className="todo-list__scroll">
        {todos.map((dto: TodoDto) => {
          return (
            <Task
              key={dto.id}
              item={dto}
              onClick={(id: string) => dispatch(toggleTodo(id))}
              onRemove={(id: string) => dispatch(removeTodo(id))}
            />
          );
        })}
      </div>
    </div>
  );
};
export default TodoList;
