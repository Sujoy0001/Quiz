import React from "react";
import Back from "../components/ui/Back";
import HistoryBox from "../components/ui/HistoryBox";
import { LuCalendar } from "react-icons/lu";
import EmptyStateCard from "../components/ui/EmptyStateCard";

const HistoryPage = () => {
//   const historyData = [
//     {
//       score: 1,
//       total: 3,
//       accuracy: 33,
//       date: "Oct 26, 2025, 11:28 PM",
//       duration: "0m 59s",
//     },
//     {
//       score: 2,
//       total: 3,
//       accuracy: 66,
//       date: "Oct 25, 2025, 10:15 PM",
//       duration: "1m 20s",
//     },
//   ];

    const historyData = [];

  const isEmpty = historyData.length === 0;

  return (
    <>
      <Back
        title="History"
        subtitle="View all your previous quiz results and accuracy"
      />

      <div className="mt-6 max-w-3xl mx-auto">
        {isEmpty ? (
          <EmptyStateCard
            icon={LuCalendar}
            title="No quiz history yet"
            description="Once you take quizzes, your results will appear here."
          />
        ) : (
          historyData.map((item, index) => (
            <HistoryBox
              key={index}
              score={item.score}
              total={item.total}
              accuracy={item.accuracy}
              date={item.date}
              duration={item.duration}
            />
          ))
        )}
      </div>
    </>
  );
};

export default HistoryPage;
