import { Badge } from "@/components/badge";
import { BookDemoButton } from "@/components/book-demo-button";
import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { SectionHeading } from "@/components/seciton-heading";
import { SubHeading } from "@/components/subheading";
import { getSEOTags } from "@/lib/seo";
import {
  GraphIcon,
  RocketIcon,
  CloudCheckIcon,
  SparklesIcon,
} from "@/icons/card-icons";

export const metadata = getSEOTags({
  title: "Revenue Attribution - Satsu",
  description:
    "Connect ChatGPT traffic to revenue. Measure ROI from AI optimization and prove the business impact of your ChatGPT presence.",
});

export default function RevenueAttributionPage() {
  const features = [
    {
      title: "Multi-Touch Attribution",
      description:
        "Track the full customer journey from ChatGPT research to conversion",
      icon: <GraphIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "ROI Calculation",
      description:
        "Calculate precise ROI from ChatGPT optimization efforts with revenue tracking",
      icon: <RocketIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Quality Scoring",
      description:
        "Measure not just traffic volume, but customer lifetime value by acquisition source",
      icon: <CloudCheckIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Cohort Analysis",
      description:
        "Compare conversion rates and deal sizes across different AI-attributed segments",
      icon: <SparklesIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
  ];

  return (
    <main>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="flex flex-col items-center px-4 py-20 md:px-8 md:py-40">
          <Badge text="Product" />
          <SectionHeading className="mt-4 text-center">
            Revenue Attribution
          </SectionHeading>
          <SubHeading className="mx-auto mt-6 max-w-2xl text-center">
            Stop guessing about ChatGPT's impact. Connect AI traffic to actual
            revenue with precise attribution and ROI measurement built for
            financial services.
          </SubHeading>
          <BookDemoButton className="mt-8">
            Book a Demo
          </BookDemoButton>
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="px-4 py-20 md:px-8 md:py-20">
            <h2 className="text-2xl font-semibold text-bg-dark dark:text-white">
              The Attribution Problem
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Traditional analytics can't measure ChatGPT's impact on your
              business. When prospects research on AI platforms:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                • There's no standard referrer information like Google Analytics
              </li>
              <li>
                • The research phase is completely invisible to your analytics
              </li>
              <li>• Users switch devices between research and conversion</li>
              <li>
                • Attribution models break down for AI-driven discovery
              </li>
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Without proper attribution, you can't prove ROI, justify budget, or
              optimize effectively.
            </p>
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="px-4 py-20 md:px-8 md:py-20">
            <h2 className="text-2xl font-semibold text-bg-dark dark:text-white">
              Our Approach
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-lg border border-bg-dark bg-transparent p-6 transition-all duration-200 hover:shadow-lg dark:border-brand dark:bg-transparent"
                >
                  <div className="flex items-center gap-3 text-bg-dark dark:text-brand">
                    {feature.icon}
                    <h3 className="text-lg font-semibold text-bg-dark dark:text-brand">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-bg-dark/90 dark:text-brand/90">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="px-4 py-20 md:px-8 md:py-20">
            <h2 className="text-2xl font-semibold text-bg-dark dark:text-white">
              Measurement Framework
            </h2>
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-bg-dark dark:text-white">
                  Layer 1: Presence Metrics
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Track mention rates, positioning quality, and coverage
                  completeness as leading indicators.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-bg-dark dark:text-white">
                  Layer 2: Traffic Attribution
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Connect ChatGPT research to website visits using direct
                  referrals, branded search uplift, and timing correlation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-bg-dark dark:text-white">
                  Layer 3: Revenue Impact
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Measure conversion rates, deal sizes, and customer lifetime
                  value for AI-attributed customers vs other channels.
                </p>
              </div>
            </div>
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="px-4 py-20 md:px-8 md:py-20">
            <h2 className="text-2xl font-semibold text-bg-dark dark:text-white">
              Typical ROI
            </h2>
            <div className="mt-8 rounded-lg bg-gray-50 p-8 dark:bg-neutral-800">
              <div className="text-center">
                <div className="text-brand text-5xl font-bold">9x</div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Average return on investment
                </p>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-bg-dark dark:text-white">
                    $500K
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Revenue from 100 new customers
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-bg-dark dark:text-white">
                    $50K
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Optimization investment
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-bg-dark dark:text-white">
                    $450K
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Net revenue impact
                  </p>
                </div>
              </div>
            </div>
        </div>
      </Container>
      <DivideX />
      <CTA />
      <DivideX />
    </main>
  );
}
