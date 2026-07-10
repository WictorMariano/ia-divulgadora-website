"use client";

import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      className={cn(
        "theme-toggle inline-flex items-center gap-2 rounded-full border px-2.5 py-1.5 backdrop-blur-md",
        className,
      )}
      role="group"
      aria-label="Alternar tema do site"
    >
      <Moon
        className={cn(
          "size-3.5 shrink-0 transition-colors",
          !isLight ? "text-cta" : "text-zinc-500",
        )}
        strokeWidth={2.5}
        aria-hidden
      />
      <Switch
        checked={isLight}
        onCheckedChange={(checked) => setTheme(checked ? "light" : "dark")}
        aria-label={isLight ? "Ativar modo escuro" : "Ativar modo claro"}
        className="data-[state=checked]:bg-cta data-[state=unchecked]:bg-white/20"
      />
      <Sun
        className={cn(
          "size-3.5 shrink-0 transition-colors",
          isLight ? "text-cta" : "text-zinc-400",
        )}
        strokeWidth={2.5}
        aria-hidden
      />
      <span className="sr-only">{isLight ? "Modo claro ativo" : "Modo escuro ativo"}</span>
    </div>
  );
}
