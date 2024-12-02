import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Todos: [],              
  getTodoLoading: false,   
    getTodoError: null,     
  getTodoSuccess: false, 
};

const TodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Action to handle loading state
    getTodoLoading: (state) => {
      state.getTodoLoading = true;
      state.getTodoError = null;  // Reset error when starting loading
      state.getTodoSuccess = false; // Ensure success is reset during loading
    },
    // Action to handle success state
    getTodoSuccess: (state, action) => {
      state.Todos = action.payload; // Set fetched todos
      state.getTodoLoading = false; // Stop loading
      state.getTodoError = null;    // Reset error
      state.getTodoSuccess = true;  // Mark success as true
    },
    // Action to handle error state
    getTodoError: (state, action) => {
      state.getTodoLoading = false;      // Stop loading
      state.getTodoError = action.payload; // Set error message
      state.getTodoSuccess = false;     // Mark success as false
    },
    updateTodoSuccess: (state, action) => {
      const updatedTodo = action.payload;
      const index = state.Todos.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.Todos[index] = updatedTodo; // Update the specific todo
      }
      state.getTodoLoading = false;
      state.getTodoError = null;
    },
  },
});

// Export actions for dispatch
export const TodoListAction = TodosSlice.actions;
// Export the reducer to be used in the store
export default TodosSlice.reducer;
