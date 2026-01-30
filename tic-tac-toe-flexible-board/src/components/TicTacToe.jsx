import { useState, useEffect } from "react";
import { Board } from "./Board";
import { GameOver } from "./GameOver";
import { Reset } from "./Reset";
import GS from "./GameState";
import gameOverSoundAsset from "../sounds/game_over.wav";
import clickSoundAsset from "../sounds/click.wav";

const PLAYER_X = "X";
const PLAYER_O = "O";

const gameOverSound = new Audio(gameOverSoundAsset);
gameOverSound.volume = 0.2;
const clickSound = new Audio(clickSoundAsset);
clickSound.volume = 0.5;

export function TicTacToe() {
  const [boardSize, setBoardSize] = useState(6);
  const [tiles, setTiles] = useState(Array(boardSize * boardSize).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GS.inProgress);

  const handleTileClick = (index) => {
    if (gameState !== GS.inProgress) {
      return;
    }
    if (tiles[index] === null) {
      const newTiles = [...tiles];
      newTiles[index] = playerTurn;
      setTiles(newTiles);
      if (playerTurn === PLAYER_X) {
        setPlayerTurn(PLAYER_O);
      } else {
        setPlayerTurn(PLAYER_X);
      }
    }
  };
  const handleReset = () => {
    reset(boardSize);
  };

  const reset = (size) => {
    setTiles(Array(size * size).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass("");
    setGameState(GS.inProgress);
  };

  const row = (n) => Math.floor(n / boardSize);
  const col = (n) => n % boardSize;

  function hasFive(board) {
    const directions = [
      [0, 1], // →
      [1, 0], // ↓
      [1, 1], // ↘
      [1, -1], // ↙
    ];

    for (let i = 0; i < board.length; i++) {
      const player = board[i];
      if (!player) continue;

      const r = row(i);
      const c = col(i);

      for (const [dr, dc] of directions) {
        let count = 1;

        for (let step = 1; step < 5; step++) {
          const nr = r + dr * step;
          const nc = c + dc * step;

          if (nr < 0 || nr >= boardSize || nc < 0 || nc >= boardSize) break;

          const next = nr * boardSize + nc;
          if (board[next] !== player) break;

          count++;
        }

        if (count === 5) {
          return player; // "X" or "O"
        }
      }
    }

    return null; // no winner
  }

  const checkWinner = (tiles, setStrikeClass, setGameState) => {
    console.log("tiles", tiles);
    const result = hasFive(tiles);
    console.log("result", result);
    if (result === PLAYER_X) {
      setGameState(GS.playXWins);
    } else if (result === PLAYER_O) {
      setGameState(GS.playOWins);
    } else {
      return;
    }

    const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
    if (areAllTilesFilledIn) {
      setGameState(GS.draw);
    }
  };

  const handleBoardSize = (e) => {
    setBoardSize(e.target.value);
    reset(e.target.value);
  };

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  useEffect(() => {
    if (tiles.some((tile) => tile !== null)) {
      clickSound.play();
    }
  }, [tiles]);

  useEffect(() => {
    if (gameState !== GS.inProgress) {
      gameOverSound.play();
    }
  }, [gameState]);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <input
        type="number"
        min={5}
        max={14}
        placeholder="Size of the bord"
        value={boardSize}
        onChange={handleBoardSize}
      />
      <Board
        tiles={tiles}
        onTileClick={handleTileClick}
        playerTurn={playerTurn}
        strikeClass={strikeClass}
        boardSize={boardSize || 5}
      />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onClick={handleReset} />
    </>
  );
}
