import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = () => {
    // Here, you can implement your login logic or display a message.
    alert(`Logging in with username: ${username} and password: ${password}`);

    // Add a link to this login button which will take you to the app interface
    window.location.href = "/App";
  };

  const handleSignup = () => {
    // You can implement your signup logic or navigate to the signup page.
    alert("Redirecting to the signup page");
    window.location.href = "/Signup";
  };


  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r dark:bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r'">
        <div className='flex flex-col items-center justify-center text-black ml-36 mr-36 mt-28 bg-white rounded-lg p-5 top-20 shadow-md text-center w-300 mx-auto mt-20' >
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input className="w-full p-1 text-lg my-1" type="text" placeholder="Username" value={username} onChange={handleUsernameChange}/>
        </div>
        
        <div>

          <label htmlFor="password">Password</label>
          <input
            type="password" id="password" name="password" placeholder="Password" className="w-full p-1 text-lg my-1" value={password} onChange={handlePasswordChange}/>
        </div>
        <div className="bg-blue-500 text-white rounded-lg py-2 px-4 text-base cursor-pointer">
          <button  className = " bg-blue-500 text-white rounded-lg p-2 px-4 text-base cursor-pointer" type="button" onClick={handleLogin}>
            Login
          </button>
          <button className="bg-blue-500 text-white rounded-lg p-2 px-4 text-base cursor-pointer" type="button" onClick={handleSignup}>
            Signup
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;
