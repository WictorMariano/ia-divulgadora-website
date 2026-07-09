import { Calendar, Clock, Layers } from "lucide-react";
import { AccentBenefitCard } from "./AccentBenefitCard";

const controlCards = [
  {
    icon: Clock,
    stat: "1-30",
    title: "Intervalos de envio",
    description:
      "De 1 a 30 minutos entre cada disparo. Define horário de início, término e limpeza de pendentes.",
    accent: "#38bdf8",
    accentRgb: "56,189,248",
    badge: "Novo",
  },
  {
    icon: Layers,
    stat: "∞",
    title: "Filas de envio",
    description:
      "Organize produtos em filas sequenciais. Importe filas prontas ou crie por nicho e loja.",
    accent: "#f97316",
    accentRgb: "249,115,22",
  },
  {
    icon: Calendar,
    stat: "7 dias",
    title: "Agendamento",
    description:
      "Programe mensagens de engajamento com recorrência. Prepare a semana inteira em minutos.",
    accent: "#a78bfa",
    accentRgb: "167,139,250",
  },
];

export function ControlDetails() {
  return (
    <div className="control-details-section mt-10 pt-10 md:mt-12 md:pt-12">
      <h3 className="control-details-section__title text-center text-xl font-bold text-white sm:text-2xl">        E você ainda controla cada detalhe:
      </h3>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 lg:grid-cols-3 lg:gap-5">
        {controlCards.map((card) => (
          <AccentBenefitCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}
