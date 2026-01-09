import { themes } from "@/lib/theme";

export function ThemeScript() {
  const jsonThemes = JSON.stringify(themes);

  const script = `
    (function() {
      try {
        var allThemes = ${jsonThemes};
        var saved = sessionStorage.getItem("theme");
        
        var isTabActive = window.name.includes("theme-active");

        var active;

        if (saved && isTabActive) {
          active = saved;
        } else {
          active = allThemes[Math.floor(Math.random() * allThemes.length)];
        }
        
        document.documentElement.classList.add(active);
        
        sessionStorage.setItem("theme", active);
        window.name = "theme-active";
        
      } catch (e) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}