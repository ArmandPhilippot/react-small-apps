import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Input } from "../../components/forms";
import { toggleTodo } from "../../store/todos/todos.slice";
import { slugify } from "../../utilities/helpers";

function TodoListItem({ todo }) {
  const { id, createdAt, title } = todo;
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleTodoDone = (checkboxState) => {
    setIsChecked(checkboxState);
    dispatch(toggleTodo(id));
  };

  const todoSlug = slugify(title);

  const classNames = `todos-list__item ${
    isChecked ? "todos-list__item--done" : ""
  }`;

  return (
    <li className={classNames}>
      <span className="todo__date">
        {new Date(createdAt).toLocaleDateString()}
      </span>
      <span className="todo__title">
        <Link to={{ pathname: `/todo/${todoSlug}`, state: { data: todo } }}>
          {title}
        </Link>
      </span>
      <Input
        type="checkbox"
        label="Done?"
        id={id}
        value={isChecked}
        updateValue={handleTodoDone}
      />
    </li>
  );
}

export default TodoListItem;
