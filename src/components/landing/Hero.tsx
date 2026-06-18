import { Play, Star, Zap } from "lucide-react";
import heroBg from "@/assets/hero-robo-pc.png";
import { CtaButton } from "@/components/ui/cta-button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Logo } from "./Logo";

const reviewers = [
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
];

export function Hero() {
  return (
    <section className="hero-section relative min-h-svh overflow-hidden bg-black">
      <div className="absolute right-4 top-4 z-20 sm:right-8 sm:top-5 md:right-10 lg:right-14 xl:right-20">
        <ThemeToggle />
      </div>

      <div
        className="hero-section__bg absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />

      <div
        className="hero-section__overlay-a absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10 lg:from-black/75 lg:via-black/40 lg:to-transparent"
        aria-hidden
      />
      <div
        className="hero-section__overlay-b absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15"
        aria-hidden
      />

      <div className="hero-section__content relative z-10 flex min-h-svh flex-col justify-center px-4 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-12 md:pl-10 md:pb-20 lg:pl-14 lg:py-20 xl:pl-20">
        <div className="max-w-xl lg:max-w-2xl">
          <Logo className="mb-5 h-8 sm:mb-6 sm:h-9 md:h-10" />

          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-cta/30 bg-cta/10 px-3 py-1.5 backdrop-blur-sm">
            <Zap className="size-3.5 text-cta" strokeWidth={2.5} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-cta sm:text-[11px]">
              Automatize. Economize tempo. Venda mais.
            </span>
          </div>

          <h1 className="hero-section__title text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
            Automatize seus grupos de WhatsApp e links de afiliado{" "}
            <span className="bg-gradient-to-r from-cta via-orange-400 to-amber-400 bg-clip-text text-transparent">
              em um só lugar.
            </span>
          </h1>

          <p className="site-lead mt-4 max-w-xl text-pretty text-base leading-relaxed sm:mt-5 sm:text-lg">
            A IA Divulgadora encontra as melhores ofertas, gera seus links de
            afiliado, cria as mensagens e envia{" "}
            <span className="font-semibold text-orange-400">automaticamente</span>{" "}
            para seus grupos.
          </p>

          <div className="hero-section__actions mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:[&>*]:w-auto">
            <CtaButton href="#planos" size="lg">
              Começar gratuitamente
            </CtaButton>
            <a
              href="https://www.youtube.com/shorts/B4oYfx34xBw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Play className="size-4 fill-current" />
              Ver demonstração
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center justify-center sm:justify-start">
              {reviewers.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="size-11 rounded-full border-2 border-white object-cover object-top shadow-sm"
                  style={{ marginLeft: i === 0 ? 0 : "-0.75rem", zIndex: reviewers.length - i }}
                />
              ))}
            </div>

            <div className="text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center gap-1 sm:justify-start">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-1.5 text-sm font-semibold text-white">4,9/5</span>
                <span className="site-copy text-sm">(2.325 avaliações)</span>
              </div>
              <p className="site-copy mt-1.5 text-sm leading-relaxed">
                Milhares de afiliados já aumentaram suas vendas com a IA Divulgadora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
