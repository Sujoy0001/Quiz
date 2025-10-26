import React from "react";
import Button from "../components/ui/Buttan";
import { FiLogOut, FiHome, FiUser } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";
import { AiOutlineHistory } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SiTestrail } from "react-icons/si";

export default function Navber() {
  const navItems = [
    { text: "Home", icon: FiHome, variant: "default", to: "/index" },
    { text: "Leaderboard", icon: LuTrophy, variant: "default", to: "/index/leaderboard" },
    { text: "History", icon: AiOutlineHistory, variant: "default", to: "/index/history" },
    { text: "Admin", icon: FiUser, variant: "default", to: "/index/admin" },
    { text: "Logout", icon: FiLogOut, variant: "dark", to: "/" },
  ];

  return (
    <div className="max-w-full px-18 py-4 bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl w-full flex justify-between items-center mx-auto">
            <div className="logo flex items-center justify-center gap-2">
                <SiTestrail className="text-2xl" />
                <h2 className="text-2xl font-bold italic">Revox Quiz</h2>
            </div>
            <nav className="flex gap-4">
                {navItems.map((item, index) => (
                <Link key={index} to={item.to}>
                    <Button icon={item.icon} text={item.text} variant={item.variant} />
                </Link>
                ))}
            </nav>
        </div>
    </div>
  );
}
