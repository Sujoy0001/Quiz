import React from "react";
import Button from "./Buttan";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

export default function QuizCard({ quiz, onAddQuestion, onDelete }) {
  return (
    <div className="border border-gray-300 rounded-xl p-4 bg-white shadow flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          {quiz.icon} {quiz.name}
        </h3>
        <div className="flex gap-2">
            <Button onClick={onDelete} text="Delete" icon={AiOutlineDelete} variant="delete" />
            <Button text="Add Questions" icon={AiOutlinePlus} onClick={onAddQuestion} />
        </div>
      </div>

     <div>
        {quiz.questions.length > 0 ? (
          <div className="flex flex-col gap-3">
            {quiz.questions.map((q, i) => (
              <div
                key={i}
                className="border border-gray-200 bg-gray-50/50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-blue-600">{i + 1}.</span>
                  <div>
                    <p className="font-medium text-gray-800">{q.question}</p>
                    {q.options && (
                      <ul className="flex gap-4 text-sm text-gray-600 space-y-1">
                        {q.options.map((opt, idx) => (
                          <li
                            key={idx}
                            className={`${
                              q.answer === idx
                                ? "text-green-600 font-semibold"
                                : "text-gray-700"
                            }`}
                          >
                            {opt}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic py-2">
            No questions added yet.
          </p>
        )}
      </div>

    </div>
  );
}
