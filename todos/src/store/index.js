import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todos.slice";
import usersReducer from "./users/users.slice";

const reducer = {
  todos: todosReducer,
  users: usersReducer,
};

export default configureStore({
  reducer,
});
