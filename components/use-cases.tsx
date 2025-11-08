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

export const UseCases = () => {
  const useCases = [
    {
      title: "D&O Insurance",
      description:
        "A salon owner asks: 'I need D&O insurance'. ChatGPT lists 5 competitors first. We identify why and fix it.",
      icon: <ShieldIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Mortgage Lending",
      description:
        "A homebuyer asks: 'Best mortgage for $1M home, $200k income'. ChatGPT recommends competitors. We analyze why.",
      icon: <GraphIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Pet Insurance",
      description:
        "Pet owner asks about pre-existing conditions. Your offer is mentioned but misrepresented. We fix the gap.",
      icon: <HeartHandsIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Home Insurance",
      description:
        "Homeowner compares providers. ChatGPT highlights competitor features better. We optimize representation.",
      icon: <DatabaseIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Business Credit",
      description:
        "Startup founder seeks rewards card. Your product fits but ChatGPT doesn't connect dots. We fix matching.",
      icon: <WalletIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Auto Insurance",
      description:
        "Driver asks about high-value vehicle coverage. Your niche is overlooked. We ensure expertise shows.",
      icon: <TruckIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
  ];
  const [activeUseCase, setActiveUseCase] = useState<number | null>(null);
  return (
    <Container className="border-divide relative overflow-hidden border-x px-4 md:px-8">
      <div className="relative flex flex-col items-center py-20">
        <Badge text="Use Cases" />
        <SectionHeading className="mt-4">
          Real Scenarios We Solve
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-2xl">
          From insurance to lending, we help financial services companies
          understand why prospects choose competitors and turn that insight into
          revenue
        </SubHeading>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              onMouseEnter={() => setActiveUseCase(index)}
              key={useCase.title}
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
                <div className="flex items-center gap-2 text-bg-dark dark:text-brand">{useCase.icon}</div>
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
