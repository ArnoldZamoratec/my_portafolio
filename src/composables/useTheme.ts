import { ref, watchEffect } from "vue";

const theme = ref<"light" | "dark">("light");

// Initialize theme from localStorage or system preference
export const initTheme = () => {
  if (typeof window === "undefined") return;
  
  const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
  if (savedTheme === "light" || savedTheme === "dark") {
    theme.value = savedTheme;
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    theme.value = prefersDark ? "dark" : "light";
  }
};

export const useTheme = () => {
  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };

  watchEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme.value);
    localStorage.setItem("theme", theme.value);
  });

  return {
    theme,
    toggleTheme,
  };
};
