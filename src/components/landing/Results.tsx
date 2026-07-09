import { Activity, LineChart, Store, TrendingUp, Users } from "lucide-react";
import { AccentBenefitCard } from "./AccentBenefitCard";
import { SectionContainer } from "./SectionContainer";

const cards = [
  {
    icon: Users,
    stat: "+10k",
    title: "Afiliados ativos",
    description: "Comunidade que escala vendas todos os dias com automação.",
    accent: "#38bdf8",
    accentRgb: "56,189,248",
  },
  {
    icon: TrendingUp,
    stat: "até 180%",
    title: "Aumento em conversões",
    description: "Ofertas certas, no timing certo, com copy que converte.",
    accent: "#f97316",
    accentRgb: "249,115,22",
  },
  {
    icon: Activity,
    stat: "24/7",
    title: "Monitoramento automático",
    description: "Sua operação rodando sem pausas, de dia ou de madrugada.",
    accent: "#fbbf24",
    accentRgb: "251,191,36",
  },
  {
    icon: Store,
    stat: "5+",
    title: "Marketplaces integrados",
    description: "Centralize lojas, links e promoções em um único painel.",
    accent: "#a78bfa",
    accentRgb: "167,139,250",
  },
];

type ResultsProps = {
  embedded?: boolean;
};

export function Results({ embedded = false }: ResultsProps) {
  return (
    <div
      id="resultados"
      className={
        embedded
          ? "relative pb-16 pt-20 md:pb-24 md:pt-28 lg:pt-32"
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {cards.map((card) => (
            <AccentBenefitCard key={card.title} {...card} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
