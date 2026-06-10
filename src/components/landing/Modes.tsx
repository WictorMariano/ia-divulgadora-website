"use client";

import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  ChevronRight,
  ClipboardList,
  Clock,
  Copy,
  Flame,
  Link2,
  Pencil,
  Radar,
  Search,
  Send,
  Target,
  Timer,
  Zap,
} from "lucide-react";
import { useState, useRef, type CSSProperties } from "react";
import { useInView } from "framer-motion";
import { SectionContainer } from "./SectionContainer";
import { cn } from "@/lib/utils";

type ModeId = "monitoramento" | "clone" | "demanda" | "agendamento";

type ModeConfig = {
  id: ModeId;
  tabNumber: string;
  tabTitle: string;
  tabSubtitle: string;
  tabIcon: LucideIcon;
  accent: "sky" | "emerald" | "orange" | "blue";
  modeLabel: string;
  headline: string;
  headlineHighlight: string;
  description: string;
  features: { icon: LucideIcon; text: string }[];
  stats: { value: string; label: string }[];
  statsTitle: string;
  flow: { icon: LucideIcon; label: string; color: string }[];
  footerText: string;
  footerHighlight: string;
};

const modes: ModeConfig[] = [
  {
    id: "monitoramento",
    tabNumber: "01",
    tabTitle: "Monitoramento",
    tabSubtitle: "24h por dia",
    tabIcon: Radar,
    accent: "sky",
    modeLabel: "Modo Monitoramento",
    headline: "Espelhamento Inteligente",
    headlineHighlight: "24h",
    description:
      "A IA monitora grupos de ofertas 24 horas por dia, identifica promoções, converte links, monta o post e envia nos seus grupos — tudo no automático.",
    features: [
      { icon: Search, text: "Monitora grupos em tempo real" },
      { icon: Flame, text: "Detecta as melhores ofertas" },
      { icon: Link2, text: "Converte link + aplica cupom" },
      { icon: Send, text: "Cria o post e envia automaticamente" },
    ],
    statsTitle: "Resultados que você sente",
    stats: [
      { value: "+70%", label: "Mais oportunidades" },
      { value: "+85%", label: "Mais conversões" },
      { value: "24h", label: "Monitoramento" },
      { value: "100%", label: "Automático" },
    ],
    flow: [
      { icon: Target, label: "1. Detecta Oferta", color: "text-sky-400 bg-sky-500/15" },
      { icon: Link2, label: "2. Converte Link", color: "text-orange-400 bg-orange-500/15" },
      { icon: Pencil, label: "3. Cria o Post", color: "text-violet-400 bg-violet-500/15" },
      { icon: Send, label: "4. Publica", color: "text-emerald-400 bg-emerald-500/15" },
    ],
    footerText: "A IA trabalha enquanto você foca no que importa:",
    footerHighlight: "vender mais.",
  },
  {
    id: "clone",
    tabNumber: "02",
    tabTitle: "Clone",
    tabSubtitle: "Mensagem original",
    tabIcon: Copy,
    accent: "emerald",
    modeLabel: "Modo Clone",
    headline: "Clona, Converte e",
    headlineHighlight: "Preserva",
    description:
      "Mantém a mensagem original intacta — texto, formatação e imagens. Troca só o link de afiliado e gera cupom quando houver.",
    features: [
      { icon: Search, text: "Monitora grupos 24h" },
      { icon: Copy, text: "Captura a mensagem original" },
      { icon: Link2, text: "Converte o link automaticamente" },
      { icon: Send, text: "Dispara sem reformatar" },
    ],
    statsTitle: "Resultados que você sente",
    stats: [
      { value: "100%", label: "Post original" },
      { value: "+60%", label: "Mais cupons" },
      { value: "24h", label: "Monitoramento" },
      { value: "0", label: "Reformatação" },
    ],
    flow: [
      { icon: Copy, label: "1. Captura Post", color: "text-emerald-400 bg-emerald-500/15" },
      { icon: Link2, label: "2. Troca Link", color: "text-orange-400 bg-orange-500/15" },
      { icon: Target, label: "3. Gera Cupom", color: "text-violet-400 bg-violet-500/15" },
      { icon: Send, label: "4. Publica", color: "text-emerald-400 bg-emerald-500/15" },
    ],
    footerText: "Preserve o formato que já converte e",
    footerHighlight: "lucre com cupons.",
  },
  {
    id: "demanda",
    tabNumber: "03",
    tabTitle: "Sob Demanda",
    tabSubtitle: "Criação rápida 60s",
    tabIcon: Zap,
    accent: "orange",
    modeLabel: "Modo Sob Demanda",
    headline: "Criação Rápida",
    headlineHighlight: "60s",
    description:
      "Cole o link da oferta, a IA converte pro seu link de afiliado e monta o post completo com imagem, preço e CTA em segundos.",
    features: [
      { icon: Link2, text: "Cole o link do marketplace" },
      { icon: Zap, text: "IA reconhece e converte o link" },
      { icon: Pencil, text: "Post pronto com imagem e preço" },
      { icon: Send, text: "Dispare com 1 clique" },
    ],
    statsTitle: "Resultados que você sente",
    stats: [
      { value: "<60s", label: "Por post" },
      { value: "+90%", label: "Mais agilidade" },
      { value: "1", label: "Clique p/ enviar" },
      { value: "100%", label: "Automático" },
    ],
    flow: [
      { icon: Link2, label: "1. Cola Link", color: "text-orange-400 bg-orange-500/15" },
      { icon: Zap, label: "2. IA Converte", color: "text-amber-400 bg-amber-500/15" },
      { icon: Pencil, label: "3. Monta Post", color: "text-violet-400 bg-violet-500/15" },
      { icon: Send, label: "4. Dispara", color: "text-emerald-400 bg-emerald-500/15" },
    ],
    footerText: "Do link original ao disparo completo em",
    footerHighlight: "menos de 1 minuto.",
  },
  {
    id: "agendamento",
    tabNumber: "04",
    tabTitle: "Agendamento",
    tabSubtitle: "Fila de envios",
    tabIcon: Clock,
    accent: "blue",
    modeLabel: "Modo Agendamento",
    headline: "Fila de",
    headlineHighlight: "Envios",
    description:
      "Organize ofertas em fila, defina horários e intervalos. O sistema publica no timing certo para maximizar conversões.",
    features: [
      { icon: Clock, text: "Programe envios automáticos" },
      { icon: Target, text: "Defina horários e intervalos" },
      { icon: Search, text: "Organize por nicho ou loja" },
      { icon: Send, text: "Envio no timing certo" },
    ],
    statsTitle: "Resultados que você sente",
    stats: [
      { value: "24/7", label: "Fila ativa" },
      { value: "+75%", label: "Consistência" },
      { value: "∞", label: "Ofertas na fila" },
      { value: "100%", label: "No horário" },
    ],
    flow: [
      { icon: Clock, label: "1. Agenda", color: "text-blue-400 bg-blue-500/15" },
      { icon: Pencil, label: "2. Personaliza", color: "text-violet-400 bg-violet-500/15" },
      { icon: Target, label: "3. Organiza", color: "text-orange-400 bg-orange-500/15" },
      { icon: Send, label: "4. Publica", color: "text-emerald-400 bg-emerald-500/15" },
    ],
    footerText: "Cada produto divulgado na",
    footerHighlight: "hora ideal.",
  },
];

