import React from "react";
import { FaCrown } from "react-icons/fa";

const LeaderBox = ({ rank, name, score, quizzes }) => {

  const rankColors = {
    1: "bg-yellow-100 text-yellow-600",
    2: "bg-gray-100 text-gray-500",
    3: "bg-orange-100 text-orange-600",
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-sm rounded-xl p-4 mb-3 hover:shadow-md">
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg ${
          rankColors[rank] || "bg-gray-100 text-gray-700"
        }`}
      >
        {rank <= 3 ? <FaCrown className="text-lg" /> : rank}
      </div>

      <div className="flex-1 ml-4 text-left">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm italic">
          {quizzes} quizzes • {score} pts
        </p>
      </div>

      <div className="text-right">
        <p className="font-bold text-2xl">
          {score}
        </p>
        <p className="text-md">points</p>
      </div>
    </div>
  );
};

export default LeaderBox;
