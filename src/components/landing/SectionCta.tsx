import { CtaButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";

type SectionCtaProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
};

export function SectionCta({ className, size = "lg", href = "#planos" }: SectionCtaProps) {
  return (
    <div className={cn("mt-10 flex justify-center md:mt-12", className)}>
      <CtaButton href={href} size={size}>
        Começar gratuitamente
      </CtaButton>
    </div>
  );
}
