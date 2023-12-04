import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const api = axios.create({
  baseURL: 'https://localhost:7250',
});

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    console.log({ username, password });
    try {
      const response = await api.post('/api/users/login', {
        username,
        password
      });
      
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

  const handleSignup = () => {
    alert("Redirecting to the signup page");
    window.location.href = "/Signup";
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r dark:bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
      <div className="flex flex-col items-center justify-center text-black ml-36 mr-36 mt-28 bg-white rounded-lg p-5 top-20 shadow-md text-center w-300 mx-auto mt-20">
        <h2 className="text-3xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="text-blue-500">Username</label>
            <input
              className="w-full p-2 text-lg border-b-2 border-blue-500"
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="text-blue-500">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 text-lg border-b-2 border-blue-500"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="text-center">
            <Link
              to="/App"
              className="bg-blue-500 text-white rounded-lg py-2 px-4 text-lg cursor-pointer mr-2"
              type="button"
              /*onClick={handleLogin}*/
            >
              Login
            </Link>

            <button
              className="bg-blue-500 text-white rounded-lg py-2 px-4 text-lg cursor-pointer"
              type="button"
              onClick={handleSignup}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;