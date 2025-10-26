// pages/Login.jsx
import React, { useState } from "react";
import AuthForm from "../components/ui/AuthForm";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });
    setMessage("Login attempt logged to console!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-full p-18">
        <AuthForm
        mode={mode}
        setMode={setMode}
        username=""         
        setUsername={() => {}}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isAdmin={false}    
        setIsAdmin={() => {}}
        handleSubmit={handleLogin}
        message={message}
        />
    </div>
  );
}
