import React from "react";
import { quizResult } from "../../data/ResultData";
import { LuTrophy } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import Button from "./Buttan";
import { Link } from "react-router-dom";

const ResultCard = () => {
  const { scorePercent, correct, incorrect, time, totalQuestions } = quizResult;

  // Stats as constants (array of objects)
  const stats = [
    { label: "Correct", value: correct, color: "text-green-600" },
    { label: "Incorrect", value: incorrect, color: "text-red-600" },
    { label: "Time", value: time, color: "text-blue-600" },
  ];

  return (
    <div className="bg-white rounded-3xl text-black shadow-lg p-8 w-full max-w-2xl text-center border border-gray-300">
      <div className="flex justify-center mb-4">
        <div className="bg-red-100 p-6 rounded-full">
          <LuTrophy className="h-12 w-12 text-red-500" />
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-2">{scorePercent}%</h1>
      <p className="mb-6">
        You scored {correct} out of {totalQuestions}
      </p>

      <div className="flex justify-center gap-10 text-center mb-6">
        {stats.map((item, index) => (
          <div key={index} className="px-8 py-4 bg-gray-100 rounded-lg">
            <p className={`${item.color} text-2xl font-semibold`}>{item.value}</p>
            <p className="text-xl font-semibold">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="flex h-auto justify-center gap-4 mt-12 p-2">
        <Link to="/index">
            <Button icon={FaHome} text="Home" variant="default" />
        </Link>
        <Link to="/index/leaderboard">
            <Button icon={LuTrophy} text="View Leaderboard" variant="dark" />
        </Link>
      </div>
    </div>
  );
};

export default ResultCard;
