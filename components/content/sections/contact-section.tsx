import { Button } from "@/components/ui/button";
import { MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="p-6 !pb-6 border rounded-lg">
      <header className="pb-8 space-y-2">
        <h2 className="text-2xl font-semibold">Got questions?</h2>
        <p className="text-muted-foreground">
          I’m always excited to collaborate on innovative and exciting projects!
        </p>
      </header>
      <div className="grid lg:grid-cols-2 lg:space-y-0 space-y-6">
        <div className="flex gap-4">
          <span className="flex items-center justify-center border border-primary/30 rounded-full bg-primary/15 size-14">
            <MailIcon className="size-6" />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">E-mail</span>
            <Link href="#">contact@shadcnuikit.com</Link>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="flex items-center justify-center border border-primary/30 rounded-full bg-primary/15 size-14">
            <PhoneIcon className="size-6" />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">Phone</span>
            <Link href="#">+48 555 555 555</Link>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Button variant="outline" className="w-full lg:w-auto" asChild>
          <Link href="https://cal.com/" target="_blank">
            Schedule a call
          </Link>
        </Button>
      </div>
    </section>
  );
}
