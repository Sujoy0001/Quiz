import React from "react";

export default function QuestionsBox({ questionData, selectedOption, setSelectedOption }) {
  // A unique name for the radio button group for each question
  const radioGroupName = `question-${questionData.id}`;

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md w-full max-w-2xl mx-auto">
      
      {/* Question Text */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">
        {questionData.question}
      </h2>

      {/* Options Container */}
      <div className="flex flex-col gap-4">
        {questionData.options.map((option, index) => {
          const isSelected = selectedOption === option;

          return (
            <label
              key={index}
              htmlFor={`${radioGroupName}-${index}`}
              className={`flex items-center w-full p-4 rounded-lg border cursor-pointer transition-colors duration-200 ${
                isSelected 
                  ? 'border-blue-500 bg-blue-50' // Selected state
                  : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50' // Default state
              }`}
            >
              <input
                type="radio"
                id={`${radioGroupName}-${index}`}
                name={radioGroupName}
                value={option}
                checked={isSelected}
                onChange={() => setSelectedOption(option)}
                className="w-5 h-5 accent-blue-600"
              />
              <span className="ml-4 text-lg text-gray-800">{option}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}