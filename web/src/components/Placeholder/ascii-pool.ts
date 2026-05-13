import type { ComponentType } from "react";
import BusyHummingbird from "./pieces/BusyHummingbird";
import CuriousCrow from "./pieces/CuriousCrow";
import HoveringSwift from "./pieces/HoveringSwift";
import NestingSparrow from "./pieces/NestingSparrow";
import PerchedFinch from "./pieces/PerchedFinch";
import SearchingOwl from "./pieces/SearchingOwl";
import VanishedPerch from "./pieces/VanishedPerch";
import WaywardGull from "./pieces/WaywardGull";

export type PlaceholderVariant = "empty" | "loading" | "noResults" | "notFound";

export interface AsciiPiece {
  id: string;
  variant: PlaceholderVariant;
  credit: string;
  Component: ComponentType;
}

export const ASCII_POOL: AsciiPiece[] = [
  {
    id: "memos-perched-finch",
    variant: "empty",
    credit: "Memos original ASCII art",
    Component: PerchedFinch,
  },
  {
    id: "memos-nesting-sparrow",
    variant: "empty",
    credit: "Memos original ASCII art",
    Component: NestingSparrow,
  },
  {
    id: "memos-hovering-swift",
    variant: "loading",
    credit: "Memos original ASCII art",
    Component: HoveringSwift,
  },
  {
    id: "memos-busy-hummingbird",
    variant: "loading",
    credit: "Memos original ASCII art",
    Component: BusyHummingbird,
  },
  {
    id: "memos-searching-owl",
    variant: "noResults",
    credit: "Memos original ASCII art",
    Component: SearchingOwl,
  },
  {
    id: "memos-curious-crow",
    variant: "noResults",
    credit: "Memos original ASCII art",
    Component: CuriousCrow,
  },
  {
    id: "memos-wayward-gull",
    variant: "notFound",
    credit: "Memos original ASCII art",
    Component: WaywardGull,
  },
  {
    id: "memos-vanished-perch",
    variant: "notFound",
    credit: "Memos original ASCII art",
    Component: VanishedPerch,
  },
];

export function pickPiece(variant: PlaceholderVariant): AsciiPiece {
  const matches = ASCII_POOL.filter((p) => p.variant === variant);
  if (matches.length === 0) {
    throw new Error(`No ASCII piece registered for variant "${variant}"`);
  }
  return matches[Math.floor(Math.random() * matches.length)];
}
