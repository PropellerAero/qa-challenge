import { TileDescriptor, TileSet } from "./types";

export const extractTileCoordinate = (url: string): TileDescriptor => {
  const a = url.split("@");
  const b = a[0].split("/");

  const y = b[b.length - 1];
  const x = b[b.length - 2];
  const z = b[b.length - 3];

  return [z, x, y];
};

export const compareTileSets = (
  received: TileSet,
  expected: TileSet,
): boolean => {
  // TODO
  return true;
};
