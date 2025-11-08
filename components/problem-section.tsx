"use client";
import React from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import { motion } from "motion/react";

export const ProblemSection = () => {
  const stages = [
    {
      title: "User Question",
      invisible: false,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Thinking",
      invisible: false,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Web Search",
      note: "20+ sites",
      invisible: true,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: "Sources Selected",
      note: "3-5 chosen",
      invisible: true,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Answer Generated",
      invisible: false,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <Container className="border-divide border-x">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
        {/* Left: Text */}
        <div className="flex flex-col justify-center px-4 py-20 md:px-8 lg:border-r lg:border-divide">
          <Badge text="The Problem" />
          <SectionHeading className="mt-4 text-left">
            The Hidden LLM Funnel
          </SectionHeading>
          <SubHeading className="mt-6 text-left">
            When a prospect asks ChatGPT about your services, here's what really
            happens—and why you're losing them without knowing it
          </SubHeading>

          {/* Stats */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-brand text-3xl font-bold">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Sites visited per query
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-brand text-3xl font-bold">3-5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Sources actually used
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-brand text-3xl font-bold">80%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Process invisible to you
              </div>
            </div>
          </div>
        </div>

        {/* Right: Schema */}
        <div className="flex items-center justify-center px-4 py-20 md:px-8">
          <div className="relative w-full max-w-sm">
            <div className="space-y-3">
              {stages.map((stage, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Animated Connector Line */}
                  {i < stages.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "12px" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.15 + 0.2 }}
                      className="absolute left-1/2 bottom-0 w-px translate-y-full bg-gradient-to-b from-gray-300 to-transparent dark:from-neutral-600"
                    />
                  )}

                  <motion.div
                    className="rounded-lg border border-bg-dark bg-bg-light px-4 py-3 transition-all duration-300 dark:border-neutral-700 dark:bg-neutral-900"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          delay: i * 0.15 + 0.1,
                        }}
                        className="text-gray-600 dark:text-gray-400"
                      >
                        {stage.icon}
                      </motion.div>
                      <div className="text-sm font-medium">{stage.title}</div>
                    </div>
                    {stage.note && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.3 }}
                        className="mt-1 text-center text-xs text-gray-500"
                      >
                        {stage.note}
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}

              {/* Animated Final Outcome */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: stages.length * 0.15 }}
                className="relative"
              >
                {/* Pulsing glow */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 -z-10 rounded-lg bg-gray-500/20 blur-xl dark:bg-gray-400/20"
                />

                <motion.div
                  whileInView={{
                    scale: [1, 1.02, 1],
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: stages.length * 0.15 + 0.5,
                  }}
                  className="rounded-lg border border-bg-dark bg-bg-light px-4 py-3 transition-all duration-300 dark:border-neutral-700 dark:bg-neutral-900"
                >
                  <div className="flex items-center justify-center gap-2">
                    <motion.svg
                      initial={{ rotate: 0 }}
                      whileInView={{ rotate: 360 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: stages.length * 0.15 + 0.2,
                      }}
                      className="h-5 w-5 text-gray-600 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </motion.svg>
                    <div className="text-sm font-bold text-gray-900 dark:text-neutral-100">
                      Competitor Recommended
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
