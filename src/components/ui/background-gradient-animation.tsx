"use client";

import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BackgroundGradientAnimationProps = {
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  size?: string;
  blendingValue?: string;
  children?: ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
};

export function BackgroundGradientAnimation({
  firstColor = "249, 115, 22",
  secondColor = "56, 189, 248",
  thirdColor = "251, 146, 60",
  fourthColor = "14, 165, 233",
  fifthColor = "234, 88, 12",
  pointerColor = "56, 189, 248",
  gradientBackgroundStart = "#ffffff",
  gradientBackgroundEnd = "#f8f9fc",
  size = "55%",
  blendingValue = "soft-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: BackgroundGradientAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const interactiveRef = useRef<HTMLDivElement>(null);
  const filterId = useId().replace(/:/g, "");

  const curXRef = useRef(0);
  const curYRef = useRef(0);
  const tgXRef = useRef(0);
  const tgYRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.setProperty("--gradient-background-start", gradientBackgroundStart);
    container.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    container.style.setProperty("--first-color", firstColor);
    container.style.setProperty("--second-color", secondColor);
    container.style.setProperty("--third-color", thirdColor);
    container.style.setProperty("--fourth-color", fourthColor);
    container.style.setProperty("--fifth-color", fifthColor);
    container.style.setProperty("--pointer-color", pointerColor);
    container.style.setProperty("--size", size);
    container.style.setProperty("--blending-value", blendingValue);
  }, [
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    gradientBackgroundStart,
    gradientBackgroundEnd,
    size,
    blendingValue,
  ]);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (!interactive) return;

    function animateMovement() {
      if (!interactiveRef.current) {
        animationFrameRef.current = requestAnimationFrame(animateMovement);
        return;
      }

      curXRef.current = curXRef.current + (tgXRef.current - curXRef.current) / 20;
      curYRef.current = curYRef.current + (tgYRef.current - curYRef.current) / 20;

      interactiveRef.current.style.transform = `translate(${Math.round(curXRef.current)}px, ${Math.round(curYRef.current)}px)`;
      animationFrameRef.current = requestAnimationFrame(animateMovement);
    }

    animationFrameRef.current = requestAnimationFrame(animateMovement);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [interactive]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    tgXRef.current = event.clientX - rect.left;
    tgYRef.current = event.clientY - rect.top;
  };

  return (
    <div
      ref={containerRef}
      aria-hidden
      onMouseMove={interactive ? handleMouseMove : undefined}
      className={cn("bg-gradient-anim", containerClassName)}
    >
      <svg className="hidden" aria-hidden>
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {children ? <div className={cn(className)}>{children}</div> : null}

      <div
        className={cn(
          "bg-gradient-anim__gradients",
          isSafari ? "bg-gradient-anim__gradients--safari" : undefined,
        )}
        style={
          isSafari
            ? undefined
            : ({ filter: `url(#${filterId}) blur(40px)` } as CSSProperties)
        }
      >
        <div className="bg-gradient-anim__blob bg-gradient-anim__blob--first animate-bg-gradient-first" />
        <div className="bg-gradient-anim__blob bg-gradient-anim__blob--second animate-bg-gradient-second" />
        <div className="bg-gradient-anim__blob bg-gradient-anim__blob--third animate-bg-gradient-third" />
        <div className="bg-gradient-anim__blob bg-gradient-anim__blob--fourth animate-bg-gradient-fourth" />
        <div className="bg-gradient-anim__blob bg-gradient-anim__blob--fifth animate-bg-gradient-fifth" />

        {interactive ? (
          <div ref={interactiveRef} className="bg-gradient-anim__pointer" />
        ) : null}
      </div>
    </div>
  );
}
