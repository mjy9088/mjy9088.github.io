"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobile } from "@/hooks/useMobile";
import { Laptop, Menu, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { A } from "./A";

export function Header() {
  const pathname = usePathname();
  const isMobile = useMobile();
  const { theme, setTheme } = useTheme();

  const navigation = [
    { name: "홈", href: "/" },
    { name: "이력서", href: "/resume" },
    { name: "블로그", href: "https://mjy-blog.github.io", external: true },
    { name: "연락처", href: "/contact" },
  ];

  const ThemeSelector = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Select theme">
          {theme === "light" ? (
            <Sun className="h-5 w-5" />
          ) : theme === "dark" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Laptop className="h-5 w-5" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center gap-2"
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2"
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex items-center gap-2"
        >
          <Laptop className="h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <A href="/" className="font-bold text-xl">
            mjy9088
          </A>
        </div>

        <div className="flex items-center gap-4">
          <ThemeSelector />

          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <A
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </A>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="flex gap-6">
              {navigation.map((item) => (
                <A
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </A>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
