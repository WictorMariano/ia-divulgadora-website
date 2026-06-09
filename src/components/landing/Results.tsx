import { LineChart } from "lucide-react";
import { SectionContainer } from "./SectionContainer";

const cards = [
  {
    stat: "+1560",
    label: "Afiliados ativos",
    description: "Comunidade que escala vendas todos os dias com automação.",
  },
  {
    stat: "até 180%",
    label: "Aumento em conversões",
    description: "Ofertas certas, no timing certo, com copy que converte.",
  },
  {
    stat: "24/7",
    label: "Monitoramento automático",
    description: "Sua operação rodando sem pausas, de dia ou de madrugada.",
  },
  {
    stat: "5+",
    label: "Marketplaces integrados",
    description: "Centralize lojas, links e promoções em um único painel.",
  },
];

function StatCard({
  stat,
  label,
  description,
}: (typeof cards)[number]) {
  return (
    <article className="stat-card h-full">
      <div className="stat-card-border" aria-hidden />
      <div className="stat-card-inner">
        <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">{stat}</p>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-400">
          {label}
        </p>
        <p className="mt-3 text-xs leading-relaxed text-zinc-400">{description}</p>
      </div>
    </article>
  );
}

export function Results() {
  return (
    <section
      id="resultados"
      className="results-section-bg relative overflow-hidden border-t border-white/8 pb-20 pt-16 md:pb-28 md:pt-24"
    >
      <div aria-hidden className="results-section-overlay pointer-events-none absolute inset-0" />

      <SectionContainer className="relative z-10">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-sm">
            <LineChart className="size-3.5 text-orange-400" strokeWidth={2.5} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300 sm:text-[11px]">
              Números que <span className="text-orange-400">comprovam</span>
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {cards.map((card) => (
            <StatCard key={card.label} {...card} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
