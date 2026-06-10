import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./SectionContainer";

type SectionPanelVariant =
  | "pricing"
  | "testimonials"
  | "support"
  | "faq"
  | "cta"
  | "footer";

type SectionPanelProps = HTMLAttributes<HTMLElement> & {
  variant: SectionPanelVariant;
  containerSize?: "default" | "wide";
  fullWidth?: boolean;
  children: ReactNode;
};

export function SectionPanel({
  variant,
  containerSize = "default",
  fullWidth = false,
  className,
  children,
  ...props
}: SectionPanelProps) {
  if (fullWidth) {
    return (
      <section
        className={cn("section-full-bleed", `section-full-bleed--${variant}`, className)}
        {...props}
      >
        {children}
      </section>
    );
  }

  return (
    <section className={cn("section-stack-item", className)} {...props}>
      <SectionContainer size={containerSize}>
        <div className={cn("section-panel", `section-panel--${variant}`)}>{children}</div>
      </SectionContainer>
    </section>
  );
}

export function SectionFullInner({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("section-full-inner", className)}>{children}</div>;
}
