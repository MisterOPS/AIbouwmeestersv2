import BackButton from "@/components/back-button";
import ContactSection from "@/components/content/sections/contact-section";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { Project } from "@/type/project";
import Link from "next/link";
import ProjectListItem from "@/components/content/project-list-item";

async function getProjects() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/projects.json")
  );
  return JSON.parse(data.toString());
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const projects = await getProjects();
  const project = projects.find((b: Project) => b.slug === slug);

  return {
    title: project.title,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const projects = await getProjects();
  const project = projects.find((b: Project) => b.slug === params.slug);

  return (
    <>
      <BackButton url="/projects" />
      <section className="space-y-6">
        <header className="pb-4 lg:pb-8 space-y-6 lg:space-y-10">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            {project.title}
          </h1>
          <div className="grid lg:grid-cols-3 text-sm space-y-4 lg:space-y-0">
            <div className="flex flex-col space-y-2">
              <span className="text-muted-foreground">Date</span>
              <span>{project.date}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-muted-foreground">Service</span>
              <span>{project.services}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-muted-foreground">Client</span>
              <span>{project.client}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Button asChild className="w-full lg:w-auto">
              <Link href={project.preview_url} target="_blank">
                Preview <ExternalLinkIcon />
              </Link>
            </Button>
          </div>
        </header>
        <figure>
          <Image
            width={300}
            height={300}
            src={project.cover_image}
            className="w-full aspect-[4/3]"
            alt={project.title}
          />
        </figure>
        <article dangerouslySetInnerHTML={{ __html: project.content }} />
      </section>
      <hr />
      <section className="space-y-8">
        <header>
          <h4 className="text-2xl font-semibold">More projects</h4>
        </header>
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project: Project) => (
            <ProjectListItem project={project} key={project.id} />
          ))}
        </div>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/projects">All projects</Link>
        </Button>
      </section>
      <ContactSection />
    </>
  );
}