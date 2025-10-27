import React, { useState } from "react";
import Button from "./Buttan";
import { FaPlus } from "react-icons/fa6";

export default function AddQuestion({ onSave }) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!question.trim()) {
      newErrors.question = "Question can't be empty.";
    }
    if (options.some((opt) => !opt.trim())) {
      newErrors.options = "All four options must be filled.";
    }
    if (correctAnswer === null) {
      newErrors.answer = "Please select a correct answer.";
    }
    return newErrors;
  };

  const handleSave = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSave({
      question,
      options,
      answer: correctAnswer,
    });

    // Reset form
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer(null);
    setErrors({});
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <div className="max-w-2xl px-6 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Create a New Question</h2>
        <p className="mt-2">Fill in the details below to add a question to your quiz.</p>
      </div>

      <div className="mb-6">
        <label htmlFor="question" className="block font-semibold mb-2">
          Question
        </label>
        <div className="relative">
          <input
            id="question"
            type="text"
            placeholder="What is the capital of France?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full pl-4 py-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 focus:outline-none transition"
          />
        </div>
        {errors.question && <p className="text-red-500 text-sm mt-2">{errors.question}</p>}
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-3">
          Answer Options
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {options.map((opt, i) => (
            <div key={i} className="relative">
              <label className={`flex items-center w-full p-4 border border-gray-700 rounded-md cursor-pointer transition ${correctAnswer === i ? 'bg-indigo-100 border-indigo-500 ring-2 ring-indigo-300' : 'bg-white border-slate-300 hover:border-slate-400'}`}>
                <input
                  type="radio"
                  name="correct-answer"
                  checked={correctAnswer === i}
                  onChange={() => setCorrectAnswer(i)}
                  className="h-4 w-4 text-indigo-600 cursor-pointer focus:ring-indigo-200 border-slate-300"
                />
                <input
                  type="text"
                  placeholder={`Option ${i + 1}`}
                  value={opt}
                  onChange={(e) => handleOptionChange(i, e.target.value)}
                  className="ml-3 flex-1 text-sm bg-transparent focus:outline-none"
                />
              </label>
            </div>
          ))}
        </div>
         {errors.options && <p className="text-red-500 text-sm mt-2">{errors.options}</p>}
         {errors.answer && <p className="text-red-500 text-sm mt-2">{errors.answer}</p>}
      </div>

      <div className="mt-8 flex justify-center">
         <Button onClick={handleSave} text="Save Question" icon={FaPlus} variant="dark" />
      </div>
    </div>
  );
}