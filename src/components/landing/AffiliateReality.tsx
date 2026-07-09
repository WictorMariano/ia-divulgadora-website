"use client";

import {
  AlarmClock,
  Banknote,
  BarChart3,
  ChartNoAxesColumnDecreasing,
  Search,
  ShieldAlert,
  TrendingDown,
  Zap,
} from "lucide-react";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { useTheme } from "@/components/theme/ThemeProvider";
import { SectionContainer } from "./SectionContainer";
import { SectionCta } from "./SectionCta";

function MonitoringChart() {
  return (
    <div className="bento-card__chart" aria-hidden>
      <svg viewBox="0 0 120 64" className="h-full w-full" fill="none">
        <path
          d="M4 48 L24 40 L44 44 L64 28 L84 32 L104 12 L116 8"
          stroke="rgb(249 115 22)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="104" cy="12" r="3" fill="rgb(249 115 22)" />
      </svg>
      <p className="bento-card__chart-label">70% oportunidades perdidas</p>
    </div>
  );
}

const darkRealityItems: BentoItem[] = [
  {
    title: "Monitoramento manual",
    meta: "70% perdidas",
    status: "Crítico",
    description:
      "Horas pesquisando ofertas em dezenas de marketplaces — sem garantia de pegar as melhores oportunidades a tempo.",
    icon: <Search className="size-4 text-cta" strokeWidth={2} />,
    tags: ["Marketplaces", "24h", "Manual"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Perda de tempo",
    meta: "4h+/dia",
    status: "Diário",
    description:
      "Criar links, formatar posts e disparar em grupos manualmente consome o dia que deveria ir para escala.",
    icon: <AlarmClock className="size-4 text-orange-400" strokeWidth={2} />,
    tags: ["Links", "Posts", "Grupos"],
  },
  {
    title: "Baixa conversão",
    meta: "−40% comissões",
    status: "Recorrente",
    description:
      "Sem divulgação constante e estratégica, o potencial de receita fica muito abaixo do que você poderia ter.",
    icon: <ChartNoAxesColumnDecreasing className="size-4 text-amber-400" strokeWidth={2} />,
    tags: ["Divulgação", "Escala"],
  },
  {
    title: "Dinheiro na mesa",
    meta: "todo dia",
    status: "Alto risco",
    description:
      "Afiliados perdem até 70% das melhores ofertas por não conseguirem acompanhar todos os canais o tempo todo.",
    icon: <TrendingDown className="size-4 text-red-400" strokeWidth={2} />,
    tags: ["Receita", "Oportunidades"],
    colSpan: 2,
  },
  {
    title: "Automação resolve",
    meta: "24/7",
    status: "Com IA Divulgadora",
    description:
      "Monitoramento contínuo, envios inteligentes e mais conversões — sem você ficar preso na operação manual.",
    icon: <Zap className="size-4 text-cta" strokeWidth={2} />,
    tags: ["Automação", "IA", "Escala"],
    colSpan: 3,
    isSolution: true,
    hasPersistentHover: true,
  },
];

const lightRealityItems: BentoItem[] = [
  {
    title: "Monitoramento manual",
    status: "70% perdidos",
    description:
      "Horas pesquisando ofertas em dezenas de marketplaces — sem garantia de pegar as melhores oportunidades a tempo.",
    icon: <Search className="size-4 text-cta" strokeWidth={2} />,
    tags: ["Marketplaces", "24h", "Manual"],
    colSpan: 2,
    theme: "orange",
    decoration: <MonitoringChart />,
  },
  {
    title: "Perda de tempo",
    status: "dia após dia",
    description:
      "Criar links, formatar posts e disparar em grupos manualmente consome o dia que deveria ir para escala.",
    icon: <AlarmClock className="size-4 text-orange-400" strokeWidth={2} />,
    tags: ["Links", "Posts", "Grupos"],
    theme: "sky",
  },
  {
    title: "Baixa conversão",
    status: "−40% comissões",
    description:
      "Sem divulgação constante e estratégica, o potencial de receita fica muito abaixo do que você poderia ter.",
    icon: <ChartNoAxesColumnDecreasing className="size-4 text-emerald-500" strokeWidth={2} />,
    tags: ["Divulgação", "Escala"],
    theme: "emerald",
  },
  {
    title: "Dinheiro na mesa",
    status: "todo dia",
    description:
      "Ofertas quentes passam sem você ver — e cada uma é comissão que não entra no seu bolso.",
    icon: <Banknote className="size-4 text-violet-500" strokeWidth={2} />,
    tags: ["Receita", "Oportunidades"],
    theme: "violet",
  },
  {
    title: "Alto risco",
    status: "invisível",
    description:
      "Links quebrados, grupos lotados e disparos desorganizados corroem sua operação sem você perceber.",
    icon: <ShieldAlert className="size-4 text-rose-500" strokeWidth={2} />,
    tags: ["Links", "Grupos", "Risco"],
    theme: "rose",
  },
  {
    title: "Automação resolve 24/7",
    status: "Com IA Divulgadora",
    description:
      "Monitoramento contínuo, envios inteligentes e mais conversões — sem você ficar preso na operação manual.",
    icon: <Zap className="size-4 text-cta" strokeWidth={2} />,
    tags: ["Automação", "IA", "Escala"],
    colSpan: 3,
    theme: "cta",
    isSolution: true,
  },
];

export function AffiliateReality() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const realityItems = isLight ? lightRealityItems : darkRealityItems;

  return (
    <section className="affiliate-reality-section panel-showcase relative overflow-hidden border-t border-white/8 py-12 md:py-24">
      <div
        aria-hidden
        className="affiliate-reality-section__lights panel-showcase-lights pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="panel-showcase-light panel-showcase-light--blue" />
        <div className="panel-showcase-light panel-showcase-light--orange" />
        <div className="panel-showcase-light panel-showcase-light--blue-soft" />
        <div className="panel-showcase-vignette" />
      </div>

      <div
        aria-hidden
        className="affiliate-reality-section__glow pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,color-mix(in_oklab,var(--cta)_8%,transparent),transparent_55%)]"
      />

      <SectionContainer className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="affiliate-reality-section__badge section-badge mx-auto mb-5 w-fit backdrop-blur-sm">
            <BarChart3 className="size-3.5" strokeWidth={2.5} />
            <span>A realidade do afiliado hoje</span>
          </div>

          <h2 className="affiliate-reality-section__title text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Você está perdendo{" "}
            <span className="section-title-gradient">dinheiro todos os dias</span>
          </h2>

          <p className="affiliate-reality-section__subtitle site-lead mx-auto mt-4 max-w-2xl text-pretty text-sm sm:text-base">
            Pesquisas mostram que afiliados perdem até{" "}
            <span className="font-bold text-orange-400">70%</span> das melhores ofertas por não
            conseguirem acompanhar todos os marketplaces 24 horas por dia.
          </p>
        </div>

        <BentoGrid items={realityItems} className="mt-10 md:mt-14" />

        <div className="mx-auto mt-8 max-w-3xl md:mt-10">
          <div className="summary-callout relative z-10 flex flex-col items-center gap-4 rounded-2xl border border-cta/25 bg-black/40 px-5 py-5 text-center shadow-[0_0_40px_-20px_color-mix(in_oklab,var(--cta)_35%,transparent)] backdrop-blur-sm sm:flex-row sm:gap-5 sm:px-6 sm:text-left md:py-6">
            <div className="summary-callout__icon flex size-12 shrink-0 items-center justify-center rounded-xl border border-cta/25 bg-cta/10 text-cta shadow-[0_0_24px_-6px_color-mix(in_oklab,var(--cta)_40%,transparent)]">
              <Banknote className="size-6" strokeWidth={1.75} />
            </div>
            <p className="summary-callout-text text-sm leading-relaxed sm:text-base">
              <span>Não é falta de esforço.</span>{" "}
              <span className="summary-callout-highlight">É falta de automação.</span>{" "}
              <span>A IA Divulgadora resolve isso para você.</span>
            </p>
          </div>
        </div>

        <div className="affiliate-reality-cta">
          <SectionCta />
          {isLight ? (
            <ul className="affiliate-reality-cta__notes mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-zinc-400">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">✓</span>
                Sem cartão de crédito
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">✓</span>
                Setup em 2 minutos
              </li>
            </ul>
          ) : null}
        </div>
      </SectionContainer>
    </section>
  );
}
