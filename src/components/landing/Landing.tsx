import { Hero } from "./Hero";
import { SiteFlowBackground } from "./SiteFlowBackground";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
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
    <ThemeProvider>
      <div className="relative min-h-screen max-w-full overflow-x-clip bg-site">
        <SiteFlowBackground />
        <main className="relative z-10 max-w-full overflow-x-clip">
          <Hero />
          <NovaPlataforma />
          <Problems />
          <div className="marketplaces-separator">
            <div className="relative mx-auto max-w-7xl px-6">
              <MarketplacesStrip />
            </div>
          </div>
          <Modes />
          <Superpowers />
          <ExclusiveFeatures />
          <MultiConnection />
          <MarketplaceIntegrations />
          <HeroScroll />
          <AllResources />
          <Pricing />
          <Support />
          <Testimonials />
          <ClosingExperience />
        </main>
      </div>
    </ThemeProvider>
  );
}
