import { TodoListAction } from './ListSlice';
import axios from 'axios';

export const getTodos = (status = 'all') => {
  return async (dispatch) => {
    try {
      dispatch(TodoListAction.getTodoLoading());
      const response = await axios.get('https://dummyjson.com/todos');

      // Filter todos based on status
      let filteredTodos = response.data.todos;
      if (status === 'completed') {
        filteredTodos = filteredTodos.filter(todo => todo.completed);
      } else if (status === 'active') {
        filteredTodos = filteredTodos.filter(todo => !todo.completed);
      }

      dispatch(TodoListAction.getTodoSuccess(filteredTodos)); // Dispatch filtered todos
    } catch (error) {
      dispatch(TodoListAction.getTodoError(error.response?.data?.message || 'An error occurred'));
    }
  };
};




  export const getTodoById = (id) => {
    return async (dispatch) => {
      try {
        dispatch(TodoListAction.getTodoLoading());
        const response = await axios.get('https://dummyjson.com/todos/id/'+id);
        // Since the todos are inside response.data.todos, we extract it
        dispatch(TodoListAction.getTodoSuccess(response.data.todos));  // Make sure we pass the correct array
      } catch (error) {
        dispatch(TodoListAction.getTodoError(error.response?.data?.message || 'An error occurred'));
      }
    };
  };


    
    export const updateTodo = (id, updatedTask) => {
        return async (dispatch) => {
          try {
            dispatch(TodoListAction.getTodoLoading());
            const response = await axios.put(`https://dummyjson.com/todos/${id}`, updatedTask);
            dispatch(TodoListAction.updateTodoSuccess(response.data)); // Update Redux store
          } catch (error) {
            console.error('Update Error:', error.response || error.message);
            dispatch(TodoListAction.getTodoError(error.response?.data?.message || "An error occurred"));
          }
        };
      };
      

   
     
  

 



