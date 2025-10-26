import React, { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true); // toggle between login and register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // for register

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", { email, password });
      // Call login API here
    } else {
      console.log("Registering with:", { name, email, password });
      // Call register API here
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">Quiz Master</h1>
        <p className="text-center text-gray-500 mb-6">
          Test your knowledge and compete with others
        </p>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6 gap-2">
          <button
            className={`px-4 py-2 rounded-l-md font-medium ${
              isLogin ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 rounded-r-md font-medium ${
              !isLogin ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
