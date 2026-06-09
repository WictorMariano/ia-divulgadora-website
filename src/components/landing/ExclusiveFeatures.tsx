import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Clock,
  ImageIcon,
  Megaphone,
  Sparkles,
  Timer,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./SectionContainer";
import intervalosImg from "@/assets/intervalos-config.jpg";
import furaFilaImg from "@/assets/furafila-config222.jpg";
import linkPreviewImg from "@/assets/linkpreview-config.jpg";

type FeatureTheme = "sky" | "orange" | "violet" | "rose" | "amber" | "purple";

type ExclusiveFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
  theme: FeatureTheme;
  image?: string;
  imageAlt?: string;
  mockup?: "marcar-todos" | "subid" | "horario";
};

const themeStyles: Record<
  FeatureTheme,
  { iconBox: string; icon: string; border: string }
> = {
  sky: {
    iconBox: "bg-sky-500/15",
    icon: "text-sky-400",
    border: "hover:border-sky-500/30",
  },
  orange: {
    iconBox: "bg-orange-500/15",
    icon: "text-orange-400",
    border: "hover:border-orange-500/30",
  },
  violet: {
    iconBox: "bg-violet-500/15",
    icon: "text-violet-400",
    border: "hover:border-violet-500/30",
  },
  rose: {
    iconBox: "bg-rose-500/15",
    icon: "text-rose-400",
    border: "hover:border-rose-500/30",
  },
  amber: {
    iconBox: "bg-amber-500/15",
    icon: "text-amber-400",
    border: "hover:border-amber-500/30",
  },
  purple: {
    iconBox: "bg-purple-500/15",
    icon: "text-purple-400",
    border: "hover:border-purple-500/30",
  },
};

const features: ExclusiveFeature[] = [
  {
    title: "Intervalos",
    description:
      "De 1 a 30 minutos entre envios. Horário de início e término. Limpeza automática de pendentes.",
    icon: Timer,
    theme: "sky",
    image: intervalosImg,
    imageAlt: "Configuração de intervalos de envio na IA Divulgadora",
  },
  {
    title: "Fura Fila",
    description:
      "Ofertas recentes passam na frente. Flash sales não ficam esperando atrás de ofertas antigas.",
    icon: Zap,
    theme: "orange",
    image: furaFilaImg,
    imageAlt: "Modo Fura-Fila para priorizar ofertas recentes",
  },
  {
    title: "Link Preview",
    description:
      "Ofertas com pré-visualização clicável: imagem, título e preço. Post profissional.",
    icon: ImageIcon,
    theme: "violet",
    image: linkPreviewImg,
    imageAlt: "Formato Link Preview com imagem, título e preço",
  },
  {
    title: "Marcar Todos",
    description:
      "Mencione todos os membros do grupo de uma vez. A notificação chega pra cada um — ninguém perde a oferta.",
    icon: Megaphone,
    theme: "rose",
    mockup: "marcar-todos",
  },
  {
    title: "SubID por Marketplace",
    description:
      "Saiba qual grupo gera suas comissões. Descubra o que funciona e dobre a aposta.",
    icon: BarChart3,
    theme: "amber",
    mockup: "subid",
  },
  {
    title: "Horário de Funcionamento",
    description:
      "Defina quando sua loja opera. Fora do horário, o sistema para de receber links. Filas e agendamentos continuam rodando.",
    icon: Clock,
    theme: "purple",
    mockup: "horario",
  },
];

function MarcarTodosMockup() {
  return (
    <div className="space-y-2 p-3">
      <div className="rounded-lg border border-white/10 bg-black/40 p-2.5">
        <p className="text-[10px] font-semibold text-white">Cupom exclusivo @todos</p>
        <p className="mt-1 text-[9px] leading-relaxed text-[#b8b8c2]">
          🔥 Últimas horas! Air Fryer com 40% OFF — só pra quem está no grupo agora.
        </p>
      </div>
      <div className="flex flex-wrap gap-1">
        {["Ana", "João", "Maria", "+248"].map((name) => (
          <span
            key={name}
            className="rounded-full border border-rose-500/25 bg-rose-500/10 px-2 py-0.5 text-[8px] font-medium text-rose-300"
          >
            @{name}
          </span>
        ))}
      </div>
      <p className="text-center text-[8px] text-[#9a9aa8]">Notificação enviada para todos os membros</p>
    </div>
  );
}

