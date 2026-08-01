import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/register",
        formData,
        {
          withCredentials: true,
        }
      );

      alert(res.data.message);
      e.target.reset();
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-5">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-indigo-700 to-purple-700 text-white">
          <h1 className="text-5xl font-bold leading-tight">
            Join <br />
            <span className="text-yellow-300">TodoFlow</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Create your account and start organizing your tasks with ease.
            Stay productive every day.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📝</span>
              <p>Create unlimited todos</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <p>Simple & fast interface</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🔒</span>
              <p>Your tasks stay secure</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Register
          </h2>

          <p className="text-gray-500 mb-8">
            Create your account to continue.
          </p>

          <form onSubmit={submitHandler} className="space-y-5">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-8 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;