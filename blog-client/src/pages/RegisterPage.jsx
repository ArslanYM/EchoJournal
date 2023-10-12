import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function RegisterPage() {
  const BASE_URL = "http://localhost:3000";
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterClick = async () => {
    const response = await axios.post(`${BASE_URL}/register`, {
      username,
      password,
    });

    const data = response.data;
    console.log(response);
    if (response.status === 201) {
      navigate("/blogs");
    } else {
      alert("Try again with different credentials");
    }
  };
  return (
    <div className="bg-white">
      <div className="w-1/2  mx-auto my-6 max-w-2xl py-12 sm:py-16 lg:py-20">
        <div className="bg-white shadow-lg px-4 py-5 sm:rounded-lg sm:p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Register
          </h2>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                autoComplete="email"
                className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="new-password"
                className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="button"
              onClick={handleRegisterClick}
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