const accentMap = {
  sky: {
    label: "text-sky-400",
    highlight: "text-sky-400",
    icon: "text-sky-400 bg-sky-500/15",
    stats: "from-sky-600/40 to-blue-900/60 border-sky-500/30",
    featureIcon: "text-sky-400 bg-sky-500/10",
  },
  emerald: {
    label: "text-emerald-400",
    highlight: "text-emerald-400",
    icon: "text-emerald-400 bg-emerald-500/15",
    stats: "from-emerald-600/40 to-emerald-950/60 border-emerald-500/30",
    featureIcon: "text-emerald-400 bg-emerald-500/10",
  },
  orange: {
    label: "text-orange-400",
    highlight: "text-orange-400",
    icon: "text-orange-400 bg-orange-500/15",
    stats: "from-orange-600/40 to-orange-950/60 border-orange-500/30",
    featureIcon: "text-orange-400 bg-orange-500/10",
  },
  blue: {
    label: "text-blue-400",
    highlight: "text-blue-400",
    icon: "text-blue-400 bg-blue-500/15",
    stats: "from-blue-600/40 to-blue-950/60 border-blue-500/30",
    featureIcon: "text-blue-400 bg-blue-500/10",
  },
};

function ModeTab({
  mode,
  active,
  onClick,
}: {
  mode: ModeConfig;
  active: boolean;
  onClick: () => void;
}) {
  const Icon = mode.tabIcon;
  const accent = accentMap[mode.accent];

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("mode-tab flex items-center gap-3", active ? "mode-tab--active" : "mode-tab--inactive")}
    >
      <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl", active ? "bg-white/12 text-white" : accent.icon)}>
        <Icon className="size-5" strokeWidth={1.75} />
      </div>
      <div className="min-w-0">
        <p className={cn("text-xs font-bold", active ? "text-white" : "text-white/75")}>
          {mode.tabNumber} {mode.tabTitle}
        </p>
        <p className={cn("truncate text-[11px]", active ? "text-white/85" : "text-white/45")}>
          {mode.tabSubtitle}
        </p>
      </div>
    </button>
  );
}

