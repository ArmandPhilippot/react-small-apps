import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./Todo.scss";

function Todo() {
  const location = useLocation();
  const { title, body } = location.state.data;

  return (
    <>
      <Link to="/">Back to your todo list</Link>
      <div className="todo">
        <div className="todo__title">{title}</div>
        {body ? <div className="todo__body">{body}</div> : ""}
      </div>
    </>
  );
}

export default Todo;
