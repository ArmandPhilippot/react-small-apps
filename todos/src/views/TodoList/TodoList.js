import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../../components/forms";
import TodoForm from "../TodoForm/TodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

function TodoList() {
  const [isToggled, setIsToggled] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const todosList = useSelector((state) => state.todos);
  const userTodos = todosList.filter((todo) => todo.userId === currentUser.id);

  const userTodosList = userTodos.map((todo) => (
    <TodoListItem key={todo.id} todo={todo} />
  ));

  return (
    <div>
      <h2>Welcome back {currentUser.username}!</h2>
      <Button modifier="action" onClickHandler={() => setIsToggled(!isToggled)}>
        New todo
      </Button>
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
