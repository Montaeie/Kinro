import { Badge } from "@/components/badge";
import { BookDemoButton } from "@/components/book-demo-button";
import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { SectionHeading } from "@/components/seciton-heading";
import { SubHeading } from "@/components/subheading";
import { getSEOTags } from "@/lib/seo";
import {
  ReuseBrainIcon,
  SparklesIcon,
  ShieldIcon,
  ScreenCogIcon,
} from "@/icons/card-icons";

export const metadata = getSEOTags({
  title: "Content Strategy - Satsu",
  description:
    "Optimize your content for ChatGPT recommendations. Strategic content planning based on Google DeepMind research on how LLMs retrieve and rank information.",
});

export default function ContentStrategyPage() {
  const features = [
    {
      title: "LLM-Optimized Structure",
      description:
        "Format content for maximum retrievability by AI models based on DeepMind research",
      icon: <ReuseBrainIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Gap Analysis",
      description:
        "Identify missing information that prevents ChatGPT from recommending you",
      icon: <SparklesIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Credibility Building",
      description:
        "Strengthen trust signals that influence LLM ranking decisions",
      icon: <ShieldIcon className="size-6 text-bg-dark dark:text-brand" />,
    },
    {
      title: "Implementation Roadmap",
      description:
        "Prioritized action plan with specific content updates to maximize impact",
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
            Content Strategy
          </SectionHeading>
          <SubHeading className="mx-auto mt-6 max-w-2xl text-center">
            Content that ranks on Google fails in ChatGPT. We help you
            optimize for LLM retrieval using insights from Google DeepMind
            research on information ranking.
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
              Why Traditional SEO Fails
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Content optimized for Google rankings often performs poorly with
              LLMs because:
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-neutral-800">
                <h3 className="font-semibold text-bg-dark dark:text-white">
                  Format Mismatch
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Long-form keyword-optimized content is hard for LLMs to parse.
                  They prefer structured, comparative data.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-neutral-800">
                <h3 className="font-semibold text-bg-dark dark:text-white">
                  Gated Information
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Critical details behind forms or login walls are invisible to
                  AI platforms.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-neutral-800">
                <h3 className="font-semibold text-bg-dark dark:text-white">
                  Marketing Language
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  LLMs downrank vague marketing claims. They favor factual,
                  verifiable information.
                </p>
              </div>
            </div>
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="px-4 py-20 md:px-8 md:py-20">
            <h2 className="text-2xl font-semibold text-bg-dark dark:text-white">
              Our Optimization Framework
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
                The Gemini Optimization Principles
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
                From our founder's work improving Gemini at Google DeepMind, we've
                identified three core principles that drive LLM content optimization
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
                  Verifiability
                </h3>
                <p className="mt-3 text-center text-sm text-bg-dark/90 dark:text-white/90">
                  Every claim must be checkable against other sources,
                  timestamped, specific, and attributed when appropriate
                </p>
              </div>
              <div className="rounded-lg border border-bg-dark bg-transparent p-6 transition-all duration-200 hover:shadow-lg dark:border-transparent dark:bg-brand">
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl font-bold text-white dark:bg-white dark:text-brand">
                    2
                  </div>
                </div>
                <h3 className="text-center text-xl font-semibold text-bg-dark dark:text-white">
                  Comprehensiveness
                </h3>
                <p className="mt-3 text-center text-sm text-bg-dark/90 dark:text-white/90">
                  Content must address the main question, obvious follow-ups,
                  edge cases, and alternatives with trade-offs
                </p>
              </div>
              <div className="rounded-lg border border-bg-dark bg-transparent p-6 transition-all duration-200 hover:shadow-lg dark:border-transparent dark:bg-brand">
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl font-bold text-white dark:bg-white dark:text-brand">
                    3
                  </div>
                </div>
                <h3 className="text-center text-xl font-semibold text-bg-dark dark:text-white">
                  Accessibility
                </h3>
                <p className="mt-3 text-center text-sm text-bg-dark/90 dark:text-white/90">
                  Information must be publicly available, machine-parseable,
                  regularly maintained, and properly marked up
                </p>
              </div>
            </div>
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide border-x">
        <div className="px-4 py-20 md:px-8 md:py-20">
            <h2 className="text-2xl font-semibold text-bg-dark dark:text-white">
              Typical Results
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-neutral-800">
                <div className="text-brand text-3xl font-bold">25-40%</div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Improvement in ChatGPT recommendation rates
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-neutral-800">
                <div className="text-brand text-3xl font-bold">3-6 months</div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  To see measurable impact
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-neutral-800">
                <div className="text-brand text-3xl font-bold">10-20%</div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Increase in conversion rates
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
