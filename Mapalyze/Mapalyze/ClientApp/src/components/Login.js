import React, { useState } from "react";
import axios from 'axios';

// Setup axios instance for API calls
const api = axios.create({
  baseURL: 'https://localhost:7250', // Base URL for backend API
});

function Login() {
  // State hooks for form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handlers for input changes
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handler for login action
  const handleLogin = async () => {
    try {
      const response = await api.post('/api/users/login', {
        username,
        password
      });
      // Redirect on successful login
      if (response.data.success) {
        alert('Login successful! Welcome to the app.');
        window.location.href = "/App";
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        alert('Error: ' + error.response.data.message);
      } else {
        alert('An error occurred during login. Please try again.');
      }
    }
  };

  // Handler for redirecting to signup page
  const handleSignup = () => {
    window.location.href = "/Signup";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-600">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Login</h2>
          <p className="mt-2 text-sm text-gray-600">Welcome back! Please enter your details.</p>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="w-full px-4 py-2 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                className="text-blue-500 hover:text-blue-600"
                type="button"
                onClick={handleSignup}
              >
                Sign up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
