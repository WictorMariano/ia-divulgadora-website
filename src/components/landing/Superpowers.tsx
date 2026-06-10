"use client";

import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BarChart3,
  History,
  LineChart,
  Rocket,
  ScanSearch,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import leadsKpis from "@/assets/leads-kpis.jpg";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionContainer } from "./SectionContainer";
import { cn } from "@/lib/utils";

type LeadFeature = {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
};

const leadFeatures: LeadFeature[] = [
  {
    icon: Wallet,
    iconClass: "superpowers-feature-icon--violet",
    title: "CPL real",
    desc: "Veja o custo real por lead, considerando apenas quem ficou mais de 24h no grupo.",
  },
  {
    icon: TrendingUp,
    iconClass: "superpowers-feature-icon--blue",
    title: "Retenção e LTV",
    desc: "Identifique os grupos que mais seguraram e valorizam seus leads ao longo do tempo.",
  },
  {
    icon: History,
    iconClass: "superpowers-feature-icon--emerald",
    title: "Movimentação completa",
    desc: "Histórico de entradas e saídas por grupo, dia a dia, com total transparência.",
  },
  {
    icon: AlertTriangle,
    iconClass: "superpowers-feature-icon--orange",
    title: "Alerta de lotação",
    desc: "Saiba quando abrir outro grupo antes que você perca oportunidades.",
  },
  {
    icon: ScanSearch,
    iconClass: "superpowers-feature-icon--pink",
    title: "Raio-X por grupo",
    desc: "Ativos, DDDs e desempenho individual em um só lugar.",
  },
  {
    icon: BarChart3,
    iconClass: "superpowers-feature-icon--indigo",
    title: "Grupos que mais performam",
    desc: "Descubra onde vale colocar mais tráfego e onde está perdendo lead.",
  },
];

function LeadFeatureCard({ feature }: { feature: LeadFeature }) {
  const Icon = feature.icon;

  return (
    <article className="superpowers-feature-card">
      <div className={cn("superpowers-feature-icon", feature.iconClass)}>
        <Icon className="size-4" strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
        <p className="on-dark-copy-muted mt-1 text-xs leading-relaxed sm:text-[0.8125rem]">
          {feature.desc}
        </p>
      </div>
    </article>
  );
}

export function Superpowers() {
  return (
    <section
      id="superpoderes"
      className="site-section relative overflow-hidden border-t border-white/8 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgb(139_92_246/0.14),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_100%,rgb(56_189_248/0.08),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255 255 255 / 4%) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 4%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <SectionContainer>
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 backdrop-blur-sm">
            <Rocket className="size-3.5 text-violet-400" strokeWidth={2.5} />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-violet-300">
              Exclusivo IA Divulgadora
            </span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Superpoderes que só a{" "}
            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              IA Divulgadora
            </span>{" "}
            tem
          </h2>
          <p className="on-dark-copy-muted mx-auto mt-3 max-w-xl text-sm sm:text-base">
            Funcionalidades exclusivas para quem quer escalar de verdade
          </p>
        </div>

        <article className="superpowers-main-card relative mt-12 md:mt-14">
          <span className="superpowers-main-card__badge">NOVO</span>

          <div className="superpowers-main-card__light superpowers-main-card__light--blue" aria-hidden />
          <div className="superpowers-main-card__light superpowers-main-card__light--green" aria-hidden />

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:gap-8 xl:gap-10">
            <div className="lg:py-2">
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/15 text-violet-400 shadow-[0_0_24px_-6px_rgb(139_92_246/0.45)]">
                  <Users className="size-5" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">Gestão de Leads</h3>
              </div>

              <p className="superpowers-leads-tagline mt-4 text-sm font-medium leading-relaxed sm:text-base">
                Chega de adivinhar se sua campanha está dando resultado.
              </p>
            </div>

            <div className="relative w-full lg:-mr-1">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-violet-500/20 via-transparent to-sky-500/15 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/70 p-1 shadow-2xl lg:scale-[1.02] lg:origin-center">
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

          <div className="on-dark-copy mt-8 grid gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5 lg:mt-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-6">
            {leadFeatures.map((feature) => (
              <LeadFeatureCard key={feature.title} feature={feature} />
            ))}
          </div>

          <div className="superpowers-cta-bar mt-8 lg:mt-10">
            <div className="flex min-w-0 items-center gap-2.5">
              <LineChart className="size-4 shrink-0 text-violet-400" strokeWidth={2} />
              <span className="superpowers-cta-bar__title truncate text-sm font-semibold sm:text-base">
                Quero Gestão de Leads
              </span>
            </div>

            <div className="superpowers-cta-bar__divider hidden h-8 w-px shrink-0 sm:block" aria-hidden />

            <p className="superpowers-cta-bar__subtitle hidden min-w-0 flex-1 text-xs leading-relaxed sm:block sm:text-sm">
              Descubra seus leads reais e decida com mais inteligência.
            </p>

            <CtaButton href="#planos" size="sm" className="w-full shrink-0 sm:ml-auto sm:w-auto">
              Quero ativar agora
            </CtaButton>
          </div>
        </article>
      </SectionContainer>
    </section>
  );
}
