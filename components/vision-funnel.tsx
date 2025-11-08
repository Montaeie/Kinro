"use client";
import React from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import { motion } from "motion/react";

export const VisionFunnel = () => {
  const funnelSteps = ["Search", "Evaluation", "Quote", "Subscription"];

  const stages = [
    {
      phase: "Before",
      activeSteps: [], // No control
    },
    {
      phase: "Now",
      activeSteps: [0, 1], // Search & Evaluation only
    },
    {
      phase: "Then",
      activeSteps: [0, 1, 2, 3], // Full funnel control
    },
  ];

  return (
    <Container className="border-divide border-x">
      <div className="px-4 py-20 md:px-8 md:py-20">
        <div className="text-center mb-16">
          <Badge text="Vision du Futur" />
          <SectionHeading className="mt-4">
            Service subscription journey is shifting
          </SectionHeading>
          <SubHeading className="mx-auto mt-6 max-w-2xl">
            → From recommendation to fully integrated funnel
          </SubHeading>
        </div>

        {/* Three Column Funnel */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-12">
          {stages.map((stage, stageIndex) => (
            <motion.div
              key={stage.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stageIndex * 0.15 }}
            >
              <div className="rounded-xl border border-bg-dark bg-transparent p-6 dark:border-brand">
                {/* Phase Label */}
                <div className="mb-8 inline-flex items-center rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-300">
                  {stage.phase}
                </div>

                {/* Funnel Steps */}
                <div className="space-y-4">
                  {funnelSteps.map((step, stepIndex) => {
                    const isActive = stage.activeSteps.includes(stepIndex);

                    return (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: stageIndex * 0.15 + stepIndex * 0.1 }}
                        className={`relative rounded-lg border px-4 py-3 text-center text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "border-brand bg-brand/10 text-brand shadow-lg dark:border-brand dark:bg-brand/20 dark:text-brand"
                            : "border-gray-300 bg-white text-gray-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-400"
                        }`}
                      >
                        {step}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom explanation */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-bg-dark dark:text-white">Before:</span> No visibility or control.{" "}
            <span className="font-semibold text-bg-dark dark:text-white">Now:</span> Partial integration.{" "}
            <span className="font-semibold text-brand">Then:</span> Full funnel ownership with Satsu.
          </p>
        </div>
      </div>
    </Container>
  );
};
