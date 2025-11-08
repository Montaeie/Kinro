import React from "react";
import { Container } from "./container";
import { RichText } from '@payloadcms/richtext-lexical/react';
import type { Page } from "@/payload-types";
import { cn } from "@/lib/utils";

type RichContentBlock = Extract<
  NonNullable<Page["layout"]>[number],
  { blockType: "richContent" }
>;

export const RichContent: React.FC<RichContentBlock> = ({
  content,
  containerClass = "",
}) => {
  if (!content) {
    return null;
  }

  return (
    <Container className={cn("border-divide border-x px-8 py-10 md:py-20", containerClass)}>
      <div className="prose prose-base dark:prose-invert mx-auto max-w-4xl">
        <RichText data={content} />
      </div>
    </Container>
  );
};
