import { Project } from "@/type/project";
import ProjectListItem from "../project-list-item";
import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

async function getProjects() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/projects.json")
  );
  return JSON.parse(data.toString());
}

export default async function SelectedProjectsSection() {
  const projects = await getProjects();
  return (
    <section>
      <header className="pb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Selected Work</h2>
        <Button className="h-auto py-1" variant="link" asChild>
          <Link href="/projects">
            View All <ArrowRightIcon className="size-3" />
          </Link>
        </Button>
      </header>
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.slice(0, 2).map((project: Project) => (
          <ProjectListItem project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
