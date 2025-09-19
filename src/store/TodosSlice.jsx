import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data.slice(0, 10);
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (newTodo) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    return { ...newTodo, id: crypto.randomUUID() };
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    });
    return id;
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodoAsync",
  async ({ id, completed }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    });
    const data = await res.json();
    return { id, completed: data.completed };
  }
);


export const updateTodoAsync = createAsyncThunk(
  "todos/updateTodoAsync",
  async (updatedTodo) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTodo),
    });
    const data = await res.json();
    return data;
  }
);

const initialState = {
  data: [],
  fetchStatus: "idle",
  todoToEdit: null,
  showModal: false,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodoToEdit: (state, action) => {
      state.todoToEdit = action.payload;
      state.showModal = true;
    },
    clearTodoToEdit: (state) => {
      state.todoToEdit = null;
      state.showModal = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetchStatus = "completed";
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.fetchStatus = "error";
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.data = state.data.filter(todo => todo.id !== action.payload);
      })
      .addCase(toggleTodoAsync.fulfilled, (state, action) => {
        const todo = state.data.find(todo => todo.id === action.payload.id);
        if (todo) todo.completed = action.payload.completed;
      })
      .addCase(updateTodoAsync.fulfilled, (state, action) => {
        const idx = state.data.findIndex(todo => todo.id === action.payload.id);
        if (idx !== -1) state.data[idx] = action.payload;
        state.showModal = false;
        state.todoToEdit = null;
      });
  }
});

export const {
  setTodoToEdit,
  clearTodoToEdit,
} = todosSlice.actions;

export default todosSlice.reducer;

export const todosSelector = (state) => state.todos.data;
export const todoToEditSelector = (state) => state.todos.todoToEdit;
export const showModalSelector = (state) => state.todos.showModal;
export const fetchStatusSelector = (state) => state.todos.fetchStatus;