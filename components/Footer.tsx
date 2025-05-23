import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">John Doe</h3>
          <p className="text-sm text-muted-foreground">
            Building digital experiences that make a difference.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 md:gap-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/resume"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Resume
          </Link>
          <Link
            href="/portfolio"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:john.doe@example.com">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </div>

      <div className="container mt-6 md:mt-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
