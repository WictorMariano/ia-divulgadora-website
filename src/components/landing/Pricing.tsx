"use client";

import { Check, MessageCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionFullInner, SectionPanel } from "./SectionPanel";
import { PricingShaderCanvas } from "./PricingShaderCanvas";

type BillingCycle = "mensal" | "anual";
type PlanFeature = string | { type: "spacer" };

type PlanConfig = {
  id: string;
  label: string;
  name: string;
  prices: Record<BillingCycle, string>;
  tagline: string;
  features: PlanFeature[];
  highlight?: boolean;
  highlightBadge?: string;
  primaryCta: string;
  secondaryCta?: string;
  secondaryStyle?: "outline-blue" | "outline-green";
};

const planConfigs: PlanConfig[] = [
  {
    id: "iniciante",
    label: "Pra quem tá começando",
    name: "Afiliado Iniciante",
    prices: { mensal: "R$ 69,90", anual: "R$ 59,90" },
    tagline: "Comece a divulgar sem limite.",
    features: [
      "Gerador de ofertas sem limite",
      "Links de afiliado automáticos",
      "Imagens para Instagram",
      "Vitrine personalizada",
      "Promoções no WhatsApp",
    ],
    primaryCta: "Assinar",
    secondaryCta: "Começar grátis",
    secondaryStyle: "outline-blue",
  },
  {
    id: "pro",
    label: "Pra quem tá crescendo",
    name: "Afiliado Pro",
    prices: { mensal: "R$ 99,00", anual: "R$ 79,20" },
    tagline: "Automatize seus grupos.",
    features: [
      "Disparo para 3 grupos",
      "Gestão de Leads",
      "Monitoramento",
      "Modo Clone + Link Preview",
      { type: "spacer" },
      "Filas e agendamento",
      "Fura Fila + Marcar Todos",
      "Segmentação por nicho",
      "SubID por marketplace",
      "Instagram Responde Comentários/storys/reels",
    ],
    primaryCta: "Assinar",
  },
  {
    id: "creators",
    label: "Pra quem tá escalando",
    name: "Creators",
    prices: { mensal: "R$ 179,90", anual: "R$ 143,90" },
    tagline: "Recursos para operar em escala:",
    highlight: true,
    highlightBadge: "Mais escolhido",
    features: [
      "Disparo para 10 grupos",
      "Gestão de Leads",
      "Monitoramento",
      "Modo Clone + Link Preview",
      { type: "spacer" },
      "Filas e agendamento",
      "Fura Fila + Marcar Todos",
      "Segmentação por nicho",
      "SubID por marketplace",
      "Instagram Responde Comentários/storys/reels",
      "Conexão extra por R$ 29,90",
    ],
    primaryCta: "Assinar",
  },
];

const enterprisePrices: Record<BillingCycle, string> = {
  mensal: "R$ 300",
  anual: "R$ 240",
};

const enterpriseGroupOptions = [25, 50, 100, 200, 300];

const glassCardBase =
  "relative flex h-full flex-col rounded-2xl border p-6 text-left shadow-xl backdrop-blur-[14px] backdrop-brightness-[0.91] transition-all duration-300 bg-gradient-to-br from-white/10 to-white/5 border-white/10";

function BillingToggle({
  billing,
  onChange,
}: {
  billing: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}) {
  return (
    <div className="mb-10 flex justify-center">
      <div className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 p-1 shadow-lg backdrop-blur-md">
        <button
          type="button"
          onClick={() => onChange("mensal")}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-semibold transition-all",
            billing === "mensal"
              ? "bg-white/95 text-black shadow-sm"
              : "text-white/70 hover:text-white",
          )}
        >
          Mensal
        </button>
        <button
          type="button"
          onClick={() => onChange("anual")}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-semibold transition-all",
            billing === "anual"
              ? "bg-white/95 text-black shadow-sm"
              : "text-white/70 hover:text-white",
          )}
        >
          Anual{" "}
          <span
            className={cn(
              "text-xs font-medium",
              billing === "anual" ? "text-emerald-600" : "text-emerald-300",
            )}
          >
            (Economize até 20%)
          </span>
        </button>
      </div>
    </div>
  );
}

function FeatureList({ features }: { features: PlanFeature[] }) {
  return (
    <ul className="space-y-2.5">
      {features.map((feature, i) => {
        if (typeof feature === "object" && feature.type === "spacer") {
          return <li key={`spacer-${i}`} className="h-2" aria-hidden />;
        }
        return (
          <li key={String(feature)} className="flex items-start gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-cyan-400" strokeWidth={2.5} />
            <span className="pricing-feature-text text-sm leading-snug">{feature}</span>
          </li>
        );
      })}
    </ul>
  );
}

function PriceDivider() {
  return <div className="pricing-card-divider my-5 h-px w-full" aria-hidden />;
}

