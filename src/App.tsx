import React from "react";
import Game from "./Components/Game.tsx";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="text-6xl font-bold mb-3 text-white">Tic Tac Toe</h1>
      <h3 className=" font-bold mb-6 text-white" >Multiplayer Game</h3>
      <Game />
    </div>
  );
};

export default App;
