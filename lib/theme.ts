export const themes = [
  "theme-1", "theme-2", "theme-3", "theme-4", "theme-5"
] as const;


export type Theme = typeof themes[number];

export function setTheme(theme: Theme) {
  sessionStorage.setItem("theme", theme);
  
  const root = document.documentElement;
  root.classList.remove(...themes);
  root.classList.add(theme);
}