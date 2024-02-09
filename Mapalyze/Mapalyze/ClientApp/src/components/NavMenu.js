import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ColorLogo from "../components/Logos/SVG/colorlogo.svg";
import { AuthContext } from "../AuthContext";

// Define the NavMenu component
const NavMenu = () => {
  // State to manage the toggle status of the navigation menu
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Function to toggle the menu open/close state
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <nav className="bg-gray-200 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600 dark:border-gray-800">
      <div className="max-w-screen-3xl flex flex-wrap items-center justify-between">
        <Link to="/" className="flex ml-36">
          <div>
            <img
              src={ColorLogo}
              className="h-9 mr-4 text-blue-900"
              alt="Mapalyze Logo"
            />
          </div>
        </Link>

        <div className="flex md:order-2 mr-36">
          {!isLoggedIn && (
            <Link
              to="/Signup"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </Link>
          )}
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center mb-4 ${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1 `}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-1  md:p-0 mt-4 font-large text-xl md:flex-row md:space-x-20 md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/AboutUs"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About us
              </Link>
            </li>
            {!isLoggedIn && (
              <li>
                <Link
                  to="/Login"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Login
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <>
                <li>
                  <Link
                    to="/App"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Main App
                  </Link>
                </li>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
