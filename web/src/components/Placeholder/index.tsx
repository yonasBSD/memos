import { type ReactNode, useMemo } from "react";
import { cn } from "@/lib/utils";
import { type PlaceholderVariant, pickPiece } from "./ascii-pool";
import { DEFAULT_MESSAGES } from "./messages";
import "./Placeholder.css";

interface PlaceholderProps {
  variant: PlaceholderVariant;
  message?: string;
  children?: ReactNode;
  className?: string;
}

const Placeholder = ({ variant, message, children, className }: PlaceholderProps) => {
  const piece = useMemo(() => pickPiece(variant), [variant]);
  const PieceComponent = piece.Component;
  const resolvedMessage = message ?? DEFAULT_MESSAGES[variant];
  const isLoading = variant === "loading";

  return (
    <div
      role={isLoading ? "status" : undefined}
      aria-live={isLoading ? "polite" : undefined}
      className={cn("flex flex-col items-center justify-center max-w-md mx-auto px-4 py-8", className)}
    >
      <PieceComponent />
      <p className="mt-3 font-mono text-sm text-muted-foreground">{resolvedMessage}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Placeholder;
