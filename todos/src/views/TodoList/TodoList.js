import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

function TodoList() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const todosList = useSelector((state) => state.todos);
  const userTodos = todosList.filter((todo) => todo.userId === currentUser.id);

  const userTodosList = userTodos.map((todo) => (
    <TodoListItem
      key={todo.id}
      id={todo.id}
      date={todo.createdAt}
      title={todo.title}
    />
  ));

  return (
    <div>
      <h2>Welcome back {currentUser.username}!</h2>
      <ul className="todos-list">{userTodosList}</ul>
    </div>
  );
}

export default TodoList;
