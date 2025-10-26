import React from "react";
import Button from "../components/ui/Buttan";
import { Link } from "react-router-dom";
import { SiTestrail } from "react-icons/si";
import { FiLogIn, FiUserPlus, FiHome } from "react-icons/fi";

export default function Header() {
  const navItems = [
    { text: "Home", icon: FiHome, variant: "default", to: "/" },
    { text: "Login", icon: FiLogIn, variant: "default", to: "/login" },
    { text: "Register", icon: FiUserPlus, variant: "dark", to: "/register" },
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