function EnterpriseCard({ billing }: { billing: BillingCycle }) {
  const [groups, setGroups] = useState(25);
  const sliderIndex = enterpriseGroupOptions.indexOf(groups);

  return (
    <article className={glassCardBase}>
      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
        Pra creators e times
      </span>
      <h3 className="mt-2 font-display text-2xl font-light tracking-tight text-cyan-300">
        Empresarial
      </h3>

      <div className="mt-4 flex flex-wrap items-baseline gap-1">
        <span className="text-sm text-white/60">a partir de</span>
        <span className="font-display text-4xl font-extralight tracking-tight text-white">
          {enterprisePrices[billing]}
        </span>
        <span className="text-sm text-white/60">/mês</span>
      </div>
      {billing === "anual" && (
        <p className="mt-1 text-xs text-emerald-300">Valor mensal equivalente no plano anual</p>
      )}

      <p className="pricing-feature-text mt-3 text-sm">Estrutura para alto volume:</p>

      <PriceDivider />

      <div className="rounded-xl border border-white/10 bg-black/20 p-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-white/80">Grupos de Envio</span>
          <span className="font-bold text-cyan-300">{groups}</span>
        </div>
        <input
          type="range"
          min={0}
          max={enterpriseGroupOptions.length - 1}
          step={1}
          value={sliderIndex >= 0 ? sliderIndex : 0}
          onChange={(e) => setGroups(enterpriseGroupOptions[Number(e.target.value)] ?? 25)}
          className="pricing-slider mt-3 w-full"
          style={
            {
              "--slider-progress": `${(sliderIndex / (enterpriseGroupOptions.length - 1)) * 100}%`,
            } as React.CSSProperties
          }
          aria-label="Quantidade de grupos de envio"
        />
        <div className="mt-2 flex justify-between text-[10px] text-white/45">
          {enterpriseGroupOptions.map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      </div>

      <ul className="mt-5 flex-1 space-y-2.5">
        {[
          `Disparo para ${groups} grupos no WhatsApp`,
          "2 números conectados no WhatsApp",
          "Infra dedicada",
          "Consultoria de setup",
          "Conexão extra por R$ 29,90",
        ].map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-cyan-400" strokeWidth={2.5} />
            <span className="pricing-feature-text text-sm leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-2.5">
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-white/5 text-sm font-semibold text-emerald-300 backdrop-blur-sm transition-colors hover:bg-white/10"
        >
          <MessageCircle className="size-4" />
          Falar com consultor
        </a>
        <button type="button" className="btn-primary h-11 w-full normal-case tracking-normal">
          Assinar
        </button>
      </div>
    </article>
  );
}

function PlanCard({ plan, billing }: { plan: PlanConfig; billing: BillingCycle }) {
  return (
    <article
      className={cn(
        glassCardBase,
        plan.highlight &&
          "z-10 scale-[1.02] border-cyan-400/30 bg-gradient-to-br from-white/[0.18] to-white/[0.08] shadow-2xl ring-2 ring-cyan-400/20",
      )}
    >
      {plan.highlightBadge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-lg">
          {plan.highlightBadge}
        </div>
      )}

      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
        {plan.label}
      </span>
      <h3 className="mt-2 font-display text-2xl font-light tracking-tight text-cyan-300">
        {plan.name}
      </h3>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-display text-4xl font-extralight tracking-tight text-white">
          {plan.prices[billing]}
        </span>
        <span className="text-sm text-white/60">/mês</span>
      </div>
      {billing === "anual" && (
        <p className="mt-1 text-xs text-emerald-300">Valor mensal equivalente no plano anual</p>
      )}

      <p className="pricing-feature-text mt-3 text-sm">{plan.tagline}</p>

      <PriceDivider />

      <div className="flex-1">
        <FeatureList features={plan.features} />
      </div>

      <div className="mt-6 space-y-2.5">
        {plan.secondaryCta && (
          <button
            type="button"
            className={cn(
              "h-11 w-full rounded-xl border text-sm font-semibold backdrop-blur-sm transition-colors",
              plan.secondaryStyle === "outline-green"
                ? "border-emerald-400/30 bg-white/5 text-emerald-300 hover:bg-white/10"
                : "border-cyan-400/30 bg-white/5 text-cyan-300 hover:bg-white/10",
            )}
          >
            {plan.secondaryCta}
          </button>
        )}
        <button
          type="button"
          className={cn(
            "h-11 w-full rounded-xl text-sm font-bold text-white transition-all hover:brightness-110",
            plan.highlight
              ? "bg-gradient-to-r from-orange-500 to-orange-600 shadow-[0_0_24px_-6px_rgba(251,146,60,0.5)]"
              : "bg-gradient-to-r from-orange-500 to-orange-600",
          )}
        >
          {plan.primaryCta}
        </button>
      </div>
    </article>
  );
}

export function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>("mensal");

  return (
    <SectionPanel id="planos" variant="pricing" fullWidth>
      <PricingShaderCanvas />
      <SectionFullInner className="relative z-10 py-14 md:py-20">
        <div className="mb-8 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300 backdrop-blur-sm">
            Planos
          </span>
          <h2 className="font-display text-balance text-3xl font-extralight leading-tight tracking-tight sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Escolha o plano ideal para sua operação
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
            Cancele quando quiser. Acesso imediato após assinatura.
          </p>
        </div>

        <BillingToggle billing={billing} onChange={setBilling} />

        <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {planConfigs.map((plan) => (
            <PlanCard key={plan.id} plan={plan} billing={billing} />
          ))}
          <EnterpriseCard billing={billing} />
        </div>
      </SectionFullInner>
    </SectionPanel>
  );
}
