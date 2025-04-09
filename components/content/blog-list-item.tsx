import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Blog } from "@/type/blog";

export default function BlogListItem({ blog }: { blog: Blog }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-start lg:space-x-4">
      <div className="order-2 lg:order-1 col-span-2 flex flex-col space-y-4 leading-none grow">
        <span className="text-sm text-muted-foreground">{blog.date}</span>
        <h4 className="font-medium text-2xl">{blog.title}</h4>
        <hr />
        <div>
          <Button variant="link" className="p-0 h-auto" asChild>
            <Link href={`/blog/${blog.slug}`}>
              Read <ArrowRightIcon className="size-3" />
            </Link>
          </Button>
        </div>
      </div>
      <Link
        href={`/blog/${blog.slug}`}
        className="block w-full order-1 lg:order-2"
      >
        <figure className="mt-8 mb-2 lg:mb-0">
          <Image
            src={blog.image}
            width={300}
            height={300}
            className="w-full lg:w-[150px]"
            alt={blog.title}
          />
        </figure>
      </Link>
    </div>
  );
}
