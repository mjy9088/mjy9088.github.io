"use client";

import type React from "react";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  setTheme: () => {},
});

export const ThemeProvider = ({
  attribute,
  defaultTheme,
  enableSystem,
  disableTransitionOnChange,
  children,
}: {
  attribute: string;
  defaultTheme: "system" | "light" | "dark";
  enableSystem: boolean;
  disableTransitionOnChange: boolean;
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">(defaultTheme);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as
        | "light"
        | "dark"
        | "system"
        | null;

      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        setTheme(defaultTheme);
      }
    }
  }, [defaultTheme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === "system") {
        const isDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        document.documentElement.classList.toggle("dark", isDark);
      } else if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
