import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function DownloadButton() {
  return (
    <div className="fixed bottom-6 end-10">
      <Button
        asChild
        className="font-bold bg-black dark:bg-white dark:text-black"
      >
        <Link
          href="https://shadcnuikit.com/template/neofolio-portfolio-template"
          target="_blank"
        >
          Get Template <ExternalLinkIcon className="size-4 me-2" />
        </Link>
      </Button>
    </div>
  );
}
