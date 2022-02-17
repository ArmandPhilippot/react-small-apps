import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Input } from "../../components/forms";
import { deleteTodo, toggleTodo } from "../../store/todos/todos.slice";
import { slugify } from "../../utilities/helpers";

function TodoListItem({ todo }) {
  const { id, createdAt, title, done } = todo;
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (done) setIsChecked(true);
  }, [done]);

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
        <Link to={`/todo/${todoSlug}`} state={{ todoId: todo.id }}>
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
      <Button
        modifiers={["action", "delete"]}
        onClickHandler={() => dispatch(deleteTodo(id))}
      >
        Delete
      </Button>
    </li>
  );
}

export default TodoListItem;
