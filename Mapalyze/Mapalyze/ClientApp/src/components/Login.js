import React, { useState } from "react";
import axios from 'axios';

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

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "15px",
    padding: "5px 10px",
    fontSize: "16px",
    cursor: "pointer",
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
    // You can implement your signup logic or navigate to the signup page.
    alert("Redirecting to the signup page");
    window.location.href = "/Signup";
  };

  const containerStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "300px",
    margin: "10px auto", // Center the container horizontally
  };

  return (
    <div style={containerStyle} className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              margin: "10px",
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              margin: "10px",
            }}
          />
        </div>
        <div className="button-container">
          <button type="button" onClick={handleLogin} style={buttonStyle}>
            Login
          </button>
          <button type="button" onClick={handleSignup} style={buttonStyle}>
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;