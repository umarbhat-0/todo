import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  const [todos, settodos] = useState([]);
  const handleformsubmit = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let detail = e.target.detail.value;

    const setdata = async () => {
      try {
        const data = await axios.post(
          "http://localhost:3000/api/todo/create",
          { title, detail },
          {
            withCredentials: true,
          },
        );
        console.log(data.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    setdata();
  };

  useEffect(() => {
    const gettodo = async () => {
      try {
        const data = await axios.get("http://localhost:3000/api/todo/get", {
          withCredentials: true,
        });
        settodos(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    gettodo();
  }, [{ handleformsubmit }]);

  const handledelete = async function () {
    try {
      const todo = await axios.delete(
        `http://localhost:3000/api/todo/delete/${todo._id}`,  {
          withCredentials: true,
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">
      <div className="max-w-7xl mx-auto bg-gray-300 rounded-3xl shadow-2xl p-6">
        {/* Create Todo Form */}
        <div className="w-[340px] bg-gray-50 border border-gray-200 rounded-2xl shadow-md p-4">
          <h1 className="text-lg font-bold text-gray-800 mb-3">Create Todo</h1>

          <form onSubmit={handleformsubmit} className="space-y-3">
            <input
              type="text"
              name="title"
              placeholder="Todo Title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              rows="3"
              name="detail"
              placeholder="Todo Details"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-semibold transition"
            >
              Add Todo
            </button>
          </form>
        </div>

        {/* Todos */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">Your Todos</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {todos.map((todo) => (
              <div
                key={todo._id}
                className="bg-gray-50 border border-gray-200 rounded-2xl shadow-md p-4 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {todo.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">{todo.detail}</p>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => navigate(`/edit/${todo._id}`)}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={async () => {
                      try {
                        await axios.delete(
                          `http://localhost:3000/api/todo/delete/${todo._id}`,
                          {
                            withCredentials: true,
                          },
                        );
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                    // onClick={handledelete}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
