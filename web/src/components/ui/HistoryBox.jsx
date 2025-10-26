import React from "react";
import { LuTrophy, LuCalendar, LuClock } from "react-icons/lu";

const HistoryBox = ({ score, total, accuracy, date, duration }) => {
  return (
    <div className="flex items-center justify-between bg-white text-black border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all mb-3 w-full max-w-3xl mx-auto">

      <div className="flex items-start gap-4">
        <div className="bg-red-50 p-3 rounded-full flex items-center justify-center">
          <LuTrophy className="text-red-500 h-6 w-6" />
        </div>

        <div>
          <p className="font-semibold text-xl">
            Score: {score}/{total}
          </p>
          <p className="text-sm">{accuracy}% accuracy</p>

          <div className="flex items-center gap-4 text-sm mt-2">
            <span className="flex items-center gap-1">
              <LuCalendar className="h-4 w-4" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <LuClock className="h-4 w-4" />
              {duration}
            </span>
          </div>
        </div>
      </div>

      <div className="text-right">
        <p className="text-3xl font-bold">
          {accuracy}%
        </p>
      </div>
    </div>
  );
};

export default HistoryBox;
