import GS from "./GameState";

export function GameOver({ gameState }) {
  switch (gameState) {
    case GS.inProgress:
      return <></>;
    case GS.playXWins:
      return <div className="game-over">X wins!</div>;
    case GS.playOWins:
      return <div className="game-over">O wins!</div>;
    case GS.draw:
      return <div className="game-over">Draw!</div>;
    default:
      return <>dfsfa</>;
  }
}
