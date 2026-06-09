import { ArrowRight, Play, Star, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg-v2.png";
import { Logo } from "./Logo";

const reviewers = [
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
];

export function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent lg:via-black/25 lg:to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-svh flex-col justify-center pl-5 pr-6 pb-16 pt-12 sm:pl-8 md:pl-10 md:pb-20 lg:pl-14 lg:py-20 xl:pl-20">
        <div className="max-w-xl lg:max-w-2xl">
          <Logo className="mb-6 h-9 sm:h-10" />

          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-cta/30 bg-cta/10 px-3 py-1.5 backdrop-blur-sm">
            <Zap className="size-3.5 text-cta" strokeWidth={2.5} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-cta sm:text-[11px]">
              Automatize. Economize tempo. Venda mais.
            </span>
          </div>

          <h1 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
            Automatize seus grupos de WhatsApp e links de afiliado{" "}
            <span className="bg-gradient-to-r from-cta via-orange-400 to-amber-400 bg-clip-text text-transparent">
              em um só lugar.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-zinc-200 sm:text-lg">
            A IA Divulgadora encontra as melhores ofertas, gera seus links de
            afiliado, cria as mensagens e envia{" "}
            <span className="font-semibold text-orange-400">automaticamente</span>{" "}
            para seus grupos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#planos"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cta to-orange-600 px-6 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_32px_-6px] shadow-cta/60 transition-all hover:brightness-110"
            >
              Começar gratuitamente
              <ArrowRight className="size-4" />
            </a>
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

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center">
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

            <div>
              <div className="flex flex-wrap items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-1.5 text-sm font-semibold text-white">4,9/5</span>
                <span className="text-sm text-zinc-300">(2.325 avaliações)</span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                Milhares de afiliados já aumentaram suas vendas com a IA Divulgadora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
