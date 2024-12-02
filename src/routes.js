// src/routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoList from './Components/todo.js';
import AddTask from './Components/AddTask';
import EditTodo from './Components/EditTodo';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/create" element={<AddTask />} />
      <Route path="/edit/:id" element={<EditTodo />} />
      <Route path="/completed" element={<TodoList />} />
      <Route path="/active" element={<TodoList />} />

    </Routes>
  );
};

export default AppRoutes;
