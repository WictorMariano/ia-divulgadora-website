import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, type LucideIcon } from "lucide-react";

type CtaButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
  icon?: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline";
  fullWidth?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href">;

export function CtaButton({
  href,
  children,
  className,
  showArrow = true,
  icon: Icon,
  size = "md",
  variant = "primary",
  fullWidth = false,
  type = "button",
  ...props
}: CtaButtonProps) {
  const wrapperClass = cn(
    variant === "outline" ? "cta-outline-button" : "cta-glow-button",
    variant === "primary" && size === "sm" && "cta-glow-button--sm",
    variant === "primary" && size === "lg" && "cta-glow-button--lg",
    variant === "outline" && size === "sm" && "cta-outline-button--sm",
    variant === "outline" && size === "lg" && "cta-outline-button--lg",
    fullWidth && "cta-glow-button--full",
    className,
  );

  const label = (
    <span className={variant === "outline" ? "cta-outline-button__label" : "cta-glow-button__label"}>
      {Icon && <Icon className="size-4 shrink-0" strokeWidth={2.25} />}
      <span>{children}</span>
      {showArrow && !Icon && variant === "primary" && (
        <ArrowRight className="size-4 shrink-0" />
      )}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={cn("group", wrapperClass)} {...props}>
        {label}
      </a>
    );
  }

  return (
    <button type={type} className={cn("group", wrapperClass)} {...props}>
      {label}
    </button>
  );
}
