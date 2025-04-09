import { Metadata } from "next";
import ContactFormSection from "@/components/content/sections/contact-form-section";
import ContactSection from "@/components/content/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  return (
    <>
      <section>
        <header className="pb-8 space-y-4 mb-10">
          <h1 className="text-4xl font-semibold">Contact</h1>
          <p className="text-lg text-muted-foreground">
            I’m always excited to collaborate on innovative and exciting
            projects!
          </p>
        </header>
        <ContactSection />
      </section>
      <ContactFormSection />
    </>
  );
}
