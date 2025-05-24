import { ThemeProvider } from "@/components/ThemeProvider";
import { PropsWithChildren } from "react";
import "./globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `((theme) => (theme === "dark" || (!theme || theme === "system") && window.matchMedia("(prefers-color-scheme: dark)").matches) && document.documentElement.classList.add("dark"))(localStorage.getItem("theme"));`,
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
