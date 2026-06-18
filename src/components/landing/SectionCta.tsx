import { CtaButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";

type SectionCtaProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export function SectionCta({ className, size = "lg" }: SectionCtaProps) {
  return (
    <div className={cn("mt-10 flex justify-center md:mt-12", className)}>
      <CtaButton href="#planos" size={size}>
        Começar gratuitamente
      </CtaButton>
    </div>
  );
}
