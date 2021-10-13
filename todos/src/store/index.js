import { configureStore } from "@reduxjs/toolkit";
import { LocalStorage } from "../services/LocalStorage.service";
import authReducer from "./auth/auth.slice";
import todosReducer from "./todos/todos.slice";
import usersReducer from "./users/users.slice";

const reducer = {
  auth: authReducer,
  todos: todosReducer,
  users: usersReducer,
};

const authMiddleware = (store) => (next) => (action) => {
  const { type } = action;
  const result = next(action);

  switch (type) {
    case "auth/login":
      const authState = store.getState().auth;
      LocalStorage.set("todoUser", authState.currentUser);
      break;
    case "auth/logout":
      LocalStorage.remove("todoUser");
      break;
    default:
      break;
  }

  return result;
};

const userFromLocalStorage = LocalStorage.get("todoUser");
const preloadedAuth = userFromLocalStorage
  ? { isAuthenticated: true, currentUser: userFromLocalStorage }
  : {};

const preloadedState = {
  auth: preloadedAuth,
};

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
  preloadedState,
});
