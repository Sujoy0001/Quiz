import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import Button from "./Buttan";
import { FaRegClock } from "react-icons/fa6";

const Quit = ({ title, subtitle, link = "/index", maxTime = 10 * 60 }) => {
  const navigate = useNavigate();
  const [timeElapsed, setTimeElapsed] = useState(0); // start from 0

  useEffect(() => {
    if (timeElapsed >= maxTime) {
      navigate(link); // redirect when maxTime reached
      return;
    }

    const timer = setInterval(() => setTimeElapsed((prev) => prev + 1), 1000); // increment
    return () => clearInterval(timer);
  }, [timeElapsed, navigate, link, maxTime]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="max-w-full bg-white text-black p-4">
      <div className="max-w-7xl w-full flex items-center justify-between mx-auto">
        <div className="flex items-center gap-8">
          <Button
            onClick={() => navigate(link)}
            icon={IoExitOutline}
            text="Quit"
            variant="danger"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">{title}</h2>
            {subtitle && <p className="text-md italic">{subtitle}</p>}
          </div>
        </div>

        <div className="text-xl font-bold text-red-600 flex items-center gap-2">
          <FaRegClock /> {formatTime(timeElapsed)}
        </div>
      </div>
    </div>
  );
};

export default Quit;
