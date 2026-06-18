import type { LucideIcon } from "lucide-react";
import {
  ChevronRight,
  Clock,
  Copy,
  Flame,
  Link2,
  Pencil,
  Radar,
  Search,
  Send,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { SectionCta } from "./SectionCta";
import { ControlDetails } from "./ControlDetails";
import { CtaButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";
import espelhamentoImg from "@/assets/modo-espelhamento.png";
import mexendoCelularImg from "@/assets/modo-mexendo-celular.png";
import rapidezImg from "@/assets/modo-rapidez.png";

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
  flow: { icon: LucideIcon; label: string; color: string }[];
  footerText: string;
  footerHighlight: string;
  image?: string;
  imageAlt?: string;
  visual?: {
    sourceLabel: string;
    sourceAccent: string;
    resultLabel: string;
    resultAccent: string;
    sourceTitle: string;
    resultTitle: string;
  };
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
    flow: [
      { icon: Target, label: "1. Detecta Oferta", color: "text-sky-400 bg-sky-500/15" },
      { icon: Link2, label: "2. Converte Link", color: "text-orange-400 bg-orange-500/15" },
      { icon: Pencil, label: "3. Cria o Post", color: "text-violet-400 bg-violet-500/15" },
      { icon: Send, label: "4. Publica", color: "text-emerald-400 bg-emerald-500/15" },
    ],
    footerText: "A IA trabalha enquanto você foca no que importa:",
    footerHighlight: "vender mais.",
    image: espelhamentoImg,
    imageAlt: "Espelhamento inteligente 24h na IA Divulgadora",
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
    flow: [
      { icon: Copy, label: "1. Captura Post", color: "text-emerald-400 bg-emerald-500/15" },
      { icon: Link2, label: "2. Troca Link", color: "text-orange-400 bg-orange-500/15" },
      { icon: Target, label: "3. Gera Cupom", color: "text-violet-400 bg-violet-500/15" },
      { icon: Send, label: "4. Publica", color: "text-emerald-400 bg-emerald-500/15" },
    ],
    footerText: "Preserve o formato que já converte e",
    footerHighlight: "lucre com cupons.",
    image: mexendoCelularImg,
    imageAlt: "Clone de mensagens pelo celular na IA Divulgadora",
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
    flow: [
      { icon: Link2, label: "1. Cola Link", color: "text-orange-400 bg-orange-500/15" },
      { icon: Zap, label: "2. IA Converte", color: "text-amber-400 bg-amber-500/15" },
      { icon: Pencil, label: "3. Monta Post", color: "text-violet-400 bg-violet-500/15" },
      { icon: Send, label: "4. Dispara", color: "text-emerald-400 bg-emerald-500/15" },
    ],
    footerText: "Do link original ao disparo completo em",
    footerHighlight: "menos de 1 minuto.",
    image: rapidezImg,
    imageAlt: "Criação rápida de posts na IA Divulgadora",
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
    flow: [
      { icon: Clock, label: "1. Agenda", color: "text-blue-400 bg-blue-500/15" },
      { icon: Pencil, label: "2. Personaliza", color: "text-violet-400 bg-violet-500/15" },
      { icon: Target, label: "3. Organiza", color: "text-orange-400 bg-orange-500/15" },
      { icon: Send, label: "4. Publica", color: "text-emerald-400 bg-emerald-500/15" },
    ],
    footerText: "Cada produto divulgado na",
    footerHighlight: "hora ideal.",
    visual: {
      sourceLabel: "+ Ofertas na fila",
      sourceAccent: "text-blue-400",
      resultLabel: "+ Publicado no horário",
      resultAccent: "text-violet-400",
      sourceTitle: "Fila de Envios",
      resultTitle: "Grupos no horário de pico",
    },
  },
];

const accentMap = {
  sky: {
    featureIcon: "border border-sky-500/25 bg-sky-500/10 text-sky-300",
    visualGlow: "shadow-[0_0_60px_-15px_rgba(56,189,248,0.25)]",
    visualBorder: "border-sky-500/20",
  },
  emerald: {
    featureIcon: "border border-cta/25 bg-cta/10 text-cta",
    visualGlow: "shadow-[0_0_60px_-15px_color-mix(in_oklab,var(--cta)_35%,transparent)]",
    visualBorder: "border-cta/25",
  },
  orange: {
    featureIcon: "border border-orange-500/25 bg-orange-500/10 text-orange-300",
    visualGlow: "shadow-[0_0_60px_-15px_rgba(251,146,60,0.3)]",
    visualBorder: "border-orange-500/25",
  },
  blue: {
    featureIcon: "border border-amber-500/25 bg-amber-500/10 text-amber-300",
    visualGlow: "shadow-[0_0_60px_-15px_rgba(245,158,11,0.25)]",
    visualBorder: "border-amber-500/20",
  },
};

