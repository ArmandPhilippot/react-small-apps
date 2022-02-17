import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { updateTodo } from "../../store/todos/todos.slice";
import useToggle from "../../utilities/hooks";
import "./Todo.scss";

function Todo() {
  const [isTitleEditable, setIsTitleEditable] = useToggle();
  const [isBodyEditable, setIsBodyEditable] = useToggle();
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const location = useLocation();
  const todoId = location.state.todoId;
  const currentTodo = useSelector((state) => state.todos).find(
    (todo) => todo.id === todoId
  );
  const { title, body } = currentTodo;
  const dispatch = useDispatch();

  useEffect(() => {
    titleRef.current && titleRef.current.focus();
    bodyRef.current && bodyRef.current.focus();
  });

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <>
      <Link to="/">Back to your todo list</Link>
      <div className="todo">
        {isTitleEditable ? (
          <form
            action="#"
            method="post"
            className="todo-form todo__title"
            onSubmit={handleSubmit}
          >
            <input
              ref={titleRef}
              className="todo-form__field"
              type="text"
              name="title"
              value={title}
              onChange={(e) =>
                dispatch(updateTodo({ ...currentTodo, title: e.target.value }))
              }
              onBlur={setIsTitleEditable}
            />
          </form>
        ) : (
          <div className="todo__title" onClick={setIsTitleEditable}>
            {title}
          </div>
        )}
        {isBodyEditable ? (
          <form
            action="#"
            method="post"
            className="todo-form todo__body"
            onSubmit={handleSubmit}
          >
            <textarea
              ref={bodyRef}
              className="todo-form__field todo-form__field--textarea"
              name="body"
              value={body}
              onChange={(e) =>
                dispatch(updateTodo({ ...currentTodo, body: e.target.value }))
              }
              onBlur={setIsBodyEditable}
            />
          </form>
        ) : (
          <div className="todo__body" onClick={setIsBodyEditable}>
            {body}
          </div>
        )}
      </div>
    </>
  );
}

export default Todo;
