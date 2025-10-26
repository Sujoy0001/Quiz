import React from "react";

const EmptyStateCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl shadow">
      {Icon && <p className="text-6xl mb-12"><Icon /></p>}
      <h3 className="text-2xl font-semibold text-center">{title}</h3>
      <p className="text-md mt-2 italic text-center">{description}</p>
    </div>
  );
};

export default EmptyStateCard;
