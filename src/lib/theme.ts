export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "iad-theme";
export const MOBILE_MEDIA_QUERY = "(max-width: 1023px)";
export const SYSTEM_DARK_MEDIA_QUERY = "(prefers-color-scheme: dark)";

export const DEFAULT_THEME: Theme = "dark";

export const THEME_COLOR = {
  dark: "#050608",
  light: "#f8f9fc",
} as const;

export function isTheme(value: string | null | undefined): value is Theme {
  return value === "dark" || value === "light";
}

export function isMobileViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(MOBILE_MEDIA_QUERY).matches;
}

export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  return window.matchMedia(SYSTEM_DARK_MEDIA_QUERY).matches ? "dark" : "light";
}

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(stored) ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export function resolveTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  if (isMobileViewport()) return getSystemTheme();
  return getStoredTheme();
}

export function usesSystemTheme(): boolean {
  return isMobileViewport();
}

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;

  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", THEME_COLOR[theme]);
  }
}

export function getThemeInitScript(): string {
  return `(function(){try{var mobile=window.matchMedia("${MOBILE_MEDIA_QUERY}").matches;var systemDark=window.matchMedia("${SYSTEM_DARK_MEDIA_QUERY}").matches;var theme=mobile?(systemDark?"dark":"light"):(function(){var stored=localStorage.getItem("${THEME_STORAGE_KEY}");return stored==="light"?"light":"dark"})();document.documentElement.setAttribute("data-theme",theme);document.documentElement.style.colorScheme=theme;var meta=document.querySelector('meta[name="theme-color"]');if(meta){meta.setAttribute("content",theme==="dark"?"${THEME_COLOR.dark}":"${THEME_COLOR.light}")}document.documentElement.setAttribute("data-theme-source",mobile?"system":"manual")}catch(e){}})();`;
}