function SourceMockup({
  label,
  accent,
  title,
}: {
  label: string;
  accent: string;
  title: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/35 p-3 backdrop-blur-sm">
      <p className={cn("mb-2 text-[9px] font-bold uppercase tracking-wider", accent)}>{label}</p>
      <div className="rounded-lg border border-white/5 bg-black/40 p-2.5">
        <p className="site-subtle text-[10px]">{title}</p>
        <div className="mt-2 flex gap-2">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-lg">
            🍳
          </div>
          <div className="min-w-0">
            <p className="site-lead text-[11px] font-medium leading-snug">
              Air Fryer 5L — Oferta imperdível!
            </p>
            <p className="mt-1 text-sm font-bold text-white">R$ 199,90</p>
            <span className="mt-1 inline-block rounded bg-red-500/20 px-1.5 py-0.5 text-[9px] font-bold text-red-400">
              -15%
            </span>
          </div>
        </div>
        <p className="site-subtle mt-2 truncate text-[9px]">shope.ee/link-original...</p>
      </div>
    </div>
  );
}

function ResultMockup({
  label,
  accent,
  title,
}: {
  label: string;
  accent: string;
  title: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/35 p-3 backdrop-blur-sm">
      <p className={cn("mb-2 text-[9px] font-bold uppercase tracking-wider", accent)}>{label}</p>
      <div className="overflow-hidden rounded-lg border border-white/5 bg-[#0b1419]">
        <div className="bg-emerald-800/80 px-2.5 py-1.5">
          <p className="text-[10px] font-medium text-white">{title}</p>
        </div>
        <div className="site-copy space-y-1 p-2.5 text-[10px] leading-relaxed">
          <p>🔥 Air Fryer 5L com super desconto!</p>
          <p>✅ Frete grátis selecionado</p>
          <p>💰 De R$ 235 por R$ 199,90</p>
          <p>🎫 Cupom: PROMO15</p>
          <p className="text-sky-400">🔗 shope.ee/seu-link-afiliado</p>
        </div>
        <div className="flex items-center justify-between border-t border-white/5 px-2.5 py-1.5">
          <span className="text-[9px] text-emerald-400">✓ Enviado com sucesso</span>
          <span className="site-subtle text-[9px]">14:32</span>
        </div>
      </div>
    </div>
  );
}

function ModeStepImage({
  src,
  alt,
  accentKey,
}: {
  src: string;
  alt: string;
  accentKey: ModeConfig["accent"];
}) {
  const accent = accentMap[accentKey];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-cta/25 bg-black/40 p-2 shadow-[0_0_50px_-20px_color-mix(in_oklab,var(--cta)_35%,transparent)] backdrop-blur-sm",
        accent.visualBorder,
        accent.visualGlow,
      )}
    >
      <div className="overflow-hidden rounded-xl border border-white/5">
        <img src={src} alt={alt} className="block h-auto w-full object-cover" loading="lazy" />
      </div>
    </div>
  );
}

function ModeVisual({ mode }: { mode: ModeConfig }) {
  if (!mode.visual) return null;

  const accent = accentMap[mode.accent];
  const visual = mode.visual;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-black/40 p-4 backdrop-blur-sm md:p-5",
        accent.visualBorder,
        accent.visualGlow,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,color-mix(in_oklab,var(--cta)_8%,transparent),transparent_65%)]"
      />

      <div className="mode-flow-row relative mb-6 flex flex-wrap items-center justify-between gap-2">
        {mode.flow.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex items-center gap-1">
              <div className="flex flex-col items-center gap-1.5">
                <div className={cn("flex size-9 items-center justify-center rounded-full", step.color)}>
                  <Icon className="size-4" strokeWidth={2} />
                </div>
                <span className="site-muted max-w-[4.5rem] text-center text-[9px] leading-tight">
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

      <div className="relative grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
        <SourceMockup
          label={visual.sourceLabel}
          accent={visual.sourceAccent}
          title={visual.sourceTitle}
        />
        <div className="hidden justify-center sm:flex">
          <div className="flex size-9 items-center justify-center rounded-xl border border-cta/30 bg-cta/10 text-cta">
            <ChevronRight className="size-5" strokeWidth={2.5} />
            <ChevronRight className="-ml-3 size-5" strokeWidth={2.5} />
          </div>
        </div>
        <ResultMockup
          label={visual.resultLabel}
          accent={visual.resultAccent}
          title={visual.resultTitle}
        />
      </div>
    </div>
  );
}

