"use client";
import React from "react";
import { Container } from "./container";
import { LogoSVG } from "./logo";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./button";
import { AuthIllustration } from "./auth-illustration";
import { Textarea } from "./ui/textarea";
import type { Page } from "@/payload-types";

type ContactBlock = Extract<
  NonNullable<Page["layout"]>[number],
  { blockType: "contact" }
>;

export const Contact: React.FC<ContactBlock> = ({
  heading = "Get in touch",
  description = "Book a demo to learn how Satsu can help you understand why prospects drop off on ChatGPT and optimize your presence for measurable revenue growth.",
  namePlaceholder = "Your name",
  emailPlaceholder = "youremail@yourdomain.com",
  messagePlaceholder = "Your message",
  buttonText = "Send Message",
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <Container className="min-h-[calc(100vh-8rem)] py-10 md:py-20">
      <div className="grid grid-cols-1 gap-10 px-4 md:grid-cols-2 md:px-8 lg:gap-40">
        <div>
          <LogoSVG />
          <Heading className="mt-4 text-left lg:text-4xl">{heading}</Heading>
          <SubHeading as="p" className="mt-4 max-w-xl text-left">
            {description}
          </SubHeading>
          <form className="mt-6 flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="h-full w-full rounded-2xl">
              <Label>Name</Label>
              <Input
                type="text"
                className="mt-4 border-none focus:ring-gray-300"
                placeholder={namePlaceholder}
              />
            </div>
            <div className="h-full w-full rounded-2xl">
              <Label>Email</Label>
              <Input
                type="email"
                className="mt-4 border-none focus:ring-gray-300"
                placeholder={emailPlaceholder}
              />
            </div>
            <div className="h-full w-full rounded-2xl">
              <Label>Message</Label>
              <Textarea
                className="mt-4 border-none focus:ring-gray-300"
                placeholder={messagePlaceholder}
                rows={15}
              />
            </div>
            <Button>{buttonText}</Button>
          </form>
        </div>
        <AuthIllustration />
      </div>
    </Container>
  );
};
