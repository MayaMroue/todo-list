import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTodoById } from "../TodoList/ListActions";
import { updateTodo } from "../TodoList/ListActions";

const EditTodo = () => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todo = useSelector((state) =>
    state.todos.Todos.find((todo) => todo.id === parseInt(id))
  ); // Find the todo by ID from the state

  const [formData, setFormData] = useState({
    todo: "",
    completed: false,
  });

  // Fetch the specific todo when the component loads
  useEffect(() => {
    if (!todo) {
      dispatch(getTodoById(id));
    } else {
      setFormData({
        todo: todo.todo,
        completed: todo.completed,
      });
    }
  }, [dispatch, id, todo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateTodo(parseInt(id), formData) // Dispatch the update action
    );
    navigate("/"); // Navigate back to the todo list
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  if (!formData.todo) return <div>Loading...</div>;

  return (
    <div className="flex flex-col space-y-4 w-full  p-2">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-gray-400 font-bold mt-4">Task Title</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            name="todo"
            value={formData.todo}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <label>
            <input
              type="checkbox"
              name="completed"
              checked={formData.completed}
              onChange={handleChange}
            />
            Completed
          </label>
        </div>

        <button
          type="submit"
          className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
