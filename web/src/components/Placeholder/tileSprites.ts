import FalconIdle from "./pieces/FalconIdle.svg?url";
import OwlBlink from "./pieces/OwlBlink.svg?url";
import WoodpeckerPeck from "./pieces/WoodpeckerPeck.svg?url";

export interface TileSprite {
  name: string;
  src: string;
  frameWidth: number;
  frameHeight: number;
  frames: number;
  duration: number;
}

export const TILE_SPRITES: TileSprite[] = [
  {
    name: "OwlBlink",
    src: OwlBlink,
    frameWidth: 32,
    frameHeight: 32,
    frames: 5,
    duration: 1500,
  },
  {
    name: "FalconIdle",
    src: FalconIdle,
    frameWidth: 32,
    frameHeight: 32,
    frames: 4,
    duration: 960,
  },
  {
    name: "WoodpeckerPeck",
    src: WoodpeckerPeck,
    frameWidth: 32,
    frameHeight: 32,
    frames: 6,
    duration: 1080,
  },
];

export function pickTileSprite(): TileSprite {
  return TILE_SPRITES[Math.floor(Math.random() * TILE_SPRITES.length)];
}
