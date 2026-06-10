import { ArrowRight, Link2, Shield } from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import amazonLogo from "@/assets/marketplaces/amazon_logo.png";
import avonLogo from "@/assets/marketplaces/avon_logo.png";
import magaluLogo from "@/assets/marketplaces/magalu_logo.png";
import mercadoLivreLogo from "@/assets/marketplaces/mercado_livre_logo.png";
import naturaLogo from "@/assets/marketplaces/natura_logo.png";
import sheinLogo from "@/assets/marketplaces/shein_logo.png";
import shopeeLogo from "@/assets/marketplaces/shopee_logo.png";

const marketplaces = [
  { name: "Shopee", logo: shopeeLogo },
  { name: "Amazon", logo: amazonLogo },
  { name: "Magalu", logo: magaluLogo },
  { name: "Natura", logo: naturaLogo },
  { name: "Mercado Livre", logo: mercadoLivreLogo },
  { name: "Shein", logo: sheinLogo },
  { name: "Avon", logo: avonLogo },
];

function MarketplaceLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="marketplace-logo-tile">
      <img
        src={logo}
        alt={`Logo ${name}`}
        className="marketplace-logo-tile__image"
        loading="lazy"
      />
    </div>
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

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
          {marketplaces.map((marketplace) => (
            <MarketplaceLogo key={marketplace.name} name={marketplace.name} logo={marketplace.logo} />
          ))}
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
