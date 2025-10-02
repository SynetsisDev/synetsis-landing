"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme | null) {
  const root = document.documentElement;
  if (!theme) {
    // Clear manual override — use system preference
    delete (root as any).dataset.theme;
    return;
  }
  root.dataset.theme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [mounted, setMounted] = useState(false);

  // Initialize from localStorage or system preference
  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== "undefined" ? (localStorage.getItem("theme") as Theme | null) : null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      applyTheme(stored);
      return;
    }
    setTheme(null); // null => siguiendo el sistema por defecto
    applyTheme(null);

    // Update if system preference changes and no manual override
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (localStorage.getItem("theme") == null) {
        applyTheme(null);
        setTheme(null);
      }
    };
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  const isDark = (() => {
    if (theme) return theme === "dark";
    // Si seguimos el sistema, durante SSR y primer render en cliente (antes de montar)
    // usamos un valor determinista (false) para evitar mismatch.
    if (!mounted) return false;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  })();

  const toggle = () => {
    const next: Theme = isDark ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={toggle}
        title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-black/10 bg-surface hover:bg-black/5 text-foreground/80 hover:text-foreground transition"
      >
        {isDark ? (
          // Sun icon
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        ) : (
          // Moon icon
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>
    </div>
  );
}
