"use client";

import { Check, MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CtaButton } from "@/components/ui/cta-button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./SectionContainer";

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

const enterpriseGroupOptions = [25, 50, 100, 200, 300] as const;

type EnterpriseGroupTier = (typeof enterpriseGroupOptions)[number];

const enterpriseTiers: Record<
  EnterpriseGroupTier,
  { priceMensal: number; connections: number }
> = {
  25: { priceMensal: 300, connections: 2 },
  50: { priceMensal: 497, connections: 4 },
  100: { priceMensal: 797, connections: 8 },
  200: { priceMensal: 1397, connections: 20 },
  300: { priceMensal: 1997, connections: 30 },
};

const ANNUAL_DISCOUNT = 0.2;
const ANNUAL_DISCOUNT_PERCENT = 20;

function formatPlanPrice(value: number): string {
  const hasDecimals = Math.round(value * 100) % 100 !== 0;
  return `R$ ${value.toLocaleString("pt-BR", {
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  })}`;
}

function getEnterpriseTier(groups: EnterpriseGroupTier) {
  return enterpriseTiers[groups];
}

function getEnterprisePrice(groups: EnterpriseGroupTier, billing: BillingCycle): string {
  const { priceMensal } = getEnterpriseTier(groups);
  const value = billing === "anual" ? priceMensal * (1 - ANNUAL_DISCOUNT) : priceMensal;
  return formatPlanPrice(value);
}

