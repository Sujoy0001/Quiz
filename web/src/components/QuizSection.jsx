import React from "react";
import QuizBox from "../components/ui/QuizBox";
import { quizData } from "../data/quizData";
import EmptyStateCard from "../components/ui/EmptyStateCard";
import { LuCalendar } from "react-icons/lu";

export default function QuizSection() {
  return (
    <section className="max-w-full py-4">
      <div className="container max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 italic">Choose Your Quiz</h1>

        {quizData.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {quizData.map((quiz) => (
              <QuizBox
                key={quiz.id}
                name={quiz.name}
                description={quiz.description}
                icon={quiz.icon}
                link={quiz.link}
              />
            ))}
          </div>
        ) : (
          <EmptyStateCard
            icon={LuCalendar}
            title="No quizzes available yet"
            description="Once quizzes are created, they will appear here."
          />
        )}
      </div>
    </section>
  );
}
