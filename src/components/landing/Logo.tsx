import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <img
      src={logo}
      alt="IA Divulgadora"
      className={cn("h-8 w-auto max-w-[min(100%,220px)] object-contain object-left sm:h-9", className)}
      draggable={false}
    />
  );
}
