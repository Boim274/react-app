import React, { useState } from 'react';
import { useLogin } from '../context/LoginContext';

function LoginForm({ onLoginSuccess }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const { login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(id, name)) {
      onLoginSuccess(); // Call the callback if login is successful
    } else {
      alert('ID atau nama salah');
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-15 h-20 mr-2" src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg" alt="logo" />
          
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login
              </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your ID</label>
                <input
                  id="id"
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your ID"
                />
              </div>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-yellow-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
