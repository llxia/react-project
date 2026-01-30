import { Tile } from "./Tile";
import { Strike } from "./Strike";

export function Board({
  tiles,
  onTileClick,
  playerTurn,
  strikeClass,
  boardSize,
}) {
  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${boardSize}, 100px)`,
        gridTemplateRows: `repeat(${boardSize}, 100px)`,
      }}
    >
      {Array(boardSize * boardSize)
        .fill(null)
        .map((v, i) => {
          return (
            <Tile
              key={i}
              onClick={() => {
                console.log("onTileClick", i);
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
