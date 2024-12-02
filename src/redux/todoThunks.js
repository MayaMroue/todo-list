// src/redux/todoThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setTodos,deleteTodo, setLoading, setError ,markAsCompletedAction } from './todoslice';
import axios from 'axios';
// Fetch Todos from API

export const fetchTodos = (filter = 'all') => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        console.log(filter)
      let url = 'http://localhost:8000/todos'; // Base URL
      if (filter === 'completed') url += '?completed=true';
      else if (filter === 'active') url += '?completed=false';
  
      const response = await axios.get(url);
      dispatch(setTodos(response.data)); // Update Redux state with filtered data
    } catch (error) {
      dispatch(setError('Failed to fetch todos'));
    } finally {
      dispatch(setLoading(false));
    }
  };
  
// Add a Todo

export const createTodo = createAsyncThunk(
    'todos/createTodo',
    async ({ title, description }, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://localhost:8000/todos', {
          title,
          description,
          completed: false,
       
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data || "An error occurred while creating the todo."
        );
      }
    }
  );
  

// Delete a Todo
export const removeTodo = (id) => async (dispatch) => {
  try {
    await fetch(`http://localhost:8000/todos/${id}`, { method: 'DELETE' });
    dispatch(deleteTodo(id)); // Remove the todo from Redux
  } catch (error) {
    dispatch(setError('Failed to delete todo'));
  }
};

export const markAsCompleted = (todoId) => async (dispatch, getState) => {
    console.log("afffffffffffffffction");

    // Dispatch the action to toggle the state
    dispatch(markAsCompletedAction(todoId));
  
    // Get the updated todo item after toggling
    const todoToUpdate = getState().todos.todos.find((todo) => todo.id === todoId);
  
    // Send PUT request to update the todo on the server
    await axios.put(`http://localhost:8000/todos/${todoId}`, {
      ...todoToUpdate,
      completed: todoToUpdate.completed, // Reflect the toggled state
    });
  };
  



  export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async ({ id, title, description ,completed}, { rejectWithValue }) => {
      try {
        const response = await axios.put(`http://localhost:8000/todos/${id}`, {
          title,
          description,
          completed
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || "Error updating todo.");
      }
    }
  );
  
  



  
