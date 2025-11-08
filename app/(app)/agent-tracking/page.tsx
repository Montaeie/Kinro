import { Badge } from "@/components/badge";
import { BookDemoButton } from "@/components/book-demo-button";
import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { SectionHeading } from "@/components/seciton-heading";
import { SubHeading } from "@/components/subheading";
import { getSEOTags } from "@/lib/seo";
import {
  CloudCheckIcon,
  BellIcon,
  ScreenCogIcon,
  RocketIcon,
} from "@/icons/card-icons";

export const metadata = getSEOTags({
  title: "Agent Tracking - Satsu",
  description:
    "Advanced tracking for AI agent traffic. Go beyond UTM parameters to understand how LLMs visit your website and attribute conversions correctly.",
});

export default function AgentTrackingPage() {
  const features = [
    {
      title: "Agent Detection",
      description:
        "Identify AI agent visits that traditional analytics miss or misclassify",
      icon: <CloudCheckIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Session Reconstruction",
      description:
        "Connect research behavior to conversion events across devices and platforms",
      icon: <BellIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Real-Time Monitoring",
      description:
        "Track AI agent activity as it happens with instant alerts for important events",
      icon: <ScreenCogIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Custom Integration",
      description:
        "Seamlessly integrate with your existing analytics stack and CRM",
      icon: <RocketIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
  ];

  return (
    <main>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="flex flex-col items-center px-4 py-20 md:px-8 md:py-40">
          <Badge text="Product" />
          <SectionHeading className="mt-4 text-center">
            Agent Tracking
          </SectionHeading>
          <SubHeading className="mx-auto mt-6 max-w-2xl text-center">
            UTM parameters are just the beginning. Our advanced tracking
            understands how AI agents visit your website and connects their
            behavior to conversions.
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
              The Tracking Challenge
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              When ChatGPT visits your website to gather information for
              recommendations, traditional analytics fail:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                • AI agent visits are often classified as bot traffic and
                filtered out
              </li>
              <li>
                • There's no consistent referrer pattern like Google or Facebook
              </li>
              <li>
                • The visit happens days or weeks before the actual prospect
                converts
              </li>
              <li>
                • Standard UTM parameters don't capture agent-specific context
              </li>
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Luko (Europe's #1 online home insurer) discovered 20% of their
              traffic came from ChatGPT only after implementing specialized
              tracking. Most financial services companies are flying blind.
            </p>
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="px-4 py-20 md:px-8 md:py-20">
            <h2 className="text-2xl font-semibold text-bg-dark dark:text-white">
              Our Technology
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
              What We Track
            </h2>
            <div className="mt-8 space-y-6">
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-neutral-800">
                <h3 className="font-semibold text-bg-dark dark:text-white">
                  Agent Visits
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Identify when ChatGPT, Perplexity, or other AI agents crawl
                  your website. See which pages they visit and how long they spend.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-neutral-800">
                <h3 className="font-semibold text-bg-dark dark:text-white">
                  Information Extraction
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Understand which content agents extract and how they interpret
                  your information for recommendations.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-neutral-800">
                <h3 className="font-semibold text-bg-dark dark:text-white">
                  Prospect Correlation
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Connect agent visits to subsequent prospect visits and
                  conversions using advanced fingerprinting and timing analysis.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-neutral-800">
                <h3 className="font-semibold text-bg-dark dark:text-white">
                  Query Context
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  When possible, infer what question the agent was researching
                  based on visit patterns and page combinations.
                </p>
              </div>
            </div>
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="px-4 py-20 md:px-8 md:py-20">
            <h2 className="text-2xl font-semibold text-bg-dark dark:text-white">
              Implementation
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Getting started with Satsu Agent Tracking is straightforward:
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-bg-dark bg-transparent p-6 transition-all duration-200 hover:shadow-lg dark:border-transparent dark:bg-brand">
                <div className="text-brand mb-3 text-xl font-bold dark:text-white">Step 1</div>
                <h3 className="font-semibold text-bg-dark dark:text-white">
                  Minimal Setup
                </h3>
                <p className="mt-2 text-sm text-bg-dark/90 dark:text-white/90">
                  Add our lightweight tracking script to your website (similar to
                  Google Analytics).
                </p>
              </div>
              <div className="rounded-lg border border-bg-dark bg-transparent p-6 transition-all duration-200 hover:shadow-lg dark:border-transparent dark:bg-brand">
                <div className="text-brand mb-3 text-xl font-bold dark:text-white">Step 2</div>
                <h3 className="font-semibold text-bg-dark dark:text-white">
                  Integration
                </h3>
                <p className="mt-2 text-sm text-bg-dark/90 dark:text-white/90">
                  Connect your analytics and CRM for complete attribution
                  visibility.
                </p>
              </div>
              <div className="rounded-lg border border-bg-dark bg-transparent p-6 transition-all duration-200 hover:shadow-lg dark:border-transparent dark:bg-brand">
                <div className="text-brand mb-3 text-xl font-bold dark:text-white">Step 3</div>
                <h3 className="font-semibold text-bg-dark dark:text-white">
                  Insights
                </h3>
                <p className="mt-2 text-sm text-bg-dark/90 dark:text-white/90">
                  Start seeing AI agent activity and its impact on your revenue
                  within days.
                </p>
              </div>
            </div>
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="px-4 py-20 md:px-8 md:py-20">
            <h2 className="text-2xl font-semibold text-bg-dark dark:text-white">
              Privacy & Compliance
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Our tracking is designed with privacy and compliance in mind:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li>• GDPR and CCPA compliant</li>
              <li>• No personal data collection without consent</li>
              <li>
                • Agent tracking separate from user tracking for regulatory clarity
              </li>
              <li>
                • Clear opt-out mechanisms and data retention policies
              </li>
            </ul>
        </div>
      </Container>
      <DivideX />
      <CTA />
      <DivideX />
    </main>
  );
}
