import { Container } from "@/components/container";
import { Metadata } from "next";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";
import Link from "next/link";
import { Badge } from "@/components/badge";
import Image from "next/image";
import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: "Blog - Satsu | AI Distribution Intelligence Insights",
  description:
    "Insights on AI distribution intelligence, ChatGPT optimization, and how financial services companies can win in the LLM era.",
};
const truncate = (str: string, length: number) => {
  return str.length > length ? str.substring(0, length) + "..." : str;
};

export default async function BlogsPage() {
  const payload = await getPayload({ config: configPromise });

  const { docs: allBlogs } = await payload.find({
    collection: 'posts',
    where: {
      status: {
        equals: 'published'
      }
    },
    sort: '-publishedDate',
    limit: 100,
  });

  // Transform to match the expected format
  const transformedBlogs = allBlogs.map((post) => ({
    title: post.title,
    slug: post.slug,
    description: post.description,
    image: post.imageUrl || (typeof post.featuredImage === 'object' && post.featuredImage ? post.featuredImage.url : ''),
    date: post.publishedDate,
    authorName: post.author?.name || 'Pierre-Alexandre Kamienny',
    authorSrc: post.author?.avatarUrl || (typeof post.author?.avatar === 'object' && post.author?.avatar ? post.author.avatar.url : '/satsu-co-founder.png'),
  }));

  return (
    <div>
      <DivideX />
      <Container className="border-divide flex flex-col items-center border-x pt-10 md:pt-20 md:pb-10">
        <Badge text="Blog" />
        <Heading>AI Distribution Intelligence Insights</Heading>
        <SubHeading className="mx-auto mt-2 max-w-2xl px-4 text-center">
          Deep insights on ChatGPT optimization, LLM distribution strategies, and how
          financial services companies can turn invisible AI traffic into measurable
          revenue growth.
        </SubHeading>
        <div className="border-divide divide-divide mt-10 flex w-full flex-col divide-y border-y">
          <GridLayout blogs={transformedBlogs.slice(0, 3)} />
          {transformedBlogs.slice(3).map((blog, idx) => (
            <RowLayout key={blog.title} blog={blog} />
          ))}
        </div>
      </Container>

      <DivideX />
    </div>
  );
}

const GridLayout = ({ blogs }: { blogs: any[] }) => {
  return (
    <div className="divide-divide grid grid-cols-1 divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
      {blogs.map((blog, index) => (
        <Link
          key={blog.title}
          href={`/blog/${blog.slug}`}
          className="p-4 hover:bg-gray-50 md:p-8 dark:hover:bg-neutral-800"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            width={500}
            height={500}
            className="shadow-aceternity h-60 w-full rounded-lg object-cover md:h-80 lg:h-60"
          />
          <div>
            <h2 className="text-primary mt-2 text-lg font-medium tracking-tight">
              {blog.title}
            </h2>
            <p className="max-w-lg pt-2 text-base text-gray-600 md:text-sm dark:text-neutral-400">
              {truncate(blog.description || "", 100)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

const RowLayout = ({ blog }: { blog: any }) => {
  return (
    <Link
      key={blog.title}
      href={`/blog/${blog.slug}`}
      className="flex flex-col justify-between px-4 py-4 hover:bg-gray-50 md:flex-row md:items-center md:px-8 dark:hover:bg-neutral-800"
    >
      <div>
        <h2 className="text-primary text-lg font-medium tracking-tight">
          {blog.title}
        </h2>
        <p className="max-w-lg pt-2 text-base text-gray-600 md:text-sm dark:text-neutral-400">
          {truncate(blog.description || "", 150)}
        </p>
      </div>
      <div className="text-charcoal-700 mt-4 flex flex-col text-sm md:mt-0 md:text-sm dark:text-neutral-100">
        {new Date(blog.date || "").toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
        <div className="mt-2 flex items-center gap-1 md:justify-end">
          <Image
            src={blog.authorSrc as string}
            alt={blog.authorName as string}
            height={50}
            width={50}
            className="size-6 rounded-full"
          />
          <span className="text-gray-500 dark:text-neutral-400">
            {blog.authorName}
          </span>
        </div>
      </div>
    </Link>
  );
};
