import React from "react";
import { Link } from "react-router-dom";
import Button from "./Buttan"; // Your custom button
import { FaArrowRight } from "react-icons/fa6";

export default function QuizBox({ name, description, icon: Icon, link }) {
  return (
    <div className="bg-white shadow rounded-2xl border border-gray-300 p-6 flex flex-col justify-between h-auto hover:shadow-xl">
      
      <div className="flex items-center gap-3 mb-2">
        <Icon className="text-2xl" />
        <h2 className="text-2xl font-bold">{name}</h2>
      </div>

      <p className="flex-1 mb-4 italic">{description}</p>

      <div className="flex justify-end">
        <Link to={`/index/quiz/${link}`}>
          <Button icon={FaArrowRight} text="Start Now" variant="dark" />
        </Link>
      </div>
    </div>
  );
}
