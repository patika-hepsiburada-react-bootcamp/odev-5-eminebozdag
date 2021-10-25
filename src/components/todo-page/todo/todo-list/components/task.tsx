import remove from "../../../../../assets/icons/Clear.png";
import TodoDto from "../../../../../dtos/todoDto";
import "./task.css";

interface Props {
  item: TodoDto;
  onClick(id: string): void;
  onRemove(id: string): void;
}

const Task = ({ item, onClick, onRemove }: Props) => {
  const handleInputClick = () => onClick(item.id);
  const handleRemoveClick = () => onRemove(item.id);

  return (
    <div className="task">
      <div
        className={item.completed ? "task-check__selected" : "task-check"}
        onClick={handleInputClick}
      >
        <label>
          <input type="checkbox" defaultChecked={item.completed} />
          <p>{item.name}</p>
          <span className="checkmark" />
        </label>
      </div>
      <div className="remove" onClick={handleRemoveClick}>
        <img src={remove} alt="profile" />
      </div>
    </div>
  );
};
export default Task;
