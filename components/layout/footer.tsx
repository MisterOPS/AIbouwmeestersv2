import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="py-6 text-sm text-muted-foreground">
        <div className="container mx-auto max-w-screen-md flex justify-between items-center">
          <div>© {new Date().getFullYear()} Neofolio</div>
          <div>
            Made by{" "}
            <Link href="https://bundui.io/" target="_blank">
              bundui.io
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
