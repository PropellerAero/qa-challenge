import { TileSet } from "./types";
import { compareTileSets } from "./utils";

describe("utils", () => {
  test("compareTileSets", () => {
    const tilesetA: TileSet = [["1", "1", "0"]];
    const tilesetB: TileSet = [["1", "1", "0"]];

    const result = compareTileSets(tilesetA, tilesetB);
    expect(result).toBe(true);
  });
});
