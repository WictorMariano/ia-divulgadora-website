import { Hero } from "./Hero";
import { SiteFlowBackground } from "./SiteFlowBackground";
import { HeroScroll } from "./HeroScroll";
import { MarketplacesStrip } from "./Marketplaces";
import { Results } from "./Results";
import { Problems } from "./Problems";
import { Modes } from "./Modes";
import { Superpowers } from "./Superpowers";
import { ExclusiveFeatures } from "./ExclusiveFeatures";
import { MultiConnection } from "./MultiConnection";
import { MarketplaceIntegrations } from "./MarketplaceIntegrations";
import { NovaPlataforma } from "./NovaPlataforma";
import { AllResources } from "./AllResources";
import { Pricing } from "./Pricing";
import { Testimonials } from "./Testimonials";
import { Support } from "./Support";
import { ClosingExperience } from "./closing/ClosingExperience";

export function Landing() {
  return (
    <div className="relative min-h-screen bg-site text-foreground">
      <SiteFlowBackground />
      <main className="relative z-10">
        <Hero />
        <section className="marketplaces-bridge relative overflow-hidden bg-base">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black to-base"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-orange-500/18 blur-[90px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-1/3 h-48 w-48 rounded-full bg-sky-500/14 blur-[80px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-sky-400/8 blur-[70px]"
          />
          <div className="relative mx-auto max-w-7xl px-6">
            <MarketplacesStrip />
          </div>
        </section>
        <HeroScroll />
        <Results />
        <Problems />
        <Modes />
        <Superpowers />
        <ExclusiveFeatures />
        <MultiConnection />
        <MarketplaceIntegrations />
        <NovaPlataforma />
        <AllResources />
        <Pricing />
        <Testimonials />
        <Support />
        <ClosingExperience />
      </main>
    </div>
  );
}
