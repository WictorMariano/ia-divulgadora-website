"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

/** Cores laranja + azul — só visível no light via CSS (`modes-section__animated-bg`). */
const MODES_LIGHT_GRADIENT = {
  firstColor: "249, 115, 22",
  secondColor: "56, 189, 248",
  thirdColor: "251, 146, 60",
  fourthColor: "14, 165, 233",
  fifthColor: "234, 88, 12",
  pointerColor: "56, 189, 248",
  gradientBackgroundStart: "#ffffff",
  gradientBackgroundEnd: "#f4f6fb",
  blendingValue: "soft-light",
  size: "62%",
} as const;

export function ModesSectionBackground() {
  return (
    <BackgroundGradientAnimation
      {...MODES_LIGHT_GRADIENT}
      interactive
      containerClassName="modes-section__animated-bg absolute inset-0 z-0"
    />
  );
}
