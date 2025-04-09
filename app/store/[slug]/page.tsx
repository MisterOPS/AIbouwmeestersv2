import BackButton from "@/components/back-button";
import ProductListItem from "@/components/content/product-list-item";
import ContactSection from "@/components/content/sections/contact-section";
import { Button } from "@/components/ui/button";
import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { Product } from "@/type/product";
import { Metadata } from "next";
import { ExternalLinkIcon } from "lucide-react";
import ImageCarousel from "./image-carousel";

async function getProducts() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/products.json")
  );
  return JSON.parse(data.toString());
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product: Product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const products = await getProducts();
  const product = products.find((b: Product) => b.slug === slug);

  return {
    title: product.title,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const products = await getProducts();
  const product = products.find((b: Product) => b.slug === params.slug);

  return (
    <>
      <BackButton url="/store" />
      <section className="space-y-6">
        <header className="lg:pb-8 space-y-4 lg:space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-4xl font-semibold">
              {product.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {product.description}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 pt-2">
            <Button>Buy for ${product.price}</Button>
            <Button variant="outline" asChild>
              <Link href={product.preview_url} target="_blank">
                Preview <ExternalLinkIcon />
              </Link>
            </Button>
          </div>
        </header>
        <ImageCarousel images={product.images} />
        <article dangerouslySetInnerHTML={{ __html: product.content }} />
      </section>
      <section className="space-y-8">
        <header>
          <h4 className="text-2xl font-semibold">More resources</h4>
        </header>
        <div className="grid lg:grid-cols-2 gap-6">
          {products.slice(0, 2).map((product: Product) => (
            <ProductListItem product={product} key={product.id} />
          ))}
        </div>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/store">All resources</Link>
        </Button>
      </section>
      <ContactSection />
    </>
  );
}