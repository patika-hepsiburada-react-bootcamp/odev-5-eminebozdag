import Task from "./components/task";
import "./todo-list.css";
const TodoList = () => {
  return (
    <div className="todo-list">
      <div className="todo-list__scroll">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};
export default TodoList;
