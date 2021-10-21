import remove from "../../../../../assets/icons/Clear.png";
import "./task.css";
//import full from "../../../../../assets/icons/full-check.png";

const Task = () => {
  return (
    <div className="task">
      <div className="task-check">
        <label>
          <input type="checkbox" checked={true}></input>
          <p>Do your homework</p>
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="remove">
        <img src={remove} alt="" />
      </div>
    </div>
  );
};
export default Task;
