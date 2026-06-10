import { Headphones, RefreshCw, ShieldCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import suporteBg from "@/assets/suporte-humanizado.png";
import { cn } from "@/lib/utils";

type SupportFeature = {
  icon: LucideIcon;
  theme: "orange" | "blue";
  title: string;
  desc: string;
};

const features: SupportFeature[] = [
  {
    icon: Headphones,
    theme: "orange",
    title: "Suporte Humanizado",
    desc: "Atendimento próximo, rápido e focado em resolver.",
  },
  {
    icon: RefreshCw,
    theme: "blue",
    title: "Atualizações Constantes",
    desc: "Sua plataforma sempre evoluindo com novidades.",
  },
  {
    icon: ShieldCheck,
    theme: "blue",
    title: "Segurança e Privacidade",
    desc: "Proteção de dados e conformidade garantidas.",
  },
  {
    icon: Users,
    theme: "orange",
    title: "Especialistas Disponíveis",
    desc: "Time de especialistas pronto para te ajudar.",
  },
];

export function Support() {
  return (
    <section id="suporte" className="support-section">
      <div
        className="support-section__media"
        style={{ backgroundImage: `url(${suporteBg})` }}
        aria-hidden
      />
      <div className="support-section__overlay" aria-hidden />

      <div className="support-section__content">
        <div className="support-section__inner">
          <h2 className="support-section__title">
            <span className="support-section__title-line">Todos os planos</span>
            <span className="support-section__title-accent">incluem:</span>
          </h2>

          <div className="support-section__divider" aria-hidden />

          <ul className="support-section__list">
            {features.map(({ icon: Icon, theme, title, desc }) => (
              <li key={title} className="support-section__item">
                <span
                  className={cn(
                    "support-section__icon",
                    theme === "orange"
                      ? "support-section__icon--orange"
                      : "support-section__icon--blue",
                  )}
                >
                  <Icon className="size-[1.125rem]" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <p className="support-section__feature-title">{title}</p>
                  <p className="support-section__feature-desc">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
