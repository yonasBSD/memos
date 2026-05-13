import { render } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import { ASCII_POOL, pickPiece, type PlaceholderVariant } from "@/components/Placeholder/ascii-pool";
import { DEFAULT_MESSAGES } from "@/components/Placeholder/messages";

const VARIANTS: PlaceholderVariant[] = ["empty", "loading", "noResults", "notFound"];

describe("ASCII_POOL integrity", () => {
  it("contains at least two pieces per variant", () => {
    for (const variant of VARIANTS) {
      const matches = ASCII_POOL.filter((p) => p.variant === variant);
      expect(matches.length, `variant=${variant}`).toBeGreaterThanOrEqual(2);
    }
  });

  it("uses unique ids", () => {
    const ids = ASCII_POOL.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("uses non-empty credits for every piece", () => {
    for (const piece of ASCII_POOL) {
      expect(piece.credit.trim().length, `piece=${piece.id}`).toBeGreaterThan(0);
    }
  });

  it("uses original Memos credits for bundled pieces", () => {
    for (const piece of ASCII_POOL) {
      expect(piece.credit, `piece=${piece.id}`).toContain("Memos");
      expect(piece.credit, `piece=${piece.id}`).not.toMatch(/jgs|Joan Stark/i);
    }
  });

  it("registers renderable piece components", () => {
    for (const piece of ASCII_POOL) {
      const PieceComponent = piece.Component;
      const { container, unmount } = render(createElement(PieceComponent));
      const pre = container.querySelector("pre");

      expect(pre, `piece=${piece.id}`).not.toBeNull();
      expect(pre, `piece=${piece.id}`).toHaveAttribute("aria-hidden", "true");
      expect(pre?.textContent?.trim().length, `piece=${piece.id}`).toBeGreaterThan(0);

      unmount();
    }
  });
});

describe("pickPiece", () => {
  it("returns a piece matching the requested variant", () => {
    for (const variant of VARIANTS) {
      const piece = pickPiece(variant);
      expect(piece.variant).toBe(variant);
    }
  });
});

describe("DEFAULT_MESSAGES", () => {
  it("provides a non-empty message for every variant", () => {
    for (const variant of VARIANTS) {
      expect(DEFAULT_MESSAGES[variant], `variant=${variant}`).toBeTruthy();
      expect(DEFAULT_MESSAGES[variant].trim().length).toBeGreaterThan(0);
    }
  });
});
