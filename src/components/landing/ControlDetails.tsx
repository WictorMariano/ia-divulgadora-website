import { StatCard } from "./Results";

const controlCards = [
  {
    stat: "1-30",
    label: "Intervalos de envio",
    description:
      "De 1 a 30 minutos entre cada disparo. Define horário de início, término e limpeza de pendentes.",
    theme: "blue" as const,
    labelClass: "text-sky-400",
    badge: "Novo",
  },
  {
    stat: "∞",
    label: "Filas de envio",
    description:
      "Organize produtos em filas sequenciais. Importe filas prontas ou crie por nicho e loja.",
    theme: "orange" as const,
    labelClass: "text-orange-400",
  },
  {
    stat: "7 dias",
    label: "Agendamento",
    description:
      "Programe mensagens de engajamento com recorrência. Prepare a semana inteira em minutos.",
    theme: "aurora" as const,
    labelClass: "text-violet-300",
  },
];

export function ControlDetails() {
  return (
    <div className="mt-10 border-t border-white/8 pt-10 md:mt-12 md:pt-12">
      <h3 className="text-center text-xl font-bold text-white sm:text-2xl">
        E você ainda controla cada detalhe:
      </h3>

      <div className="mt-8 grid auto-rows-fr items-stretch gap-6 sm:grid-cols-2 md:mt-10 lg:grid-cols-3 lg:gap-5">
        {controlCards.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </div>
    </div>
  );
}
