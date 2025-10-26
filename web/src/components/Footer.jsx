import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-6">
      <div className="text-center font-medium">
        &copy; {new Date().getFullYear()} Revox Quiz. All rights reserved.
      </div>
    </footer>
  );
}
