import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: nanoid(),
      createdAt: new Date().toISOString(),
      title: "Build a todo app",
      body: "",
      owner: "",
      done: false,
    },
  ],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (owner, title, body = "") => {
        const id = nanoid();
        return { payload: { id, owner, title, body } };
      },
    },
    deleteTodo: (state, action) => {
      state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.map((todo) => {
        if (todo.id !== action.payload.id) return todo;
        return { ...todo, ...action.payload };
      });
    },
    toggleTodo: (state, action) => {
      const index = action.payload;
      const todo = state[index];
      return [
        ...state.slice(0, index),
        { ...todo, done: !todo.done },
        ...state.slice(index + 1),
      ];
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
