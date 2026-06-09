import { RefreshCw, Shield, Sparkles, Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import multiconexaoImg from "@/assets/multiconexao-v2.jpg";
import { SectionContainer } from "./SectionContainer";

const features = [
  {
    icon: Zap,
    iconBg: "bg-orange-500/15",
    iconColor: "text-orange-400",
    titleColor: "text-orange-400",
    title: "Distribua os envios",
    desc: "Divida a carga entre vários números conectados.",
  },
  {
    icon: Shield,
    iconBg: "bg-sky-500/15",
    iconColor: "text-sky-400",
    titleColor: "text-sky-400",
    title: "Reduza riscos",
    desc: "Menos chance de restrição e gargalo nos envios.",
  },
  {
    icon: Target,
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-400",
    titleColor: "text-violet-400",
    title: "Modo de disparo",
    desc: "Aleatório ou por blocos: você escolhe a estratégia.",
  },
  {
    icon: RefreshCw,
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    titleColor: "text-emerald-400",
    title: "Fallback automático",
    desc: "Se um número cair, outro assume na hora.",
  },
];

function HandwrittenArrow({
  direction = "down",
  colorClass,
}: {
  direction?: "up" | "down";
  colorClass: string;
}) {
  if (direction === "up") {
    return (
      <svg
        viewBox="0 0 48 64"
        className={cn("mt-0.5 w-7 shrink-0 sm:w-8", colorClass)}
        aria-hidden
        fill="none"
      >
        <circle cx="10" cy="57" r="3" fill="currentColor" />
        <path
          d="M10 53 C 8 42, 6 30, 14 20 C 18 15, 24 12, 30 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M25 16 L 31 13 L 28 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 64"
      className={cn("mt-0.5 w-7 shrink-0 sm:w-8", colorClass)}
      aria-hidden
      fill="none"
    >
      <circle cx="10" cy="7" r="3" fill="currentColor" />
      <path
        d="M10 11 C 8 22, 6 34, 16 46 C 20 50, 26 52, 32 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M27 47 L 33 50 L 30 44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HandwrittenCaption({
  children,
  color,
  direction = "down",
  className,
}: {
  children: React.ReactNode;
  color: "green" | "orange";
  direction?: "up" | "down";
  className?: string;
}) {
  const colorClass = color === "green" ? "text-emerald-400" : "text-orange-400";
  const noteClass =
    color === "green" ? "handwritten-note handwritten-note-green" : "handwritten-note handwritten-note-orange";

  return (
    <div
      className={cn(
        "flex items-start justify-center gap-0.5 sm:gap-1 lg:justify-start",
        className,
      )}
    >
      <HandwrittenArrow direction={direction} colorClass={colorClass} />
      <p className={cn(noteClass, "text-base leading-snug sm:text-lg")}>{children}</p>
    </div>
  );
}

export function MultiConnection() {
  return (
    <section
      id="multiconexao"
      className="relative overflow-x-hidden border-t border-white/8 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_85%_45%,oklch(0.52_0.12_250/0.1),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_70%,oklch(0.68_0.19_48/0.06),transparent_55%)]"
      />

      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.12fr] lg:gap-14 xl:gap-16">
          <div className="on-dark-copy">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/35 bg-orange-500/10 px-4 py-1.5">
              <Sparkles className="size-3.5 text-orange-400" strokeWidth={2.5} />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-300">
                Novo recurso
              </span>
            </div>

            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
              Multi
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                conexão
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed sm:text-lg">
              Conecte vários WhatsApps na mesma conta e distribua os envios entre eles — reduzindo
              riscos e garantindo que seus grupos nunca fiquem sem ofertas.
            </p>

            <ul className="mt-9 space-y-6">
              {features.map(({ icon: Icon, iconBg, iconColor, titleColor, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <div
                    className={cn(
                      "flex size-11 shrink-0 items-center justify-center rounded-xl",
                      iconBg,
                    )}
                  >
                    <Icon className={cn("size-5", iconColor)} strokeWidth={2} />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className={cn("text-sm font-bold sm:text-base", titleColor)}>{title}</p>
                    <p className="on-dark-copy-muted mt-1 text-sm leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex gap-4 rounded-2xl border border-orange-500/30 bg-orange-500/[0.05] px-5 py-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                <Shield className="size-5" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-bold text-white sm:text-base">
                  Mais estabilidade. Mais performance.
                </p>
                <p className="on-dark-copy-muted mt-1 text-sm leading-relaxed">
                  Envios inteligentes que protegem sua conta e maximizam seus resultados.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full overflow-visible px-1 py-10 sm:py-11 lg:mx-0 lg:w-[108%] lg:max-w-none lg:py-12">
            <div
              className="pointer-events-none absolute inset-x-0 bottom-full z-20 mb-1 animate-float-gentle sm:mb-1.5"
              style={{ animationDelay: "0s" }}
            >
              <HandwrittenCaption color="green" direction="up">
                Gerencie todas as suas conexões em um só lugar
              </HandwrittenCaption>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1018] p-2 shadow-[0_0_50px_-20px_rgba(56,189,248,0.35)] lg:scale-[1.04] lg:origin-center">
              <div className="overflow-hidden rounded-xl border border-white/5 bg-white">
                <img
                  src={multiconexaoImg}
                  alt="Painel de Multiconexão da IA Divulgadora com gerenciamento de múltiplos WhatsApps"
                  className="block w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-x-0 top-full z-20 mt-1 animate-float-gentle sm:mt-1.5"
              style={{ animationDelay: "2.2s" }}
            >
              <HandwrittenCaption color="orange" direction="down">
                Visualize o status de cada conexão e tenha controle total.
              </HandwrittenCaption>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
