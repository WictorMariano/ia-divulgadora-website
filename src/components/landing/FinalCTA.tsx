import { SectionContainer } from "./SectionContainer";
import { CtaButton } from "@/components/ui/cta-button";

export function FinalCTA() {
  return (
    <section className="relative border-t border-white/5 py-24">
      <SectionContainer>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-cta/25 bg-white/[0.03] p-12 text-center backdrop-blur-sm md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-64 -translate-x-1/2 rounded-full bg-cta/20 blur-3xl"
          />
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pare de postar na mão.{" "}
            <span className="section-title-gradient">Comece a lucrar.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-pretty text-sm text-zinc-200">
            Junte-se a mais de 10 mil afiliados que escalaram suas operações com a IA Divulgadora.
          </p>
          <CtaButton href="#planos" size="lg">
            Garantir meu acesso
          </CtaButton>
        </div>
      </SectionContainer>
    </section>
  );
}
