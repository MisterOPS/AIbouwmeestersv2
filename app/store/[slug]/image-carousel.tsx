"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
} from "@/components/ui/carousel";

export default function ImageCarousel({ images }: { images: string[] }) {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((image, key) => (
          <CarouselItem key={key}>
            <figure>
              <Image
                width={300}
                height={300}
                src={image}
                className="w-full aspect-[4/3]"
                alt="..."
              />
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNavigation alwaysShow />
      <CarouselIndicator />
    </Carousel>
  );
}
