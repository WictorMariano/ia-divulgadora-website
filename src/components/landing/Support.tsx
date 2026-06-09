import { Headphones, RefreshCw, ShieldCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import suporteBg from "@/assets/suporte-humanizado.png";
import { SectionFullInner, SectionPanel } from "./SectionPanel";

const features: { icon: LucideIcon; label: string }[] = [
  { icon: Headphones, label: "Suporte Humanizado" },
  { icon: RefreshCw, label: "Atualizações Constantes" },
  { icon: ShieldCheck, label: "Segurança e Privacidade" },
  { icon: Users, label: "Especialistas Disponíveis" },
];

export function Support() {
  return (
    <SectionPanel id="suporte" variant="support" fullWidth>
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-[55%] bg-cover bg-[position:left_center] bg-no-repeat lg:w-[50%]"
        style={{ backgroundImage: `url(${suporteBg})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#06080f]/70 to-[#06080f] lg:via-[#06080f]/50"
      />

      <SectionFullInner className="relative z-10 py-14 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="hidden lg:col-span-5 lg:block" aria-hidden />

          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Todos os planos{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                incluem:
              </span>
            </h2>

            <ul className="mt-8 space-y-4">
              {features.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-orange-400/25 bg-orange-500/10 text-orange-400">
                    <Icon className="size-4" strokeWidth={2} />
                  </span>
                  <span className="support-feature-text text-sm font-medium sm:text-base">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionFullInner>
    </SectionPanel>
  );
}
