export function ClosingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="closing-experience-bg absolute inset-0" />
      <div className="closing-experience-glow-orange absolute -right-32 top-1/4 size-[28rem] rounded-full blur-[120px] sm:size-[36rem]" />
      <div className="closing-experience-glow-blue absolute -left-24 bottom-1/4 size-[24rem] rounded-full blur-[100px] sm:size-[32rem]" />
      <div className="closing-particles absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgb(56_189_248/0.08),transparent_55%)]" />
    </div>
  );
}
