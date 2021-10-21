import Filter from "./filter/filter";
import "./todo-page.css";
import Todo from "./todo/todo";
const TodoPage = () => {
  return (
    <div className="todo-page">
      <Filter />
      <Todo />
    </div>
  );
};
export default TodoPage;
