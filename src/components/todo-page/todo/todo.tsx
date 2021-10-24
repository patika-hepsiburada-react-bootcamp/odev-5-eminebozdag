import AddTodo from "./add-todo/add-todo";
import Title from "./title/title";
import TodoList from "./todo-list/todo-list";
import "./todo.css";

const Todo = () => {
  return (
    <div className="todo">
      <Title />
      <AddTodo />
      <TodoList />
    </div>
  );
};
export default Todo;
