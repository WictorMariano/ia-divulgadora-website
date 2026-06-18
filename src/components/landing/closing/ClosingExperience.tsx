import { ClosingBackground } from "./ClosingBackground";
import { FaqSection } from "./FaqSection";
import { PremiumFooter } from "./PremiumFooter";
import { SectionFullInner } from "../SectionPanel";

export function ClosingExperience() {
  return (
    <>
      <section id="faq" className="section-full-bleed section-full-bleed--closing">
        <ClosingBackground />
        <SectionFullInner className="relative z-10 py-16 pb-8 md:py-20 md:pb-10">
          <FaqSection embedded />
        </SectionFullInner>
      </section>
      <PremiumFooter />
    </>
  );
}