function OfferMockup() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0a0f18] p-3">
      <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-orange-400">
        + Oferta detectada agora
      </p>
      <div className="rounded-lg border border-white/5 bg-black/40 p-2.5">
        <p className="text-[10px] text-zinc-500">Grupo Promoções</p>
        <div className="mt-2 flex gap-2">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-lg">
            🍳
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-medium leading-snug text-zinc-200">
              Air Fryer 5L — Oferta imperdível!
            </p>
            <p className="mt-1 text-sm font-bold text-white">R$ 199,90</p>
            <span className="mt-1 inline-block rounded bg-red-500/20 px-1.5 py-0.5 text-[9px] font-bold text-red-400">
              -15%
            </span>
          </div>
        </div>
        <p className="mt-2 truncate text-[9px] text-zinc-600">shope.ee/link-original...</p>
      </div>
    </div>
  );
}

function WhatsAppMockup() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0a0f18] p-3">
      <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-emerald-400">
        + Post gerado e enviado
      </p>
      <div className="overflow-hidden rounded-lg border border-white/5 bg-[#0b1419]">
        <div className="bg-emerald-800/80 px-2.5 py-1.5">
          <p className="text-[10px] font-medium text-white">Seu Grupo de Promoções</p>
        </div>
        <div className="space-y-1 p-2.5 text-[10px] leading-relaxed text-zinc-300">
          <p>🔥 Air Fryer 5L com super desconto!</p>
          <p>✅ Frete grátis selecionado</p>
          <p>💰 De R$ 235 por R$ 199,90</p>
          <p>🎫 Cupom: PROMO15</p>
          <p className="text-sky-400">🔗 shope.ee/seu-link-afiliado</p>
        </div>
        <div className="flex items-center justify-between border-t border-white/5 px-2.5 py-1.5">
          <span className="text-[9px] text-emerald-400">✓ Enviado com sucesso</span>
          <span className="text-[9px] text-zinc-600">14:32</span>
        </div>
      </div>
    </div>
  );
}

