import type { LucideIcon } from "lucide-react";
import {
  AlarmClock,
  Banknote,
  BarChart3,
  ChartNoAxesColumnDecreasing,
  Check,
  Search,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./SectionContainer";

function UpChart() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="up-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(56 189 248)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="rgb(56 189 248)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 62 L35 54 L70 48 L105 38 L140 28 L175 18 L200 12 L200 80 L0 80 Z"
        fill="url(#up-fill)"
      />
      <path
        d="M0 62 L35 54 L70 48 L105 38 L140 28 L175 18 L200 12"
        fill="none"
        stroke="rgb(56 189 248)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DownChart() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="down-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(251 146 60)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="rgb(251 146 60)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 22 L40 30 L80 42 L120 50 L160 58 L200 66 L200 80 L0 80 Z"
        fill="url(#down-fill)"
      />
      <path
        d="M0 22 L40 30 L80 42 L120 50 L160 58 L200 66"
        fill="none"
        stroke="rgb(248 113 113)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const withAutomation = [
  "Monitoramento 24h",
  "Oportunidades detectadas",
  "Mais conversões",
  "Mais receita",
];

const withoutAutomation = [
  "Monitoramento manual",
  "Perda de tempo",
  "Menos conversões",
  "Dinheiro perdido",
];

type ProblemTheme = "blue" | "orange" | "rose";

const problems: {
  n: string;
  theme: ProblemTheme;
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    n: "01",
    theme: "blue",
    icon: Search,
    title: "Monitoramento Manual",
    desc: "Horas perdidas pesquisando ofertas em diversos marketplaces sem ter certeza de encontrar as melhores oportunidades.",
  },
  {
    n: "02",
    theme: "orange",
    icon: AlarmClock,
    title: "Perda de Tempo",
    desc: "Criar links manualmente, formatar posts e disparar em grupos consome horas do seu dia produtivo.",
  },
  {
    n: "03",
    theme: "rose",
    icon: ChartNoAxesColumnDecreasing,
    title: "Baixa Conversão",
    desc: "Sem divulgação constante e estratégica, suas comissões ficam muito abaixo do potencial.",
  },
];

const themeStyles: Record<
  ProblemTheme,
  {
    border: string;
    iconBox: string;
    icon: string;
    number: string;
    glow: string;
  }
> = {
  blue: {
    border: "border-sky-500/25 shadow-[0_0_40px_-18px_rgba(56,189,248,0.35)]",
    iconBox:
      "bg-gradient-to-br from-sky-500/35 to-sky-950/40 shadow-[0_0_32px_-6px_rgba(56,189,248,0.55)]",
    icon: "text-sky-300",
    number: "text-sky-400",
    glow: "from-sky-500/10",
  },
  orange: {
    border: "border-orange-500/25 shadow-[0_0_40px_-18px_rgba(251,146,60,0.3)]",
    iconBox:
      "bg-gradient-to-br from-orange-500/35 to-orange-950/40 shadow-[0_0_32px_-6px_rgba(251,146,60,0.5)]",
    icon: "text-orange-300",
    number: "text-orange-400",
    glow: "from-orange-500/10",
  },
  rose: {
    border: "border-rose-500/25 shadow-[0_0_40px_-18px_rgba(244,63,94,0.3)]",
    iconBox:
      "bg-gradient-to-br from-rose-500/35 to-rose-950/40 shadow-[0_0_32px_-6px_rgba(244,63,94,0.45)]",
    icon: "text-rose-300",
    number: "text-rose-400",
    glow: "from-rose-500/10",
  },
};

function ProblemCard({
  n,
  theme,
  icon: Icon,
  title,
  desc,
}: (typeof problems)[number]) {
  const s = themeStyles[theme];

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-[#152238]/80 p-5 backdrop-blur-sm md:p-6",
        s.border,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t to-transparent opacity-80",
          s.glow,
        )}
      />

      <div className="relative flex gap-4 md:gap-5">
        <div
          className={cn(
            "flex size-14 shrink-0 items-center justify-center rounded-2xl md:size-16",
            s.iconBox,
          )}
        >
          <Icon className={cn("size-7 md:size-8", s.icon)} strokeWidth={1.5} />
        </div>

        <div className="relative min-w-0 flex-1 pt-0.5">
          <span
            aria-hidden
            className={cn(
              "pointer-events-none absolute -right-1 -top-4 select-none text-6xl font-bold opacity-[0.14] md:text-7xl",
              s.number,
            )}
          >
            {n}
          </span>

          <h3 className="problem-card-title text-sm font-bold md:text-base">{title}</h3>
          <p className="problem-card-desc mt-3 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </article>
  );
}

