import { ClosingBackground } from "./ClosingBackground";
import { ClosingCta } from "./ClosingCta";
import { FaqSection } from "./FaqSection";
import { PremiumFooter } from "./PremiumFooter";
import { SectionFullInner } from "../SectionPanel";

export function ClosingExperience() {
  return (
    <>
      <section id="faq" className="section-full-bleed section-full-bleed--closing">
        <div className="section-panel section-panel--full section-panel--closing overflow-visible">
          <ClosingBackground />
          <SectionFullInner className="relative z-10 pt-16 pb-0 md:pt-20">
            <FaqSection embedded />
            <div aria-hidden className="closing-faq-cta-bridge mx-auto my-14 max-w-2xl md:my-16" />
            <ClosingCta embedded />
            <div className="pb-16 md:pb-20" />
          </SectionFullInner>
        </div>
      </section>
      <PremiumFooter />
    </>
  );
}
