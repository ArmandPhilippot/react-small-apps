import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/forms";
import TodoForm from "../TodoForm/TodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import { deleteAllTodos } from "../../store/todos/todos.slice";
import { LocalStorage } from "../../services/LocalStorage.service";

function TodoList() {
  const [isToggled, setIsToggled] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const todosList = useSelector((state) => state.todos);
  const userTodos = todosList.filter((todo) => todo.userId === currentUser.id);
  const dispatch = useDispatch();

  useEffect(() => {
    LocalStorage.set("todoList", todosList);
  });

  const userTodosList = userTodos.map((todo) => (
    <TodoListItem key={todo.id} todo={todo} />
  ));

  return (
    <div>
      <h2>Welcome back {currentUser.username}!</h2>
      <div className="todos-actions">
        <Button
          modifiers={["action"]}
          onClickHandler={() => setIsToggled(!isToggled)}
        >
          New todo
        </Button>
        <Button
          modifiers={["action", "delete"]}
          onClickHandler={() => dispatch(deleteAllTodos())}
        >
          Delete all
        </Button>
      </div>
      {isToggled ? (
        <TodoForm userId={currentUser.id} closeForm={setIsToggled} />
      ) : (
        ""
      )}
      {userTodosList.length > 0 ? (
        <ul className="todos-list">{userTodosList}</ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default TodoList;