export function AffiliateReality() {
  return (
    <section className="results-section-bg relative overflow-hidden border-t border-white/8 py-16 md:py-24">
      <div aria-hidden className="results-section-overlay pointer-events-none absolute inset-0" />

      <SectionContainer className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-black/40 px-4 py-2 backdrop-blur-sm">
            <BarChart3 className="size-3.5 text-sky-400" strokeWidth={2.5} />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-300 sm:text-[11px]">
              A realidade do afiliado hoje
            </span>
          </div>

          <h2 className="text-balance text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
            Você está perdendo{" "}
            <span className="text-sky-400">dinheiro</span>{" "}
            <span className="text-orange-400">todos os dias</span>
          </h2>

          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
            Pesquisas mostram que afiliados perdem até{" "}
            <span className="font-bold text-orange-400">70%</span> das melhores ofertas por
            não conseguirem acompanhar todos os marketplaces 24h por dia.
          </p>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-black/30 p-3 backdrop-blur-sm sm:p-4 md:p-5">
          <div className="relative grid gap-3 sm:grid-cols-2 sm:gap-2">
            <div className="overflow-hidden rounded-2xl border border-sky-500/20 bg-gradient-to-b from-sky-500/[0.08] to-black/20 p-4">
              <p className="mb-3 flex items-center gap-1.5 text-sm font-semibold text-sky-400">
                <span aria-hidden>✅</span> Com automação
              </p>

              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/50 p-3">
                <div className="mb-2 h-16">
                  <UpChart />
                </div>
                <p className="text-[11px] font-medium text-zinc-300">Ofertas monitoradas 24h</p>
                <div className="absolute bottom-3 right-2 max-w-[9rem] rounded-lg border border-sky-500/25 bg-black/80 px-2 py-1.5 text-[9px] font-semibold leading-tight text-sky-300 backdrop-blur-sm">
                  +70% de oportunidades aproveitadas
                </div>
              </div>

              <ul className="mt-4 space-y-2.5">
                {withAutomation.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white">
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-b from-orange-500/[0.08] to-black/20 p-4">
              <p className="mb-3 flex items-center gap-1.5 text-sm font-semibold text-orange-400">
                <span aria-hidden>❌</span> Sem automação
              </p>

              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/50 p-3">
                <div className="mb-2 h-16">
                  <DownChart />
                </div>
                <p className="text-[11px] font-medium text-red-400">Ofertas perdidas 70%</p>
                <div className="absolute bottom-3 right-2 max-w-[8.5rem] rounded-lg border border-orange-500/25 bg-black/80 px-2 py-1.5 text-[9px] font-semibold leading-tight text-red-400 backdrop-blur-sm">
                  ↓ Receita deixada na mesa
                </div>
              </div>

              <ul className="mt-4 space-y-2.5">
                {withoutAutomation.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                      <X className="size-2.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-[42%] z-10 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
              <div className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-black/80 text-[11px] font-bold text-zinc-400 shadow-[0_0_20px_-4px_rgba(0,0,0,0.8)] backdrop-blur-sm">
                VS
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="grid gap-5 md:grid-cols-3 md:gap-4 lg:gap-5">
            {problems.map((problem) => (
              <ProblemCard key={problem.n} {...problem} />
            ))}
          </div>

          <div className="relative mx-auto mt-10 max-w-3xl md:mt-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-8 hidden h-8 w-full md:block"
            >
              <div className="absolute left-[16.666%] top-0 h-full border-l border-dotted border-orange-500/45" />
              <div className="absolute right-[16.666%] top-0 h-full border-l border-dotted border-orange-500/45" />
              <div className="absolute left-[16.666%] right-[16.666%] top-0 border-t border-dotted border-orange-500/45" />
            </div>

            <div className="summary-callout relative z-10 flex flex-col items-center gap-4 rounded-2xl border border-emerald-500/30 bg-[#0a1018] px-5 py-5 text-center shadow-[0_0_40px_-20px_rgba(52,211,153,0.25)] sm:flex-row sm:gap-5 sm:px-6 sm:text-left md:py-6">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 shadow-[0_0_24px_-6px_rgba(52,211,153,0.45)]">
                <Banknote className="size-6" strokeWidth={1.75} />
              </div>
              <p className="summary-callout-text text-sm leading-relaxed sm:text-base">
                <span>Não é falta de esforço.</span>{" "}
                <span className="summary-callout-highlight">É falta de automação.</span>{" "}
                <span>A IA Divulgadora resolve isso para você.</span>
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
