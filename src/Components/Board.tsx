import React from "react";
import Cell from "./Cell.tsx";
import "react-toastify/dist/ReactToastify.css";

type BoardProps = {
  board: (string | null)[];
  onCellClick: (index: number) => void;
};

const Board: React.FC<BoardProps> = ({ board, onCellClick }) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {board.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
};

export default Board;
