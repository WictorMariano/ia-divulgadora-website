import { MessageCircle } from "lucide-react";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionFullInner } from "../SectionPanel";

type ClosingCtaProps = {
  embedded?: boolean;
};

export function ClosingCta({ embedded = false }: ClosingCtaProps) {
  const content = (
    <div className="mx-auto max-w-xl text-center">
      <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
        Pronto para vender mais com automação?
      </h2>
      <p className="closing-copy-muted mx-auto mt-4 max-w-md text-sm leading-relaxed sm:text-base">
        Junte-se aos afiliados que já utilizam a IA Divulgadora para divulgar ofertas
        automaticamente.
      </p>
      <CtaButton
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        icon={MessageCircle}
        showArrow={false}
        size="lg"
        className="mt-8"
      >
        Falar com Especialista
      </CtaButton>
    </div>
  );

  if (embedded) {
    return <div className="closing-cta-embedded relative z-10">{content}</div>;
  }

  return (
    <section className="section-full-bleed section-full-bleed--cta">
      <div className="section-panel section-panel--full section-panel--cta">
        <SectionFullInner className="relative z-10 py-14 text-center md:py-16">
          {content}
        </SectionFullInner>
      </div>
    </section>
  );
}
