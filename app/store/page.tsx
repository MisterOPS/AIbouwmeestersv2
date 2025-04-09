import { Metadata } from "next";
import ProductListItem from "@/components/content/product-list-item";
import ContactSection from "@/components/content/sections/contact-section";
import { promises as fs } from "fs";
import path from "path";
import { Product } from "@/type/product";

export const metadata: Metadata = {
  title: "Store",
};

async function getProducts() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/products.json")
  );
  return JSON.parse(data.toString());
}

export default async function Page() {
  const products = await getProducts();

  return (
    <>
      <section>
        <header className="pb-8 space-y-4 lg:mb-10">
          <h1 className="text-3xl lg:text-4xl font-semibold">Store</h1>
          <p className="text-lg text-muted-foreground">
            Unlock a treasure trove of tools, templates, and insights crafted
            for design professionals
          </p>
        </header>
        <div className="grid lg:grid-cols-2 gap-6">
          {products.map((product: Product) => (
            <ProductListItem product={product} key={product.id} />
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
