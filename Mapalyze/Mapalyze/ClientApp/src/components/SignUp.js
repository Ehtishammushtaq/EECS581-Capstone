import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

import axios from "axios";

// Setup axios instance for API calls
const api = axios.create({
  baseURL: "https://localhost:7250", // Base URL for backend API
});

function Signup() {
  // State hooks for form inputs
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPasswordHash, setNewPasswordHash] = useState("");

  // Handlers for input changes
  const handleNewUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleNewEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPasswordHash(event.target.value);
  };

  // Handler for signup action
  const handleSignup = async () => {
    try {
      const response = await api.post("/api/users/signup", {
        username: newUsername,
        email: newEmail,
        passwordHash: newPasswordHash,
      });
      // Redirect on successful signup
      if (response.data.success) {
        alert("Signup successful! You can now login.");
        window.location.href = "/Login";
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("An error occurred during signup. Please try again.");
    }
  };

  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-600">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Sign Up</h2>
          <p className="mt-2 text-sm text-gray-600">Create your account</p>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="new-username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              id="new-username"
              name="new-username"
              placeholder="Username"
              value={newUsername}
              onChange={handleNewUsernameChange}
            />
          </div>
          <div>
            <label
              htmlFor="new-email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="email"
              id="new-email"
              name="new-email"
              placeholder="Email"
              value={newEmail}
              onChange={handleNewEmailChange}
            />
          </div>
          <div>
            <label
              htmlFor="new-password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              placeholder="Password"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={newPasswordHash}
              onChange={handleNewPasswordChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={handleSignup}
              className="w-full px-4 py-2 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
