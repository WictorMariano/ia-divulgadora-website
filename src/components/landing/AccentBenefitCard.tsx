import type { LucideIcon } from "lucide-react";

export type AccentBenefitCardProps = {
  icon: LucideIcon;
  stat: string;
  title: string;
  description: string;
  accent: string;
  accentRgb: string;
  badge?: string;
};

export function AccentBenefitCard({
  icon: Icon,
  stat,
  title,
  description,
  accent,
  accentRgb,
  badge,
}: AccentBenefitCardProps) {
  return (
    <div
      className="accent-benefit-card group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md transition hover:border-white/20 sm:min-h-[280px]"
      style={{
        boxShadow: `0 0 0 1px rgba(${accentRgb},0.12), 0 24px 48px -24px rgba(${accentRgb},0.25)`,
      }}
    >
      <div
        className="accent-benefit-card__glow pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-60"
        style={{
          background: `linear-gradient(to top, rgba(${accentRgb},0.2), transparent)`,
        }}
      />

      <div className="relative z-10 flex flex-1 gap-3 p-5 sm:gap-4 sm:p-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="mb-3 flex items-center gap-2 sm:mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm sm:h-11 sm:w-11"
              style={{
                borderColor: `${accent}55`,
                background: `rgba(${accentRgb},0.12)`,
                boxShadow: `0 0 20px rgba(${accentRgb},0.25)`,
              }}
            >
              <Icon className="h-5 w-5" style={{ color: accent }} strokeWidth={1.75} />
            </div>
            {badge && (
              <span className="rounded-full border border-orange-500/35 bg-orange-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-300">
                {badge}
              </span>
            )}
          </div>

          <h4 className="accent-benefit-card__title text-base font-semibold leading-snug text-white sm:text-lg">
            {title}
          </h4>
          <p className="accent-benefit-card__desc mt-2 flex-1 text-xs leading-relaxed text-white/55 sm:text-sm">
            {description}
          </p>
        </div>

        <div className="flex w-[4.5rem] shrink-0 items-center justify-center text-center sm:w-20 md:w-24">
          <span
            className="font-display text-xl font-bold leading-none tracking-tight text-balance sm:text-2xl md:text-3xl"
            style={{ color: accent }}
          >
            {stat}
          </span>
        </div>
      </div>

      <div
        className="absolute inset-x-4 bottom-0 h-px rounded-full opacity-80"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          boxShadow: `0 0 12px ${accent}`,
        }}
      />
    </div>
  );
}
