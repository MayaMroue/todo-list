




// // src/redux/todosSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const todosSlice = createSlice({
//   name: 'todos',
//   initialState: {
//     todos: [],
//     completedIndices: [],
//     isPending: false,
//     filter: 'all', // Add default filter
//     error: null,
//   },
//   reducers: {
//     setTodos: (state, action) => {
//       console.log(action.payload)
//       state.todos = action.payload;
//     },
    
//     addTodo: (state, action) => {
//       state.todos.push(action.payload);;
//     },
//     deleteTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },
//     setCompletedIndices: (state, action) => {
//       state.completedIndices = action.payload;
    
//     },
//     setLoading: (state, action) => {
//       state.isPending = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//     markAsCompletedAction: (state, action) => {
//         console.log("action");

//         state.todos = state.todos.map((todo) =>
//           todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//         );

//       },
      
      
      
//       setFilter: (state, action) => {
//         console.log(action.payload)
//         state.filter = action.payload;
//       },
      
    
//   },
// });

// export const {
//   setTodos,
//   deleteTodo,
//   setCompletedIndices,
//   setLoading,
//   setError,
//   markAsCompletedAction,
//   setFilter
// } = todosSlice.actions;

// export default todosSlice.reducer;
