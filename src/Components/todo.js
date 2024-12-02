// src/components/TodoList.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { setCompletedIndices } from "../redux/todoslice";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

// import { setFilter } from "../redux/todoslice";

import {getTodos} from "../TodoList/ListActions";


import { Link, useLocation } from "react-router-dom";

const TodoList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { Todos, getTodoLoading, getTodoError, getTodoSuccess } = useSelector((state) => state.todos);


  useEffect(() => {
    if (location.pathname === "/completed") {
      dispatch(getTodos("completed")); // Fetch only completed todos
    } else if (location.pathname === "/active") {
      dispatch(getTodos("active")); // Fetch only active todos
    } else {
      dispatch(getTodos("all")); // Fetch all todos
    }
  }, [dispatch, location.pathname]);
  
  // useEffect(() => {
  //   let timeouts = [];
  //   if (todos.length > 0) {
  //     const indices = todos.map((_, index) => index);
  //     const timeout = setTimeout(() => {
  //       dispatch(setCompletedIndices(indices));
  //     }, 50); // Adjust delay as needed
  //     timeouts.push(timeout);
  //   }
  //   console.log("completedIndices   " + completedIndices);
  //   // Cleanup function to clear all timeouts
  //   return () => {
  //     timeouts.forEach((timeout) => clearTimeout(timeout));
  //     timeouts = []; // Clear the array for safety
  //   };
  // }, [todos, dispatch]);

  const handleDelete = (id) => {
    // dispatch(removeTodo(id));
  };

  // if (isPending) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <>
      <ul className="w-full p-2">
      {/* {getTodoLoading && <p>Loading...</p>}
      {getTodoError && <p>Error: {getTodoError}</p>} */}
      {Array.isArray(Todos) && Todos.length > 0 ? (
        Todos.map((todo, index) => (
          <li className="h-12 w-full mt-3 relative " key={index}>
            <div
              className={`flex justify-center items-center w-full h-full absolute shadow-xl
          bg-gray-200 transform transition-all duration-500 ease-out
          
         
            `}
            >
              <div className=" p-2  truncate flex-[4] flex ">
                <input
                  type="checkbox"
                  id={`check${index}`}
                  className="text-m p-2 cursor-pointer truncate "
                  checked={todo.completed}
                  onChange={() => {
                    console.log(`Checkbox toggled for Todo ID: ${todo.id}`);
                    // dispatch(markAsCompleted(todo.id));
                  }}
                />
                <label
                  className="text-m p-2 cursor-pointer truncate  w-full"
                  htmlFor={`check${index}`}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.todo}
                </label>
              </div>
              <div className="flex-[1]  h-8 flex center  px-2 cursor-pointer">
                <Link to={`/edit/${todo.id}`} className="edit-button">
                  <MdOutlineEdit className="text-xl" />
                </Link>

                <RiDeleteBin6Line
                  className="text-xl mx-5"
                  onClick={() => handleDelete(todo.id)}
                />
              </div>
            </div>
          </li>
         ))
        ) : (
          <p>No tasks available</p>
        )}
      </ul>
    </>
  );
};

export default TodoList;
