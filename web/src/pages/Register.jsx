// pages/Register.jsx
import React, { useState } from "react";
import AuthForm from "../components/ui/AuthForm";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [mode, setMode] = useState("register");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering:", { username, email, password, isAdmin });
    setMessage("Registration attempt logged to console!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-full p-18">
        <AuthForm
        mode={mode}
        setMode={setMode}
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        handleSubmit={handleRegister}
        message={message}
        />
    </div>
  );
}
