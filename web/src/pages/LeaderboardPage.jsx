import React from "react";
import Back from "../components/ui/Back";
import LeaderBox from "../components/ui/LeaderBox";
import { LuTrophy } from "react-icons/lu";
import EmptyStateCard from "../components/ui/EmptyStateCard";

const LeaderboardPage = () => {
//   const leaderboardData = [
//     { rank: 1, name: "Alice Johnson", score: 980, quizzes: 15 },
//     { rank: 2, name: "Ravi Kumar", score: 920, quizzes: 14 },
//     { rank: 3, name: "Maya Patel", score: 850, quizzes: 12 },
//     { rank: 4, name: "John Smith", score: 790, quizzes: 10 },
//     { rank: 5, name: "Emma Roy", score: 740, quizzes: 9 },
//   ];

  const leaderboardData = []; 

  const isEmpty = leaderboardData.length === 0;

  return (
    <>
      <Back title="Leaderboard" subtitle="Top performers across all quizzes" />

      <div className="mt-6 max-w-3xl mx-auto">
        {isEmpty ? (
          <EmptyStateCard
            icon={LuTrophy}
            title="No leaderboard data yet"
            description="Once users start taking quizzes, their scores will appear here."
          />
        ) : (
          leaderboardData.map((user) => (
            <LeaderBox
              key={user.rank}
              rank={user.rank}
              name={user.name}
              score={user.score}
              quizzes={user.quizzes}
            />
          ))
        )}
      </div>
    </>
  );
};

export default LeaderboardPage;
