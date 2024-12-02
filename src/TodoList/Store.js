import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './ListSlice';  // Import the reducer from ListSlice

const store = configureStore({
  reducer: {
    todos: todosReducer,  // Assign the todos slice reducer here
  },
});

export default store;
