import { useDispatch, useSelector } from "react-redux";
import FilterType from "../../../enum/filterType";
import { setFilterType } from "../../../store/actions/todoActions";
import "./filter.css";

const filters = [
  {
    text: "All",
    type: FilterType.All,
  },
  {
    text: "Active",
    type: FilterType.NotCompleted,
  },
  {
    text: "Completed",
    type: FilterType.Completed,
  },
];

const Filter = () => {
  const dispatch = useDispatch();
  const { filterType } = useSelector((s: any) => s.todoStore);

  return (
    <div className="filter">
      {filters.map((item) => {
        return (
          <a
            key={item.text}
            href="##"
            className={item.type === filterType ? "selected" : ""}
            onClick={() => dispatch(setFilterType(item.type))}
          >
            {item.text}
          </a>
        );
      })}
    </div>
  );
};
export default Filter;
