import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/users.slice";

const reducer = {
  users: usersReducer,
};

export default configureStore({
  reducer,
});
