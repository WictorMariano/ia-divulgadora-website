import { Headphones, RefreshCw, ShieldCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import suporteBg from "@/assets/suporte-humanizado.png";
import { SectionFullInner } from "./SectionPanel";

const features: { icon: LucideIcon; label: string }[] = [
  { icon: Headphones, label: "Suporte Humanizado" },
  { icon: RefreshCw, label: "Atualizações Constantes" },
  { icon: ShieldCheck, label: "Segurança e Privacidade" },
  { icon: Users, label: "Especialistas Disponíveis" },
];

export function Support() {
  return (
    <section
      id="suporte"
      className="support-section"
      style={{ backgroundImage: `url(${suporteBg})` }}
    >
      <div aria-hidden className="support-section__overlay" />

      <SectionFullInner className="support-section__content">
        <div className="support-section__inner">
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Todos os planos{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              incluem:
            </span>
          </h2>

          <ul className="support-section__list">
            {features.map(({ icon: Icon, label }) => (
              <li key={label} className="support-section__item">
                <span className="support-feature-text">{label}</span>
                <span className="support-section__icon">
                  <Icon className="size-4" strokeWidth={2} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </SectionFullInner>
    </section>
  );
}
