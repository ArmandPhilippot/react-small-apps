import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../../components/forms";
import { toggleTodo } from "../../store/todos/todos.slice";

function TodoListItem({ id, date, title }) {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleTodoDone = (checkboxState) => {
    setIsChecked(checkboxState);
    dispatch(toggleTodo(id));
  };

  return (
    <li className="todos-list__item todo">
      <span className="todo__date">{new Date(date).toLocaleDateString()}</span>
      <span className="todo__title">{title}</span>
      <Input type="checkbox" value={isChecked} updateValue={handleTodoDone} />
    </li>
  );
}

export default TodoListItem;
