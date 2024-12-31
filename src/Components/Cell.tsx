import React from "react";

type CellProps = {
  value: string | null;
  onClick: () => void;
};

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  const textColor = value === "X" ? "text-green-500" : value === "O" ? "text-red-500" : "text-white";
  return (
    <button
      className={`w-20 h-20 sm:w-40 sm:h-40 flex items-center justify-center bg-black border-8 border-blue-800 
      text-5xl font-bold hover:bg-gray-800 ${textColor}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Cell;
