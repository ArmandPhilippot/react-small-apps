import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/forms";
import TodoForm from "../TodoForm/TodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import { deleteAllTodos } from "../../store/todos/todos.slice";
import { LocalStorage } from "../../services/LocalStorage.service";
import TodoListFilters from "./TodoListFilters";

function TodoList() {
  const [todosList, setTodosList] = useState([]);
  const [currentView, setCurrentView] = useState("all");
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const allTodos = useSelector((state) => state.todos);

  useEffect(() => {
    const userTodos = allTodos.filter((todo) => todo.userId === currentUser.id);

    setTodosList(() => {
      let list;

      switch (currentView) {
        case "completed":
          list = userTodos.filter((todo) => todo.done);
          break;
        case "ongoing":
          list = userTodos.filter((todo) => !todo.done);
          break;
        default:
          list = userTodos;
          break;
      }

      return list;
    });
  }, [currentView, allTodos, currentUser.id]);

  useEffect(() => {
    LocalStorage.set("todoList", allTodos);
  });

  const userTodosList = todosList.map((todo) => (
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
      <TodoListFilters
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      {userTodosList.length > 0 ? (
        <ul className="todos-list">{userTodosList}</ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default TodoList;
