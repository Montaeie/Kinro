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
  ShieldIcon,
  TelescopeIcon,
  BellIcon,
} from "@/icons/card-icons";

export const metadata = getSEOTags({
  title: "Competitive Intelligence - Satsu",
  description:
    "Understand how ChatGPT positions you against competitors. See what prospects learn about alternatives and optimize your competitive positioning.",
});

export default function CompetitiveIntelligencePage() {
  const features = [
    {
      title: "Competitive Benchmarking",
      description:
        "See how often you're recommended vs competitors across different use cases",
      icon: <GraphIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Positioning Analysis",
      description:
        "Understand how ChatGPT describes your strengths and weaknesses relative to alternatives",
      icon: <TelescopeIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Gap Identification",
      description:
        "Discover what information competitors provide that you're missing",
      icon: <ShieldIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Alert System",
      description:
        "Get notified when competitor positioning changes or new players enter the conversation",
      icon: <BellIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
  ];

  return (
    <main>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="flex flex-col items-center px-4 py-20 md:px-8 md:py-40">
          <Badge text="Product" />
          <SectionHeading className="mt-4 text-center">
            Competitive Intelligence
          </SectionHeading>
          <SubHeading className="mx-auto mt-6 max-w-2xl text-center">
            Know exactly how ChatGPT positions you against competitors. See
            what prospects learn during their research and optimize your
            competitive advantage.
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
              The Blind Spot
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              When prospects ask ChatGPT for recommendations, they're conducting
              comparative research you can't see. The model evaluates 20+
              sources but only cites 3-5 in its response. If you're not in that
              final shortlist, you've lost the prospect before they ever visited
              your website.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Traditional competitive intelligence tools track search rankings
              and ad spend. But they can't tell you what happens inside
              ChatGPT's black box—where the actual buying decisions are being made.
            </p>
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="px-4 py-20 md:px-8 md:py-20">
            <h2 className="text-2xl font-semibold text-bg-dark dark:text-white">
              What We Track
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
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-bg-dark dark:text-white">
                Strategic Advantages
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
                Turn competitive intelligence into actionable strategies that drive market share growth
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-bg-dark bg-transparent p-6 transition-all duration-200 hover:shadow-lg dark:border-transparent dark:bg-brand">
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl font-bold text-white dark:bg-white dark:text-brand">
                    1
                  </div>
                </div>
                <h3 className="text-center text-xl font-semibold text-bg-dark dark:text-white">
                  Market Share Insights
                </h3>
                <p className="mt-3 text-center text-sm text-bg-dark/90 dark:text-white/90">
                  See which competitors are winning in ChatGPT recommendations
                  across different customer segments and use cases
                </p>
              </div>
              <div className="rounded-lg border border-bg-dark bg-transparent p-6 transition-all duration-200 hover:shadow-lg dark:border-transparent dark:bg-brand">
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl font-bold text-white dark:bg-white dark:text-brand">
                    2
                  </div>
                </div>
                <h3 className="text-center text-xl font-semibold text-bg-dark dark:text-white">
                  Positioning Optimization
                </h3>
                <p className="mt-3 text-center text-sm text-bg-dark/90 dark:text-white/90">
                  Understand your differentiation gaps and optimize content to
                  improve comparative positioning
                </p>
              </div>
              <div className="rounded-lg border border-bg-dark bg-transparent p-6 transition-all duration-200 hover:shadow-lg dark:border-transparent dark:bg-brand">
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl font-bold text-white dark:bg-white dark:text-brand">
                    3
                  </div>
                </div>
                <h3 className="text-center text-xl font-semibold text-bg-dark dark:text-white">
                  Defensive Strategy
                </h3>
                <p className="mt-3 text-center text-sm text-bg-dark/90 dark:text-white/90">
                  Get alerted when competitors make strategic moves that improve
                  their ChatGPT presence
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
