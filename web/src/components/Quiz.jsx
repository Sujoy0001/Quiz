import React, { useState, useEffect } from 'react';
import { quizQuestions } from './quizData'; // Data remains the same

// A simple timer icon component for clarity
const TimerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(23);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswerSelect = (option) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion.id]: option });
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-3 text-gray-700">
          <button className="text-sm border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition">
            &larr; Quit
          </button>
          <span className="font-medium">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
          <div className="flex items-center gap-1.5 text-sm">
            <TimerIcon />
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-2 mb-8">
          <div
            className="bg-gray-800 h-2 rounded-full"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Quiz Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 w-full max-w-2xl shadow-sm">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-gray-800">
          {currentQuestion.question}
        </h2>
        
        {/* Options */}
        <div className="flex flex-col gap-4">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswers[currentQuestion.id] === option;
            return (
              <div
                key={index}
                className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50 shadow-inner'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onClick={() => handleAnswerSelect(option)}
              >
                <input
                  type="radio"
                  id={`option-${index}`}
                  name={`question-${currentQuestion.id}`}
                  value={option}
                  checked={isSelected}
                  onChange={() => handleAnswerSelect(option)}
                  className="h-5 w-5 mr-4 accent-gray-800"
                />
                <label htmlFor={`option-${index}`} className="text-lg text-gray-700 flex-grow cursor-pointer">
                  {option}
                </label>
              </div>
            );
          })}
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center mt-10">
          <button
            className="font-medium bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          
          <div className="flex gap-2">
            {quizQuestions.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full ${
                  currentQuestionIndex === index ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              ></span>
            ))}
          </div>

          <button
            className="font-medium bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;