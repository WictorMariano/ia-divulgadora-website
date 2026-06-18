import { RefreshCw, Shield, Sparkles, Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import multiconexaoImg from "@/assets/multiconexao-v2.jpg";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionContainer } from "./SectionContainer";
const features = [
  {
    icon: Zap,
    iconBg: "bg-cta/15",
    iconColor: "text-cta",
    titleColor: "text-cta",
    title: "Distribua os envios",
    desc: "Divida a carga entre vários números conectados.",
  },
  {
    icon: Shield,
    iconBg: "bg-orange-500/15",
    iconColor: "text-orange-400",
    titleColor: "text-orange-400",
    title: "Reduza riscos",
    desc: "Menos chance de restrição e gargalo nos envios.",
  },
  {
    icon: Target,
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
    titleColor: "text-amber-400",
    title: "Modo de disparo",
    desc: "Aleatório ou por blocos: você escolhe a estratégia.",
  },
  {
    icon: RefreshCw,
    iconBg: "bg-orange-600/15",
    iconColor: "text-orange-300",
    titleColor: "text-orange-300",
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
  color: "orange" | "amber";
  direction?: "up" | "down";
  className?: string;
}) {
  const colorClass = color === "amber" ? "text-amber-400" : "text-orange-400";
  const noteClass = "handwritten-note handwritten-note-orange";

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

function StabilityCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex gap-4 rounded-2xl border border-orange-500/30 bg-orange-500/[0.05] px-5 py-4",
        className,
      )}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
        <Shield className="size-5" strokeWidth={2} />
      </div>
      <div>
        <p className="text-sm font-bold text-white sm:text-base">
          Mais estabilidade. Mais performance.
        </p>
        <p className="site-copy mt-1 text-sm leading-relaxed">
          Envios inteligentes que protegem sua conta e maximizam seus resultados.
        </p>
      </div>
    </div>
  );
}

export function MultiConnection() {
  return (
    <section
      id="multiconexao"
      className="marketplace-integrations-section border-t border-white/8 pt-24 pb-0 md:pt-32"
    >
      <div aria-hidden className="marketplace-integrations-section__ambient" />

      <SectionContainer className="relative z-10">
        <div className="marketplace-integrations-panel">
          <div aria-hidden className="marketplace-integrations-panel__glow" />

          <div className="relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.12fr] lg:gap-14 xl:gap-16">
              <div className="on-dark-copy">
                <div className="section-badge mb-6 w-fit backdrop-blur-sm">
                  <Sparkles className="size-3.5" strokeWidth={2.5} />
                  <span>Novo recurso</span>
                </div>

                <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
                  Multi<span className="section-title-gradient">conexão</span>
                </h2>

                <p className="site-lead mt-5 max-w-lg text-pretty text-base leading-relaxed sm:text-lg">
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
                        <p className="site-copy mt-1 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex justify-start">
                  <CtaButton href="#planos" size="lg">
                    Começar gratuitamente
                  </CtaButton>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-full px-1 py-10 sm:py-11 lg:mx-0 lg:py-12">
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-full z-20 mb-1 max-w-full animate-float-gentle sm:mb-1.5"
                  style={{ animationDelay: "0s" }}
                >
                  <HandwrittenCaption color="amber" direction="up">
                    Gerencie todas as suas conexões em um só lugar
                  </HandwrittenCaption>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-cta/25 bg-black/40 p-2 shadow-[0_0_50px_-20px_color-mix(in_oklab,var(--cta)_45%,transparent)] backdrop-blur-sm">
                  <div className="overflow-hidden rounded-xl border border-white/5 bg-white">
                    <img
                      src={multiconexaoImg}
                      alt="Painel de Multiconexão da IA Divulgadora com gerenciamento de múltiplos WhatsApps"
                      className="block h-auto w-full"
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

            <div className="mt-10 border-t border-orange-500/20 pt-8 md:mt-12 md:pt-10">
              <StabilityCard className="w-full max-w-xl mx-auto" />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
