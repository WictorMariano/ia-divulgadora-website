import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide";
};

export function SectionContainer({
  className,
  size = "default",
  children,
  ...props
}: SectionContainerProps) {
  return (
    <div
      className={cn(size === "wide" ? "landing-container-wide" : "landing-container", className)}
      {...props}
    >
      {children}
    </div>
  );
}
