import { Rocket, Users } from "lucide-react";
import leadsKpis from "@/assets/leads-kpis.jpg";
import { SectionContainer } from "./SectionContainer";

const leadFeatures = [
  {
    emoji: "💰",
    title: "CPL real",
    desc: "Só considera quem ficou mais de 24h",
  },
  {
    emoji: "📈",
    title: "Retenção e LTV",
    desc: "Identifique os grupos que mais seguram e valorizam seus leads",
  },
  {
    emoji: "📉",
    title: "Movimentação completa",
    desc: "Histórico de entradas e saídas por grupo, dia a dia",
  },
  {
    emoji: "🚨",
    title: "Alerta de lotação",
    desc: "Saiba quando abrir outro grupo antes de perder lead",
  },
  {
    emoji: "🔎",
    title: "Raio-X por grupo",
    desc: "Ativos, DDDs e desempenho individual em um só lugar",
  },
  {
    emoji: "💬",
    title: "Grupos que mais performam",
    desc: "Descubra onde vale colocar mais tráfego e onde está perdendo lead",
  },
];

export function Superpowers() {
  return (
    <section
      id="superpoderes"
      className="site-section relative overflow-hidden border-t border-white/8 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.45_0.12_280/0.12),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 4%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <SectionContainer>
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5">
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

        <article className="on-dark-copy relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 shadow-[0_0_80px_-30px_rgba(139,92,246,0.35)] backdrop-blur-sm md:mt-14 md:p-8 lg:p-10">
          <span className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-3xl bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
            Novo
          </span>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400 shadow-[0_0_24px_-6px_rgba(139,92,246,0.5)]">
                  <Users className="size-5" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">Gestão de Leads</h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed sm:text-base">
                Chega de adivinhar se sua campanha está dando resultado. A Gestão de Leads mostra
                quantos leads únicos você tem, quanto cada um realmente custou e quais grupos
                performam melhor — sem contar quem entrou e saiu no mesmo dia.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {leadFeatures.map((feature) => (
                  <li key={feature.title} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 text-base" aria-hidden>
                      {feature.emoji}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">{feature.title}</p>
                      <p
                        className="on-dark-copy-muted mt-0.5 text-xs leading-relaxed sm:text-sm"
                      >
                        {feature.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-start gap-2">
                <a
                  href="#planos"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-6 text-sm font-bold text-white shadow-[0_0_32px_-8px_rgba(139,92,246,0.6)] transition-all hover:brightness-110"
                >
                  <Rocket className="size-4" />
                  Quero Gestão de Leads
                </a>
                <p className="on-dark-copy-subtle text-xs">
                  Descubra seus leads reais e decida com mais inteligência.
                </p>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-500/20 via-transparent to-sky-500/15 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-1.5 shadow-2xl">
                <div className="overflow-hidden rounded-xl border border-white/5">
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
        </article>
      </SectionContainer>
    </section>
  );
}
