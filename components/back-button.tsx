import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type BackButtonProps = {
  url: string;
};

export default function BackButton({ url }: BackButtonProps) {
  return (
    <div className="border-b pb-4">
      <Link
        href={url}
        className="flex items-center text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeftIcon className="size-4 me-2" /> Back to list
      </Link>
    </div>
  );
}
