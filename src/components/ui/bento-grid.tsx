"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  description: string;
  icon: ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: 1 | 2 | 3;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

function colSpanClass(colSpan?: BentoItem["colSpan"]) {
  if (colSpan === 2) return "md:col-span-2";
  if (colSpan === 3) return "md:col-span-3";
  return "md:col-span-1";
}

export function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-3 md:grid-cols-3", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative overflow-hidden rounded-xl border border-white/10 bg-black/35 p-4 backdrop-blur-sm transition-all duration-300",
            "hover:-translate-y-0.5 hover:border-white/15 hover:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.45)] will-change-transform",
            colSpanClass(item.colSpan),
            item.hasPersistentHover &&
              "-translate-y-0.5 border-cta/25 shadow-[0_8px_32px_-12px_color-mix(in_oklab,var(--cta)_25%,transparent)]",
          )}
        >
          <div
            className={cn(
              "pointer-events-none absolute inset-0 transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-cta/25 group-hover:bg-cta/10">
                {item.icon}
              </div>
              {item.status ? (
                <span className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm transition-colors duration-300 group-hover:border-cta/20 group-hover:bg-cta/10">
                  {item.status}
                </span>
              ) : null}
            </div>

            <div className="space-y-2">
              <h3 className="text-[15px] font-medium tracking-tight text-white">
                {item.title}
                {item.meta ? (
                  <span className="ml-2 text-xs font-normal text-zinc-400">{item.meta}</span>
                ) : null}
              </h3>
              <p className="site-copy text-sm leading-snug">{item.description}</p>
            </div>

            {(item.tags?.length ?? 0) > 0 || item.cta ? (
              <div className="mt-2 flex items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  {item.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/8 bg-white/5 px-2 py-1 text-xs text-zinc-400 backdrop-blur-sm transition-all duration-200 group-hover:border-white/15 group-hover:text-zinc-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                {item.cta ? (
                  <span className="shrink-0 text-xs text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100">
                    {item.cta}
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>

          <div
            className={cn(
              "pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-transparent via-white/10 to-transparent p-px transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
            )}
          />
        </div>
      ))}
    </div>
  );
}
