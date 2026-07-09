import logoDark from "@/assets/logo-ia-divulgadora-horizontal.png";
import logoLight from "@/assets/logo-ia-divulgadora-light.png";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <span className={cn("brand-logo-wrap inline-block leading-none", className)}>
      <img
        src={logoDark}
        alt="IA Divulgadora"
        className="brand-logo brand-logo--dark h-full w-auto max-w-full object-contain object-left"
        draggable={false}
      />
      <img
        src={logoLight}
        alt="IA Divulgadora"
        className="brand-logo brand-logo--light h-full w-auto max-w-full object-contain object-left"
        draggable={false}
      />
    </span>
  );
}
