import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-auto max-w-5xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-black font-bold cursor-pointer text-xl"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
