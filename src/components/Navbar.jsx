import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ThemeSwitcher from "./ThemeSwitcher";
import { useLogin } from "../context/LoginContext"; // Import context login

const Navbar = () => {
  const { userName, isAuthenticated, logout } = useLogin(); // Ambil userName, isAuthenticated, dan logout function

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-red-600 text-white">
            {/* Use Link component instead of <a> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pokemon">Pokemon</Link></li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
        <img src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg" alt="" className="h-10" />
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* Use Link component instead of <a> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pokemon">Pokemon</Link></li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
      
      <div className="navbar-end">
        {isAuthenticated ? (
          <>
            <span className="mr-4">Hello, {userName}</span> {/* Tampilkan nama pengguna */}
            <button className="btn" onClick={logout}>Logout</button> {/* Tombol logout */}
          </>
        ) : (
          <Link to="/login" className="btn">Login</Link> // Use Link for login redirection
        )}
      </div>
    </div>
  );
}

export default Navbar;
