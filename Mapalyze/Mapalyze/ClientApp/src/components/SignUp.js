import React, { useState } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7250',
});

function Signup() {
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPasswordHash, setNewPasswordHash] = useState('');

  const handleNewUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleNewEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPasswordHash(event.target.value);
  };

  const handleSignup = async () => {
    try {
      const response = await api.post('/api/users/signup', {
        username: newUsername,
        email: newEmail,
        passwordHash: newPasswordHash
      });

      if (response.data.success) {
        alert('Signup successful! You can now login.');
        window.location.href = "/Login";
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert('An error occurred during signup. Please try again.');
    }
  }

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "15px",
    padding: "5px 10px",
    fontSize: "16px",
    cursor: "pointer",
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
    <div style={containerStyle}>
        <h2>Signup</h2>
        <form>
            <div className="form-group">
                <label htmlFor="new-username">New Username</label>
                <input
                    type="text"
                    id="new-username"
                    value={newUsername}
                    onChange={handleNewUsernameChange}
                    // ... (other props)
                />
            </div>
            <div className="form-group">
                <label htmlFor="new-email">New Email</label>  {/* Added this block for email input */}
                <input
                    type="email"
                    id="new-email"
                    value={newEmail}
                    onChange={handleNewEmailChange}
                    // ... (other props)
                />
            </div>
            <div className="form-group">
                <label htmlFor="new-password">New Password</label>
                <input
                    type="password"
                    id="new-password"
                    value={newPasswordHash}
                    onChange={handleNewPasswordChange}
                    // ... (other props)
                />
            </div>
            <div className="button-container">
                <button type="button" onClick={handleSignup} style={buttonStyle}>
                    Signup
                </button>
            </div>
        </form>
    </div>
);
}

export default Signup;
