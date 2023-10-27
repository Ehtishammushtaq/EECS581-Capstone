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


  const handleSignup = () => {
    // Here, you can implement your signup logic or display a message.
    alert(
      `Signing up with username: ${newUsername} and password: ${newPassword}`
    );
    window.location.href = "/login";
  };


  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r dark:bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r" >
      <div className="lex flex-col items-center justify-center text-black ml-36 mr-36 mt-28 bg-white rounded-lg p-5 top-20 shadow-md text-center w-300 mx-auto">

      
      <h2 className="text-3xl font-semibold mb-4">Signup</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="new-username" className="text-blue-500">New Username</label>
          <input 
          className="w-full p-2 text-lg border-b-2 border-blue-500"
            type="text"
            id="new-username"
            name="new-username"
            placeholder="Username"
            value={newUsername}
            onChange={handleNewUsernameChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="new-password"  className="text-blue-500">New Password</label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            placeholder="Password"
            className="w-full p-2 text-lg border-b-2 border-blue-500"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>
        <div className="text-center">
          <button type="button" onClick={handleSignup} className="bg-blue-500 text-white rounded-lg py-2 px-4 text-lg cursor-pointer mr-2">
            Signup
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Signup;
