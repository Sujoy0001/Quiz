import React from "react";
import {
  FaCalculator,
  FaBook,
  FaFlask,
  FaGlobe,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";
import { GiWorld, GiAtom } from "react-icons/gi";
import { MdHistoryEdu } from "react-icons/md";

const categories = [
  { id: 1, name: "General Knowledge", icon: <FaBook /> },
  { id: 2, name: "Math", icon: <FaCalculator /> },
  { id: 3, name: "Science", icon: <FaFlask /> },
  { id: 4, name: "Geography", icon: <GiWorld /> },
  { id: 5, name: "History", icon: <MdHistoryEdu /> },
  { id: 6, name: "Technology", icon: <FaLaptopCode /> },
  { id: 7, name: "Brain Teasers", icon: <FaBrain /> },
  { id: 8, name: "Physics", icon: <GiAtom /> },
];

export default function CategorySelect({ onSelect }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Choose a Quiz Category
      </h2>
      <p className="text-center mt-2">
        Pick a topic you want to create questions for.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelect(cat)}
            className="flex flex-col items-center justify-center gap-3 border border-gray-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all duration-300"
          >
            <div className="text-2xl">{cat.icon}</div>
            <p className="text-md font-semibold text-gray-800">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
