import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-gray-200/70 rounded-lg w-[90%] shadow-card h-fit  overflow-auto mx-auto max-w-[1000px] mt-6">
      {children}
    </div>
  );
};

export default Card;
