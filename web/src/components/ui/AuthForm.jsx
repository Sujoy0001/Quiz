// components/Auth.jsx
import React from "react";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function AuthForm({
  mode,
  setMode,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  isAdmin,
  setIsAdmin,
  handleSubmit,
  message,
}) {
  const navigate = useNavigate(); 

  const activeClasses = "bg-black text-white";
  const inactiveClasses = "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50";

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e); 
    navigate("/index"); 
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-2">Revox Quiz</h1>
      <p className="text-center mb-8">Test your knowledge and compete with others</p>

      <div className="flex gap-4 mb-8">
        <button
          className={`flex-1 flex items-center cursor-pointer justify-center gap-2 px-4 py-2 rounded-md font-medium transition ${mode === 'login' ? activeClasses : inactiveClasses}`}
          onClick={() => setMode('login')}
        >
          <FiLogIn className="w-5 h-5" /> Login
        </button>
        <button
          className={`flex-1 flex items-center cursor-pointer justify-center gap-2 px-4 py-2 rounded-md font-medium transition ${mode === 'register' ? activeClasses : inactiveClasses}`}
          onClick={() => setMode('register')}
        >
          <FiUserPlus className="w-5 h-5" /> Register
        </button>
      </div>

      <form onSubmit={onSubmit}>
        {mode === 'register' && (
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {mode === 'register' && (
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="isAdmin"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
            <label htmlFor="isAdmin" className="ml-2 block text-sm text-gray-900">Register as Admin</label>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-black text-white cursor-pointer py-2 px-4 rounded-md font-medium hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          {mode === 'login' ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
}
