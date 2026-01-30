import { Tile } from "./Tile";
import { Strike } from "./Strike";

export function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  return (
    <div className="board">
      {Array(9)
        .fill(0)
        .map((v, i) => {
          return (
            <Tile
              key={i}
              onClick={() => {
                onTileClick(i);
              }}
              className="tile-border"
              value={tiles[i]}
              playerTurn={playerTurn}
            />
          );
        })}
      <Strike strikeClass={strikeClass} />
    </div>
  );
}