function ModePanel({ mode }: { mode: ModeConfig }) {
  const accent = accentMap[mode.accent];

  return (
    <div className="on-dark-copy flex flex-col gap-8 lg:gap-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
        <div className="flex flex-col">
          <p className={cn("text-[11px] font-bold uppercase tracking-[0.14em]", accent.label)}>
            {mode.modeLabel}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {mode.headline}{" "}
            <span className={accent.highlight}>{mode.headlineHighlight}</span>
          </h3>
          <p className="on-dark-copy-muted mt-3 text-sm leading-relaxed">{mode.description}</p>

          <ul className="mt-6 space-y-3">
            {mode.features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <div className={cn("flex size-8 shrink-0 items-center justify-center rounded-lg", accent.featureIcon)}>
                  <Icon className="size-4" strokeWidth={2} />
                </div>
                <span className="text-sm text-white/90">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
            {mode.flow.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex items-center gap-1">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className={cn("flex size-9 items-center justify-center rounded-full", step.color)}>
                      <Icon className="size-4" strokeWidth={2} />
                    </div>
                    <span className="on-dark-copy-subtle max-w-[4.5rem] text-center text-[9px] leading-tight">
                      {step.label}
                    </span>
                  </div>
                  {i < mode.flow.length - 1 && (
                    <div className="mb-4 hidden h-px w-4 border-t border-dotted border-white/20 sm:block" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
            <OfferMockup />
            <div className="hidden justify-center sm:flex">
              <div className="flex size-9 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                <ChevronRight className="size-5" strokeWidth={2.5} />
                <ChevronRight className="-ml-3 size-5" strokeWidth={2.5} />
              </div>
            </div>
            <WhatsAppMockup />
          </div>
        </div>
      </div>

      <div className={cn("w-full rounded-2xl border bg-gradient-to-br p-6 md:p-8", accent.stats)}>
        <p className="mb-5 text-sm font-semibold text-white md:mb-6 md:text-base">{mode.statsTitle}</p>
        <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4 md:gap-4">
          {mode.stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-black/15 px-3 py-4 text-center md:px-4 md:py-5 md:text-left">
              <p className="text-2xl font-bold text-white md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-[11px] text-white/80 md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="on-dark-copy-muted text-center text-sm sm:text-base">
        {mode.footerText}{" "}
        <span className="font-semibold text-orange-400">{mode.footerHighlight}</span>
      </p>
    </div>
  );
}

const controlCards = [
  {
    icon: Timer,
    title: "Intervalos de Envio",
    description:
      "De 1 a 30 minutos entre cada disparo. Define horário de início, término e limpeza de pendentes.",
    badge: "NOVO" as const,
    theme: "sky" as const,
    highlighted: false,
    rotation: -15,
  },
  {
    icon: ClipboardList,
    title: "Filas de Envio",
    description:
      "Organize produtos em filas sequenciais. Importe filas prontas ou crie por nicho e loja.",
    theme: "violet" as const,
    highlighted: true,
    rotation: 5,
  },
  {
    icon: Calendar,
    title: "Agendamento",
    description:
      "Programe mensagens de engajamento com recorrência. Prepare a semana inteira em minutos.",
    theme: "emerald" as const,
    highlighted: false,
    rotation: 25,
  },
];

function ControlDetails() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.45 });

  return (
    <div ref={containerRef} className="mt-16 md:mt-20">
      <h3 className="text-center text-xl font-bold text-white sm:text-2xl">
        E você ainda controla cada detalhe:
      </h3>

      <div
        className={cn(
          "control-glass-container mt-8 md:mt-10",
          isInView && "control-glass-container--visible",
        )}
      >
        {controlCards.map((card) => {
          const Icon = card.icon;
          return (
            <article
              key={card.title}
              data-text={card.title}
              style={{ "--r": card.rotation } as CSSProperties}
              className={cn(
                "control-glass-card",
                `control-glass-card--${card.theme}`,
                card.highlighted && "control-glass-card--highlight",
              )}
            >
              <div className="control-glass-card__grid" aria-hidden />
              <div className="control-glass-card__shine" aria-hidden />

              {card.badge && (
                <span className="control-glass-card__badge">{card.badge}</span>
              )}

              <div className="control-glass-card__icon-wrap">
                <div className="control-glass-card__icon-box">
                  <Icon className="control-glass-card__icon" strokeWidth={1.75} />
                </div>
              </div>

              <p className="control-glass-card__desc">{card.description}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function Modes() {
  const [activeId, setActiveId] = useState<ModeId>("monitoramento");
  const activeMode = modes.find((m) => m.id === activeId) ?? modes[0];

  return (
    <section id="modos" className="site-section relative overflow-hidden border-t border-white/8 py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_0%,rgb(56_189_248/0.1),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_100%_100%,rgb(251_146_60/0.08),transparent_50%)]"
      />

      <SectionContainer>
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5">
            <span className="text-sm" aria-hidden>
              ☀️
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-400">
              Automação inteligente
            </span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Como Funciona a{" "}
            <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
              IA Divulgadora
            </span>
            ?
          </h2>
          <p className="on-dark-copy-muted mx-auto mt-3 max-w-xl text-sm sm:text-base">
            Quatro formas poderosas de automatizar suas vendas de afiliado
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {modes.map((mode) => (
            <ModeTab
              key={mode.id}
              mode={mode}
              active={activeId === mode.id}
              onClick={() => setActiveId(mode.id)}
            />
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-[#0a0f18]/90 p-5 backdrop-blur-sm md:mt-6 md:p-8">
          <ModePanel mode={activeMode} />
        </div>

        <ControlDetails />
      </SectionContainer>
    </section>
  );
}
