import logoDark from "@/assets/logo-ia-divulgadora-horizontal.png";
import logoLight from "@/assets/logo-ia-divulgadora-light.png";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  const sharedClass = cn("w-auto object-contain object-left", className);

  return (
    <span className="inline-block leading-none">
      <img
        src={logoDark}
        alt="IA Divulgadora"
        className={cn(sharedClass, "brand-logo brand-logo--dark")}
        draggable={false}
      />
      <img
        src={logoLight}
        alt="IA Divulgadora"
        className={cn(sharedClass, "brand-logo brand-logo--light")}
        draggable={false}
      />
    </span>
  );
}
