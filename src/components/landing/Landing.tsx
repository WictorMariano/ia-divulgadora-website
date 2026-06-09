import { Hero } from "./Hero";
import { SiteFlowBackground } from "./SiteFlowBackground";
import { HeroScroll } from "./HeroScroll";
import { MarketplacesStrip } from "./Marketplaces";
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
        <div className="marketplaces-separator">
          <div className="relative mx-auto max-w-7xl px-6">
            <MarketplacesStrip />
          </div>
        </div>
        <HeroScroll />
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
