"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { CtaButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";
import { SectionFullInner } from "./SectionPanel";

type Stat = { value: string; label: string };

type Testimonial = {
  name: string;
  title: string;
  quote: string;
  avatarInitial: string;
  rating: number;
};

const stats: Stat[] = [
  { value: "+1.5k", label: "Afiliados ativos" },
  { value: "4.9", label: "Satisfação média" },
  { value: "+180%", label: "Em conversões" },
];

const testimonials: Testimonial[] = [
  {
    name: "Mario",
    title: "@achadinhosdonetao",
    quote:
      "Uma ferramenta que veio para ajudar o afiliado iniciante e até os grandes players. Eu sempre indico para amigos... um ponto excelente: o suporte, muito bom e muito rápido! Indico de olho fechado.",
    avatarInitial: "M",
    rating: 5,
  },
  {
    name: "Alysson",
    title: "@top0fertaseonline",
    quote:
      "Hoje eu só colo o link e a IA faz tudo: monta o post, coloca imagem, preço, meu link com ID, e dispara para os grupos. Aumentou muito minhas vendas. O suporte é sensacional — sempre rápido e pronto pra ajudar.",
    avatarInitial: "A",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    title: "Consultora Natura e Afiliada Magalu",
    quote:
      "Automatizei os disparos e hoje administro 15 grupos simultaneamente, sem copiar e colar. A CTA IA gera a chamada certa para cada produto e aumenta minhas conversões de forma consistente.",
    avatarInitial: "J",
    rating: 5,
  },
];

function StatCard({ value, label }: Stat) {
  return (
    <div className="testimonial-stat-card rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center backdrop-blur-sm">
      <p className="font-display text-2xl font-bold text-white sm:text-3xl">{value}</p>
      <p className="on-dark-copy-muted mt-1 text-xs sm:text-sm">{label}</p>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="testimonial-card flex w-full flex-col rounded-2xl border border-white/10 bg-[#0a0f18]/90 p-6 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "size-4",
              i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-white/20",
            )}
          />
        ))}
      </div>

      <blockquote className="testimonial-card__quote mt-4 flex-1 text-base leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <footer className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
        <div className="testimonial-card__avatar flex size-12 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white">
          {testimonial.avatarInitial}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="on-dark-copy-muted truncate text-sm">{testimonial.title}</p>
        </div>
      </footer>
    </article>
  );
}

function StickyTestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.div className="sticky w-full" style={{ top: `${20 + index * 24}px` }}>
      <TestimonialCard testimonial={testimonial} />
    </motion.div>
  );
}

export function Testimonials() {
  const scrollContainerHeight = `calc(100vh + ${testimonials.length * 100}px)`;

  return (
    <section
      id="depoimentos"
      className="section-full-bleed section-full-bleed--testimonials w-full max-w-full"
    >
      <div className="testimonials-section-bg relative py-20 md:py-28">
        <div aria-hidden className="testimonials-section-bg__mesh" />
        <div aria-hidden className="testimonials-section-bg__orb testimonials-section-bg__orb--blue" />
        <div aria-hidden className="testimonials-section-bg__orb testimonials-section-bg__orb--orange" />

        <SectionFullInner className="relative z-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-6 lg:sticky lg:top-20 lg:self-start">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-sm">
                <span className="size-2 rounded-full bg-orange-400" aria-hidden />
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-orange-400">
                  Depoimentos reais
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Afiliados que já escalaram com a{" "}
                <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
                  IA Divulgadora
                </span>
              </h2>
              <p className="on-dark-copy-muted max-w-lg text-base leading-relaxed sm:text-lg">
                Veja como creators e afiliados automatizaram grupos, recuperaram tempo e
                aumentaram conversões com a plataforma.
              </p>

              <div className="mt-2 grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-4">
                <CtaButton href="#demonstracao" variant="outline" size="sm" showArrow={false}>
                  Ver demonstração
                </CtaButton>
                <CtaButton href="#planos" size="sm">
                  Começar grátis
                </CtaButton>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:hidden">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>

            <div
              className="relative hidden flex-col gap-4 lg:flex"
              style={{ height: scrollContainerHeight }}
            >
              {testimonials.map((testimonial, index) => (
                <StickyTestimonialCard
                  key={testimonial.name}
                  index={index}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </SectionFullInner>
      </div>
    </section>
  );
}
