import * as React from "react";
import { Children, cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number;
}

function cloneMarqueeTrack(children: React.ReactNode, keyPrefix: string) {
  return Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child;
    return cloneElement(child, { key: `${keyPrefix}-${String(child.key ?? index)}` });
  });
}

export function Marquee({
  children,
  pauseOnHover = true,
  direction = "left",
  speed = 35,
  className,
  ...props
}: MarqueeProps) {
  const track = Children.toArray(children);

  return (
    <div className={cn("w-full overflow-hidden", className)} {...props}>
      <div className="relative flex w-full overflow-hidden py-3 md:py-3.5">
        <div
          className={cn(
            "flex w-max animate-marquee",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse",
          )}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          <div className="flex shrink-0 items-center">{track}</div>
          <div className="flex shrink-0 items-center" aria-hidden="true">
            {cloneMarqueeTrack(track, "dup")}
          </div>
        </div>
      </div>
    </div>
  );
}
