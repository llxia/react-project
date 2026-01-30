import { Tile } from "./Tile";
import { Strike } from "./Strike";

export function Board({ tiles, onTileClick }) {
  return (
    <>
      <div className="board">
        <Tile
          onClick={() => {
            onTileClick(0);
          }}
          className="right-border bottom-border"
          value={tiles[0]}
        />
        <Tile
          onClick={() => {
            onTileClick(0);
          }}
          className="right-border bottom-border"
          value={tiles[1]}
        />
        <Tile
          onClick={() => {
            onTileClick(0);
          }}
          className="bottom-border"
          value={tiles[2]}
        />
        <Tile
          onClick={() => {
            onTileClick(0);
          }}
          className="right-border bottom-border"
          value={tiles[3]}
        />
        <Tile
          onClick={() => {
            onTileClick(0);
          }}
          className="right-border bottom-border"
          value={tiles[4]}
        />
        <Tile
          onClick={() => {
            onTileClick(0);
          }}
          className="bottom-border"
          value={tiles[5]}
        />
        <Tile
          onClick={() => {
            onTileClick(0);
          }}
          className="right-border"
          value={tiles[6]}
        />
        <Tile
          onClick={() => {
            onTileClick(0);
          }}
          className="right-border "
          value={tiles[7]}
        />
        <Tile
          onClick={() => {
            onTileClick(0);
          }}
          value={tiles[8]}
        />
      </div>

      <Strike />
    </>
  );
}
