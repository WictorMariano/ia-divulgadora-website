"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { SectionFullInner } from "../SectionPanel";
import { faqCategories, faqItems, type FaqCategoryId } from "./faqData";

type FaqSectionProps = {
  embedded?: boolean;
};

export function FaqSection({ embedded = false }: FaqSectionProps) {
  const [activeCategory, setActiveCategory] = useState<FaqCategoryId>("afiliados");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();
    return faqItems.filter((item) => {
      if (query) {
        return (
          item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query)
        );
      }
      return item.category === activeCategory;
    });
  }, [activeCategory, search]);

  const content = (
    <div className="faq-section">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="faq-section__title font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Perguntas Frequentes
        </h2>
        <p className="faq-section__subtitle closing-copy-muted mx-auto mt-4 max-w-xl text-base sm:text-lg">
          Tudo que você precisa saber antes de começar a automatizar suas vendas.
        </p>
      </div>

      <div className="relative mx-auto mt-8 max-w-xl">
        <Search
          className="faq-section__search-icon pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-sky-400/70"
          strokeWidth={2}
        />
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digite sua dúvida..."
          className="faq-search-input h-12 w-full rounded-2xl border pl-11 pr-4 text-sm outline-none transition-all"
        />
      </div>

      <div className="faq-category-row mx-auto mt-7 flex max-w-2xl flex-wrap justify-center gap-2 sm:gap-2.5">
        {faqCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "faq-category-btn inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm",
              activeCategory === cat.id
                ? "faq-category-active border-orange-500/45 bg-orange-500/15 text-white"
                : "faq-category-btn--inactive border-white/10 bg-white/5 text-white/70 hover:border-orange-500/30 hover:text-white",
            )}
          >
            <span aria-hidden>{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-2xl">
        {filteredItems.length === 0 ? (
          <p className="faq-empty-state closing-copy-muted rounded-2xl border border-white/10 bg-white/5 px-6 py-10 text-center text-sm">
            Nenhuma pergunta encontrada para &ldquo;{search}&rdquo; nesta categoria.
          </p>
        ) : (
          <Accordion type="single" collapsible className="space-y-3">
            {filteredItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="faq-accordion-item overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-5 backdrop-blur-sm data-[state=open]:border-sky-400/30 data-[state=open]:bg-sky-500/10 data-[state=open]:shadow-[0_0_32px_-12px_rgba(56,189,248,0.45)]"
              >
                <AccordionTrigger className="faq-accordion-trigger py-5 text-left text-sm font-semibold hover:no-underline sm:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content pb-5 text-sm leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );

  if (embedded) {
    return <div className="relative z-10">{content}</div>;
  }

  return (
    <section id="faq" className="faq-section-standalone section-full-bleed section-full-bleed--faq">
      <SectionFullInner className="relative z-10 py-14 md:py-20">{content}</SectionFullInner>
    </section>
  );
}
