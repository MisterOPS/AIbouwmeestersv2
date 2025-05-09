import { Metadata } from "next";
import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";
import BackButton from "@/components/back-button";
import BlogListItem from "@/components/content/blog-list-item";
import ContactSection from "@/components/content/sections/contact-section";
import { Button } from "@/components/ui/button";
import { Blog } from "@/type/blog";

async function getBlogs() {
  const data = await fs.readFile(path.join(process.cwd(), "data/blogs.json"));
  return JSON.parse(data.toString());
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog: Blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const blogs = await getBlogs();
  const blog = blogs.find((b: Blog) => b.slug === slug);

  return {
    title: blog.title,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blogs = await getBlogs();
  const blog = blogs.find((b: Blog) => b.slug === params.slug);

  return (
    <>
      <BackButton url="/blog" />
      <section className="space-y-6">
        <header className="lg:pb-8 space-y-6 lg:space-y-8">
          <h1 className="text-3xl lg:text-4xl font-semibold">{blog.title}</h1>
          <div className="grid grid-cols-2 text-sm">
            <div className="flex flex-col space-y-2">
              <span className="text-muted-foreground">Date</span>
              <span>{blog.date}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-muted-foreground">Author</span>
              <span>{blog.author}</span>
            </div>
          </div>
        </header>
        <figure>
          <Image
            width={300}
            height={300}
            src={blog.image}
            className="w-full aspect-[4/3]"
            alt="..."
          />
        </figure>
        <article dangerouslySetInnerHTML={{ __html: blog.content }} />
      </section>
      <hr />
      <section className="space-y-8">
        <header>
          <h4 className="text-2xl font-semibold">Related posts</h4>
        </header>
        <div className="space-y-10">
          {blogs.slice(0, 3).map((blog: Blog) => (
            <BlogListItem blog={blog} key={blog.id} />
          ))}
        </div>
        <Button variant="outline" className="w-full">
          All posts
        </Button>
      </section>
      <ContactSection />
    </>
  );
}