import GS from "./GameState";

export function Reset({ gameState, onClick }) {
  if (gameState === GS.inProgress) return;
  return (
    <button className="reset-button" onClick={onClick}>
      Reset
    </button>
  );
}
