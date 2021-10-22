import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: nanoid(),
      createdAt: new Date().toISOString(),
      title: "Build a todo app",
      body: "",
      userId: "demo",
      done: false,
    },
  ],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ userId, title, body = "" }) => {
        const id = nanoid();
        const createdAt = new Date().toISOString();
        return { payload: { id, createdAt, userId, title, body } };
      },
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id !== action.payload.id) return todo;
        return { ...todo, ...action.payload };
      });
    },
    toggleTodo: (state, action) => {
      const todoId = action.payload;
      const index = state.findIndex((todo) => todo.id === todoId);
      const todo = state[index];
      return [
        ...state.slice(0, index),
        { ...todo, done: !todo.done },
        ...state.slice(index + 1),
      ];
    },
    deleteAllTodos: () => {
      return [];
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo, deleteAllTodos } =
  todosSlice.actions;

export default todosSlice.reducer;
