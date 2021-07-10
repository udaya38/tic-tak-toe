import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helper";
import "./Game.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsnext, setXisnext] = useState(true);
  const [player, setPlayer] = useState(false);
  let winner = calculateWinner(board);
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      count++;
    }
  }
  if (count === 0 && winner === null) {
    winner = "Match is Draw 😤";
  }
  const handleclick = (i) => {
    const boardcopy = [...board];
    if (winner || boardcopy[i]) {
      return;
    }
    boardcopy[i] = xIsnext ? "X" : "O";
    setBoard(boardcopy);
    setXisnext(!xIsnext);
  };

  const handle = () => {
    setBoard(Array(9).fill(null));
    setPlayer(true);
  };
  const renderMoves = () => {
    return (
      <>
        <span>👉 </span>
        <button className="start" onClick={handle}>
          Start Game
        </button>
      </>
    );
  };
  return (
    <div>
      <Board squares={board} onClick={handleclick} />
      <div className="play">
        {player ? (
          winner ? (
            <div>
              <p className="win">{winner} </p>
              <p>{renderMoves()}</p>
            </div>
          ) : (
            <p className="lose">
              {"Player " + (xIsnext ? "X" : "O") + "'s turn"}
            </p>
          )
        ) : (
          <p className="lose">Let's Play</p>
        )}
        {player ? <p></p> : renderMoves()}
      </div>
    </div>
  );
};

export default Game;
