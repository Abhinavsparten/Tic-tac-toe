import React from "react";

type GameStatusProps = {
  winner: string | null;
  currentPlayer: string | null;
  isDraw: boolean;
  onReset: () => void;
};

const GameStatus: React.FC<GameStatusProps> = ({ winner, currentPlayer, isDraw, onReset }) => {
  return (
    <div className="sm:flex justify-between mt-6 text-center">
      {winner && <div     className={`text-2xl  font-bold ${
         winner === "X" ? "text-green-600" : "text-red-600"
       }`}>Winner: {winner}</div>}
      {!winner && !isDraw && (
       <div
       className={`text-2xl font-bold mt-6 ${
         currentPlayer === "X" ? "text-green-600" : "text-red-600"
       }`}
     >
       Current Player: {currentPlayer}
     </div>
      )}
      {isDraw && <div className="text-xl font-bold text-red-600">It's a Draw!</div>}
      <button
        onClick={onReset}
        className="mt-5 px-4 py-2 bg-white rounded "
      >
        Reset Game
      </button>
    </div>
  );
};

export default GameStatus;
