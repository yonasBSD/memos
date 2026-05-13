import { type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { DEFAULT_MESSAGES, type PlaceholderVariant } from "./messages";
import { pickTileSprite } from "./tileSprites";

interface PlaceholderProps {
  variant: PlaceholderVariant;
  message?: string;
  children?: ReactNode;
  className?: string;
}

const TILE_SIZE = 32;
const DISPLAY_SCALE = 2;
const DISPLAY_SIZE = TILE_SIZE * DISPLAY_SCALE;

const Placeholder = ({ variant, message, children, className }: PlaceholderProps) => {
  const [sprite] = useState(pickTileSprite);
  const resolvedMessage = message ?? DEFAULT_MESSAGES[variant];
  const isLoading = variant === "loading";
  const stripWidth = sprite.frameWidth * sprite.frames;
  const displayStripWidth = stripWidth * DISPLAY_SCALE;
  const displayStripHeight = sprite.frameHeight * DISPLAY_SCALE;

  return (
    <div
      role={isLoading ? "status" : undefined}
      aria-live={isLoading ? "polite" : undefined}
      className={cn("flex flex-col items-center justify-center max-w-md mx-auto px-4 py-8", className)}
    >
      <style>{`
        @keyframes placeholder-tile-strip {
          from { transform: translateX(0); }
          to { transform: translateX(-${displayStripWidth}px); }
        }

        @media (prefers-reduced-motion: reduce) {
          [data-placeholder-strip] {
            animation: none !important;
            transform: translateX(0) !important;
          }
        }
      `}</style>
      <div
        aria-hidden="true"
        data-testid="placeholder-sprite"
        className="relative shrink-0"
        style={{ width: DISPLAY_SIZE, height: DISPLAY_SIZE, overflow: "hidden" }}
      >
        <img
          data-placeholder-strip=""
          src={sprite.src}
          alt=""
          width={stripWidth}
          height={sprite.frameHeight}
          draggable={false}
          style={{
            display: "block",
            width: displayStripWidth,
            height: displayStripHeight,
            maxWidth: "none",
            imageRendering: "pixelated",
            animationName: "placeholder-tile-strip",
            animationDuration: `${sprite.duration}ms`,
            animationTimingFunction: `steps(${sprite.frames})`,
            animationIterationCount: "infinite",
          }}
        />
      </div>
      <p className="mt-3 font-mono text-sm text-muted-foreground">{resolvedMessage}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Placeholder;
