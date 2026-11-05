export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function getTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = localStorage.getItem(STORAGE_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme: Theme): void {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");

  localStorage.setItem(STORAGE_KEY, theme);
}

export default function useTheme() {
  return {
    getTheme,
    setTheme,
  };
}
