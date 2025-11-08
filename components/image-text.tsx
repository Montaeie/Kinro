import React from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { Heading } from "./heading";
import { Button } from "./button";
import { RichText } from '@payloadcms/richtext-lexical/react';
import type { Page } from "@/payload-types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type ImageTextBlock = Extract<
  NonNullable<Page["layout"]>[number],
  { blockType: "imageText" }
>;

export const ImageText: React.FC<ImageTextBlock> = ({
  layout = 'imageLeft',
  image,
  imageUrl,
  badge,
  heading,
  content,
  ctaText,
  ctaLink,
}) => {
  const imgSrc = imageUrl || (typeof image === 'object' && image ? image.url : '');
  const isImageLeft = layout === 'imageLeft';

  return (
    <Container className="border-divide border-x px-4 py-10 md:px-8 md:py-20">
      <div className={cn(
        "grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-20",
        isImageLeft ? "" : "md:flex-row-reverse"
      )}>
        {/* Image */}
        <div className={cn("flex items-center", isImageLeft ? "md:order-1" : "md:order-2")}>
          {imgSrc && (
            <div className="border-divide overflow-hidden rounded-2xl border">
              <Image
                src={imgSrc}
                alt={heading}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className={cn("flex flex-col justify-center", isImageLeft ? "md:order-2" : "md:order-1")}>
          {badge && <Badge text={badge} />}
          <Heading className="mt-4 text-left">{heading}</Heading>
          {content && (
            <div className="prose prose-base dark:prose-invert mt-6 max-w-none">
              <RichText data={content} />
            </div>
          )}
          {ctaText && ctaLink && (
            <Link href={ctaLink} className="mt-6">
              <Button>{ctaText}</Button>
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
};
