import React from "react";
import "../index.css";

export default function UserName() {
  const user = {
    email: "sujoy@example.com",
    name: "Sujoy Garai",
  };

  return (
    <div className="max-w-full py-8">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-2 italic">Welcome, {user.name}!</h1>
            <p className="text-black italic">
                We're glad to have you back. Explore the dashboard and check your quiz stats, history, and more!
            </p>
      </div>
    </div>
  );
}
