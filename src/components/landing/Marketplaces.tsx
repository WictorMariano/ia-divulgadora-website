import { Marquee } from "@/components/ui/marquee";

const marketplaces = [
  "Amazon",
  "Mercado Livre",
  "Shopee",
  "Magalu",
  "AliExpress",
  "Americanas",
];

export function MarketplacesStrip() {
  return (
    <div id="marketplaces" className="relative z-10 py-3 md:py-3.5">
      <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] site-subtle">
        Marketplaces integrados
      </p>

      <div className="relative -mx-6 md:-mx-0">
        <div
          aria-hidden
          className="marketplaces-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-site-panel via-site-panel/80 to-transparent md:w-24"
        />
        <div
          aria-hidden
          className="marketplaces-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-site-panel via-site-panel/80 to-transparent md:w-24"
        />

        <Marquee pauseOnHover speed={32}>
          {marketplaces.map((name) => (
            <span
              key={name}
              className="site-lead mx-10 shrink-0 font-display text-base font-semibold tracking-tight sm:mx-14 sm:text-lg"
            >
              {name}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
