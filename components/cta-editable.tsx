"use client";

import React from "react";
import { Container } from "./container";
import { SectionHeading } from "./seciton-heading";
import { BookDemoButton } from "./book-demo-button";
import { CTAOrbit } from "./cta";
import type { CTABlock } from "@/payload-types";

type CTAProps = Partial<CTABlock> & {
  blockType?: string;
  id?: string;
};

export const CTA = (props: CTAProps = {}) => {
  const {
    heading = "Ready to Stop Losing \n Clients to ChatGPT?",
    subheading = "Get your first insights within 2 weeks. No setup fees for October partners.",
    buttonText = "Book Your Demo",
  } = props;

  // Split heading by line breaks and render with <br /> tags
  const headingLines = heading.split('\n');

  return (
    <Container className="border-divide relative flex min-h-60 flex-col items-center justify-center overflow-hidden border-x px-4 py-4 md:min-h-120">
      <CTAOrbit className="absolute inset-x-0 -top-120 mask-b-from-30%" />
      <SectionHeading className="relative z-10 text-center lg:text-6xl">
        {headingLines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < headingLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </SectionHeading>
      <p className="relative z-10 mt-4 max-w-xl text-center text-sm text-gray-600 dark:text-gray-400">
        {subheading}
      </p>
      <BookDemoButton className="relative z-20 mt-6">
        {buttonText}
      </BookDemoButton>
    </Container>
  );
};
