import React from "react";
import Button from "../components/ui/Buttan";
import { FiLogOut, FiHome, FiUser } from "react-icons/fi";

export default function Text() {
    const navItems = [
        { text: "Home", icon: FiHome, variant: "default" },
        { text: "Profile", icon: FiUser, variant: "dark" },
        { text: "Settings", icon: FiLogOut, variant: "default" },
    ];

  return (
    <>
        <div>Text Component</div>
        <Button icon={FiLogOut} text="Logout" />
        <div className="flex flex-rows gap-4 mt-4">
            {navItems.map((item, index) => (
                <Button
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    variant={item.variant}
                />
            ))}
        </div>
    </>
  )
}