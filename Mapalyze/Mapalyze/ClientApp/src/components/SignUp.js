import React, { useState } from "react";

function Signup() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleNewUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "15px",
    padding: "5px 10px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const handleSignup = () => {
    // Here, you can implement your signup logic or display a message.
    alert(
      `Signing up with username: ${newUsername} and password: ${newPassword}`
    );
    window.location.href = "/login";
  };

  const containerStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "300px",
    margin: "10px auto", // Center the container horizontally
    marginTop: "20%"
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
            name="new-username"
            value={newUsername}
            onChange={handleNewUsernameChange}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              margin: "10px",
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              margin: "10px",
            }}
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
