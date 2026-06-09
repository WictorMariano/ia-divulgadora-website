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
      <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Marketplaces integrados
      </p>

      <div className="relative -mx-6 md:-mx-0">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#030508] via-[#030508]/80 to-transparent md:w-24"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#030508] via-[#030508]/80 to-transparent md:w-24"
        />

        <Marquee pauseOnHover speed={32}>
          {marketplaces.map((name) => (
            <span
              key={name}
              className="mx-10 shrink-0 font-display text-base font-semibold tracking-tight text-zinc-200 sm:mx-14 sm:text-lg"
            >
              {name}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
