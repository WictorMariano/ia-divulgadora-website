import { MessageCircle } from "lucide-react";
import { SectionFullInner, SectionPanel } from "../SectionPanel";

export function ClosingCta() {
  return (
    <SectionPanel variant="cta" fullWidth>
      <SectionFullInner className="relative z-10 py-14 text-center md:py-16">
        <div className="mx-auto max-w-xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Pronto para vender mais com automação?
          </h2>
          <p className="closing-copy-muted mx-auto mt-4 max-w-md text-sm leading-relaxed sm:text-base">
            Junte-se aos afiliados que já utilizam a IA Divulgadora para divulgar ofertas
            automaticamente.
          </p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-7 inline-flex h-12 items-center gap-2 px-8 normal-case tracking-normal"
          >
            <MessageCircle className="size-4" />
            Falar com Especialista
          </a>
        </div>
      </SectionFullInner>
    </SectionPanel>
  );
}
