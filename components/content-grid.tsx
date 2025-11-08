import React from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import type { Page } from "@/payload-types";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ContentGridBlock = Extract<
  NonNullable<Page["layout"]>[number],
  { blockType: "contentGrid" }
>;

export const ContentGrid: React.FC<ContentGridBlock> = ({
  heading,
  subheading,
  columns = '3',
  items = [],
  backgroundColor = 'transparent',
}) => {
  const bgClass = backgroundColor === 'gray'
    ? 'bg-gray-50 dark:bg-neutral-900'
    : backgroundColor === 'white'
    ? 'bg-white dark:bg-neutral-950'
    : '';

  const colsClass = columns === '2'
    ? 'md:grid-cols-2'
    : columns === '4'
    ? 'md:grid-cols-2 lg:grid-cols-4'
    : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <Container className={cn("border-divide border-x px-4 py-10 md:px-8 md:py-20", bgClass)}>
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

      <div className={cn("grid grid-cols-1 gap-6", colsClass)}>
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-6 transition duration-200 hover:border-gray-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
          >
            {item.icon && (
              <div className="mb-4 text-4xl">{item.icon}</div>
            )}
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-neutral-100">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-neutral-400">
              {item.description}
            </p>
            {item.link && (
              <Link
                href={item.link}
                className="mt-4 inline-block text-sm font-medium text-brand hover:underline"
              >
                {item.linkText || 'Learn more'} →
              </Link>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};
