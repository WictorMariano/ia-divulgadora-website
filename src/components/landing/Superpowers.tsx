"use client";

import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BarChart3,
  History,
  Rocket,
  ScanSearch,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import leadsKpis from "@/assets/leads-kpis.jpg";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionContainer } from "./SectionContainer";
import { cn } from "@/lib/utils";

type FeatureTheme = "cta" | "orange" | "amber";

type LeadFeature = {
  icon: LucideIcon;
  theme: FeatureTheme;
  title: string;
  desc: string;
};

const leadFeatures: LeadFeature[] = [
  {
    icon: Wallet,
    theme: "cta",
    title: "CPL real",
    desc: "Veja o custo real por lead, considerando apenas quem ficou mais de 24h no grupo.",
  },
  {
    icon: TrendingUp,
    theme: "orange",
    title: "Retenção e LTV",
    desc: "Identifique os grupos que mais seguraram e valorizam seus leads ao longo do tempo.",
  },
  {
    icon: History,
    theme: "amber",
    title: "Movimentação completa",
    desc: "Histórico de entradas e saídas por grupo, dia a dia, com total transparência.",
  },
  {
    icon: AlertTriangle,
    theme: "orange",
    title: "Alerta de lotação",
    desc: "Saiba quando abrir outro grupo antes que você perca oportunidades.",
  },
  {
    icon: ScanSearch,
    theme: "amber",
    title: "Raio-X por grupo",
    desc: "Ativos, DDDs e desempenho individual em um só lugar.",
  },
  {
    icon: BarChart3,
    theme: "cta",
    title: "Grupos que mais performam",
    desc: "Descubra onde vale colocar mais tráfego e onde está perdendo lead.",
  },
];

function LeadFeatureCard({ feature }: { feature: LeadFeature }) {
  const Icon = feature.icon;

  return (
    <li className="nova-plataforma-features__item group">
      <div
        className={cn(
          "nova-plataforma-features__icon",
          `nova-plataforma-features__icon--${feature.theme}`,
        )}
      >
        <Icon className="size-4" strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <h4 className="nova-plataforma-features__title">{feature.title}</h4>
        <p className="nova-plataforma-features__desc">{feature.desc}</p>
      </div>
    </li>
  );
}

export function Superpowers() {
  return (
    <section
      id="superpoderes"
      className="grid-glow-section relative overflow-hidden border-t border-white/8 py-12 md:py-24"
    >
      <div aria-hidden className="grid-glow-section__glow" />

      <SectionContainer className="relative z-10">
        <div className="text-center">
          <div className="section-badge mx-auto mb-5 w-fit backdrop-blur-sm">
            <Sparkles className="size-3.5" strokeWidth={2.5} />
            <span>Exclusivo IA Divulgadora</span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Superpoderes que só a{" "}
            <span className="section-title-gradient">IA Divulgadora</span> tem
          </h2>
          <p className="site-copy mx-auto mt-3 max-w-xl text-pretty text-sm sm:text-base">
            Funcionalidades exclusivas para quem quer escalar de verdade
          </p>
        </div>

        <article className="relative mt-10 overflow-hidden rounded-2xl border border-cta/25 bg-black/35 p-5 shadow-[0_0_60px_-15px_color-mix(in_oklab,var(--cta)_30%,transparent)] backdrop-blur-sm md:mt-12 md:p-8">
          <span className="absolute right-0 top-0 z-10 rounded-bl-xl rounded-tr-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
            Novo
          </span>

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:gap-8 xl:gap-10">
            <div className="lg:py-2">
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-cta/25 bg-cta/10 text-cta shadow-[0_0_24px_-6px_color-mix(in_oklab,var(--cta)_40%,transparent)]">
                  <Users className="size-5" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">Gestão de Leads</h3>
              </div>

              <p className="site-lead mt-4 text-sm font-medium leading-relaxed sm:text-base">
                Chega de adivinhar se sua campanha está dando resultado.
              </p>
            </div>

            <div className="relative w-full lg:-mr-1">
              <div className="relative overflow-hidden rounded-xl border border-cta/25 bg-black/40 p-1.5 shadow-[0_0_50px_-20px_color-mix(in_oklab,var(--cta)_35%,transparent)]">
                <div className="overflow-hidden rounded-lg border border-white/5">
                  <img
                    src={leadsKpis}
                    alt="Dashboard de Gestão de Leads da IA Divulgadora com KPIs de grupos, leads únicos e ocupação"
                    className="w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-8 grid list-none gap-3 p-0 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-4">
            {leadFeatures.map((feature) => (
              <LeadFeatureCard key={feature.title} feature={feature} />
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-stretch gap-4 rounded-xl border border-white/10 bg-black/25 px-4 py-4 sm:flex-row sm:items-center sm:gap-5 sm:px-5 md:mt-10">
            <div className="flex min-w-0 items-center gap-2.5">
              <Rocket className="size-4 shrink-0 text-cta" strokeWidth={2} />
              <span className="truncate text-sm font-semibold text-white sm:text-base">
                Quero Gestão de Leads
              </span>
            </div>

            <p className="site-copy min-w-0 flex-1 text-xs leading-relaxed sm:text-sm">
              Descubra seus leads reais e decida com mais inteligência.
            </p>

            <CtaButton href="#planos" size="lg" className="w-full shrink-0 sm:w-auto">
              Quero ativar agora
            </CtaButton>
          </div>
        </article>
      </SectionContainer>
    </section>
  );
}
