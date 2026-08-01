import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const handleformsubmit = function (e) {
    e.preventDefault();
    let title = e.target.title.value;
    let detail = e.target.detail.value;
    const updatedata = async () => {
      try {
        const data = await axios.put(
          `http://localhost:3000/api/todo/update/${id}`,
          { title, detail },
          {
            withCredentials: true,
          },
        );
        console.log(data);
         navigate("/feed")

      } catch (error) {
        console.log(error.response.status);
        console.log(error.response.data);
      }
    };
    updatedata();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Edit Todo
        </h1>

        <form onSubmit={handleformsubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter todo title"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Details
            </label>
            <textarea
              rows="5"
              name="detail"
              placeholder="Enter todo details"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Update Todo
            </button>

            <button
              type="button"
              onClick={() => navigate("/feed")}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 rounded-xl font-semibold transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