function BillingToggle({
  billing,
  onChange,
}: {
  billing: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}) {
  return (
    <div className="pricing-billing-toggle mb-10 flex justify-center">
      <ToggleGroup
        type="single"
        value={billing}
        onValueChange={(value) => {
          if (value === "mensal" || value === "anual") onChange(value);
        }}
        aria-label="Selecionar ciclo de cobrança"
        className="rounded-xl border border-white/15 bg-white/5 p-1"
      >
        <ToggleGroupItem
          value="mensal"
          aria-label="Cobrança mensal"
          className="rounded-lg px-5 py-2 text-sm font-semibold text-[var(--site-text-muted)] transition-all data-[state=on]:bg-cta/15 data-[state=on]:text-white data-[state=on]:shadow-sm data-[state=on]:ring-1 data-[state=on]:ring-cta/35"
        >
          Mensal
        </ToggleGroupItem>
        <ToggleGroupItem
          value="anual"
          aria-label="Cobrança anual"
          className="relative rounded-lg px-5 py-2 text-sm font-semibold text-[var(--site-text-muted)] transition-all data-[state=on]:bg-cta/15 data-[state=on]:text-white data-[state=on]:shadow-sm data-[state=on]:ring-1 data-[state=on]:ring-cta/35"
        >
          Anual
          <span className="absolute -top-3 right-0 whitespace-nowrap rounded-full bg-emerald-500/15 px-1.5 text-[10px] font-semibold text-emerald-400">
            Economize {ANNUAL_DISCOUNT_PERCENT}%
          </span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

function FeatureItem({ name }: { name: string }) {
  return (
    <li className="flex items-start gap-2.5 py-1.5">
      <span className="pricing-feature-check mt-0.5" aria-hidden>
        <Check className="size-3" strokeWidth={2.75} />
      </span>
      <span className="pricing-feature-text text-sm leading-snug">{name}</span>
    </li>
  );
}

function PlanPrice({
  price,
  billing,
  mensalPrice,
}: {
  price: string;
  billing: BillingCycle;
  mensalPrice?: string;
}) {
  return (
    <div className="mt-4 text-center">
      <p className="pricing-plan-price text-4xl font-extrabold tracking-tight sm:text-[2.5rem]">
        {price}
        <span className="text-lg font-semibold text-[var(--site-text-muted)]"> /mês</span>
      </p>
      {billing === "anual" && mensalPrice && (
        <>
          <p className="mt-1 text-xs text-emerald-400">
            Valor mensal equivalente no plano anual
          </p>
          <p className="mt-1 text-xs text-[var(--site-text-subtle)] line-through opacity-70">
            {mensalPrice}/mês
          </p>
        </>
      )}
    </div>
  );
}

function PlanCard({ plan, billing }: { plan: PlanConfig; billing: BillingCycle }) {
  const isFeatured = Boolean(plan.highlight);

  return (
    <Card
      className={cn(
        "pricing-plan-card relative flex h-full flex-col overflow-visible border-white/10 bg-black/35 text-white shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/30",
        isFeatured && "pricing-plan-card--featured z-10 border-cta/40 ring-1 ring-cta/30 md:scale-[1.02]",
      )}
    >
      {plan.highlightBadge && (
        <span className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
          {plan.highlightBadge}
        </span>
      )}

      <CardHeader className="p-6 pb-0 text-center">
        <span className="site-subtle text-[10px] font-bold uppercase tracking-[0.16em]">
          {plan.label}
        </span>
        <CardTitle className="pricing-plan-name mt-2 text-2xl font-bold sm:text-[1.65rem]">
          {plan.name}
        </CardTitle>

        <PlanPrice
          price={plan.prices[billing]}
          billing={billing}
          mensalPrice={plan.prices.mensal}
        />

        <CardDescription className="site-copy mx-auto mt-3 max-w-[16rem] text-sm">
          {plan.tagline}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow px-6 pb-0 pt-5">
        <div className="pricing-card-divider mb-4 h-px w-full" aria-hidden />

        <ul className="list-none space-y-0">
          {plan.features.map((feature, index) => {
            if (typeof feature === "object" && feature.type === "spacer") {
              return <li key={`spacer-${index}`} className="h-2" aria-hidden />;
            }
            return <FeatureItem key={String(feature)} name={feature} />;
          })}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto flex-col gap-2.5 p-6 pt-5">
        {plan.secondaryCta && (
          <button
            type="button"
            className="site-lead h-11 w-full rounded-xl border border-sky-400/35 bg-transparent text-sm font-semibold text-sky-300 transition-colors hover:border-sky-400/55 hover:bg-sky-400/10"
          >
            {plan.secondaryCta}
          </button>
        )}
        <CtaButton fullWidth size="sm" showArrow={false}>
          {plan.primaryCta}
        </CtaButton>
      </CardFooter>
    </Card>
  );
}

function EnterpriseCard({ billing }: { billing: BillingCycle }) {
  const [groups, setGroups] = useState<EnterpriseGroupTier>(25);
  const sliderIndex = enterpriseGroupOptions.indexOf(groups);
  const tier = getEnterpriseTier(groups);
  const enterpriseFeatures = [
    `Disparo para ${groups} grupos no WhatsApp`,
    `${tier.connections} números conectados no WhatsApp`,
    "Infra dedicada",
    "Consultoria de setup",
    "Conexão extra por R$ 29,90",
  ];

  return (
    <Card className="pricing-plan-card flex h-full flex-col border-white/10 bg-black/35 text-white shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/30">
      <CardHeader className="p-6 pb-0 text-center">
        <span className="site-subtle text-[10px] font-bold uppercase tracking-[0.16em]">
          Pra creators e times
        </span>
        <CardTitle className="pricing-plan-name mt-2 text-2xl font-bold sm:text-[1.65rem]">
          Empresarial
        </CardTitle>

        <div className="mt-4 text-center">
          <p className="text-sm text-[var(--site-text-muted)]">a partir de</p>
          <p className="pricing-plan-price text-4xl font-extrabold tracking-tight sm:text-[2.5rem]">
            {getEnterprisePrice(groups, billing)}
            <span className="text-lg font-semibold text-[var(--site-text-muted)]"> /mês</span>
          </p>
          {billing === "anual" && (
            <p className="mt-1 text-xs text-emerald-400">Valor mensal equivalente no plano anual</p>
          )}
        </div>

        <CardDescription className="site-copy mx-auto mt-3 max-w-[16rem] text-sm">
          Estrutura para alto volume:
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow px-6 pb-0 pt-5">
        <div className="pricing-card-divider mb-4 h-px w-full" aria-hidden />

        <div className="rounded-xl border border-white/10 bg-black/30 p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="site-copy font-semibold">Grupos de Envio</span>
            <span className="font-bold text-cta">{groups}</span>
          </div>
          <input
            type="range"
            min={0}
            max={enterpriseGroupOptions.length - 1}
            step={1}
            value={sliderIndex >= 0 ? sliderIndex : 0}
            onChange={(e) =>
              setGroups(enterpriseGroupOptions[Number(e.target.value)] ?? 25)
            }
            className="pricing-slider pricing-slider--cta mt-3 w-full"
            style={
              {
                "--slider-progress": `${(sliderIndex / (enterpriseGroupOptions.length - 1)) * 100}%`,
              } as React.CSSProperties
            }
            aria-label="Quantidade de grupos de envio"
          />
          <div className="site-subtle mt-2 flex justify-between text-[10px]">
            {enterpriseGroupOptions.map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
        </div>

        <ul className="mt-5 list-none space-y-0">
          {enterpriseFeatures.map((feature) => (
            <FeatureItem key={feature} name={feature} />
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto flex-col gap-2.5 p-6 pt-5">
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="site-lead flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/35 bg-transparent text-sm font-semibold text-emerald-300 transition-colors hover:border-emerald-500/55 hover:bg-emerald-500/10"
        >
          <MessageCircle className="size-4" />
          Falar com consultor
        </a>
        <CtaButton fullWidth size="sm" showArrow={false}>
          Assinar
        </CtaButton>
      </CardFooter>
    </Card>
  );
}

export function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>("mensal");

  return (
    <section
      id="planos"
      className="panel-showcase relative overflow-x-clip border-t border-white/8 py-12 md:py-24"
    >
      <div aria-hidden className="panel-showcase-lights pointer-events-none absolute inset-0 overflow-hidden">
        <div className="panel-showcase-light panel-showcase-light--blue" />
        <div className="panel-showcase-light panel-showcase-light--orange" />
        <div className="panel-showcase-vignette" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,color-mix(in_oklab,var(--cta)_10%,transparent),transparent_55%)]"
      />

      <SectionContainer className="relative z-10">
        <div className="mb-8 text-center">
          <div className="section-badge mx-auto mb-5 w-fit backdrop-blur-sm">
            <Sparkles className="size-3.5" strokeWidth={2.5} />
            <span>Planos</span>
          </div>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Escolha o plano ideal para sua{" "}
            <span className="section-title-gradient">operação</span>
          </h2>
          <p className="site-copy mx-auto mt-4 max-w-2xl text-sm sm:text-base">
            Cancele quando quiser. Acesso imediato após assinatura.
          </p>
        </div>

        <BillingToggle billing={billing} onChange={setBilling} />

        <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-5 xl:grid-cols-4 xl:gap-6">
          {planConfigs.map((plan) => (
            <PlanCard key={plan.id} plan={plan} billing={billing} />
          ))}
          <EnterpriseCard billing={billing} />
        </div>
      </SectionContainer>
    </section>
  );
}