function SubIdMockup() {
  const marketplaces = [
    { name: "Shopee", badge: "2 SubIDs", tags: ["whatsapp", "maternidade"], color: "text-orange-400" },
    { name: "Amazon", badge: "Tag", tags: ["grupo-ofertas"], color: "text-amber-300" },
    { name: "Mercado Livre", badge: "Etiqueta", tags: ["black-friday"], color: "text-sky-400" },
  ];

  return (
    <div className="space-y-2 p-3">
      {marketplaces.map((mp) => (
        <div
          key={mp.name}
          className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-black/40 px-2.5 py-2"
        >
          <div className="min-w-0">
            <p className={cn("text-[10px] font-bold", mp.color)}>{mp.name}</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {mp.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-white/5 px-1.5 py-0.5 text-[7px] text-[#b8b8c2]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="shrink-0 rounded-md bg-sky-500/20 px-1.5 py-0.5 text-[8px] font-bold text-sky-300">
            {mp.badge}
          </span>
        </div>
      ))}
    </div>
  );
}

function HorarioMockup() {
  return (
    <div className="p-3">
      <div className="rounded-lg border border-white/10 bg-black/40 p-3">
        <div className="flex justify-between text-[8px] text-[#9a9aa8]">
          <span>06h</span>
          <span>12h</span>
          <span>18h</span>
          <span>23h</span>
        </div>
        <div className="relative mt-2 h-2 overflow-hidden rounded-full bg-white/5">
          <div className="absolute inset-y-0 left-[18%] right-[28%] rounded-full bg-gradient-to-r from-sky-500 to-violet-500" />
        </div>
        <div className="mt-3 flex justify-between text-[9px]">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Abre 09:00
          </span>
          <span className="flex items-center gap-1 text-rose-400">
            <span className="size-1.5 rounded-full bg-rose-400" />
            Fecha 19:00
          </span>
        </div>
      </div>
    </div>
  );
}

function FeatureMockup({ type }: { type: NonNullable<ExclusiveFeature["mockup"]> }) {
  switch (type) {
    case "marcar-todos":
      return <MarcarTodosMockup />;
    case "subid":
      return <SubIdMockup />;
    case "horario":
      return <HorarioMockup />;
  }
}

function FeatureCard({ feature }: { feature: ExclusiveFeature }) {
  const Icon = feature.icon;
  const theme = themeStyles[feature.theme];

  return (
    <article
      className={cn(
        "on-dark-copy group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f18] transition-colors",
        theme.border,
      )}
    >
      <span className="absolute right-0 top-0 z-10 rounded-bl-xl rounded-tr-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
        Novo
      </span>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-3 pr-10">
          <div
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-xl",
              theme.iconBox,
            )}
          >
            <Icon className={cn("size-5", theme.icon)} strokeWidth={2} />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-bold text-white">{feature.title}</h3>
            <p className="on-dark-copy-muted mt-2 text-sm leading-relaxed">{feature.description}</p>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border border-white/5 bg-black/50">
          {feature.image ? (
            <img
              src={feature.image}
              alt={feature.imageAlt ?? feature.title}
              className="w-full object-cover object-top"
              loading="lazy"
            />
          ) : feature.mockup ? (
            <FeatureMockup type={feature.mockup} />
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ExclusiveFeatures() {
  return (
    <section
      id="recursos-exclusivos"
      className="relative overflow-hidden border-t border-white/8 py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,oklch(0.68_0.19_48/0.06),transparent_60%)]"
      />

      <SectionContainer>
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5">
            <Sparkles className="size-3.5 text-orange-400" strokeWidth={2.5} />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-300">
              Só na IA Divulgadora
            </span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recursos{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Exclusivos
            </span>
          </h2>
          <p className="on-dark-copy-muted mx-auto mt-3 max-w-2xl text-sm sm:text-base">
            Ferramentas que você não encontra em outras plataformas — feitas para afiliados que
            querem controle total e escala sem perder qualidade.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
