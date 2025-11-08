import React from "react";
import { Container } from "./container";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import type { Page } from "@/payload-types";
import { cn } from "@/lib/utils";

type StatsBlock = Extract<
  NonNullable<Page["layout"]>[number],
  { blockType: "stats" }
>;

export const Stats: React.FC<StatsBlock> = ({
  heading,
  subheading,
  stats = [],
  layout = 'horizontal',
}) => {
  const isGrid = layout === 'grid';

  return (
    <Container className="border-divide border-x px-4 py-10 md:px-8 md:py-20">
      {(heading || subheading) && (
        <div className="mb-12 text-center">
          {heading && <SectionHeading>{heading}</SectionHeading>}
          {subheading && (
            <SubHeading className="mx-auto mt-4 max-w-2xl">
              {subheading}
            </SubHeading>
          )}
        </div>
      )}

      <div className={cn(
        "mx-auto max-w-5xl",
        isGrid
          ? "grid grid-cols-2 gap-8 md:grid-cols-3"
          : "flex flex-wrap justify-center gap-12 md:gap-20"
      )}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={cn(
              "text-center",
              isGrid ? "" : "flex flex-col items-center"
            )}
          >
            <div className="text-4xl font-bold text-brand md:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-neutral-400">
              {stat.label}
            </div>
            {stat.description && (
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                {stat.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};
