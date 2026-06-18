import { LineChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./SectionContainer";

type StatTheme = "blue" | "orange" | "split" | "aurora";

const cards: {
  stat: string;
  label: string;
  description: string;
  theme: StatTheme;
  labelClass: string;
}[] = [
  {
    stat: "+1560",
    label: "Afiliados ativos",
    description: "Comunidade que escala vendas todos os dias com automação.",
    theme: "blue",
    labelClass: "text-sky-400",
  },
  {
    stat: "até 180%",
    label: "Aumento em conversões",
    description: "Ofertas certas, no timing certo, com copy que converte.",
    theme: "orange",
    labelClass: "text-orange-400",
  },
  {
    stat: "24/7",
    label: "Monitoramento automático",
    description: "Sua operação rodando sem pausas, de dia ou de madrugada.",
    theme: "split",
    labelClass: "text-amber-300",
  },
  {
    stat: "5+",
    label: "Marketplaces integrados",
    description: "Centralize lojas, links e promoções em um único painel.",
    theme: "aurora",
    labelClass: "text-violet-300",
  },
];

export function StatCard({
  stat,
  label,
  description,
  theme,
  labelClass,
  badge,
}: (typeof cards)[number] & { badge?: string }) {
  return (
    <article className={cn("premium-stat-card", `premium-stat-card--${theme}`, "group flex h-full min-h-0 flex-col")}>
      <div className="premium-stat-card__glow-out1" aria-hidden />
      <div className="premium-stat-card__glow-out2" aria-hidden />
      <div className="premium-stat-card__glow" aria-hidden />
      <div className="premium-stat-card__shell">
        <div className="premium-stat-card__bg" aria-hidden />
        <div className="premium-stat-card__content">
          {badge && (
            <span className="absolute right-3 top-3 z-[2] rounded-md bg-gradient-to-r from-orange-500 to-orange-600 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white">
              {badge}
            </span>
          )}
          <div className="premium-stat-card__glare" aria-hidden />
          <div className="premium-stat-card__glow-in1" aria-hidden />
          <div className="premium-stat-card__glow-in2" aria-hidden />
          <p className="relative z-[1] text-3xl font-bold tracking-tight text-white md:text-4xl">
            {stat}
          </p>
          <p
            className={cn(
              "relative z-[1] mt-1 text-[11px] font-semibold uppercase tracking-[0.16em]",
              labelClass,
            )}
          >
            {label}
          </p>
          <p className="premium-stat-card__desc relative z-[1] mt-3 flex-1 text-xs leading-relaxed site-muted">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

type ResultsProps = {
  embedded?: boolean;
};

export function Results({ embedded = false }: ResultsProps) {
  return (
    <div
      id="resultados"
      className={
        embedded
          ? "relative pb-16 pt-8 md:pb-24 md:pt-12 lg:pt-14"
          : "panel-showcase relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24"
      }
    >
      <SectionContainer className="relative z-10">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-sm">
            <LineChart className="size-3.5 text-orange-400" strokeWidth={2.5} />
            <span className="site-copy text-[10px] font-bold uppercase tracking-[0.2em] sm:text-[11px]">
              Números que <span className="text-orange-400">comprovam</span>
            </span>
          </div>
        </div>

        <div className="mt-10 grid auto-rows-fr items-stretch gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {cards.map((card) => (
            <StatCard key={card.label} {...card} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
