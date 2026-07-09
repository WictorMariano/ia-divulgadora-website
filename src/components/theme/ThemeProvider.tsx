"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  applyTheme,
  DEFAULT_THEME,
  isMobileViewport,
  MOBILE_MEDIA_QUERY,
  resolveTheme,
  SYSTEM_DARK_MEDIA_QUERY,
  type Theme,
  THEME_STORAGE_KEY,
} from "@/lib/theme";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  usesSystemTheme: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function syncThemeSourceAttribute() {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute(
    "data-theme-source",
    isMobileViewport() ? "system" : "manual",
  );
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [usesSystemTheme, setUsesSystemTheme] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const syncTheme = () => {
      const next = resolveTheme();
      const systemDriven = isMobileViewport();
      setUsesSystemTheme(systemDriven);
      setThemeState(next);
      applyTheme(next);
      syncThemeSourceAttribute();
    };

    syncTheme();
    setReady(true);

    const mobileMedia = window.matchMedia(MOBILE_MEDIA_QUERY);
    const schemeMedia = window.matchMedia(SYSTEM_DARK_MEDIA_QUERY);

    const handleChange = () => syncTheme();

    mobileMedia.addEventListener("change", handleChange);
    schemeMedia.addEventListener("change", handleChange);
    window.addEventListener("orientationchange", handleChange);

    return () => {
      mobileMedia.removeEventListener("change", handleChange);
      schemeMedia.removeEventListener("change", handleChange);
      window.removeEventListener("orientationchange", handleChange);
    };
  }, []);

  const setTheme = useCallback((next: Theme) => {
    if (isMobileViewport()) return;

    setThemeState(next);
    applyTheme(next);
    syncThemeSourceAttribute();
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    if (isMobileViewport()) return;

    setThemeState((current) => {
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      syncThemeSourceAttribute();
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme, usesSystemTheme }),
    [theme, setTheme, toggleTheme, usesSystemTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <div className={ready ? "theme-ready" : undefined}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
