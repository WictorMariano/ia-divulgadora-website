"use client";

import {
  ArrowUpRight,
  Bell,
  ChevronLeft,
  ChevronRight,
  Coins,
  LayoutDashboard,
  LineChart,
  Rocket,
  Search,
  Users,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./SectionContainer";
import dashboard1 from "@/assets/dashboard-1.png";
import dashboard2 from "@/assets/dashboard-2.png";

const slides = [
  {
    src: dashboard1,
    alt: "Dashboard da IA Divulgadora — visão geral de gestão de leads",
  },
  {
    src: dashboard2,
    alt: "Dashboard da IA Divulgadora — análise detalhada de grupos e métricas",
  },
];

const features = [
  {
    icon: Users,
    color: "text-emerald-400",
    bg: "bg-emerald-500/15",
    title: "Leads únicos reais",
    desc: "Sem contar a mesma pessoa em vários grupos",
  },
  {
    icon: Coins,
    color: "text-orange-400",
    bg: "bg-orange-500/15",
    title: "CPL real",
    desc: "Sem incluir quem entrou e saiu no mesmo dia",
  },
  {
    icon: LineChart,
    color: "text-violet-400",
    bg: "bg-violet-500/15",
    title: "Retenção e LTV",
    desc: "Veja quais grupos seguram mais leads e geram valor",
  },
  {
    icon: ArrowUpRight,
    color: "text-pink-400",
    bg: "bg-pink-500/15",
    title: "Movimentação completa",
    desc: "Acompanhe entradas e saídas com histórico",
  },
  {
    icon: Bell,
    color: "text-rose-400",
    bg: "bg-rose-500/15",
    title: "Alerta de lotação",
    desc: "Saiba antes de abrir outro grupo e perder leads",
  },
  {
    icon: Search,
    color: "text-sky-400",
    bg: "bg-sky-500/15",
    title: "Raio-X por grupo",
    desc: "Ativos, DDDs e desempenho individual de cada grupo",
  },
];

function PlatformCarousel() {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const prevIndex = (index - 1 + count) % count;
  const nextIndex = (index + 1) % count;

  return (
    <div className="relative mx-auto mt-10 max-w-5xl md:mt-12">
      <button
        type="button"
        onClick={() => setIndex(prevIndex)}
        aria-label="Slide anterior"
        className="absolute left-0 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:left-2 md:size-11"
      >
        <ChevronLeft className="size-5" />
      </button>

      <button
        type="button"
        onClick={() => setIndex(nextIndex)}
        aria-label="Próximo slide"
        className="absolute right-0 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:right-2 md:size-11"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="flex items-center justify-center gap-3 px-10 sm:gap-5 sm:px-14 md:gap-6">
        <div
          aria-hidden
          className="hidden w-[14%] shrink-0 overflow-hidden rounded-xl border border-white/5 opacity-40 blur-[2px] md:block lg:w-[16%]"
        >
          <img
            src={slides[prevIndex].src}
            alt=""
            className="block w-full scale-95 object-cover object-top"
          />
        </div>

        <div className="relative min-w-0 flex-1">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e16] p-1.5 shadow-[0_0_60px_-15px_rgba(52,211,153,0.35)]">
            <div className="overflow-hidden rounded-xl border border-white/5">
              <img
                src={slides[index].src}
                alt={slides[index].alt}
                className="block w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="hidden w-[14%] shrink-0 overflow-hidden rounded-xl border border-white/5 opacity-40 blur-[2px] md:block lg:w-[16%]"
        >
          <img
            src={slides[nextIndex].src}
            alt=""
            className="block w-full scale-95 object-cover object-top"
          />
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir para slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "size-2 rounded-full transition-colors",
              i === index ? "bg-white" : "bg-white/25 hover:bg-white/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function NovaPlataforma() {
  return (
    <section
      id="nova-plataforma"
      className="relative overflow-hidden border-t border-white/8 py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,oklch(0.72_0.15_155/0.1),transparent_55%)]"
      />

      <SectionContainer>
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5">
            <LayoutDashboard className="size-3.5 text-emerald-400" strokeWidth={2.5} />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300">
              Nova plataforma
            </span>
          </div>

          <h2 className="mx-auto max-w-3xl text-balance text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            Seus grupos podem lucrar muito mais quando você{" "}
            <span className="text-emerald-400">mede o que importa</span>
          </h2>
          <p className="on-dark-copy-muted mx-auto mt-4 max-w-2xl text-sm sm:text-base">
            Você investe para encher seus grupos, mas sem acompanhar os números certos acaba
            contando gente que entrou e saiu no mesmo dia.
          </p>
        </div>

        <PlatformCarousel />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {features.map(({ icon: Icon, color, bg, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div
                className={cn(
                  "flex size-10 items-center justify-center rounded-full",
                  bg,
                  color,
                )}
              >
                <Icon className="size-4" strokeWidth={2} />
              </div>
              <p className="mt-2.5 text-xs font-bold text-white sm:text-sm">{title}</p>
              <p className="on-dark-copy-muted mt-1 text-[10px] leading-snug sm:text-[11px]">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <a
            href="#planos"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 text-sm font-bold text-white shadow-[0_0_32px_-8px_rgba(56,189,248,0.55)] transition-all hover:brightness-110"
          >
            <Rocket className="size-4" />
            Quero Gestão de Leads
          </a>
        </div>
      </SectionContainer>
    </section>
  );
}
