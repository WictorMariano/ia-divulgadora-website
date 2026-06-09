import { ArrowRight, Check, Link2, Shield } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./SectionContainer";
import amazonLogo from "@/assets/marketplaces/amazon_logo.png";
import avonLogo from "@/assets/marketplaces/avon_logo.png";
import magaluLogo from "@/assets/marketplaces/magalu_logo.png";
import mercadoLivreLogo from "@/assets/marketplaces/mercado_livre_logo.png";
import naturaLogo from "@/assets/marketplaces/natura_logo.png";
import sheinLogo from "@/assets/marketplaces/shein_logo.png";
import shopeeLogo from "@/assets/marketplaces/shopee_logo.png";

type Marketplace = {
  name: string;
  description: string;
  logo: string;
  border: string;
  glow: string;
};

const marketplaces: Marketplace[] = [
  {
    name: "Shopee",
    description: "Ofertas e links de afiliado",
    logo: shopeeLogo,
    border: "border-orange-500/25",
    glow: "shadow-[0_0_28px_-10px_rgba(251,146,60,0.45)]",
  },
  {
    name: "Amazon",
    description: "Ofertas Amazon com link automático",
    logo: amazonLogo,
    border: "border-amber-500/20",
    glow: "shadow-[0_0_28px_-10px_rgba(251,191,36,0.3)]",
  },
  {
    name: "Magalu",
    description: "Ofertas e cupons Magalu",
    logo: magaluLogo,
    border: "border-sky-500/25",
    glow: "shadow-[0_0_28px_-10px_rgba(56,189,248,0.35)]",
  },
  {
    name: "Natura",
    description: "Consultora e links Natura",
    logo: naturaLogo,
    border: "border-orange-400/20",
    glow: "shadow-[0_0_28px_-10px_rgba(251,146,60,0.25)]",
  },
  {
    name: "Mercado Livre",
    description: "Maior marketplace da América Latina",
    logo: mercadoLivreLogo,
    border: "border-yellow-500/25",
    glow: "shadow-[0_0_28px_-10px_rgba(234,179,8,0.35)]",
  },
  {
    name: "Shein",
    description: "Moda e ofertas Shein",
    logo: sheinLogo,
    border: "border-white/15",
    glow: "shadow-[0_0_28px_-10px_rgba(255,255,255,0.12)]",
  },
  {
    name: "Avon",
    description: "Catálogo e consultora Avon",
    logo: avonLogo,
    border: "border-pink-500/25",
    glow: "shadow-[0_0_28px_-10px_rgba(236,72,153,0.35)]",
  },
];

function MarketplaceCard({ marketplace }: { marketplace: Marketplace }) {
  return (
    <article
      className={cn(
        "mx-2.5 flex w-[148px] shrink-0 flex-col items-center rounded-2xl border bg-[#0a0e14]/90 px-3 py-4 backdrop-blur-sm sm:mx-3 sm:w-[156px]",
        marketplace.border,
        marketplace.glow,
      )}
    >
      <div className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-white p-2 sm:size-[3.25rem] sm:p-2.5">
        <img
          src={marketplace.logo}
          alt={`Logo ${marketplace.name}`}
          className="size-full object-contain"
          loading="lazy"
        />
      </div>

      <h3 className="mt-3 text-center text-sm font-bold text-white">{marketplace.name}</h3>
      <p className="on-dark-copy-muted mt-1.5 line-clamp-2 min-h-[2.25rem] text-center text-[11px] leading-snug">
        {marketplace.description}
      </p>

      <span className="mt-3 inline-flex items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
        <Check className="size-3" strokeWidth={3} />
        Conectado
      </span>
    </article>
  );
}

export function MarketplaceIntegrations() {
  return (
    <section
      id="integracoes"
      className="relative overflow-hidden border-t border-white/8 py-14 md:py-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,oklch(0.68_0.19_48/0.07),transparent_55%)]"
      />

      <SectionContainer>
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5">
            <Link2 className="size-3.5 text-orange-400" strokeWidth={2.5} />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-300">
              Ecossistema integrado
            </span>
          </div>

          <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Marketplaces{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-pink-400 bg-clip-text text-transparent">
              Integrados
            </span>
          </h2>
          <p className="on-dark-copy-muted mx-auto mt-2 max-w-2xl text-sm sm:text-base">
            Conectamos você diretamente às principais lojas e marketplaces. Mais ofertas, mais
            automação, mais resultados.
          </p>
        </div>

        <div className="relative mt-8 -mx-6 sm:mt-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#05070d] to-transparent sm:w-20"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#05070d] to-transparent sm:w-20"
          />

          <Marquee pauseOnHover speed={42} className="py-1">
            {marketplaces.map((marketplace) => (
              <MarketplaceCard key={marketplace.name} marketplace={marketplace} />
            ))}
          </Marquee>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3.5 sm:flex-row sm:px-5">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400">
              <Shield className="size-4" strokeWidth={2} />
            </div>
            <p className="on-dark-copy-muted text-xs leading-relaxed sm:text-sm">
              Novos marketplaces integrados constantemente.{" "}
              <span className="text-white">Solicite o que precisar.</span>
            </p>
          </div>
          <a
            href="#planos"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-sky-400 transition-colors hover:text-sky-300"
          >
            Ver todos os marketplaces
            <ArrowRight className="size-4" />
          </a>
        </div>
      </SectionContainer>
    </section>
  );
}
