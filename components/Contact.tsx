"use client";

import { Button } from "@/components/ui/button";
import { Github, Mail, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  // TODO: fix bug, refactor
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } else {
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="outline"
        size="sm"
        className="gap-1.5"
        onClick={() => copyToClipboard("mjy9088@naver.com", "email")}
      >
        <Mail className="h-5 w-5" />
        {emailCopied ? "Copied!" : "Email: mjy9088@naver.com"}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="gap-1.5"
        onClick={() => copyToClipboard("010-2639-4682", "phone")}
      >
        <Phone className="h-5 w-5" />
        {phoneCopied ? "Copied!" : "Phone: 010-2639-4682"}
      </Button>
      <a
        href="https://github.com/mjy9088"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="sm" className="gap-1.5">
          <Github className="h-5 w-5" />
          Github: mjy9088
        </Button>
      </a>
    </div>
  );
}
