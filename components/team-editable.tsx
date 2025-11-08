"use client";

import React from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import Image from "next/image";
import { motion } from "motion/react";
import type { TeamBlock } from "@/payload-types";

type TeamProps = Partial<TeamBlock> & {
  blockType?: string;
  id?: string;
};

export const Team = (props: TeamProps = {}) => {
  const {
    badge = "Leadership",
    heading = "Led by Google DeepMind AI Research",
    subheading = "Deep expertise in large language models and their application to financial services distribution.",
    founderName = "Pierre-Alexandre Kamienny",
    founderTitle = "Founder",
    founderImage = "/satsu-co-founder.png",
    scholarLink = "https://scholar.google.com",
    founderBio = "Research scientist at Google DeepMind, where he worked on improving Gemini for real-world applications. Previously at FAIR (Meta AI Research) with an Oxford PhD in Large Language Models.",
    citations = [
      {
        count: "469",
        description: "Multi-agent reinforcement learning (NeurIPS)",
      },
      {
        count: "283",
        description: "Symbolic regression with transformers (NeurIPS)",
      },
      {
        count: "101",
        description: "Deep symbolic regression (ICML)",
      },
    ],
    whyThisMatters = "Pierre-Alexandre's deep understanding of how LLMs retrieve and rank information is exactly what financial services need to win in ChatGPT and other AI platforms.",
  } = props;

  const citationsList = Array.isArray(citations) ? citations : [];

  return (
    <Container className="border-divide border-x px-4 py-20 md:px-8 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center">
          <Badge text={badge} />
          <SectionHeading className="mt-4">{heading}</SectionHeading>
          <SubHeading className="mx-auto mt-6 max-w-2xl">
            {subheading}
          </SubHeading>
        </div>

        {/* Founder Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          <div className="flex flex-col items-center justify-center lg:items-end">
            <div className="border-divide w-full max-w-md rounded-2xl border p-2">
              <Image
                src={founderImage}
                alt={founderName}
                width={500}
                height={500}
                className="h-full rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-semibold text-bg-dark dark:text-white">
                  {founderName}
                </h3>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                  {founderTitle}
                </p>
                <a
                  href={scholarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand mt-3 inline-block text-sm hover:underline"
                >
                  Google Scholar Profile
                </a>
              </div>
              <div>
                <p className="text-base leading-relaxed text-bg-dark dark:text-gray-300">
                  {founderBio}
                </p>
              </div>
              {citationsList.length > 0 && (
                <div>
                  <h4 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
                    Key Research Impact
                  </h4>
                  <ul className="space-y-2 text-sm text-bg-dark dark:text-gray-300">
                    {citationsList.map((citation, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand mr-2 mt-1">•</span>
                        <span>
                          <strong>{citation.count} citations</strong> - {citation.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="border-divide rounded-lg border bg-bg-light p-4 dark:bg-neutral-900">
                <p className="text-sm leading-relaxed text-bg-dark dark:text-gray-300">
                  <strong className="text-brand">Why this matters:</strong> {whyThisMatters}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};
