import React, { useState } from "react";
import Board from "./Board.tsx";
import GameStatus from "./GameStatus.tsx";
import WinnerAlert from "./WinnerAlert.tsx";

type Player = "X" | "O" | null;

const Game: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player>(null);
  const [isDraw, setIsDraw] = useState(false);


  const playClapSound = () => {
    const clapSound = new Audio("/sounds/clap.mp3");
    clapSound.volume = 0.2;
    clapSound.play();

    setTimeout(() => {
      clapSound.pause();
      clapSound.currentTime = 0; 
    }, 1800); 
  };
  

  const checkWinner = (updatedBoard: Player[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if ( updatedBoard[a] && updatedBoard[a] === updatedBoard[b] && updatedBoard[a] === updatedBoard[c]) {
        return updatedBoard[a];
      }
    }

    return null;
  };

  const handleCellClick = (index: number) => {
    if (board[index] || winner) return;

    const updatedBoard = board.map((cell, i) => (i === index ? currentPlayer : cell));
    setBoard(updatedBoard);

    const gameWinner = checkWinner(updatedBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      playClapSound(); 
    } else if (updatedBoard.every(cell => cell)) {
      setIsDraw(true);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setIsDraw(false);
  };

  return (
    <div className="">
      <Board board={board} onCellClick={handleCellClick} />
      <GameStatus
        winner={winner}
        currentPlayer={currentPlayer}
        isDraw={isDraw}
        onReset={resetGame}
      />
      {(winner || isDraw) && (
        <WinnerAlert
          message={winner ? `Player ${winner} Wins!` : "It's a Draw!"}
          onClose={resetGame}
        />
      )}
    </div>
  );
};

export default Game;
