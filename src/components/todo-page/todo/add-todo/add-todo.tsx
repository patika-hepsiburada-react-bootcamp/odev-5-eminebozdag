import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../../store/actions/todoActions";
import "./add-todo.css";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Hi, what needs to be done ?"
        className="add-todo__input"
        onKeyPress={(e: any) => {
          if (
            (e.code === "Enter" || e.charCode === 13) &&
            e.target.value?.length > 0
          ) {
            dispatch(addTodo(e.target.value));
            setValue("");
          }
        }}
        onChange={(e: any) => setValue(e.target.value)}
        value={value}
      ></input>
    </div>
  );
};
export default AddTodo;