function ModeStepSection({ mode, index }: { mode: ModeConfig; index: number }) {
  const accent = accentMap[mode.accent];
  const imageFirst = index % 2 === 0;
  const TabIcon = mode.tabIcon;

  return (
    <div
      className={cn(
        "mode-step-section relative border-t border-white/8 py-12 md:py-16",
        index === 0 && "mt-10 md:mt-12",
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 opacity-70",
          imageFirst
            ? "bg-[radial-gradient(ellipse_55%_45%_at_0%_50%,color-mix(in_oklab,var(--cta)_7%,transparent),transparent_70%)]"
            : "bg-[radial-gradient(ellipse_55%_45%_at_100%_50%,color-mix(in_oklab,var(--cta)_7%,transparent),transparent_70%)]",
        )}
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div
          className={cn(
            "order-1 flex flex-col",
            imageFirst ? "lg:order-1" : "lg:order-2",
          )}
        >
          {mode.image ? (
            <ModeStepImage
              src={mode.image}
              alt={mode.imageAlt ?? mode.modeLabel}
              accentKey={mode.accent}
            />
          ) : (
            <ModeVisual mode={mode} />
          )}
          {mode.id !== "agendamento" && (
            <div
              className={cn(
                "mt-5 flex justify-center",
                imageFirst ? "lg:justify-start" : "lg:justify-end",
              )}
            >
              <CtaButton href="#planos" size="lg">
                Começar gratuitamente
              </CtaButton>
            </div>
          )}
        </div>

        <div className={cn("order-2 flex flex-col", imageFirst ? "lg:order-2" : "lg:order-1")}>
          <div className="section-badge mb-4 w-fit backdrop-blur-sm">
            <TabIcon className="size-3.5" strokeWidth={2.5} />
            <span>
              {mode.tabNumber} · {mode.tabTitle}
            </span>
          </div>

          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-cta">{mode.modeLabel}</p>
          <h3 className="mt-2 text-balance text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2rem]">
            {mode.headline}{" "}
            <span className="section-title-gradient">{mode.headlineHighlight}</span>
          </h3>
          <p className="site-copy mt-3 text-pretty text-sm leading-relaxed sm:text-base">
            {mode.description}
          </p>

          <ul className="mt-6 space-y-2.5">
            {mode.features.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-3 py-2.5 backdrop-blur-sm"
              >
                <div
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-lg",
                    accent.featureIcon,
                  )}
                >
                  <Icon className="size-4" strokeWidth={2} />
                </div>
                <span className="site-lead text-sm">{text}</span>
              </li>
            ))}
          </ul>

          <p className="site-copy mt-6 text-sm sm:mt-8 sm:text-base">
            {mode.footerText}{" "}
            <span className="font-semibold text-orange-400">{mode.footerHighlight}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function Modes() {
  return (
    <section
      id="modos"
      className="panel-showcase relative overflow-hidden border-t border-white/8 py-12 md:py-24"
    >
      <div aria-hidden className="panel-showcase-lights pointer-events-none absolute inset-0 overflow-hidden">
        <div className="panel-showcase-light panel-showcase-light--blue" />
        <div className="panel-showcase-light panel-showcase-light--orange" />
        <div className="panel-showcase-light panel-showcase-light--blue-soft" />
        <div className="panel-showcase-vignette" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,color-mix(in_oklab,var(--cta)_10%,transparent),transparent_55%)]"
      />

      <SectionContainer className="relative z-10">
        <div className="text-center">
          <div className="section-badge mx-auto mb-5 w-fit backdrop-blur-sm">
            <Sparkles className="size-3.5" strokeWidth={2.5} />
            <span>Automação inteligente</span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Como Funciona a{" "}
            <span className="section-title-gradient">IA Divulgadora</span>?
          </h2>
          <p className="site-copy mx-auto mt-3 max-w-xl text-pretty text-sm sm:text-base">
            Quatro formas poderosas de automatizar suas vendas de afiliado
          </p>
        </div>

        {modes.map((mode, index) => (
          <ModeStepSection key={mode.id} mode={mode} index={index} />
        ))}

        <SectionCta />
        <ControlDetails />
      </SectionContainer>
    </section>
  );
}
