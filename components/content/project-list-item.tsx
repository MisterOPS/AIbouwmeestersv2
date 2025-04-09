import Link from "next/link";
import { Project } from "@/type/project";
import Image from "next/image";

export default function ProjectListItem({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block space-y-4">
      <figure>
        <Image
          src={project.cover_image}
          width={300}
          height={300}
          className="w-full aspect-[4-3]"
          alt={project.title}
        />
      </figure>
      <div className="space-y-2">
        <h5 className="font-bold">{project.title}</h5>
        <div className="text-sm text-muted-foreground">{project.date}</div>
      </div>
    </Link>
  );
}
