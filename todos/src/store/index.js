import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import todosReducer from "./todos/todos.slice";
import usersReducer from "./users/users.slice";

const reducer = {
  auth: authReducer,
  todos: todosReducer,
  users: usersReducer,
};

export default configureStore({
  reducer,
});
