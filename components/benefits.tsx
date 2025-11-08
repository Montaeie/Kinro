"use client";
import React, { useEffect, useState } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import {
  RocketIcon,
  GraphIcon,
  ShieldIcon,
  ReuseBrainIcon,
  ScreenCogIcon,
  BellIcon,
} from "@/icons/card-icons";
import { Scale } from "./scale";
import { AnimatePresence, motion } from "motion/react";
import { RealtimeSyncIcon } from "@/icons/bento-icons";
import { DivideX } from "./divide";
import { LogoSVG } from "./logo";
import { OpenAILogo, SlackLogo } from "@/icons/general";
import { IconBlock } from "./common/icon-block";
import { HorizontalLine } from "./common/horizontal-line";
import { VerticalLine } from "./common/vertical-line";

export const Benefits = () => {
  const benefits = [
    {
      title: "Revenue Impact First",
      description:
        "Every recommendation directly increases deal closure rates and average contract value—no fluff, just ROI",
      icon: <GraphIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "High-Intent Buyers Only",
      description:
        "Track conversations from prospects actively seeking solutions, not passive browsers—the ones who sign contracts",
      icon: <RealtimeSyncIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Enterprise Deal Focus",
      description:
        "Optimize for the 20% of clients who drive 80% of your revenue—not average ticket size",
      icon: <RocketIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Financial Services DNA",
      description:
        "Deep expertise in insurance, lending, wealth management—industries where one client = $50K-$500K+ lifetime value",
      icon: <ShieldIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Win Rate Optimization",
      description:
        "Ensure prospects choose you over competitors when making buying decisions, not just discovering you exist",
      icon: <ReuseBrainIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Implementation Roadmap",
      description:
        "Get a step-by-step playbook to capture lost deals this quarter, not vague suggestions or endless analytics",
      icon: <ScreenCogIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
  ];
  return (
    <Container className="border-divide relative overflow-hidden border-x px-4 py-20 md:px-8">
      <div className="relative flex flex-col items-center">
        <Badge text="Why Satsu" />
        <SectionHeading className="mt-4">
          Revenue Growth, Not Vanity Metrics
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-2xl">
          Every insight ties directly to revenue impact. We optimize for <span className="font-semibold text-brand">$$$ in your bank account</span>, not impressions on a dashboard. Built by AI researchers who deployed systems at Google and fintech founders who scaled companies to 8-figure exits.
        </SubHeading>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="grid auto-rows-fr grid-cols-1 gap-4">
          {benefits.slice(0, 3).map((benefit, index) => (
            <Card key={benefit.title} {...benefit} />
          ))}
        </div>
        <MiddleCard />
        <div className="grid auto-rows-fr grid-cols-1 gap-4">
          {benefits.slice(3, 6).map((benefit, index) => (
            <Card key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </Container>
  );
};

const MiddleCard = () => {
  const texts = ["Query tracked", "Sources analyzed", "Insights generated"];
  const [activeText, setActiveText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveText((prev) => (prev + 1) % texts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative flex min-h-40 flex-col justify-end overflow-hidden rounded-lg border border-bg-dark bg-transparent p-4 md:p-5 dark:border-transparent dark:bg-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px] shadow-xl"></div>

      {/* ChatGPT -> Satsu Connection */}
      <div className="flex items-center justify-center">
        <IconBlock
          icon={
            <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
            </svg>
          }
        />
        <HorizontalLine />
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-gray-200 p-px shadow-xl dark:bg-neutral-700">
          <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic [background-image:conic-gradient(at_center,transparent,var(--color-brand)_20%,transparent_30%)] [animation-duration:2s]"></div>
          <div className="via-brand absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic [background-image:conic-gradient(at_center,transparent,var(--color-brand)_40%,transparent_50%)] [animation-delay:1s] [animation-duration:2s]"></div>
          <div className="relative z-20 flex h-full w-full items-center justify-center rounded-[5px] bg-bg-light dark:bg-neutral-900">
            <LogoSVG />
          </div>
        </div>
        <HorizontalLine />
        <IconBlock
          icon={
            <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
        />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center">
        <VerticalLine />
        <div className="rounded-sm border border-green-500 bg-green-50 px-2 py-0.5 text-xs text-green-600 dark:bg-green-900/30 dark:text-green-400">
          Tracking Active
        </div>
      </div>
      <div className="h-60 w-full translate-x-10 translate-y-10 overflow-hidden rounded-md bg-gray-200 p-px shadow-xl dark:bg-neutral-700">
        <div className="via-brand absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic from-transparent via-20% to-transparent to-30% blur-2xl [animation-duration:4s]"></div>
        <div className="via-brand absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic from-transparent via-40% to-transparent to-50% blur-2xl [animation-delay:2s] [animation-duration:4s]"></div>
        <div className="relative z-20 h-full w-full rounded-[5px] bg-bg-light dark:bg-neutral-900">
          <div className="flex items-center justify-between p-4">
            <div className="flex gap-1">
              <div className="size-2 rounded-full bg-red-400"></div>
              <div className="size-2 rounded-full bg-yellow-400"></div>
              <div className="size-2 rounded-full bg-green-400"></div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                className="shadow-aceternity mr-2 flex items-center gap-1 rounded-sm bg-bg-light px-2 py-1 text-xs text-neutral-500 dark:bg-neutral-700 dark:text-white"
                key={activeText}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <BellIcon className="size-3 text-brand" />
                </motion.div>
                <motion.span key={activeText}>{texts[activeText]}</motion.span>
              </motion.div>
            </AnimatePresence>
          </div>
          <DivideX />
          <div className="flex h-full flex-row">
            <div className="h-full w-14 bg-gray-200 dark:bg-neutral-800" />
            <motion.div className="w-full gap-y-4 p-4">
              <h2 className="text-sm font-semibold text-gray-800 dark:text-neutral-300">
                Analytics
              </h2>

              <div className="mt-4 flex flex-col gap-y-3 mask-b-from-50%">
                {[
                  { label: "ChatGPT Queries", width: 78 },
                  { label: "Conversion Rate", width: 65 },
                  { label: "Market Position", width: 82 },
                ].map((item, index) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-700">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.width}%` }}
                        transition={{
                          duration: 1.5,
                          delay: 0.5 + index * 0.15,
                          ease: "easeOut",
                        }}
                        className="bg-brand h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = (props: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  const { title, description, icon } = props;
  return (
    <div className="relative z-10 flex h-full flex-col rounded-lg border border-bg-dark bg-transparent p-4 transition-all duration-200 hover:shadow-lg md:p-5 dark:border-brand dark:bg-transparent">
      <div className="flex items-center gap-2 text-bg-dark dark:text-brand">
        {icon}
      </div>
      <h3 className="mt-4 mb-2 text-lg font-medium text-bg-dark dark:text-brand">{title}</h3>
      <p className="text-sm text-bg-dark/90 dark:text-brand/90">{description}</p>
    </div>
  );
};
