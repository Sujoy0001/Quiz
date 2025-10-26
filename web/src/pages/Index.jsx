// pages/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Buttan";
import { FiLogIn, FiUserPlus } from "react-icons/fi";

export default function Index() {
  return (
    <div className="min-h-full flex flex-col items-center justify-center text-black p-18">

      <div className="max-w-4xl text-center mb-4">
        <h1 className="text-7xl font-bold mb-4">Welcome to Revox Quiz</h1>
        <p className="text-lg mb-8 italic">
          Challenge yourself, track your progress, and see how you stack up on the leaderboard!
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/login">
            <Button text="Login" icon={FiLogIn} variant="default" />
          </Link>
          <Link to="/register">
            <Button text="Register" icon={FiUserPlus} variant="dark" />
          </Link>
        </div>
      </div>
      <div className="p-0">
        <img
          src="https://png.pngtree.com/png-clipart/20241230/original/pngtree-illustration-of-brean-png-image_18317180.png"
          alt="Quiz Illustration"
          className="w-full h-84 mx-auto"
        />
      </div>
    </div>
  );
}
