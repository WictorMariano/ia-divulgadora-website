"use client";

import { ChevronDown, Link2, Shield } from "lucide-react";
import { useState } from "react";
import amazonLogo from "@/assets/marketplaces/amazon_logo.png";
import avonLogo from "@/assets/marketplaces/avon_logo.png";
import magaluLogo from "@/assets/marketplaces/magalu_logo.png";
import mercadoLivreLogo from "@/assets/marketplaces/mercado_livre_logo.png";
import naturaLogo from "@/assets/marketplaces/natura_logo.png";
import sheinLogo from "@/assets/marketplaces/shein_logo.png";
import shopeeLogo from "@/assets/marketplaces/shopee_logo.png";
import { CtaButton } from "@/components/ui/cta-button";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./SectionContainer";

type Marketplace = {
  name: string;
  logo?: string;
};

const featuredMarketplaces: Marketplace[] = [
  { name: "Shopee", logo: shopeeLogo },
  { name: "Amazon", logo: amazonLogo },
  { name: "Magalu", logo: magaluLogo },
  { name: "Natura", logo: naturaLogo },
  { name: "Mercado Livre", logo: mercadoLivreLogo },
  { name: "Shein", logo: sheinLogo },
  { name: "Avon", logo: avonLogo },
];

const allMarketplaces: Marketplace[] = featuredMarketplaces;

function MarketplaceLogo({ name, logo }: Marketplace) {
  return (
    <div className="marketplace-logo-tile">
      {logo ? (
        <img
          src={logo}
          alt={`Logo ${name}`}
          className="marketplace-logo-tile__image"
          loading="lazy"
        />
      ) : (
        <span className="marketplace-logo-tile__label">{name}</span>
      )}
    </div>
  );
}

function MarketplaceCarouselItem({ marketplace }: { marketplace: Marketplace }) {
  return (
    <div className="mx-3 flex shrink-0 sm:mx-4">
      <MarketplaceLogo {...marketplace} />
    </div>
  );
}

export function MarketplaceIntegrations() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="integracoes" className="marketplace-integrations-section marketplace-integrations-section--continued">
      <div aria-hidden className="marketplace-integrations-section__ambient" />

      <SectionContainer className="relative z-10">
        <div className="marketplace-integrations-panel">
          <div aria-hidden className="marketplace-integrations-panel__glow" />

          <div className="relative z-10">
            <div className="text-center">
              <div className="section-badge mx-auto mb-4 w-fit backdrop-blur-sm">
                <Link2 className="size-3.5" strokeWidth={2.5} />
                <span>Ecossistema integrado</span>
              </div>

              <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Marketplaces{" "}
                <span className="section-title-gradient">Integrados</span>
              </h2>
              <p className="site-copy mx-auto mt-2 max-w-2xl text-sm sm:text-base">
                Conectamos você diretamente às principais lojas e marketplaces. Mais ofertas, mais
                automação, mais resultados.
              </p>
            </div>

            <div className="relative -mx-2 mt-8 sm:mx-0 sm:mt-10">
              <div
                aria-hidden
                className="marketplace-integrations-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-16"
              />
              <div
                aria-hidden
                className="marketplace-integrations-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-16"
              />

              <Marquee pauseOnHover speed={36}>
                {featuredMarketplaces.map((marketplace) => (
                  <MarketplaceCarouselItem key={marketplace.name} marketplace={marketplace} />
                ))}
              </Marquee>
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 sm:flex-row sm:px-5">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400">
                  <Shield className="size-4" strokeWidth={2} />
                </div>
                <p className="site-copy text-xs leading-relaxed sm:text-sm">
                  Novos marketplaces integrados constantemente.{" "}
                  <span className="text-white">Solicite o que precisar.</span>
                </p>
              </div>
            </div>

            {showAll && (
              <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6">
                {allMarketplaces.map((marketplace) => (
                  <div key={marketplace.name} className="flex flex-col items-center gap-2">
                    <MarketplaceLogo {...marketplace} />
                    <span className="site-subtle text-center text-[10px] font-medium sm:text-xs">
                      {marketplace.name}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="section-cta-row mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10">
              <CtaButton href="#planos" size="lg">
                Começar gratuitamente
              </CtaButton>
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                aria-expanded={showAll}
                className="site-button-secondary site-button-secondary--lg sm:w-auto"
              >
                {showAll ? "Ver menos" : "Ver todos"}
                <ChevronDown
                  className={cn("size-4 transition-transform duration-300", showAll && "rotate-180")}
                />
              </button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
