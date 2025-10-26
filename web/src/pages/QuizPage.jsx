import React, { useState } from "react";
import QuestionsBox from "../components/ui/QuestionsBox";
import Button from "../components/ui/Buttan";
import { quizQuestions } from "../data/quizQuestions";
import Quit from "../components/ui/Quit";
import ResultCard from "../components/ui/ResultCard";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(quizQuestions.length).fill(null));
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectOption = (option) => {
    const newSelected = [...selectedOptions];
    newSelected[currentIndex] = option;
    setSelectedOptions(newSelected);
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  if (isFinished) {
    const correctCount = quizQuestions.filter((q, idx) => q.correctAnswer === selectedOptions[idx]).length;
    const incorrectCount = quizQuestions.length - correctCount;
    const scorePercent = Math.round((correctCount / quizQuestions.length) * 100);

    const quizResult = {
      scorePercent,
      correct: correctCount,
      incorrect: incorrectCount,
      time: "00:10:00",
      totalQuestions: quizQuestions.length,
    };

    return (
        <>
            <div className="flex justify-center items-center p-18">
                <ResultCard quizResult={quizResult} />;
            </div>
        </>
    ) 
  }

  return (
    <>
      <Quit 
        title="General Knowledge" 
        subtitle="Test your general knowledge across multiple topics."
      />
      <div className="min-h-full max-w-5xl mx-auto py-8 px-4 flex flex-col items-center">
        <h1 className="text-6xl font-bold text-center mb-8">Quiz Time!</h1>

        <QuestionsBox
          key={quizQuestions[currentIndex].id}
          questionData={quizQuestions[currentIndex]}
          selectedOption={selectedOptions[currentIndex]}
          setSelectedOption={handleSelectOption}
        />

        <div className="flex justify-between gap-4 mt-6 w-full max-w-xl">
          <Button
            text="Previous"
            icon={BiLeftArrowAlt}
            variant="default"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          />
          <Button
            text={currentIndex === quizQuestions.length - 1 ? "Finish" : "Next"}
            variant="default"
            icon={BiRightArrowAlt}
            onClick={handleNext}
            disabled={selectedOptions[currentIndex] === null}
          />
        </div>
      </div>
    </>
  );
}
