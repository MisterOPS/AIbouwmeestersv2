import Image from "next/image";
import { Product } from "@/type/product";
import Link from "next/link";

export default function ProductListItem({ product }: { product: Product }) {
  return (
    <Link href={`/store/${product.slug}`} className="block space-y-4">
      <figure>
        <Image
          src={product.images[0]}
          width={300}
          height={300}
          className="w-full aspect-[4-3]"
          alt={product.title}
        />
      </figure>
      <div className="space-y-2 flex justify-between items-start gap-4">
        <div className="space-y-2">
          <h5 className="font-bold">{product.title}</h5>
          <div className="text-sm text-muted-foreground">
            {product.description}
          </div>
        </div>
        <div className="border rounded-lg bg-muted px-2 py-1">
          ${product.price}
        </div>
      </div>
    </Link>
  );
}
