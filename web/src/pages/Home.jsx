import React from "react";
import UserName from "../components/UserName";
import QuizSection from "../components/QuizSection";

export default function Home() {
    return (
        <div className="min-h-full w-full flex flex-col">
            <UserName />
            <QuizSection />
        </div>
    );
}