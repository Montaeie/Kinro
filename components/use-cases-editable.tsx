"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import {
  DevopsIcon,
  PhoneIcon,
  TruckIcon,
  DatabaseIcon,
  WalletIcon,
  GraphIcon,
  ShieldIcon,
  HeartHandsIcon,
} from "@/icons/card-icons";
import { Scale } from "./scale";
import { motion } from "motion/react";
import type { UseCasesBlock } from "@/payload-types";

type UseCasesProps = Partial<UseCasesBlock> & {
  blockType?: string;
  id?: string;
};

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  shield: <ShieldIcon className="size-6 text-bg-dark dark:text-brand" />,
  graph: <GraphIcon className="size-6 text-bg-dark dark:text-brand" />,
  heart: <HeartHandsIcon className="size-6 text-bg-dark dark:text-brand" />,
  database: <DatabaseIcon className="size-6 text-bg-dark dark:text-brand" />,
  wallet: <WalletIcon className="size-6 text-bg-dark dark:text-brand" />,
  truck: <TruckIcon className="size-6 text-bg-dark dark:text-brand" />,
  phone: <PhoneIcon className="size-6 text-bg-dark dark:text-brand" />,
  devops: <DevopsIcon className="size-6 text-bg-dark dark:text-brand" />,
};

export const UseCases = (props: UseCasesProps = {}) => {
  const {
    badge = "Use Cases",
    heading = "Real Scenarios We Solve",
    subheading = "From insurance to lending, we help financial services companies understand why prospects choose competitors and turn that insight into revenue",
    cases = [
      {
        title: "D&O Insurance",
        description: "A salon owner asks: 'I need D&O insurance'. ChatGPT lists 5 competitors first. We identify why and fix it.",
        icon: "shield",
      },
      {
        title: "Mortgage Lending",
        description: "A homebuyer asks: 'Best mortgage for $1M home, $200k income'. ChatGPT recommends competitors. We analyze why.",
        icon: "graph",
      },
      {
        title: "Pet Insurance",
        description: "Pet owner asks about pre-existing conditions. Your offer is mentioned but misrepresented. We fix the gap.",
        icon: "heart",
      },
      {
        title: "Home Insurance",
        description: "Homeowner compares providers. ChatGPT highlights competitor features better. We optimize representation.",
        icon: "database",
      },
      {
        title: "Business Credit",
        description: "Startup founder seeks rewards card. Your product fits but ChatGPT doesn't connect dots. We fix matching.",
        icon: "wallet",
      },
      {
        title: "Auto Insurance",
        description: "Driver asks about high-value vehicle coverage. Your niche is overlooked. We ensure expertise shows.",
        icon: "truck",
      },
    ],
  } = props;

  const [activeUseCase, setActiveUseCase] = useState<number | null>(null);
  const casesList = Array.isArray(cases) ? cases : [];

  return (
    <Container className="border-divide relative overflow-hidden border-x px-4 md:px-8">
      <div className="relative flex flex-col items-center py-20">
        <Badge text={badge} />
        <SectionHeading className="mt-4">{heading}</SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-2xl">
          {subheading}
        </SubHeading>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {casesList.map((useCase, index) => (
            <div
              onMouseEnter={() => setActiveUseCase(index)}
              key={useCase.title || `case-${index}`}
              className="relative flex"
            >
              {activeUseCase === index && (
                <motion.div
                  layoutId="scale"
                  className="absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  <Scale />
                </motion.div>
              )}
              <div className="relative z-10 flex h-full w-full flex-col rounded-lg border border-bg-dark bg-transparent p-4 transition-all duration-200 hover:shadow-lg md:p-5 dark:border-brand dark:bg-transparent">
                <div className="flex items-center gap-2 text-bg-dark dark:text-brand">
                  {iconMap[useCase.icon || "shield"] || iconMap.shield}
                </div>
                <h3 className="mt-4 mb-2 text-lg font-medium text-bg-dark dark:text-brand">
                  {useCase.title}
                </h3>
                <p className="text-sm text-bg-dark/90 dark:text-brand/90">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
