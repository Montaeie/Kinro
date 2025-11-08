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
  ShieldIcon,
  ScreenCogIcon,
} from "@/icons/card-icons";

export const metadata = getSEOTags({
  title: "ChatGPT Analytics - Satsu",
  description:
    "Track and measure your ChatGPT presence. Understand how prospects research your financial services on AI platforms and optimize for measurable revenue growth.",
});

export default function ChatGPTAnalyticsPage() {
  const features = [
    {
      title: "Conversation Tracking",
      description:
        "Monitor real multi-turn ChatGPT conversations where prospects research your services",
      icon: <GraphIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Mention Analysis",
      description:
        "See when and how your company is recommended compared to competitors",
      icon: <RocketIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Drop-off Detection",
      description:
        "Identify exactly where in the conversation prospects choose competitors over you",
      icon: <ShieldIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Performance Metrics",
      description:
        "Track recommendation rates, positioning quality, and conversion impact over time",
      icon: <ScreenCogIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
  ];

  return (
    <main>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="flex flex-col items-center px-4 py-20 md:px-8 md:py-40">
          <Badge text="Product" />
          <SectionHeading className="mt-4 text-center">
            ChatGPT Analytics
          </SectionHeading>
          <SubHeading className="mx-auto mt-6 max-w-2xl text-center">
            Most financial services companies are blind to the 20%+ of prospects
            researching them on ChatGPT. We make this invisible traffic visible
            and actionable.
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
              The Challenge
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              57% of consumers now use AI before making purchase decisions. When
              someone asks ChatGPT "What's the best home insurance for young
              professionals in Seattle?", you have no idea:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li>• If your company was even considered</li>
              <li>• How you were positioned vs competitors</li>
              <li>• Where in the conversation they decided against you</li>
              <li>• What information was missing or inaccurate</li>
            </ul>
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="px-4 py-20 md:px-8 md:py-20">
            <h2 className="text-2xl font-semibold text-bg-dark dark:text-white">
              Our Solution
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
              Real Impact
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Leading financial services companies using Satsu's ChatGPT Analytics:
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-neutral-800">
                <div className="text-brand text-3xl font-bold">20-30%</div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Increase in qualified traffic
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-neutral-800">
                <div className="text-brand text-3xl font-bold">15-20%</div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Higher conversion rates
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-neutral-800">
                <div className="text-brand text-3xl font-bold">30-40%</div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Reduction in CAC
                </p>
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
