import { createSlice, nanoid } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [
    {
      id: "demo",
      createdAt: new Date().toISOString(),
      username: "Demo",
      email: "demo@email.com",
      password: "demo",
    },
  ],
  reducers: {
    addUser: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (username, email, password) => {
        const id = nanoid();
        const createdAt = new Date().toISOString();
        return { payload: { id, username, email, password, createdAt } };
      },
    },
    deleteUser: (state, action) => {
      state.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      state.map((user) => {
        if (user.id !== action.payload.id) return user;
        return { ...user, ...action.payload };
      });
    },
  },
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
