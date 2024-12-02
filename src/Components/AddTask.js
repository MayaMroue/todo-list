// src/components/AddTask.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoThunks";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    if (title.trim() && description.trim()) {
      dispatch(createTodo('testt'));
      setTitle("");
      setDescription("");
      navigate("/");
    }
  };

  return (
    <>
      {/* <h2 className="text-3xl font-bold text-center mb-4">Create a New Task</h2> */}
      <div className="flex flex-col space-y-4 w-full  p-2">
        <div>
          <span className="text-gray-500 font-bold">Task Title</span>

          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            placeholder="Enter task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <span className="text-gray-500 font-bold">Description</span>

          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded"
            placeholder="Enter task description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          className="mt-4 px-4 py-2 S-Color text-white  P-Color rounded"
          onClick={handleAdd}
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default AddTask;
