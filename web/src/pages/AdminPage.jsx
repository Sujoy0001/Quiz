import React, { useState } from "react";
import Back from "../components/ui/Back";
import Button from "../components/ui/Buttan";
import Modal from "../components/ui/Modal";
import CategorySelect from "../components/ui/CategorySelect";
import AddQuestion from "../components/ui/AddQuestion";
import QuizCard from "../components/ui/QuizCard";
import { GoPlusCircle } from "react-icons/go";

export default function AdminPage() {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizzes, setQuizzes] = useState([]);

  const handleAddQuiz = (category) => {
    const newQuiz = { ...category, questions: [] };
    setQuizzes([...quizzes, newQuiz]);
    setShowCategoryModal(false);
  };

  const handleAddQuestion = (quizIndex, questionData) => {
    const updated = [...quizzes];
    updated[quizIndex].questions.push(questionData);
    setQuizzes(updated);
    setShowQuestionModal(false);
  };

  return (
    <>
      <Back title="Admin Dashboard" subtitle="Add your own quiz." />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4 py-8">
        {/* LEFT */}
        <div className="w-full md:w-1/3">
          <div className="px-8 py-6 rounded-2xl shadow-md bg-white flex flex-col gap-6">
            <div className="text-left">
              <h2 className="text-2xl font-semibold mb-2">Add new quiz</h2>
              <p>Choose your own category.</p>
            </div>
            <div className="flex justify-end">
              <Button text="Add Quiz" icon={GoPlusCircle} variant="dark" onClick={() => setShowCategoryModal(true)} />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full p-4 bg-white shadow-md rounded-2xl md:w-2/3 flex flex-col gap-4">
          {quizzes.length > 0 ? (
            quizzes.map((quiz, index) => (
              <QuizCard
                key={index}
                quiz={quiz}
                onAddQuestion={() => {
                  setSelectedQuiz(index);
                  setShowQuestionModal(true);
                }}
                onDelete={() => setQuizzes(quizzes.filter((_, i) => i !== index))}
              />
            ))
          ) : (
            <p className="text-center mt-10 italic">No quizzes yet. Add one to get started!</p>
          )}
        </div>
      </div>

      <Modal isOpen={showCategoryModal} onClose={() => setShowCategoryModal(false)}>
        <CategorySelect onSelect={handleAddQuiz} />
      </Modal>

      <Modal isOpen={showQuestionModal} onClose={() => setShowQuestionModal(false)}>
        <AddQuestion onSave={(data) => handleAddQuestion(selectedQuiz, data)} />
      </Modal>
    </>
  );
}
