"use client";

import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <section className="space-y-4">
      <h1 className="text-3xl lg:text-4xl font-semibold">
        Hello! I’m Toby
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <span className="text-primary">Frontend Developer</span>
          <div className="rounded-lg border px-3 py-2 inline-flex items-center gap-2 text-base lg:text-xl sm:ms-4 mt-3 lg:mt-0">
            <MapPinIcon className="size-4 lg:size-6" /> Netherlands
          </div>
        </div>
      </h1>
      <p className="text-muted-foreground text-lg">
        Frontend developer and design system specialist with over 9 years of
        experience focusing on user experience and design systems to create
        user-centered designs in SaaS products.
      </p>
      <div className="flex gap-4 pt-2">
        <Button asChild>
          <Link href="/about">About</Link>
        </Button>
        <Button variant="outline" onClick={() => handleCopy("test@mail.com")}>
          {copied ? (
            <>
              <CheckIcon /> Copied
            </>
          ) : (
            <>
              <CopyIcon /> Copy mail
            </>
          )}
        </Button>
      </div>
    </section>
  );
}
