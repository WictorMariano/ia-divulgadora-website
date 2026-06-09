"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionFullInner, SectionPanel } from "./SectionPanel";

type Stat = { value: string; label: string };

type Testimonial = {
  name: string;
  title: string;
  quote: string;
  avatarSrc: string;
  rating: number;
};

const stats: Stat[] = [
  { value: "+1.5k", label: "Afiliados ativos" },
  { value: "4.9", label: "Satisfação média" },
  { value: "+180%", label: "Em conversões" },
];

const testimonials: Testimonial[] = [
  {
    name: "Rafael Martins",
    title: "Afiliado Shopee & Amazon",
    quote:
      "Automatizei 12 grupos em uma semana. As ofertas saem sozinhas e minha conversão subiu 3x sem eu ficar colado no celular.",
    avatarSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Camila Rocha",
    title: "Creators — Moda & Beleza",
    quote:
      "O monitoramento 24h pegou promoções que eu perdia de madrugada. Só em um mês recuperei o valor do plano.",
    avatarSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Diego Almeida",
    title: "Afiliado Pro — Eletrônicos",
    quote:
      "Filas, intervalos e link preview mudaram minha operação. Hoje disparo para 8 grupos com copy que converte.",
    avatarSrc:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
  },
  {
    name: "Patrícia Nunes",
    title: "Afiliada Iniciante",
    quote:
      "Comecei do zero e em poucos dias já tinha vitrine, links e posts indo pro WhatsApp automaticamente.",
    avatarSrc:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600&auto=format&fit=crop",
    rating: 5,
  },
];

const STACK_OFFSET = 28;
const STACK_TOP_BASE = 96;

function StatCard({ value, label }: Stat) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center backdrop-blur-sm">
      <p className="font-display text-2xl font-bold text-white sm:text-3xl">{value}</p>
      <p className="testimonial-stat-label mt-1 text-xs sm:text-sm">{label}</p>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex w-full flex-col rounded-2xl border border-white/12 bg-[#0f1628]/95 p-6 shadow-[0_20px_48px_-24px_rgba(0,0,0,0.65)] backdrop-blur-md">
      <div className="flex items-center gap-4">
        <div
          className="size-14 shrink-0 rounded-xl bg-cover bg-center ring-2 ring-white/10"
          style={{ backgroundImage: `url(${testimonial.avatarSrc})` }}
          role="img"
          aria-label={`Foto de ${testimonial.name}`}
        />
        <div className="min-w-0 flex-1">
          <p className="text-lg font-semibold text-white">{testimonial.name}</p>
          <p className="testimonial-stat-label text-sm">{testimonial.title}</p>
        </div>
      </div>

      <div className="my-4 flex items-center gap-2">
        <span className="text-base font-bold text-white">{testimonial.rating.toFixed(1)}</span>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "size-4",
                i < Math.floor(testimonial.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-white/25",
              )}
            />
          ))}
        </div>
      </div>

      <p className="testimonial-quote text-base leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>
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
    <motion.div
      className="sticky w-full"
      style={{ top: STACK_TOP_BASE + index * STACK_OFFSET }}
    >
      <TestimonialCard testimonial={testimonial} />
    </motion.div>
  );
}

export function Testimonials() {
  const stackScrollHeight = `calc(100vh + ${testimonials.length * 200}px)`;

  return (
    <SectionPanel id="depoimentos" variant="testimonials" fullWidth>
      <SectionFullInner className="py-16 md:py-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-sm">
              <span className="size-2 rounded-full bg-emerald-400" aria-hidden />
              <span className="text-emerald-300">Depoimentos reais</span>
            </div>

            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Afiliados que já escalaram com a{" "}
              <span className="text-orange-400">IA Divulgadora</span>
            </h2>
            <p className="testimonial-quote max-w-lg text-base leading-relaxed sm:text-lg">
              Veja como creators e afiliados automatizaram grupos, recuperaram tempo e aumentaram
              conversões com a plataforma.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#demonstracao"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Ver demonstração
              </a>
              <a
                href="#planos"
                className="btn-primary h-11 rounded-full px-6 normal-case tracking-normal"
              >
                Começar grátis
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:hidden">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>

          <div
            className="relative hidden flex-col gap-5 lg:flex"
            style={{ minHeight: stackScrollHeight }}
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
    </SectionPanel>
  );
}
